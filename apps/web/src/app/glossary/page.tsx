import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { glossaryTerms } from "@/app/glossary/data";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CTABand } from "@/components/marketing/CTABand";
import { JsonLd } from "@/components/seo/JsonLd";
import { definedTermSetSchema } from "@/components/seo/schema/definedTermSet";
import { pageKeywords } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mobile Security Glossary",
  description:
    "Plain-language definitions of RASP, SSL pinning, VAPT, root/jailbreak detection, anti-hooking, tamper detection, and other mobile app security terms.",
  keywords: pageKeywords([
    "mobile security glossary",
    "what is rasp",
    "rasp full form",
    "what is ssl pinning",
    "ssl pinning full form",
    "vapt vs rasp",
    "mobile application security glossary",
  ]),
  alternates: { canonical: "/glossary/" },
};

export default function GlossaryPage() {
  return (
    <>
      <JsonLd data={definedTermSetSchema(glossaryTerms)} />
      <Section bg="gradient" className="pb-12 pt-14">
        <div className="mb-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Glossary", href: "/glossary/" }]} />
        </div>
        <SectionHeading
          align="left"
          eyebrow="Reference"
          title="Mobile Security Glossary"
          description="Short, plain-language definitions for the terms that come up most in RASP, mobile app security, and detection engineering — each linking to a deeper page where one exists."
        />
      </Section>

      <Section bg="white">
        <div className="mx-auto flex max-w-3xl flex-col gap-3">
          {glossaryTerms.map((entry) => (
            <a
              key={entry.slug}
              href={`#${entry.slug}`}
              className="rounded-lg px-3 py-1.5 text-sm font-medium text-brand-700 hover:bg-brand-50"
            >
              {entry.term}
            </a>
          ))}
        </div>

        <div className="mx-auto mt-14 flex max-w-3xl flex-col gap-14">
          {glossaryTerms.map((entry) => (
            <div key={entry.slug} id={entry.slug} className="scroll-mt-24 border-t border-slate-100 pt-10">
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink-950">
                {entry.term}
              </h2>
              <p className="mt-3 text-base font-medium leading-relaxed text-ink-700">
                {entry.shortAnswer}
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink-500">{entry.body}</p>
              {entry.relatedHref ? (
                <Link
                  href={entry.relatedHref}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
                >
                  {entry.relatedLabel}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              ) : null}
            </div>
          ))}
        </div>
      </Section>

      <CTABand />
    </>
  );
}
