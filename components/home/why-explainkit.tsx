"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { RevealGroup, Reveal } from "@/components/ui/reveal";
import { bento } from "@/lib/data";
import { cn } from "@/lib/utils";

const sizeClasses: Record<string, string> = {
  lg: "sm:col-span-2 sm:row-span-2",
  md: "sm:col-span-2",
  sm: "sm:col-span-1",
};

export function WhyExplainKit() {
  return (
    <section className="py-24 md:py-32 bg-surface border-y border-line">
      <Container>
        <SectionTitle
          eyebrow="Why ExplainKit"
          title="Built like a product team, not a project queue."
        />

        <RevealGroup className="grid sm:grid-cols-3 gap-5 auto-rows-[160px]" stagger={0.08}>
          {bento.map((tile) => (
            <Reveal key={tile.title} className={cn(sizeClasses[tile.size])}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 280, damping: 24 }}
                className="h-full rounded-2xl bg-canvas border border-line p-6 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-semibold text-lg tracking-tight">{tile.title}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed max-w-[26ch]">
                    {tile.description}
                  </p>
                </div>
                {tile.metric && (
                  <span className="font-semibold text-3xl text-accent-600 tracking-tight">
                    {tile.metric}
                  </span>
                )}
              </motion.div>
            </Reveal>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
