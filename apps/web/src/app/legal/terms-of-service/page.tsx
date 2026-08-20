import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms governing use of the ${siteConfig.name} website and services.`,
  alternates: { canonical: "/legal/terms-of-service/" },
};

const lastUpdated = "August 2026";

export default function TermsOfServicePage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Terms of Service", href: "/legal/terms-of-service/" },
        ]}
      />
      <h1>Terms of Service</h1>
      <p>Last updated: {lastUpdated}</p>

      <p>
        These Terms of Service (&quot;Terms&quot;) govern your use of the {siteConfig.name} website
        operated by {siteConfig.legalName}. By using this website, you agree to these Terms.
      </p>

      <h2>Use of this website</h2>
      <p>
        This website is provided for informational purposes about {siteConfig.legalName}&apos;s
        products and services. You agree not to misuse this website, including attempting to
        interfere with its normal operation or access it using automated means outside our
        published APIs.
      </p>

      <h2>Product and services agreements</h2>
      <p>
        Use of the Protect product itself is governed by a separate agreement entered into
        directly with {siteConfig.legalName} as part of onboarding — these website Terms do not
        constitute that agreement.
      </p>

      <h2>Intellectual property</h2>
      <p>
        All content on this website, including text, graphics, logos, and the Protect name and
        mark, is the property of {siteConfig.legalName} or its licensors and is protected by
        applicable intellectual property laws.
      </p>

      <h2>Disclaimer</h2>
      <p>
        This website and its content are provided &quot;as is&quot; without warranties of any
        kind, to the extent permitted by law.
      </p>

      <h2>Changes to these Terms</h2>
      <p>
        We may update these Terms from time to time. Continued use of this website after changes
        take effect constitutes acceptance of the updated Terms.
      </p>

      <h2>Contact us</h2>
      <p>
        Questions about these Terms can be sent to{" "}
        <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>.
      </p>
    </>
  );
}
