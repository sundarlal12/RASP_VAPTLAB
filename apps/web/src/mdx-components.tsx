import type { MDXComponents } from "mdx/types";
import type { ReactNode } from "react";
import Link from "next/link";
import { slugify } from "@/lib/slugify";

function textContent(node: ReactNode): string {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textContent).join("");
  if (typeof node === "object" && "props" in node) {
    return textContent((node as { props: { children?: ReactNode } }).props.children);
  }
  return "";
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <h1 className="font-display text-3xl font-bold text-ink-950" {...props} />
    ),
    h2: ({ children, ...props }) => (
      <h2
        id={slugify(textContent(children))}
        className="mt-10 scroll-mt-24 font-display text-xl font-bold text-ink-950"
        {...props}
      >
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3
        id={slugify(textContent(children))}
        className="mt-8 scroll-mt-24 font-display text-lg font-bold text-ink-950"
        {...props}
      >
        {children}
      </h3>
    ),
    p: (props) => <p className="leading-relaxed text-ink-700" {...props} />,
    ul: (props) => (
      <ul className="list-disc space-y-2 pl-6 text-ink-700" {...props} />
    ),
    ol: (props) => (
      <ol className="list-decimal space-y-2 pl-6 text-ink-700" {...props} />
    ),
    a: ({ href = "", ...props }) => (
      <Link
        href={href}
        className="font-medium text-brand-700 underline underline-offset-2 hover:text-brand-800"
        {...props}
      />
    ),
    code: (props) => (
      <code
        className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[0.85em] text-ink-900"
        {...props}
      />
    ),
    pre: (props) => (
      <pre
        className="overflow-x-auto rounded-xl bg-ink-950 px-5 py-4 text-sm text-slate-100 [&_code]:bg-transparent [&_code]:px-0 [&_code]:py-0 [&_code]:text-inherit"
        {...props}
      />
    ),
    ...components,
  };
}
