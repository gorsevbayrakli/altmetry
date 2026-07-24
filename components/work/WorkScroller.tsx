"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import ProjectCard from "@/components/work/ProjectCard";
import type { Project } from "@/lib/data/projects";

export default function WorkScroller({ projects }: { projects: Project[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollDistance, setScrollDistance] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    function measure() {
      if (!trackRef.current || !containerRef.current) return;
      const trackWidth = trackRef.current.scrollWidth;
      const viewportWidth = containerRef.current.offsetWidth;
      setScrollDistance(Math.max(trackWidth - viewportWidth, 0));
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [projects]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  if (prefersReducedMotion) {
    return (
      <div className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-8 overflow-x-auto px-6 pb-4 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12">
        {projects.map((project) => (
          <div key={project.slug} className="w-[78vw] shrink-0 snap-start sm:w-[420px]">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: `calc(100vh + ${scrollDistance}px)` }}
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex gap-8 px-6 sm:px-8 lg:px-12"
        >
          {projects.map((project) => (
            <div key={project.slug} className="w-[78vw] shrink-0 sm:w-[420px]">
              <ProjectCard project={project} />
            </div>
          ))}
        </motion.div>

        <div className="pointer-events-none absolute inset-x-6 bottom-10 h-px bg-ink/10 sm:inset-x-8 lg:inset-x-12">
          <motion.div
            style={{ width: progressWidth }}
            className="h-full bg-accent"
          />
        </div>
      </div>
    </div>
  );
}
