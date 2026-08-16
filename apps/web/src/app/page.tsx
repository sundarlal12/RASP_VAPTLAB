import type { Metadata } from "next";
import { Hero } from "@/components/marketing/Hero";
import { LogoStrip } from "@/components/marketing/LogoStrip";
import { ProtectionLayerGrid } from "@/components/marketing/ProtectionLayerGrid";
import { FeatureGrid } from "@/components/marketing/FeatureGrid";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import { IndustryGrid } from "@/components/marketing/IndustryGrid";
import { SecurityStackVisual } from "@/components/marketing/SecurityStackVisual";
import { TrustBadgeCluster } from "@/components/marketing/TrustBadgeCluster";
import { TestimonialGrid } from "@/components/marketing/TestimonialGrid";
import { FAQSection } from "@/components/marketing/FAQSection";
import { CTABand } from "@/components/marketing/CTABand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { softwareApplicationSchema } from "@/components/seo/schema/softwareApplication";
import { features } from "@/app/features/data";
import { industries } from "@/app/solutions/data";
import { faqs } from "@/app/faq/data";

export const metadata: Metadata = {
  title: "AppShield — RASP SDK for Android",
  description:
    "AppShield is a native-C++ RASP SDK for Android: root and tamper detection, anti-hooking, SSL pinning, and continuous runtime defense against reverse engineering and app-based fraud.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={softwareApplicationSchema()} />
      <Hero />
      <LogoStrip />

      <Section bg="white">
        <ProtectionLayerGrid />
      </Section>

      <Section bg="subtle">
        <div className="flex flex-col gap-14">
          <SectionHeading
            eyebrow="Capabilities"
            title="Every detection module, at a glance"
            description="Nine real capabilities across the SDK's three protection layers — each with its own deep-dive page."
          />
          <FeatureGrid features={features} />
        </div>
      </Section>

      <Section bg="white">
        <div className="flex flex-col items-center gap-10">
          <SectionHeading
            eyebrow="Architecture"
            title="A hardened native core, not a Java wrapper"
            description="Detection and cryptographic logic run in native C++ — meaningfully harder to decompile and reverse-engineer than JVM bytecode."
          />
          <SecurityStackVisual />
        </div>
      </Section>

      <Section bg="subtle">
        <HowItWorks />
      </Section>

      <Section bg="white">
        <div className="flex flex-col gap-14">
          <SectionHeading
            eyebrow="Solutions"
            title="Built for high-risk industries"
            description="The same core protections, applied to the threats that matter most in your industry."
          />
          <IndustryGrid industries={industries} />
          <div className="flex justify-center">
            <Button href="/solutions/" variant="outline">
              See all solutions
            </Button>
          </div>
        </div>
      </Section>

      <Section bg="subtle">
        <TrustBadgeCluster />
      </Section>

      <Section bg="white">
        <TestimonialGrid />
      </Section>

      <Section bg="subtle" narrow>
        <FAQSection items={faqs.slice(0, 4)} />
        <div className="mt-10 flex justify-center">
          <Button href="/faq/" variant="ghost">
            View all FAQs →
          </Button>
        </div>
      </Section>

      <CTABand />
    </>
  );
}
