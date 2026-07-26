import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/data/projects";

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
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <p className="font-display text-lg font-medium tracking-tight text-ink group-hover:text-accent transition-colors">
            {project.client}
          </p>
          <p className="mt-2 text-sm text-ink/60">{project.summary}</p>
        </div>
        <span className="shrink-0 font-display text-sm tabular-nums text-ink/40">
          {project.year}
        </span>
      </div>
    </Link>
  );
}
