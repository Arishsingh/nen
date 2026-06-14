import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const gmailUser = process.env.GMAIL_USER?.trim();
  const gmailPass = process.env.GMAIL_PASS?.trim();

  if (!gmailUser || !gmailPass || gmailPass === "your_gmail_app_password_here") {
    return NextResponse.json({ ok: false, fallback: true }, { status: 503 });
  }

  const data = await req.formData();

  const name = data.get("name") as string;
  const company = data.get("company") as string;
  const email = data.get("email") as string;
  const phone = data.get("phone") as string;
  const description = data.get("description") as string;
  const file = data.get("file") as File | null;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: gmailUser, pass: gmailPass },
  });

  const attachments: { filename: string; content: Buffer }[] = [];
  if (file && file.size > 0) {
    const buffer = Buffer.from(await file.arrayBuffer());
    attachments.push({ filename: file.name, content: buffer });
  }

  try {
    await transporter.sendMail({
      from: `"Neurix Contact" <${gmailUser}>`,
      to: "neurix.dev99@gmail.com",
      replyTo: email,
      subject: `Project Inquiry — ${company || name}`,
      text: `Name: ${name}\nCompany: ${company}\nEmail: ${email}\nPhone: ${phone}\n\nProject Description:\n${description}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <br/>
        <p><strong>Project Description:</strong></p>
        <p style="white-space:pre-wrap">${description}</p>
      `,
      attachments,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Mail error:", err);
    return NextResponse.json({ ok: false, fallback: true }, { status: 500 });
  }
}
