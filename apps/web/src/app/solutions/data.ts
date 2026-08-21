import type { LucideIcon } from "lucide-react";
import {
  Landmark,
  Gamepad2,
  HeartPulse,
  Building2,
  ShoppingBag,
  Clapperboard,
  Bot,
  Copy,
  ShieldOff,
  Wifi,
  MonitorPlay,
} from "lucide-react";

export interface Industry {
  slug: string;
  title: string;
  summary: string;
  icon: LucideIcon;
  relevantFeatures: string[]; // feature slugs
  description: string;
}

export interface UseCase {
  slug: string;
  title: string;
  summary: string;
  icon: LucideIcon;
  relevantFeatures: string[]; // feature slugs
  description: string;
}

export const industries: Industry[] = [
  {
    slug: "fintech-banking",
    title: "Fintech & Banking",
    summary: "Protect account access, payment flows, and transaction data from compromised devices.",
    icon: Landmark,
    relevantFeatures: [
      "root-jailbreak-detection",
      "vm-emulator-detection",
      "ssl-certificate-pinning",
      "tamper-detection-integrity-attestation",
      "screenshot-screen-recording-prevention",
    ],
    description:
      "Banking and payments apps are high-value targets for rooted-device fraud, emulator-based fraud rings, MITM attacks against transaction traffic, and cloned apps used for credential harvesting. Protect's combination of root/VM detection, SSL pinning, and tamper detection addresses the environment-level risks that sit underneath your existing fraud and auth controls — the same runtime-resilience territory covered by frameworks like OWASP MASVS, PCI DSS mobile guidance, Australia's APRA CPS 234, and SAMA's cybersecurity framework in Saudi Arabia, wherever your compliance program is anchored.",
  },
  {
    slug: "gaming",
    title: "Gaming",
    summary: "Stop cheat injection, hooked clients, and repackaged builds from undermining fair play.",
    icon: Gamepad2,
    relevantFeatures: [
      "anti-hooking-frida-xposed",
      "memory-protection",
      "tamper-detection-integrity-attestation",
      "runtime-risk-scoring",
    ],
    description:
      "Cheat tools and memory editors typically rely on hooking frameworks, direct memory patching, or a patched, resigned build. Anti-hooking detection, memory protection, and integrity attestation target exactly that path, without needing to enumerate every cheat tool individually.",
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    summary: "Keep patient data and clinical workflows off compromised or monitored devices.",
    icon: HeartPulse,
    relevantFeatures: [
      "root-jailbreak-detection",
      "encrypted-telemetry",
      "screenshot-screen-recording-prevention",
    ],
    description:
      "Health apps handling patient data need assurance that the runtime environment hasn't been tampered with and that on-screen data isn't casually captured, alongside whatever HIPAA-oriented controls already exist in your backend.",
  },
  {
    slug: "government-public-sector",
    title: "Government & Public Sector",
    summary: "Harden citizen-facing and internal apps against tampering and unauthorized instrumentation.",
    icon: Building2,
    relevantFeatures: [
      "tamper-detection-integrity-attestation",
      "anti-hooking-frida-xposed",
      "runtime-risk-scoring",
    ],
    description:
      "Public-sector apps are frequent targets for both casual tampering and more deliberate attacks. A unified runtime risk score gives you a single signal to act on across a wide range of device conditions — relevant whether you're working against Australia's Essential Eight, UAE government security guidance from NESA, or an internal hardening mandate.",
  },
  {
    slug: "retail-ecommerce",
    title: "Retail & E-Commerce",
    summary: "Defend checkout flows and account APIs from automated abuse via cloned or hooked clients.",
    icon: ShoppingBag,
    relevantFeatures: [
      "anti-hooking-frida-xposed",
      "device-fingerprinting",
      "runtime-risk-scoring",
    ],
    description:
      "Bots and scripted clients that abuse checkout, inventory, or loyalty APIs usually run through a hooked or cloned instance of your app, not a browser. Detecting the client-side tampering is a more durable control than pattern-matching traffic alone.",
  },
  {
    slug: "media-streaming",
    title: "Media & Streaming",
    summary: "Reduce content piracy from screen recording and tampered playback clients.",
    icon: Clapperboard,
    relevantFeatures: [
      "screenshot-screen-recording-prevention",
      "tamper-detection-integrity-attestation",
    ],
    description:
      "Screen-recording prevention on playback screens, combined with tamper detection against patched clients that strip DRM-adjacent restrictions, addresses two of the most common piracy paths for streaming apps.",
  },
];

export const useCases: UseCase[] = [
  {
    slug: "anti-scraping-bot-prevention",
    title: "Anti-Scraping & Bot Prevention",
    summary: "Block automated bots, hooked clients, and cloned apps from scraping data through your APIs.",
    icon: Bot,
    relevantFeatures: [
      "anti-hooking-frida-xposed",
      "vm-emulator-detection",
      "device-fingerprinting",
      "runtime-risk-scoring",
    ],
    description:
      "Most automated abuse of a mobile app's APIs doesn't come through a browser — it comes through a hooked, instrumented, or emulator-farmed instance of your own app used to script requests at scale. Protect targets that client-side tampering directly: anti-hooking detection flags instrumentation frameworks like Frida, VM/emulator detection flags non-device traffic, device fingerprinting correlates abuse across sessions and reinstalls, and the runtime risk score gives you a single signal to throttle, block, or step up verification for bot-driven traffic. This is a client-integrity control, not a web application firewall — it's built for mobile API abuse specifically.",
  },
  {
    slug: "app-cloning-repackaging-prevention",
    title: "App Cloning & Repackaging Prevention",
    summary: "Detect decompiled, patched, and resigned builds distributed as clones of your app.",
    icon: Copy,
    relevantFeatures: [
      "tamper-detection-integrity-attestation",
      "root-jailbreak-detection",
    ],
    description:
      "Cloned or repackaged apps — decompiled, modified, and resigned for redistribution — undermine your brand, your monetization, and often your users' security. Integrity attestation verifies the running binary matches what you shipped.",
  },
  {
    slug: "root-jailbreak-risk-mitigation",
    title: "Root & Jailbreak Risk Mitigation",
    summary: "Apply differentiated policy — block, degrade, or flag — for sessions on compromised devices.",
    icon: ShieldOff,
    relevantFeatures: ["root-jailbreak-detection", "runtime-risk-scoring"],
    description:
      "Not every rooted device is malicious, and not every use case needs a hard block. Protect reports the signal; you decide the policy — from a soft warning to a hard gate on sensitive flows.",
  },
  {
    slug: "mitm-network-attack-prevention",
    title: "MITM & Network Attack Prevention",
    summary: "Prevent traffic interception via SSL pinning, independent of the device's trust store.",
    icon: Wifi,
    relevantFeatures: ["ssl-certificate-pinning", "hardened-native-core"],
    description:
      "Proxy-based interception tools rely on a malicious CA being trusted by the device. Certificate pinning at the native layer means your app's connection to your backend doesn't depend on the OS trust store being clean.",
  },
  {
    slug: "screen-capture-piracy-prevention",
    title: "Screen Capture & Piracy Prevention",
    summary: "Prevent screenshots and screen recording on screens carrying sensitive or licensed content.",
    icon: MonitorPlay,
    relevantFeatures: ["screenshot-screen-recording-prevention"],
    description:
      "Configurable, per-screen screenshot and screen-recording prevention for anything you don't want casually captured — payment details, confidential documents, or licensed media.",
  },
];

export function getIndustryBySlug(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}

export function getUseCaseBySlug(slug: string) {
  return useCases.find((useCase) => useCase.slug === slug);
}
