import Image from "next/image";
import Link from "next/link";
import type { Scenario } from "@/lib/data/projects";

/** Örnek senaryo kartı (koyu zemin). */
export default function ProjectCard({ scenario }: { scenario: Scenario }) {
  return (
    <Link href={`/work/${scenario.slug}`} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-dark-raise">
        <Image
          src={scenario.coverImage}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
        <span className="absolute left-4 top-4 rounded-full bg-dark-deep px-3 py-1 text-sm text-dark-ink">Örnek senaryo</span>
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <h3 className="text-xl font-semibold text-dark-ink group-hover:underline group-hover:decoration-1 group-hover:underline-offset-4">{scenario.name}</h3>
        <p className="shrink-0 text-sm text-dark-ink-2">{scenario.sector}</p>
      </div>
      <p className="mt-2 text-base leading-relaxed text-dark-ink-2">{scenario.summary}</p>
    </Link>
  );
}
