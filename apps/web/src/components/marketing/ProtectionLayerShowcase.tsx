import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { layers, featuresByLayer } from "@/app/features/data";
import { RawHtmlAnimation } from "@/components/marketing/RawHtmlAnimation";
import { readLayerAnimation } from "@/lib/layerAnimations";

export function ProtectionLayerShowcase() {
  return (
    <div className="flex flex-col gap-20">
      {layers.map((layer, index) => {
        const reversed = index % 2 === 1;
        const layerFeatures = featuresByLayer(layer.id);

        return (
          <div
            key={layer.id}
            className={`flex flex-col items-center gap-10 xl:gap-16 ${
              reversed ? "xl:flex-row-reverse" : "xl:flex-row"
            }`}
          >
            <div className="flex w-full flex-col items-start gap-4 xl:w-[340px] xl:flex-none">
              <span className="font-display text-sm font-semibold text-brand-600">
                0{index + 1}
              </span>
              <h3 className="font-display text-2xl font-bold text-ink-950 sm:text-3xl">
                {layer.title}
              </h3>
              <p className="max-w-md text-base leading-relaxed text-ink-500">
                {layer.description}
              </p>
              <ul className="mt-2 flex flex-col gap-3">
                {layerFeatures.map((feature) => (
                  <li key={feature.slug} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink-950">{feature.title}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-ink-500">{feature.summary}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link
                href="/features/"
                className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
              >
                See how it works
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="w-full flex-1 overflow-x-auto">
              <RawHtmlAnimation html={readLayerAnimation(layer.id)} className="mx-auto w-full max-w-[672px]" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
