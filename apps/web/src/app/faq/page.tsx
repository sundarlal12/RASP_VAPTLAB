import type { Metadata } from "next";
import { faqs } from "@/app/faq/data";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FAQSection } from "@/components/marketing/FAQSection";
import { CTABand } from "@/components/marketing/CTABand";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqPageSchema } from "@/components/seo/schema/faqPage";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about AppShield's integration, detection behavior, and pricing.",
  alternates: { canonical: "/faq/" },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqPageSchema(faqs)} />
      <Section bg="gradient" className="pb-12 pt-14">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "FAQ", href: "/faq/" }]} />
      </Section>
      <Section bg="white" narrow>
        <FAQSection items={faqs} title="Frequently asked questions" />
      </Section>
      <CTABand />
    </>
  );
}
