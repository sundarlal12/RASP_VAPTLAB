"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/Button";

const STORAGE_KEY = "securelint-cookie-consent";

interface Consent {
  functional: boolean;
  analytics: boolean;
  performance: boolean;
  advertisement: boolean;
}

const defaultConsent: Consent = {
  functional: false,
  analytics: false,
  performance: false,
  advertisement: false,
};

const allAcceptedConsent: Consent = {
  functional: true,
  analytics: true,
  performance: true,
  advertisement: true,
};

const categories: { key: keyof Consent; label: string; description: string }[] = [
  {
    key: "functional",
    label: "Functional",
    description:
      "Functional cookies help perform certain functionalities like sharing the content of the website on social media platforms, collecting feedback, and other third-party features.",
  },
  {
    key: "analytics",
    label: "Analytics",
    description:
      "Analytical cookies are used to understand how visitors interact with the website. These cookies help provide information on metrics such as the number of visitors, bounce rate, traffic source, etc.",
  },
  {
    key: "performance",
    label: "Performance",
    description:
      "Performance cookies are used to understand and analyse the key performance indexes of the website which helps in delivering a better user experience for the visitors.",
  },
  {
    key: "advertisement",
    label: "Advertisement",
    description:
      "Advertisement cookies are used to provide visitors with customised advertisements based on the pages you visited previously and to analyse the effectiveness of the ad campaigns.",
  },
];

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [customizing, setCustomizing] = useState(false);
  const [consent, setConsent] = useState<Consent>(defaultConsent);

  useEffect(() => {
    // One-time check of a browser-only API on mount to decide initial
    // visibility — not a fit for useSyncExternalStore since later updates
    // come from user clicks (Accept/Reject/Save), not external store change
    // notifications, and localStorage has no same-tab "storage" event to
    // subscribe to anyway.
    const stored = window.localStorage.getItem(STORAGE_KEY);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!stored) setVisible(true);
  }, []);

  function persist(value: Consent) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...value, timestamp: Date.now() }));
    setVisible(false);
    setCustomizing(false);
  }

  if (!visible) return null;

  return (
    <>
      <div
        role="dialog"
        aria-label="Cookie consent"
        className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl sm:mx-0 sm:left-4 sm:right-auto"
      >
        <h2 className="font-display text-lg font-bold text-ink-950">We value your privacy</h2>
        <p className="mt-2 text-sm leading-relaxed text-ink-500">
          We use cookies to enhance your browsing experience and analyse our traffic. By clicking
          &ldquo;Accept All&rdquo;, you consent to our use of cookies. See our{" "}
          <a href="/legal/cookie-policy/" className="font-medium text-brand-700 underline underline-offset-2">
            Cookie Policy
          </a>{" "}
          for details.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setCustomizing(true)}
            className="rounded-lg border border-brand-600 px-4 py-2 text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-50"
          >
            Customise
          </button>
          <button
            type="button"
            onClick={() => persist(defaultConsent)}
            className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-ink-700 transition-colors hover:border-slate-300"
          >
            Reject All
          </button>
          <Button onClick={() => persist(allAcceptedConsent)} className="px-4 py-2 text-sm">
            Accept All
          </Button>
        </div>
      </div>

      {customizing ? (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-950/50 p-4">
          <div className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <h2 className="font-display text-lg font-bold text-ink-950">Customise Consent Preferences</h2>
              <button
                type="button"
                onClick={() => setCustomizing(false)}
                aria-label="Close"
                className="text-ink-500 hover:text-ink-900"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="divide-y divide-slate-100">
              <div className="flex items-start justify-between gap-4 py-4">
                <div>
                  <p className="text-sm font-semibold text-ink-950">Necessary</p>
                  <p className="mt-1 text-xs leading-relaxed text-ink-500">
                    Necessary cookies are required to enable the basic features of this site, such as
                    providing secure log-in or adjusting your consent preferences. These cookies do not
                    store any personally identifiable data.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked
                  disabled
                  aria-label="Necessary cookies (always active)"
                  className="mt-1 h-4 w-4 shrink-0 accent-slate-300"
                />
              </div>

              {categories.map((category) => (
                <div key={category.key} className="flex items-start justify-between gap-4 py-4">
                  <div>
                    <p className="text-sm font-semibold text-ink-950">{category.label}</p>
                    <p className="mt-1 text-xs leading-relaxed text-ink-500">{category.description}</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={consent[category.key]}
                    onChange={(event) =>
                      setConsent((current) => ({ ...current, [category.key]: event.target.checked }))
                    }
                    aria-label={`${category.label} cookies`}
                    className="mt-1 h-4 w-4 shrink-0 accent-brand-600"
                  />
                </div>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap justify-end gap-3 border-t border-slate-100 pt-4">
              <button
                type="button"
                onClick={() => persist(defaultConsent)}
                className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-ink-700 transition-colors hover:border-slate-300"
              >
                Reject All
              </button>
              <button
                type="button"
                onClick={() => persist(consent)}
                className="rounded-lg border border-brand-600 px-4 py-2 text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-50"
              >
                Save My Preferences
              </button>
              <Button onClick={() => persist(allAcceptedConsent)} className="px-4 py-2 text-sm">
                Accept All
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
