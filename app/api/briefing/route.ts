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
    const body = await req.json();

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

    if (!fullName || !workEmail || !company || !title) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    if (!isWorkEmail(workEmail)) {
      return NextResponse.json(
        { error: "Please use your work email address." },
        { status: 400 }
      );
    }

    if (!consent) {
      return NextResponse.json(
        { error: "Consent is required before submitting this request." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "RESEND_API_KEY is not configured." },
        { status: 500 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Visani America <onboarding@resend.dev>",
      to: ["cyrussolomon64@gmail.com"],
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

    if (error) {
      console.error("Resend briefing error:", error);
      return NextResponse.json(
        { error: error.message || "Failed to send email." },
        { status: 500 }
      );
    }

    console.log("Resend briefing success:", data);

    return NextResponse.json({
      ok: true,
      message: "Briefing request sent successfully.",
      data,
    });
  } catch (err) {
    console.error("briefing route error:", err);
    return NextResponse.json(
      { error: "Unable to process request." },
      { status: 500 }
    );
  }
}