import { NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  companySize?: string;
  priority: string;
  budget?: string;
  message: string;
}

function isValidPayload(body: unknown): body is ContactPayload {
  if (!body || typeof body !== "object") return false;
  const b = body as Record<string, unknown>;
  return (
    typeof b.name === "string" &&
    b.name.trim().length > 0 &&
    typeof b.email === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b.email) &&
    typeof b.priority === "string" &&
    b.priority.trim().length > 0 &&
    typeof b.message === "string" &&
    b.message.trim().length > 0
  );
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Geçersiz istek." }, { status: 400 });
  }

  if (!isValidPayload(body)) {
    return NextResponse.json(
      { error: "Lütfen zorunlu alanları doldurun ve geçerli bir e-posta girin." },
      { status: 422 }
    );
  }

  // TODO: wire to an email service (Resend, Postmark, SendGrid, etc.) once available.
  console.log("[contact] new inquiry", {
    name: body.name,
    email: body.email,
    company: body.company ?? null,
    companySize: body.companySize ?? null,
    priority: body.priority,
    budget: body.budget ?? null,
  });

  return NextResponse.json({ success: true });
}
