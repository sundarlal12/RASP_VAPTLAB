import type { Metadata } from "next";
import { layers, featuresByLayer } from "@/app/features/data";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FeatureGrid } from "@/components/marketing/FeatureGrid";
import { RawHtmlAnimation } from "@/components/marketing/RawHtmlAnimation";
import { CTABand } from "@/components/marketing/CTABand";
import { JsonLd } from "@/components/seo/JsonLd";
import { softwareApplicationSchema } from "@/components/seo/schema/softwareApplication";
import { readLayerAnimation } from "@/lib/layerAnimations";
import { pageKeywords } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Features — Runtime Protection Capabilities",
  description:
    "Every Protect capability: root & jailbreak detection, anti-hooking, SSL pinning, tamper detection, runtime risk scoring, and more — organized across three protection layers.",
  keywords: pageKeywords([
    "root detection SDK Android",
    "jailbreak detection library",
    "anti-hooking SDK",
    "tamper detection Android",
    "runtime risk scoring",
    "OWASP MASVS compliance",
  ]),
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
            description="No generic RASP checklist — every capability below maps to an actual module in the Protect native core."
          />
        </div>
      </Section>

      {layers.map((layer, index) => {
        const reversed = index % 2 === 1;

        return (
          <Section key={layer.id} bg={index % 2 === 0 ? "white" : "subtle"}>
            <div className="flex flex-col gap-14">
              <div
                className={`flex flex-col items-center gap-10 xl:gap-16 ${
                  reversed ? "xl:flex-row-reverse" : "xl:flex-row"
                }`}
              >
                <div className="flex w-full flex-col items-start gap-4 xl:w-[340px] xl:flex-none">
                  <SectionHeading align="left" title={layer.title} description={layer.description} />
                </div>
                <div className="w-full flex-1 overflow-x-auto">
                  <RawHtmlAnimation html={readLayerAnimation(layer.id)} className="mx-auto w-full max-w-[672px]" />
                </div>
              </div>

              <FeatureGrid features={featuresByLayer(layer.id)} />
            </div>
          </Section>
        );
      })}

      <CTABand />
    </>
  );
}
