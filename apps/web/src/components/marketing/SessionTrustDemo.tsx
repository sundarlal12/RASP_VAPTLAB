"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2, ShieldCheck } from "lucide-react";

const CHECKING_DURATION = 1600;
const RESUMED_DURATION = 2400;

export function SessionTrustDemo() {
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const interval = setInterval(
      () => setChecking((current) => !current),
      checking ? CHECKING_DURATION : RESUMED_DURATION,
    );
    return () => clearInterval(interval);
  }, [checking]);

  return (
    <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white">
      <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-danger-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-warning-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-success-400" />
      </div>
      <div className="relative h-[68px] px-4 py-5">
        <AnimatePresence mode="wait">
          {checking ? (
            <motion.div
              key="checking"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="flex items-center gap-2"
            >
              <Loader2 className="h-4 w-4 animate-spin text-brand-500" />
              <div>
                <p className="text-sm font-semibold text-ink-950">Checking device…</p>
                <p className="mt-1 text-xs text-ink-500">Matching against trusted policy</p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="resumed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="flex items-center gap-2"
            >
              <ShieldCheck className="h-4 w-4 text-success-500" />
              <div>
                <p className="text-sm font-semibold text-ink-950">Session resumed.</p>
                <p className="mt-1 text-xs text-ink-500">Trusted device · 0 re-checks · 0ms overhead</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
