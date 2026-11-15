import type { Metadata } from "next";
import { PageHero, SectionTitle, PageCta } from "@/components/page/PageHero";

export const metadata: Metadata = {
  title: "Hakkımızda · Altmetry",
  description: "İki kurucu, toplam 40 yılı aşan teknoloji, satış ve pazarlama deneyimi. KOBİ'lerin tekrar eden işlerini yapay zekâya devrediyoruz.",
};

const experience = [
  {
    label: "Teknoloji ve yapay zekâ",
    points: [
      "20 yılı aşkın süre ajans ortamında dijital ürün, platform ve yazılım ekibi kurduk. Teslim baskısı yüksek, teknik borca tahammül düşüktü.",
      "Son 8 yılda tek bir soruya odaklandık: yapay zekâ bir deneme projesi olmaktan çıkıp günlük işin parçası nasıl olur?",
      "Yapay zekâ destekli 5 ürünü canlıya aldık. Çok disiplinli bir ekibin uçtan uca yapay zekâ dönüşümünü yönettik ve %40 net verimlilik artışı ölçtük.",
      "Bir AI kullanım politikası ve “kullanıyor olmak” ile “değer almak” arasını ayıran bir olgunluk çerçevesi geliştirdik.",
      "E-ticaret, içerik denetimi ve kurumsal web platformları kurup işlettik. Yerinde sunuculardan buluta geçişi yönettik, kâr-zarar sorumluluğu taşıdık.",
    ],
  },
  {
    label: "Satış ve pazarlama",
    points: [
      "19 yıl B2B satış: endüstriyel firmalara abonelik ve pazar bilgisi sattık.",
      "Yeni segmentler açarak toplam satışı %30 artırdık. Beş yıldır hiçbir teklifi kabul etmeyen firmaları müşteriye çevirdik.",
      "Düzenlediğimiz sektör buluşmaları yılda yaklaşık 500 bin dolarlık iş hacmi yarattı.",
      "Üç ülkede çalışan bir kurumsal yazılım iş ortağının teklif, RFP, lisans ve yenileme süreçlerini yürüttük. Hazırladığımız teklif şablonları üç ofisin standardı oldu.",
      "Üç dilde web sitesi, SEO, LinkedIn içerik serileri ve satış sunumları hazırladık. Kimya ve laboratuvar geçmişimiz sayesinde üretim firmalarının dilini konuşuyoruz.",
    ],
  },
];

const values = [
  { title: "Önce dinleriz", description: "Her iş birebir görüşmelerle ve mevcut durumun dürüst bir fotoğrafıyla başlar." },
  { title: "Küçük başla, ölç, büyüt", description: "Pilot olmadan yaygınlaştırma yapmayız. Pilot, nerede kırıldığını erken görmek için vardır." },
  { title: "Sıfatlardan önce sayılar", description: "Her önerinin sonunda bir ölçü vardır. Ölçemiyorsak önermeyiz." },
  { title: "Son karar insanda", description: "Yapay zekânın neye dokunacağına ve kimin onaylayacağına sizinle birlikte karar veririz." },
];

export default function StudioPage() {
  return (
    <>
      <PageHero
        lines={["Küçük ekip,"]}
        accent="uzun deneyim."
        lede="Altmetry iki kurucu ve proje ihtiyacına göre devreye giren bir uzman ağıyla çalışır. Birimiz teknoloji ve yapay zekâ, diğerimiz satış ve pazarlama tarafından geliyor. Her projede kurucular doğrudan işin içindedir; sizi bir hesap yöneticisine devretmeyiz."
      />

      <section aria-labelledby="deneyim-baslik" className="border-t border-dark px-4 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <SectionTitle id="deneyim-baslik" lines={["İki taraf, tek masa."]} />
          <div className="mt-16 grid gap-16 lg:grid-cols-2">
            {experience.map((side) => (
              <div key={side.label}>
                <h3 data-up className="text-2xl font-medium text-peach">
                  {side.label}
                </h3>
                <ul data-stagger className="mt-6">
                  {side.points.map((p) => (
                    <li key={p} className="border-t border-dark-line py-6 text-lg leading-relaxed text-dark-ink">
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-dark-ink-2">Sayılar kurucularımızın önceki deneyimine aittir.</p>
        </div>
      </section>

      <section aria-labelledby="ilke-baslik" className="border-y border-dark bg-dark-raise px-4 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <SectionTitle id="ilke-baslik" lines={["İlkelerimiz"]} />
          <ul className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {values.map((v) => (
              <li key={v.title} data-up>
                <div data-rule className="h-px w-full bg-peach" />
                <h3 className="mt-6 text-2xl font-medium text-dark-ink">{v.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-dark-ink-2">{v.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="yer-baslik" className="px-4 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-2 lg:items-end">
          <SectionTitle id="yer-baslik" lines={["İstanbul."]} accent="Türkiye ve yurt dışında uzaktan." />
          <p data-up className="text-lg leading-relaxed text-dark-ink-2">
            Türkçe ve İngilizce çalışıyoruz.
          </p>
        </div>
      </section>

      <PageCta title="Birlikte çalışalım." text="Sizi en çok yoran işi anlatın; yapay zekânın orada işe yarayıp yaramayacağını açıkça söyleyelim." />
    </>
  );
}
