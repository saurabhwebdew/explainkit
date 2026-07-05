"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { RevealGroup, Reveal } from "@/components/ui/reveal";
import { caseStudies } from "@/lib/data";

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 md:py-32">
      <Container>
        <SectionTitle
          eyebrow="Case Studies"
          title="Real projects, real constraints."
          description="A few of the problems teams brought to us — and what shipped."
        />

        <RevealGroup className="grid lg:grid-cols-3 gap-6" stagger={0.1}>
          {caseStudies.map((cs) => (
            <Reveal key={cs.client}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 280, damping: 24 }}
                className="h-full rounded-2xl border border-line bg-surface p-7 flex flex-col shadow-softer hover:shadow-soft transition-shadow"
              >
                <span className="text-xs font-medium text-accent-700 bg-accent-50 rounded-full px-2.5 py-1 w-fit">
                  {cs.industry}
                </span>
                <h3 className="font-semibold text-xl mt-4 tracking-tight">{cs.client}</h3>

                <div className="mt-5 space-y-4 text-sm flex-1">
                  <div>
                    <p className="font-medium text-ink/80 mb-1">Challenge</p>
                    <p className="text-muted leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div>
                    <p className="font-medium text-ink/80 mb-1">Solution</p>
                    <p className="text-muted leading-relaxed">{cs.solution}</p>
                  </div>
                  <div>
                    <p className="font-medium text-ink/80 mb-1">Results</p>
                    <p className="text-accent-700 font-medium leading-relaxed">{cs.results}</p>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-ink hover:gap-2 transition-all"
                >
                  Discuss a similar project <ArrowUpRight size={14} />
                </a>
              </motion.div>
            </Reveal>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
