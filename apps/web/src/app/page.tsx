import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { Hero } from "@/components/marketing/Hero";
import { LogoStrip } from "@/components/marketing/LogoStrip";
import { ProtectionLayerShowcase } from "@/components/marketing/ProtectionLayerShowcase";
import { FeatureShowcaseGrid } from "@/components/marketing/FeatureShowcaseGrid";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import { IndustryGrid } from "@/components/marketing/IndustryGrid";
import { RawHtmlAnimation } from "@/components/marketing/RawHtmlAnimation";
import { TrustBadgeCluster } from "@/components/marketing/TrustBadgeCluster";
import { TestimonialCarousel } from "@/components/marketing/TestimonialCarousel";
import { FAQSection } from "@/components/marketing/FAQSection";
import { CTABand } from "@/components/marketing/CTABand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { softwareApplicationSchema } from "@/components/seo/schema/softwareApplication";
import { industries } from "@/app/solutions/data";
import { faqs } from "@/app/faq/data";

const sdkToDashboardAnimation = fs.readFileSync(
  path.join(process.cwd(), "src/components/marketing/raw-animations/sdk-to-dashboard-flow.html"),
  "utf-8",
);

export const metadata: Metadata = {
  title: "SecureLint Protect — AI-Powered, No-Code Runtime Security for Mobile",
  description:
    "SecureLint Protect is AI-powered, no-code runtime application security for mobile: root and tamper detection, anti-hooking, SSL pinning, and continuous runtime defense against reverse engineering and app-based fraud.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={softwareApplicationSchema()} />
      <Hero />
      <LogoStrip />

      <Section bg="white">
        <div className="flex flex-col gap-16">
          <SectionHeading
            eyebrow="How SecureLint Protect works"
            title="Four layers of runtime protection"
            description="No single check is enough on its own. Each layer below maps to real modules in the Protect native core."
          />
          <ProtectionLayerShowcase />
        </div>
      </Section>

      <Section bg="white">
        <div className="flex flex-col gap-16">
          <SectionHeading
            eyebrow="See it in action"
            title="Every signal, backed by a real product surface"
            description="Not just detection modules — a policy engine, live session monitoring, and per-device risk scoring your team can actually configure."
          />
          <FeatureShowcaseGrid />
        </div>
      </Section>

      <Section bg="subtle">
        <div className="flex flex-col items-center gap-10">
          <SectionHeading
            eyebrow="Architecture"
            title="A hardened native core, not a Java wrapper"
            description="Detection and cryptographic logic run in native C++ — meaningfully harder to decompile and reverse-engineer than JVM bytecode."
          />
          <RawHtmlAnimation html={sdkToDashboardAnimation} className="w-full max-w-3xl" />
        </div>
      </Section>

      <Section bg="white">
        <HowItWorks />
      </Section>

      <Section bg="subtle">
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

      <Section bg="white">
        <TrustBadgeCluster />
      </Section>

      <Section bg="subtle">
        <TestimonialCarousel />
      </Section>

      <Section bg="white" narrow>
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
