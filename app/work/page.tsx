import type { Metadata } from "next";
import Reveal from "@/components/ui/Reveal";
import WorkGrid from "@/components/work/WorkGrid";
import { projects } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Work — Altmetry",
  description: "Selected work across design, development, and consulting.",
};

export default function WorkPage() {
  return (
    <div className="px-6 pb-24 pt-32 sm:px-8 lg:px-12 lg:pt-40">
      <div className="mx-auto max-w-[1440px]">
        <Reveal className="mb-16 max-w-2xl">
          <p className="mb-4 text-sm uppercase tracking-wide text-ink/50">Work</p>
          <h1 className="font-display text-4xl font-medium leading-[1.05] tracking-tight text-ink sm:text-6xl">
            Every project, one measurable result each.
          </h1>
        </Reveal>

        <WorkGrid projects={projects} showFilters />
      </div>
    </div>
  );
}
