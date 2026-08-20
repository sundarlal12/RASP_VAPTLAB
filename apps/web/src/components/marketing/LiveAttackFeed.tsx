"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ShieldCheck,
  ScanEye,
  Terminal,
  Fingerprint,
  Lock,
  Camera,
  Smartphone,
  Gauge,
} from "lucide-react";

const eventPool = [
  { icon: ScanEye, label: "Frida hook attempt", meta: "Banking app · Android · v3.2.1", severity: "high" as const },
  { icon: Terminal, label: "Debugger attached", meta: "Payments app · iOS · v2.14.0", severity: "high" as const },
  { icon: Fingerprint, label: "Root device detected", meta: "Retail app · Android · v4.8.2", severity: "medium" as const },
  { icon: Lock, label: "SSL pin bypass attempt", meta: "Banking app · Android · v3.2.1", severity: "high" as const },
  { icon: ScanEye, label: "Emulator session flagged", meta: "Gaming app · Android · v1.9.0", severity: "medium" as const },
  { icon: Camera, label: "Screen recording blocked", meta: "Payments app · iOS · v2.14.0", severity: "medium" as const },
] as const;

const severityBadge = {
  high: "border-danger-500/40 bg-danger-500/10 text-danger-500",
  medium: "border-warning-500/40 bg-warning-500/10 text-warning-500",
};

const severityIcon = {
  high: "border-danger-500/30 bg-danger-500/10 text-danger-500",
  medium: "border-warning-500/30 bg-warning-500/10 text-warning-500",
};

const VISIBLE = 4;
const START_BLOCKED = 5178;

function StatTile({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Smartphone;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5 p-4">
      <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-slate-500">
        <Icon className="h-3 w-3" />
        {label}
      </span>
      {children}
    </div>
  );
}

export function LiveAttackFeed() {
  const nextIndex = useRef(VISIBLE);
  const blocked = useRef(START_BLOCKED);
  const [totalBlocked, setTotalBlocked] = useState(START_BLOCKED);
  const [events, setEvents] = useState(() =>
    eventPool.slice(0, VISIBLE).map((event, key) => ({ ...event, key })),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setEvents((current) => {
        const event = eventPool[nextIndex.current % eventPool.length];
        const withKey = { ...event, key: nextIndex.current };
        nextIndex.current += 1;
        return [withKey, ...current.slice(0, VISIBLE - 1)];
      });
      blocked.current += 1;
      setTotalBlocked(blocked.current);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-ink-950 text-left shadow-[0_30px_60px_-20px_rgba(13,14,20,0.55)]">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
        <div className="flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-300">
          <ShieldCheck className="h-4 w-4 text-brand-400" />
          Security dashboard
        </div>
        <span className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-success-500">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success-500 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success-500" />
          </span>
          Live
        </span>
      </div>

      <div className="grid grid-cols-2 divide-x divide-y divide-white/[0.06] border-b border-white/10">
        <StatTile icon={Smartphone} label="Apps protected">
          <span className="text-xl font-semibold text-white">
            4<span className="text-sm font-normal text-slate-500"> / 6</span>
          </span>
        </StatTile>
        <StatTile icon={ShieldCheck} label="Attacks blocked">
          <span className="text-xl font-semibold tabular-nums text-brand-400">
            {totalBlocked.toLocaleString()}
          </span>
        </StatTile>
        <StatTile icon={Fingerprint} label="Compromised devices">
          <span className="text-xl font-semibold text-white">149</span>
        </StatTile>
        <StatTile icon={Gauge} label="Risk level">
          <span className="text-xl font-semibold text-danger-500">High</span>
        </StatTile>
      </div>

      <p className="px-5 pb-1 pt-4 font-mono text-[10px] uppercase tracking-wider text-slate-500">
        Recent security events
      </p>

      <ul className="relative flex flex-col divide-y divide-white/5 overflow-hidden pb-1">
        <AnimatePresence initial={false} mode="popLayout">
          {events.map((event) => (
            <motion.li
              key={event.key}
              layout
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex items-center gap-3 px-5 py-3"
            >
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border ${severityIcon[event.severity]}`}
              >
                <event.icon className="h-3.5 w-3.5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm text-white">{event.label}</p>
                <p className="truncate font-mono text-[10px] uppercase tracking-wider text-slate-500">
                  {event.meta}
                </p>
              </div>
              <span
                className={`shrink-0 rounded border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${severityBadge[event.severity]}`}
              >
                {event.severity}
              </span>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}
