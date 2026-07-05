"use client";

import { motion, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { useScrollProgress } from "@/hooks/use-scroll-progress";

export function FinalCta() {
  const { ref, smoothProgress } = useScrollProgress<HTMLDivElement>(["start end", "end start"]);
  const blobX = useTransform(smoothProgress, [0, 1], [-40, 40]);
  const blobRotate = useTransform(smoothProgress, [0, 1], [-6, 6]);

  return (
    <section id="contact" ref={ref} className="relative py-28 md:py-36 overflow-hidden">
      {/* Echoes the hero's motion-card gradient — same visual language, quieter here. */}
      <motion.div
        aria-hidden
        style={{ x: blobX, rotate: blobRotate }}
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[560px] h-[560px] rounded-full opacity-[0.07] blur-3xl pointer-events-none"
      >
        <div className="w-full h-full rounded-full bg-accent-gradient" />
      </motion.div>

      <div className="relative max-w-2xl mx-auto px-6 text-center">
        <Reveal>
          <h2 className="font-semibold tracking-tight text-4xl md:text-5xl balance">
            Ready to explain better?
          </h2>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Book a 20-minute call. We'll tell you honestly whether video is the right move before you spend a dollar on production.
          </p>
          <div className="mt-9">
            <Button href="mailto:hello@explainkit.com" size="lg">
              Book Strategy Call
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
