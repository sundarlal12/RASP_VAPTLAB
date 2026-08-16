import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export const dynamic = "force-static";
import { features } from "@/app/features/data";
import { industries, useCases } from "@/app/solutions/data";
import { guides } from "@/app/docs/data";
import { posts } from "@/app/resources/data";

const staticRoutes = [
  "",
  "features",
  "solutions",
  "about",
  "contact",
  "faq",
  "docs",
  "resources",
  "legal/privacy-policy",
  "legal/terms-of-service",
  "legal/cookie-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const dynamicRoutes = [
    ...features.map((feature) => `features/${feature.slug}`),
    ...industries.map((industry) => `solutions/industries/${industry.slug}`),
    ...useCases.map((useCase) => `solutions/use-cases/${useCase.slug}`),
    ...guides.map((guide) => `docs/${guide.slug}`),
    ...posts.map((post) => `resources/${post.slug}`),
  ];

  return [...staticRoutes, ...dynamicRoutes].map((path) => ({
    url: `${siteConfig.url}/${path}${path ? "/" : ""}`,
    lastModified: now,
  }));
}
