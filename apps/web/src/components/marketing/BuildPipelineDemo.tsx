"use client";

import { useEffect, useRef, useState } from "react";
import { UploadCloud, SlidersHorizontal, ShieldCheck, FileCheck2, Rocket, Check } from "lucide-react";

const STEP_DURATION = 1700;

function stepsForExt(ext: string) {
  return [
    { icon: UploadCloud, title: `Signed ${ext.toUpperCase()} uploaded`, meta: `app-release.${ext} · v2.14.0` },
    { icon: SlidersHorizontal, title: "Detection policy applied", meta: "12 modules configured" },
    { icon: ShieldCheck, title: "Protect core injected", meta: "Native C++ layer" },
    { icon: FileCheck2, title: "Build re-signed", meta: "42 MB · zipaligned" },
    { icon: Rocket, title: "Protected build ready", meta: "Ready to distribute" },
  ];
}

const CYCLE_LENGTH = stepsForExt("apk").length + 1;

export function BuildPipelineDemo() {
  const [tick, setTick] = useState(0);
  const tokenRef = useRef(0);

  useEffect(() => {
    // Dev-mode effects can double-invoke (React Strict Mode) without the
    // first interval reliably being cleared before the second is created.
    // Tagging each invocation and having stale ones no-op keeps only the
    // latest interval actually driving state, regardless of how many exist.
    const myToken = ++tokenRef.current;
    const interval = setInterval(() => {
      if (tokenRef.current !== myToken) return;
      setTick((t) => t + 1);
    }, STEP_DURATION);
    return () => clearInterval(interval);
  }, []);

  const active = tick % CYCLE_LENGTH;
  const loopCount = Math.floor(tick / CYCLE_LENGTH);
  const fileExt = loopCount % 2 === 0 ? "apk" : "aab";
  const steps = stepsForExt(fileExt);

  return (
    <div className="w-full max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-100 px-5 py-3.5">
        <div className="flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-700">
          <ShieldCheck className="h-4 w-4 text-brand-600" />
          Build pipeline
        </div>
        <span className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-success-600">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success-500 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success-500" />
          </span>
          Auto
        </span>
      </div>

      <ul className="flex flex-col divide-y divide-slate-100">
        {steps.map((step, index) => {
          const status = index < active ? "done" : index === active ? "processing" : "queued";
          const uploading = index === 0 && status === "processing";
          return (
            <li
              key={step.title}
              className={`flex flex-col gap-2 px-5 py-3 transition-colors duration-300 ${
                status === "processing" ? "bg-brand-50/60" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-colors duration-300 ${
                    status === "done"
                      ? "border-success-200 bg-success-50 text-success-600"
                      : status === "processing"
                        ? "border-brand-200 bg-brand-100 text-brand-600"
                        : "border-slate-200 bg-slate-50 text-slate-400"
                  }`}
                >
                  {status === "done" ? <Check className="h-4 w-4" /> : <step.icon className="h-4 w-4" />}
                </span>
                <div className="min-w-0 flex-1">
                  <p
                    className={`truncate text-sm ${status === "queued" ? "text-ink-500" : "font-medium text-ink-950"}`}
                  >
                    {step.title}
                  </p>
                  <p className="truncate font-mono text-[10px] uppercase tracking-wider text-ink-500">
                    {step.meta}
                  </p>
                </div>
                <span
                  className={`shrink-0 rounded px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider ${
                    status === "done"
                      ? "text-success-600"
                      : status === "processing"
                        ? "text-brand-600"
                        : "text-slate-400"
                  }`}
                >
                  {status === "done" ? "Done" : status === "processing" ? "Processing" : "Queued"}
                </span>
              </div>
              {uploading ? (
                <div key={loopCount} className="ml-11 h-1 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full bg-brand-500 [animation:tabfill_1.7s_linear]" />
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
