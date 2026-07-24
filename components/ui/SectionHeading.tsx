import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  dark?: boolean;
  className?: string;
}

export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal className={cn("max-w-3xl", className)}>
      <div
        className={cn(
          "mb-4 flex items-center gap-3 font-display text-sm tabular-nums tracking-wide",
          dark ? "text-dark-ink/50" : "text-ink/50"
        )}
      >
        <span>{index}</span>
        <span className="h-px w-8 bg-current/40" />
        <span className="uppercase">{eyebrow}</span>
      </div>
      <h2
        className={cn(
          "font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl md:text-6xl",
          dark ? "text-dark-ink" : "text-ink"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 max-w-xl text-base leading-relaxed sm:text-lg",
            dark ? "text-dark-ink/70" : "text-ink/70"
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
