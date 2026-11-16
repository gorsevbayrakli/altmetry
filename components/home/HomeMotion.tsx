"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Site hareketleri (layout'ta, her sayfada çalışır) (Infaiwor sitesindeki dil: GSAP + ScrollTrigger, expo.out, zıplama yok).
 *  data-lines  > .ln     : başlık satırları bulanıklıktan netleşerek yükselir
 *  data-up               : bloklar kaydırınca yükselerek belirir (toplu, sıralı)
 *  data-stagger > *      : alt öğeler sırayla gelir
 *  data-fly              : giriş kartları aşağıdan dönerek uçar
 *  data-arc path         : ölçü yayı çizilir
 *  data-bar              : çubuklar soldan dolar
 *  data-words .word      : kelimeler kaydırmayla yanar
 *  data-parallax         : panel içi hafif paralaks
 *  data-rule             : çizgiler soldan uzar
 * Hareket azaltma açıksa hiçbiri çalışmaz; içerik baştan görünür.
 */
export default function HomeMotion() {
  // Sayfa değişince (istemci tarafı gezinme) hareketler yeni sayfa için yeniden kurulur.
  const pathname = usePathname();
  useLayoutEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.documentElement;
    if (reduce) {
      root.classList.toggle("motion", false);
      document.querySelectorAll("[data-words] .word").forEach((w) => w.classList.add("on"));
      return;
    }
    gsap.registerPlugin(ScrollTrigger);
    const EASE = "expo.out";
    const $$ = (s: string, el: ParentNode = document) => Array.from(el.querySelectorAll<HTMLElement>(s));

    const ctx = gsap.context(() => {
      // Üst menü yerine oturur
      gsap.fromTo("header [data-nav] > *", { opacity: 0, y: -12 }, { opacity: 1, y: 0, duration: 0.9, ease: EASE, stagger: 0.05, delay: 0.1 });

      // Giriş: başlık, ölçü yayı, metin, kartlar
      const hero = document.querySelector<HTMLElement>("[data-hero]");
      if (hero) {
        const tl = gsap.timeline({ delay: 0.15 });
        tl.fromTo($$(".ln", hero), { opacity: 0, y: 48, filter: "blur(8px)" }, { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.3, ease: EASE, stagger: 0.12 }, 0);
        tl.fromTo($$("[data-arc]", hero), { clipPath: "inset(0% 100% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.1, ease: "power2.out" }, 0.7);
        tl.fromTo($$("[data-hero-rest] > *", hero), { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 1, ease: EASE, stagger: 0.08 }, 0.5);
        $$("[data-fly]", hero).forEach((c, i) => {
          const dir = i === 0 ? -1 : i === 2 ? 1 : 0;
          tl.fromTo(c, { opacity: 0, y: 160, rotate: dir * 10 }, { opacity: 1, y: 0, rotate: 0, duration: 1.5, ease: EASE }, 0.8 + i * 0.12);
        });
        tl.fromTo($$("[data-bar]", hero), { scaleX: 0 }, { scaleX: 1, transformOrigin: "0% 50%", duration: 1.2, ease: EASE, stagger: 0.2 }, 1.6);
        // Kartlar kaydırınca hafifçe farklı hızlarda kayar
        $$("[data-fly]", hero).forEach((c, i) => {
          gsap.to(c, { yPercent: [-6, -14, -4][i] ?? -8, ease: "none", scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true } });
        });
      }

      // Başlık satırları (giriş dışı)
      $$("[data-lines]").forEach((d) => {
        if (d.closest("[data-hero]")) return;
        gsap.fromTo($$(".ln", d), { opacity: 0, y: 48, filter: "blur(8px)" }, { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.3, ease: EASE, stagger: 0.1, scrollTrigger: { trigger: d, start: "top 85%" } });
      });

      // Yükselerek beliren bloklar
      ScrollTrigger.batch("[data-up]", {
        start: "top 90%",
        onEnter: (els) => gsap.fromTo(els, { opacity: 0, y: 32, filter: "blur(6px)" }, { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.1, ease: EASE, stagger: 0.08, overwrite: true }),
      });

      // Sıralı alt öğeler
      $$("[data-stagger]").forEach((g) => {
        gsap.fromTo(Array.from(g.children), { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.9, ease: EASE, stagger: 0.12, scrollTrigger: { trigger: g, start: "top 80%" } });
      });

      // Çizgiler soldan uzar
      $$("[data-rule]").forEach((r) => {
        gsap.fromTo(r, { scaleX: 0 }, { scaleX: 1, transformOrigin: "0% 50%", duration: 1.4, ease: EASE, scrollTrigger: { trigger: r, start: "top 90%" } });
      });

      // Çubuklar (giriş dışı)
      $$("[data-bar]").forEach((b) => {
        if (b.closest("[data-hero]")) return;
        gsap.fromTo(b, { scaleX: 0 }, { scaleX: 1, transformOrigin: "0% 50%", duration: 1.4, ease: EASE, scrollTrigger: { trigger: b, start: "top 85%" } });
      });

      // Ölçü yayları (giriş dışı)
      $$("[data-arc]").forEach((p) => {
        if (p.closest("[data-hero]")) return;
        gsap.fromTo(p, { clipPath: "inset(0% 100% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.2, ease: "power2.out", scrollTrigger: { trigger: p, start: "top 85%" } });
      });

      // Üst üste binen kartlar: bir sonraki kart gelirken alttaki hafifçe küçülür ve kararır
      const cards = $$("[data-stack] .stack-card");
      const stacking = window.matchMedia("(min-width: 901px)").matches;
      cards.forEach((c, i) => {
        const next = cards[i + 1];
        if (!next || !stacking) return;
        gsap.fromTo(
          c,
          { scale: 1, "--veil": 0 },
          {
            scale: 0.94,
            "--veil": 0.5,
            ease: "none",
            scrollTrigger: {
              trigger: next,
              start: "top 75%",
              end: () => `top ${parseFloat(getComputedStyle(next).top) + 8}px`,
              scrub: true,
              invalidateOnRefresh: true,
            },
          }
        );
      });

      // Panel içi paralaks
      $$("[data-parallax]").forEach((v) => {
        gsap.fromTo(v, { y: 40 }, { y: -24, ease: "none", scrollTrigger: { trigger: v.parentElement, start: "top bottom", end: "bottom top", scrub: true } });
      });

      // Kelime kelime yanan cümle
      $$("[data-words]").forEach((el) => {
        const words = $$(".word", el);
        ScrollTrigger.create({
          trigger: el,
          start: "top 80%",
          end: "bottom 45%",
          scrub: true,
          onUpdate: (st) => {
            const n = Math.round(st.progress * words.length);
            words.forEach((w, i) => w.classList.toggle("on", i < n));
          },
        });
      });
    });

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    return () => {
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, [pathname]);

  return null;
}
