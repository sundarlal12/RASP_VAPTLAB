"use client";

import { useEffect, useRef, useState } from "react";

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
// The animations themselves are hand-built at a fixed pixel canvas (~672px
// wide, with absolutely-positioned children measured against that width) —
// they can't reflow like normal responsive markup. Instead of fighting that,
// the outer wrapper measures its own available width and the content's
// natural (unconstrained) width, then scales the whole thing down with a
// CSS transform so it fits any viewport while keeping every internal pixel
// relationship intact.
export function RawHtmlAnimation({ html, className = "" }: { html: string; className?: string }) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [scaledHeight, setScaledHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    const inner = innerRef.current;
    if (!inner) return;

    inner.innerHTML = html;

    const scripts = Array.from(inner.querySelectorAll("script"));
    scripts.forEach((oldScript) => {
      const newScript = document.createElement("script");
      Array.from(oldScript.attributes).forEach((attr) => newScript.setAttribute(attr.name, attr.value));
      newScript.textContent = oldScript.textContent;
      oldScript.replaceWith(newScript);
    });
  }, [html]);

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    function measure() {
      const naturalWidth = inner!.scrollWidth;
      const naturalHeight = inner!.scrollHeight;
      if (naturalWidth === 0) return;
      const nextScale = Math.min(1, outer!.clientWidth / naturalWidth);
      setScale(nextScale);
      setScaledHeight(naturalHeight * nextScale);
    }

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(outer);
    observer.observe(inner);
    return () => observer.disconnect();
  }, [html]);

  return (
    <div ref={outerRef} className={className} style={{ height: scaledHeight }}>
      <div
        ref={innerRef}
        style={{ width: "max-content", transform: `scale(${scale})`, transformOrigin: "top left" }}
      />
    </div>
  );
}
