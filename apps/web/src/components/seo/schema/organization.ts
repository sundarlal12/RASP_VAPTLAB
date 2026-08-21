import { siteConfig } from "@/lib/seo";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "Saudi Arabia" },
      { "@type": "Country", name: "Australia" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Singapore" },
      { "@type": "Country", name: "India" },
    ],
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
