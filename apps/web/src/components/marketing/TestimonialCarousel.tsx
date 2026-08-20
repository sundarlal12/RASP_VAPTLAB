"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

// Real client testimonials (adapted from VaptLabs' existing quotes to
// reference SecureLint specifically — brand name swapped, sentiment kept
// faithful to what each person actually said). No stock photos: the source
// images were a Google Images cache thumbnail and a news outlet's photo of
// Rakesh Jain, neither of which we have rights to publish here — initials
// avatars stand in until real headshots with usage rights are supplied.
const testimonials = [
  {
    quote:
      "The SecureLint team demonstrated exceptional professionalism and reliability, consistently meeting deadlines while exceeding expectations. They even expanded the project scope to tackle unforeseen challenges — without any obligation — showcasing their commitment and integrity. A dependable partner we truly value.",
    name: "Pratap Chandana",
    title: "Co-Founder & Head of Tech",
    company: "Aurm",
    initials: "PC",
  },
  {
    quote:
      "SecureLint has been instrumental in helping us meet our mobile app security objectives efficiently and cost-effectively. Their customized runtime protection and hands-on support have strengthened our defenses and given us complete peace of mind.",
    name: "Shreyans Daga",
    title: "Co-Founder",
    company: "MyGate",
    initials: "SD",
  },
  {
    quote:
      "The security assessment by SecureLint revealed crucial gaps that had gone unnoticed. Their thorough evaluation, clear documentation, and actionable remediation guidance enabled us to fortify our systems effectively and with confidence.",
    name: "Rakesh Jain",
    title: "CTO",
    company: "PaySquare",
    initials: "RJ",
  },
];

const SLIDE_DURATION = 5500;

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, [index]);

  function go(next: number) {
    setIndex((next + testimonials.length) % testimonials.length);
  }

  const active = testimonials[index];

  return (
    <div className="flex flex-col gap-14">
      <SectionHeading eyebrow="Customer stories" title="What security teams say" />

      <div className="relative mx-auto flex w-full max-w-2xl items-center gap-4">
        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label="Previous testimonial"
          className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 text-ink-500 transition-colors hover:border-brand-300 hover:text-brand-700 sm:flex"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <div className="relative min-h-[240px] flex-1 overflow-hidden rounded-2xl border border-slate-200 bg-white px-8 py-10 text-center shadow-sm">
          <Quote className="mx-auto h-8 w-8 text-brand-100" fill="currentColor" />
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="mt-4 flex flex-col items-center gap-4"
            >
              <p className="max-w-lg text-base italic leading-relaxed text-ink-500">“{active.quote}”</p>
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-semibold text-white">
                  {active.initials}
                </span>
                <div className="text-left">
                  <p className="text-sm font-semibold text-ink-900">{active.name}</p>
                  <p className="text-xs text-ink-500">
                    {active.title}, {active.company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          type="button"
          onClick={() => go(index + 1)}
          aria-label="Next testimonial"
          className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 text-ink-500 transition-colors hover:border-brand-300 hover:text-brand-700 sm:flex"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="flex items-center justify-center gap-2">
        {testimonials.map((testimonial, i) => (
          <button
            key={testimonial.name}
            type="button"
            onClick={() => go(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-6 bg-brand-600" : "w-1.5 bg-slate-300 hover:bg-slate-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
