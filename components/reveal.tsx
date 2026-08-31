"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

const TAGS = {
  div: motion.div,
  section: motion.section,
  li: motion.li,
  figure: motion.figure,
} as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** direction the content drifts in from */
  from?: "up" | "left" | "right" | "none";
  delay?: number;
  as?: keyof typeof TAGS;
};

export function Reveal({
  children,
  className,
  from = "up",
  delay = 0,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = TAGS[as];

  // Same element type in every branch so hydration matches; only props vary.
  if (reduce) {
    return <MotionTag className={className}>{children}</MotionTag>;
  }

  const offset = { up: { y: 28 }, left: { x: -36 }, right: { x: 36 }, none: {} }[
    from
  ];

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-72px" }}
      transition={{ duration: 0.75, ease: EASE, delay }}
    >
      {children}
    </MotionTag>
  );
}
