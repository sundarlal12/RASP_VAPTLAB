export const faqs = [
  {
    question: "What platforms does AppShield support?",
    answer:
      "AppShield protects Android apps. The native protection core is written in C++. Most teams use the AppShield portal to configure a policy and upload an already-built, signed APK for shielding — teams that want SDK-level control can integrate directly instead.",
  },
  {
    question: "Does AppShield require code changes to my app?",
    answer:
      "Not for the standard path — you configure your detection and pinning policy in the portal, then upload your existing signed build to be shielded. Direct SDK integration is available for teams that want native-level control instead.",
  },
  {
    question: "How is 'anti-scraping' different from a web bot-mitigation product?",
    answer:
      "AppShield protects the mobile client itself. Most automated abuse of a mobile app's APIs happens through a hooked, instrumented, or cloned copy of the app — not a browser. AppShield detects that client-side tampering directly (anti-hooking, device fingerprinting, risk scoring) rather than trying to fingerprint web traffic.",
  },
  {
    question: "Does detection run only at app launch?",
    answer:
      "No. A background watchdog re-runs key detections periodically through the session, so environments that become compromised after launch — a hook attached mid-session, for example — still get caught.",
  },
  {
    question: "What happens when AppShield detects a threat?",
    answer:
      "AppShield reports a runtime risk score and individual detection signals — it doesn't force a single response. Your app decides whether to block, degrade functionality, step up authentication, or just log the event.",
  },
  {
    question: "Is pricing publicly available?",
    answer:
      "No — AppShield is scoped per deployment based on your app count, platforms, and integration needs. Book a demo or talk to sales for pricing.",
  },
  {
    question: "How does SSL pinning work if my certificate rotates?",
    answer:
      "Pin sets are configured per client and can be updated as part of your normal release process. Reach out to your integration contact when planning a certificate rotation.",
  },
  {
    question: "Where does the native C++ core help against reverse engineering?",
    answer:
      "Native code is meaningfully more expensive to decompile and analyze than JVM bytecode. Running detection and cryptographic logic natively raises the cost of attacking the SDK itself, not just the surrounding app.",
  },
];
