import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ReactNode } from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-none";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-accent-gradient text-white dark:text-canvas shadow-soft hover:shadow-lift hover:brightness-110",
  secondary: "bg-surface text-ink border border-line hover:border-ink/20 shadow-softer",
  ghost: "text-ink hover:bg-ink/5",
};

const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-[15px]",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);
  const isPrimary = variant === "primary";

  const content = href ? (
    <Link href={href} className={classes}>
      {children}
    </Link>
  ) : (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );

  if (!isPrimary) return content;

  return (
    <span className="relative inline-flex rounded-full">
      <GlowingEffect
        spread={30}
        glow
        disabled={false}
        proximity={60}
        inactiveZone={0.01}
        borderWidth={2}
        className="rounded-full"
      />
      {content}
    </span>
  );
}
