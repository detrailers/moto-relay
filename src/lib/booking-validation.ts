export const PICKUP_LOCATION_TYPES = ["Residence", "Dealership", "Business", "Auction"] as const;
export const DELIVERY_LOCATION_TYPES = ["Residence", "Dealership", "Business"] as const;
export const LOCATION_TYPES = { pickup: PICKUP_LOCATION_TYPES, delivery: DELIVERY_LOCATION_TYPES };
export type LocationEndpoint = keyof typeof LOCATION_TYPES;

export function isLocationType(value: unknown, endpoint: LocationEndpoint): boolean {
  return typeof value === "string" && LOCATION_TYPES[endpoint].some((type) => type === value);
}

// Historical bookings must remain unknown until confirmed with the customer.
export function locationTypeLabel(value: unknown, endpoint: LocationEndpoint): string {
  if (isLocationType(value, endpoint)) return value as string;
  return typeof value === "string" && value.trim()
    ? `Unrecognized (${value}) — confirm with customer before dispatch`
    : "Not provided — confirm with customer before dispatch";
}

export const BOOKING_FIELD_MAX_LENGTH = 180;
export const BOOKING_NOTES_MAX_LENGTH = 2_000;

export type BookingFormData = {
  quoteNumber: string;
  totalPrice: string;
  depositAmount: string;
  pickupDate: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  pickupLocationType: string;
  pickupContact: string;
  pickupAddress: string;
  pickupCity: string;
  pickupState: string;
  pickupZip: string;
  pickupPhone: string;
  pickupAlternatePhone: string;
  deliveryLocationType: string;
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
  transportType: string;
  runs: string;
  rolls: string;
  notes: string;
  referralSource: string;
  signature: string;
  accepted: string;
};

export type BookingErrors = Partial<Record<keyof BookingFormData, string>>;

const required: (keyof BookingFormData)[] = [
  "quoteNumber", "totalPrice", "depositAmount", "pickupDate", "customerName", "customerEmail", "customerPhone",
  "pickupContact", "pickupAddress", "pickupCity", "pickupState", "pickupZip", "pickupPhone",
  "deliveryContact", "deliveryAddress", "deliveryCity", "deliveryState", "deliveryZip", "deliveryPhone",
  "vehicleOne", "vehicleOneColor", "transportType", "runs", "rolls", "signature", "accepted",
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
  const deposit = Number(data.depositAmount);
  if (!Number.isFinite(deposit) || deposit <= 0) errors.depositAmount = "Enter a valid deposit amount";
  if (!Number.isFinite(total) || total <= 0) errors.totalPrice = "Enter the accepted total price";
  else if (Number.isFinite(deposit) && deposit > total) errors.depositAmount = "Deposit cannot exceed the total price";
  if (data.accepted !== "yes") errors.accepted = "You must accept the booking terms";
  if (data.transportType && !["Open", "Enclosed"].includes(data.transportType)) errors.transportType = "Choose open or enclosed";
  if (data.runs && !["Yes", "No"].includes(data.runs)) errors.runs = "Choose yes or no";
  if (data.rolls && !["Yes", "No"].includes(data.rolls)) errors.rolls = "Choose yes or no";
  for (const endpoint of ["pickup", "delivery"] as const) {
    const field = `${endpoint}LocationType` as const;
    if (!isLocationType(data[field], endpoint)) errors[field] = `Choose ${LOCATION_TYPES[endpoint].join(", ")}`;
  }
  return errors;
}
