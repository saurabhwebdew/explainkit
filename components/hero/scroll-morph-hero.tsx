"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useReducedMotion, useMediaQuery } from "@/hooks/use-media-query";

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
  const isMobile = useMediaQuery("(max-width: 767px)");
  // The sticky + overflow-hidden + scroll-scrubbed pattern below only works when
  // ALL static content (text + cards) fits inside one screen height — scrolling
  // only drives x/y/rotate motion values, it never moves the cards' position
  // within the frame. On mobile, text + 4 cards is taller than the viewport, so
  // the cards sit below the visible frame and get clipped by overflow-hidden —
  // permanently, not "until you scroll enough". So small screens skip the whole
  // scroll-scrub mechanism and use the simple static layout instead, same as
  // the reduced-motion path.
  const simple = prefersReduced || isMobile;

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
      className={simple ? "relative h-auto" : "relative h-[220vh] md:h-[260vh]"}
    >
      <div className={cnSticky(simple)}>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 right-0 w-[420px] h-[420px] bg-glow-radial opacity-60"
        />
        <div className="max-w-content mx-auto px-6 md:px-10 w-full relative">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            style={simple ? undefined : { y: headlineY, scale: headlineScale }}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-accent-50 px-3 py-1 text-xs font-medium text-accent mb-4 sm:mb-7">
              Explainer videos that convert & educate
            </p>
            <h1 className="font-semibold tracking-tight leading-[1.04] text-[clamp(1.9rem,6vw,4.25rem)] text-ink balance">
              Turn Complex Products Into Stories People Remember.
            </h1>
            <p className="mt-3 sm:mt-5 text-base sm:text-lg text-muted leading-relaxed max-w-xl mx-auto">
              Create beautiful explainer videos, product demos, and AI-powered marketing content in days instead of weeks.
            </p>
            <div className="mt-5 sm:mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button href="#contact" size="lg">Start a Project</Button>
              <Button href="#showcase" variant="secondary" size="lg">Watch Demo</Button>
            </div>
          </motion.div>

          <div className="relative h-[220px] sm:h-[260px] md:h-[340px] mt-6 sm:mt-10 md:mt-20">
            {cards.map((card, i) => (
              <HeroCard
                key={card.id}
                card={card}
                progress={progress}
                simple={simple}
                prefersReduced={prefersReduced}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function cnSticky(simple: boolean) {
  return simple
    ? "relative pt-24 sm:pt-28 pb-10 flex flex-col justify-center"
    // justify-start (not justify-center) is deliberate: centering inside a fixed
    // h-screen box overflows equally above AND below when content is taller than
    // the viewport. Anchoring from the top with a fixed pt guarantees the
    // content can only ever grow downward, never up into the nav.
    : "sticky top-0 h-screen pt-28 md:pt-36 pb-6 flex flex-col justify-start overflow-hidden";
}

function HeroCard({
  card,
  progress,
  simple,
  prefersReduced,
  index,
}: {
  card: CardSpec;
  progress: ReturnType<typeof useSpring>;
  simple: boolean;
  prefersReduced: boolean;
  index: number;
}) {
  // Starts at 0 (not 0.05+) so the very first scroll pixel already moves the
  // cards, and finishes by ~0.4-0.48 so assembly completes within one normal
  // scroll on the desktop/tablet sizes that still use this scroll-scrub path.
  const range: [number, number] = [index * 0.02, 0.4 + index * 0.02];
  const x = useTransform(progress, range, [card.scatter.x, card.grid.x]);
  const y = useTransform(progress, range, [card.scatter.y, card.grid.y]);
  const rotate = useTransform(progress, range, [card.scatter.rotate, 0]);

  if (simple) {
    const gridStyle = { left: `calc(50% + ${card.grid.x}px)`, top: card.grid.y };

    if (prefersReduced) {
      // True OS-level reduced-motion request: no movement at all, just present.
      return (
        <div className="absolute w-[150px] h-[190px] md:w-[190px] md:h-[240px] -translate-x-1/2 shadow-lift" style={gridStyle}>
          <CardVisual id={card.id} />
        </div>
      );
    }

    // Mobile (but motion is otherwise fine): same "scatter flies into grid"
    // effect as desktop, but time-based on mount instead of scroll-driven — so
    // it still animates without needing the sticky/overflow-hidden pattern
    // that clipped it before. Final position is the static grid slot; x/y
    // start offset by the scatter delta and animate down to 0.
    return (
      <motion.div
        className="absolute w-[150px] h-[190px] md:w-[190px] md:h-[240px] -translate-x-1/2 shadow-lift"
        style={gridStyle}
        initial={{
          opacity: 0,
          scale: 0.85,
          x: card.scatter.x - card.grid.x,
          y: card.scatter.y - card.grid.y,
          rotate: card.scatter.rotate,
        }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0, rotate: 0 }}
        transition={{ duration: 0.7, delay: 0.15 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <CardVisual id={card.id} />
      </motion.div>
    );
  }

  return (
    <motion.div
      className="absolute w-[150px] h-[190px] md:w-[190px] md:h-[240px] -translate-x-1/2 shadow-lift"
      style={{ x, y, rotate, left: "50%", top: 0 } as any}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.15 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <CardVisual id={card.id} />
    </motion.div>
  );
}
