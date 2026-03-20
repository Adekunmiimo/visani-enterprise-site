import { NextResponse } from "next/server";
import { Resend } from "resend";

// Set of common generic email domains to ensure work emails only
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

// Function to check if email is from a work domain
function isWorkEmail(email: string) {
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
    // Ensure the API key exists
    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY");
      return NextResponse.json(
        { error: "Server email key is missing." },
        { status: 500 }
      );
    }

    // Extract email addresses from environment variables
    const ownerEmail = process.env.CONTACT_FORM_TO || "richie.visani@gmail.com"; // Default email if not set
    const fromEmail =
      process.env.RESEND_FROM_EMAIL || "Visani America <hello@visaniamerica.com>"; // Default sender email if not set

    // Initialize Resend API client
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await req.json();

    // Destructure the incoming form data
    const {
      fullName,
      workEmail,
      company,
      title,
      phone,
      aiStage,
      urgency,
      message,
      consent,
    } = body ?? {};

    // Validate required fields
    if (!fullName || !workEmail || !company || !title) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // Validate work email
    if (!isWorkEmail(workEmail)) {
      return NextResponse.json(
        { error: "Please use your work email address." },
        { status: 400 }
      );
    }

    // Ensure consent is provided
    if (!consent) {
      return NextResponse.json(
        { error: "Consent is required before submitting this request." },
        { status: 400 }
      );
    }

    // Send email to the owner (admin)
    const adminResult = await resend.emails.send({
      from: fromEmail,
      to: [ownerEmail],
      replyTo: workEmail,
      subject: `New Executive Briefing Request from ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.6;">
          <h2>New Executive Briefing Request</h2>
          <table cellpadding="8" cellspacing="0" border="0" style="border-collapse: collapse;">
            <tr><td><strong>Full name:</strong></td><td>${fullName}</td></tr>
            <tr><td><strong>Work email:</strong></td><td>${workEmail}</td></tr>
            <tr><td><strong>Company:</strong></td><td>${company}</td></tr>
            <tr><td><strong>Title / role:</strong></td><td>${title}</td></tr>
            <tr><td><strong>Phone:</strong></td><td>${phone || "N/A"}</td></tr>
            <tr><td><strong>AI Stage:</strong></td><td>${aiStage || "N/A"}</td></tr>
            <tr><td><strong>Urgency:</strong></td><td>${urgency || "N/A"}</td></tr>
            <tr><td><strong>Message:</strong></td><td>${message || "N/A"}</td></tr>
            <tr><td><strong>Consent:</strong></td><td>${consent ? "Yes" : "No"}</td></tr>
          </table>
        </div>
      `,
      text: `
New Executive Briefing Request

Full name: ${fullName}
Work email: ${workEmail}
Company: ${company}
Title / role: ${title}
Phone: ${phone || "N/A"}
AI Stage: ${aiStage || "N/A"}
Urgency: ${urgency || "N/A"}
Message: ${message || "N/A"}
Consent: ${consent ? "Yes" : "No"}
      `.trim(),
    });

    // Handle any errors from the admin email
    if (adminResult.error) {
      console.error("Resend returned error:", adminResult.error);
      return NextResponse.json(
        { error: adminResult.error.message || "Failed to send email." },
        { status: 500 }
      );
    }

    // Prepare confirmation email for the user
    const firstName = fullName.trim().split(" ")[0] || "there";

    const userResult = await resend.emails.send({
      from: fromEmail,
      to: [workEmail],
      subject: "Your executive briefing request has been received",
      html: `
        <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.6;">
          <h2>Thanks for your request</h2>
          <p>Hi ${firstName},</p>
          <p>
            We’ve received your executive briefing request and your details have been captured successfully.
          </p>
          <p>
            <strong>Company:</strong> ${company}<br />
            <strong>Role:</strong> ${title}<br />
            <strong>AI Stage:</strong> ${aiStage || "N/A"}<br />
            <strong>Urgency:</strong> ${urgency || "N/A"}
          </p>
          <p>
            Our team will review your request and reach out with next steps and scheduling options.
          </p>
          <p>Visani America</p>
        </div>
      `,
      text: `
Thanks for your request

Hi ${firstName},

We’ve received your executive briefing request and your details have been captured successfully.

Company: ${company}
Role: ${title}
AI Stage: ${aiStage || "N/A"}
Urgency: ${urgency || "N/A"}

Our team will review your request and reach out with next steps and scheduling options.

Visani America
      `.trim(),
    });

    // Handle any errors from the user confirmation email
    if (userResult.error) {
      console.error("Resend confirmation email error:", userResult.error);
    }

    return NextResponse.json({
      ok: true,
      id: adminResult.data?.id ?? null,
      message: "Briefing request sent successfully.",
    });
  } catch (error) {
    console.error("briefing route fatal error:", error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Unable to process request.",
      },
      { status: 500 }
    );
  }
}