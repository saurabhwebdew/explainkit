"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { RevealGroup, Reveal } from "@/components/ui/reveal";
import { process } from "@/lib/data";

export function HowItWorks() {
  return (
    <section id="process" className="py-24 md:py-32 bg-surface border-y border-line">
      <Container>
        <SectionTitle eyebrow="How It Works" title="Five steps, no surprises in the middle." />

        <div className="relative">
          <div className="hidden md:block absolute top-5 left-0 right-0 h-px bg-line" />
          <RevealGroup
            className="grid md:grid-cols-5 gap-8 md:gap-6 relative"
            stagger={0.1}
          >
            {process.map((item) => (
              <Reveal key={item.step} className="relative">
                <motion.div
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 rounded-full bg-ink text-white grid place-items-center text-sm font-medium relative z-10"
                >
                  {item.step}
                </motion.div>
                <h3 className="font-semibold text-lg mt-5 tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{item.description}</p>
              </Reveal>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
