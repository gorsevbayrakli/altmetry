"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page/PageHero";
import { ArrowIcon } from "@/components/home/ui";
import { cn } from "@/lib/utils";
import { journalPosts } from "@/lib/data/journalPosts";

const categories = Array.from(new Set(journalPosts.map((p) => p.category)));

/** Yazılar. Liste filtrelendiği için kartlar kaydırma animasyonu taşımaz (yeni gelen kart gizli kalmasın). */
export default function JournalPage() {
  const [active, setActive] = useState<string | null>(null);
  const filtered = useMemo(() => (active ? journalPosts.filter((p) => p.category === active) : journalPosts), [active]);

  return (
    <>
      <PageHero lines={["Sahadan notlar"]} lede="Yapay zekâyı günlük işe koymak üzerine yazılar: neyi devretmeli, neyi ölçmeli, nerede durmalı." />
      <section aria-label="Yazı listesi" className="px-4 pb-24 sm:px-8 lg:px-12 lg:pb-32">
        <div className="mx-auto max-w-[1440px]">
          <div role="group" aria-label="Kategori" className="mb-12 flex flex-wrap gap-2 border-b border-dark-line pb-8">
            {[null, ...categories].map((cat) => (
              <button
                key={cat ?? "__all"}
                type="button"
                onClick={() => setActive(cat)}
                aria-pressed={active === cat}
                className={cn(
                  "inline-flex min-h-11 items-center rounded-full border px-4 text-base transition-colors",
                  active === cat ? "border-peach bg-peach text-ink" : "border-dark-line text-dark-ink hover:border-dark-ink-2"
                )}
              >
                {cat ?? "Tümü"}
              </button>
            ))}
          </div>

          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <li key={p.slug} className="flex flex-col overflow-hidden rounded-2xl bg-canvas text-ink">
                <div className="relative aspect-[16/10] bg-subtle">
                  <Image src={p.coverImage} alt="" fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="text-xl font-semibold leading-snug">{p.title}</h2>
                  <p className="mt-2 text-sm text-ink-2">
                    {p.category} · {p.readTime}
                  </p>
                  <p className="mt-4 flex-1 text-base leading-relaxed text-ink-2">{p.excerpt}</p>
                  <Link href={`/journal/${p.slug}`} className="mt-6 inline-flex min-h-12 w-fit items-center gap-2 rounded-full bg-ink px-6 text-base font-medium text-dark-ink hover:bg-dark">
                    Yazıyı oku <ArrowIcon />
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
