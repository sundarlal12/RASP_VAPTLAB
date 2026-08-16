import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Card } from "@/components/ui/Card";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to VaptLabs about integrating AppShield into your Android app — book a demo or reach the team directly.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <Section bg="gradient" className="pb-24 pt-14">
      <div className="flex flex-col gap-10">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact", href: "/contact/" }]} />
        <SectionHeading
          align="left"
          eyebrow="Contact"
          title="Book a demo or talk to sales"
          description="Tell us about your app and what you're looking to protect — we'll follow up to scope the integration."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          <Card className="flex h-fit flex-col gap-4">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-brand-600" />
              <span className="text-sm font-semibold text-ink-950">Email us directly</span>
            </div>
            <a href={`mailto:${siteConfig.contactEmail}`} className="text-brand-700 hover:underline">
              {siteConfig.contactEmail}
            </a>
            <p className="text-sm leading-relaxed text-ink-500">
              Pricing is scoped per deployment based on your app count, platforms, and integration
              needs — there&apos;s no public self-serve pricing.
            </p>
          </Card>

          <Card>
            <ContactForm />
          </Card>
        </div>
      </div>
    </Section>
  );
}
