"use client";

import { useEffect, useRef } from "react";
import ProjectCard from "@/components/work/ProjectCard";
import type { Project } from "@/lib/data/projects";

export default function WorkScroller({ projects }: { projects: Project[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    // Lenis intercepts wheel events globally for smooth page scroll. mouseenter
    // doesn't fire when this row scrolls under an already-stationary cursor
    // (the normal case while scrolling down the page), so pausing Lenis can't
    // depend on hover-enter timing — it has to be decided per wheel event.
    function onWheel(e: WheelEvent) {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;

      const atStart = el!.scrollLeft <= 0;
      const atEnd = el!.scrollLeft >= el!.scrollWidth - el!.clientWidth - 1;
      const scrollingDown = e.deltaY > 0;
      const shouldRedirect = (scrollingDown && !atEnd) || (!scrollingDown && !atStart);

      if (shouldRedirect) {
        window.__lenis?.stop();
        e.preventDefault();
        e.stopPropagation();
        el!.scrollLeft += e.deltaY;
      } else {
        window.__lenis?.start();
      }
    }

    function onLeave() {
      window.__lenis?.start();
    }

    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("mouseleave", onLeave);
      window.__lenis?.start();
    };
  }, []);

  return (
    <div
      ref={scrollerRef}
      className="no-scrollbar -mx-6 flex gap-8 overflow-x-auto px-6 pb-4 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12"
    >
      {projects.map((project) => (
        <div key={project.slug} className="w-[78vw] shrink-0 sm:w-[420px]">
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}
