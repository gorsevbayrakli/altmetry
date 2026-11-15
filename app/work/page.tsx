import type { Metadata } from "next";
import { PageHero, PageCta } from "@/components/page/PageHero";
import WorkGrid from "@/components/work/WorkGrid";
import { scenarios, scenarioDisclaimer } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Örnek senaryolar · Altmetry",
  description: "KOBİ'lerde yapay zekânın hangi işi devralabileceğini ve neyin ölçüleceğini gösteren örnek senaryolar.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        lines={["Örnek senaryolar"]}
        lede="KOBİ'lerde sık gördüğümüz işler. Her senaryo, yapay zekânın hangi işi devralabileceğini, kararın kimde kaldığını ve neyin ölçüleceğini gösterir."
      >
        <p className="mt-6 w-fit max-w-[62ch] rounded-xl border border-dark-line px-4 py-3 text-base text-dark-ink-2">{scenarioDisclaimer}</p>
      </PageHero>
      <section aria-label="Senaryolar" className="px-4 pb-24 sm:px-8 lg:px-12 lg:pb-32">
        <div className="mx-auto max-w-[1440px]">
          <WorkGrid scenarios={scenarios} showFilters />
        </div>
      </section>
      <PageCta title="Sizin işiniz bu listede" accent="yok mu?" text="Anlatın, birlikte bakalım. Yapay zekânın o işte işe yarayıp yaramayacağını açıkça söyleriz." label="Anlatın, bakalım" />
    </>
  );
}
