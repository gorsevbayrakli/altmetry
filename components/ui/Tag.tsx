import { cn } from "@/lib/utils";

export type TagTone = "neutral" | "accent" | "accent-2" | "accent-3";

const toneClasses: Record<TagTone, string> = {
  neutral: "border-current/15 text-current/70",
  accent: "border-accent/30 bg-accent/10 text-accent",
  "accent-2": "border-accent-2/30 bg-accent-2/10 text-accent-2",
  "accent-3": "border-accent-3/40 bg-accent-3/10 text-accent-3",
};

const dotClasses: Record<TagTone, string> = {
  neutral: "bg-current/40",
  accent: "bg-accent",
  "accent-2": "bg-accent-2",
  "accent-3": "bg-accent-3",
};

export default function Tag({
  children,
  className,
  active = false,
  tone = "neutral",
  variant = "pill",
}: {
  children: React.ReactNode;
  className?: string;
  active?: boolean;
  tone?: TagTone;
  variant?: "pill" | "dot";
}) {
  if (variant === "dot") {
    return (
      <span className={cn("inline-flex items-center gap-2 text-sm text-ink/70", className)}>
        <span aria-hidden className={cn("h-1 w-1 shrink-0 rounded-full", dotClasses[active ? "accent" : tone])} />
        {children}
      </span>
    );
  }

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-4 py-2 text-xs tracking-wide",
        active ? toneClasses.accent : toneClasses[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
