import SectionHeading from "@/components/ui/SectionHeading";
import PopReveal from "@/components/ui/PopReveal";
import { processFrameworkName, processSteps } from "@/lib/data/process";
import { cn } from "@/lib/utils";

const letterColors = [
  "text-accent",
  "text-accent-2",
  "text-accent-3",
  "text-accent-2",
  "text-accent",
];

export default function Process() {
  return (
    <section id="how-we-work" className="px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeading
          index="05"
          eyebrow="How we work"
          title={processFrameworkName}
          description="Five steps, one continuous team. Every engagement moves through the same framework, whether it starts with a rebrand, a rebuild, or a positioning problem."
          className="mb-8"
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-5">
          {processSteps.map((step, i) => (
            <PopReveal key={step.letter} delay={i * 0.09}>
              <div className="border-t border-ink/15 pt-6">
                <span
                  className={cn(
                    "font-display text-4xl font-medium",
                    letterColors[i % letterColors.length]
                  )}
                >
                  {step.letter}
                </span>
              </div>
              <h3 className="mt-4 font-display text-xl font-medium tracking-tight text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                {step.description}
              </p>
            </PopReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
