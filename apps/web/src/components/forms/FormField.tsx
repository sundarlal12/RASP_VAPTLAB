import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

const fieldClasses =
  "w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-ink-950 placeholder:text-ink-500/60 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20";

export function FormField({
  label,
  id,
  textarea,
  ...rest
}: {
  label: string;
  id: string;
  textarea?: boolean;
} & (InputHTMLAttributes<HTMLInputElement> & TextareaHTMLAttributes<HTMLTextAreaElement>)) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-ink-900">
        {label}
      </label>
      {textarea ? (
        <textarea id={id} name={id} rows={5} className={fieldClasses} {...rest} />
      ) : (
        <input id={id} name={id} className={fieldClasses} {...rest} />
      )}
    </div>
  );
}
