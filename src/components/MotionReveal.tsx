"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

export const EASE_EDITORIAL = [0.22, 1, 0.36, 1] as const;

export const SCROLL_VIEWPORT = {
  once: true,
  amount: 0.12,
  margin: "0px 0px -32px 0px",
} as const;

interface MotionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
}

/**
 * Reusable scroll-triggered reveal wrapper that keeps parent Server Components
 * intact and respects `prefers-reduced-motion`.
 */
export function MotionReveal({
  children,
  className,
  delay = 0,
  y = 14,
  duration = 0.55,
}: MotionRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={SCROLL_VIEWPORT}
      transition={{
        duration: prefersReducedMotion ? 0 : duration,
        delay: prefersReducedMotion ? 0 : delay,
        ease: EASE_EDITORIAL,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
