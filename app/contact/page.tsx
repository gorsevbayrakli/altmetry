import type { Metadata } from "next";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Altmetry",
  description: "Start a project with Altmetry.",
};

const social = [
  { href: "https://instagram.com", label: "Instagram" },
  { href: "https://linkedin.com", label: "LinkedIn" },
  { href: "https://dribbble.com", label: "Dribbble" },
  { href: "https://behance.net", label: "Behance" },
];

export default function ContactPage() {
  return (
    <div className="px-6 pb-24 pt-32 sm:px-8 lg:px-12 lg:pt-40">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <p className="mb-4 text-sm uppercase tracking-wide text-ink/50">
              Contact
            </p>
            <h1 className="font-display text-4xl font-medium leading-[1.05] tracking-tight text-ink sm:text-6xl">
              Start a project.
            </h1>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-ink/70">
              Tell us what you're building. We reply personally, usually
              within two business days, with next steps or a few clarifying
              questions.
            </p>

            <div className="mt-10 flex flex-col gap-4 border-t border-ink/10 pt-8 text-sm">
              <a
                href="mailto:hello@altmetry.com"
                className="w-fit font-display text-lg text-ink transition-colors hover:text-accent"
              >
                hello@altmetry.com
              </a>
              <p className="text-ink/60">Istanbul, Türkiye · Remote-friendly</p>
            </div>

            <div className="mt-10 flex gap-4 border-t border-ink/10 pt-8">
              {social.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink/60 transition-colors hover:text-accent"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </div>
  );
}
