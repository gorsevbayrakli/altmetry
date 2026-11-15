import { MeasureArc } from "@/components/brand/Logo";
import { Pill, TextLink, CheckIcon } from "@/components/home/ui";

function Card({ title, children, className }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div data-fly className={`w-[296px] shrink-0 rounded-2xl border border-dark bg-dark-raise p-6 text-left shadow-[0_24px_48px_rgb(0_0_0_/_0.35)] ${className ?? ""}`}>
      <p className="text-sm font-medium text-dark-ink-2">{title}</p>
      <div className="mt-4">{children}</div>
    </div>
  );
}

const facts = [
  { k: "Teşhis", v: "1 hafta" },
  { k: "İlk pilot", v: "4–6 hafta" },
  { k: "Son karar", v: "Sizde" },
];

export default function Hero() {
  return (
    <section id="giris" data-hero className="dot-grid relative overflow-hidden px-4 pt-24 pb-16 sm:px-8 lg:px-12 lg:pt-32">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center text-center">
        <h1 className="font-display text-[clamp(44px,7vw,104px)] font-light leading-[1.04] tracking-[-0.035em] text-dark-ink">
          <span className="ln block">Elle yapılan işi</span>
          <span className="ln block">
            <span className="relative inline-block text-peach">
              yapay zekâya
              <MeasureArc className="absolute inset-x-0 -bottom-2 sm:-bottom-3" />
            </span>{" "}
            devrediyoruz.
          </span>
        </h1>

        <div data-hero-rest className="flex flex-col items-center">
          <p className="mt-8 max-w-[62ch] text-lg leading-relaxed text-dark-ink-2 sm:text-xl">
            20–250 kişilik firmalarda sipariş girişi, teklif hazırlama, raporlama ve her gün aynı soruları
            yanıtlamak gibi tekrar eden işleri yapay zekâyla otomatikleştiriyoruz. Önce ölçüyor, tek bir süreçte
            pilotla başlıyor, emin olunmayan her adımda kararı size bırakıyoruz.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            <Pill href="/contact">Ücretsiz ön görüşme</Pill>
            <TextLink href="#ne-devrediyoruz" className="text-dark-ink">
              Hangi işleri devrediyoruz
            </TextLink>
          </div>
          <dl className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4">
            {facts.map((f) => (
              <div key={f.k} className="flex items-baseline gap-2 text-base">
                <dt className="text-dark-ink-2">{f.k}</dt>
                <dd className="font-medium text-dark-ink">{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div aria-label="Örnek senaryo: e-postayla gelen bir siparişin yolu" role="group" className="mt-24 flex w-full justify-center gap-6 overflow-x-auto pb-8 lg:overflow-visible">
          <Card title="Gelen e-posta" className="lg:-rotate-3 lg:translate-y-8">
            <p className="text-base font-medium text-dark-ink">Konu: Mart siparişi</p>
            <p className="mt-2 text-sm leading-relaxed text-dark-ink-2">Ekte üç kalemlik sipariş listemiz var. Teslimatı ay sonuna rica ederiz.</p>
            <p className="mt-4 inline-flex rounded-full border border-dark-line px-3 py-1 text-sm text-dark-ink-2">siparis-mart.pdf</p>
          </Card>
          <Card title="ERP taslağı" className="z-10">
            <ul className="flex flex-col gap-2">
              {["Ürün kodu eşleşti", "Ürün kodu eşleşti"].map((t, i) => (
                <li key={i} className="flex items-center gap-2 text-base text-dark-ink">
                  <CheckIcon className="text-peach" /> {t}
                </li>
              ))}
            </ul>
            <div className="mt-4 rounded-lg border border-accent p-4">
              <p className="text-sm leading-relaxed text-dark-ink">&ldquo;M8 cıvata 40&rdquo; iki ürün koduna uyuyor. Emin değilim, onayınızı bekliyorum.</p>
              <span className="approval-pulse mt-4 inline-flex min-h-8 items-center rounded-full bg-accent px-4 text-sm font-medium text-ink">Onay bekliyor</span>
            </div>
          </Card>
          <Card title="Ölçü" className="lg:rotate-3 lg:translate-y-8">
            <p className="text-base font-medium text-dark-ink">Elle giriş süresi</p>
            <div className="mt-4 flex flex-col gap-4">
              <div>
                <p className="text-sm text-dark-ink-2">İşe başlarken</p>
                <div data-bar className="mt-2 h-3 w-full rounded-full bg-dark-ink-2" />
              </div>
              <div>
                <p className="text-sm text-dark-ink-2">Pilot sonunda</p>
                <div data-bar className="mt-2 h-3 w-1/3 rounded-full bg-accent" />
              </div>
            </div>
            <p className="mt-4 text-sm text-dark-ink-2">Örnek senaryo, gerçek müşteri verisi değildir.</p>
          </Card>
        </div>
      </div>
    </section>
  );
}
