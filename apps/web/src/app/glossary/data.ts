export interface GlossaryTerm {
  slug: string;
  term: string;
  shortAnswer: string;
  body: string;
  relatedHref?: string;
  relatedLabel?: string;
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: "rasp",
    term: "RASP",
    shortAnswer:
      "RASP stands for Runtime Application Self-Protection — security that runs inside an app while it's actually executing on a device, detecting things like rooting, hooking, and tampering in real time rather than only scanning the app's code before release.",
    body: "Unlike static analysis or code scanning, which look at an app at rest, RASP operates at runtime — while the app is live on a real user's device. That's the only vantage point from which you can tell a debugger just attached, a hooking framework like Frida is active, or the device became rooted after install. RASP is usually one layer in a broader security program, alongside code obfuscation, backend fraud detection, and secure coding practices — not a replacement for any of them.",
    relatedHref: "/resources/what-is-rasp-runtime-application-self-protection-explained/",
    relatedLabel: "Read the full explainer",
  },
  {
    slug: "vapt",
    term: "VAPT",
    shortAnswer:
      "VAPT stands for Vulnerability Assessment and Penetration Testing — a security audit where testers actively probe an application, network, or infrastructure for exploitable weaknesses, typically as a one-time or periodic engagement.",
    body: "VAPT and RASP solve different problems and aren't substitutes for each other. VAPT is a point-in-time assessment — testers (human or automated) try to find and exploit vulnerabilities before you ship, or on a recurring audit cycle. RASP is an always-on runtime control that keeps protecting the app after it's already in users' hands, on devices you don't control. A mature security program typically uses both: VAPT to find and fix vulnerabilities before release, RASP to defend the shipped app at runtime. VaptLabs offers VAPT services separately from SecureLint Protect, which is our RASP product specifically for Android apps.",
  },
  {
    slug: "ssl-pinning",
    term: "SSL Pinning (Certificate / TLS Pinning)",
    shortAnswer:
      "SSL pinning — also called certificate pinning or TLS pinning — is when an app hardcodes or embeds the exact certificate (or public key) it expects from its backend, instead of trusting any certificate the device's OS considers valid.",
    body: "Without pinning, an app trusts any certificate chain that validates against the device's OS trust store — which is exactly what a MITM proxy with a malicious CA installed relies on. With pinning, the app checks the server's certificate (or its SPKI public key hash) against a known-good value baked into the app itself, so even a device with a rogue CA installed can't intercept traffic without the connection failing outright. The tradeoff is operational: pinned certificates need a rotation plan, since an expired or reissued certificate that isn't updated in the app will break connectivity for every user on that build.",
    relatedHref: "/features/ssl-certificate-pinning/",
    relatedLabel: "See how Protect implements SSL pinning",
  },
  {
    slug: "root-jailbreak-detection",
    term: "Root / Jailbreak Detection",
    shortAnswer:
      "Root detection (Android) and jailbreak detection (iOS) identify whether a device's operating system has had its built-in security restrictions removed, giving apps and users elevated, unrestricted access to the system.",
    body: "A rooted or jailbroken device isn't inherently malicious, but it removes OS-level guarantees an app might otherwise rely on — sandboxing, restricted file access, verified boot. That's exactly the environment root-hiding tools, hooking frameworks, and automated fraud tooling depend on. Reliable detection looks for multiple independent signals (root management apps, modified system partitions, su binaries) rather than one, since root-hiding modules are specifically built to defeat single-signal checks.",
    relatedHref: "/features/root-jailbreak-detection/",
    relatedLabel: "See Protect's root & jailbreak detection",
  },
  {
    slug: "anti-hooking",
    term: "Anti-Hooking (Frida, Xposed, LSPosed)",
    shortAnswer:
      "Anti-hooking detection identifies instrumentation frameworks — like Frida, Xposed, and LSPosed — that let an attacker intercept, inspect, and rewrite an app's method calls and logic while it's running.",
    body: "Hooking frameworks are legitimate reverse-engineering and debugging tools, which is exactly why they're also the standard toolkit for bypassing in-app checks, patching license validation, or automating abuse of an app's logic. Frida in particular is scriptable and widely documented, making it the default tool for both security researchers and attackers targeting mobile apps. Detection typically looks for the fingerprints these frameworks leave in a running process — loaded libraries, memory patterns, or IPC channels the frameworks use — rather than trying to block installation of the tools themselves.",
    relatedHref: "/features/anti-hooking-frida-xposed/",
    relatedLabel: "See Protect's anti-hooking detection",
  },
  {
    slug: "tamper-detection",
    term: "Tamper Detection / Integrity Attestation",
    shortAnswer:
      "Tamper detection verifies that a running app's binary hasn't been modified, decompiled-and-repatched, or resigned since it was originally built and signed — catching cloned or cracked app distributions.",
    body: "The standard app-cloning pipeline is decompile, patch out or bypass whatever check is inconvenient, resign with a different certificate, then redistribute. A signed integrity check compares the running binary's actual signature against what you shipped, so a repackaged build fails the check even if every other feature works identically to the original. This is a different signal from root or hooking detection — it's not about the device's environment, it's about whether the app itself is still the app you built.",
    relatedHref: "/features/tamper-detection-integrity-attestation/",
    relatedLabel: "See Protect's tamper detection",
  },
  {
    slug: "emulator-detection",
    term: "Emulator / VM Detection",
    shortAnswer:
      "Emulator detection identifies whether an app is running inside a virtualized or emulated environment rather than on a physical device — commonly used to automate fraud, farming, or abuse at scale.",
    body: "Emulators are legitimate developer tools, but emulator farms — dozens or hundreds of virtual Android instances run in parallel — are also standard infrastructure for automating account creation, promo abuse, and bot traffic against mobile apps. Detection looks at build fingerprints, sensor availability, telephony stack behavior, and other signals that are difficult for an emulator to fully replicate, though any single signal alone is usually easy to patch around, which is why layered detection matters here as much as it does for root detection.",
    relatedHref: "/features/vm-emulator-detection/",
    relatedLabel: "See Protect's emulator & VM detection",
  },
  {
    slug: "device-fingerprinting",
    term: "Device Fingerprinting",
    shortAnswer:
      "Device fingerprinting generates a stable identifier for a specific device based on its hardware and software characteristics, used to recognize the same device across sessions, reinstalls, or account switches.",
    body: "Unlike a login-based identity, a device fingerprint persists even if a user logs out, reinstalls the app, or creates a new account — which makes it useful for spotting the same compromised device cycling through multiple accounts, or a cloned app instance reappearing after being blocked. It's typically one input into a broader risk score rather than a standalone block/allow decision.",
    relatedHref: "/features/device-fingerprinting/",
    relatedLabel: "See Protect's device fingerprinting",
  },
  {
    slug: "masvs",
    term: "OWASP MASVS",
    shortAnswer:
      "MASVS (Mobile Application Security Verification Standard) is OWASP's baseline standard for mobile app security, organized into categories like architecture, data storage, cryptography, authentication, network communication, and resilience.",
    body: "The MASVS-RESILIENCE category specifically covers anti-tampering and anti-reverse-engineering controls — root/jailbreak detection, anti-debugging, binary protection — making it the section of the standard most directly addressed by a RASP product rather than by secure coding practices alone. MASVS is a verification standard, not a certification you purchase; teams typically use it as a checklist against which to assess (or have a third party assess) their own app.",
    relatedHref: "/resources/owasp-masvs-where-runtime-protection-fits/",
    relatedLabel: "See how RASP maps to MASVS-RESILIENCE",
  },
  {
    slug: "app-shielding",
    term: "App Shielding / App Hardening",
    shortAnswer:
      "App shielding (or app hardening) refers to applying protective layers — code obfuscation, anti-tamper checks, RASP — to a compiled app, typically without requiring changes to the app's source code.",
    body: "The term covers a range of techniques, from static protections applied once at build time (obfuscation, string encryption) to dynamic, runtime protections that keep running through the app's lifecycle (RASP). \"Upload and shield\" tooling — where you upload an already-signed APK or AAB and get a protected build back — is one common delivery model for app shielding, distinct from integrating a security SDK directly into your source code.",
  },
  {
    slug: "code-obfuscation",
    term: "Code Obfuscation",
    shortAnswer:
      "Code obfuscation transforms an app's compiled code to make it harder to read and reverse-engineer — renaming classes and methods, encrypting strings, flattening control flow — without changing what the app actually does.",
    body: "Obfuscation raises the cost of static analysis: reading the decompiled code without running it. It does nothing once the app is actually running on a rooted, hooked, or debugged device, which is a runtime problem — that's the gap RASP is built to cover. The two are complementary layers, not alternatives to each other.",
    relatedHref: "/resources/code-obfuscation-vs-runtime-protection/",
    relatedLabel: "Read: obfuscation vs. runtime protection",
  },
  {
    slug: "mitm",
    term: "MITM (Man-in-the-Middle) Attack",
    shortAnswer:
      "A man-in-the-middle attack intercepts communication between an app and its backend, letting an attacker read or modify traffic in transit — commonly carried out using a proxy tool and a manually installed rogue certificate authority.",
    body: "On mobile specifically, MITM proxy tools are standard tooling for both legitimate API research and traffic interception attacks, since installing a custom root CA on a device you control is straightforward. SSL/certificate pinning is the standard defense: it makes the app reject any certificate that isn't the specific one it expects, regardless of what the device's OS trust store says.",
    relatedHref: "/solutions/use-cases/mitm-network-attack-prevention/",
    relatedLabel: "See Protect's MITM prevention",
  },
];

export function getGlossaryTermBySlug(slug: string) {
  return glossaryTerms.find((entry) => entry.slug === slug);
}
