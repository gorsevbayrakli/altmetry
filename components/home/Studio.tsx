import { TextLink } from "@/components/home/ui";

export default function Studio() {
  return (
    <section id="biz-kimiz" aria-labelledby="biz-baslik" className="px-4 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto grid max-w-[1440px] items-center gap-16 lg:grid-cols-2">
        <div>
          <h2 id="biz-baslik" data-lines className="font-display text-[clamp(40px,5vw,72px)] font-light leading-[1.05] tracking-[-0.03em] text-dark-ink">
            <span className="ln block">İki kurucu,</span>
            <span className="ln block">tek masa.</span>
          </h2>
          <p data-up className="mt-6 max-w-[52ch] text-lg leading-relaxed text-dark-ink-2">
            Birimiz teknoloji ve yapay zekâ, diğerimiz satış ve pazarlama tarafından geliyor. Kurucular her
            projede doğrudan çalışır; gerektiğinde güvendiğimiz uzmanlardan oluşan bir ağ devreye girer. Türkiye
            ve yurt dışında, Türkçe ve İngilizce çalışıyoruz.
          </p>
          <TextLink href="/studio" className="mt-6 text-dark-ink">Hakkımızda</TextLink>
        </div>
        <figure data-up className="rounded-2xl border border-dark bg-dark-raise p-8 lg:p-12">
          <blockquote className="font-display text-[clamp(24px,2.4vw,34px)] font-light leading-snug text-dark-ink">
            &ldquo;Yapay zekâda asıl iş, modeli seçtikten sonra başlıyor: neye dokunacağı, kimin onaylayacağı ve
            neyin başarı sayılacağı.&rdquo;
          </blockquote>
        </figure>
      </div>
    </section>
  );
}
