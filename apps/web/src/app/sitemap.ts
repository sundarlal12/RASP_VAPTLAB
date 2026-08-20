import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export const dynamic = "force-static";
import { features } from "@/app/features/data";
import { industries, useCases } from "@/app/solutions/data";
import { guides } from "@/app/docs/data";
import { posts } from "@/app/resources/data";

const staticRoutes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "features", priority: 0.9, changeFrequency: "weekly" },
  { path: "solutions", priority: 0.8, changeFrequency: "weekly" },
  { path: "resources", priority: 0.8, changeFrequency: "weekly" },
  { path: "docs", priority: 0.7, changeFrequency: "weekly" },
  { path: "about", priority: 0.5, changeFrequency: "monthly" },
  { path: "contact", priority: 0.6, changeFrequency: "monthly" },
  { path: "faq", priority: 0.6, changeFrequency: "monthly" },
  { path: "legal/privacy-policy", priority: 0.2, changeFrequency: "yearly" },
  { path: "legal/terms-of-service", priority: 0.2, changeFrequency: "yearly" },
  { path: "legal/cookie-policy", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const dynamicRoutes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    ...features.map((feature) => ({
      path: `features/${feature.slug}`,
      priority: 0.85,
      changeFrequency: "monthly" as const,
    })),
    ...industries.map((industry) => ({
      path: `solutions/industries/${industry.slug}`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
    })),
    ...useCases.map((useCase) => ({
      path: `solutions/use-cases/${useCase.slug}`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
    })),
    ...guides.map((guide) => ({
      path: `docs/${guide.slug}`,
      priority: 0.6,
      changeFrequency: "monthly" as const,
    })),
    ...posts.map((post) => ({
      path: `resources/${post.slug}`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
    })),
  ];

  return [...staticRoutes, ...dynamicRoutes].map(({ path, priority, changeFrequency }) => ({
    url: `${siteConfig.url}/${path}${path ? "/" : ""}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
