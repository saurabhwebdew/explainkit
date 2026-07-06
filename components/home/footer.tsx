"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { footerNav, socials } from "@/lib/data";

export function Footer() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <footer className="pt-20 pb-10 border-t border-line bg-surface">
      <Container>
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-10">
          <div>
            <p className="font-semibold tracking-tight text-lg">ExplainKit</p>
            <p className="mt-3 text-sm text-muted max-w-xs leading-relaxed">
              Explainer videos and product demos that convert, educate, and help SaaS brands stand out.
            </p>
            <div className="mt-5 flex items-center gap-4">
              {socials.map((s) => (
                <a key={s.label} href={s.href} className="text-sm text-muted hover:text-ink transition-colors">
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerNav).map(([group, links]) => (
            <div key={group}>
              <p className="text-xs font-medium uppercase tracking-wide text-muted mb-4">{group}</p>
              <ul className="space-y-2.5 text-sm">
                {links.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-ink/80 hover:text-ink transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-muted mb-4">Stay in the loop</p>
            {submitted ? (
              <p className="text-sm text-accent-700">You're on the list — thanks.</p>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="flex items-center gap-2"
              >
                <label htmlFor="footer-email" className="sr-only">Email address</label>
                <input
                  id="footer-email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="w-full rounded-full border border-line bg-canvas px-4 py-2.5 text-sm"
                />
                <Button type="submit" size="md" className="shrink-0">
                  Join
                </Button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted">
          <span>© 2026 ExplainKit. All rights reserved.</span>
          <span>A webdew company</span>
        </div>
      </Container>
    </footer>
  );
}
