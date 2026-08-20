"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const eventPool = [
  { time: "9:32", score: 85, tier: "high", tags: ["Rooted", "VPN"] },
  { time: "9:30", score: 22, tier: "low", tags: ["VPN"] },
  { time: "9:18", score: 91, tier: "high", tags: ["Emulator"] },
  { time: "8:07", score: 45, tier: "medium", tags: [] as string[] },
  { time: "7:54", score: 63, tier: "medium", tags: ["Hooked"] },
  { time: "7:41", score: 12, tier: "low", tags: [] as string[] },
] as const;

const tierClasses = {
  high: "bg-danger-50 text-danger-700",
  medium: "bg-warning-50 text-warning-700",
  low: "bg-success-50 text-success-700",
};

const VISIBLE = 4;

export function SessionMonitorDemo() {
  const nextIndex = useRef(VISIBLE);
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
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4">
      <ul className="relative flex flex-col gap-4 overflow-hidden border-l border-slate-200 pl-4">
        <AnimatePresence initial={false} mode="popLayout">
          {events.map((event) => (
            <motion.li
              key={event.key}
              layout
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative flex flex-wrap items-center gap-2 text-xs"
            >
              <span className="absolute -left-[18.5px] top-1 h-2 w-2 rounded-full bg-brand-500" />
              <span className="w-10 shrink-0 font-mono text-ink-500">{event.time}</span>
              <span className="font-bold text-ink-950">{event.score}</span>
              <span className={`rounded px-1.5 py-0.5 font-semibold uppercase ${tierClasses[event.tier]}`}>
                {event.tier}
              </span>
              {event.tags.map((tag) => (
                <span key={tag} className="rounded border border-slate-200 px-1.5 py-0.5 text-ink-500">
                  {tag}
                </span>
              ))}
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}
