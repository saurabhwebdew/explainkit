"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { nav } from "@/lib/data";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="max-w-content mx-auto px-4 md:px-6 pt-4">
        <div className="flex items-center justify-between rounded-full border border-line/70 bg-white/80 backdrop-blur-md shadow-softer px-4 md:px-5 h-14">
          <a href="#home" className="font-semibold tracking-tight text-[15px]">
            ExplainKit
          </a>

          <nav className="hidden md:flex items-center gap-7 text-sm text-muted">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-ink transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button href="#contact" size="md" className="hidden sm:inline-flex">
              Start a Project
            </Button>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden w-9 h-9 grid place-items-center"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-2 rounded-2xl border border-line bg-white shadow-soft p-4 flex flex-col gap-3 text-sm"
          >
            {nav.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
          </motion.nav>
        )}
      </div>
    </header>
  );
}
