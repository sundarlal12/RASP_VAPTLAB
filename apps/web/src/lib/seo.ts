export const siteConfig = {
  name: "AppShield",
  company: "VaptLabs",
  legalName: "VaptLabs",
  tagline: "Runtime protection for Android apps",
  description:
    "AppShield by VaptLabs is a Runtime Application Self-Protection (RASP) SDK for Android — root and tamper detection, anti-hooking, SSL pinning, and continuous runtime defense against reverse engineering and automated abuse.",
  url: "https://vaptlab.com",
  ogImage: "/og/default.png",
  contactEmail: "contact@vaptlabs.com",
  // Left empty on purpose: no social profiles confirmed yet, don't fabricate.
  sameAs: [] as string[],
};

export type SiteConfig = typeof siteConfig;
