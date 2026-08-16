import type { Metadata } from "next";
import { layers, featuresByLayer } from "@/app/features/data";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FeatureGrid } from "@/components/marketing/FeatureGrid";
import { CTABand } from "@/components/marketing/CTABand";
import { JsonLd } from "@/components/seo/JsonLd";
import { softwareApplicationSchema } from "@/components/seo/schema/softwareApplication";

export const metadata: Metadata = {
  title: "Features — Runtime Protection Capabilities",
  description:
    "Every AppShield capability: root & jailbreak detection, anti-hooking, SSL pinning, tamper detection, runtime risk scoring, and more — organized across three protection layers.",
  alternates: { canonical: "/features/" },
};

export default function FeaturesPage() {
  return (
    <>
      <JsonLd data={softwareApplicationSchema()} />
      <Section bg="gradient" className="pb-12 pt-14">
        <div className="flex flex-col gap-6">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Features", href: "/features/" }]} />
          <SectionHeading
            align="left"
            eyebrow="Capabilities"
            title="Nine real capabilities, three protection layers"
            description="No generic RASP checklist — every capability below maps to an actual module in the AppShield native core."
          />
        </div>
      </Section>

      {layers.map((layer, index) => (
        <Section key={layer.id} bg={index % 2 === 0 ? "white" : "subtle"}>
          <div className="flex flex-col gap-10">
            <SectionHeading align="left" title={layer.title} description={layer.description} />
            <FeatureGrid features={featuresByLayer(layer.id)} />
          </div>
        </Section>
      ))}

      <CTABand />
    </>
  );
}
