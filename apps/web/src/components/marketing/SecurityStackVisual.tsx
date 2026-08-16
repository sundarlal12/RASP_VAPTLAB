import { Fingerprint, ScanEye, Lock, ShieldAlert, Activity, Eye } from "lucide-react";

const modules = [
  { icon: Fingerprint, label: "Root Detection" },
  { icon: ScanEye, label: "Anti-Hooking" },
  { icon: Lock, label: "SSL Pinning" },
  { icon: ShieldAlert, label: "Tamper Detection" },
  { icon: Eye, label: "Background Watchdog" },
  { icon: Activity, label: "Risk Scoring" },
];

export function SecurityStackVisual() {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-3">
      <div className="w-full rounded-2xl border border-slate-200 bg-white px-6 py-4 text-center shadow-sm">
        <p className="font-display text-sm font-bold text-ink-950">Your Android App</p>
      </div>
      <div aria-hidden="true" className="h-6 w-px bg-slate-300" />

      <div className="w-full rounded-2xl border border-brand-200 bg-brand-50 px-6 py-4 text-center">
        <p className="font-display text-sm font-bold text-brand-800">AppShield SDK (Java/Kotlin bridge)</p>
      </div>
      <div aria-hidden="true" className="h-6 w-px bg-slate-300" />

      <div className="w-full rounded-2xl border-2 border-ink-950 bg-ink-950 px-6 py-6 text-center">
        <p className="font-display text-sm font-bold text-white">
          Native C++ Core <span className="font-normal text-slate-400">(mbedTLS-based)</span>
        </p>
        <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
          {modules.map((module) => (
            <div
              key={module.label}
              className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-3"
            >
              <module.icon className="h-4 w-4 text-brand-300" />
              <span className="text-center text-[11px] font-medium leading-tight text-slate-200">
                {module.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
