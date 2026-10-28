import { attributionRows } from "./lead-attribution";
import { locationTypeLabel, type BookingFormData } from "./booking-validation";

// Email is the existing durable booking record; allow historical records to be
// displayed without silently assigning a category to either endpoint.
type BookingRecord = Omit<BookingFormData, "pickupLocationType" | "deliveryLocationType"> &
  Partial<Pick<BookingFormData, "pickupLocationType" | "deliveryLocationType">>;

export function bookingNotificationLines(data: BookingRecord, attribution?: unknown): string[] {
  const total=Number(data.totalPrice), deposit=Number(data.depositAmount), balance=total-deposit;
  return [
    "MOTO RELAY SHIPMENT BOOKING",`Quote/order: ${data.quoteNumber}`,`Accepted total: $${total.toFixed(2)}`,`Deposit due: $${deposit.toFixed(2)}`,`Remaining balance: $${balance.toFixed(2)}`,`Requested pickup: ${data.pickupDate}`,"",
    `Customer: ${data.customerName}`,`Email: ${data.customerEmail}`,`Phone: ${data.customerPhone}`,"",
    `Pickup location type: ${locationTypeLabel(data.pickupLocationType, "pickup")}`,`Pickup contact: ${data.pickupContact}`,`Pickup address: ${data.pickupAddress}, ${data.pickupCity}, ${data.pickupState} ${data.pickupZip}`,`Pickup phone: ${data.pickupPhone}`,`Pickup alternate: ${data.pickupAlternatePhone||"None"}`,"",
    `Delivery location type: ${locationTypeLabel(data.deliveryLocationType, "delivery")}`,`Delivery contact: ${data.deliveryContact}`,`Delivery address: ${data.deliveryAddress}, ${data.deliveryCity}, ${data.deliveryState} ${data.deliveryZip}`,`Delivery phone: ${data.deliveryPhone}`,`Delivery alternate: ${data.deliveryAlternatePhone||"None"}`,"",
    `Vehicle 1: ${data.vehicleOne} — ${data.vehicleOneColor}`,`Vehicle 2: ${data.vehicleTwo?`${data.vehicleTwo} — ${data.vehicleTwoColor||"color not provided"}`:"None"}`,`Transport type: ${data.transportType}`,`Runs: ${data.runs}`,`Rolls: ${data.rolls}`,`Notes: ${data.notes||"None"}`,`Referral: ${data.referralSource||"Not provided"}`,"",`Accepted by electronic signature: ${data.signature}`,
    `PAYMENT STATUS: No card data is stored by Moto Relay. After this form, the customer is directed to the existing secure eProcessing Network form for the ${deposit.toFixed(2)} deposit. Verify the eProcessing receipt before dispatch.`,
    "",
    "CENTRAL DISPATCH CHECKLIST",
    `Pickup location type → ${locationTypeLabel(data.pickupLocationType, "pickup")}`,
    `Delivery location type → ${locationTypeLabel(data.deliveryLocationType, "delivery")}`,
    `Booking requested pickup / ready date → ${data.pickupDate}`,
    "Use the latest booking and any customer-confirmed updates. Confirm both location categories against Central's available choices; stop and report any mismatch or missing value rather than guessing.",
    "After saving in Central, reopen the saved listing independently and verify both location types and the latest booking ready date. Record the listing ID, saved values, and verification time before marking dispatch QA complete.",
    "",
    ...attributionRows(attribution).map(([label, value]) => `${label}: ${value}`),
  ];
}
