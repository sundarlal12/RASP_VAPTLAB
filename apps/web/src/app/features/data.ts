import type { LucideIcon } from "lucide-react";
import {
  Fingerprint,
  ShieldAlert,
  Eye,
  ScanEye,
  Lock,
  Cpu,
  Activity,
  Radar,
  Camera,
  RadioTower,
} from "lucide-react";

export type LayerId = "threat-detection" | "secure-communication" | "runtime-defense";

export interface Layer {
  id: LayerId;
  title: string;
  description: string;
}

export interface Feature {
  slug: string;
  layer: LayerId;
  title: string;
  summary: string;
  description: string;
  icon: LucideIcon;
  details: string[];
}

export const layers: Layer[] = [
  {
    id: "threat-detection",
    title: "Threat & Tamper Detection",
    description:
      "Identify compromised, hooked, or repackaged environments before they can be used to attack your app.",
  },
  {
    id: "secure-communication",
    title: "Secure Communication",
    description:
      "Lock down the channel between your app and your backend so intercepted traffic and swapped certificates go nowhere.",
  },
  {
    id: "runtime-defense",
    title: "Continuous Runtime Defense",
    description:
      "Protection that keeps checking after launch — not a one-time gate that attackers only need to beat once.",
  },
];

export const features: Feature[] = [
  {
    slug: "root-jailbreak-detection",
    layer: "threat-detection",
    title: "Root & Jailbreak Detection",
    summary: "Detects rooted devices and modified system environments at launch and during the session.",
    description:
      "AppShield inspects the device environment for root indicators — modified system partitions, root management apps, su binaries, and other signs of a compromised OS — so you can block, degrade, or flag sessions running on devices your app shouldn't trust.",
    icon: Fingerprint,
    details: [
      "Layered detection rather than a single signature check, so common root-hiding tools don't get a free pass.",
      "Runs at launch and is re-checked during the session via the background watchdog, not just once at startup.",
      "Risk signal feeds into the unified runtime risk score alongside every other detection module.",
    ],
  },
  {
    slug: "anti-hooking-frida-xposed",
    layer: "threat-detection",
    title: "Anti-Hooking (Frida / Xposed)",
    summary: "Detects instrumentation frameworks used to hook, trace, or manipulate your app's runtime behavior.",
    description:
      "Frida, Xposed, and similar hooking frameworks let attackers intercept method calls, patch return values, and bypass in-app logic entirely. AppShield's native hooking-detection module looks for the fingerprints these frameworks leave behind in a running process.",
    icon: ScanEye,
    details: [
      "Detection logic runs in the native C++ layer, not Java/Kotlin — harder for a hooked runtime to blind.",
      "Flags active instrumentation rather than relying on install-time checks alone.",
      "Pairs with tamper detection to catch both static repackaging and live runtime manipulation.",
    ],
  },
  {
    slug: "tamper-detection-integrity-attestation",
    layer: "threat-detection",
    title: "Tamper Detection & Integrity Attestation",
    summary: "Verifies your app hasn't been modified, resigned, or repackaged since you built it.",
    description:
      "A signed integrity check attests that the running binary matches what you shipped. If the APK has been decompiled, patched, and resigned — a common precursor to cloned or cracked app distribution — AppShield's attestation module can detect the mismatch.",
    icon: ShieldAlert,
    details: [
      "Cryptographic signature verification (shield_sig) confirms the app's integrity at runtime, not just at install.",
      "Catches common repackaging workflows: decompile → patch → resign → redistribute.",
      "Works alongside root and hooking detection to build a full picture of environment trust.",
    ],
  },
  {
    slug: "device-fingerprinting",
    layer: "threat-detection",
    title: "Device Fingerprinting",
    summary: "Generates a stable device identity signal to spot repeat abuse across sessions and reinstalls.",
    description:
      "A persistent, per-device identifier lets you correlate risk signals across sessions — useful for spotting the same compromised device cycling through accounts, or the same cloned app instance reappearing after a reinstall.",
    icon: Radar,
    details: [
      "Generated natively, alongside the SDK's other device-level checks.",
      "Feeds the runtime risk score so repeat-offender devices can be scored differently from first-time sessions.",
    ],
  },
  {
    slug: "ssl-certificate-pinning",
    layer: "secure-communication",
    title: "SSL / Certificate Pinning",
    summary: "Pins your backend's certificate so MITM proxies and swapped CAs can't intercept traffic.",
    description:
      "AppShield pins your API's certificate (SPKI hash) at the native layer, independent of the OS trust store. Even a device with a malicious CA installed — the standard setup for MITM proxy tools — can't get between your app and your backend without the connection failing.",
    icon: Lock,
    details: [
      "Per-client pin sets, configured per integration rather than a single hardcoded pin.",
      "Pin data is obfuscated in the shipped asset, not stored as a plain, greppable string.",
      "Native TLS client (mbedTLS-based) rather than relying solely on platform HTTP stacks.",
    ],
  },
  {
    slug: "encrypted-telemetry",
    layer: "secure-communication",
    title: "Encrypted Telemetry",
    summary: "Detection events and risk metrics are encrypted before they ever leave the device.",
    description:
      "Signals the SDK collects — detection events, risk scores, device metadata — are encrypted on-device before transmission, so the telemetry channel itself isn't a new thing to protect separately.",
    icon: RadioTower,
    details: [
      "AES-256-GCM authenticated encryption for metrics payloads.",
      "Keeps detection signals confidential in transit, even over an otherwise-compromised network path.",
    ],
  },
  {
    slug: "hardened-native-core",
    layer: "secure-communication",
    title: "Hardened Native Core",
    summary: "Core protection logic runs in native C++, not Java/Kotlin bytecode.",
    description:
      "AppShield's detection and cryptographic logic is implemented in native C++ (AES-256-GCM, RSA-OAEP, HMAC-SHA256) rather than Java or Kotlin. Native code is meaningfully more expensive to decompile and reverse-engineer than JVM bytecode, which raises the cost of attacking the SDK itself, not just your app.",
    icon: Cpu,
    details: [
      "Built on a hardened mbedTLS-based crypto stack: AES-128/256/GCM, RSA-OAEP, HMAC-SHA256, secure random.",
      "Key material handled through a dedicated key manager rather than scattered across app code.",
    ],
  },
  {
    slug: "runtime-risk-scoring",
    layer: "runtime-defense",
    title: "Runtime Risk Scoring",
    summary: "Every detection module feeds one unified risk score you can act on in real time.",
    description:
      "Rather than handling each detection signal separately, AppShield's detection registry aggregates root, hooking, tamper, and network signals into a single runtime risk score your app (or backend) can react to — block, step up authentication, or just log, depending on your policy.",
    icon: Activity,
    details: [
      "Centralized detection registry aggregates every module's output.",
      "Your app decides the response — the SDK reports risk, it doesn't force a single policy.",
    ],
  },
  {
    slug: "background-watchdog-runtime-reverification",
    layer: "runtime-defense",
    title: "Background Watchdog & Re-Verification",
    summary: "Detection re-runs periodically through the session, not just once at launch.",
    description:
      "A launch-time-only check only has to be beaten once. AppShield's background watchdog re-runs key detections at intervals through the app's lifecycle, so an environment that becomes compromised mid-session — a hook attached after startup, for instance — still gets caught.",
    icon: Eye,
    details: [
      "Periodic re-checks, not a single gate at cold start.",
      "Designed to catch post-launch tampering, not just pre-launch environment checks.",
    ],
  },
  {
    slug: "screenshot-screen-recording-prevention",
    layer: "runtime-defense",
    title: "Screenshot & Screen-Recording Prevention",
    summary: "Blocks or detects screen capture on sensitive screens to protect on-screen data.",
    description:
      "For screens showing sensitive data — payment details, documents, credentials, proprietary content — AppShield can prevent or detect screenshots and screen recording, reducing casual data exfiltration and content piracy risk.",
    icon: Camera,
    details: [
      "Useful for fintech (account/payment data), media/streaming (content piracy), and enterprise apps (confidential documents).",
      "Configurable per-screen rather than a blanket app-wide restriction.",
    ],
  },
];

export function getFeatureBySlug(slug: string) {
  return features.find((feature) => feature.slug === slug);
}

export function featuresByLayer(layerId: LayerId) {
  return features.filter((feature) => feature.layer === layerId);
}
