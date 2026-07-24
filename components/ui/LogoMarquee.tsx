"use client";

import { useReducedMotion } from "framer-motion";
import type { Client } from "@/lib/data/clients";
import { cn } from "@/lib/utils";

export default function LogoMarquee({ clients }: { clients: Client[] }) {
  const prefersReducedMotion = useReducedMotion();
  const track = [...clients, ...clients];

  return (
    <div
      className={cn(
        "group relative overflow-hidden border-y border-ink/10 py-8",
        "[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      )}
    >
      <div
        className={cn(
          "flex w-max items-center gap-16 whitespace-nowrap",
          !prefersReducedMotion && "animate-marquee group-hover:[animation-play-state:paused]"
        )}
      >
        {track.map((client, i) => (
          <span
            key={`${client.name}-${i}`}
            className="font-display text-xl text-ink/40 grayscale transition-all duration-300 hover:text-ink hover:grayscale-0 sm:text-2xl"
          >
            {client.name}
          </span>
        ))}
      </div>
    </div>
  );
}
