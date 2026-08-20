import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "white" | "outline-dark";

const variants: Record<Variant, string> = {
  primary:
    "border border-brand-800 bg-brand-600 text-white hover:border-brand-500 hover:bg-brand-700 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.16),0_1px_2px_0_rgba(15,18,34,0.1)]",
  secondary: "bg-ink-950 text-white hover:bg-ink-900",
  outline: "border border-slate-200 text-ink-950 hover:border-brand-300 hover:bg-brand-50/60",
  ghost: "text-ink-700 hover:text-brand-700",
  white: "bg-white text-ink-950 hover:bg-slate-100 shadow-[0_1px_2px_0_rgba(15,18,34,0.1)]",
  "outline-dark": "border border-white/15 text-white hover:border-white/30 hover:bg-white/5",
};

const showsArrow: Record<Variant, boolean> = {
  primary: true,
  secondary: true,
  outline: true,
  ghost: false,
  white: true,
  "outline-dark": true,
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600";

interface CommonProps {
  variant?: Variant;
  className?: string;
  children: ReactNode;
}

type ButtonAsLink = CommonProps & {
  href: string;
  onClick?: () => void;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", className = "", children } = props;
  const classes = `${base} ${variants[variant]} ${className}`;
  const arrow = showsArrow[variant] ? <ArrowRight className="h-4 w-4" /> : null;

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes} onClick={props.onClick}>
        {children}
        {arrow}
      </Link>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- stripped so `rest` only carries native <button> attributes
  const { variant: _variant, className: _restClassName, children: _restChildren, href: _href, ...rest } =
    props as ButtonAsButton;
  return (
    <button className={classes} {...rest}>
      {children}
      {arrow}
    </button>
  );
}
