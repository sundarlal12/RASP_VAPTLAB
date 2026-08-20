"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ParticleField } from "@/components/ui/ParticleField";
import { LiveAttackFeed } from "@/components/marketing/LiveAttackFeed";

const tabs = [
  {
    id: "integration",
    label: "Seamless Integration",
    title: "Ship protected builds, not more work.",
    body: "Upload an already-signed release APK or AAB and get a shielded build back — no source changes, no SDK integration required for most teams.",
    checklist: [
      "No source code changes required",
      "Works with your existing release pipeline",
      "Shielded build back in minutes",
    ],
  },
  {
    id: "runtime",
    label: "Runtime Protection",
    title: "Multi-layered app protection.",
    body: "Native-C++ RASP policies detect, decide, and respond the instant an attack signature appears — on-device, in milliseconds.",
    checklist: [
      "Blocks tampering, hooking, and MITM",
      "Detects rooted, jailbroken, and emulated devices",
      "Zero-latency response, no performance tax",
    ],
  },
  {
    id: "intelligence",
    label: "Threat Intelligence",
    title: "See every risk signal, unified.",
    body: "Every detection module feeds one AI-tuned runtime risk score, with a live dashboard of blocked sessions your team can act on.",
    checklist: [
      "Unified runtime risk score",
      "Live dashboard of blocked sessions",
      "Exportable detection events",
    ],
  },
];

const TAB_DURATION = 6000;

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % tabs.length);
    }, TAB_DURATION);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const tab = tabs[activeIndex];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white pb-20 pt-16 sm:pt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#0ba37f0a_1px,transparent_1px),linear-gradient(to_bottom,#0ba37f0a_1px,transparent_1px)] bg-[size:44px_44px]"
      />
      <ParticleField className="pointer-events-none absolute inset-0 h-full w-full" />

      <Container className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
        <div className="flex flex-col items-start text-left">
          <div className="flex w-full flex-col gap-3">
            <div className="flex flex-wrap gap-2">
              {tabs.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={`inline-flex items-center rounded-lg border px-3 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.1em] transition-colors ${
                    i === activeIndex
                      ? "border-brand-200 bg-white text-brand-700 shadow-sm"
                      : "border-slate-200 bg-white/60 text-ink-500 hover:text-ink-700"
                  }`}
                >
                  {i === activeIndex ? (
                    <span className="mr-1.5 inline-block h-1 w-1 rounded-full bg-brand-600" />
                  ) : null}
                  {t.label}
                </button>
              ))}
            </div>
            <div className="h-px w-full bg-slate-200">
              <div key={activeIndex} className="h-px bg-brand-500 [animation:tabfill_6s_linear]" />
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="mt-8 flex flex-col items-start gap-5"
            >
              <h1 className="font-display text-4xl font-bold tracking-tight text-ink-950 sm:text-5xl lg:text-6xl">
                {tab.title}
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-ink-500">{tab.body}</p>
              <ul className="flex flex-col gap-2.5">
                {tab.checklist.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-ink-700">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact/" className="px-7 py-3 text-base">
              Book a Demo
            </Button>
            <Button href="/contact/" variant="outline" className="px-7 py-3 text-base">
              Talk to Sales
            </Button>
          </div>

          <p className="mt-6 text-sm text-ink-500">
            Android SDK · Native C++ core · No public self-serve pricing
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <LiveAttackFeed />
        </div>
      </Container>
    </section>
  );
}
