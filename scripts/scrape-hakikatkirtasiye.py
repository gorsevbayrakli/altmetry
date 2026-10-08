#!/usr/bin/env python3
"""Download public catalogue data from hakikatkirtasiye.com (IdeaSoft store).

Sources:
  1. /sitemap.xml index -> product, image, category, brand, static, tag sitemaps
  2. Top-level category listing pages (?tp=N) -> name, brand, price, image, id

Output (in OUT_DIR):
  products.csv / products.json   merged product records
  categories.csv, brands.csv, pages.csv

Usage: python3 scripts/scrape-hakikatkirtasiye.py [OUT_DIR] [DELAY_SECONDS]
"""
import csv
import html
import json
import os
import re
import sys
import time
import urllib.request

BASE = "https://www.hakikatkirtasiye.com"
OUT_DIR = sys.argv[1] if len(sys.argv) > 1 else "data/hakikatkirtasiye"
DELAY = float(sys.argv[2]) if len(sys.argv) > 2 else 3.0
TOP_CATEGORIES = [
    "hediyelik-urunler", "kombin", "teknik", "ofis", "okul", "sanat",
    "hobi", "maket", "kitap", "geleneksel", "defter",
]
UA = "Mozilla/5.0 (compatible; catalogue-export/1.0)"

_last = 0.0


def fetch(url):
    global _last
    wait = DELAY - (time.time() - _last)
    if wait > 0:
        time.sleep(wait)
    for attempt in range(4):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA})
            with urllib.request.urlopen(req, timeout=60) as r:
                _last = time.time()
                return r.read().decode("utf-8", "replace")
        except Exception as e:  # noqa: BLE001
            print(f"  retry {attempt + 1} {url}: {e}", flush=True)
            time.sleep(2 ** (attempt + 1))
    _last = time.time()
    return ""


def locs(xml):
    return re.findall(r"<loc>([^<]+)</loc>", xml)


def clean(s):
    return html.unescape(re.sub(r"\s+", " ", re.sub(r"<[^>]+>", "", s))).strip()


def parse_price(s):
    m = re.search(r"([\d.]+,\d{2})", s or "")
    return float(m.group(1).replace(".", "").replace(",", ".")) if m else None


def sitemaps():
    index = fetch(f"{BASE}/sitemap.xml")
    groups = {}
    for u in locs(index):
        kind = re.search(r"sitemap_([A-Za-z]+)_", u).group(1)
        groups.setdefault(kind, []).append(u)
    return groups


def parse_url_sitemap(xml):
    rows = []
    for block in re.findall(r"<url>(.*?)</url>", xml, re.S):
        loc = re.search(r"<loc>([^<]+)</loc>", re.sub(r"<image:image>.*?</image:image>", "", block, flags=re.S))
        url = loc.group(1) if loc else ""
        lastmod = re.search(r"<lastmod>([^<]+)</lastmod>", block)
        images = re.findall(r"<image:loc>([^<]+)</image:loc>", block)
        rows.append({"url": html.unescape(url), "lastmod": lastmod.group(1) if lastmod else "",
                     "images": [html.unescape(i) for i in images]})
    return rows


def parse_listing(page, category):
    out = []
    for card in re.split(r'<div class="showcase">', page)[1:]:
        href = re.search(r'href="(/urun/[^"]+)"', card)
        if not href:
            continue
        title = re.search(r'class="showcase-title">\s*<a[^>]*>(.*?)</a>', card, re.S)
        brand = re.search(r'class="showcase-brand">\s*<a href="(/marka/[^"]+)">(.*?)</a>', card, re.S)
        new = re.search(r'class="showcase-price-new">(.*?)</div>', card, re.S)
        old = re.search(r'class="showcase-price-old">(.*?)</div>', card, re.S)
        img = re.search(r'data-src="([^"]+)"', card)
        pid = re.search(r'data-product-id="(\d+)"', card)
        out.append({
            "product_id": pid.group(1) if pid else "",
            "url": BASE + href.group(1),
            "name": clean(title.group(1)) if title else "",
            "brand": clean(brand.group(2)) if brand else "",
            "brand_url": BASE + brand.group(1) if brand else "",
            "price_tl": parse_price(clean(new.group(1))) if new else None,
            "old_price_tl": parse_price(clean(old.group(1))) if old else None,
            "image": ("https:" + img.group(1)) if img and img.group(1).startswith("//") else (img.group(1) if img else ""),
            "category": category,
        })
    return out


