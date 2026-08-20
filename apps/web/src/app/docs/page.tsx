import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { guides } from "@/app/docs/data";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Docs",
  description: "Guides for configuring Protect's detection policy, SSL pinning, and integration path.",
  alternates: { canonical: "/docs/" },
};

export default function DocsPage() {
  return (
    <>
      <Section bg="gradient" className="pb-12 pt-14">
        <div className="flex flex-col gap-6">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Docs", href: "/docs/" }]} />
          <SectionHeading
            align="left"
            eyebrow="Documentation"
            title="Guides for configuring and integrating Protect"
          />
        </div>
      </Section>

      <Section bg="white">
        <div className="grid gap-5 sm:grid-cols-2">
          {guides.map((guide) => (
            <Link key={guide.slug} href={`/docs/${guide.slug}/`}>
              <Card className="group flex h-full flex-col justify-between transition-shadow hover:shadow-md">
                <div>
                  <h2 className="font-display text-lg font-bold text-ink-950 group-hover:text-brand-700">
                    {guide.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{guide.summary}</p>
                </div>
                <ArrowRight className="mt-4 h-4 w-4 text-brand-600 opacity-0 transition-opacity group-hover:opacity-100" />
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
