"use client";

import { useMemo, useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

const GENERIC_EMAIL_DOMAINS = new Set([
  "gmail.com",
  "googlemail.com",
  "yahoo.com",
  "yahoo.co.uk",
  "ymail.com",
  "hotmail.com",
  "outlook.com",
  "live.com",
  "msn.com",
  "aol.com",
  "icloud.com",
  "me.com",
  "mac.com",
  "proton.me",
  "protonmail.com",
  "mail.com",
  "zoho.com",
  "gmx.com",
]);

function isWorkEmail(email: string) {
  const trimmed = email.trim().toLowerCase();
  const parts = trimmed.split("@");

  if (parts.length !== 2) return false;

  const domain = parts[1];

  if (!domain || !domain.includes(".")) return false;
  if (GENERIC_EMAIL_DOMAINS.has(domain)) return false;

  return true;
}

export function ExecutiveBriefingForm() {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");

  const [form, setForm] = useState({
    fullName: "",
    workEmail: "",
    company: "",
    title: "",
    phone: "",
    aiStage: "Still exploring AI Initiatives",
    urgency: "This quarter",
    message: "",
    consent: true,
  });

  const canSubmit = useMemo(() => {
    return (
      form.fullName.trim().length >= 2 &&
      isWorkEmail(form.workEmail) &&
      form.company.trim().length >= 2 &&
      form.title.trim().length >= 2 &&
      state !== "submitting"
    );
  }, [form, state]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setEmailError("");

    if (!isWorkEmail(form.workEmail)) {
      setState("error");
      setEmailError(
        "Please use your work email address. Generic email providers are not allowed."
      );
      return;
    }

    setState("submitting");

    try {
      const res = await fetch("/api/briefing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data?.error || "Submission failed. Please try again.");
      }

      setState("success");
      setForm({
        fullName: "",
        workEmail: "",
        company: "",
        title: "",
        phone: "",
        aiStage: "Still exploring AI Initiatives",
        urgency: "This quarter",
        message: "",
        consent: true,
      });
    } catch (err) {
      setState("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  function updateField(name: string, value: string | boolean) {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "workEmail" && typeof value === "string") {
      if (!value.trim()) {
        setEmailError("");
      } else if (!isWorkEmail(value)) {
        setEmailError(
          "Please use your work email address. Generic email providers are not allowed."
        );
      } else {
        setEmailError("");
      }
    }
  }

  // ✅ TYPOGRAPHY: unchanged
  const sectionLabelLight =
    "text-2xl font-bold tracking-[-0.03em] leading-[1.02] text-brand-slate sm:text-[2rem]";
  const sectionMainHeading =
    "mt-5 text-[2.25rem] font-semibold tracking-[-0.04em] leading-[1.02] text-brand-slate sm:text-[2.9rem]";
  const subLabelLight =
    "text-[1.02rem] font-bold tracking-[-0.02em] leading-[1.08] text-brand-slate sm:text-[1.12rem]";

  const inputClass =
    "w-full rounded-xl border border-brand-border bg-white px-4 py-3 text-sm text-brand-slate outline-none transition focus:ring-2 focus:ring-brand-navy/20";

  const inputErrorClass =
    "w-full rounded-xl border border-rose-300 bg-white px-4 py-3 text-sm text-brand-slate outline-none transition focus:ring-2 focus:ring-rose-200";

  const selectClass =
    "w-full rounded-xl border border-brand-border bg-white px-4 py-3 text-sm text-brand-slate outline-none transition focus:ring-2 focus:ring-brand-navy/20";

  const primaryButtonClass = [
    "mt-2 inline-flex items-center justify-center rounded-xl px-6 py-3",
    "text-sm font-bold tracking-[-0.02em] leading-[1]",
    "transition-all duration-200 ease-out",
    canSubmit
      ? "bg-brand-navy text-white hover:-translate-y-[1px] hover:bg-brand-navy/90 shadow-[0_18px_60px_-30px_rgba(2,6,23,0.45)]"
      : "cursor-not-allowed bg-brand-border text-brand-muted",
  ].join(" ");

  return (
    <div className="rounded-[28px] border border-brand-border bg-white px-8 py-10 shadow-[0_40px_100px_-35px_rgba(0,0,0,0.14)] sm:px-10 sm:py-12 lg:px-12">
      <p className={sectionLabelLight}>Executive briefing intake</p>

      <h2 className={sectionMainHeading}>
        Request a 30 minute
        <span className="block text-brand-slate/85">decision briefing</span>
      </h2>

      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-brand-muted">
        This request is reviewed directly. No sales deck. No vendor bias. We’ll respond with
        next steps and scheduling options.
      </p>

      {state === "success" && (
        <div className="mt-8 rounded-xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm text-emerald-800">
          Submitted successfully. We’ll reach out shortly.
        </div>
      )}

      {state === "error" && error && (
        <div className="mt-8 rounded-xl border border-rose-200 bg-rose-50 px-5 py-4 text-sm text-rose-800">
          {error}
        </div>
      )}

      <form onSubmit={onSubmit} className="mt-10 grid gap-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="Full name" required>
            <input
              value={form.fullName}
              onChange={(e) => updateField("fullName", e.target.value)}
              className={inputClass}
              placeholder="e.g., Maya Johnson"
              autoComplete="name"
            />
          </Field>

          <Field label="Work email" required>
            <input
              value={form.workEmail}
              onChange={(e) => updateField("workEmail", e.target.value)}
              className={emailError ? inputErrorClass : inputClass}
              placeholder="e.g., maya@company.com"
              autoComplete="email"
              inputMode="email"
            />
            {emailError ? (
              <p className="mt-2 text-sm text-rose-700">{emailError}</p>
            ) : (
              <p className="mt-2 text-xs leading-relaxed text-brand-muted">
                Generic email providers are not accepted.
              </p>
            )}
          </Field>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="Company" required>
            <input
              value={form.company}
              onChange={(e) => updateField("company", e.target.value)}
              className={inputClass}
              placeholder="e.g., Northbridge Holdings"
            />
          </Field>

          <Field label="Title / role" required>
            <input
              value={form.title}
              onChange={(e) => updateField("title", e.target.value)}
              className={inputClass}
              placeholder="e.g., VP Data & AI"
            />
          </Field>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="Phone (optional)">
            <input
              value={form.phone}
              onChange={(e) => updateField("phone", e.target.value)}
              className={inputClass}
              placeholder="e.g., +1 555 0101"
              inputMode="tel"
              autoComplete="tel"
            />
          </Field>

          <Field label="AI Stage">
            <select
              value={form.aiStage}
              onChange={(e) => updateField("aiStage", e.target.value)}
              className={selectClass}
            >
              <option>Still exploring AI Initiatives</option>
              <option>We need Strategic AI Advisory</option>
              <option>We need AI Maturity Assessment</option>
              <option>We need AI Strategy alignment with Business Strategy</option>
            </select>
          </Field>
        </div>

        <Field label="Urgency">
          <select
            value={form.urgency}
            onChange={(e) => updateField("urgency", e.target.value)}
            className={selectClass}
          >
            <option>This month</option>
            <option>This quarter</option>
            <option>Next quarter</option>
            <option>Exploratory</option>
          </select>
        </Field>

        <Field label="What decision are you trying to make? (optional)">
          <textarea
            value={form.message}
            onChange={(e) => updateField("message", e.target.value)}
            rows={5}
            className={`${inputClass} resize-none`}
            placeholder="Brief context: where pilots are, what’s blocking scale, governance concerns, metrics, deadlines, stakeholders…"
          />
        </Field>

        <label className="flex items-start gap-3 text-sm text-brand-muted">
          <input
            type="checkbox"
            checked={form.consent}
            onChange={(e) => updateField("consent", e.target.checked)}
            className="mt-1 h-4 w-4 rounded border-brand-border"
          />
          <span>
            I consent to be contacted about this request. (No spam. No vendor marketing.)
          </span>
        </label>

        <button
          type="submit"
          disabled={!canSubmit}
          className={primaryButtonClass}
        >
          {state === "submitting" ? "Submitting..." : "Request briefing"}
        </button>

        <div className="rounded-2xl bg-black/[0.03] px-5 py-4 ring-1 ring-inset ring-black/8">
          <p className={subLabelLight}>Response expectation</p>
          <p className="mt-2 text-xs leading-relaxed text-brand-muted">
            Expected response time: typically within 1 business day.
          </p>
        </div>
      </form>
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  const subLabelLight =
    "text-[1.02rem] font-bold tracking-[-0.02em] leading-[1.08] text-brand-slate sm:text-[1.12rem]";

  return (
    <div>
      <p className={`${subLabelLight} mb-2`}>
        {label} {required ? <span className="text-brand-slate">*</span> : null}
      </p>
      {children}
    </div>
  );
}