"use client";

// src/components/ui/AnimatedWrapper.tsx
// Framer Motion wrapper for scroll-triggered fade-in animations

import { motion, MotionProps } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedWrapperProps extends MotionProps {
  children: ReactNode;
  className?: string;
  /** Delay in seconds */
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export function AnimatedWrapper({
  children,
  className,
  delay = 0,
  direction = "up",
  ...rest
}: AnimatedWrapperProps) {
  const directionOffset = {
    up: { y: 32 },
    down: { y: -32 },
    left: { x: 32 },
    right: { x: -32 },
    none: {},
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directionOffset[direction] }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
