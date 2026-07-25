"use client";

import { useActiveSection } from "@/lib/hooks/useActiveSection";
import { homeSections } from "@/lib/data/sections";
import { cn, scrollToId } from "@/lib/utils";

export default function SectionIndexRail() {
  const ids = homeSections.map((s) => s.id);
  const activeId = useActiveSection(ids);

  function handleClick(id: string) {
    scrollToId(id, -24);
  }

  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-4 lg:flex"
    >
      {homeSections.map((section) => {
        const isActive = section.id === activeId;
        return (
          <button
            key={section.id}
            onClick={() => handleClick(section.id)}
            className="group flex items-center gap-4"
            aria-current={isActive ? "true" : undefined}
          >
            <span
              className={cn(
                "font-display text-xs tabular-nums transition-all duration-300",
                isActive
                  ? "text-accent opacity-100"
                  : "text-ink/40 opacity-0 group-hover:opacity-100"
              )}
            >
              {section.label}
            </span>
            <span
              className={cn(
                "h-px transition-all duration-300",
                isActive ? "w-8 bg-accent" : "w-4 bg-ink/30 group-hover:w-6 group-hover:bg-ink/60"
              )}
            />
            <span
              className={cn(
                "font-display text-xs tabular-nums transition-colors duration-300",
                isActive ? "text-accent" : "text-ink/40 group-hover:text-ink/70"
              )}
            >
              {section.index}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
