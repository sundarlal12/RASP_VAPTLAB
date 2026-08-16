import { siteConfig } from "@/lib/seo";

export function softwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    applicationCategory: "SecurityApplication",
    operatingSystem: "Android",
    description: siteConfig.description,
    url: siteConfig.url,
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
    },
    // No `offers` / `aggregateRating`: pricing is sales-gated and there is no
    // real review data to cite — don't chase a rich-snippet star rating.
  };
}
