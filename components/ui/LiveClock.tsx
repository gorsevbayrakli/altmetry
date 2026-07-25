"use client";

import { useLiveClock } from "@/lib/hooks/useLiveClock";
import { cn } from "@/lib/utils";

export default function LiveClock({
  className,
  showLocation = true,
}: {
  className?: string;
  showLocation?: boolean;
}) {
  const time = useLiveClock();

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-xs tracking-wide text-ink/60",
        className
      )}
    >
      <span
        aria-hidden
        className="h-1.5 w-1.5 rounded-full bg-accent motion-safe:animate-pulse"
      />
      <span>
        {showLocation && "Based in Istanbul · "}
        <span className="tabular-nums font-display">
          {time ?? "00:00:00"}
        </span>
      </span>
    </span>
  );
}
