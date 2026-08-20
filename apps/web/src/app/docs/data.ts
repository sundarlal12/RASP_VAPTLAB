export interface Guide {
  slug: string;
  title: string;
  summary: string;
}

export const guides: Guide[] = [
  {
    slug: "quickstart",
    title: "Quickstart",
    summary: "Configure a policy, upload a signed APK or AAB, and get a shielded build back.",
  },
  {
    slug: "detection-policy-configuration",
    title: "Detection Policy Configuration",
    summary: "The four detection categories and how OFF / monitor / detect modes behave.",
  },
  {
    slug: "ssl-pinning-configuration",
    title: "SSL Pinning Configuration",
    summary: "Generate and manage per-client certificate pin sets.",
  },
  {
    slug: "sdk-integration",
    title: "Direct SDK Integration",
    summary: "For teams that want native-level control instead of the upload-and-shield flow.",
  },
  {
    slug: "risk-score-callback-integration",
    title: "Risk Score & Dashboard Signals",
    summary: "How runtime risk scoring surfaces in the live dashboard and your own systems.",
  },
];

export function getGuideBySlug(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
