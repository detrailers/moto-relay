export const BOOKING_FIELD_MAX_LENGTH = 180;
export const BOOKING_NOTES_MAX_LENGTH = 2_000;

export type BookingFormData = {
  quoteNumber: string;
  totalPrice: string;
  pickupDate: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  pickupContact: string;
  pickupAddress: string;
  pickupCity: string;
  pickupState: string;
  pickupZip: string;
  pickupPhone: string;
  pickupAlternatePhone: string;
  deliveryContact: string;
  deliveryAddress: string;
  deliveryCity: string;
  deliveryState: string;
  deliveryZip: string;
  deliveryPhone: string;
  deliveryAlternatePhone: string;
  vehicleOne: string;
  vehicleOneColor: string;
  vehicleTwo: string;
  vehicleTwoColor: string;
  runs: string;
  rolls: string;
  notes: string;
  referralSource: string;
  signature: string;
  accepted: string;
};

export type BookingErrors = Partial<Record<keyof BookingFormData, string>>;

const required: (keyof BookingFormData)[] = [
  "quoteNumber", "totalPrice", "pickupDate", "customerName", "customerEmail", "customerPhone",
  "pickupContact", "pickupAddress", "pickupCity", "pickupState", "pickupZip", "pickupPhone",
  "deliveryContact", "deliveryAddress", "deliveryCity", "deliveryState", "deliveryZip", "deliveryPhone",
  "vehicleOne", "vehicleOneColor", "runs", "rolls", "signature", "accepted",
];

export function validateBooking(data: BookingFormData): BookingErrors {
  const errors: BookingErrors = {};
  for (const field of required) {
    if (!data[field]?.trim()) errors[field] = "Required";
  }
  if (data.customerEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.customerEmail)) {
    errors.customerEmail = "Enter a valid email address";
  }
  const total = Number(data.totalPrice);
  if (!Number.isFinite(total) || total < 250) errors.totalPrice = "Enter the accepted total price (at least $250)";
  if (data.accepted !== "yes") errors.accepted = "You must accept the booking terms";
  if (data.runs && !["Yes", "No"].includes(data.runs)) errors.runs = "Choose yes or no";
  if (data.rolls && !["Yes", "No"].includes(data.rolls)) errors.rolls = "Choose yes or no";
  return errors;
}
