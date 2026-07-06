"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { Button } from "@/components/ui/button";
import { VideoLightbox } from "@/components/ui/video-lightbox";
import { useReducedMotion, useMediaQuery } from "@/hooks/use-media-query";

type Card = {
  title: string;
  thumbnail: string;
  videoUrl: string;
};

// 16 project thumbnails. Swap `thumbnail` for a real frame grab and `videoUrl`
// for the matching Bunny.net Stream embed once uploaded — same pattern as the
// Showcase section (format: https://iframe.mediadelivery.net/embed/{LIBRARY_ID}/{VIDEO_ID}).
const CARDS: Card[] = [
  { title: "SaaS Onboarding", thumbnail: "https://picsum.photos/seed/ek-01/400/540" },
  { title: "Fintech Compliance", thumbnail: "https://picsum.photos/seed/ek-02/400/540" },
  { title: "API Explainer", thumbnail: "https://picsum.photos/seed/ek-03/400/540" },
  { title: "Product Launch", thumbnail: "https://picsum.photos/seed/ek-04/400/540" },
  { title: "Feature Walkthrough", thumbnail: "https://picsum.photos/seed/ek-05/400/540" },
  { title: "Whiteboard Explainer", thumbnail: "https://picsum.photos/seed/ek-06/400/540" },
  { title: "Investor Pitch", thumbnail: "https://picsum.photos/seed/ek-07/400/540" },
  { title: "Motion Brand Reel", thumbnail: "https://picsum.photos/seed/ek-08/400/540" },
  { title: "Mobile App Demo", thumbnail: "https://picsum.photos/seed/ek-09/400/540" },
  { title: "AI Workflow Explainer", thumbnail: "https://picsum.photos/seed/ek-10/400/540" },
  { title: "Enterprise Rollout", thumbnail: "https://picsum.photos/seed/ek-11/400/540" },
  { title: "Dev Tools Demo", thumbnail: "https://picsum.photos/seed/ek-12/400/540" },
  { title: "Healthcare Platform", thumbnail: "https://picsum.photos/seed/ek-13/400/540" },
  { title: "Logistics Explainer", thumbnail: "https://picsum.photos/seed/ek-14/400/540" },
  { title: "Sales Enablement", thumbnail: "https://picsum.photos/seed/ek-15/400/540" },
  { title: "Brand Story", thumbnail: "https://picsum.photos/seed/ek-16/400/540" },
].map((c) => ({ ...c, videoUrl: "https://iframe.mediadelivery.net/embed/REPLACE_LIBRARY_ID/REPLACE_VIDEO_ID" }));

const CARD_W = 96;
const CARD_H = 130;
const RADIUS = 280;

function ThumbCard({ card, onPlay }: { card: Card; onPlay: () => void }) {
  return (
    <button
      onClick={onPlay}
      aria-label={`Play ${card.title}`}
      className="group relative h-full w-full overflow-hidden rounded-2xl shadow-lift"
    >
      <img src={card.thumbnail} alt={card.title} className="h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-colors" />
      <span className="absolute inset-0 grid place-items-center">
        <span className="w-8 h-8 rounded-full bg-white/90 grid place-items-center group-hover:scale-110 transition-transform">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="#0A0A0B"><path d="M8 5v14l11-7z" /></svg>
        </span>
      </span>
      <span className="absolute bottom-2 left-2 right-2 text-[10px] font-medium text-white truncate">
        {card.title}
      </span>
    </button>
  );
}

function CirclingCard({
  card,
  index,
  total,
  progress,
  onPlay,
}: {
  card: Card;
  index: number;
  total: number;
  progress: MotionValue<number>;
  onPlay: () => void;
}) {
  const angleDeg = (360 / total) * index - 90;
  const angleRad = (angleDeg * Math.PI) / 180;

  const arcX = Math.cos(angleRad) * RADIUS;
  const arcY = Math.sin(angleRad) * RADIUS;
  const arcRotate = angleDeg + 90;

  const flatSpacing = CARD_W + 10;
  const flatX = (index - (total - 1) / 2) * flatSpacing;
  const flatY = 0;

  const x = useTransform(progress, [0, 1], [arcX, flatX]);
  const y = useTransform(progress, [0, 1], [arcY, flatY]);
  const rotate = useTransform(progress, [0, 1], [arcRotate, 0]);

  return (
    <motion.div
      className="absolute left-1/2 top-1/2"
      style={{ x, y, rotate, width: CARD_W, height: CARD_H, marginLeft: -CARD_W / 2, marginTop: -CARD_H / 2 }}
    >
      <ThumbCard card={card} onPlay={onPlay} />
    </motion.div>
  );
}

// Mobile/reduced-motion: no circle math, no scroll dependency — a plain
// responsive grid of the same thumbnail+play-icon cards.
function MobileCardGrid({ onPlay }: { onPlay: (url: string) => void }) {
  return (
    <div className="grid grid-cols-4 gap-2 max-w-[420px] mx-auto mt-8">
      {CARDS.map((card) => (
        <div key={card.title} style={{ aspectRatio: `${CARD_W}/${CARD_H}` }}>
          <ThumbCard card={card} onPlay={() => onPlay(card.videoUrl)} />
        </div>
      ))}
    </div>
  );
}

export function ScrollMorphHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const isMobile = useMediaQuery("(max-width: 767px)");
  const simple = prefersReduced || isMobile;
  const [playing, setPlaying] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const progress = useTransform(scrollYProgress, [0.1, 0.8], [0, 1]);
  const hintOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="home"
      className={simple ? "relative h-auto overflow-x-hidden" : "relative h-[260vh] bg-canvas"}
    >
      <div className={simple ? "relative pt-24 sm:pt-28 pb-16" : "sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden pt-20"}>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 right-0 w-[420px] h-[420px] bg-glow-radial opacity-60"
        />

        <div className="max-w-content mx-auto px-6 md:px-10 w-full relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mx-auto"
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
        </div>

        {simple ? (
          <MobileCardGrid onPlay={setPlaying} />
        ) : (
          <div className="relative h-[560px] w-full mt-6">
            {CARDS.map((card, i) => (
              <CirclingCard
                key={card.title}
                card={card}
                index={i}
                total={CARDS.length}
                progress={progress}
                onPlay={() => setPlaying(card.videoUrl)}
              />
            ))}
          </div>
        )}

        {!simple && (
          <motion.div
            style={{ opacity: hintOpacity }}
            className="absolute bottom-8 text-xs font-medium uppercase tracking-[0.3em] text-muted"
          >
            Scroll to unfold · Click a card to play
          </motion.div>
        )}
      </div>

      <VideoLightbox videoUrl={playing} onClose={() => setPlaying(null)} />
    </section>
  );
}

export default ScrollMorphHero;
