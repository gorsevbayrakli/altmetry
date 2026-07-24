import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Counter from "@/components/ui/Counter";
import { stats } from "@/lib/data/stats";
import { cn } from "@/lib/utils";

const statColors = ["text-accent", "text-accent-2", "text-accent-3", "text-accent-2"];

export default function Impact() {
  return (
    <section
      id="by-the-numbers"
      className="relative overflow-hidden bg-dark px-6 py-24 text-dark-ink sm:px-8 lg:px-12 lg:py-36"
    >
      <div
        aria-hidden
        className="animate-blob-a pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-accent/20 blur-[100px]"
      />
      <div
        aria-hidden
        className="animate-blob-b pointer-events-none absolute -right-24 bottom-0 h-[28rem] w-[28rem] rounded-full bg-accent-2/20 blur-[110px]"
      />

      <div className="relative mx-auto max-w-[1440px]">
        <SectionHeading
          index="04"
          eyebrow="By the numbers"
          title="Results, not vibes."
          dark
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} className="glass-dark rounded-2xl p-6 lg:p-8">
              <p
                className={cn(
                  "font-display text-5xl font-medium tabular-nums tracking-tight sm:text-6xl",
                  statColors[i % statColors.length]
                )}
              >
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-sm text-dark-ink/60">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
