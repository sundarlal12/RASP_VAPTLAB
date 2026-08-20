"use client";

import { useEffect, useRef } from "react";

// Deliberately NOT rendered via dangerouslySetInnerHTML: the browser's HTML
// parser can normalize markup (attribute quoting, whitespace, etc.) in ways
// that don't byte-match the original string, which React's hydration
// diffing flags as a mismatch even though the source is identical on server
// and client. Rendering an empty div on both sides and injecting the markup
// only after mount sidesteps hydration reconciliation entirely — there's
// nothing for React to compare because both renders agree it's empty.
//
// React's dangerouslySetInnerHTML parses <script> tags but browsers never
// execute script elements inserted via innerHTML — so each one is manually
// re-created and re-inserted here, which does execute.
//
// React Strict Mode (dev only) intentionally double-invokes effects, which
// would otherwise inject and run each animation's <script> twice — two
// independent setTimeout chains fighting over the same element IDs, which
// looks like the animation running at double speed. Re-parsing a fresh copy
// of `html` into the container at the top of every effect run discards
// whichever script instance ran before, so its timers go on mutating
// detached, invisible nodes while only the latest script instance drives
// what's actually on screen.
export function RawHtmlAnimation({ html, className = "" }: { html: string; className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = html;

    const scripts = Array.from(container.querySelectorAll("script"));
    scripts.forEach((oldScript) => {
      const newScript = document.createElement("script");
      Array.from(oldScript.attributes).forEach((attr) => newScript.setAttribute(attr.name, attr.value));
      newScript.textContent = oldScript.textContent;
      oldScript.replaceWith(newScript);
    });
  }, [html]);

  return <div ref={containerRef} className={className} />;
}
