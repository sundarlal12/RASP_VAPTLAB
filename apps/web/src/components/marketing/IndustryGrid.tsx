import Link from "next/link";
import type { Industry } from "@/app/solutions/data";
import { IconTile } from "@/components/ui/IconTile";

export function IndustryGrid({ industries }: { industries: Industry[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {industries.map((industry) => (
        <Link
          key={industry.slug}
          href={`/solutions/industries/${industry.slug}/`}
          className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-colors hover:border-brand-300 hover:bg-brand-50/40"
        >
          <IconTile icon={industry.icon} className="shrink-0" />
          <div>
            <h3 className="font-display text-base font-bold text-ink-950 group-hover:text-brand-700">
              {industry.title}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-ink-500">{industry.summary}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
