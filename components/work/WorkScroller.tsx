"use client";

import { useEffect, useRef } from "react";
import ProjectCard from "@/components/work/ProjectCard";
import type { Project } from "@/lib/data/projects";

export default function WorkScroller({ projects }: { projects: Project[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    function onWheel(e: WheelEvent) {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;

      const atStart = el!.scrollLeft <= 0;
      const atEnd = el!.scrollLeft >= el!.scrollWidth - el!.clientWidth - 1;
      const scrollingDown = e.deltaY > 0;

      if ((scrollingDown && !atEnd) || (!scrollingDown && !atStart)) {
        e.preventDefault();
        e.stopPropagation();
        el!.scrollLeft += e.deltaY;
      }
    }

    // Lenis intercepts wheel events globally for smooth page scroll; pause it
    // while hovering so it can't fight the horizontal redirect above.
    function onEnter() {
      window.__lenis?.stop();
    }
    function onLeave() {
      window.__lenis?.start();
    }

    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      window.__lenis?.start();
    };
  }, []);

  return (
    <div
      ref={scrollerRef}
      className="no-scrollbar -mx-6 flex snap-x snap-proximity gap-8 overflow-x-auto px-6 pb-4 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12"
    >
      {projects.map((project) => (
        <div key={project.slug} className="w-[78vw] shrink-0 snap-start sm:w-[420px]">
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}
