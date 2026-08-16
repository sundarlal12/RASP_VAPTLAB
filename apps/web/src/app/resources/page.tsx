import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/app/resources/data";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Resources",
  description: "Writing on runtime app protection, detection engineering, and mobile security.",
  alternates: { canonical: "/resources/" },
};

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

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
        <div className="mx-auto flex max-w-3xl flex-col gap-5">
          {posts.map((post) => (
            <Link key={post.slug} href={`/resources/${post.slug}/`}>
              <Card className="transition-shadow hover:shadow-md">
                <time dateTime={post.date} className="text-xs font-medium uppercase tracking-wide text-ink-500">
                  {dateFormatter.format(new Date(post.date))}
                </time>
                <h2 className="mt-2 font-display text-lg font-bold text-ink-950">{post.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{post.summary}</p>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
