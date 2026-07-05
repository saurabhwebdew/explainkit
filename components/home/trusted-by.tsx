import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { trustedBy } from "@/lib/data";

export function TrustedBy() {
  const loop = [...trustedBy, ...trustedBy];

  return (
    <section className="py-16 border-y border-line">
      <Container>
        <Reveal className="text-center">
          <p className="text-xs font-medium uppercase tracking-wide text-muted mb-8">
            Trusted by product &amp; growth teams at
          </p>
        </Reveal>
      </Container>
      <div className="relative overflow-hidden mask-fade">
        <div className="flex w-max animate-marquee gap-16 px-8">
          {loop.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="text-xl font-semibold tracking-tight text-ink/30 whitespace-nowrap"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
