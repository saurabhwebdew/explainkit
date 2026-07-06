"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useReducedMotion } from "@/hooks/use-media-query";

type CardSpec = {
  id: string;
  label: string;
  scatter: { x: number; y: number; rotate: number };
  grid: { x: number; y: number };
};

// Four cards stand in for the visual types named in the brief:
// video thumbnail, SaaS dashboard, motion graphic, whiteboard sketch.
const cards: CardSpec[] = [
  { id: "explainer", label: "Explainer", scatter: { x: -300, y: -60, rotate: -13 }, grid: { x: -330, y: 40 } },
  { id: "demo", label: "Product Demo", scatter: { x: 260, y: 80, rotate: 11 }, grid: { x: -110, y: 40 } },
  { id: "motion", label: "Motion Graphics", scatter: { x: -160, y: 210, rotate: -8 }, grid: { x: 110, y: 40 } },
  { id: "whiteboard", label: "Whiteboard", scatter: { x: 220, y: -170, rotate: 9 }, grid: { x: 330, y: 40 } },
];

function CardVisual({ id }: { id: string }) {
  if (id === "explainer") {
    return (
      <div className="relative w-full h-full rounded-2xl overflow-hidden bg-accent-gradient">
        <span className="absolute top-3 left-3 text-[10px] font-medium text-accent-700 bg-surface/80 rounded-full px-2 py-0.5">Explainer</span>
        <span className="absolute bottom-3 right-3 text-[11px] font-medium text-white/80">01:24</span>
        <span className="absolute inset-0 grid place-items-center">
          <span className="w-11 h-11 rounded-full bg-surface shadow-soft grid place-items-center">
            <svg width="14" height="14" viewBox="0 0 24 24" className="fill-accent"><path d="M8 5v14l11-7z" /></svg>
          </span>
        </span>
      </div>
    );
  }
  if (id === "demo") {
    return (
      <div className="relative w-full h-full rounded-2xl bg-surface p-3 flex flex-col gap-2 border border-line">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-line" />
          <span className="w-2 h-2 rounded-full bg-line" />
          <span className="w-2 h-2 rounded-full bg-line" />
        </div>
        <div className="flex-1 rounded-lg bg-canvas p-2 flex items-end gap-1.5">
          {[40, 65, 30, 80, 55].map((h, i) => (
            <div key={i} className="flex-1 rounded-sm bg-accent/70" style={{ height: `${h}%` }} />
          ))}
        </div>
        <div className="h-2 w-2/3 rounded bg-line" />
      </div>
    );
  }
  if (id === "motion") {
    return (
      <div className="relative w-full h-full rounded-2xl overflow-hidden bg-ink">
        <span className="absolute top-3 left-3 text-[10px] font-medium text-white/80 bg-white/10 rounded-full px-2 py-0.5">Motion</span>
        <svg className="absolute inset-0 m-auto" width="46" height="46" viewBox="0 0 46 46">
          <circle cx="23" cy="23" r="16" stroke="white" strokeOpacity="0.5" strokeWidth="2" fill="none" />
          <circle cx="23" cy="23" r="4" fill="white" />
        </svg>
      </div>
    );
  }
  return (
    <div className="relative w-full h-full rounded-2xl bg-surface border border-line p-4 flex items-center justify-center">
      <svg width="64" height="40" viewBox="0 0 64 40" fill="none" className="stroke-ink" strokeWidth="1.6" strokeLinecap="round">
        <path d="M4 30 C 18 6, 40 6, 60 20" strokeDasharray="3 4" />
        <path d="M52 14 L60 20 L52 26" />
      </svg>
    </div>
  );
}

export function ScrollMorphHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 260, damping: 34, mass: 0.4 });

  // Headline settles slightly as the cards assemble.
  const headlineY = useTransform(progress, [0, 0.5], [0, -28]);
  const headlineScale = useTransform(progress, [0, 0.5], [1, 0.96]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative"
      style={{ height: prefersReduced ? "auto" : "260vh" }}
    >
      <div className={cnSticky(prefersReduced)}>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 right-0 w-[420px] h-[420px] bg-glow-radial opacity-60"
        />
        <div className="max-w-content mx-auto px-6 md:px-10 w-full relative">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            style={prefersReduced ? undefined : { y: headlineY, scale: headlineScale }}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-accent-50 px-3 py-1 text-xs font-medium text-accent mb-7">
              Explainer videos that convert & educate
            </p>
            <h1 className="font-semibold tracking-tight leading-[1.04] text-[clamp(2.25rem,5.4vw,4.25rem)] text-ink balance">
              Turn Complex Products Into Stories People Remember.
            </h1>
            <p className="mt-5 text-lg text-muted leading-relaxed max-w-xl mx-auto">
              Create beautiful explainer videos, product demos, and AI-powered marketing content in days instead of weeks.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button href="#contact" size="lg">Start a Project</Button>
              <Button href="#showcase" variant="secondary" size="lg">Watch Demo</Button>
            </div>
          </motion.div>

          <div className="relative h-[300px] md:h-[340px] mt-16 md:mt-20">
            {cards.map((card, i) => (
              <HeroCard key={card.id} card={card} progress={progress} prefersReduced={prefersReduced} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function cnSticky(prefersReduced: boolean) {
  return prefersReduced
    ? "relative pt-28 pb-16 flex flex-col justify-center"
    : "sticky top-0 h-screen flex flex-col justify-center overflow-hidden";
}

function HeroCard({
  card,
  progress,
  prefersReduced,
  index,
}: {
  card: CardSpec;
  progress: ReturnType<typeof useSpring>;
  prefersReduced: boolean;
  index: number;
}) {
  const range: [number, number] = [0.05 + index * 0.03, 0.55 + index * 0.03];
  const x = useTransform(progress, range, [card.scatter.x, card.grid.x]);
  const y = useTransform(progress, range, [card.scatter.y, card.grid.y]);
  const rotate = useTransform(progress, range, [card.scatter.rotate, 0]);
  const scale = useTransform(progress, [0, range[0]], [0.85, 1]);
  const opacity = useTransform(progress, [0, range[0] + 0.05], [0, 1]);

  const style = prefersReduced
    ? { left: `calc(50% + ${card.grid.x}px)`, top: card.grid.y }
    : { x, y: prefersReduced ? undefined : y, rotate, scale, opacity, left: "50%", top: 0 };

  return (
    <motion.div
      className="absolute w-[150px] h-[190px] md:w-[190px] md:h-[240px] -translate-x-1/2 shadow-lift"
      style={style as any}
    >
      <CardVisual id={card.id} />
    </motion.div>
  );
}
