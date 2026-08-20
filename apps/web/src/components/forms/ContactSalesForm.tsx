"use client";

import { useState, type FormEvent } from "react";
import { Building2, ChevronRight, CheckCircle2 } from "lucide-react";
import { FormError } from "@/components/forms/FormError";

const SALES_API_URL = "https://securelint-api.vercel.app/api/contact/sales";

const companySizes = ["1-49", "50-249", "250-999", "1000+"];
const functions = ["IT", "Security", "Engineering", "Management"];
const managementLevels = [
  { value: "C-Level", label: "C-Level" },
  { value: "VP", label: "VP-Level" },
  { value: "Director", label: "Director" },
  { value: "Manager", label: "Manager" },
];
const countries = [
  "India", "United States", "United Kingdom", "Canada", "Australia", "Singapore", "Germany",
  "France", "Japan", "South Korea", "Brazil", "South Africa", "Afghanistan", "Albania", "Algeria",
  "Andorra", "Angola", "Argentina", "Armenia", "Austria", "Azerbaijan", "Bahrain", "Bangladesh",
  "Belarus", "Belgium", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Bulgaria", "Cambodia",
  "Cameroon", "Chile", "China", "Colombia", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia",
  "Denmark", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Estonia", "Ethiopia",
  "Finland", "Georgia", "Ghana", "Greece", "Guatemala", "Honduras", "Hungary", "Iceland",
  "Indonesia", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Jordan", "Kazakhstan", "Kenya",
  "Kuwait", "Kyrgyzstan", "Latvia", "Lebanon", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
  "Malaysia", "Maldives", "Malta", "Mexico", "Moldova", "Mongolia", "Morocco", "Mozambique",
  "Myanmar", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Nigeria", "Norway", "Oman",
  "Pakistan", "Palestine", "Panama", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
  "Qatar", "Romania", "Russia", "Rwanda", "Saudi Arabia", "Senegal", "Serbia", "Slovakia",
  "Slovenia", "Somalia", "Spain", "Sri Lanka", "Sudan", "Sweden", "Switzerland", "Syria", "Taiwan",
  "Tanzania", "Thailand", "Tunisia", "Turkey", "Uganda", "Ukraine", "United Arab Emirates",
  "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe",
];

const inputClass =
  "w-full rounded-[14px] border border-slate-200 bg-white px-4 py-3.5 text-sm text-ink-950 shadow-sm outline-none transition-colors focus:border-brand-400 focus:ring-2 focus:ring-brand-100";
