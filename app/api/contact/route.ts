import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  phone: string;
  address: string;
  details: string;
};

function sanitize(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function validate(payload: ContactPayload) {
  if (!payload.name || !payload.phone || !payload.address || !payload.details) {
    return "All fields are required.";
  }
  if (payload.details.length < 10) {
    return "Please enter a few more details about the inquiry.";
  }
  return null;
}

async function sendEmail(payload: ContactPayload) {
  const { SMTP_USER, SMTP_PASS, CONTACT_TO_EMAIL } = process.env;

  if (!SMTP_USER || !SMTP_PASS || !CONTACT_TO_EMAIL) {
    throw new Error("Email configuration missing in environment variables.");
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  await transporter.verify().catch((err) => {
    throw new Error(`SMTP connection failed: ${err.message}`);
  });

  await transporter.sendMail({
    from: `"Atulit Technology" <${SMTP_USER}>`,
    to: CONTACT_TO_EMAIL,
    replyTo: SMTP_USER,
    subject: `New inquiry from ${payload.name}`,
    text: `
New Atulit Technology Inquiry
Name: ${payload.name}
Phone: ${payload.phone}
Address: ${payload.address}
Details:
${payload.details}
    `,
    html: `
      <h2>New Atulit Technology Inquiry</h2>
      <p><strong>Name:</strong> ${payload.name}</p>
      <p><strong>Phone:</strong> ${payload.phone}</p>
      <p><strong>Address:</strong> ${payload.address}</p>
      <p><strong>Details:</strong></p>
      <p>${payload.details.replace(/\n/g, "<br />")}</p>
    `,
  });
}

async function sendToGoogleSheets(payload: ContactPayload) {
  const { GOOGLE_SHEETS_WEBHOOK_URL } = process.env;

  if (!GOOGLE_SHEETS_WEBHOOK_URL) {
    console.warn("Google Sheets webhook not configured.");
    return;
  }

  const response = await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...payload,
      submittedAt: new Date().toISOString(),
      source: "Atulit Technology website",
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Google Sheets error: ${response.status}`);
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactPayload>;

    const payload: ContactPayload = {
      name: sanitize(body.name),
      phone: sanitize(body.phone),
      address: sanitize(body.address),
      details: sanitize(body.details),
    };

    const error = validate(payload);
    if (error) {
      return NextResponse.json({ message: error }, { status: 400 });
    }

    await sendEmail(payload);
    await sendToGoogleSheets(payload);

    return NextResponse.json({
      success: true,
      message: "Inquiry sent successfully.",
    });

  } catch (error) {
    console.error("CONTACT API ERROR:", error);
    return NextResponse.json(
      {
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong while submitting the form.",
      },
      { status: 500 }
    );
  }
}
