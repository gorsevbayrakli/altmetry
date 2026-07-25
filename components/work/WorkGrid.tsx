"use client";

import { useMemo, useState } from "react";
import ProjectCard from "@/components/work/ProjectCard";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import {
  disciplines,
  industries,
  years,
  type Project,
  type Discipline,
} from "@/lib/data/projects";

type FilterGroup = "discipline" | "industry" | "year";

function FilterRow({
  label,
  options,
  active,
  onSelect,
}: {
  label: string;
  options: string[];
  active: string | null;
  onSelect: (value: string | null) => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-2 text-xs uppercase tracking-wide text-ink/40">{label}</span>
      <button
        onClick={() => onSelect(null)}
        className={cn(
          "rounded-full border px-4 py-2 text-xs transition-colors",
          active === null
            ? "border-accent bg-accent/10 text-accent"
            : "border-ink/15 text-ink/60 hover:border-ink/40"
        )}
      >
        All
      </button>
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onSelect(opt)}
          className={cn(
            "rounded-full border px-4 py-2 text-xs transition-colors",
            active === opt
              ? "border-accent bg-accent/10 text-accent"
              : "border-ink/15 text-ink/60 hover:border-ink/40"
          )}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

export default function WorkGrid({
  projects,
  showFilters = false,
}: {
  projects: Project[];
  showFilters?: boolean;
}) {
  const [filters, setFilters] = useState<Record<FilterGroup, string | null>>({
    discipline: null,
    industry: null,
    year: null,
  });

  function setFilter(group: FilterGroup, value: string | null) {
    setFilters((prev) => ({ ...prev, [group]: value }));
  }

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      if (filters.discipline && !p.discipline.includes(filters.discipline as Discipline))
        return false;
      if (filters.industry && p.industry !== filters.industry) return false;
      if (filters.year && String(p.year) !== filters.year) return false;
      return true;
    });
  }, [projects, filters]);

  return (
    <div>
      {showFilters && (
        <div className="mb-10 flex flex-col gap-4 border-b border-ink/10 pb-8">
          <FilterRow
            label="Discipline"
            options={disciplines}
            active={filters.discipline}
            onSelect={(v) => setFilter("discipline", v)}
          />
          <FilterRow
            label="Industry"
            options={industries}
            active={filters.industry}
            onSelect={(v) => setFilter("industry", v)}
          />
          <FilterRow
            label="Year"
            options={years.map(String)}
            active={filters.year}
            onSelect={(v) => setFilter("year", v)}
          />
        </div>
      )}

      {filtered.length === 0 ? (
        <p className="py-16 text-center text-ink/50">
          No projects match those filters yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 3) * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
