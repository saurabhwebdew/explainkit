"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { RevealGroup, Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { pricing } from "@/lib/data";
import { cn } from "@/lib/utils";

export function PricingPreview() {
  return (
    <section id="pricing" className="py-24 md:py-32">
      <Container>
        <SectionTitle
          eyebrow="Pricing"
          title="A starting point, not a final quote."
          description="Every project is scoped after a short discovery call — here's the shape of what that usually looks like."
          align="center"
        />

        <RevealGroup className="grid md:grid-cols-3 gap-6 items-start" stagger={0.1}>
          {pricing.map((plan) => (
            <Reveal key={plan.tier}>
              <motion.div
                whileHover={{ y: -4 }}
                className={cn(
                  "h-full rounded-2xl p-7 border shadow-softer",
                  plan.featured
                    ? "bg-ink text-white border-ink shadow-lift md:scale-[1.03]"
                    : "bg-white border-line"
                )}
              >
                <p className={cn("text-sm font-medium", plan.featured ? "text-white/70" : "text-muted")}>
                  {plan.tier}
                </p>
                <p className={cn("mt-1 text-sm", plan.featured ? "text-white/60" : "text-muted")}>
                  {plan.tagline}
                </p>
                <p className="mt-6 text-3xl font-semibold tracking-tight">
                  {plan.priceFrom}
                  {plan.priceFrom !== "Custom" && (
                    <span className={cn("text-sm font-normal", plan.featured ? "text-white/60" : "text-muted")}> starting</span>
                  )}
                </p>

                <ul className="mt-6 space-y-2.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check size={15} className={cn("mt-0.5 shrink-0", plan.featured ? "text-white" : "text-accent-600")} />
                      <span className={plan.featured ? "text-white/90" : "text-ink/80"}>{f}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  href="#contact"
                  size="md"
                  variant={plan.featured ? "secondary" : "primary"}
                  className="mt-8 w-full"
                >
                  {plan.cta}
                </Button>
              </motion.div>
            </Reveal>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
