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
