"use client";

import { FormEvent, useMemo, useState } from "react";
import { Button } from "@/components/button";
import { validateBooking, type BookingErrors, type BookingFormData } from "@/lib/booking-validation";
import { site } from "@/lib/site";

const empty: BookingFormData = {
  quoteNumber: "", totalPrice: "", pickupDate: "", customerName: "", customerEmail: "", customerPhone: "",
  pickupContact: "", pickupAddress: "", pickupCity: "", pickupState: "", pickupZip: "", pickupPhone: "", pickupAlternatePhone: "",
  deliveryContact: "", deliveryAddress: "", deliveryCity: "", deliveryState: "", deliveryZip: "", deliveryPhone: "", deliveryAlternatePhone: "",
  vehicleOne: "", vehicleOneColor: "", vehicleTwo: "", vehicleTwoColor: "", runs: "", rolls: "", notes: "", referralSource: "", signature: "", accepted: "",
};

const inputClass = "w-full rounded-md border border-form-border bg-form-input px-3.5 py-2.5 text-sm text-form-foreground placeholder:text-form-muted focus:border-accent";

export function BookingForm() {
  const [data, setData] = useState(empty);
  const [errors, setErrors] = useState<BookingErrors>({});
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sendError, setSendError] = useState("");
  const [website, setWebsite] = useState("");
  const balance = useMemo(() => {
    const total = Number(data.totalPrice);
    return Number.isFinite(total) && total >= 250 ? total - 250 : null;
  }, [data.totalPrice]);

  function update(field: keyof BookingFormData, value: string) {
    setData((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  async function submit(event: FormEvent) {
    event.preventDefault();
    const nextErrors = validateBooking(data);
    if (Object.keys(nextErrors).length) { setErrors(nextErrors); return; }
    setSending(true); setSendError("");
    try {
      const response = await fetch("/api/booking", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...data, website }) });
      if (!response.ok) throw new Error("send failed");
      setSubmitted(true);
    } catch {
      setSendError("We couldn't send the booking form. Please try again or call Moto Relay.");
    } finally { setSending(false); }
  }

  if (submitted) return (
    <div role="status" className="rounded-2xl border border-accent bg-form-surface p-8 text-center text-form-foreground">
      <h2 className="font-heading text-2xl font-bold uppercase">Booking information received</h2>
      <p className="mt-3">Your card has not been charged. Call or text <a className="font-bold text-accent" href={site.phoneHref}>{site.phone}</a> to securely process the $250 deposit through eProcessing Network.</p>
      <p className="mt-2 text-sm text-form-muted">Never send a card number, expiration date, or security code by email or text.</p>
    </div>
  );

  return (
    <form noValidate onSubmit={submit} className="space-y-8 rounded-2xl border border-form-border bg-form-surface p-5 text-form-foreground shadow-2xl shadow-black/40 sm:p-8">
      <Section title="Accepted quote">
        <Grid>
          <Field label="Quote or order number" error={errors.quoteNumber}><input className={inputClass} value={data.quoteNumber} onChange={(e)=>update("quoteNumber",e.target.value)} /></Field>
          <Field label="Accepted total shipment price" error={errors.totalPrice}><input className={inputClass} inputMode="decimal" placeholder="$0.00" value={data.totalPrice} onChange={(e)=>update("totalPrice",e.target.value.replace(/[^0-9.]/g,""))} /></Field>
          <Field label="Requested pickup date" error={errors.pickupDate}><input className={inputClass} type="date" value={data.pickupDate} onChange={(e)=>update("pickupDate",e.target.value)} /></Field>
        </Grid>
        <div className="mt-4 rounded-lg border border-form-border bg-white p-4 text-sm">
          <div className="flex justify-between"><span>Deposit due to complete booking</span><strong>$250.00</strong></div>
          <div className="mt-2 flex justify-between border-t border-form-border pt-2"><span>Remaining shipment balance</span><strong>{balance === null ? "Enter total price above" : balance.toLocaleString("en-US",{style:"currency",currency:"USD"})}</strong></div>
        </div>
      </Section>

      <Section title="Customer information"><Grid>
        <Text field="customerName" label="Full name" data={data} errors={errors} update={update} />
        <Text field="customerPhone" label="Phone" data={data} errors={errors} update={update} />
        <Text field="customerEmail" label="Email" type="email" data={data} errors={errors} update={update} />
      </Grid></Section>

      <ContactSection title="Pickup information" prefix="pickup" data={data} errors={errors} update={update} />
      <ContactSection title="Delivery information" prefix="delivery" data={data} errors={errors} update={update} />

      <Section title="Vehicle information">
        <Grid>
          <Text field="vehicleOne" label="Vehicle 1 year, make and model" data={data} errors={errors} update={update} />
          <Text field="vehicleOneColor" label="Vehicle 1 color" data={data} errors={errors} update={update} />
          <Text field="vehicleTwo" label="Vehicle 2 year, make and model (optional)" data={data} errors={errors} update={update} />
          <Text field="vehicleTwoColor" label="Vehicle 2 color (optional)" data={data} errors={errors} update={update} />
          <Choice label="Does the vehicle run?" field="runs" value={data.runs} error={errors.runs} update={update} />
          <Choice label="Does the vehicle roll freely?" field="rolls" value={data.rolls} error={errors.rolls} update={update} />
        </Grid>
        <Field label="Modifications, dimensions, access limits, or special loading details" error={errors.notes}><textarea className={`${inputClass} min-h-28`} value={data.notes} onChange={(e)=>update("notes",e.target.value)} /></Field>
        <Field label="How did you hear about Moto Relay? (optional)" error={errors.referralSource}><input className={inputClass} value={data.referralSource} onChange={(e)=>update("referralSource",e.target.value)} /></Field>
      </Section>

      <Section title="Authorization">
        <p className="text-sm leading-6">I confirm that the shipment information and accepted total price above are accurate. I understand that a $250 deposit is required to complete this booking and that the remaining shipment balance equals the accepted total price minus $250. Card details will be provided separately and processed securely through eProcessing Network.</p>
        <label className="mt-4 flex gap-3 text-sm font-semibold"><input type="checkbox" checked={data.accepted==="yes"} onChange={(e)=>update("accepted",e.target.checked?"yes":"")} /> I have read and accept the booking terms.</label>
        {errors.accepted && <p className="mt-1 text-xs font-medium text-form-error">{errors.accepted}</p>}
        <div className="mt-4 max-w-md"><Text field="signature" label="Electronic signature (type your full legal name)" data={data} errors={errors} update={update} /></div>
      </Section>

      <div className="hidden"><label>Website<input name="website" tabIndex={-1} autoComplete="off" value={website} onChange={(e)=>setWebsite(e.target.value)} /></label></div>
      {sendError && <p role="alert" className="text-sm font-semibold text-form-error">{sendError}</p>}
      <Button type="submit" disabled={sending}>{sending ? "Sending…" : "Submit booking information"}</Button>
      <p className="text-xs text-form-muted">Submitting this form does not transmit or charge a card. Moto Relay will process the $250 deposit separately through eProcessing Network.</p>
    </form>
  );
}

