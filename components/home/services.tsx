"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { RevealGroup, Reveal } from "@/components/ui/reveal";
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

        <RevealGroup className="grid sm:grid-cols-2 gap-5" stagger={0.1}>
          {services.map((service) => (
            <Reveal as="div" key={service.code}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="group h-full rounded-2xl border border-line bg-white p-7 shadow-softer hover:shadow-soft transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-xl bg-accent-50 text-accent-700 grid place-items-center font-semibold text-sm">
                    {service.code}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-muted opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all"
                  />
                </div>
                <h3 className="font-semibold text-xl mt-5 tracking-tight">{service.title}</h3>
                <p className="mt-2.5 text-muted leading-relaxed">{service.description}</p>
                <ul className="mt-5 space-y-1.5">
                  {service.bullets.map((b) => (
                    <li key={b} className="text-sm text-ink/70 flex items-start gap-2">
                      <span className="mt-2 w-1 h-1 rounded-full bg-accent-600 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent-700 hover:gap-2 transition-all"
                >
                  Learn more <ArrowUpRight size={14} />
                </a>
              </motion.div>
            </Reveal>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
