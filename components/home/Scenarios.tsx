import Image from "next/image";
import Link from "next/link";
import { featuredScenarios } from "@/lib/data/projects";
import { Pill } from "@/components/home/ui";

export default function Scenarios() {
  return (
    <section id="neler-mumkun" aria-labelledby="senaryo-baslik" className="px-4 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center">
        <h2 id="senaryo-baslik" data-lines className="text-center font-display text-[clamp(40px,5.6vw,80px)] font-light leading-[1.05] tracking-[-0.03em] text-dark-ink">
          <span className="ln block">Örnek senaryolar</span>
        </h2>
        <p data-up className="mt-6 max-w-[60ch] text-center text-lg leading-relaxed text-dark-ink-2">
          KOBİ&rsquo;lerde sık gördüğümüz işler: her biri yapay zekânın nereye dokunduğunu ve neyin ölçüldüğünü
          gösterir. Gerçek müşteri vakası değildir.
        </p>
        <ul className="mt-16 grid w-full gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {featuredScenarios.map((s) => (
            <li key={s.slug} data-up>
              <Link href={`/work/${s.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-dark-raise">
                  <Image src={s.coverImage} alt="" fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                </div>
                <div className="mt-4 flex items-baseline justify-between gap-4">
                  <h3 className="text-xl font-semibold text-dark-ink group-hover:underline group-hover:decoration-1 group-hover:underline-offset-4">{s.name}</h3>
                  <p className="shrink-0 text-sm text-dark-ink-2">{s.sector}</p>
                </div>
                <p className="mt-2 text-base leading-relaxed text-dark-ink-2">{s.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
        <div data-up className="mt-16 flex justify-center">
          <Pill href="/work" tone="light">Tüm senaryolar</Pill>
        </div>
      </div>
    </section>
  );
}
