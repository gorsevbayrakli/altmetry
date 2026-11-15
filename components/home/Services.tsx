import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { services } from "@/lib/data/services";
import { ArrowIcon, CheckIcon } from "@/components/home/ui";

/** Görsel alanın içeriği; kaydırırken hafif paralaksla kayar. */
function Vis({ children }: { children: ReactNode }) {
  return (
    <div data-parallax className="flex w-full justify-center">
      {children}
    </div>
  );
}

/** Süreç: tetikleyici → kontrol → eylem → insan onayı akışı. */
function FlowVisual() {
  const steps = [
    { k: "Tetikleyici", v: "Yeni sipariş e-postası geldi" },
    { k: "Kontrol", v: "Ürün kodları eşleşiyor mu?" },
    { k: "Eylem", v: "ERP'ye taslak sipariş" },
  ];
  return (
    <Vis>
      <ol data-stagger className="flex w-full max-w-[360px] flex-col gap-3">
        {steps.map((s) => (
          <li
            key={s.k}
            className="rounded-xl border border-dark bg-dark-deep p-4"
          >
            <p className="text-sm text-dark-ink-2">{s.k}</p>
            <p className="mt-1 text-base text-dark-ink">{s.v}</p>
          </li>
        ))}
        <li className="rounded-xl border border-accent bg-dark-deep p-4">
          <p className="text-sm text-peach">İnsan onayı</p>
          <p className="mt-1 text-base text-dark-ink">
            Emin olunmayan satır size sorulur
          </p>
        </li>
      </ol>
    </Vis>
  );
}

/** Satış: geçmiş tekliflerden ilk taslak. */
function ProposalVisual() {
  return (
    <Vis>
      <div className="w-full max-w-[380px] rounded-xl bg-canvas p-6 text-ink">
        <p className="text-sm text-ink-2">Teklif taslağı · ilk sürüm</p>
        <p className="mt-2 font-display text-xl font-semibold">
          Endüstriyel bağlantı elemanları
        </p>
        <ul data-stagger className="mt-4 flex flex-col gap-2 text-base">
          <li className="flex items-center gap-2">
            <CheckIcon className="text-accent-text" /> Benzer üç geçmiş
            tekliften derlendi
          </li>
          <li className="flex items-center gap-2">
            <CheckIcon className="text-accent-text" /> Fiyat listesi güncel
          </li>
          <li className="flex items-center gap-2">
            <CheckIcon className="text-accent-text" /> Teslim koşulları eklendi
          </li>
        </ul>
        <p className="mt-4 rounded-lg bg-peach px-4 py-3 text-sm text-ink">
          Satış ekibi kontrol edip özelleştirir, sonra gönderir.
        </p>
      </div>
    </Vis>
  );
}

/** Yönetişim: kullanım ile değeri ayrı ölçmek. */
function GovernanceVisual() {
  const rows = [
    {
      k: "Kullanım",
      d: "Ekipte kim, ne sıklıkla kullanıyor",
      w: "w-4/5",
      c: "bg-dark-ink-2",
    },
    { k: "Değer", d: "O iş gerçekten hızlandı mı", w: "w-1/2", c: "bg-accent" },
  ];
  return (
    <Vis>
      <div className="w-full max-w-[380px]">
        <p className="text-base font-medium text-dark-ink">
          Yapay zekâ kullanımı
        </p>
        <div className="mt-6 flex flex-col gap-6">
          {rows.map((r) => (
            <div key={r.k}>
              <div className="flex items-baseline justify-between gap-4">
                <p className="text-base text-dark-ink">{r.k}</p>
                <p className="text-sm text-dark-ink-2">{r.d}</p>
              </div>
              <div className="mt-2 h-3 rounded-full bg-dark-deep">
                <div data-bar className={`h-3 rounded-full ${r.w} ${r.c}`} />
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-dark-ink-2">
          İkisi aynı şey değil; ikisini de ölçüyoruz. Örnek gösterim.
        </p>
      </div>
    </Vis>
  );
}

const visuals: Record<string, ReactNode> = {
  "surec-iyilestirme": <FlowVisual />,
  "satis-pazarlama": <ProposalVisual />,
  "yonetisim-olcum": <GovernanceVisual />,
};

/**
 * Hizmet kartları üst üste biner (Infaiwor'daki "stack"): her kart yapışkan, bir öncekinden 24px aşağıda durur;
 * alttaki kart, yenisi gelirken hafifçe küçülür ve kararır (HomeMotion, [data-stack]). 900px altında düz liste.
 */
export default function Services() {
  return (
    <section
      id="ne-yapiyoruz"
      aria-labelledby="hizmet-baslik"
      className="px-4 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px]">
        <h2
          id="hizmet-baslik"
          data-lines
          className="text-center font-display text-[clamp(40px,5.6vw,80px)] font-light leading-[1.05] tracking-[-0.03em] text-dark-ink"
        >
          <span className="ln block">Üç alanda çalışıyoruz.</span>
          <span className="ln block text-peach">Süreçten başlıyoruz.</span>
        </h2>

        <div data-stack className="mt-24 grid gap-6">
          {services.map((s, i) => (
            <article
              key={s.slug}
              style={{ "--i": i } as CSSProperties}
              className="stack-card grid overflow-hidden rounded-2xl border border-dark bg-dark-raise lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]"
            >
              <div
                aria-hidden
                className="dot-grid flex min-h-[280px] items-center justify-center bg-dark-deep/40 p-8 lg:p-12"
              >
                {visuals[s.slug]}
              </div>
              <div className="flex flex-col justify-between gap-8 p-8 lg:p-12">
                <div>
                  <h3 className="font-display text-[clamp(36px,4.2vw,60px)] font-light leading-none tracking-[-0.035em] text-dark-ink">
                    {s.name}
                  </h3>
                  {i === 0 && (
                    <p className="mt-4 text-base font-medium text-peach">
                      Buradan başlıyoruz
                    </p>
                  )}
                  <p className="mt-6 max-w-[44ch] text-lg leading-relaxed text-dark-ink-2">
                    {s.description}
                  </p>
                  <p className="mt-4 max-w-[44ch] text-base leading-relaxed text-dark-ink-2">
                    {s.intro}
                  </p>
                  <ul className="mt-8 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <li
                        key={t}
                        className="inline-flex items-center gap-2 rounded-full border border-dark-line px-3 py-1 text-sm text-dark-ink"
                      >
                        <CheckIcon className="h-3 w-3 text-peach" /> {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={`/services#${s.slug}`}
                  className="inline-flex min-h-12 w-fit items-center gap-2 text-base font-medium text-dark-ink underline decoration-1 underline-offset-[6px] hover:decoration-2"
                >
                  Ayrıntılar <ArrowIcon />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
