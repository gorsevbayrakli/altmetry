"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";

const lines = ["We build the", "systems behind", "brands that perform."];

const lineVariants = {
  hidden: { opacity: 0, y: 40, rotate: -1.5 },
  visible: { opacity: 1, y: 0, rotate: 0 },
};

export default function Hero() {
  return (
    <section
      id="signal"
      className="gradient-mesh relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-32 pb-16 sm:px-8 lg:px-12"
    >
      <div
        aria-hidden
        className="animate-blob-a pointer-events-none absolute -right-40 top-16 h-[26rem] w-[26rem] rounded-full bg-accent/20 blur-[110px]"
      />
      <div
        aria-hidden
        className="animate-blob-b pointer-events-none absolute -left-40 bottom-0 h-[22rem] w-[22rem] rounded-full bg-accent-2/15 blur-[100px]"
      />
      <div
        aria-hidden
        className="animate-blob-a pointer-events-none absolute left-1/3 top-1/2 h-[20rem] w-[20rem] rounded-full bg-accent-3/15 blur-[100px]"
      />

      <div className="relative mx-auto w-full max-w-[1440px]">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 flex items-center gap-4 text-sm uppercase tracking-wide text-ink/50"
        >
          <span className="font-display tabular-nums">01</span>
          <span className="h-px w-8 bg-ink/30" />
          Design · Development · Consulting
        </motion.p>

        <h1 className="font-display text-[13vw] font-medium leading-[0.95] tracking-tight text-ink sm:text-[9vw] lg:text-[110px]">
          {lines.map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                initial="hidden"
                animate="visible"
                variants={lineVariants}
                transition={{
                  duration: 0.7,
                  delay: 0.1 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="block origin-left"
              >
                {i === lines.length - 1 ? (
                  <>
                    brands that <span className="text-accent">perform.</span>
                  </>
                ) : (
                  line
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg"
        >
          Altmetry is a hybrid design & development studio, creative agency,
          and consulting company — one team, three disciplines, sold as an
          integrated system instead of separate services.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton href="/contact">Start a project</MagneticButton>
          <MagneticButton href="/work" variant="outline">
            See the work
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-ink/40 sm:flex"
      >
        <span>Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px bg-ink/30"
        />
      </motion.div>
    </section>
  );
}
