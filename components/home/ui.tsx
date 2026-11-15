import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden className={cn("h-4 w-4 shrink-0", className)}>
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden className={cn("h-4 w-4 shrink-0", className)}>
      <path d="M3.5 8.5l3 3 6-7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Hap buton. primary: turuncu ana eylem; light: açık zeminli; dark: koyu. Yükseklik 48px. */
export function Pill({ href, children, tone = "primary", className }: { href: string; children: ReactNode; tone?: "primary" | "light" | "dark"; className?: string }) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-base font-medium transition-colors",
        tone === "primary" && "bg-accent text-ink hover:bg-accent-hover",
        tone === "light" && "bg-dark-ink text-ink hover:bg-canvas",
        tone === "dark" && "bg-ink text-dark-ink hover:bg-dark",
        className
      )}
    >
      {children}
      <ArrowIcon />
    </Link>
  );
}

/** Altı çizili metin bağlantısı + ok. */
export function TextLink({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link href={href} className={cn("inline-flex min-h-12 items-center gap-2 text-base font-medium underline decoration-1 underline-offset-[6px] hover:decoration-2", className)}>
      {children}
      <ArrowIcon />
    </Link>
  );
}
