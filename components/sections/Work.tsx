import SectionHeading from "@/components/ui/SectionHeading";
import WorkScroller from "@/components/work/WorkScroller";
import MagneticButton from "@/components/ui/MagneticButton";
import { featuredProjects } from "@/lib/data/projects";

export default function Work() {
  return (
    <section id="proof" className="px-6 pt-12 pb-6 sm:px-8 lg:px-12 lg:pt-16 lg:pb-8">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-8 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            index="03"
            eyebrow="Proof"
            title="Selected work"
            description="Six projects, three disciplines, one measurable result each."
          />
          <MagneticButton href="/work" variant="outline" className="shrink-0">
            View all work
          </MagneticButton>
        </div>

        <WorkScroller projects={featuredProjects} />
      </div>
    </section>
  );
}
