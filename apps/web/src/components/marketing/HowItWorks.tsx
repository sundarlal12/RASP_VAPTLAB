import { SlidersHorizontal, UploadCloud, LayoutDashboard } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconTile } from "@/components/ui/IconTile";
import { BuildPipelineDemo } from "@/components/marketing/BuildPipelineDemo";

const steps = [
  {
    icon: SlidersHorizontal,
    title: "Configure your detection & pinning policy",
    description:
      "Set root/VM detection, anti-hooking, anti-debugging, and memory-protection modes independently, and generate your SSL pin set — all from the Protect portal.",
  },
  {
    icon: UploadCloud,
    title: "Upload your signed build",
    description:
      "Upload your already-built, already-signed APK or AAB. SecureLint Protect shields it against your configured policy and hands back a protected build ready to distribute — no separate SDK integration required for most teams.",
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
    <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
      <div className="flex flex-col gap-10">
        <SectionHeading
          align="left"
          eyebrow="How it works"
          title="Shield a build in minutes, not a sprint"
          description="Configure policy, upload your signed APK, get a protected build back. Teams that want native SDK-level control can integrate directly instead — talk to us about what fits your app."
        />
        <div className="flex flex-col gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="flex gap-4">
              <IconTile icon={step.icon} className="shrink-0" />
              <div>
                <span className="font-display text-xs font-semibold text-ink-500">Step {index + 1}</span>
                <h3 className="mt-0.5 font-display text-base font-bold text-ink-950">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-500">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center lg:justify-end">
        <BuildPipelineDemo />
      </div>
    </div>
  );
}
