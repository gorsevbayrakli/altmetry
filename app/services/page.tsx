import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import Tag, { type TagTone } from "@/components/ui/Tag";
import MagneticButton from "@/components/ui/MagneticButton";
import WorkGrid from "@/components/work/WorkGrid";
import { services } from "@/lib/data/services";
import { projects, type Discipline } from "@/lib/data/projects";

const tones: TagTone[] = ["accent", "accent-2", "accent-3"];

export const metadata: Metadata = {
  title: "Services — Altmetry",
  description:
    "Design, development, and consulting — three disciplines, one accountable team.",
};

export default function ServicesPage() {
  return (
    <div className="pb-24 pt-32 lg:pt-40">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12">
        <Reveal className="mb-24 max-w-2xl">
          <p className="mb-4 text-sm uppercase tracking-wide text-ink/50">
            Services
          </p>
          <h1 className="font-display text-4xl font-medium leading-[1.05] tracking-tight text-ink sm:text-6xl">
            One team, three disciplines, sold as a system.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-ink/70 sm:text-lg">
            Every engagement draws from the same pool of senior design,
            development, and strategy talent — scoped to what the work
            actually needs, not what a fixed package includes.
          </p>
        </Reveal>

        {services.map((service, i) => {
          const related = projects.filter((p) =>
            p.discipline.includes(service.name as Discipline)
          );
          return (
            <section
              key={service.slug}
              id={service.slug}
              className="scroll-mt-28 border-t border-ink/10 py-20 first:border-t-0"
            >
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
                <Reveal className="lg:col-span-4">
                  <span className="font-display text-sm tabular-nums text-ink/40">
                    {service.number}
                  </span>
                  <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
                    {service.name}
                  </h2>
                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink/60">
                    {service.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                    {service.tags.map((tag) => (
                      <Tag key={tag} tone={tones[i]} variant="dot">
                        {tag}
                      </Tag>
                    ))}
                  </div>
                </Reveal>

                <Reveal delay={0.1} className="lg:col-span-8">
                  <div className="grid grid-cols-3 gap-3">
                    {service.images.map((img, idx) => (
                      <div
                        key={idx}
                        className="relative aspect-[3/4] overflow-hidden rounded-xl bg-ink/5"
                        style={{ marginTop: idx === 1 ? 24 : 0 }}
                      >
                        <Image
                          src={img}
                          alt=""
                          fill
                          sizes="(min-width: 1024px) 20vw, 33vw"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  {related.length > 0 && (
                    <div className="mt-10">
                      <p className="mb-4 text-xs uppercase tracking-wide text-ink/40">
                        Representative work
                      </p>
                      <WorkGrid projects={related.slice(0, 3)} />
                    </div>
                  )}
                </Reveal>
              </div>
            </section>
          );
        })}

        <Reveal className="mt-12 flex flex-col items-start gap-6 border-t border-ink/10 pt-16 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            Not sure which discipline you need?
          </h2>
          <MagneticButton href="/contact">Start a project</MagneticButton>
        </Reveal>
      </div>
    </div>
  );
}
