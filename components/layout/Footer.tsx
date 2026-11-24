import Link from "next/link";
import { Logo } from "@/components/brand/Logo";

const sitemap = [
  { href: "/services", label: "Hizmetler" },
  { href: "/work", label: "Örnek senaryolar" },
  { href: "/studio", label: "Hakkımızda" },
  { href: "/journal", label: "Yazılar" },
  { href: "/contact", label: "İletişim" },
];

// Şirketin LinkedIn ve Instagram profilleri açılınca doldurulacak.
export const social: { href: string; label: string }[] = [];

const legal = [
  { href: "/privacy", label: "Gizlilik" },
  { href: "/terms", label: "Kullanım koşulları" },
];

const linkClass = "inline-flex min-h-11 items-center px-2 text-base text-dark-ink-2 transition-colors hover:text-dark-ink";

export default function Footer() {
  return (
    <footer className="border-t border-dark bg-dark-deep text-dark-ink">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center px-4 py-16 text-center sm:px-8 lg:px-12">
        <Logo className="h-8 text-dark-ink" />
        <nav aria-label="Alt menü" className="mt-8 flex flex-wrap justify-center gap-x-4">
          {sitemap.map((item) => (
            <Link key={item.href} href={item.href} className={linkClass}>
              {item.label}
            </Link>
          ))}
        </nav>
        <nav aria-label="Yasal" className="flex flex-wrap justify-center gap-x-4">
          {legal.map((item) => (
            <Link key={item.href} href={item.href} className={linkClass}>
              {item.label}
            </Link>
          ))}
          {social.map((item) => (
            <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
              {item.label}
            </a>
          ))}
        </nav>
        <a href="mailto:info@altmetry.com" className="mt-8 inline-flex min-h-11 items-center text-base text-dark-ink underline decoration-1 underline-offset-4">
          info@altmetry.com
        </a>
        <p className="mt-2 text-sm text-dark-ink-2">Altmetry · İstanbul · Türkiye ve yurt dışında uzaktan</p>
        <p className="mt-2 text-sm text-dark-ink-2">© {new Date().getFullYear()} Altmetry. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
}
