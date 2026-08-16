export interface Post {
  slug: string;
  title: string;
  summary: string;
  date: string; // ISO 8601
  author: string;
}

export const posts: Post[] = [
  {
    slug: "root-detection-alone-isnt-enough",
    title: "Root Detection Alone Isn't Enough Anymore",
    summary:
      "A single root check is a single thing to bypass. Why layered environment detection — root, VM, and hooking together — holds up better.",
    date: "2026-06-02",
    author: "AppShield Team",
  },
  {
    slug: "frida-xposed-what-anti-hooking-detection-looks-for",
    title: "Frida and Xposed: What Anti-Hooking Detection Actually Looks For",
    summary:
      "A practical look at the fingerprints instrumentation frameworks leave behind in a running process, and why native-layer detection catches more of them.",
    date: "2026-05-14",
    author: "AppShield Team",
  },
  {
    slug: "ssl-pinning-certificate-rotation-without-breaking-your-app",
    title: "SSL Pinning Certificate Rotation Without Breaking Your App",
    summary:
      "Certificate pinning fails hard when it fails. A rollout pattern for rotating keys without locking out users on your current release.",
    date: "2026-04-08",
    author: "AppShield Team",
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}
