"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { Link2, Check } from "lucide-react";
import { slugify } from "@/lib/slugify";
import { LinkedInIcon, XIcon, FacebookIcon } from "@/components/ui/SocialIcons";

function subscribeNoop() {
  return () => {};
}

function getLocationSnapshot() {
  return window.location.href;
}

function getServerLocationSnapshot() {
  return "";
}

export function ArticleSidebar({ toc, title }: { toc: string[]; title: string }) {
  const [activeId, setActiveId] = useState(() => slugify(toc[0] ?? ""));
  const [copied, setCopied] = useState(false);
  // Server has no window/location, so the snapshot is "" there and filled
  // in on the client after mount — avoids a hydration mismatch on the
  // share links without a setState-in-effect anti-pattern.
  const shareUrl = useSyncExternalStore(subscribeNoop, getLocationSnapshot, getServerLocationSnapshot);

  useEffect(() => {
    const ids = toc.map((heading) => slugify(heading));
    const elements = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-96px 0px -70% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [toc]);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API unavailable — silently no-op, the button just won't confirm.
    }
  }

  const shareLinks = [
    {
      label: "Share on LinkedIn",
      icon: LinkedInIcon,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    },
    {
      label: "Share on X",
      icon: XIcon,
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`,
    },
    {
      label: "Share on Facebook",
      icon: FacebookIcon,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    },
  ];

  return (
    <aside className="sticky top-20 flex flex-col gap-8">
      {toc.length > 0 ? (
        <div>
          <p className="mb-3 font-display text-base font-semibold text-ink-950">Content</p>
          <nav className="flex flex-col gap-1">
            {toc.map((heading) => {
              const id = slugify(heading);
              const active = id === activeId;
              return (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`border-l-2 py-1 pl-3 text-sm transition-colors ${
                    active
                      ? "border-brand-600 font-medium text-brand-700"
                      : "border-transparent text-ink-500 hover:text-ink-700"
                  }`}
                >
                  {heading}
                </a>
              );
            })}
          </nav>
        </div>
      ) : null}

      <div>
        <p className="mb-3 text-sm text-ink-700">Share this article</p>
        <div className="flex gap-2">
          {shareLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-ink-500 shadow-sm transition-colors hover:border-brand-300 hover:text-brand-700"
            >
              <link.icon className="h-4 w-4" />
            </a>
          ))}
          <button
            type="button"
            onClick={copyLink}
            aria-label="Copy link"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-ink-500 shadow-sm transition-colors hover:border-brand-300 hover:text-brand-700"
          >
            {copied ? <Check className="h-4 w-4 text-success-500" /> : <Link2 className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </aside>
  );
}