function Section({title,children}:{title:string;children:React.ReactNode}) { return <section><h2 className="mb-4 font-heading text-xl font-bold uppercase tracking-wide">{title}</h2>{children}</section>; }
function Grid({children}:{children:React.ReactNode}) { return <div className="grid gap-4 sm:grid-cols-2">{children}</div>; }
function Field({label,error,children}:{label:string;error?:string;children:React.ReactNode}) { return <label className="mb-4 block text-sm font-semibold">{label}{<div className="mt-1.5">{children}</div>}{error&&<span className="mt-1 block text-xs text-form-error">{error}</span>}</label>; }
function Text({field,label,data,errors,update,type="text"}:{field:keyof BookingFormData;label:string;data:BookingFormData;errors:BookingErrors;update:(f:keyof BookingFormData,v:string)=>void;type?:string}) { return <Field label={label} error={errors[field]}><input className={inputClass} type={type} value={data[field]} onChange={(e)=>update(field,e.target.value)} /></Field>; }
function Choice({label,field,value,error,update}:{label:string;field:"runs"|"rolls";value:string;error?:string;update:(f:keyof BookingFormData,v:string)=>void}) { return <fieldset className="mb-4"><legend className="text-sm font-semibold">{label}</legend><div className="mt-2 flex gap-5">{["Yes","No"].map(x=><label key={x} className="flex gap-2 text-sm"><input type="radio" name={field} checked={value===x} onChange={()=>update(field,x)} />{x}</label>)}</div>{error&&<p className="mt-1 text-xs text-form-error">{error}</p>}</fieldset>; }
function ContactSection({title,prefix,data,errors,update}:{title:string;prefix:"pickup"|"delivery";data:BookingFormData;errors:BookingErrors;update:(f:keyof BookingFormData,v:string)=>void}) {
  const f=(suffix:string)=>`${prefix}${suffix}` as keyof BookingFormData;
  return <Section title={title}><Grid>
    <Text field={f("Contact")} label="Contact name" data={data} errors={errors} update={update} />
    <Text field={f("Phone")} label="Best phone" data={data} errors={errors} update={update} />
    <Text field={f("AlternatePhone")} label="Alternate phone (optional)" data={data} errors={errors} update={update} />
    <Text field={f("Address")} label="Street address" data={data} errors={errors} update={update} />
    <Text field={f("City")} label="City" data={data} errors={errors} update={update} />
    <Text field={f("State")} label="State" data={data} errors={errors} update={update} />
    <Text field={f("Zip")} label="ZIP code" data={data} errors={errors} update={update} />
  </Grid></Section>;
}
