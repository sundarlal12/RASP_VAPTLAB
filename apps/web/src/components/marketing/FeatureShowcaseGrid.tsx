import type { ReactNode } from "react";
import { ShieldCheck } from "lucide-react";
import { DeviceIdDemo } from "@/components/marketing/DeviceIdDemo";
import { SessionTrustDemo } from "@/components/marketing/SessionTrustDemo";
import { SessionMonitorDemo } from "@/components/marketing/SessionMonitorDemo";

const sliderSignals = [
  { label: "Root Access", value: 88 },
  { label: "Hooking Framework", value: 62 },
  { label: "Emulator", value: 55 },
  { label: "Debugger Attached", value: 40 },
  { label: "Screen Recording", value: 78 },
];

function PolicySlidersMockup() {
  return (
    <div className="mt-6 flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-5">
      {sliderSignals.map((signal, index) => (
        <div key={signal.label} className="flex flex-col gap-1.5">
          <span className="text-xs font-medium text-ink-700">{signal.label}</span>
          <div className="relative h-1.5 rounded-full bg-gradient-to-r from-success-500 via-warning-500 to-danger-500">
            <span
              style={{ left: `calc(${signal.value}% - 7px)`, animationDelay: `${index * 0.3}s` }}
              className="absolute top-1/2 h-3.5 w-3.5 rounded-full border-2 border-white bg-white shadow [animation:slider-drift_3.2s_ease-in-out_infinite]"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function ScoreChip({ score, tier, tone }: { score: number; tier: string; tone: "danger" | "warning" }) {
  const chipTone = tone === "danger" ? "bg-danger-500" : "bg-warning-500";
  const textTone = tone === "danger" ? "text-danger-600" : "text-warning-600";
  return (
    <div className="flex items-center gap-2">
      <span className={`rounded-full px-2.5 py-1 text-xs font-bold text-white ${chipTone}`}>{score}</span>
      <span className={`text-xs font-bold ${textTone}`}>{tier}</span>
    </div>
  );
}

function SessionScreeningMockup() {
  return (
    <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white">
      <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-4 py-3 text-sm font-bold text-ink-950">
        <ShieldCheck className="h-4 w-4 text-brand-600" />
        Device ID
        <span className="ml-auto truncate font-mono text-[11px] font-normal text-ink-500">
          a2cd45f...3f7de5
        </span>
      </div>

      <div
        style={{ animationDelay: "0s" }}
        className="flex items-center justify-between border-b border-slate-100 px-4 py-3 [animation:row-pulse_9s_ease-in-out_infinite]"
      >
        <span className="text-sm font-bold text-ink-950">Device Trust Score</span>
        <ScoreChip score={28} tier="LOW" tone="danger" />
      </div>

      <div className="grid grid-cols-2 gap-4 border-b border-slate-100 px-4 py-3 text-xs">
        {[
          { label: "Device Age", value: "2 Days" },
          { label: "Device Last Seen", value: "1 Hour Ago" },
          { label: "Device Brand", value: "Xiaomi" },
          { label: "Same Device Used By", value: "4 Users" },
        ].map((field, i) => (
          <div
            key={field.label}
            style={{ animationDelay: `${(i + 1) * 1.5}s` }}
            className="rounded [animation:row-pulse_9s_ease-in-out_infinite]"
          >
            <p className="font-semibold text-ink-700">{field.label}</p>
            <p className="mt-0.5 font-bold text-ink-950">{field.value}</p>
          </div>
        ))}
      </div>

      <div className="border-b border-slate-100 bg-slate-50 px-4 py-2.5 text-sm font-bold text-ink-950">
        Session
      </div>

      <div
        style={{ animationDelay: "7.5s" }}
        className="flex items-center justify-between px-4 py-3 [animation:row-pulse_9s_ease-in-out_infinite]"
      >
        <span className="text-sm font-bold text-ink-950">Risk Score</span>
        <ScoreChip score={62} tier="MEDIUM" tone="warning" />
      </div>
    </div>
  );
}

const policyLines = [
  { key: "if", node: (
    <>
      <span className="font-bold text-brand-600">IF</span>
      <span className="text-ink-700">device_status</span>
      <span className="text-ink-500">=</span>
      <span className="text-danger-600">rooted</span>
    </>
  ) },
  { key: "or", node: (
    <>
      <span>or</span>
      <span className="text-ink-700">=</span>
      <span className="text-danger-600">hooked</span>
    </>
  ), indent: true },
  { key: "and", node: (
    <>
      <span className="font-bold text-brand-600">AND</span>
      <span className="text-ink-700">app_env</span>
      <span className="text-ink-500">=</span>
      <span className="text-ink-950">production</span>
    </>
  ) },
  { key: "then", node: (
    <>
      <span className="font-bold text-brand-600">THEN</span>
      <span className="text-ink-700">action</span>
      <span className="text-ink-500">=</span>
      <span className="text-danger-600">block_session</span>
    </>
  ), divider: true },
];

function PolicyEngineMockup() {
  return (
    <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5 font-mono text-xs">
      <p className="mb-3 text-[10px] font-semibold uppercase tracking-wide text-ink-500">
        Policy configuration
      </p>
      <div className="flex flex-col gap-2">
        {policyLines.map((line, i) => (
          <div
            key={line.key}
            style={{ animationDelay: `${i * 1.5}s` }}
            className={`flex gap-2 [animation:line-pulse_6s_ease-in-out_infinite] ${
              line.indent ? "pl-8 text-ink-500" : ""
            } ${line.divider ? "border-t border-slate-100 pt-2" : ""}`}
          >
            {line.node}
          </div>
        ))}
      </div>
    </div>
  );
}

function ShowcaseCard({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <h3 className="font-display text-lg font-bold text-ink-950">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-500">{description}</p>
      {children}
    </div>
  );
}

export function FeatureShowcaseGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="flex flex-col gap-6">
        <ShowcaseCard
          title="Tamper-Proof Device Fingerprinting"
          description="The moment credentials are submitted, Protect resolves a stable device ID and flags it if that device is cloning apps or spoofing a new identity."
        >
          <DeviceIdDemo />
        </ShowcaseCard>
        <ShowcaseCard
          title="Frictionless Session Trust"
          description="Skip repeated re-checks for devices your policy already trusts — security without repeated friction."
        >
          <SessionTrustDemo />
        </ShowcaseCard>
      </div>

      <div className="flex flex-col gap-6">
        <ShowcaseCard
          title="Configurable Detection Policy"
          description="Tune the sensitivity of every signal — root, hooking, emulators, debuggers — to match your risk tolerance per app."
        >
          <PolicySlidersMockup />
        </ShowcaseCard>
        <ShowcaseCard
          title="Session & Transaction Screening"
          description="Attach a device risk score to signup, login, and payment events, with full session context behind every decision."
        >
          <SessionScreeningMockup />
        </ShowcaseCard>
      </div>

      <div className="flex flex-col gap-6">
        <ShowcaseCard
          title="Real-Time Session Monitoring"
          description="Watch device signals continuously through the session, not just once at launch, and flag the moment risk changes."
        >
          <SessionMonitorDemo />
        </ShowcaseCard>
        <ShowcaseCard
          title="Detection Policy Engine"
          description="Write conditional rules that combine multiple signals before deciding to allow, flag, or block a session."
        >
          <PolicyEngineMockup />
        </ShowcaseCard>
      </div>
    </div>
  );
}
