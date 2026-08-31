// Shared between the client form (src/components/quote-form.tsx) and the
// server route (src/app/api/quote/route.ts) so both enforce identical rules
// — the server never merely trusts whatever the client already checked.
//
// The `YesNo`/`Transport`/`vehicleType` types below are compile-time only —
// they say nothing about a value parsed from a raw JSON request body, which
// could be any string a caller chooses to send. The Set membership checks
// in validateStepOne are the actual runtime enforcement for those fields.

import { VEHICLE_TYPES } from "@/lib/site";

export type YesNo = "yes" | "no" | "";
export type Transport = "open" | "enclosed" | "both" | "";

const VALID_VEHICLE_TYPES = new Set(VEHICLE_TYPES.map((v) => v.label.replace(" Shipping", "")));
const VALID_YES_NO = new Set<string>(["yes", "no"]);
const VALID_TRANSPORT = new Set<string>(["open", "enclosed", "both"]);

export type QuoteFormData = {
  pickup: string;
  delivery: string;
  vehicleType: string;
  year: string;
  make: string;
  model: string;
  runs: YesNo;
  rolls: YesNo;
  transport: Transport;
  name: string;
  phone: string;
  email: string;
};

export type QuoteFormErrors = Partial<Record<keyof QuoteFormData, string>>;

export const QUOTE_FIELD_MAX_LENGTH = 200;

function isTooLong(value: string) {
  return value.length > QUOTE_FIELD_MAX_LENGTH;
}

export function validateStepOne(data: QuoteFormData): QuoteFormErrors {
  const errors: QuoteFormErrors = {};
  if (!data.pickup.trim()) errors.pickup = "Enter a pickup ZIP code or city and state.";
  else if (isTooLong(data.pickup)) errors.pickup = "Pickup location is too long.";
  if (!data.delivery.trim()) errors.delivery = "Enter a delivery ZIP code or city and state.";
  else if (isTooLong(data.delivery)) errors.delivery = "Delivery location is too long.";
  if (!data.vehicleType) errors.vehicleType = "Select a vehicle type.";
  else if (isTooLong(data.vehicleType)) errors.vehicleType = "Vehicle type is too long.";
  else if (!VALID_VEHICLE_TYPES.has(data.vehicleType)) errors.vehicleType = "Select a valid vehicle type.";
  if (!/^(19|20)\d{2}$/.test(data.year.trim())) errors.year = "Enter a valid 4-digit year.";
  if (!data.make.trim()) errors.make = "Enter the make.";
  else if (isTooLong(data.make)) errors.make = "Make is too long.";
  if (!data.model.trim()) errors.model = "Enter the model.";
  else if (isTooLong(data.model)) errors.model = "Model is too long.";
  if (!data.runs) errors.runs = "Let us know if it runs.";
  else if (!VALID_YES_NO.has(data.runs)) errors.runs = "Invalid value for whether it runs.";
  if (!data.rolls) errors.rolls = "Let us know if it rolls.";
  else if (!VALID_YES_NO.has(data.rolls)) errors.rolls = "Invalid value for whether it rolls.";
  if (!data.transport) errors.transport = "Choose a transport preference.";
  else if (!VALID_TRANSPORT.has(data.transport)) errors.transport = "Invalid transport preference.";
  return errors;
}

export function validateStepTwo(data: QuoteFormData): QuoteFormErrors {
  const errors: QuoteFormErrors = {};
  if (!data.name.trim()) errors.name = "Enter your name.";
  else if (isTooLong(data.name)) errors.name = "Name is too long.";
  if (!/^[\d()+\-.\s]{7,}$/.test(data.phone.trim()) || isTooLong(data.phone)) {
    errors.phone = "Enter a valid phone number.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim()) || isTooLong(data.email)) {
    errors.email = "Enter a valid email address.";
  }
  return errors;
}

export function validateQuoteSubmission(data: QuoteFormData): QuoteFormErrors {
  return { ...validateStepOne(data), ...validateStepTwo(data) };
}
