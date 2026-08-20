import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export const dynamic = "force-static";

// The wildcard rule below already allows every crawler, AI ones included.
// These are named explicitly anyway — some AI crawlers document that they
// look for their own user-agent line specifically, and it signals clearly
// (to the crawler and to anyone auditing this file) that AI indexing here
// is intentional, not just an unconfigured default.
const aiUserAgents = [
  // OpenAI
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  // Anthropic
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  // Perplexity
  "PerplexityBot",
  "Perplexity-User",
  // Google (AI-specific crawlers, distinct from the standard Googlebot
  // already covered by the wildcard rule)
  "Google-Extended",
  "GoogleOther",
  // Apple
  "Applebot-Extended",
  // Meta
  "Meta-ExternalAgent",
  "Meta-ExternalFetcher",
  "FacebookBot",
  // Amazon
  "Amazonbot",
  // ByteDance / TikTok
  "Bytespider",
  // DuckDuckGo's AI assistant
  "DuckAssistBot",
  // Cohere
  "cohere-ai",
  // Allen Institute for AI
  "AI2Bot",
  // Diffbot (used by several AI/data platforms for structured extraction)
  "Diffbot",
  // Common Crawl — its dataset is a primary training source for many LLMs
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...aiUserAgents.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
