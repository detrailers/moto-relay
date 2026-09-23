"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/button";
import { getPaymentLink, supportedDepositAmounts } from "@/lib/payment-links";

const inputClass = "w-full rounded-md border border-form-border bg-form-input px-3.5 py-2.5 text-sm text-form-foreground placeholder:text-form-muted focus:border-accent";

export function BookingLinkGenerator() {
  const [quote, setQuote] = useState("");
  const [total, setTotal] = useState("");
  const [deposit, setDeposit] = useState("245");
  const [pickup, setPickup] = useState("");
  const [link, setLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");
  const balance = useMemo(() => {
    const totalNumber = Number(total), depositNumber = Number(deposit);
    return Number.isFinite(totalNumber) && Number.isFinite(depositNumber) && totalNumber >= depositNumber ? totalNumber - depositNumber : null;
  }, [total, deposit]);

  function generate() {
    const totalNumber = Number(total), depositNumber = Number(deposit);
    if (!quote.trim() || !pickup || !Number.isFinite(totalNumber) || totalNumber <= 0 || !Number.isFinite(depositNumber) || depositNumber <= 0 || depositNumber > totalNumber) {
      setError("Enter the quote number, total price, valid deposit, and pickup date.");
      setLink("");
      return;
    }
    if (!getPaymentLink(depositNumber)) {
      setError(`No secure payment form exists for a $${depositNumber.toFixed(2)} deposit. Use $195, $245, or $295, or create a custom eProcessingNetwork form first.`);
      setLink("");
      return;
    }
    const params = new URLSearchParams({ quote: quote.trim(), total: totalNumber.toFixed(2), deposit: depositNumber.toFixed(2), pickup });
    setLink(`${window.location.origin}/book-shipment?${params.toString()}`);
    setCopied(false);
    setError("");
  }

  async function copy() {
    await navigator.clipboard.writeText(link);
    setCopied(true);
  }

  return <div className="rounded-2xl border border-form-border bg-form-surface p-5 text-form-foreground shadow-2xl shadow-black/40 sm:p-8">
    <div className="grid gap-5 sm:grid-cols-2">
      <label className="text-sm font-semibold">Quote or order number<input className={`${inputClass} mt-1.5`} value={quote} onChange={(event) => setQuote(event.target.value)} /></label>
      <label className="text-sm font-semibold">Accepted total shipment price<input className={`${inputClass} mt-1.5`} inputMode="decimal" placeholder="$0.00" value={total} onChange={(event) => setTotal(event.target.value.replace(/[^0-9.]/g, ""))} /></label>
      <div>
        <label className="text-sm font-semibold">Deposit amount<input className={`${inputClass} mt-1.5`} inputMode="decimal" value={deposit} onChange={(event) => setDeposit(event.target.value.replace(/[^0-9.]/g, ""))} /></label>
        <div className="mt-2 flex flex-wrap gap-2">
          {supportedDepositAmounts.map((amount) => <button key={amount} type="button" onClick={() => setDeposit(String(amount))} className="rounded-md border border-form-border px-3 py-1.5 text-xs font-bold hover:border-accent hover:text-accent">${amount}</button>)}
        </div>
      </div>
      <label className="text-sm font-semibold">Requested pickup date<input className={`${inputClass} mt-1.5`} type="date" value={pickup} onChange={(event) => setPickup(event.target.value)} /></label>
    </div>
    <div className="mt-5 rounded-lg border border-form-border bg-white p-4 text-sm">
      <div className="flex justify-between"><span>Remaining shipment balance</span><strong>{balance === null ? "Enter prices above" : balance.toLocaleString("en-US", { style: "currency", currency: "USD" })}</strong></div>
    </div>
    {error && <p role="alert" className="mt-4 text-sm font-semibold text-form-error">{error}</p>}
    <div className="mt-5"><Button type="button" onClick={generate}>Generate customer link</Button></div>
    {link && <div className="mt-6 rounded-xl border border-accent bg-white p-4">
      <p className="text-xs font-black uppercase tracking-wider text-form-muted">Customer booking link</p>
      <p className="mt-2 break-all text-sm">{link}</p>
      <div className="mt-4 flex flex-wrap gap-3">
        <Button type="button" onClick={copy}>{copied ? "Copied" : "Copy link"}</Button>
        <Button href={link} target="_blank" rel="noreferrer" variant="secondary">Preview form</Button>
      </div>
    </div>}
  </div>;
}
