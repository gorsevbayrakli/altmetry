"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const variants: Variants = {
  hidden: { opacity: 0, scale: 0.82, rotate: -3, y: 20 },
  visible: { opacity: 1, scale: 1, rotate: 0, y: 0 },
};

export default function PopReveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      transition={{ type: "spring", stiffness: 140, damping: 14, delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
