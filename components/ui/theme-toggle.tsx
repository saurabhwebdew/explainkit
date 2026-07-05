"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  if (!mounted) {
    return <div className={`w-9 h-9 ${className}`} aria-hidden="true" />;
  }

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`w-9 h-9 grid place-items-center rounded-full text-muted hover:text-ink transition-colors ${className}`}
    >
      {isDark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}
