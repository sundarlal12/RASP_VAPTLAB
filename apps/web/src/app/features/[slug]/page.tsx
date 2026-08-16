import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { features, getFeatureBySlug, layers } from "@/app/features/data";
import { industries, useCases } from "@/app/solutions/data";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { IconTile } from "@/components/ui/IconTile";
import { Badge } from "@/components/ui/Badge";
import { CTABand } from "@/components/marketing/CTABand";
import { Check } from "lucide-react";

export function generateStaticParams() {
  return features.map((feature) => ({ slug: feature.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const feature = getFeatureBySlug(slug);
  if (!feature) return {};

  return {
    title: feature.title,
    description: feature.summary,
    alternates: { canonical: `/features/${feature.slug}/` },
  };
}

export default async function FeatureDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const feature = getFeatureBySlug(slug);
  if (!feature) notFound();

  const layer = layers.find((candidate) => candidate.id === feature.layer);
  const relatedIndustries = industries.filter((industry) =>
    industry.relevantFeatures.includes(feature.slug),
  );
  const relatedUseCases = useCases.filter((useCase) =>
    useCase.relevantFeatures.includes(feature.slug),
  );

  return (
    <>
      <Section bg="gradient" className="pb-14 pt-14">
        <div className="flex flex-col gap-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Features", href: "/features/" },
              { label: feature.title, href: `/features/${feature.slug}/` },
            ]}
          />
          <div className="flex flex-col gap-5">
            <IconTile icon={feature.icon} className="h-14 w-14 [&>svg]:h-6 [&>svg]:w-6" />
            {layer ? <Badge>{layer.title}</Badge> : null}
            <h1 className="font-display text-3xl font-bold tracking-tight text-ink-950 sm:text-5xl">
              {feature.title}
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-ink-500">{feature.description}</p>
          </div>
        </div>
      </Section>

      <Section bg="white">
        <div className="mx-auto flex max-w-3xl flex-col gap-10">
          <div>
            <h2 className="font-display text-xl font-bold text-ink-950">How it works</h2>
            <ul className="mt-5 flex flex-col gap-4">
              {feature.details.map((detail) => (
                <li key={detail} className="flex gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  <span className="text-ink-700">{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {relatedIndustries.length > 0 || relatedUseCases.length > 0 ? (
            <div className="flex flex-col gap-4 border-t border-slate-100 pt-8">
              <h2 className="font-display text-xl font-bold text-ink-950">Where this matters most</h2>
              <div className="flex flex-wrap gap-2">
                {relatedIndustries.map((industry) => (
                  <Link key={industry.slug} href={`/solutions/industries/${industry.slug}/`}>
                    <Badge className="hover:bg-brand-100">{industry.title}</Badge>
                  </Link>
                ))}
                {relatedUseCases.map((useCase) => (
                  <Link key={useCase.slug} href={`/solutions/use-cases/${useCase.slug}/`}>
                    <Badge className="hover:bg-brand-100">{useCase.title}</Badge>
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </Section>

      <CTABand />
    </>
  );
}
