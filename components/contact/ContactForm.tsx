"use client";

import { useState, type FormEvent } from "react";
import { cn } from "@/lib/utils";

const companySizes = ["1–10", "11–50", "51–250", "250+"];

const priorities = [
  "Satış ve pazarlama",
  "Süreçler",
  "Yönetişim ve ölçüm",
  "Emin değilim",
];

const budgetRanges = [
  "Henüz bilmiyorum",
  "100 bin TL altı",
  "100–250 bin TL",
  "250–500 bin TL",
  "500 bin TL üzeri",
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
      <label htmlFor={htmlFor} className="text-base font-medium text-dark-ink">
        {label}
      </label>
      {children}
    </div>
  );
}

const inputClasses =
  "min-h-12 w-full rounded-lg border border-dark-line bg-dark-deep px-4 py-3 text-base text-dark-ink transition-colors placeholder:text-dark-mute focus:border-peach focus:outline-2 focus:outline-offset-2 focus:outline-peach";

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
      companySize: String(data.get("companySize") ?? ""),
      priority: String(data.get("priority") ?? ""),
      budget: String(data.get("budget") ?? ""),
      message: String(data.get("message") ?? "").trim(),
    };

    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email);
    if (!payload.name || !emailValid || !payload.priority || !payload.message) {
      setStatus("error");
      setErrorMessage("Lütfen zorunlu alanları doldurun ve geçerli bir e-posta girin.");
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
        throw new Error(body?.error ?? "Bir sorun oluştu. Lütfen tekrar deneyin.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Bir sorun oluştu.");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-2xl bg-peach p-8 text-ink">
        <p className="font-display text-2xl font-medium">Teşekkürler, mesajınız bize ulaştı.</p>
        <p className="mt-2 text-base">Her mesajı kendimiz okuyoruz; size e-postayla döneceğiz.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <Field label="Ad soyad" htmlFor="name">
          <input id="name" name="name" type="text" required autoComplete="name" className={inputClasses} placeholder="Adınız" />
        </Field>
        <Field label="E-posta" htmlFor="email">
          <input id="email" name="email" type="email" required autoComplete="email" className={inputClasses} placeholder="siz@sirketiniz.com" />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <Field label="Şirket" htmlFor="company">
          <input id="company" name="company" type="text" autoComplete="organization" className={inputClasses} placeholder="Şirket (isteğe bağlı)" />
        </Field>
        <Field label="Çalışan sayısı" htmlFor="companySize">
          <select id="companySize" name="companySize" defaultValue="" className={cn(inputClasses, "appearance-none")}>
            <option value="">Seçin (isteğe bağlı)</option>
            {companySizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Önceliğiniz" htmlFor="priority">
        <select id="priority" name="priority" required defaultValue="" className={cn(inputClasses, "appearance-none")}>
          <option value="" disabled>
            Birini seçin
          </option>
          {priorities.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Mesaj" htmlFor="message">
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={cn(inputClasses, "resize-none")}
          placeholder="Sizi en çok yoran üç iş hangisi?"
        />
      </Field>

      <Field label="Bütçe (isteğe bağlı)" htmlFor="budget">
        <select id="budget" name="budget" defaultValue="" className={cn(inputClasses, "appearance-none")}>
          <option value="">Seçin</option>
          {budgetRanges.map((range) => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </select>
      </Field>

      {status === "error" && errorMessage && (
        <p role="alert" className="text-base text-error-dark">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex min-h-12 w-fit items-center rounded-full bg-accent px-8 text-base font-medium text-ink transition-colors hover:bg-accent-hover disabled:opacity-60"
      >
        {status === "submitting" ? "Gönderiliyor…" : "Gönder"}
      </button>
    </form>
  );
}
