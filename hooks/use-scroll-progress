"use client";

import { useRef } from "react";
import { useScroll, useSpring, type MotionValue } from "framer-motion";

/**
 * Tracks scroll progress through a target element and returns a
 * spring-smoothed MotionValue (0 -> 1). Shared by ScrollMorphHero and
 * FinalCta so both sections can reuse the same underlying motion language,
 * per the brief's "background animation should reuse elements from hero".
 */
export function useScrollProgress<T extends HTMLElement>(offset: ["start end" | "start start", "end start" | "end end"] = ["start start", "end start"]) {
  const ref = useRef<T>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset });
  const smoothProgress: MotionValue<number> = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 32,
    mass: 0.4,
  });
  return { ref, scrollYProgress, smoothProgress };
}
