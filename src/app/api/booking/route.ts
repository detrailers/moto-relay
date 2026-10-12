import { bookingNotificationLines } from "@/lib/booking-notification";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { BOOKING_FIELD_MAX_LENGTH, BOOKING_NOTES_MAX_LENGTH, validateBooking, type BookingFormData } from "@/lib/booking-validation";

const FIELDS = Object.keys({
  quoteNumber:1,totalPrice:1,depositAmount:1,pickupDate:1,customerName:1,customerEmail:1,customerPhone:1,pickupLocationType:1,pickupContact:1,pickupAddress:1,pickupCity:1,pickupState:1,pickupZip:1,pickupPhone:1,pickupAlternatePhone:1,deliveryLocationType:1,deliveryContact:1,deliveryAddress:1,deliveryCity:1,deliveryState:1,deliveryZip:1,deliveryPhone:1,deliveryAlternatePhone:1,vehicleOne:1,vehicleOneColor:1,vehicleTwo:1,vehicleTwoColor:1,transportType:1,runs:1,rolls:1,notes:1,referralSource:1,signature:1,accepted:1,
}) as (keyof BookingFormData)[];

export async function POST(request: Request) {
  const raw = await request.text();
  if (raw.length > 20_000) return NextResponse.json({ok:false},{status:413});
  let parsed: unknown;
  try { parsed = JSON.parse(raw); } catch { return NextResponse.json({ok:false},{status:400}); }
  if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) return NextResponse.json({ok:false},{status:400});
  const body = parsed as Record<string,unknown>;
  if (typeof body.website === "string" && body.website.trim()) return NextResponse.json({ok:true});
  const collected: Record<string,string> = {};
  for (const field of FIELDS) {
    const value = body[field];
    const max = field === "notes" ? BOOKING_NOTES_MAX_LENGTH : BOOKING_FIELD_MAX_LENGTH;
    if (typeof value !== "string" || value.length > max) return NextResponse.json({ok:false},{status:400});
    collected[field] = value.trim();
  }
  const data = collected as BookingFormData;
  if (Object.keys(validateBooking(data)).length) return NextResponse.json({ok:false},{status:400});
  const apiKey=process.env.RESEND_API_KEY, recipient=process.env.QUOTE_RECIPIENT_EMAIL;
  if (!apiKey||!recipient) return NextResponse.json({ok:false},{status:500});
  const lines = bookingNotificationLines(data, body.attribution);
  const resend=new Resend(apiKey);
  const {error}=await resend.emails.send({from:"Moto Relay Bookings <quotes@send.motorelaytransport.com>",to:recipient,replyTo:data.customerEmail,subject:`Shipment booking — ${data.quoteNumber} — ${data.vehicleOne}`,text:lines.join("\n")});
  if(error) return NextResponse.json({ok:false},{status:502});
  return NextResponse.json({ok:true});
}
