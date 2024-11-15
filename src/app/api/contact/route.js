// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.NEXT_PUBLIC_SENDER_USER,
//     pass: process.env.NEXT_PUBLIC_SENDER_PASS,
//   },
// });
// const user = process.env.NEXT_PUBLIC_SENDER_USER;
// const pass = process.env.NEXT_PUBLIC_SENDER_PASS;
// const reciever = process.env.NEXT_PUBLIC_RECIEVER_USER;
// console.log(user, pass, reciever);

// export async function POST(req) {
//   try {
//     const { name, email, message } = await req.json();
//     console.log(name, email, message);
//     console.log(user, pass, reciever + "env data");
//     if (!name || !email || !message) {
//       return NextResponse.json(
//         { error: "Name, Email, and Message are required!" },
//         { status: 400 }
//       );
//     }
//     const mailOption = {
//       from: process.env.NEXT_PUBLIC_SENDER_USER,
//       to: process.env.NEXT_PUBLIC_RECIEVER_USER,
//       subject: "New Contact Form Submission",
//       text: `
//                 name: ${name}
//                 Email: ${email}
//                 Message: ${message}
//                 `,
//     };
//     await transporter.sendMail(mailOption);
//     return NextResponse.json(
//       { message: "Contact Form Submitted Successfully!" },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error processing contact form:", error);
//     return NextResponse.json(
//       { error: "Failed processing contact form!" },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SENDER_USER,
    pass: process.env.SENDER_PASS,
  },
});

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, Email, and Message are required!" },
        { status: 400 }
      );
    }
    const mailOptions = {
      from: process.env.SENDER_USER,
      to: process.env.RECIEVER_USER,
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Thanks for reaching out, I will get back to you shortly!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed processing contact form!" },
      { status: 500 }
    );
  }
}
