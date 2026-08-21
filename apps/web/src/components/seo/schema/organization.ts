import { siteConfig } from "@/lib/seo";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    knowsAbout: [
      "Runtime Application Self-Protection",
      "Mobile Application Security",
      "Android Root Detection",
      "Anti-Hooking (Frida, Xposed, LSPosed)",
      "SSL Certificate Pinning",
      "Mobile App Tamper Detection",
      "OWASP MASVS",
    ],
    ...(siteConfig.sameAs.length > 0 ? { sameAs: siteConfig.sameAs } : {}),
  };
}
