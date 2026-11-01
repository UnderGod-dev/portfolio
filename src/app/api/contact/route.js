import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { enquiryServices } from "@/data/solutions";

export const runtime = "nodejs";
export const maxDuration = 30;

function failure(error, status) {
  return NextResponse.json({ error }, { status });
}

export async function POST(req) {
  let data;
  try {
    const body = await req.text();
    if (body.length > 12000)
      return failure(
        "Your message is too long. Please keep it under 5,000 characters.",
        413,
      );
    data = JSON.parse(body);
  } catch {
    return failure("Please send a valid contact form.", 400);
  }

  if (!data || typeof data !== "object" || Array.isArray(data)) {
    return failure("Please send a valid contact form.", 400);
  }
  // An invisible field catches basic form-filling bots without contacting SMTP.
  if (data.website)
    return NextResponse.json({ message: "Thanks for reaching out." });
  const name = typeof data.name === "string" ? data.name.trim() : "";
  const email = typeof data.email === "string" ? data.email.trim() : "";
  const message = typeof data.message === "string" ? data.message.trim() : "";
  const service =
    data.service === undefined
      ? ""
      : typeof data.service === "string"
        ? data.service.trim()
        : null;
  if (service === null || (service && !enquiryServices.includes(service)))
    return failure("Please choose one of the listed services.", 400);
  if (name.length < 2 || name.length > 100)
    return failure("Please enter a name between 2 and 100 characters.", 400);
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return failure("Please enter a valid email address.", 400);
  if (message.length < 10 || message.length > 5000)
    return failure(
      "Please write a message between 10 and 5,000 characters.",
      400,
    );

  const { SENDER_USER, SENDER_PASS, RECIEVER_USER, RECEIVER_USER } =
    process.env;
  const recipient = RECEIVER_USER || RECIEVER_USER;
  if (!SENDER_USER || !SENDER_PASS || !recipient) {
    return failure(
      "Email is temporarily unavailable. Please connect with me on LinkedIn instead.",
      503,
    );
  }
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user: SENDER_USER, pass: SENDER_PASS },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000,
    });
    await transporter.sendMail({
      from: SENDER_USER,
      to: recipient,
      replyTo: email,
      subject: "New infrastructure enquiry — Adekunle",
      text: `Name: ${name}\nEmail: ${email}\nFocus: ${service || "General enquiry"}\n\n${message}`,
    });
    return NextResponse.json({
      message: "Thanks for reaching out. I’ll be in touch.",
    });
  } catch (error) {
    console.error("Contact delivery failed:", error.code || "SMTP_ERROR");
    return failure(
      "Your message couldn’t be delivered. Please try again or connect on LinkedIn.",
      502,
    );
  }
}
