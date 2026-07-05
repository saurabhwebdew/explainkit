import { Navbar } from "@/components/home/navbar";
import { ScrollMorphHero } from "@/components/hero/scroll-morph-hero";
import { TrustedBy } from "@/components/home/trusted-by";
import { Services } from "@/components/home/services";
import { WhyExplainKit } from "@/components/home/why-explainkit";
import { InteractiveShowcase } from "@/components/home/interactive-showcase";
import { HowItWorks } from "@/components/home/how-it-works";
import { CaseStudies } from "@/components/home/case-studies";
import { Testimonials } from "@/components/home/testimonials";
import { PricingPreview } from "@/components/home/pricing";
import { Faq } from "@/components/home/faq";
import { FinalCta } from "@/components/home/final-cta";
import { Footer } from "@/components/home/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <ScrollMorphHero />
        <TrustedBy />
        <Services />
        <WhyExplainKit />
        <InteractiveShowcase />
        <HowItWorks />
        <CaseStudies />
        <Testimonials />
        <PricingPreview />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
