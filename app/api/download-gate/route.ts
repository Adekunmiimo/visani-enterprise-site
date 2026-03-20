import { NextResponse } from "next/server";
import { Resend } from "resend";

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

export async function POST(req: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing.");
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const ownerEmail = process.env.CONTACT_FORM_TO || "richie.visani@gmail.com";
    const fromEmail =
      process.env.RESEND_FROM_EMAIL || "Visani America <onboarding@resend.dev>";

    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await req.json();

    const {
      firstName,
      lastName,
      email,
      company,
      role,
      interest,
      notes,
      assetRequested,
      fileUrl,
      redirectTo,
      submittedAt,
    } = body ?? {};

    if (!firstName || !lastName || !email || !company || !role || !interest) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    if (!isCompanyEmail(email)) {
      return NextResponse.json(
        { error: "Please use a company email address." },
        { status: 400 }
      );
    }

    const bookingLink =
      "https://calendly.com/richieadetimehin/book-a-30-mins-strategy-call";

    const subject = `New Executive Proof Review request from ${firstName} ${lastName}`;

    const text = `
New Executive Proof Review request

First name: ${firstName}
Last name: ${lastName}
Work email: ${email}
Company: ${company}
Role: ${role}
Primary interest: ${interest}
Notes: ${notes || "N/A"}

Asset requested: ${assetRequested || "N/A"}
File URL: ${fileUrl || "N/A"}
Redirect to: ${redirectTo || "N/A"}
Submitted at: ${submittedAt || "N/A"}
    `.trim();

    const html = `
      <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.6;">
        <h2 style="margin-bottom: 16px;">New Executive Proof Review request</h2>

        <table cellpadding="8" cellspacing="0" border="0" style="border-collapse: collapse;">
          <tr><td><strong>First name:</strong></td><td>${firstName}</td></tr>
          <tr><td><strong>Last name:</strong></td><td>${lastName}</td></tr>
          <tr><td><strong>Work email:</strong></td><td>${email}</td></tr>
          <tr><td><strong>Company:</strong></td><td>${company}</td></tr>
          <tr><td><strong>Role:</strong></td><td>${role}</td></tr>
          <tr><td><strong>Primary interest:</strong></td><td>${interest}</td></tr>
          <tr><td><strong>Notes:</strong></td><td>${notes || "N/A"}</td></tr>
          <tr><td><strong>Asset requested:</strong></td><td>${assetRequested || "N/A"}</td></tr>
          <tr><td><strong>File URL:</strong></td><td>${fileUrl || "N/A"}</td></tr>
          <tr><td><strong>Redirect to:</strong></td><td>${redirectTo || "N/A"}</td></tr>
          <tr><td><strong>Submitted at:</strong></td><td>${submittedAt || "N/A"}</td></tr>
        </table>
      </div>
    `;

    const adminResult = await resend.emails.send({
      from: fromEmail,
      to: [ownerEmail],
      replyTo: email,
      subject,
      text,
      html,
    });

    if (adminResult.error) {
      console.error("Resend download-gate error:", adminResult.error);
      return NextResponse.json(
        { error: adminResult.error.message || "Failed to send email." },
        { status: 500 }
      );
    }

    const userResult = await resend.emails.send({
      from: fromEmail,
      to: [email],
      replyTo: ownerEmail,
      subject: "Your Executive Proof Review request — next step",
      html: `
        <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.65;">
          <p>Hi ${firstName},</p>

          <p>We’ve received your request for an Executive Proof Review.</p>

          <p>
            Visani America shares redacted evidence packages that demonstrate how AI operates under
            ownership, governance, runtime controls, and measurable outcomes — designed for executive
            and risk review.
          </p>

          <p>
            <strong>Next step (2 minutes):</strong> reply with one line so we route the right evidence package:
          </p>

          <p><strong>Which is most urgent at ${company} right now?</strong></p>

          <ul style="padding-left: 20px; margin: 12px 0;">
            <li>Governance before scale</li>
            <li>Ownership &amp; decision rights</li>
            <li>Permissioned execution controls</li>
            <li>Runtime observability &amp; audit trail</li>
            <li>Value measurement (value ledger)</li>
            <li>Sustained adoption</li>
          </ul>

          <p>
            If you prefer, you can schedule the private executive review here:
          </p>

          <p>
            <a href="${bookingLink}">${bookingLink}</a>
          </p>

          <p>
            Regards,<br />
            Richie Adetimehin<br />
            Visani America — Enterprise AI Execution Advisory
          </p>
        </div>
      `,
      text: `
Hi ${firstName},

We’ve received your request for an Executive Proof Review.

Visani America shares redacted evidence packages that demonstrate how AI operates under ownership,
governance, runtime controls, and measurable outcomes — designed for executive and risk review.

Next step (2 minutes): reply with one line so we route the right evidence package:

Which is most urgent at ${company} right now?

- Governance before scale
- Ownership & decision rights
- Permissioned execution controls
- Runtime observability & audit trail
- Value measurement (value ledger)
- Sustained adoption

If you prefer, you can schedule the private executive review here:
${bookingLink}

Regards,
Richie Adetimehin
Visani America — Enterprise AI Execution Advisory
      `.trim(),
    });

    if (userResult.error) {
      console.error("Resend user confirmation error:", userResult.error);
    }

    return NextResponse.json({
      ok: true,
      message: "Request submitted successfully.",
    });
  } catch (error) {
    console.error("download-gate route error:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Unable to process request.",
      },
      { status: 500 }
    );
  }
}