const labelClass = "mb-2 block text-sm font-semibold text-ink-950";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactSalesForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);

    if (formData.get("company_website")) {
      setStatus("success");
      return;
    }

    const payload = {
      work_email: formData.get("work_email"),
      first_name: formData.get("first_name"),
      last_name: formData.get("last_name"),
      phone: formData.get("phone"),
      company_name: formData.get("company_name"),
      company_size: formData.get("company_size"),
      function: formData.get("function"),
      management_level: formData.get("management_level"),
      country: formData.get("country"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch(SALES_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-[32px] border border-brand-100 bg-brand-50 px-6 py-16 text-center">
        <CheckCircle2 className="h-9 w-9 text-brand-600" />
        <p className="font-display text-xl font-bold text-ink-950">Request received</p>
        <p className="text-sm text-ink-500">Our sales team will follow up shortly.</p>
      </div>
    );
  }

  return (
    <div className="sticky top-24 rounded-[32px] border border-slate-200 bg-white/90 p-9 shadow-[0_20px_60px_-12px_rgba(15,23,42,0.1)]">
      <div className="mb-7">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-2 text-xs font-bold text-brand-700">
          <Building2 className="h-3.5 w-3.5" />
          Enterprise Contact Form
        </span>
        <h2 className="font-display text-3xl font-bold tracking-tight text-ink-950">Contact Sales</h2>
        <p className="mt-2 text-sm leading-relaxed text-ink-500">
          Tell us about your organization and app security requirements.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="company_website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="first_name" className={labelClass}>
              First name<span className="ml-0.5 text-danger-500">*</span>
            </label>
            <input id="first_name" name="first_name" required autoComplete="given-name" placeholder="John" className={inputClass} />
          </div>
          <div>
            <label htmlFor="last_name" className={labelClass}>
              Last name<span className="ml-0.5 text-danger-500">*</span>
            </label>
            <input id="last_name" name="last_name" required autoComplete="family-name" placeholder="Doe" className={inputClass} />
          </div>
        </div>

        <div>
          <label htmlFor="work_email" className={labelClass}>
            Work email<span className="ml-0.5 text-danger-500">*</span>
          </label>
          <input
            id="work_email"
            name="work_email"
            type="email"
            required
            autoComplete="email"
            placeholder="security@yourcompany.com"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone<span className="ml-0.5 text-danger-500">*</span>
          </label>
          <input id="phone" name="phone" required autoComplete="tel" placeholder="+1 555 000 0000" className={inputClass} />
        </div>

        <div>
          <label htmlFor="company_name" className={labelClass}>
            Company name<span className="ml-0.5 text-danger-500">*</span>
          </label>
          <input id="company_name" name="company_name" required autoComplete="organization" placeholder="Acme Inc." className={inputClass} />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="company_size" className={labelClass}>
              Company size<span className="ml-0.5 text-danger-500">*</span>
            </label>
            <select id="company_size" name="company_size" required defaultValue="" className={inputClass}>
              <option value="" disabled>
                Select
              </option>
              {companySizes.map((size) => (
                <option key={size} value={size}>
                  {size} employees
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="function" className={labelClass}>
              Function<span className="ml-0.5 text-danger-500">*</span>
            </label>
            <select id="function" name="function" required defaultValue="" className={inputClass}>
              <option value="" disabled>
                Select
              </option>
              {functions.map((fn) => (
                <option key={fn} value={fn}>
                  {fn}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="management_level" className={labelClass}>
              Management level<span className="ml-0.5 text-danger-500">*</span>
            </label>
            <select id="management_level" name="management_level" required defaultValue="" className={inputClass}>
              <option value="" disabled>
                Select
              </option>
              {managementLevels.map((level) => (
                <option key={level.value} value={level.value}>
                  {level.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="country" className={labelClass}>
              Country<span className="ml-0.5 text-danger-500">*</span>
            </label>
            <select id="country" name="country" required defaultValue="India" className={inputClass}>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className={labelClass}>
            How can we help?
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell us about your app, threat model, and integration timeline..."
            className={`${inputClass} min-h-[120px] resize-y`}
          />
        </div>

        {status === "error" ? (
          <FormError message="Something went wrong sending your request. Please try again or email us directly." />
        ) : null}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="mt-1 flex w-full items-center justify-center gap-2 rounded-2xl border border-brand-800 bg-brand-600 px-5 py-4 text-sm font-extrabold text-white shadow-[0_10px_30px_-8px_rgba(11,163,127,0.5)] transition-colors hover:bg-brand-700 disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Contact Sales"}
          <ChevronRight className="h-4 w-4" />
        </button>

        <div className="mt-2 flex flex-wrap gap-2">
          {["GDPR-ready", "MASVS-aligned", "Native C++ core"].map((badge) => (
            <span
              key={badge}
              className="rounded-full bg-brand-50 px-3.5 py-2 text-xs font-bold text-brand-700"
            >
              {badge}
            </span>
          ))}
        </div>

        <p className="mt-2 text-xs leading-relaxed text-ink-500">
          By submitting this form, you agree to our{" "}
          <a href="/legal/privacy-policy/" className="underline underline-offset-2 hover:text-brand-700">
            privacy policy
          </a>
          .
        </p>
      </form>
    </div>
  );
}
