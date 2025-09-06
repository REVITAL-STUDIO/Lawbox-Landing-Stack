import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || typeof email != "string") {
      return NextResponse.json({ error: "Email Required" }, { status: 400 });
    }

    const response = await fetch(
      `https://api.beehiiv.com/v2/publications/${process.env.BEEHIIV_PUBLICATION_ID}/subscriptions`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.BEEHIIV_API}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      }
    );

    const data = await response.json();
    console.log("Beehiiv Response:", data);

    if (!response.ok) {
      return NextResponse.json(
        { error: data?.message || "Beehiiv error" },
        { status: response.status }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Subscribe Error:", err);
    return NextResponse.json({ error: "Server Error:" }, { status: 500 });
  }
}
