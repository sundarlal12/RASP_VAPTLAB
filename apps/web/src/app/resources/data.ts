export type PostCategory = "Fundamentals" | "Detection Engineering" | "Engineering" | "Compliance";

export interface Post {
  slug: string;
  title: string;
  summary: string;
  date: string; // ISO 8601
  author: string;
  category: PostCategory;
  readTime: string;
}

export const postCategories: PostCategory[] = [
  "Fundamentals",
  "Detection Engineering",
  "Engineering",
  "Compliance",
];

export const posts: Post[] = [
  {
    slug: "stopping-bot-driven-checkout-abuse-retail-apps",
    title: "Stopping Bot-Driven Checkout Abuse in Retail and E-Commerce Apps",
    summary:
      "Sneaker bots, gift-card cracking, promo-code abuse — most large-scale retail app abuse runs through emulator farms and hooked clients, not a browser. Where app-layer detection catches what web-only defenses miss.",
    date: "2026-08-24",
    author: "Protect Team",
    category: "Detection Engineering",
    readTime: "6 min read",
  },
  {
    slug: "rasp-vs-behavioral-biometrics-fraud-stack",
    title: "Where RASP Fits in a Fraud Stack, Next to Behavioral Biometrics",
    summary:
      "Behavioral biometrics and device intelligence look at how a session behaves. RASP looks at whether the environment it's running in can be trusted at all. Neither replaces the other.",
    date: "2026-08-23",
    author: "Protect Team",
    category: "Fundamentals",
    readTime: "6 min read",
  },
  {
    slug: "mobile-app-security-compliance-uae-nesa-central-bank",
    title: "Mobile App Security Compliance in the UAE: NESA and Central Bank Guidance",
    summary:
      "The UAE doesn't have one named mobile-app framework — NESA's standards cover government and critical infrastructure, the Central Bank covers licensed financial institutions. What both actually expect from a mobile app.",
    date: "2026-08-22",
    author: "Protect Team",
    category: "Compliance",
    readTime: "6 min read",
  },
  {
    slug: "sama-cybersecurity-framework-mobile-banking-app",
    title: "SAMA Cybersecurity Framework: What It Means for Your Mobile Banking App",
    summary:
      "The Saudi Central Bank's Cybersecurity Framework names application security as one of its core domains. What that looks like in practice for a bank or fintech's mobile app.",
    date: "2026-08-21",
    author: "Protect Team",
    category: "Compliance",
    readTime: "6 min read",
  },
  {
    slug: "apra-cps-234-mobile-banking-app-checklist",
    title: "APRA CPS 234 and Mobile Banking Apps: A Practical Checklist",
    summary:
      "CPS 234 doesn't name mobile apps directly, but 'information security capability proportionate to vulnerabilities' has a clear reading for your customer-facing app. A practical checklist for what that means at the app layer.",
    date: "2026-08-20",
    author: "Protect Team",
    category: "Compliance",
    readTime: "6 min read",
  },
  {
    slug: "device-compromise-account-takeover-fraud-runtime-detection",
    title: "How a Compromised Device Enables Account Takeover Fraud",
    summary:
      "Account takeover fraud gets discussed as a credentials problem — stolen passwords, leaked OTPs. A lot of it actually starts one layer down, with a rooted or hooked device the app never questioned.",
    date: "2026-08-19",
    author: "Protect Team",
    category: "Fundamentals",
    readTime: "6 min read",
  },
  {
    slug: "mobile-app-security-compliance-global-frameworks-guide",
    title: "Mobile App Security Compliance Around the World: A Plain-Language Guide",
    summary:
      "OWASP MASVS, PCI DSS, Australia's APRA CPS 234, Saudi Arabia's SAMA framework — different names, but they're converging on the same point: secure code at rest isn't enough if you can't say what's happening on the device at runtime.",
    date: "2026-08-18",
    author: "Protect Team",
    category: "Compliance",
    readTime: "7 min read",
  },
  {
    slug: "rasp-for-react-native-and-flutter-apps",
    title: "RASP for React Native and Flutter Apps: What Actually Works",
    summary:
      "React Native and Flutter apps still compile down to a standard APK. What that means for root, hooking, and tamper detection — and where framework-level SDK integration actually gets harder.",
    date: "2026-08-11",
    author: "Protect Team",
    category: "Engineering",
    readTime: "7 min read",
  },
  {
    slug: "what-is-rasp-runtime-application-self-protection-explained",
    title: "What Is RASP? Runtime Application Self-Protection Explained",
    summary:
      "RASP checks what's happening on the device while your app is running, not just what the binary looks like at rest. Here's what that means in practice, and where it fits next to static scanning and obfuscation.",
    date: "2026-07-28",
    author: "Protect Team",
    category: "Fundamentals",
    readTime: "7 min read",
  },
  {
    slug: "app-cloning-and-repackaging-detection",
    title: "App Cloning and Repackaging: How Attackers Do It, How to Catch It",
    summary:
      "Decompile, patch, resign, redistribute. A walkthrough of the standard app-cloning pipeline and the signature attestation checks that catch a repackaged build.",
    date: "2026-07-14",
    author: "Protect Team",
    category: "Detection Engineering",
    readTime: "8 min read",
  },
  {
    slug: "code-obfuscation-vs-runtime-protection",
    title: "Code Obfuscation vs. Runtime Protection: Why Mobile Apps Need Both",
    summary:
      "Obfuscation slows down static analysis. It does nothing once your app is actually running on a hooked or rooted device. Why these are complementary layers, not substitutes.",
    date: "2026-06-30",
    author: "Protect Team",
    category: "Fundamentals",
    readTime: "6 min read",
  },
  {
    slug: "emulator-and-virtual-device-detection",
    title: "Emulator and Virtual Device Detection: How It Actually Works",
    summary:
      "Build fingerprints, sensor gaps, and telephony stubs — the signals that separate a real device from an emulator, and why any single one of them is easy to patch around.",
    date: "2026-06-16",
    author: "Protect Team",
    category: "Detection Engineering",
    readTime: "7 min read",
  },
  {
    slug: "root-detection-alone-isnt-enough",
    title: "Root Detection Alone Isn't Enough Anymore",
    summary:
      "A single root check is a single thing to bypass. Why layered environment detection — root, VM, and hooking together — holds up better.",
    date: "2026-06-02",
    author: "Protect Team",
    category: "Detection Engineering",
    readTime: "5 min read",
  },
  {
    slug: "frida-xposed-what-anti-hooking-detection-looks-for",
    title: "Frida and Xposed: What Anti-Hooking Detection Actually Looks For",
    summary:
      "A practical look at the fingerprints instrumentation frameworks leave behind in a running process, and why native-layer detection catches more of them.",
    date: "2026-05-14",
    author: "Protect Team",
    category: "Detection Engineering",
    readTime: "6 min read",
  },
  {
    slug: "owasp-masvs-where-runtime-protection-fits",
    title: "OWASP MASVS and Where Runtime Protection Fits In",
    summary:
      "MASVS's resilience requirements (MASVS-RESILIENCE) are explicitly about runtime behavior, not static code review. Mapping RASP controls to the categories an assessor actually checks.",
    date: "2026-04-22",
    author: "Protect Team",
    category: "Compliance",
    readTime: "6 min read",
  },
  {
    slug: "ssl-pinning-certificate-rotation-without-breaking-your-app",
    title: "SSL Pinning Certificate Rotation Without Breaking Your App",
    summary:
      "Certificate pinning fails hard when it fails. A rollout pattern for rotating keys without locking out users on your current release.",
    date: "2026-04-08",
    author: "Protect Team",
    category: "Engineering",
    readTime: "6 min read",
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}
