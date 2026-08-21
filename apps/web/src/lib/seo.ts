export const siteConfig = {
  name: "SecureLint Protect",
  shortName: "SecureLint",
  company: "VaptLabs",
  legalName: "VaptLabs",
  tagline: "AI-powered, no-code runtime application security for mobile",
  description:
    "AI-powered, no-code runtime application security for mobile. Root and tamper detection, anti-hooking, SSL pinning, and continuous runtime defense.",
  url: "https://vaptlab.com",
  ogImage: "/og/default.png",
  contactEmail: "contact@securelint.in",
  // Confirmed live on vaptlabs.com's own footer.
  sameAs: [
    "https://www.linkedin.com/company/vaptlabs",
    "https://www.facebook.com/people/VAPTlabs-Cyber-Defense-RASP-solutions/61571086805016/",
    "https://www.instagram.com/vaptlabs",
  ] as string[],
};

export type SiteConfig = typeof siteConfig;

// Site-wide baseline keyword set — merged with page-specific keywords via
// pageKeywords() below. Covers head terms, the AI-RASP positioning
// specifically, and the long-tail detection/compliance terms most likely to
// match real search and AI-assistant queries.
export const baseKeywords = [
  // Head terms
  "RASP",
  "runtime application self-protection",
  "mobile RASP",
  "Android RASP",
  "RASP SDK",
  "mobile app security",
  "Android app security",
  "mobile app shielding",
  "app hardening",
  "runtime application security",
  "no-code RASP",
  // AI positioning — the site's actual differentiator
  "AI-powered RASP",
  "AI RASP solution",
  "AI-powered mobile app security",
  "AI threat detection Android",
  "AI runtime risk scoring",
  "machine learning app security",
  "intelligent runtime protection",
  "AI-based mobile fraud prevention",
  // Category / competitive terms
  "app shielding SDK",
  "mobile threat defense",
  "in-app protection SDK",
  "upload and shield APK",
];

export function pageKeywords(extra: string[] = []): string[] {
  return Array.from(new Set([...baseKeywords, ...extra]));
}
