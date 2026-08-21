import type { Metadata } from "next";
import { ShieldCheck, Activity, UploadCloud, Smartphone } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactSalesForm } from "@/components/forms/ContactSalesForm";
import { siteConfig, pageKeywords } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to VaptLabs about integrating SecureLint Protect into your Android app — book a demo or reach our enterprise sales team directly.",
  keywords: pageKeywords(["RASP enterprise sales", "mobile app security demo"]),
  alternates: { canonical: "/contact/" },
};

const stats = [
  { value: "9", label: "Detection Modules" },
  { value: "4", label: "Protection Layers" },
  { value: "100%", label: "Native C++ Checks" },
  { value: "0", label: "Source Changes Required" },
];

const reasons = [
  {
    icon: ShieldCheck,
    title: "Native C++ Detection Engine",
    description:
      "Root, tamper, and hooking checks run natively — meaningfully harder to decompile and patch than JVM bytecode.",
  },
  {
    icon: Activity,
    title: "Continuous Runtime Re-Verification",
    description:
      "Detection keeps re-running through the session via the background watchdog, not just once at launch.",
  },
  {
    icon: UploadCloud,
    title: "No-Code Upload-and-Shield",
    description:
      "Configure a policy, upload your signed APK or AAB, get a protected build back — no SDK integration required for most teams.",
  },
  {
    icon: Smartphone,
    title: "Framework-Agnostic Shielding",
    description:
      "Applies the same way to native Android, React Native, and Flutter builds, since it operates on the final compiled APK.",
  },
];

const trustedLogos = [
  { src: "/logos/bigbasket.png", alt: "BigBasket", height: 24 },
  { src: "/logos/mygate.png", alt: "MyGate", height: 28 },
  { src: "/logos/paysquare.png", alt: "PaySquare", height: 34 },
  { src: "/logos/aurm.svg", alt: "Aurm", height: 22 },
];

export default function ContactPage() {
  return (
    <Section bg="gradient" className="pb-24 pt-14">
      <div className="mb-14 text-center">
        <div className="mb-6 flex justify-center">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact", href: "/contact/" }]} />
        </div>
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-ink-950 sm:text-5xl">
          Contact our Enterprise Sales team
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-500">
          Get in touch to see how {siteConfig.name} can protect your Android app from tampering,
          hooking, and runtime abuse.
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <div className="order-2 lg:order-1">
          <p className="mb-8 text-base leading-relaxed text-ink-700">
            {siteConfig.name} helps engineering and security teams stop app cloning, block runtime
            tampering, and enforce detection policy across every Android build they ship.
          </p>

          <div className="mb-10 grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[20px] border border-slate-200 bg-white/80 p-6 shadow-sm"
              >
                <div className="mb-2 font-display text-3xl font-extrabold text-brand-700">{stat.value}</div>
                <div className="text-sm leading-relaxed text-ink-500">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="rounded-[28px] bg-gradient-to-br from-ink-950 via-[#111827] to-ink-900 p-9 text-white shadow-[0_20px_60px_-12px_rgba(15,23,42,0.35)]">
            <h2 className="mb-3 text-2xl font-extrabold">Why security teams choose {siteConfig.shortName}</h2>
            <p className="mb-8 text-sm leading-relaxed text-slate-300">
              Enterprise-grade runtime protection with a configurable detection policy, native-layer
              tamper checks, and continuous session monitoring.
            </p>
            <div className="flex flex-col gap-6">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                    <reason.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="mb-1.5 text-base font-bold">{reason.title}</div>
                    <div className="text-sm leading-relaxed text-slate-300">{reason.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.1em] text-ink-500">
              Built for teams protecting Android apps in production
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              {trustedLogos.map((logo) => (
                // eslint-disable-next-line @next/next/no-img-element -- static export, unoptimized images
                <img
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  style={{ height: logo.height }}
                  className="w-auto opacity-70 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <ContactSalesForm />
        </div>
      </div>
    </Section>
  );
}
