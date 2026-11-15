import type { Metadata } from "next";
import { PageHero, SectionTitle, PageCta } from "@/components/page/PageHero";
import { CheckIcon } from "@/components/home/ui";
import ProjectCard from "@/components/work/ProjectCard";
import { services, engagementModels } from "@/lib/data/services";
import { processSteps } from "@/lib/data/process";
import { scenarios } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Hizmetler · Altmetry",
  description:
    "Süreç iyileştirme, satış ve pazarlama, yönetişim ve ölçüm. 20–250 kişilik firmaların tekrar eden işlerini yapay zekâya devrediyoruz; süreçten başlıyoruz.",
};

const outcomes = [
  "Öncelikli üç iş, her biri için ölçü ve yol haritası.",
  "Tek bir süreçte gerçek işte çalışan çözüm ve önce/sonra karşılaştırması.",
  "İşe yarayanın diğer süreçlere taşınması, kurallar ve ekip desteği.",
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        lines={["Üç alan, tek yöntem."]}
        accent="Süreçten başlıyoruz."
        lede="Yapay zekâ projeleri çoğu zaman bir araçla başlar ve orada kalır. Biz işin kendisiyle başlıyoruz: hangi süreç, hangi veri, hangi ölçü. Önce ekibin zamanını yiyen tekrar eden işlere bakıyoruz; satış, pazarlama ve kurallar aynı ekipten, aynı yöntemle gelir."
      />

      {services.map((service, i) => {
        const related = scenarios.filter((s) => s.areas.includes(service.name)).slice(0, 3);
        return (
          <section key={service.slug} id={service.slug} aria-labelledby={`${service.slug}-baslik`} className="scroll-mt-24 border-t border-dark px-4 py-24 sm:px-8 lg:px-12 lg:py-32">
            <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-32">
                  <SectionTitle id={`${service.slug}-baslik`} lines={[service.name]} />
                  {i === 0 && (
                    <p data-up className="mt-4 text-base font-medium text-peach">
                      Buradan başlıyoruz
                    </p>
                  )}
                  <p data-up className="mt-6 max-w-[44ch] text-lg leading-relaxed text-dark-ink-2">
                    {service.intro}
                  </p>
                  <ul data-stagger className="mt-8 flex flex-wrap gap-2">
                    {service.tags.map((t) => (
                      <li key={t} className="inline-flex items-center gap-2 rounded-full border border-dark-line px-3 py-1 text-sm text-dark-ink">
                        <CheckIcon className="h-3 w-3 text-peach" /> {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-7 lg:col-start-6">
                <dl data-stagger className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
                  {service.items.map((item) => (
                    <div key={item.title} className="border-t border-dark-line pt-6">
                      <dt className="text-xl font-medium text-dark-ink">{item.title}</dt>
                      <dd className="mt-2 text-base leading-relaxed text-dark-ink-2">{item.description}</dd>
                    </div>
                  ))}
                </dl>
                {related.length > 0 && (
                  <div className="mt-16">
                    <h3 data-up className="text-xl font-medium text-dark-ink">
                      Bu alandan örnek senaryolar
                    </h3>
                    <ul className="mt-6 grid gap-6 sm:grid-cols-2">
                      {related.slice(0, 2).map((s) => (
                        <li key={s.slug} data-up>
                          <ProjectCard scenario={s} />
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </section>
        );
      })}

      <section id="calisma-modelleri" aria-labelledby="model-baslik" className="scroll-mt-24 border-y border-dark bg-dark-raise px-4 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
            <SectionTitle id="model-baslik" lines={["Küçük başla,"]} accent="ölç, büyüt." />
            <p data-up className="max-w-[52ch] text-lg leading-relaxed text-dark-ink-2">
              Teşhis ve pilot sabit fiyatlıdır. AI Ortaklığı aylık ücretlidir. Hangi modelin size uyduğunu ön
              görüşmeden sonra söylüyoruz.
            </p>
          </div>
          <ol className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
            {engagementModels.map((m, i) => (
              <li key={m.name} data-up>
                <div data-rule className="h-px w-full bg-peach" />
                <p className="mt-6 font-display text-[clamp(40px,4vw,56px)] font-light leading-none text-peach">{m.duration}</p>
                <h3 className="mt-4 text-2xl font-medium text-dark-ink">{m.name}</h3>
                <p className="mt-2 text-base leading-relaxed text-dark-ink-2">{m.description}</p>
                <p className="mt-4 text-base leading-relaxed text-dark-ink">
                  <span className="text-dark-ink-2">Sonunda elinizde: </span>
                  {outcomes[i]}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="scale" aria-labelledby="scale-baslik" className="px-4 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
            <SectionTitle id="scale-baslik" lines={["SCALE yöntemi"]} />
            <p data-up className="max-w-[52ch] text-lg leading-relaxed text-dark-ink-2">
              Beş adım, baştan sona aynı ekip. İş nereden başlarsa başlasın aynı sırayla ilerliyoruz.
            </p>
          </div>
          <ol data-stagger className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((s) => (
              <li key={s.letter} className="border-t border-dark-line pt-6">
                <span aria-hidden className="font-display text-6xl font-light text-peach">
                  {s.letter}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-dark-ink">
                  {s.title} <span className="font-normal text-dark-ink-2">· {s.subtitle}</span>
                </h3>
                <p className="mt-2 text-base leading-relaxed text-dark-ink-2">{s.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <PageCta title="Nereden başlayacağınızdan" accent="emin değil misiniz?" text="Sizi en çok yoran üç işi anlatın; hangisinin önce devredilmesi gerektiğini birlikte bulalım." />
    </>
  );
}
