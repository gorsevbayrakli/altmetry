import { Pill } from "@/components/home/ui";

export default function Closing() {
  return (
    <section aria-labelledby="kapanis-baslik" className="dot-grid px-4 py-32 sm:px-8 lg:px-12 lg:py-48">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center text-center">
        <h2 id="kapanis-baslik" data-lines className="font-display text-[clamp(44px,6.4vw,96px)] font-light leading-[1.04] tracking-[-0.035em] text-dark-ink">
          <span className="ln block">Hangi işi önce devredelim?</span>
          <span className="ln block text-peach">Birlikte bulalım.</span>
        </h2>
        <p data-up className="mt-8 max-w-[56ch] text-lg leading-relaxed text-dark-ink-2">
          Şirketinizi, ekibinizi ve sizi en çok yoran üç işi anlatın. Yapay zekânın nerede işe yarayacağını ve
          nerede gereksiz olduğunu açıkça söyleyelim.
        </p>
        <div data-up className="mt-10">
          <Pill href="/contact">Ücretsiz ön görüşme</Pill>
        </div>
      </div>
    </section>
  );
}
