import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function unsplash(id: string, width = 1600) {
  return `https://images.unsplash.com/photo-${id}?q=80&w=${width}&auto=format&fit=crop`;
}

export function scrollToId(id: string, offset = 0) {
  const el = document.getElementById(id);
  if (!el) return;

  if (typeof window !== "undefined" && window.__lenis) {
    window.__lenis.scrollTo(el, { offset });
  } else {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

const disciplineTones = {
  Design: "accent",
  Development: "accent-2",
  Consulting: "accent-3",
} as const;

export function disciplineTone(discipline: keyof typeof disciplineTones) {
  return disciplineTones[discipline];
}
