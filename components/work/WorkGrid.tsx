"use client";

import { useMemo, useState } from "react";
import ProjectCard from "@/components/work/ProjectCard";
import { cn } from "@/lib/utils";
import { scenarioAreas, scenarioSectors, type Scenario } from "@/lib/data/projects";
import type { ServiceArea } from "@/lib/data/services";

type FilterGroup = "area" | "sector";

function FilterRow({ label, options, active, onSelect }: { label: string; options: string[]; active: string | null; onSelect: (value: string | null) => void }) {
  return (
    <fieldset className="flex flex-wrap items-center gap-2">
      <legend className="sr-only">{label}</legend>
      <span aria-hidden className="mr-2 w-16 text-base text-dark-ink-2">
        {label}
      </span>
      {[null, ...options].map((opt) => (
        <button
          key={opt ?? "__all"}
          type="button"
          onClick={() => onSelect(opt)}
          aria-pressed={active === opt}
          className={cn(
            "inline-flex min-h-11 items-center rounded-full border px-4 text-base transition-colors",
            active === opt ? "border-peach bg-peach text-ink" : "border-dark-line text-dark-ink hover:border-dark-ink-2"
          )}
        >
          {opt ?? "Tümü"}
        </button>
      ))}
    </fieldset>
  );
}

/**
 * Senaryo ızgarası. Filtrelenen öğeler sonradan değiştiği için kaydırma animasyonu (data-up) taşımaz;
 * aksi hâlde yeni gelen kartlar görünmez kalabilirdi.
 */
export default function WorkGrid({ scenarios, showFilters = false }: { scenarios: Scenario[]; showFilters?: boolean }) {
  const [filters, setFilters] = useState<Record<FilterGroup, string | null>>({ area: null, sector: null });

  const filtered = useMemo(
    () =>
      scenarios.filter((s) => {
        if (filters.area && !s.areas.includes(filters.area as ServiceArea)) return false;
        if (filters.sector && s.sector !== filters.sector) return false;
        return true;
      }),
    [scenarios, filters]
  );

  return (
    <div>
      {showFilters && (
        <div className="mb-12 flex flex-col gap-4 border-b border-dark-line pb-8">
          <FilterRow label="Alan" options={scenarioAreas} active={filters.area} onSelect={(v) => setFilters((p) => ({ ...p, area: v }))} />
          <FilterRow label="Sektör" options={scenarioSectors} active={filters.sector} onSelect={(v) => setFilters((p) => ({ ...p, sector: v }))} />
        </div>
      )}
      {filtered.length === 0 ? (
        <p className="py-16 text-center text-base text-dark-ink-2">Bu filtrelere uyan senaryo yok.</p>
      ) : (
        <ul className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((s) => (
            <li key={s.slug}>
              <ProjectCard scenario={s} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
