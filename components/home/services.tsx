"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { RevealGroup, Reveal } from "@/components/ui/reveal";
import { GlowCard } from "@/components/ui/glow-card";
import { services } from "@/lib/data";

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <Container>
        <SectionTitle
          eyebrow="Services"
          title="One team, every format your funnel needs."
          description="From first-touch explainer to in-product walkthrough — built by people who specialize in video, not a generalist agency roster."
        />

        <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4" stagger={0.08}>
          {services.map((service) => (
            <Reveal as="div" key={service.code} className="h-full">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="h-full"
              >
                <GlowCard
                  className="bg-surface p-7 flex flex-col h-full shadow-softer hover:shadow-soft transition-shadow group"
                  spread={35}
                  proximity={55}
                >
                  {/* Monospace code badge — matches the reference's terminal-style service tags */}
                  <span className="w-11 h-11 rounded-lg bg-accent-50 border border-accent-100 text-accent-700 grid place-items-center font-mono text-xs font-semibold tracking-wide">
                    {service.code}
                  </span>

                  <h3 className="font-semibold text-lg mt-6 tracking-tight">{service.title}</h3>
                  <p className="mt-2.5 text-sm text-muted leading-relaxed">{service.description}</p>

                  <ul className="mt-5 space-y-2 flex-1">
                    {service.bullets.map((b) => (
                      <li key={b} className="text-[13px] text-muted pl-4 relative leading-relaxed">
                        <span className="absolute left-0 text-accent-600">—</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-ink border-b border-accent-600 w-fit pb-0.5 group-hover:gap-2 transition-all"
                  >
                    Learn more <ArrowUpRight size={14} />
                  </a>
                </GlowCard>
              </motion.div>
            </Reveal>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
