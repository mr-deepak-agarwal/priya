"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const CONCERNS = [
  "General Ayurveda consultation",
  "Panchakarma & detox",
  "Women's health & fertility",
  "Something else",
];

export default function ConsultationForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const email = String(data.get("email") || "").trim();

    const nextErrors: Record<string, string> = {};
    if (!name) nextErrors.name = "Please share your name.";
    if (!phone) nextErrors.phone = "Please share a phone number.";
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "That email doesn't look right.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");

    // NOTE for Dr. Priya / whoever wires this up:
    // This currently simulates a submission. Connect it to a real endpoint
    // (e.g. an email service like Resend, or a serverless function) before
    // going live — see the README for notes on where this hook goes.
    await new Promise((r) => setTimeout(r, 700));

    setStatus("success");
    form.reset();
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-sand-line bg-ivory-deep px-7 py-9 text-center sm:px-10 sm:py-12"
      >
        <p className="eyebrow mb-3">Request received</p>
        <h3 className="font-display text-2xl text-moss sm:text-[1.75rem]">
          Thank you — we&apos;ll be in touch soon.
        </h3>
        <p className="mx-auto mt-3 max-w-sm text-[0.95rem] leading-relaxed text-moss-soft">
          Dr. Priya&apos;s clinic team typically responds within one business
          day to confirm your appointment time.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-sage-deep underline decoration-sand-line decoration-2 underline-offset-4 transition hover:text-moss"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor="name" error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            className={inputClasses(!!errors.name)}
          />
        </Field>
        <Field label="Phone number" htmlFor="phone" error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91 00000 00000"
            className={inputClasses(!!errors.phone)}
          />
        </Field>
      </div>

      <Field label="Email (optional)" htmlFor="email" error={errors.email}>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          className={inputClasses(!!errors.email)}
        />
      </Field>

      <fieldset>
        <legend className="mb-2 block text-sm font-medium text-moss">
          What would you like to consult about?
        </legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {CONCERNS.map((concern) => (
            <label
              key={concern}
              className="flex cursor-pointer items-center gap-2.5 rounded-xl border border-sand-line bg-white/60 px-3.5 py-2.5 text-[0.9rem] text-moss-soft transition hover:border-sage has-[:checked]:border-sage has-[:checked]:bg-sage/10 has-[:checked]:text-moss"
            >
              <input
                type="radio"
                name="concern"
                value={concern}
                defaultChecked={concern === CONCERNS[0]}
                className="h-3.5 w-3.5 accent-[#5a6b52]"
              />
              {concern}
            </label>
          ))}
        </div>
      </fieldset>

      <Field
        label="Tell us a little about your concern (optional)"
        htmlFor="message"
      >
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Share anything that will help Dr. Priya prepare for your consultation."
          className={inputClasses(false) + " resize-none"}
        />
      </Field>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-moss px-7 py-3.5 text-sm font-medium tracking-wide text-ivory transition hover:bg-sage-deep disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting"
          ? "Sending request…"
          : "Request a consultation"}
      </button>
      <p className="text-xs text-moss-soft/80">
        We typically respond within one business day. For anything urgent,
        please call the clinic directly.
      </p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-sm font-medium text-moss"
      >
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-xs font-medium text-[#a15c4a]">{error}</p>
      )}
    </div>
  );
}

function inputClasses(hasError: boolean) {
  return [
    "w-full rounded-xl border bg-white/60 px-4 py-2.75 text-[0.95rem] text-moss placeholder:text-moss-soft/50",
    "transition focus:bg-white focus:outline-none",
    hasError ? "border-[#c98a73]" : "border-sand-line focus:border-sage",
  ].join(" ");
}
