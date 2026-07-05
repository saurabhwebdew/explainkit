import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl mb-14 md:mb-16",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <p className="font-medium text-sm text-accent-600 mb-3 tracking-tight">{eyebrow}</p>
      <h2 className="font-semibold text-3xl md:text-[2.75rem] leading-[1.1] tracking-tight text-ink balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-muted leading-relaxed">{description}</p>
      )}
    </Reveal>
  );
}
