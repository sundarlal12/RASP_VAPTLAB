import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { industries, getIndustryBySlug } from "@/app/solutions/data";
import { getFeatureBySlug } from "@/app/features/data";
import { pageKeywords } from "@/lib/seo";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { IconTile } from "@/components/ui/IconTile";
import { FeatureGrid } from "@/components/marketing/FeatureGrid";
import { CTABand } from "@/components/marketing/CTABand";

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};

  return {
    title: `${industry.title} — Solutions`,
    description: industry.summary,
    keywords: pageKeywords([
      `${industry.title} app security`,
      `${industry.title} mobile security`,
      `${industry.title} RASP`,
    ]),
    alternates: { canonical: `/solutions/industries/${industry.slug}/` },
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  const relatedFeatures = industry.relevantFeatures
    .map((featureSlug) => getFeatureBySlug(featureSlug))
    .filter((feature): feature is NonNullable<typeof feature> => Boolean(feature));

  return (
    <>
      <Section bg="gradient" className="pb-14 pt-14">
        <div className="flex flex-col gap-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Solutions", href: "/solutions/" },
              { label: industry.title, href: `/solutions/industries/${industry.slug}/` },
            ]}
          />
          <div className="flex flex-col gap-5">
            <IconTile icon={industry.icon} className="h-14 w-14 [&>svg]:h-6 [&>svg]:w-6" />
            <h1 className="font-display text-3xl font-bold tracking-tight text-ink-950 sm:text-5xl">
              Protect for {industry.title}
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-ink-500">{industry.description}</p>
          </div>
        </div>
      </Section>

      {relatedFeatures.length > 0 ? (
        <Section bg="white">
          <div className="flex flex-col gap-10">
            <h2 className="font-display text-xl font-bold text-ink-950">Relevant capabilities</h2>
            <FeatureGrid features={relatedFeatures} />
          </div>
        </Section>
      ) : null}

      <CTABand
        title={`Ready to protect your ${industry.title.toLowerCase()} app?`}
      />
    </>
  );
}
