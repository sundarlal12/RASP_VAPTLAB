"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export interface MegaMenuGroup {
  title: string;
  items: { label: string; href: string; icon?: ReactNode }[];
}

export function MegaMenu({
  label,
  hubHref,
  hubLabel,
  groups,
}: {
  label: string;
  hubHref: string;
  hubLabel: string;
  groups: MegaMenuGroup[];
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="flex items-center gap-1 text-sm font-medium text-ink-700 transition-colors hover:text-brand-700"
      >
        {label}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open ? (
        <div className="absolute left-1/2 top-full z-40 mt-4 w-screen max-w-2xl -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/10">
          <div
            className={`grid gap-8 ${groups.length > 1 ? "grid-cols-2 divide-x divide-slate-100" : "grid-cols-1"}`}
          >
            {groups.map((group) => (
              <div key={group.title} className={groups.length > 1 ? "pl-8 first:pl-0" : ""}>
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-ink-500">
                  {group.title}
                </p>
                <ul className="mt-3 flex flex-col gap-1">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="group/item flex items-center gap-3 rounded-lg px-2 py-2 text-sm text-ink-900 hover:bg-brand-50 hover:text-brand-700"
                      >
                        {item.icon ? (
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-[linear-gradient(135deg,#eff4ff,#d1e0ff)] text-brand-600">
                            {item.icon}
                          </span>
                        ) : null}
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-6 border-t border-slate-100 pt-4">
            <Link
              href={hubHref}
              onClick={() => setOpen(false)}
              className="text-sm font-semibold text-brand-700 hover:text-brand-800"
            >
              {hubLabel} →
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
