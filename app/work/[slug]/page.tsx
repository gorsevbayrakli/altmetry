import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero, PageCta } from "@/components/page/PageHero";
import { ArrowIcon } from "@/components/home/ui";
import { scenarios, scenarioDisclaimer } from "@/lib/data/projects";

export function generateStaticParams() {
  return scenarios.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const scenario = scenarios.find((s) => s.slug === slug);
  if (!scenario) return {};
  return { title: `${scenario.name} · Örnek senaryo · Altmetry`, description: scenario.summary };
}

export default async function ScenarioPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = scenarios.findIndex((s) => s.slug === slug);
  const scenario = scenarios[index];
  if (!scenario) notFound();
  const next = scenarios[(index + 1) % scenarios.length];

  const sections = [
    { heading: "Durum", body: scenario.situation },
    { heading: "Yaklaşım", body: scenario.approach },
    { heading: "Hedef", body: scenario.goal },
  ];
  const meta = [
    { k: "Senaryo", v: scenario.name },
    { k: "Sektör", v: scenario.sector },
    { k: "Süre", v: scenario.duration },
    { k: "Alan", v: scenario.areas.join(", ") },
  ];

  return (
    <article>
      <PageHero lines={[scenario.title]}>
        <p className="mt-6 inline-flex rounded-full bg-peach px-3 py-1 text-sm text-ink">Örnek senaryo</p>
        <dl className="mt-12 grid grid-cols-2 gap-6 border-y border-dark-line py-6 sm:grid-cols-4">
          {meta.map((m) => (
            <div key={m.k}>
              <dt className="text-sm text-dark-ink-2">{m.k}</dt>
              <dd className="mt-1 text-lg text-dark-ink">{m.v}</dd>
            </div>
          ))}
        </dl>
      </PageHero>

      <div className="px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div data-up className="relative aspect-[21/9] overflow-hidden rounded-2xl bg-dark-raise">
            <Image src={scenario.coverImage} alt="" fill priority sizes="(min-width: 1440px) 1344px, 100vw" className="object-cover" />
          </div>
          <p data-up className="mt-6 max-w-[72ch] text-base text-dark-ink-2">
            {scenarioDisclaimer}
          </p>

          <div className="mt-24 grid gap-12 lg:grid-cols-3 lg:gap-8">
            {sections.map((s) => (
              <section key={s.heading} data-up aria-labelledby={`b-${s.heading}`}>
                <div data-rule className="h-px w-full bg-peach" />
                <h2 id={`b-${s.heading}`} className="mt-6 font-display text-3xl font-light text-dark-ink">
                  {s.heading}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-dark-ink-2">{s.body}</p>
              </section>
            ))}
          </div>

          <section aria-labelledby="olcu-baslik" className="mt-24 rounded-2xl border border-dark bg-dark-raise p-8 lg:p-12">
            <h2 id="olcu-baslik" data-up className="font-display text-3xl font-light text-dark-ink">
              Neyi ölçüyoruz
            </h2>
            <dl data-stagger className="mt-8 grid gap-8 sm:grid-cols-3">
              {scenario.metrics.map((m) => (
                <div key={m.label} className="flex flex-col gap-2 border-t border-dark-line pt-6">
                  <dt className="text-base text-dark-ink-2">{m.label}</dt>
                  <dd className="order-first font-display text-4xl font-light text-peach">{m.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-8 text-sm text-dark-ink-2">Örnek hedeflerdir. Gerçek hedefler teşhis aşamasında, sizin verinizle belirlenir.</p>
          </section>

          <div className="mt-24 flex flex-col items-start gap-2 border-t border-dark-line pt-10 pb-24">
            <p className="text-base text-dark-ink-2">Sonraki senaryo</p>
            <Link href={`/work/${next.slug}`} className="inline-flex min-h-12 items-center gap-4 font-display text-[clamp(28px,3vw,40px)] font-light text-dark-ink hover:text-peach">
              {next.name} <ArrowIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>

      <PageCta title="Bu iş size tanıdık geldi mi?" text="Kendi sürecinizde nasıl görüneceğini ön görüşmede birlikte konuşalım." />
    </article>
  );
}
