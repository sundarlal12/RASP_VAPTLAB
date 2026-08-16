import { SlidersHorizontal, UploadCloud, LayoutDashboard } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconTile } from "@/components/ui/IconTile";

const steps = [
  {
    icon: SlidersHorizontal,
    title: "Configure your detection & pinning policy",
    description:
      "Set root/VM detection, anti-hooking, anti-debugging, and memory-protection modes independently, and generate your SSL pin set — all from the AppShield portal.",
  },
  {
    icon: UploadCloud,
    title: "Upload your signed build",
    description:
      "Upload your already-built, already-signed APK. AppShield shields it against your configured policy and hands back a protected build ready to distribute — no separate SDK integration required for most teams.",
  },
  {
    icon: LayoutDashboard,
    title: "Monitor the live dashboard",
    description:
      "Track detection events, device risk scores, and top threats as they happen. Detections keep re-running through the session via the background watchdog, not just at launch.",
  },
];

export function HowItWorks() {
  return (
    <div className="flex flex-col gap-16">
      <SectionHeading
        eyebrow="How it works"
        title="Shield a build in minutes, not a sprint"
        description="Configure policy, upload your signed APK, get a protected build back. Teams that want native SDK-level control can integrate directly instead — talk to us about what fits your app."
      />
      <div className="grid gap-10 sm:grid-cols-3">
        {steps.map((step, index) => (
          <div key={step.title} className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <IconTile icon={step.icon} />
              <span className="font-display text-sm font-semibold text-ink-500">
                Step {index + 1}
              </span>
            </div>
            <h3 className="font-display text-lg font-bold text-ink-950">{step.title}</h3>
            <p className="text-sm leading-relaxed text-ink-500">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
