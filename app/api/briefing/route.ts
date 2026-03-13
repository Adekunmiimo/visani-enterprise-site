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
    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY");
      return NextResponse.json(
        { error: "Server email key is missing." },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
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

    const result = await resend.emails.send({
      from: "Visani America <onboarding@resend.dev>",
      to: ["cyrussolomon63@gmail.com"],
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

    console.log("Resend result:", JSON.stringify(result, null, 2));

    if (result.error) {
      console.error("Resend returned error:", result.error);
      return NextResponse.json(
        { error: result.error.message || "Failed to send email." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      ok: true,
      id: result.data?.id ?? null,
      message: "Briefing request sent successfully.",
    });
  } catch (error) {
    console.error("briefing route fatal error:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Unable to process request.",
      },
      { status: 500 }
    );
  }
}