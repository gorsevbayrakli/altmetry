import Image from "next/image";
import Link from "next/link";

const sitemap = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/studio", label: "Studio" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

const social = [
  { href: "https://instagram.com", label: "Instagram" },
  { href: "https://linkedin.com", label: "LinkedIn" },
  { href: "https://dribbble.com", label: "Dribbble" },
  { href: "https://behance.net", label: "Behance" },
];

const legal = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-dark-ink">
      <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <div>
            <Image
              src="/logo-dark.png"
              alt="Altmetry"
              width={142}
              height={32}
              className="mb-8 h-7 w-auto"
            />
            <p className="font-display text-2xl font-medium leading-tight tracking-tight sm:text-3xl">
              Altmetry is a design, development, and consulting studio —
              built to measure.
            </p>
            <div className="mt-8 flex flex-col gap-4 text-sm text-dark-ink/70">
              <a
                href="mailto:hello@altmetry.com"
                className="w-fit text-dark-ink transition-colors hover:text-accent"
              >
                hello@altmetry.com
              </a>
              <p>Istanbul, Türkiye · Remote-friendly</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <p className="mb-4 text-xs uppercase tracking-wide text-dark-ink/40">
                Sitemap
              </p>
              <ul className="flex flex-col gap-4">
                {sitemap.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-dark-ink/70 transition-colors hover:text-accent"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-4 text-xs uppercase tracking-wide text-dark-ink/40">
                Social
              </p>
              <ul className="flex flex-col gap-4">
                {social.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-dark-ink/70 transition-colors hover:text-accent"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-4 text-xs uppercase tracking-wide text-dark-ink/40">
                Legal
              </p>
              <ul className="flex flex-col gap-4">
                {legal.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-dark-ink/70 transition-colors hover:text-accent"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-dark-ink/10 pt-8 text-xs text-dark-ink/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Altmetry. All rights reserved.</p>
          <p>Design, development and strategy — built to measure.</p>
        </div>
      </div>
    </footer>
  );
}
