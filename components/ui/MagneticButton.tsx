"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  className?: string;
}

export default function MagneticButton({
  href,
  children,
  variant = "solid",
  className,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const prefersReducedMotion = useReducedMotion();

  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    if (prefersReducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
    setOffset({ x, y });
  }

  function handleMouseLeave() {
    setOffset({ x: 0, y: 0 });
  }

  return (
    <motion.div
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.3 }}
      className="inline-block"
    >
      <Link
        ref={ref}
        href={href}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "group relative inline-flex items-center gap-2 rounded-full px-6 py-4 text-sm font-medium tracking-tight transition-colors",
          variant === "solid" &&
            "bg-ink text-canvas hover:bg-accent hover:text-canvas",
          variant === "outline" &&
            "border border-ink/20 text-ink hover:border-accent hover:text-accent",
          className
        )}
      >
        <span className="relative">
          {children}
          <span
            aria-hidden
            className="absolute -bottom-0.5 left-0 h-px w-0 bg-current transition-all duration-300 group-hover:w-full"
          />
        </span>
      </Link>
    </motion.div>
  );
}
