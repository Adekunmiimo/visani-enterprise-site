import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing.");
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const ownerEmail = "cyrussolomon64@gmail.com";
    const subject = `New download request: ${assetRequested || "Resource request"}`;

    const text = `
New resource request submitted

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
        <h2 style="margin-bottom: 16px;">New resource request submitted</h2>

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
      from: "Visani America <onboarding@resend.dev>",
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
      from: "Visani America <onboarding@resend.dev>",
      to: [email],
      subject: `Your request for ${assetRequested || "the requested resource"} has been received`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.6;">
          <h2>Thanks for your request</h2>
          <p>Hi ${firstName},</p>
          <p>
            We received your request for <strong>${assetRequested || "the requested resource"}</strong>.
          </p>
          <p>
            Your details have been captured successfully and your request is now in process.
          </p>
          <p>
            <strong>Company:</strong> ${company}<br />
            <strong>Role:</strong> ${role}<br />
            <strong>Interest:</strong> ${interest}
          </p>
          <p>
            You will be directed to the delivery page after submission.
          </p>
          <p>Visani America</p>
        </div>
      `,
      text: `
Thanks for your request

Hi ${firstName},

We received your request for ${assetRequested || "the requested resource"}.

Your details have been captured successfully and your request is now in process.

Company: ${company}
Role: ${role}
Interest: ${interest}

Visani America
      `.trim(),
    });

    if (userResult.error) {
      console.error("Resend user confirmation error:", userResult.error);
    }

    console.log("Download gate email sent:", adminResult.data?.id);

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