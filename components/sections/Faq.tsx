"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { faq } from "@/lib/data/faq";
import { cn } from "@/lib/utils";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="questions" className="gradient-mesh relative overflow-hidden px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeading index="08" eyebrow="Questions" title="Everything you're probably wondering." className="mb-8" />

        <div className="mx-auto flex max-w-3xl flex-col gap-4">
          {faq.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={item.question} delay={(i % 4) * 0.05} as="div" className="glass rounded-2xl px-6">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg font-medium tracking-tight text-ink sm:text-xl">
                    {item.question}
                  </span>
                  <span
                    className={cn(
                      "shrink-0 font-display text-xl text-accent transition-transform duration-300",
                      isOpen && "rotate-45"
                    )}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-6 text-sm leading-relaxed text-ink/70">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
