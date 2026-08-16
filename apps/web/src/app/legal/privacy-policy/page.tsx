import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.legalName} collects, uses, and protects information.`,
  alternates: { canonical: "/legal/privacy-policy/" },
};

const lastUpdated = "August 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy", href: "/legal/privacy-policy/" },
        ]}
      />
      <h1>Privacy Policy</h1>
      <p>Last updated: {lastUpdated}</p>

      <p>
        This Privacy Policy describes how {siteConfig.legalName} (&quot;we,&quot; &quot;us,&quot;
        or &quot;our&quot;) collects, uses, and shares information in connection with the AppShield
        website and related services.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>
          <strong>Information you provide directly</strong> — such as your name, email address,
          company, and message content when you submit our contact form.
        </li>
        <li>
          <strong>Usage data</strong> — standard technical information (such as IP address,
          browser type, and pages visited) collected automatically when you use this website.
        </li>
        <li>
          <strong>Cookies</strong> — see our{" "}
          <a href="/legal/cookie-policy/">Cookie Policy</a> for details on the cookies this site
          uses and how to manage your preferences.
        </li>
      </ul>

      <h2>How we use information</h2>
      <ul>
        <li>To respond to inquiries submitted through our contact form.</li>
        <li>To operate, maintain, and improve this website.</li>
        <li>To communicate with prospective and existing customers about our products.</li>
      </ul>

      <h2>How we share information</h2>
      <p>
        We do not sell personal information. We may share information with service providers who
        support our operations (for example, email delivery), and where required by law.
      </p>

      <h2>Data retention</h2>
      <p>
        We retain information for as long as necessary to fulfill the purposes described in this
        policy, unless a longer retention period is required or permitted by law.
      </p>

      <h2>Your choices</h2>
      <p>
        You may contact us at any time to ask about the information we hold about you or to
        request its deletion, subject to applicable legal requirements.
      </p>

      <h2>Contact us</h2>
      <p>
        Questions about this policy can be sent to{" "}
        <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>.
      </p>
    </>
  );
}
