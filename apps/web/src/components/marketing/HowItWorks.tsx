import { PackagePlus, SlidersHorizontal, Rocket } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconTile } from "@/components/ui/IconTile";

const steps = [
  {
    icon: PackagePlus,
    title: "Integrate the SDK",
    description:
      "Add the AppShield AAR to your Gradle build. The native core ships with the SDK — no separate build step or external toolchain required.",
  },
  {
    icon: SlidersHorizontal,
    title: "Configure detection & pinning policy",
    description:
      "Set which detections are active, your SSL pin set, and how the SDK should report risk — as an in-app signal, a callback, or both.",
  },
  {
    icon: Rocket,
    title: "Ship, then monitor risk signals",
    description:
      "Your app decides how to act on the runtime risk score. Detections keep re-running through the session via the background watchdog, not just at launch.",
  },
];

export function HowItWorks() {
  return (
    <div className="flex flex-col gap-16">
      <SectionHeading
        eyebrow="Integration"
        title="Three steps from build to protected"
        description="AppShield integrates at the Gradle level — no proprietary build pipeline or app resubmission workflow to adopt."
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
