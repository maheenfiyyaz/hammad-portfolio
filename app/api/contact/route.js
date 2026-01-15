import nodemailer from "nodemailer";

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req) {
  try {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // App password for Gmail
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Contact Request: ${data.projectType}`,
      text: `
        Name: ${data.fullName}
        Email: ${data.email}
        Phone: ${data.phone}
        Project Type: ${data.projectType}
        Budget: ${data.budget}
        Message: ${data.message}
      `,
    });

    return new Response(JSON.stringify({ message: "Message sent!" }), { status: 200 });
  } catch (err) {
    console.error("Email send failed:", err);
    return new Response(JSON.stringify({ message: "Failed to send" }), { status: 500 });
  }
}
