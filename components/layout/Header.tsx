"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/brand/Logo";

const navLinks = [
  { href: "/services", label: "Hizmetler" },
  { href: "/work", label: "Örnek senaryolar" },
  { href: "/studio", label: "Hakkımızda" },
  { href: "/journal", label: "Yazılar" },
  { href: "/contact", label: "İletişim" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  // Aşağı kaydırınca menü gizlenir, yukarı kaydırınca döner (Infaiwor'daki davranış).
  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      if (y > lastY.current + 4 && y > window.innerHeight * 0.8) setHidden(true);
      else if (y < lastY.current - 4 || y < 80) setHidden(false);
      lastY.current = y;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      onFocusCapture={() => setHidden(false)}
      className={`sticky top-0 z-50 border-b border-dark bg-dark-deep text-dark-ink transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${hidden && !menuOpen ? "nav-hide" : ""}`}
    >
      <div data-nav className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-4 py-3 sm:px-8 lg:px-12">
        <Link href="/" className="flex min-h-12 items-center" aria-label="Altmetry ana sayfa">
          <Logo className="h-7 text-dark-ink sm:h-8" />
        </Link>

        <nav aria-label="Ana menü" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname.startsWith(link.href) ? "page" : undefined}
              className="inline-flex min-h-12 items-center rounded-full px-4 text-base text-dark-ink-2 transition-colors hover:text-dark-ink aria-[current=page]:text-peach"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden min-h-12 items-center rounded-full bg-accent px-6 text-base font-medium text-ink transition-colors hover:bg-accent-hover lg:inline-flex"
        >
          Ön görüşme planla
        </Link>

        <button
          type="button"
          className="inline-flex min-h-12 items-center rounded-full border border-dark-line px-4 text-base text-dark-ink lg:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="mobil-menu"
        >
          {menuOpen ? "Kapat" : "Menü"}
        </button>
      </div>

      <div id="mobil-menu" hidden={!menuOpen} className="border-t border-dark lg:hidden">
        <nav aria-label="Mobil menü" className="flex flex-col px-4 py-4">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="flex min-h-12 items-center text-lg text-dark-ink">
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-6 text-base font-medium text-ink"
          >
            Ön görüşme planla
          </Link>
        </nav>
      </div>
    </header>
  );
}
