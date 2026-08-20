import { siteConfig } from "@/lib/seo";
import { features } from "@/app/features/data";

export function softwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    applicationCategory: "SecurityApplication",
    operatingSystem: "Android",
    description: siteConfig.description,
    url: siteConfig.url,
    keywords:
      "RASP, runtime application self protection, mobile app shielding, app hardening, Frida detection Android, root detection library Android, Magisk detection, anti-tampering SDK Android, emulator detection Android, SSL pinning bypass prevention, Xposed LSPosed hooking detection, screen recording prevention Android, debugger detection Android, app repackaging detection",
    featureList: features.map((feature) => feature.title),
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
    },
    // No `offers` / `aggregateRating`: pricing is sales-gated and there is no
    // real review data to cite — don't chase a rich-snippet star rating.
  };
}
