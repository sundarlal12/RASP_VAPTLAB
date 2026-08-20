import type { Metadata } from "next";
import { posts } from "@/app/resources/data";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ResourcesGrid } from "@/components/marketing/ResourcesGrid";

export const metadata: Metadata = {
  title: "Resources",
  description: "Writing on runtime app protection, detection engineering, and mobile security.",
  alternates: { canonical: "/resources/" },
};

export default function ResourcesPage() {
  return (
    <>
      <Section bg="gradient" className="pb-12 pt-14">
        <div className="flex flex-col gap-6">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources/" }]} />
          <SectionHeading align="left" eyebrow="Resources" title="Notes on runtime app protection" />
        </div>
      </Section>

      <Section bg="white">
        <ResourcesGrid posts={posts} />
      </Section>
    </>
  );
}