def main():
    os.makedirs(OUT_DIR, exist_ok=True)
    cache = os.path.join(OUT_DIR, ".sitemap-cache.json")
    if os.path.exists(cache):
        with open(cache, encoding="utf-8") as f:
            products = json.load(f)
        print(f"loaded {len(products)} urls from cache", flush=True)
    else:
        products = sitemap_stage()
        with open(cache, "w", encoding="utf-8") as f:
            json.dump(products, f, ensure_ascii=False)
    listing_stage(products)
    os.remove(cache)


def sitemap_stage():
    groups = sitemaps()
    print({k: len(v) for k, v in groups.items()}, flush=True)

    products = {}
    for i, u in enumerate(groups.get("product", []), 1):
        for r in parse_url_sitemap(fetch(u)):
            products.setdefault(r["url"], {"url": r["url"], "lastmod": r["lastmod"], "images": []})
        print(f"product sitemap {i}/{len(groups['product'])}: {len(products)} urls", flush=True)

    for i, u in enumerate(groups.get("image", []), 1):
        for r in parse_url_sitemap(fetch(u)):
            p = products.setdefault(r["url"], {"url": r["url"], "lastmod": r["lastmod"], "images": []})
            p["images"] = r["images"]
        if i % 10 == 0:
            print(f"image sitemap {i}/{len(groups['image'])}", flush=True)

    for kind, fname in (("category", "categories.csv"), ("brand", "brands.csv")):
        urls = []
        for u in groups.get(kind, []):
            urls += [r["url"] for r in parse_url_sitemap(fetch(u))]
        with open(os.path.join(OUT_DIR, fname), "w", newline="", encoding="utf-8") as f:
            w = csv.writer(f)
            w.writerow(["slug", "url"])
            for u in urls:
                w.writerow([u.rstrip("/").rsplit("/", 1)[-1], u])
    pages = []
    for kind in ("static", "tag", "blogCategory", "blogPost", "blogTag"):
        for u in groups.get(kind, []):
            pages += [(kind, r["url"]) for r in parse_url_sitemap(fetch(u))]
    with open(os.path.join(OUT_DIR, "pages.csv"), "w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)
        w.writerow(["type", "url"])
        w.writerows(pages)
    return products


def listing_stage(products):
    for cat in TOP_CATEGORIES:
        page_no = 1
        seen = set()
        while True:
            page = fetch(f"{BASE}/kategori/{cat}?tp={page_no}")
            # out-of-range pages return page 1 again, so stop once nothing new shows up
            cards = [c for c in parse_listing(page, cat) if c["url"] not in seen]
            seen.update(c["url"] for c in cards)
            for c in cards:
                p = products.setdefault(c["url"], {"url": c["url"], "lastmod": "", "images": []})
                cats = p.get("categories", [])
                if cat not in cats:
                    cats.append(cat)
                p["categories"] = cats
                for k, v in c.items():
                    if k != "category" and v not in (None, ""):
                        p[k] = v
            print(f"{cat} page {page_no}: {len(cards)} cards", flush=True)
            if not cards or 'rel="next"' not in page:
                break
            page_no += 1

    rows = list(products.values())
    with open(os.path.join(OUT_DIR, "products.json"), "w", encoding="utf-8") as f:
        json.dump(rows, f, ensure_ascii=False, indent=1)
    fields = ["product_id", "name", "brand", "price_tl", "old_price_tl", "categories", "url",
              "brand_url", "image", "images", "lastmod"]
    with open(os.path.join(OUT_DIR, "products.csv"), "w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=fields)
        w.writeheader()
        for p in rows:
            w.writerow({k: ("|".join(p[k]) if isinstance(p.get(k), list) else p.get(k, "")) for k in fields})
    priced = sum(1 for p in rows if p.get("price_tl") is not None)
    print(f"done: {len(rows)} products, {priced} with price", flush=True)


if __name__ == "__main__":
    main()
