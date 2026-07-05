"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { RevealGroup, Reveal } from "@/components/ui/reveal";
import { GlowCard } from "@/components/ui/glow-card";
import { testimonials } from "@/lib/data";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-surface border-y border-line">
      <Container>
        <SectionTitle eyebrow="Testimonials" title="What it's like to work with us." />

        <RevealGroup className="grid md:grid-cols-3 gap-6" stagger={0.1}>
          {testimonials.map((t) => (
            <Reveal key={t.name}>
              <motion.div whileHover={{ y: -3 }} className="h-full">
                <GlowCard className="backdrop-blur-md bg-surface/60 p-7 flex flex-col shadow-softer">
                  <svg width="24" height="24" viewBox="0 0 24 24" className="fill-accent opacity-80 mb-4">
                    <path d="M7 7h4v4c0 3-2 5-5 5v-2c1.5 0 2.5-1 2.5-2.5H7V7zm8 0h4v4c0 3-2 5-5 5v-2c1.5 0 2.5-1 2.5-2.5h-1.5V7z" />
                  </svg>
                  <p className="text-ink leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-6 flex items-center gap-3">
                    <span className="w-9 h-9 rounded-full bg-accent-50 text-accent-700 text-xs font-semibold grid place-items-center">
                      {initials(t.name)}
                    </span>
                    <div>
                      <p className="text-sm font-medium">{t.name}</p>
                      <p className="text-xs text-muted">{t.role}</p>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            </Reveal>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
