import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Card } from "@/components/ui/Card";
import { CTABand } from "@/components/marketing/CTABand";
import { Target, ShieldCheck, Cpu } from "lucide-react";
import { pageKeywords } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About",
  description:
    "VaptLabs builds SecureLint Protect — AI-powered, no-code runtime application security for mobile, focused on runtime detection, not just static app-store scanning.",
  keywords: pageKeywords(["VaptLabs", "mobile security company", "RASP vendor"]),
  alternates: { canonical: "/about/" },
};

const principles = [
  {
    icon: Target,
    title: "Runtime, not just static analysis",
    description:
      "A clean static scan doesn't mean a safe runtime. Protect focuses on what's happening on the device while your app is running — hooking, tampering, and environment risk that static analysis can't see.",
  },
  {
    icon: Cpu,
    title: "Native by default",
    description:
      "Detection and cryptographic logic run in C++, not as a Java/Kotlin wrapper around a checklist. That's a deliberate choice to raise the cost of attacking the protection layer itself.",
  },
  {
    icon: ShieldCheck,
    title: "Signal, not a black box",
    description:
      "Protect reports risk — root, hooking, tamper, and network signals — through a unified score. Your team decides the policy; we don't force a single response.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Section bg="gradient" className="pb-14 pt-14">
        <div className="flex flex-col gap-6">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About", href: "/about/" }]} />
          <SectionHeading
            align="left"
            eyebrow="About VaptLabs"
            title="We build runtime protection for Android apps"
            description="SecureLint Protect is VaptLabs' Runtime Application Self-Protection (RASP) SDK — built to detect compromised environments and tampering while an app is running, not just at build time."
          />
        </div>
      </Section>

      <Section bg="white">
        <div className="grid gap-6 sm:grid-cols-3">
          {principles.map((principle) => (
            <Card key={principle.title}>
              <principle.icon className="h-6 w-6 text-brand-600" />
              <h2 className="mt-4 font-display text-lg font-bold text-ink-950">
                {principle.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{principle.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <CTABand title="Want to talk to the team behind Protect?" />
    </>
  );
}
