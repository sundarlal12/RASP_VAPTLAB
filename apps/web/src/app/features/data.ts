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
  Boxes,
  BugOff,
  MemoryStick,
} from "lucide-react";

export type LayerId =
  | "environment-detection"
  | "tamper-debug-protection"
  | "secure-communication"
  | "runtime-defense";

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
    id: "environment-detection",
    title: "Environment & Threat Detection",
    description:
      "Know what your app is actually running on before you trust the session — rooted, virtualized, or a real device.",
  },
  {
    id: "tamper-debug-protection",
    title: "Tamper & Debug Protection",
    description:
      "Catch instrumentation, live debugging, and modified binaries — the tooling attackers rely on to analyze and patch your app.",
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
    layer: "environment-detection",
    title: "Root & Jailbreak Detection",
    summary:
      "Detects rooted devices, including Magisk-hidden root, and modified system environments at launch and during the session.",
    description:
      "Protect inspects the device environment for root indicators — modified system partitions, root management apps like Magisk, su binaries, and other signs of a compromised OS — so you can block, degrade, or flag sessions running on devices your app shouldn't trust.",
    icon: Fingerprint,
    details: [
      "Layered detection rather than a single signature check, so common root-hiding tools don't get a free pass.",
      "Runs at launch and is re-checked during the session via the background watchdog, not just once at startup.",
      "Risk signal feeds into the unified runtime risk score alongside every other detection module.",
    ],
  },
  {
    slug: "vm-emulator-detection",
    layer: "environment-detection",
    title: "VM & Emulator Detection",
    summary: "Flags sessions running in an emulator or virtualized environment instead of a real device.",
    description:
      "Emulators and virtual machines are standard tooling for automating abuse at scale and for analyzing an app outside a real device. Protect detects common emulator and virtualization fingerprints so you can treat virtualized sessions differently from real-device traffic.",
    icon: Boxes,
    details: [
      "One of the four detection categories exposed in the Protect policy — set independently to OFF, monitor, or actively detect.",
      "Feeds the same unified runtime risk score as every other detection module.",
    ],
  },
  {
    slug: "device-fingerprinting",
    layer: "environment-detection",
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
    slug: "anti-hooking-frida-xposed",
    layer: "tamper-debug-protection",
    title: "Anti-Hooking (Frida / Xposed)",
    summary:
      "Detects Frida, Xposed, and LSPosed instrumentation frameworks used to hook, trace, or manipulate your app's runtime behavior.",
    description:
      "Frida, Xposed, LSPosed, and similar hooking frameworks let attackers intercept method calls, patch return values, and bypass in-app logic entirely. Protect's native hooking-detection module looks for the fingerprints these frameworks leave behind in a running process.",
    icon: ScanEye,
    details: [
      "Detection logic runs in the native C++ layer, not Java/Kotlin — harder for a hooked runtime to blind.",
      "Flags active instrumentation rather than relying on install-time checks alone.",
      "Pairs with tamper detection to catch both static repackaging and live runtime manipulation.",
    ],
  },
  {
    slug: "anti-debugging",
    layer: "tamper-debug-protection",
    title: "Anti-Debugging",
    summary: "Detects an attached debugger so live step-through analysis of your app doesn't go unnoticed.",
    description:
      "A debugger attached to a running process is one of the most direct ways to analyze and bypass app logic. Protect detects active debugger attachment as its own policy category, independent of hooking-framework detection.",
    icon: BugOff,
    details: [
      "Configurable independently of hooking and tamper detection in the Protect policy.",
      "Targets live debugger attachment, not just static analysis resistance.",
    ],
  },
  {
    slug: "memory-protection",
    layer: "tamper-debug-protection",
    title: "Memory Protection",
    summary: "Guards against runtime memory patching and inspection — a common route around app logic.",
    description:
      "Memory editors and process-inspection tools let attackers read or patch a running app's memory directly, bypassing checks that only look at the binary on disk. Protect's memory protection targets this class of live, in-process tampering.",
    icon: MemoryStick,
    details: [
      "One of the four independently configurable detection categories in the Protect policy.",
      "Complements tamper detection, which focuses on the binary; this focuses on the running process.",
    ],
  },
  {
    slug: "tamper-detection-integrity-attestation",
    layer: "tamper-debug-protection",
    title: "Tamper Detection & Integrity Attestation",
    summary: "Verifies your app hasn't been modified, resigned, or repackaged since you built it.",
    description:
      "A signed integrity check attests that the running binary matches what you shipped. If the APK has been decompiled, patched, and resigned — a common precursor to cloned or cracked app distribution — Protect's attestation module can detect the mismatch.",
    icon: ShieldAlert,
    details: [
      "Cryptographic signature verification confirms the app's integrity at runtime, not just at install.",
      "Catches common repackaging workflows: decompile → patch → resign → redistribute.",
      "Works alongside environment detection to build a full picture of session trust.",
    ],
  },
  {
    slug: "ssl-certificate-pinning",
    layer: "secure-communication",
    title: "SSL / Certificate Pinning",
    summary:
      "Pins your backend's certificate so common SSL pinning bypass tools, MITM proxies, and swapped CAs can't intercept traffic.",
    description:
      "Protect pins your API's certificate (SPKI hash) at the native layer, independent of the OS trust store. Even a device with a malicious CA installed — the standard setup for MITM proxy tools and SSL pinning bypass frameworks — can't get between your app and your backend without the connection failing.",
    icon: Lock,
    details: [
      "Per-client pin sets, generated and managed through the Protect portal.",
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
      "Protect's detection and cryptographic logic is implemented in native C++ (AES-256-GCM, RSA-OAEP, HMAC-SHA256) rather than Java or Kotlin. Native code is meaningfully more expensive to decompile and reverse-engineer than JVM bytecode, which raises the cost of attacking the SDK itself, not just your app.",
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
      "Rather than handling each detection signal separately, Protect aggregates environment, tamper, and network signals into a single runtime risk score your app (or backend) can react to — block, step up authentication, or just log, depending on your policy. The same signals power the live dashboard in the Protect portal.",
    icon: Activity,
    details: [
      "Centralized detection registry aggregates every module's output.",
      "Your app decides the response — the SDK reports risk, it doesn't force a single policy.",
      "Visible in the Protect portal's live dashboard: top threats, device risk scores, blocked sessions.",
    ],
  },
  {
    slug: "background-watchdog-runtime-reverification",
    layer: "runtime-defense",
    title: "Background Watchdog & Re-Verification",
    summary: "Detection re-runs periodically through the session, not just once at launch.",
    description:
      "A launch-time-only check only has to be beaten once. Protect's background watchdog re-runs key detections at intervals through the app's lifecycle, so an environment that becomes compromised mid-session — a debugger or hook attached after startup, for instance — still gets caught.",
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
      "For screens showing sensitive data — payment details, documents, credentials, proprietary content — Protect can prevent or detect screenshots and screen recording, reducing casual data exfiltration and content piracy risk.",
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
