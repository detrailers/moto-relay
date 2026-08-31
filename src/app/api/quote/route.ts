import { NextResponse } from "next/server";
import { Resend } from "resend";
import { validateQuoteSubmission, QUOTE_FIELD_MAX_LENGTH, type QuoteFormData } from "@/lib/quote-validation";

// Generous ceiling for a form this size — anything beyond it is treated as
// abuse, not a legitimate submission.
const MAX_BODY_BYTES = 8_000;

const FIELDS: (keyof QuoteFormData)[] = [
  "pickup",
  "delivery",
  "vehicleType",
  "year",
  "make",
  "model",
  "runs",
  "rolls",
  "transport",
  "name",
  "phone",
  "email",
];

function errorResponse(message: string, status: number) {
  return NextResponse.json({ ok: false, error: message }, { status });
}

export async function POST(request: Request) {
  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) {
    return errorResponse("Submission too large.", 413);
  }

  let body: unknown;
  try {
    body = JSON.parse(raw);
  } catch {
    return errorResponse("Malformed submission.", 400);
  }

  if (typeof body !== "object" || body === null) {
    return errorResponse("Malformed submission.", 400);
  }

  const record = body as Record<string, unknown>;

  // Hidden honeypot field — real visitors never fill it in. Report success
  // without sending anything, so bots don't learn the field is monitored.
  if (typeof record.website === "string" && record.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const collected: Record<string, string> = {};
  for (const field of FIELDS) {
    const value = record[field];
    if (typeof value !== "string" || value.length > QUOTE_FIELD_MAX_LENGTH) {
      return errorResponse("Malformed submission.", 400);
    }
    collected[field] = value;
  }
  const data = collected as unknown as QuoteFormData;

  const errors = validateQuoteSubmission(data);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, error: "Please check the submitted details.", fields: errors }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.QUOTE_RECIPIENT_EMAIL;
  if (!apiKey || !recipient) {
    // Never log the key itself — only that configuration is missing.
    console.error("Quote route is missing RESEND_API_KEY or QUOTE_RECIPIENT_EMAIL.");
    return errorResponse("Quote delivery is not available right now.", 500);
  }

  const resend = new Resend(apiKey);

  const textBody = [
    `Pickup: ${data.pickup}`,
    `Delivery: ${data.delivery}`,
    `Vehicle type: ${data.vehicleType}`,
    `Year: ${data.year}`,
    `Make: ${data.make}`,
    `Model: ${data.model}`,
    `Runs: ${data.runs}`,
    `Rolls: ${data.rolls}`,
    `Transport preference: ${data.transport}`,
    "",
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email}`,
  ].join("\n");

  try {
    const { error } = await resend.emails.send({
      from: "Moto Relay Quotes <quotes@send.motorelaytransport.com>",
      to: recipient,
      replyTo: data.email,
      subject: `New quote request — ${data.year} ${data.make} ${data.model}`,
      text: textBody,
    });

    if (error) {
      // Resend's error object may echo request content back — log only
      // that a failure occurred, never its contents.
      console.error("Quote email failed to send.");
      return errorResponse("Could not send your quote request. Please try again.", 502);
    }
  } catch {
    console.error("Quote email failed to send.");
    return errorResponse("Could not send your quote request. Please try again.", 502);
  }

  return NextResponse.json({ ok: true });
}
