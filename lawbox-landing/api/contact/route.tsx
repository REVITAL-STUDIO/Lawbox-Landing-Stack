import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API!);

export async function POST(req: Request) {
  try {
    const toList = process.env.CONTACT_TO!.split(",").map((e) => e.trim());

    const { email, firstName, message } = await req.json();
    const { data, error } = await resend.emails.send({
      from: process.env.CONTACT_FROM!,
      to: toList,
      replyTo: `LawBox <${email}>`,
      subject: `LawBox Inquiry: ${firstName || email}`,
      html: `
        <h2>New Inquiry from ${firstName || "Unknown"} (${email})</h2>
        <p>${message}</p>
      `,
    });

    if (error) return NextResponse.json(error, { status: 400 });
    return NextResponse.json({ ok: true, id: data?.id });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Server error" });
  }
}
