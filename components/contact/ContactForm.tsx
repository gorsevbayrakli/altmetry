"use client";

import { useState, type FormEvent } from "react";
import { cn } from "@/lib/utils";

const projectTypes = [
  "Brand identity",
  "Website or product build",
  "Full rebrand + rebuild",
  "Consulting / positioning",
  "Ongoing retainer",
  "Other",
];

const budgetRanges = [
  "Under $10k",
  "$10k – $25k",
  "$25k – $75k",
  "$75k – $150k",
  "$150k+",
  "Not sure yet",
];

type Status = "idle" | "submitting" | "success" | "error";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="text-xs uppercase tracking-wide text-ink/50">
        {label}
      </label>
      {children}
    </div>
  );
}

const inputClasses =
  "w-full border-b border-ink/20 bg-transparent py-3 text-base text-ink outline-none transition-colors focus:border-accent placeholder:text-ink/30";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      company: String(data.get("company") ?? "").trim(),
      projectType: String(data.get("projectType") ?? ""),
      budget: String(data.get("budget") ?? ""),
      message: String(data.get("message") ?? "").trim(),
    };

    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email);
    if (!payload.name || !emailValid || !payload.projectType || !payload.budget || !payload.message) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields with a valid email.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8">
        <p className="font-display text-2xl font-medium tracking-tight text-ink">
          Thanks — we got it.
        </p>
        <p className="mt-2 text-sm text-ink/70">
          We read every inquiry personally and reply within two business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <Field label="Name" htmlFor="name">
          <input id="name" name="name" type="text" required className={inputClasses} placeholder="Your name" />
        </Field>
        <Field label="Email" htmlFor="email">
          <input id="email" name="email" type="email" required className={inputClasses} placeholder="you@company.com" />
        </Field>
      </div>

      <Field label="Company" htmlFor="company">
        <input id="company" name="company" type="text" className={inputClasses} placeholder="Company (optional)" />
      </Field>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <Field label="Project type" htmlFor="projectType">
          <select id="projectType" name="projectType" required defaultValue="" className={cn(inputClasses, "appearance-none")}>
            <option value="" disabled>
              Select one
            </option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Budget range" htmlFor="budget">
          <select id="budget" name="budget" required defaultValue="" className={cn(inputClasses, "appearance-none")}>
            <option value="" disabled>
              Select one
            </option>
            {budgetRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Message" htmlFor="message">
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={cn(inputClasses, "resize-none")}
          placeholder="Tell us about the project."
        />
      </Field>

      {status === "error" && errorMessage && (
        <p role="alert" className="text-sm text-accent">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-fit rounded-full bg-ink px-6 py-3 text-sm font-medium text-canvas transition-colors hover:bg-accent disabled:opacity-50"
      >
        {status === "submitting" ? "Sending…" : "Send inquiry"}
      </button>
    </form>
  );
}
