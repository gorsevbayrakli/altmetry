import Link from "next/link";
import { ArrowIcon } from "@/components/home/ui";

/** Önermenin somut hâli: hangi işi devrediyoruz, yapay zekâ ne yapıyor, karar kimde kalıyor. */
const tasks = [
  {
    job: "Sipariş girişi",
    ai: "E-posta, PDF ve Excel ile gelen siparişleri okur, ürün kodlarını eşleştirir, ERP'ye taslak olarak hazırlar.",
    human: "Emin olmadığı her satır ekibinizin onayına gider.",
    href: "/work/siparis-isleme",
  },
  {
    job: "Teklif hazırlama",
    ai: "Geçmiş tekliflerinizden yararlanarak yeni teklifin ilk taslağını çıkarır.",
    human: "Satış ekibi kontrol eder, özelleştirir ve gönderir.",
    href: "/work/teklif-hazirlama",
  },
  {
    job: "Raporlama",
    ai: "Farklı sistemlerdeki veriyi her sabah toplar, olağan dışı değişimleri işaretler ve kısa bir yorum yazar.",
    human: "Yorumu okuyan ve kararı veren yönetim.",
    href: "/work/ay-sonu-raporu",
  },
  {
    job: "Şirket içi sorular",
    ai: "Prosedür ve dokümanlarınızdan, kaynağını göstererek yanıt verir.",
    human: "Kimin hangi dokümana erişeceğini siz belirlersiniz.",
    href: "/work/sirket-ici-bilgi",
  },
];

export default function Tasks() {
  return (
    <section id="ne-devrediyoruz" aria-labelledby="is-baslik" className="px-4 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <h2 id="is-baslik" data-lines className="font-display text-[clamp(40px,5.6vw,80px)] font-light leading-[1.05] tracking-[-0.03em] text-dark-ink">
            <span className="ln block">Hangi işleri</span>
            <span className="ln block">devrediyoruz?</span>
          </h2>
          <p data-up className="max-w-[52ch] text-lg leading-relaxed text-dark-ink-2">
            Yapay zekânın bugün güvenilir şekilde yapabildiği ve KOBİ&rsquo;lerde en çok zaman alan dört iş. Her
            birinde yapay zekâ işi hazırlar, son kararı bir insan verir.
          </p>
        </div>

        <div className="mt-16 hidden grid-cols-12 gap-8 border-b border-dark-line px-4 pb-4 text-sm text-dark-ink-2 md:grid" aria-hidden>
          <p className="col-span-3">İş</p>
          <p className="col-span-5">Yapay zekâ ne yapar</p>
          <p className="col-span-4">Karar kimde</p>
        </div>
        <ul className="mt-8 md:mt-0">
          {tasks.map((t) => (
            <li key={t.job} data-up className="border-b border-dark-line">
              <Link href={t.href} className="group grid gap-4 py-8 transition-colors hover:bg-dark-raise md:grid-cols-12 md:gap-8 md:px-4">
                <h3 className="flex items-center gap-2 font-display text-2xl font-normal text-dark-ink md:col-span-3">
                  {t.job}
                  <ArrowIcon className="text-peach opacity-0 transition-opacity group-hover:opacity-100" />
                </h3>
                <p className="text-base leading-relaxed text-dark-ink-2 md:col-span-5">{t.ai}</p>
                <p className="text-base leading-relaxed text-peach md:col-span-4">{t.human}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
