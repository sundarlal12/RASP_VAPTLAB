import { siteConfig } from "@/lib/seo";
import type { GlossaryTerm } from "@/app/glossary/data";

export function definedTermSetSchema(terms: GlossaryTerm[]) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: `${siteConfig.name} Mobile Security Glossary`,
    url: `${siteConfig.url}/glossary/`,
    hasDefinedTerm: terms.map((entry) => ({
      "@type": "DefinedTerm",
      "@id": `${siteConfig.url}/glossary/#${entry.slug}`,
      name: entry.term,
      description: entry.shortAnswer,
      url: `${siteConfig.url}/glossary/#${entry.slug}`,
    })),
  };
}
