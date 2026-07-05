import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  frameClassName?: string;
  spread?: number;
  proximity?: number;
  borderWidth?: number;
}

// Shared frame pattern: an outer bordered frame hosts the GlowingEffect,
// the inner element carries the real card styling (bg-surface, padding, etc).
// Use this anywhere a bounded card/panel should pick up the brand glow-on-hover.
export function GlowCard({
  children,
  className,
  frameClassName,
  spread = 40,
  proximity = 64,
  borderWidth = 2,
}: GlowCardProps) {
  return (
    <div className={cn("relative h-full rounded-2xl border border-line p-2", frameClassName)}>
      <GlowingEffect
        spread={spread}
        glow
        disabled={false}
        proximity={proximity}
        inactiveZone={0.01}
        borderWidth={borderWidth}
      />
      <div className={cn("relative h-full rounded-xl", className)}>{children}</div>
    </div>
  );
}
