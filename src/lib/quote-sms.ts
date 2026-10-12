import { site } from "./site";
import { validateStepOne, type QuoteFormData, type QuoteFormErrors } from "./quote-validation";

// Accept US ZIP and ZIP+4, preserving leading zeroes. This checks format,
// not whether a ZIP exists or is inside the service area.
const ZIP = /^\d{5}(?:-\d{4})?$/;

export function validateSmsQuote(data: QuoteFormData): QuoteFormErrors {
  const errors = validateStepOne(data);
  for (const field of ["pickup", "delivery"] as const) {
    if (!ZIP.test(data[field].trim())) {
      errors[field] = `Enter a ${field} ZIP code (5 digits or ZIP+4).`;
    }
  }
  return errors;
}

// Never build a quote link from incomplete form values. Contact fields are not
// required for SMS: the customer sends from their own messaging application.
export function prepareQuoteSms(data: QuoteFormData): { body: string; href: string } | null {
  if (Object.keys(validateSmsQuote(data)).length) return null;
  const body = [
    "Hi, I'd like a Moto Relay shipping quote.",
    "",
    `Pickup ZIP: ${data.pickup.trim()}`,
    `Delivery ZIP: ${data.delivery.trim()}`,
    `Vehicle type: ${data.vehicleType}`,
    `Year/Make/Model: ${data.year.trim()} ${data.make.trim()} ${data.model.trim()}`,
    `Open / Enclosed / Both: ${data.transport}`,
    `Runs: ${data.runs}`,
    `Rolls: ${data.rolls}`,
    ...(data.notes.trim() ? [`Notes: ${data.notes.trim()}`] : []),
  ].join("\n");
  return { body, href: `${site.smsHref}?body=${encodeURIComponent(body)}` };
}
