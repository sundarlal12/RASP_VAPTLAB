export const faqs = [
  {
    question: "What platforms does Protect support?",
    answer:
      "SecureLint Protect secures Android apps. The native protection core is written in C++. Most teams use the Protect portal to configure a policy and upload an already-built, signed APK or AAB for shielding — teams that want SDK-level control can integrate directly instead.",
  },
  {
    question: "Does Protect require code changes to my app?",
    answer:
      "Not for the standard path — you configure your detection and pinning policy in the portal, then upload your existing signed build to be shielded. Direct SDK integration is available for teams that want native-level control instead.",
  },
  {
    question: "How is 'anti-scraping' different from a web bot-mitigation product?",
    answer:
      "SecureLint Protect secures the mobile client itself. Most automated abuse of a mobile app's APIs happens through a hooked, instrumented, or cloned copy of the app — not a browser. Protect detects that client-side tampering directly (anti-hooking, device fingerprinting, risk scoring) rather than trying to fingerprint web traffic.",
  },
  {
    question: "Does detection run only at app launch?",
    answer:
      "No. A background watchdog re-runs key detections periodically through the session, so environments that become compromised after launch — a hook attached mid-session, for example — still get caught.",
  },
  {
    question: "What happens when Protect detects a threat?",
    answer:
      "Protect reports a runtime risk score and individual detection signals — it doesn't force a single response. Your app decides whether to block, degrade functionality, step up authentication, or just log the event.",
  },
  {
    question: "Is pricing publicly available?",
    answer:
      "No — Protect is scoped per deployment based on your app count, platforms, and integration needs. Book a demo or talk to sales for pricing.",
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
  {
    question: "Does Protect detect Frida hooking?",
    answer:
      "Yes. Anti-hooking detection looks for the mechanisms Frida (and Xposed/LSPosed) rely on — injected libraries, modified function entry points, unusual memory-mapping patterns, and known instrumentation IPC fingerprints — run natively and re-checked through the session so a hook attached mid-session still gets caught.",
  },
  {
    question: "Can Protect detect Magisk-hidden root, not just a basic su check?",
    answer:
      "Root detection is layered rather than a single su-binary check: it combines root-management package detection, system-path checks, and cross-checks against other signals (hooking, tamper status) so a device using Magisk or similar root-hiding modules is harder to present as clean.",
  },
  {
    question: "Does Protect detect LSPosed specifically, or only the original Xposed framework?",
    answer:
      "The anti-hooking module targets the underlying instrumentation mechanisms both frameworks depend on — injected modules and rewritten function entry points — rather than fingerprinting either product by name, so LSPosed and other Xposed-based forks are covered by the same detection, not treated as a separate case.",
  },
  {
    question: "Does Protect work with React Native or Flutter apps?",
    answer:
      "Yes, on the standard upload-and-shield path — Protect operates on the final compiled APK or AAB, which is the same artifact regardless of whether it was built with native Android tooling, React Native, or Flutter. Root, hooking, tamper, and pinning checks apply the same way. Direct SDK-level integration into a React Native or Flutter build specifically is a custom integration — talk to us if that's your path.",
  },
];
