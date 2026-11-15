import Link from "next/link";
import { engagementModels } from "@/lib/data/services";
import { ArrowIcon } from "@/components/home/ui";

/** Nasıl çalışıyoruz: üç adım, süreleriyle. Her adım bir öncekinin ölçüsüyle karar verir. */
const outcomes = [
  "Öncelikli üç iş, her biri için ölçü ve yol haritası.",
  "Tek bir süreçte gerçek işte çalışan çözüm ve önce/sonra karşılaştırması.",
  "İşe yarayanın diğer süreçlere taşınması, kurallar ve ekip desteği.",
];

export default function HowWeWork() {
  return (
    <section id="nasil-calisiyoruz" aria-labelledby="nasil-baslik" className="border-y border-dark bg-dark-raise px-4 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <h2 id="nasil-baslik" data-lines className="font-display text-[clamp(40px,5.6vw,80px)] font-light leading-[1.05] tracking-[-0.03em] text-dark-ink">
            <span className="ln block">Önce ölçüyoruz,</span>
            <span className="ln block">sonra kuruyoruz.</span>
          </h2>
          <p data-up className="max-w-[52ch] text-lg leading-relaxed text-dark-ink-2">
            Büyük bir dönüşüm projesiyle değil, tek bir süreçle başlıyoruz. Pilotun sonunda sonucu işe başlarken
            belirlediğimiz ölçüyle karşılaştırıyor, işe yarayanı büyütüyoruz.
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

        <p data-up className="mt-16 text-base text-dark-ink-2">
          Bu sırayı SCALE yöntemi olarak adlandırıyoruz: dinle, önceliklendir, kur, devreye al, büyüt.{" "}
          <Link href="/services" className="inline-flex min-h-11 items-center gap-2 text-dark-ink underline decoration-1 underline-offset-4">
            Ayrıntılar <ArrowIcon />
          </Link>
        </p>
      </div>
    </section>
  );
}
