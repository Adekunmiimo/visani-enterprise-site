"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { getButtonClasses } from "@/components/button";

type DownloadGateModalProps = {
  buttonText: string;
  fileUrl: string;
  fileName?: string;
  title?: string;
  description?: string;
  className?: string;
  heroImage?: string;
  redirectTo?: string;
};

type FormDataState = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  role: string;
  interest: string;
  notes: string;
};

const initialFormData: FormDataState = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  role: "",
  interest: "",
  notes: "",
};

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

function isCompanyEmail(email: string) {
  const trimmed = email.trim().toLowerCase();
  const parts = trimmed.split("@");

  if (parts.length !== 2) return false;

  const domain = parts[1];

  if (!domain || !domain.includes(".")) return false;
  if (GENERIC_EMAIL_DOMAINS.has(domain)) return false;

  return true;
}

export function DownloadGateModal({
  buttonText,
  fileUrl,
  fileName = "executive-proof-review.pdf",
  title = "Request Executive Proof Review",
  description = "Complete this short form to request a redacted executive evidence package.",
  className = "",
  heroImage = "/contact-hero-bg.jpg",
  redirectTo = "/downloads/coe-template-pack",
}: DownloadGateModalProps) {
  const router = useRouter();

  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [formData, setFormData] = useState<FormDataState>(initialFormData);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "email") {
      if (!value.trim()) {
        setEmailError("");
      } else if (!isCompanyEmail(value)) {
        setEmailError(
          "Please use your company email address. Generic email providers are not allowed."
        );
      } else {
        setEmailError("");
      }
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!isCompanyEmail(formData.email)) {
      setEmailError(
        "Please use your company email address. Generic email providers are not allowed."
      );
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/download-gate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          assetRequested: fileName,
          fileUrl,
          redirectTo,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error || "Failed to submit form");
      }

      setSubmitted(true);

      setTimeout(() => {
        closeModal();
        router.push(redirectTo);
      }, 900);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function closeModal() {
    setOpen(false);
    setSubmitted(false);
    setError("");
    setEmailError("");
    setLoading(false);
  }

  const inputClass =
    "w-full rounded-2xl border border-black/10 bg-white px-4 py-3.5 text-sm text-brand-slate outline-none transition duration-200 placeholder:text-brand-muted/70 focus:border-[#60a5fa] focus:ring-4 focus:ring-[#60a5fa]/10";

  const inputErrorClass =
    "w-full rounded-2xl border border-red-300 bg-white px-4 py-3.5 text-sm text-brand-slate outline-none transition duration-200 placeholder:text-brand-muted/70 focus:border-red-400 focus:ring-4 focus:ring-red-100";

  const selectClass =
    "w-full appearance-none rounded-2xl border border-black/10 bg-white px-4 py-3.5 pr-12 text-sm text-brand-slate outline-none transition duration-200 focus:border-[#60a5fa] focus:ring-4 focus:ring-[#60a5fa]/10";

  const labelClass =
    "mb-2 block text-[0.95rem] font-bold tracking-[-0.02em] leading-[1.08] text-brand-slate";

  const primaryButtonClass = getButtonClasses("primary", loading);
  const secondaryButtonClass = getButtonClasses("secondary");
  const disabledPrimaryButtonClass = getButtonClasses("primary", true);

  const resourceMeta = useMemo(() => {
    const lowerTitle = `${title} ${fileName}`.toLowerCase();

    if (lowerTitle.includes("control plane")) {
      return {
        eyebrow: "Executive proof review",
        rightTitle: "Request review",
        leftTitle: "Executive evidence access",
        leftIntro:
          "Structured for leaders evaluating permissioned execution, runtime governance, and defensible AI controls.",
        chips: ["Permissioned Execution", "Runtime Telemetry", "Evidence Layer"],
        whatHappensNext: [
          "Your request is captured for executive review routing.",
          "You receive an email asking one short question so the right redacted evidence package can be shared.",
          "The experience stays aligned with Visani America’s executive advisory positioning.",
        ],
        reviewNote:
          "This request supports executive level proof review routing, not a generic document download flow.",
      };
    }

    if (lowerTitle.includes("board")) {
      return {
        eyebrow: "Executive proof review",
        rightTitle: "Request review",
        leftTitle: "Executive evidence access",
        leftIntro:
          "Structured for leaders evaluating board scrutiny, governance posture, and defensible AI operating models.",
        chips: ["Board Metrics", "Governance Clarity", "Executive Control"],
        whatHappensNext: [
          "Your request is reviewed as part of a controlled executive proof review workflow.",
          "You receive a routing email so the most relevant redacted evidence package can be shared.",
          "The experience remains aligned with the broader advisory and briefing journey.",
        ],
        reviewNote:
          "This request is positioned as an executive access point for governance material, not a generic gated asset wall.",
      };
    }

    return {
      eyebrow: "Executive proof review",
      rightTitle: "Request review",
      leftTitle: "Executive evidence access",
      leftIntro:
        "Structured for leaders evaluating governed AI execution, ownership clarity, and enterprise control at scale.",
      chips: ["Execution Control", "Runtime Governance", "Board Metrics"],
      whatHappensNext: [
        "Your request is captured through a premium executive intake flow.",
        "You receive an email asking one quick routing question so the right proof package can be shared.",
        "The experience stays aligned with the project’s advisory positioning and visual system.",
      ],
      reviewNote:
        "This request is positioned as a premium executive proof review access point, not a generic download wall.",
    };
  }, [title, fileName]);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {buttonText}
      </button>

      {mounted && open
        ? createPortal(
            <div className="fixed inset-0 z-[2147483647] isolate">
              <button
                type="button"
                aria-label="Close modal overlay"
                onClick={closeModal}
                className="absolute inset-0 z-0 bg-black/75 backdrop-blur-md"
              />

              <div className="absolute inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-start justify-center px-4 py-4 sm:px-6 sm:py-8 lg:items-center">
                  <div className="relative z-20 w-full max-w-6xl overflow-hidden rounded-[30px] border border-white/10 bg-white shadow-[0_50px_160px_-40px_rgba(0,0,0,0.55)]">
                    {!submitted ? (
                      <div className="grid min-h-[700px] lg:grid-cols-[0.96fr_1.04fr]">
                        <div className="relative hidden lg:block">
                          <Image
                            src={heroImage}
                            alt="Executive resource access"
                            fill
                            className="object-cover object-[72%_center]"
                            sizes="(min-width: 1024px) 40vw, 100vw"
                          />
                          <div className="absolute inset-0 bg-black/62" />
                          <div className="absolute inset-0 bg-gradient-to-r from-black/58 via-black/34 to-black/56" />
                          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/18 to-black/72" />
                          <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />

                          <div
                            className="pointer-events-none absolute -top-16 left-1/2 h-56 w-[min(520px,90%)] -translate-x-1/2 opacity-60 blur-3xl"
                            style={{
                              background:
                                "radial-gradient(closest-side, rgba(96,165,250,0.22), transparent 70%)",
                            }}
                          />
                          <div
                            className="pointer-events-none absolute -right-20 bottom-16 h-52 w-52 rounded-full opacity-40 blur-3xl"
                            style={{
                              background:
                                "radial-gradient(closest-side, rgba(74,222,128,0.16), transparent 70%)",
                            }}
                          />

                          <div className="relative flex h-full flex-col justify-between p-8 xl:p-10">
                            <div className="flex items-start justify-between gap-4">
                              <div className="max-w-sm">
                                <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-[0.92rem] font-semibold tracking-[-0.02em] text-white ring-1 ring-white/12 backdrop-blur">
                                  {resourceMeta.eyebrow}
                                </span>

                                <p className="mt-6 text-[1.25rem] font-bold tracking-[-0.03em] text-white sm:text-[1.5rem]">
                                  {resourceMeta.leftTitle}
                                </p>

                                <p className="mt-3 text-sm leading-relaxed text-white/90">
                                  {resourceMeta.leftIntro}
                                </p>
                              </div>

                              <button
                                type="button"
                                onClick={closeModal}
                                aria-label="Close modal"
                                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 px-0 py-0 text-white shadow-none transition hover:bg-white/16"
                              >
                                <span className="text-white">✕</span>
                              </button>
                            </div>

                            <div>
                              <div className="flex flex-wrap gap-2.5">
                                {resourceMeta.chips.map((item) => (
                                  <span
                                    key={item}
                                    className="inline-flex items-center rounded-full bg-white/12 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15 backdrop-blur"
                                  >
                                    {item}
                                  </span>
                                ))}
                              </div>

                              <div className="mt-8 rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-md">
                                <p className="text-sm font-bold tracking-[-0.02em] text-white">
                                  What happens next
                                </p>

                                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/90">
                                  {resourceMeta.whatHappensNext.map((item) => (
                                    <li key={item} className="flex gap-3">
                                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white" />
                                      <span className="text-white">{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex min-h-0 flex-col bg-gradient-to-b from-[#F6F8FC] via-[#F0F4F9] to-[#E8EEF7]">
                          <div className="relative shrink-0 border-b border-black/8 px-5 py-5 sm:px-8">
                            <div
                              className="pointer-events-none absolute inset-x-0 top-0 h-1"
                              style={{
                                background:
                                  "linear-gradient(90deg, rgba(96,165,250,0.95), rgba(74,222,128,0.75))",
                              }}
                            />

                            <div className="flex items-start justify-between gap-4 lg:hidden">
                              <div className="max-w-[85%]">
                                <span className="inline-flex rounded-full bg-white/80 px-4 py-2 text-[0.88rem] font-semibold tracking-[-0.02em] text-brand-slate ring-1 ring-black/8">
                                  {resourceMeta.eyebrow}
                                </span>
                              </div>

                              <button
                                type="button"
                                onClick={closeModal}
                                aria-label="Close modal"
                                className={`${secondaryButtonClass} !h-10 !w-10 !rounded-full !px-0 !py-0 !shadow-none`}
                              >
                                <span className="relative inline-flex items-center justify-center">
                                  ✕
                                </span>
                              </button>
                            </div>

                            <div className="mt-3 max-w-2xl lg:mt-0">
                              <p className="text-[0.98rem] font-bold tracking-[-0.02em] text-brand-slate/80">
                                {resourceMeta.rightTitle}
                              </p>

                              <p className="mt-2 text-[1.8rem] font-bold tracking-[-0.04em] leading-[1.02] text-brand-slate sm:text-[2.15rem]">
                                {title}
                              </p>

                              <p className="mt-3 text-sm leading-relaxed text-brand-muted sm:text-[0.98rem]">
                                {description}
                              </p>
                            </div>
                          </div>

                          <div className="max-h-[calc(100vh-140px)] overflow-y-auto px-5 py-5 sm:px-8 sm:py-7 lg:max-h-[88vh]">
                            <form onSubmit={handleSubmit} className="space-y-5">
                              <div className="grid gap-5 sm:grid-cols-2">
                                <div>
                                  <label htmlFor="firstName" className={labelClass}>
                                    First name
                                  </label>
                                  <input
                                    id="firstName"
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                    className={inputClass}
                                    placeholder="Enter first name"
                                  />
                                </div>

                                <div>
                                  <label htmlFor="lastName" className={labelClass}>
                                    Last name
                                  </label>
                                  <input
                                    id="lastName"
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                    className={inputClass}
                                    placeholder="Enter last name"
                                  />
                                </div>
                              </div>

                              <div className="grid gap-5 sm:grid-cols-2">
                                <div>
                                  <label htmlFor="email" className={labelClass}>
                                    Work email
                                  </label>
                                  <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className={emailError ? inputErrorClass : inputClass}
                                    placeholder="name@company.com"
                                  />
                                  {emailError ? (
                                    <p className="mt-2 text-sm font-medium text-red-600">
                                      {emailError}
                                    </p>
                                  ) : (
                                    <p className="mt-2 text-xs leading-relaxed text-brand-muted">
                                      Please use your company email address. Generic providers are not accepted.
                                    </p>
                                  )}
                                </div>

                                <div>
                                  <label htmlFor="company" className={labelClass}>
                                    Company
                                  </label>
                                  <input
                                    id="company"
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    required
                                    className={inputClass}
                                    placeholder="Enter company name"
                                  />
                                </div>
                              </div>

                              <div className="grid gap-5 sm:grid-cols-2">
                                <div>
                                  <label htmlFor="role" className={labelClass}>
                                    Role / title
                                  </label>
                                  <input
                                    id="role"
                                    type="text"
                                    name="role"
                                    value={formData.role}
                                    onChange={handleChange}
                                    required
                                    className={inputClass}
                                    placeholder="Enter your role"
                                  />
                                </div>

                                <div>
                                  <label htmlFor="interest" className={labelClass}>
                                    Primary interest
                                  </label>

                                  <div className="relative">
                                    <select
                                      id="interest"
                                      name="interest"
                                      value={formData.interest}
                                      onChange={handleChange}
                                      required
                                      className={selectClass}
                                    >
                                      <option value="">Select one</option>
                                      <option value="Governance before scale">Governance before scale</option>
                                      <option value="Ownership & decision rights">Ownership & decision rights</option>
                                      <option value="Permissioned execution controls">
                                        Permissioned execution controls
                                      </option>
                                      <option value="Runtime observability & audit trail">
                                        Runtime observability & audit trail
                                      </option>
                                      <option value="Value measurement (value ledger)">
                                        Value measurement (value ledger)
                                      </option>
                                      <option value="Sustained adoption">Sustained adoption</option>
                                    </select>

                                    <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                                      <svg
                                        className="h-5 w-5 text-brand-slate/70"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      >
                                        <path d="M6 8l4 4 4-4" />
                                      </svg>
                                    </div>

                                    <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/40" />
                                  </div>
                                </div>
                              </div>

                              <div>
                                <label htmlFor="notes" className={labelClass}>
                                  What are you evaluating right now?
                                </label>
                                <textarea
                                  id="notes"
                                  name="notes"
                                  rows={6}
                                  value={formData.notes}
                                  onChange={handleChange}
                                  className={`${inputClass} min-h-[140px] resize-y`}
                                  placeholder="Share a short note about your current governance, operating model, or execution priorities"
                                />
                              </div>

                              {error ? (
                                <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                                  {error}
                                </div>
                              ) : null}

                              <div className="rounded-2xl bg-white/72 p-4 ring-1 ring-black/6 backdrop-blur">
                                <p className="text-sm font-bold tracking-[-0.02em] text-brand-slate">
                                  Review note
                                </p>
                                <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                                  {resourceMeta.reviewNote}
                                </p>
                              </div>

                              <div className="flex flex-wrap gap-3 pt-1">
                                <button
                                  type="submit"
                                  disabled={loading}
                                  className={loading ? disabledPrimaryButtonClass : primaryButtonClass}
                                >
                                  <span className="pointer-events-none absolute inset-0 rounded-xl bg-[radial-gradient(1200px_220px_at_20%_0%,rgba(255,255,255,0.35),transparent_55%)]" />
                                  <span className="relative inline-flex items-center justify-center">
                                    {loading ? "Submitting..." : "Request proof review"}
                                  </span>
                                </button>

                                <button
                                  type="button"
                                  onClick={closeModal}
                                  className={secondaryButtonClass}
                                >
                                  <span className="pointer-events-none absolute inset-0 rounded-xl bg-[radial-gradient(1000px_220px_at_20%_0%,rgba(96,165,250,0.14),transparent_55%)]" />
                                  <span className="relative inline-flex items-center justify-center">
                                    Cancel
                                  </span>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="relative overflow-hidden bg-white">
                        <div className="absolute inset-0 bg-gradient-to-b from-[#F6F8FC] via-white to-[#F8FAFC]" />
                        <div className="relative px-6 py-10 sm:px-10 sm:py-12">
                          <div className="mx-auto max-w-2xl text-center">
                            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#60a5fa]/15 ring-1 ring-[#60a5fa]/25">
                              <svg
                                className="h-8 w-8 text-brand-slate"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M20 6L9 17l-5-5" />
                              </svg>
                            </div>

                            <p className="mt-6 text-[1.8rem] font-bold tracking-[-0.03em] text-brand-slate sm:text-[2.2rem]">
                              Thanks. Your proof review request has been received.
                            </p>

                            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-brand-muted sm:text-base">
                              Your details have been received. We’ve emailed the next step for routing
                              the right evidence package.
                            </p>

                            <div className="mt-8 flex flex-wrap justify-center gap-3">
                              <button
                                type="button"
                                onClick={() => {
                                  closeModal();
                                  router.push(redirectTo);
                                }}
                                className={primaryButtonClass}
                              >
                                <span className="pointer-events-none absolute inset-0 rounded-xl bg-[radial-gradient(1200px_220px_at_20%_0%,rgba(255,255,255,0.35),transparent_55%)]" />
                                <span className="relative inline-flex items-center justify-center">
                                  Continue
                                </span>
                              </button>

                              <button
                                type="button"
                                onClick={closeModal}
                                className={secondaryButtonClass}
                              >
                                <span className="pointer-events-none absolute inset-0 rounded-xl bg-[radial-gradient(1000px_220px_at_20%_0%,rgba(96,165,250,0.14),transparent_55%)]" />
                                <span className="relative inline-flex items-center justify-center">
                                  Close
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}