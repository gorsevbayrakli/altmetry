"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data/testimonials";
import { cn } from "@/lib/utils";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 text-accent" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={cn("h-4 w-4", i < rating ? "fill-accent" : "fill-ink/15")}
          aria-hidden
        >
          <path d="M10 1.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6-4.5-4.2 6.1-.7z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  function next() {
    setIndex((i) => (i + 1) % testimonials.length);
  }
  function prev() {
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  }

  return (
    <section id="words" className="gradient-mesh relative overflow-hidden px-6 py-24 sm:px-8 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeading index="07" eyebrow="Words" title="From the people we've built with." className="mb-16" />

        <div className="glass mx-auto max-w-2xl rounded-3xl p-8 sm:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <Stars rating={active.rating} />
              <p className="mt-6 font-display text-2xl font-medium leading-snug tracking-tight text-ink sm:text-3xl">
                &ldquo;{active.quote}&rdquo;
              </p>
              <p className="mt-6 text-sm text-ink/60">
                <span className="font-medium text-ink">{active.name}</span>
                {" · "}
                {active.role}, {active.company}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex items-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 transition-colors hover:border-accent hover:text-accent"
            >
              ←
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 transition-colors hover:border-accent hover:text-accent"
            >
              →
            </button>
            <div className="flex gap-2 pl-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={cn(
                    "h-1.5 rounded-full transition-all",
                    i === index ? "w-6 bg-accent" : "w-1.5 bg-ink/20"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
