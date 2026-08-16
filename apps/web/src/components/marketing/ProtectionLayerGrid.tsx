import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { layers, featuresByLayer } from "@/app/features/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

export function ProtectionLayerGrid() {
  return (
    <div className="flex flex-col gap-16">
      <SectionHeading
        eyebrow="How AppShield protects your app"
        title="Three layers of runtime protection"
        description="No single check is enough on its own. AppShield combines environment detection, secure communication, and continuous re-verification into one SDK."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {layers.map((layer) => (
          <Card key={layer.id} className="flex flex-col gap-5">
            <div>
              <h3 className="font-display text-xl font-bold text-ink-950">{layer.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{layer.description}</p>
            </div>
            <ul className="flex flex-col gap-2.5 border-t border-slate-100 pt-4">
              {featuresByLayer(layer.id).map((feature) => (
                <li key={feature.slug}>
                  <Link
                    href={`/features/${feature.slug}/`}
                    className="group flex items-center justify-between gap-2 text-sm font-medium text-ink-900 hover:text-brand-700"
                  >
                    <span className="flex items-center gap-2.5">
                      <feature.icon className="h-4 w-4 shrink-0 text-brand-600" />
                      {feature.title}
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 shrink-0 text-ink-500 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
}
