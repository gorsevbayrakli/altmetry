import { NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  budget: string;
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
    typeof b.projectType === "string" &&
    b.projectType.trim().length > 0 &&
    typeof b.budget === "string" &&
    b.budget.trim().length > 0 &&
    typeof b.message === "string" &&
    b.message.trim().length > 0
  );
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!isValidPayload(body)) {
    return NextResponse.json(
      { error: "Please fill in all required fields with a valid email." },
      { status: 422 }
    );
  }

  // TODO: wire to an email service (Resend, Postmark, SendGrid, etc.) once available.
  console.log("[contact] new inquiry", {
    name: body.name,
    email: body.email,
    company: body.company ?? null,
    projectType: body.projectType,
    budget: body.budget,
  });

  return NextResponse.json({ success: true });
}
