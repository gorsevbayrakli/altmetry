import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/ui/Reveal";
import Tag from "@/components/ui/Tag";
import MagneticButton from "@/components/ui/MagneticButton";
import { projects } from "@/lib/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.client} — Altmetry`,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];
  if (!project) notFound();
  const next = projects[(index + 1) % projects.length];

  return (
    <article>
      <div className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent" />
        <div className="absolute inset-x-0 bottom-0 px-6 pb-10 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1440px]">
            <h1 className="font-display text-4xl font-medium leading-[1.05] tracking-tight text-canvas sm:text-6xl">
              {project.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-16 grid grid-cols-2 gap-6 border-b border-t border-ink/10 py-6 sm:grid-cols-4">
            <div>
              <p className="text-xs uppercase tracking-wide text-ink/40">Client</p>
              <p className="mt-1 font-display text-lg text-ink">{project.client}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-ink/40">Industry</p>
              <p className="mt-1 font-display text-lg text-ink">{project.industry}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-ink/40">Year</p>
              <p className="mt-1 font-display text-lg tabular-nums text-ink">{project.year}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-ink/40">Discipline</p>
              <div className="mt-1 flex flex-wrap gap-1">
                {project.discipline.map((d) => (
                  <Tag key={d}>{d}</Tag>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
            <Reveal>
              <h2 className="font-display text-sm uppercase tracking-wide text-accent">
                Challenge
              </h2>
              <p className="mt-3 text-base leading-relaxed text-ink/80">
                {project.challenge}
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display text-sm uppercase tracking-wide text-accent">
                Approach
              </h2>
              <p className="mt-3 text-base leading-relaxed text-ink/80">
                {project.approach}
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <h2 className="font-display text-sm uppercase tracking-wide text-accent">
                Outcome
              </h2>
              <p className="mt-3 text-base leading-relaxed text-ink/80">
                {project.outcome}
              </p>
            </Reveal>
          </div>

          <div className="my-20 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {project.gallery.map((src, i) => (
              <Reveal key={src} delay={i * 0.08} className={i === 0 ? "sm:col-span-2" : ""}>
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-ink/5">
                  <Image
                    src={src}
                    alt={`${project.client} project image ${i + 1}`}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mb-24 border-t border-ink/10 pt-10">
            <p className="mb-6 text-xs uppercase tracking-wide text-ink/40">Results</p>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              {project.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-4xl font-medium tabular-nums tracking-tight text-accent sm:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-ink/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="flex items-center justify-between border-t border-ink/10 pt-10">
            <div>
              <p className="text-xs uppercase tracking-wide text-ink/40">Next project</p>
              <Link
                href={`/work/${next.slug}`}
                className="mt-2 block font-display text-2xl font-medium tracking-tight text-ink transition-colors hover:text-accent sm:text-3xl"
              >
                {next.client} →
              </Link>
            </div>
            <MagneticButton href="/contact" variant="outline">
              Start a project
            </MagneticButton>
          </div>
        </div>
      </div>
    </article>
  );
}
