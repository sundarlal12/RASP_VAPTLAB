import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `How ${siteConfig.legalName} uses cookies on the ${siteConfig.name} website.`,
  alternates: { canonical: "/legal/cookie-policy/" },
};

const lastUpdated = "August 2026";

export default function CookiePolicyPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Cookie Policy", href: "/legal/cookie-policy/" },
        ]}
      />
      <h1>Cookie Policy</h1>
      <p>Last updated: {lastUpdated}</p>

      <p>
        This website uses cookies and similar technologies to operate correctly and to understand
        how visitors use it. You can manage your cookie preferences at any time using the consent
        banner presented on your first visit.
      </p>

      <h2>Types of cookies we use</h2>
      <ul>
        <li>
          <strong>Necessary cookies</strong> — required for the website to function, such as
          remembering your cookie consent choice.
        </li>
        <li>
          <strong>Analytics cookies</strong> — help us understand how visitors interact with this
          website, so we can improve it.
        </li>
      </ul>

      <h2>Managing your preferences</h2>
      <p>
        Most browsers let you refuse or delete cookies through their settings. Refusing certain
        cookies may affect how this website functions.
      </p>

      <h2>Contact us</h2>
      <p>
        Questions about this policy can be sent to{" "}
        <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>.
      </p>
    </>
  );
}
