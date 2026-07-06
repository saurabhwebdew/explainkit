"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Reveal } from "@/components/ui/reveal";
import { process } from "@/lib/data";

export function HowItWorks() {
  return (
    <section id="process" className="py-24 md:py-32 bg-surface border-y border-line">
      <Container>
        <SectionTitle eyebrow="Process" title="Five steps, no surprises in the middle." />

        <div className="relative mt-6">
          {/* Track line + animated fill — mirrors the reference's scroll-triggered progress bar */}
          <div className="hidden md:block absolute top-[7px] left-0 right-0 h-px bg-line" />
          <motion.div
            className="hidden md:block absolute top-[7px] left-0 h-px bg-accent-gradient"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          />

          <div className="grid md:grid-cols-5 gap-8 md:gap-6 relative">
            {process.map((item, i) => (
              <Reveal key={item.step} delay={i * 0.08} className="relative pt-7">
                {/* Dot marker on the track */}
                <span className="hidden md:block absolute top-0 left-0 w-[15px] h-[15px] rounded-full bg-surface border-2 border-accent-600" />

                <span className="font-mono text-xs text-accent-700 tracking-wide">
                  Step {item.step}
                </span>
                <h3 className="font-semibold text-lg mt-2 tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
