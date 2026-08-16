"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { FormField } from "@/components/forms/FormField";
import { FormError } from "@/components/forms/FormError";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);

    // Honeypot: real users never fill this hidden field.
    if (formData.get("company_website")) {
      setStatus("success");
      return;
    }

    const payload = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      company: formData.get("company"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
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
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 px-6 py-10 text-center">
        <CheckCircle2 className="h-8 w-8 text-emerald-600" />
        <p className="font-display text-lg font-bold text-ink-950">Message sent</p>
        <p className="text-sm text-ink-500">We&apos;ll get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="First name" id="firstName" required autoComplete="given-name" />
        <FormField label="Last name" id="lastName" required autoComplete="family-name" />
      </div>
      <FormField label="Work email" id="email" type="email" required autoComplete="email" />
      <FormField label="Company" id="company" required autoComplete="organization" />
      <FormField
        label="What are you looking to protect?"
        id="message"
        textarea
        required
        placeholder="Tell us a bit about your app and what you're evaluating."
      />

      {status === "error" ? (
        <FormError message="Something went wrong sending your message. Please try again or email us directly." />
      ) : null}

      <Button type="submit" disabled={status === "submitting"} className="self-start">
        {status === "submitting" ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
