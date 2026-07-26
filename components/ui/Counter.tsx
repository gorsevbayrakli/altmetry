"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

interface CounterProps {
  value: number;
  suffix?: string;
  className?: string;
}

export default function Counter({ value, suffix = "", className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1800, bounce: 0 });

  // Default to the real value so a missed reveal trigger (fast loads, direct
  // anchor jumps, reduced motion, or an observer that never fires) never
  // leaves the number stuck at 0 — the count-up is enhancement only.
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (prefersReducedMotion || !isInView) return;
    setDisplay(0);
    motionValue.set(value);
  }, [isInView, value, motionValue, prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const unsubscribe = spring.on("change", (latest) => {
      setDisplay(Math.round(latest));
    });
    return unsubscribe;
  }, [spring, prefersReducedMotion]);

  return (
    <span ref={ref} className={className} aria-label={`${value}${suffix}`}>
      {display}
      {suffix}
    </span>
  );
}
