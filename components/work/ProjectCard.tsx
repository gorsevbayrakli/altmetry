import Image from "next/image";
import Link from "next/link";
import Tag from "@/components/ui/Tag";
import type { Project } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

const disciplineDot: Record<string, string> = {
  Design: "bg-accent",
  Development: "bg-accent-2",
  Consulting: "bg-accent-3",
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-ink/5">
        <Image
          src={project.coverImage}
          alt={`${project.client} — ${project.title}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjMiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjMiIGZpbGw9IiNlOGU1ZGQiLz48L3N2Zz4="
        />
        <div className="absolute left-4 top-4 flex gap-2">
          {project.discipline.map((d) => (
            <Tag
              key={d}
              className="gap-1.5 border-canvas/30 bg-dark/70 text-canvas backdrop-blur-sm"
            >
              <span
                aria-hidden
                className={cn("h-1.5 w-1.5 rounded-full", disciplineDot[d])}
              />
              {d}
            </Tag>
          ))}
        </div>
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <p className="font-display text-lg font-medium tracking-tight text-ink group-hover:text-accent transition-colors">
            {project.client}
          </p>
          <p className="mt-1 text-sm text-ink/60">{project.summary}</p>
        </div>
        <span className="shrink-0 font-display text-sm tabular-nums text-ink/40">
          {project.year}
        </span>
      </div>
    </Link>
  );
}
