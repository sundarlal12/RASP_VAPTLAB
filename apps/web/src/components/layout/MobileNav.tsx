"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { featureMenu, solutionsMenu, primaryNav } from "@/components/layout/NavData";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
        className="flex h-10 w-10 items-center justify-center rounded-full text-ink-900"
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {open ? (
        <div className="fixed inset-x-0 top-[65px] bottom-0 z-40 overflow-y-auto bg-white px-6 py-6">
          <nav className="flex flex-col gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-ink-500">
                Features
              </p>
              <ul className="mt-2 flex flex-col gap-1">
                {featureMenu.groups.flatMap((group) => group.items).map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm text-ink-900 hover:bg-brand-50"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-[linear-gradient(135deg,#eff4ff,#d1e0ff)] text-brand-600">
                        <item.icon className="h-4 w-4" />
                      </span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-ink-500">
                Solutions
              </p>
              <ul className="mt-2 flex flex-col gap-1">
                {[...solutionsMenu.industries.items, ...solutionsMenu.useCases.items].map(
                  (item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm text-ink-900 hover:bg-brand-50"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-[linear-gradient(135deg,#eff4ff,#d1e0ff)] text-brand-600">
                          <item.icon className="h-4 w-4" />
                        </span>
                        {item.label}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div className="flex flex-col gap-1 border-t border-slate-100 pt-4">
              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-2 text-sm font-medium text-ink-900 hover:bg-brand-50"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact/"
                onClick={() => setOpen(false)}
                className="block rounded-lg px-2 py-2 text-sm font-medium text-ink-900 hover:bg-brand-50"
              >
                Contact
              </Link>
            </div>

            <Button href="/contact/" className="w-full" onClick={() => setOpen(false)}>
              Book a Demo
            </Button>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
