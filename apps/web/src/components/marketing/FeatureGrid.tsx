import Link from "next/link";
import type { Feature } from "@/app/features/data";
import { IconTile } from "@/components/ui/IconTile";
import { Card } from "@/components/ui/Card";

export function FeatureGrid({ features }: { features: Feature[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((feature) => (
        <Link key={feature.slug} href={`/features/${feature.slug}/`}>
          <Card className="h-full transition-shadow hover:shadow-md hover:shadow-brand-900/5">
            <IconTile icon={feature.icon} />
            <h3 className="mt-4 font-display text-lg font-bold text-ink-950">
              {feature.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-500">{feature.summary}</p>
          </Card>
        </Link>
      ))}
    </div>
  );
}
