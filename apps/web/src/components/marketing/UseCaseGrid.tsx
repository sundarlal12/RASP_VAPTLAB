import Link from "next/link";
import type { UseCase } from "@/app/solutions/data";
import { IconTile } from "@/components/ui/IconTile";

export function UseCaseGrid({ useCases }: { useCases: UseCase[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {useCases.map((useCase) => (
        <Link
          key={useCase.slug}
          href={`/solutions/use-cases/${useCase.slug}/`}
          className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-colors hover:border-brand-300 hover:bg-brand-50/40"
        >
          <IconTile icon={useCase.icon} className="shrink-0" />
          <div>
            <h3 className="font-display text-base font-bold text-ink-950 group-hover:text-brand-700">
              {useCase.title}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-ink-500">{useCase.summary}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
