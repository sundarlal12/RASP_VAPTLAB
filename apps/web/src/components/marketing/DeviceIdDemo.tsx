"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ShieldCheck, Copy, TriangleAlert } from "lucide-react";

const EMAIL = "john@email.com";
const PASSWORD = "••••••••";

const TYPE_SPEED = 70;
const HOLD_AFTER_EMAIL = 250;
const HOLD_AFTER_PASSWORD = 500;
const HOLD_DEVICE_CARD = 1400;
const HOLD_WARNING_CARD = 2200;
const HOLD_RESET = 600;

export function DeviceIdDemo() {
  const [emailLen, setEmailLen] = useState(0);
  const [passwordLen, setPasswordLen] = useState(0);
  const [showDeviceCard, setShowDeviceCard] = useState(false);
  const [showWarningCard, setShowWarningCard] = useState(false);
  const timeouts = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    function schedule(fn: () => void, delay: number) {
      timeouts.current.push(setTimeout(fn, delay));
    }

    function runCycle() {
      let t = 0;

      for (let i = 1; i <= EMAIL.length; i++) {
        schedule(() => setEmailLen(i), t);
        t += TYPE_SPEED;
      }
      t += HOLD_AFTER_EMAIL;

      for (let i = 1; i <= PASSWORD.length; i++) {
        schedule(() => setPasswordLen(i), t);
        t += TYPE_SPEED;
      }
      t += HOLD_AFTER_PASSWORD;

      schedule(() => setShowDeviceCard(true), t);
      t += HOLD_DEVICE_CARD;

      schedule(() => setShowWarningCard(true), t);
      t += HOLD_WARNING_CARD;

      schedule(() => {
        setShowWarningCard(false);
        setShowDeviceCard(false);
        setEmailLen(0);
        setPasswordLen(0);
      }, t);
      t += HOLD_RESET;

      schedule(runCycle, t);
    }

    runCycle();

    return () => {
      timeouts.current.forEach(clearTimeout);
      timeouts.current = [];
    };
  }, []);

  const emailActive = emailLen > 0;
  const passwordActive = passwordLen > 0;

  return (
    <div className="relative mt-6 h-96 overflow-hidden rounded-xl bg-slate-50">
      <div className="absolute left-6 top-4 h-72 w-40 rounded-[2rem] border-2 border-slate-200" />
      <div className="absolute left-[104px] top-9 h-1.5 w-8 -translate-x-1/2 rounded-full bg-slate-200" />

      <div className="absolute left-11 top-16 text-xl font-semibold text-slate-300">Sign Up</div>

      <div
        className={`absolute left-11 top-28 flex h-8 w-28 items-center rounded-lg border bg-white px-2 text-[10px] text-slate-600 transition-colors duration-300 ${
          emailActive ? "border-brand-400 ring-2 ring-brand-100" : "border-slate-200"
        }`}
      >
        <span>{EMAIL.slice(0, emailLen)}</span>
        {emailActive && emailLen < EMAIL.length ? (
          <span className="ml-px inline-block h-3 w-px animate-pulse bg-brand-500" />
        ) : null}
      </div>
      <div
        className={`absolute left-11 top-[152px] flex h-8 w-28 items-center rounded-lg border bg-white px-2 text-[10px] tracking-widest text-slate-600 transition-colors duration-300 ${
          passwordActive ? "border-brand-400 ring-2 ring-brand-100" : "border-slate-200"
        }`}
      >
        <span>{PASSWORD.slice(0, passwordLen)}</span>
        {passwordActive && passwordLen < PASSWORD.length ? (
          <span className="ml-px inline-block h-3 w-px animate-pulse bg-brand-500" />
        ) : null}
      </div>

      <AnimatePresence>
        {showDeviceCard ? (
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="absolute right-2 top-24 w-44 rounded-xl border border-slate-200 bg-white p-3 shadow-lg"
          >
            <div className="flex items-center gap-1.5 text-xs font-semibold text-ink-950">
              <ShieldCheck className="h-3.5 w-3.5 text-brand-600" />
              Device ID
            </div>
            <div className="mt-1.5 flex items-center gap-1">
              <p className="truncate font-mono text-[9px] text-ink-500">a2cd45f-120d5c-352d07e5</p>
              <Copy className="h-2.5 w-2.5 shrink-0 text-brand-400" />
            </div>
            <div className="mt-2 border-t border-slate-100 pt-2">
              <p className="text-[10px] text-ink-500">Same device used by</p>
              <p className="text-sm font-bold text-danger-600">6 accounts</p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {showWarningCard ? (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="absolute bottom-6 right-6 flex w-44 flex-col gap-1.5 rounded-xl border border-slate-200 bg-white p-2.5 shadow-lg"
          >
            <span className="inline-flex items-center gap-1 rounded bg-danger-50 px-1.5 py-1 text-[10px] font-medium text-danger-700">
              <TriangleAlert className="h-2.5 w-2.5 shrink-0" /> App cloner running
            </span>
            <span className="inline-flex items-center gap-1 rounded bg-danger-50 px-1.5 py-1 text-[10px] font-medium text-danger-700">
              <TriangleAlert className="h-2.5 w-2.5 shrink-0" /> Fake-user signals
            </span>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
