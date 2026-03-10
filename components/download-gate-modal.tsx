"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type DownloadGateModalProps = {
  buttonText: string;
  fileUrl: string;
  fileName?: string;
  title?: string;
  description?: string;
  className?: string;
  heroImage?: string;
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

export function DownloadGateModal({
  buttonText,
  fileUrl,
  fileName = "downloaded-file.pdf",
  title = "Download board brief",
  description = "Complete this short form before downloading the document.",
  className = "",
  heroImage = "/contact-hero-bg.jpg",
}: DownloadGateModalProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState<FormDataState>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    role: "",
    interest: "",
    notes: "",
  });

  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
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
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

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
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmitted(true);

      setTimeout(() => {
        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, 350);
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
  }

  const inputClass =
    "w-full rounded-2xl border border-black/10 bg-white px-4 py-3.5 text-sm text-brand-slate outline-none transition duration-200 placeholder:text-brand-muted/70 focus:border-[#60a5fa] focus:ring-4 focus:ring-[#60a5fa]/10";

  const labelClass =
    "mb-2 block text-[0.95rem] font-bold tracking-[-0.02em] leading-[1.08] text-brand-slate";

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {buttonText}
      </button>

      {open && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center px-4 py-6 sm:px-6">
          <button
            type="button"
            aria-label="Close modal overlay"
            onClick={closeModal}
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
          />

          <div className="relative z-10 flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-[30px] border border-white/10 bg-white shadow-[0_50px_160px_-40px_rgba(0,0,0,0.55)] lg:grid lg:grid-cols-[0.9fr_1.1fr]">
            {!submitted ? (
              <>
                <div className="relative hidden min-h-full overflow-hidden lg:block">
                  <Image
                    src={heroImage}
                    alt="Executive download access"
                    fill
                    className="object-cover object-[72%_center]"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-black/55" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/35 to-black/70" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-black/15" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />

                  <div className="relative flex h-full flex-col justify-between p-8 xl:p-10">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[1.2rem] font-bold tracking-[-0.03em] text-white sm:text-[1.4rem]">
                          Executive resource access
                        </p>
                        <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/85">
                          Structured for senior leaders evaluating governed AI execution at enterprise scale.
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={closeModal}
                        aria-label="Close modal"
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/16"
                      >
                        ✕
                      </button>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-2.5">
                        {["Executive Control", "Runtime Governance", "Board Metrics"].map((item) => (
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
                        <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/88">
                          <li className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/80" />
                            <span>Your details are reviewed directly</span>
                          </li>
                          <li className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/80" />
                            <span>Your resource becomes available immediately after submission</span>
                          </li>
                          <li className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/80" />
                            <span>The flow stays aligned with your executive briefing brand experience</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative flex max-h-[92vh] flex-col overflow-hidden">
                  <div className="relative overflow-hidden border-b border-black/8 bg-gradient-to-b from-[#F6F8FC] via-[#F0F4F9] to-[#E8EEF7] px-6 py-6 sm:px-8">
                    <div
                      className="pointer-events-none absolute inset-x-0 top-0 h-1"
                      style={{
                        background:
                          "linear-gradient(90deg, rgba(96,165,250,0.95), rgba(74,222,128,0.75))",
                      }}
                    />

                    <div className="flex items-start justify-between gap-4 lg:hidden">
                      <div className="max-w-[85%]">
                        <p className="text-[1.2rem] font-bold tracking-[-0.03em] text-brand-slate">
                          Executive resource access
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={closeModal}
                        aria-label="Close modal"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/5 text-brand-slate transition hover:bg-black/10"
                      >
                        ✕
                      </button>
                    </div>

                    <div className="max-w-2xl">
                      <p className="text-2xl font-bold tracking-[-0.03em] leading-[1.02] text-brand-slate sm:text-[2rem]">
                        {title}
                      </p>

                      <p className="mt-4 text-sm leading-relaxed text-brand-muted sm:text-[0.98rem]">
                        {description}
                      </p>
                    </div>
                  </div>

                  <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8 sm:py-7">
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
                            className={inputClass}
                            placeholder="name@company.com"
                          />
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
                          <select
                            id="interest"
                            name="interest"
                            value={formData.interest}
                            onChange={handleChange}
                            required
                            className={inputClass}
                          >
                            <option value="">Select one</option>
                            <option value="Executive briefing">Executive briefing</option>
                            <option value="Board brief">Board brief</option>
                            <option value="AI governance">AI governance</option>
                            <option value="Operating model">Operating model</option>
                            <option value="Risk and compliance">Risk and compliance</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="notes" className={labelClass}>
                          What are you evaluating right now?
                        </label>
                        <textarea
                          id="notes"
                          name="notes"
                          rows={5}
                          value={formData.notes}
                          onChange={handleChange}
                          className={`${inputClass} resize-none`}
                          placeholder="Share a short note about what you are evaluating"
                        />
                      </div>

                      {error ? (
                        <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                          {error}
                        </div>
                      ) : null}

                      <div className="rounded-2xl bg-gradient-to-b from-[#F6F8FC] via-[#F0F4F9] to-[#E8EEF7] p-4 ring-1 ring-black/6">
                        <p className="text-sm font-bold tracking-[-0.02em] text-brand-slate">
                          Review note
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                          This request is positioned as a premium executive resource access point, not a generic download wall.
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-3 pt-1">
                        <button
                          type="submit"
                          disabled={loading}
                          className="inline-flex items-center justify-center rounded-full bg-[#4ade80] px-6 py-3 text-sm font-semibold text-[#111827] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
                        >
                          {loading ? "Submitting..." : "Submit and download"}
                        </button>

                        <button
                          type="button"
                          onClick={closeModal}
                          className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-brand-slate transition hover:bg-black/[0.03]"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </>
            ) : (
              <div className="relative overflow-hidden bg-white">
                <div className="absolute inset-0 bg-gradient-to-b from-[#F6F8FC] via-white to-[#F8FAFC]" />
                <div className="relative px-6 py-10 sm:px-10 sm:py-12">
                  <div className="mx-auto max-w-2xl text-center">
                    <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#4ade80]/20 ring-1 ring-[#4ade80]/30">
                      <svg
                        className="h-8 w-8 text-[#111827]"
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
                      Thanks. Your download is starting.
                    </p>

                    <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-brand-muted sm:text-base">
                      Your details have been received. If the file does not start automatically, use the button below.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                      <a
                        href={fileUrl}
                        download={fileName}
                        className="inline-flex items-center justify-center rounded-full bg-[#4ade80] px-6 py-3 text-sm font-semibold text-[#111827] transition hover:opacity-90"
                      >
                        Download now
                      </a>

                      <button
                        type="button"
                        onClick={closeModal}
                        className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-brand-slate transition hover:bg-black/[0.03]"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}