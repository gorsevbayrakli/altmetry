import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import { social } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "İletişim · Altmetry",
  description: "Ücretsiz ön görüşme: sizi en çok yoran işi anlatın, yapay zekânın orada işe yarayıp yaramayacağını konuşalım.",
};

export default function ContactPage() {
  return (
    <section data-hero className="dot-grid px-4 pt-24 pb-24 sm:px-8 lg:px-12 lg:pt-32 lg:pb-32">
      <div className="mx-auto grid max-w-[1440px] gap-16 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <h1 className="font-display text-[clamp(44px,5.6vw,88px)] font-light leading-[1.04] tracking-[-0.035em] text-dark-ink">
            <span className="ln block">Sizi en çok</span>
            <span className="ln block">yoran işi</span>
            <span className="ln block text-peach">anlatın.</span>
          </h1>
          <div data-hero-rest>
            <p className="mt-8 max-w-[44ch] text-lg leading-relaxed text-dark-ink-2">
              Ücretsiz ön görüşmede şirketinizi dinliyor, yapay zekânın nerede işe yarayacağını ve nerede gereksiz
              olduğunu açıkça söylüyoruz. Satış konuşması yapmıyoruz.
            </p>
            <div className="mt-10 flex flex-col gap-2 border-t border-dark-line pt-8">
              <a href="mailto:hello@altmetry.com" className="inline-flex min-h-12 w-fit items-center font-display text-2xl font-light text-dark-ink underline decoration-1 underline-offset-[6px]">
                hello@altmetry.com
              </a>
              <p className="text-base text-dark-ink-2">İstanbul · Türkiye ve yurt dışında uzaktan</p>
            </div>
            {social.length > 0 && (
              <div className="mt-8 flex gap-4">
                {social.map((item) => (
                  <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-base text-dark-ink-2 hover:text-dark-ink">
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        <div data-up className="rounded-2xl border border-dark bg-dark-raise p-6 sm:p-8 lg:col-span-7 lg:p-12">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
