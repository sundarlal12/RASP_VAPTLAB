import type { Metadata } from "next";
import { industries, useCases } from "@/app/solutions/data";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { IndustryGrid } from "@/components/marketing/IndustryGrid";
import { UseCaseGrid } from "@/components/marketing/UseCaseGrid";
import { CTABand } from "@/components/marketing/CTABand";

export const metadata: Metadata = {
  title: "Solutions — By Industry & Use Case",
  description:
    "How Protect applies to fintech, gaming, healthcare, government, retail, and media apps — and to specific problems like anti-scraping, app cloning, and MITM prevention.",
  alternates: { canonical: "/solutions/" },
};

export default function SolutionsPage() {
  return (
    <>
      <Section bg="gradient" className="pb-12 pt-14">
        <div className="flex flex-col gap-6">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Solutions", href: "/solutions/" }]} />
          <SectionHeading
            align="left"
            eyebrow="Solutions"
            title="The same protections, applied to your risk"
            description="Browse by the industry you operate in, or by the specific threat you're trying to close off."
          />
        </div>
      </Section>

      <Section bg="white">
        <div className="flex flex-col gap-10">
          <SectionHeading align="left" title="By industry" />
          <IndustryGrid industries={industries} />
        </div>
      </Section>

      <Section bg="subtle">
        <div className="flex flex-col gap-10">
          <SectionHeading align="left" title="By use case" />
          <UseCaseGrid useCases={useCases} />
        </div>
      </Section>

      <CTABand />
    </>
  );
}
