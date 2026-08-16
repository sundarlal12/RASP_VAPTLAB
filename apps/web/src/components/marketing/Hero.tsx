"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white pb-20 pt-16 sm:pt-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 flex justify-center"
      >
        <div className="h-[480px] w-[900px] rounded-full bg-gradient-to-br from-brand-200/40 to-accent-400/30 blur-3xl" />
      </div>

      <Container className="flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-4 py-1.5 text-sm font-medium text-brand-700 shadow-sm"
        >
          <ShieldCheck className="h-4 w-4" />
          Runtime App Self-Protection for Android
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="mt-8 max-w-3xl font-display text-4xl font-bold tracking-tight text-ink-950 sm:text-6xl"
        >
          Stop reverse engineering, tampering, and app-based fraud —
          <span className="text-brand-600"> at runtime.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-500"
        >
          AppShield is a native-C++ RASP SDK that detects root, hooking
          frameworks, and tampered builds; pins your API traffic; and keeps
          re-checking through the session — not just once at launch.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.24 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row"
        >
          <Button href="/contact/" className="px-7 py-3 text-base">
            Book a Demo
          </Button>
          <Button href="/contact/" variant="outline" className="px-7 py-3 text-base">
            Talk to Sales
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 text-sm text-ink-500"
        >
          Android SDK · Native C++ core · No public self-serve pricing — every deployment is scoped to your app
        </motion.p>
      </Container>
    </section>
  );
}
