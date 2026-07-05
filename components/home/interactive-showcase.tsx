"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Reveal } from "@/components/ui/reveal";
import { showcaseTabs } from "@/lib/data";
import { cn } from "@/lib/utils";

export function InteractiveShowcase() {
  const [active, setActive] = useState(0);
  const tab = showcaseTabs[active];

  return (
    <section id="showcase" className="py-24 md:py-32">
      <Container>
        <SectionTitle
          eyebrow="Interactive Showcase"
          title="See the format, not just the pitch."
          description="A quick look at the three formats teams lean on most."
        />

        <div className="flex flex-wrap gap-2 mb-8">
          {showcaseTabs.map((t, i) => (
            <button
              key={t.label}
              onClick={() => setActive(i)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium border transition-colors",
                i === active
                  ? "bg-ink text-white border-ink"
                  : "bg-surface text-muted border-line hover:border-ink/30"
              )}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 items-center">
          <Reveal className="rounded-2xl3 bg-ink relative overflow-hidden aspect-video shadow-lift">
            <AnimatePresence mode="wait">
              <motion.div
                key={tab.label}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 bg-accent-gradient"
              />
            </AnimatePresence>

            <div className="absolute inset-0 grid place-items-center">
              <span className="w-16 h-16 rounded-full bg-white/90 grid place-items-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#0A0A0B">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </div>

            <div className="absolute bottom-0 inset-x-0 p-5">
              <div className="flex items-center justify-between text-white/80 text-xs mb-2">
                <span>{tab.label}</span>
                <span>{tab.duration}</span>
              </div>
              <div className="h-1 rounded-full bg-white/20 overflow-hidden">
                <motion.div
                  key={tab.label}
                  className="h-full bg-white rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 6, ease: "linear", repeat: Infinity }}
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="font-semibold text-2xl tracking-tight">{tab.title}</h3>
            <p className="mt-3 text-muted leading-relaxed">{tab.description}</p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-line bg-surface p-4">
                <p className="text-xs font-medium text-muted mb-2">Before ExplainKit</p>
                <div className="space-y-1.5">
                  <div className="h-2 rounded bg-line w-full" />
                  <div className="h-2 rounded bg-line w-5/6" />
                  <div className="h-2 rounded bg-line w-4/6" />
                </div>
                <p className="mt-3 text-xs text-muted">A features page nobody finishes reading.</p>
              </div>
              <div className="rounded-xl border border-accent-100 bg-accent-50 p-4">
                <p className="text-xs font-medium text-accent-700 mb-2">After ExplainKit</p>
                <div className="h-10 rounded-lg bg-surface flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 24 24" className="fill-accent"><path d="M8 5v14l11-7z" /></svg>
                </div>
                <p className="mt-3 text-xs text-accent-700">45 seconds, watched to the end.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
