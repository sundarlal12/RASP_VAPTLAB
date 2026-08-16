import { ShieldCheck, ShieldAlert, ScanEye, Camera, Lock } from "lucide-react";

const events = [
  { icon: ScanEye, label: "Hooking framework detected (Frida)", status: "Flagged", tone: "warn" as const },
  { icon: Lock, label: "SSL pin verified", status: "OK", tone: "ok" as const },
  { icon: ShieldAlert, label: "Root indicators found", status: "Blocked", tone: "block" as const },
  { icon: Camera, label: "Screen recording attempt", status: "Blocked", tone: "block" as const },
];

const toneClasses = {
  ok: "bg-emerald-50 text-emerald-700",
  warn: "bg-amber-50 text-amber-700",
  block: "bg-rose-50 text-rose-700",
};

export function HeroPreviewCard() {
  return (
    <div className="w-full max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-white/90 text-left shadow-xl shadow-brand-900/10 backdrop-blur">
      <div className="flex items-center justify-between border-b border-slate-100 px-5 py-3.5">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-brand-600" />
          <span className="text-sm font-semibold text-ink-950">Runtime risk feed</span>
        </div>
        <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-semibold text-brand-700">
          Live
        </span>
      </div>
      <ul className="flex flex-col divide-y divide-slate-100">
        {events.map((event) => (
          <li key={event.label} className="flex items-center gap-3 px-5 py-3">
            <event.icon className="h-4 w-4 shrink-0 text-ink-500" />
            <span className="flex-1 text-sm text-ink-700">{event.label}</span>
            <span
              className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold ${toneClasses[event.tone]}`}
            >
              {event.status}
            </span>
          </li>
        ))}
      </ul>
      <p className="border-t border-slate-100 bg-slate-50 px-5 py-2.5 text-[11px] text-ink-500">
        Illustrative event feed — actual signals depend on your detection policy.
      </p>
    </div>
  );
}
