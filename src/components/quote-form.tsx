"use client";

import { useId, useState } from "react";
import { VEHICLE_TYPES } from "@/lib/site";
import { Button } from "@/components/button";
import { cn } from "@/lib/cn";

type YesNo = "yes" | "no" | "";
type Transport = "open" | "enclosed" | "both" | "";

type FormState = {
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

const initialState: FormState = {
  pickup: "",
  delivery: "",
  vehicleType: "",
  year: "",
  make: "",
  model: "",
  runs: "",
  rolls: "",
  transport: "",
  name: "",
  phone: "",
  email: "",
};

type Errors = Partial<Record<keyof FormState, string>>;

function validateStepOne(data: FormState): Errors {
  const errors: Errors = {};
  if (!data.pickup.trim()) errors.pickup = "Enter a pickup ZIP code or city and state.";
  if (!data.delivery.trim()) errors.delivery = "Enter a delivery ZIP code or city and state.";
  if (!data.vehicleType) errors.vehicleType = "Select a vehicle type.";
  if (!/^(19|20)\d{2}$/.test(data.year.trim())) errors.year = "Enter a valid 4-digit year.";
  if (!data.make.trim()) errors.make = "Enter the make.";
  if (!data.model.trim()) errors.model = "Enter the model.";
  if (!data.runs) errors.runs = "Let us know if it runs.";
  if (!data.rolls) errors.rolls = "Let us know if it rolls.";
  if (!data.transport) errors.transport = "Choose a transport preference.";
  return errors;
}

function validateStepTwo(data: FormState): Errors {
  const errors: Errors = {};
  if (!data.name.trim()) errors.name = "Enter your name.";
  if (!/^[\d()+\-.\s]{7,}$/.test(data.phone.trim())) errors.phone = "Enter a valid phone number.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) errors.email = "Enter a valid email address.";
  return errors;
}

const radioBase =
  "flex-1 cursor-pointer rounded-md border border-form-border bg-form-input px-4 py-2.5 text-center text-sm font-semibold text-form-foreground transition-colors has-[:checked]:border-accent has-[:checked]:bg-accent has-[:checked]:text-accent-foreground";

const fieldBase =
  "w-full rounded-md border border-form-border bg-form-input px-3.5 py-2.5 text-sm text-form-foreground placeholder:text-form-muted focus:border-accent";

export function QuoteForm({ heading }: { heading?: string } = {}) {
  const [step, setStep] = useState<1 | 2>(1);
  const [data, setData] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const formId = useId();

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setData((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function handleContinue(e: React.FormEvent) {
    e.preventDefault();
    const stepOneErrors = validateStepOne(data);
    setErrors(stepOneErrors);
    if (Object.keys(stepOneErrors).length === 0) setStep(2);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const stepTwoErrors = validateStepTwo(data);
    setErrors(stepTwoErrors);
    // No backend is connected yet — this only validates and confirms the
    // frontend workflow. Nothing is sent anywhere.
    if (Object.keys(stepTwoErrors).length === 0) setSubmitted(true);
  }

  if (submitted) {
    return (
      <div role="status" className="relative overflow-hidden rounded-2xl border border-accent bg-form-surface p-8 text-center shadow-2xl shadow-black/50">
        <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-accent" />
        <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-form-foreground">
          Quote request captured
        </h3>
        <p className="mt-3 text-sm text-form-muted">
          This is a frontend placeholder — form submission is not yet connected to email, SMS or a database.
          No quote request has actually been sent.
        </p>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-form-border bg-form-surface p-5 shadow-2xl shadow-black/50 sm:p-6">
      {/* Orange top edge ties the light card back to the black/orange hero
          it overlaps, instead of reading as an unrelated white form. */}
      <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-accent" />
      {heading && (
        <h2 className="mb-4 text-center font-heading text-xl font-bold uppercase tracking-wide text-form-foreground sm:text-2xl">
          {heading}
        </h2>
      )}
      <ol className="mb-5 grid grid-cols-2 gap-1.5 rounded-lg bg-black/[0.06] p-1.5">
        <li
          className={cn(
            "flex items-center justify-center gap-2 rounded-md py-2 text-[11px] font-bold uppercase tracking-wide transition-colors sm:text-xs",
            step === 1 ? "bg-accent text-accent-foreground shadow" : "text-form-muted",
          )}
        >
          <span className="flex size-5 shrink-0 items-center justify-center rounded-full border border-current text-[10px]">
            1
          </span>
          Shipment Details
        </li>
        <li
          className={cn(
            "flex items-center justify-center gap-2 rounded-md py-2 text-[11px] font-bold uppercase tracking-wide transition-colors sm:text-xs",
            step === 2 ? "bg-accent text-accent-foreground shadow" : "text-form-muted",
          )}
        >
          <span className="flex size-5 shrink-0 items-center justify-center rounded-full border border-current text-[10px]">
            2
          </span>
          Your Information
        </li>
      </ol>

      {step === 1 ? (
        <form noValidate onSubmit={handleContinue} className="space-y-4">
          <div className="grid gap-3 sm:grid-cols-2">
            <Field id={`${formId}-pickup`} label="Pickup" error={errors.pickup}>
              <input
                id={`${formId}-pickup`}
                className={fieldBase}
                placeholder="ZIP code or city, state"
                value={data.pickup}
                onChange={(e) => update("pickup", e.target.value)}
                aria-invalid={!!errors.pickup}
                aria-describedby={errors.pickup ? `${formId}-pickup-error` : undefined}
              />
            </Field>
            <Field id={`${formId}-delivery`} label="Delivery" error={errors.delivery}>
              <input
                id={`${formId}-delivery`}
                className={fieldBase}
                placeholder="ZIP code or city, state"
                value={data.delivery}
                onChange={(e) => update("delivery", e.target.value)}
                aria-invalid={!!errors.delivery}
                aria-describedby={errors.delivery ? `${formId}-delivery-error` : undefined}
              />
            </Field>
          </div>

          <fieldset>
            <legend className="mb-2 block text-sm font-semibold text-form-foreground">Vehicle type</legend>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {VEHICLE_TYPES.map((v) => {
                const value = v.label.replace(" Shipping", "");
                return (
                  <label key={v.slug} className={radioBase}>
                    <input
                      type="radio"
                      name="vehicleType"
                      value={value}
                      checked={data.vehicleType === value}
                      onChange={(e) => update("vehicleType", e.target.value)}
                      className="sr-only"
                    />
                    {value}
                  </label>
                );
              })}
            </div>
            {errors.vehicleType && <FieldError id={`${formId}-vehicleType-error`}>{errors.vehicleType}</FieldError>}
          </fieldset>

          <div className="grid gap-3 sm:grid-cols-3">
            <Field id={`${formId}-year`} label="Year" error={errors.year}>
              <input
                id={`${formId}-year`}
                className={fieldBase}
                placeholder="e.g. 2021"
                inputMode="numeric"
                value={data.year}
                onChange={(e) => update("year", e.target.value)}
                aria-invalid={!!errors.year}
                aria-describedby={errors.year ? `${formId}-year-error` : undefined}
              />
            </Field>
            <Field id={`${formId}-make`} label="Make" error={errors.make}>
              <input
                id={`${formId}-make`}
                className={fieldBase}
                placeholder="e.g. Harley-Davidson"
                value={data.make}
                onChange={(e) => update("make", e.target.value)}
                aria-invalid={!!errors.make}
                aria-describedby={errors.make ? `${formId}-make-error` : undefined}
              />
            </Field>
            <Field id={`${formId}-model`} label="Model" error={errors.model}>
              <input
                id={`${formId}-model`}
                className={fieldBase}
                placeholder="e.g. Street Glide"
                value={data.model}
                onChange={(e) => update("model", e.target.value)}
                aria-invalid={!!errors.model}
                aria-describedby={errors.model ? `${formId}-model-error` : undefined}
              />
            </Field>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <fieldset>
              <legend className="mb-2 block text-sm font-semibold text-form-foreground">Does it run?</legend>
              <div className="flex gap-2">
                <YesNoOption name="runs" value="yes" current={data.runs} onChange={(v) => update("runs", v)} />
                <YesNoOption name="runs" value="no" current={data.runs} onChange={(v) => update("runs", v)} />
              </div>
              {errors.runs && <FieldError id={`${formId}-runs-error`}>{errors.runs}</FieldError>}
            </fieldset>
            <fieldset>
              <legend className="mb-2 block text-sm font-semibold text-form-foreground">Does it roll?</legend>
              <div className="flex gap-2">
                <YesNoOption name="rolls" value="yes" current={data.rolls} onChange={(v) => update("rolls", v)} />
                <YesNoOption name="rolls" value="no" current={data.rolls} onChange={(v) => update("rolls", v)} />
              </div>
              {errors.rolls && <FieldError id={`${formId}-rolls-error`}>{errors.rolls}</FieldError>}
            </fieldset>
          </div>

          <fieldset>
            <legend className="mb-2 block text-sm font-semibold text-form-foreground">Transport preference</legend>
            <div className="grid grid-cols-3 gap-2">
              {(["open", "enclosed", "both"] as const).map((option) => (
                <label key={option} className={radioBase}>
                  <input
                    type="radio"
                    name="transport"
                    value={option}
                    checked={data.transport === option}
                    onChange={(e) => update("transport", e.target.value as Transport)}
                    className="sr-only"
                  />
                  {option === "both" ? "Quote Both" : option.charAt(0).toUpperCase() + option.slice(1)}
                </label>
              ))}
            </div>
            {errors.transport && <FieldError id={`${formId}-transport-error`}>{errors.transport}</FieldError>}
          </fieldset>

          <Button type="submit" className="w-full sm:w-auto">
            Continue for My Quote
          </Button>
        </form>
      ) : (
        <form noValidate onSubmit={handleSubmit} className="space-y-4">
          <Field id={`${formId}-name`} label="Name" error={errors.name}>
            <input
              id={`${formId}-name`}
              className={fieldBase}
              autoComplete="name"
              value={data.name}
              onChange={(e) => update("name", e.target.value)}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? `${formId}-name-error` : undefined}
            />
          </Field>
          <div className="grid gap-3 sm:grid-cols-2">
            <Field id={`${formId}-phone`} label="Phone" error={errors.phone}>
              <input
                id={`${formId}-phone`}
                type="tel"
                className={fieldBase}
                autoComplete="tel"
                value={data.phone}
                onChange={(e) => update("phone", e.target.value)}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? `${formId}-phone-error` : undefined}
              />
            </Field>
            <Field id={`${formId}-email`} label="Email" error={errors.email}>
              <input
                id={`${formId}-email`}
                type="email"
                className={fieldBase}
                autoComplete="email"
                value={data.email}
                onChange={(e) => update("email", e.target.value)}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? `${formId}-email-error` : undefined}
              />
            </Field>
          </div>

          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center">
            <Button type="button" variant="secondary-on-light" onClick={() => setStep(1)}>
              Back
            </Button>
            <Button type="submit">Get My Quote</Button>
          </div>
        </form>
      )}

      <p className="mt-6 text-center text-xs text-form-muted">No payment required to request a quote.</p>
    </div>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-form-foreground">
        {label}
      </label>
      {children}
      {error && <FieldError id={`${id}-error`}>{error}</FieldError>}
    </div>
  );
}

function FieldError({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <p id={id} role="alert" className="mt-1.5 text-xs font-medium text-form-error">
      {children}
    </p>
  );
}

function YesNoOption({
  name,
  value,
  current,
  onChange,
}: {
  name: string;
  value: "yes" | "no";
  current: YesNo;
  onChange: (value: YesNo) => void;
}) {
  return (
    <label className={radioBase}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={current === value}
        onChange={(e) => onChange(e.target.value as YesNo)}
        className="sr-only"
      />
      {value === "yes" ? "Yes" : "No"}
    </label>
  );
}
