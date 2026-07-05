"use client";

import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

const features = [
  "First premium advantage",
  "Second advantage weekly",
  "Third advantage donate to project",
  "Fourth, access to all components weekly",
];

export function PricingPreview() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-muted/40">
      <Container>
        <SectionTitle
          eyebrow="Pricing"
          title="Pricing that scales with your business"
          description="Choose the perfect plan for your needs and start optimizing your workflow today"
          align="center"
        />

        <Reveal className="mt-12 md:mt-16">
          <div className="rounded-2xl border border-line bg-white shadow-softer">
            <div className="grid items-center gap-12 divide-y divide-line p-8 md:grid-cols-2 md:divide-x md:divide-y-0 md:p-12">
              <div className="pb-12 text-center md:pb-0 md:pr-12">
                <h3 className="text-2xl font-semibold">Suite Enterprise</h3>
                <p className="mt-2 text-lg text-muted">For your company of any size</p>
                <span className="mb-6 mt-12 inline-block text-6xl font-bold">
                  <span className="text-4xl">$</span>234
                </span>
                <div className="flex justify-center">
                  <Button href="#contact" size="lg">
                    Get started
                  </Button>
                </div>
                <p className="mt-12 text-sm text-muted">
                  Includes: Security, Unlimited Storage, Payment, Search engine, and all features
                </p>
              </div>

              <div>
                <ul role="list" className="space-y-4">
                  {features.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Check className="size-3 shrink-0 text-accent-600" strokeWidth={3.5} />
                      <span className="text-ink/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
