import { site } from "@/lib/site";
import { Button } from "@/components/button";
import { MessageIcon, PhoneIcon, CheckCircleIcon } from "@/components/icons";

const TEXT_CHECKLIST = [
  "Pickup location",
  "Delivery location",
  "Year, make and model",
  "Open, enclosed, or both",
  "Whether it runs",
  "Whether it rolls",
];

// Reads phone/sms from site.ts, the single source of truth for the
// owner-approved number. If that ever goes back to null (number pulled),
// this renders a disabled, clearly-labeled placeholder instead of a dead link.
export function TextQuoteCta() {
  const { smsHref, phone, phoneHref, emailHref } = site;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-surface-2 pl-6 sm:pl-8">
      <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1 bg-accent" />
      <div className="grid gap-6 py-7 sm:grid-cols-[1.3fr_1fr] sm:items-center sm:gap-10 sm:py-8">
        <div>
          <div className="flex items-center gap-2.5">
            <MessageIcon className="size-5 text-accent" />
            <h2 className="font-heading text-xl font-bold uppercase tracking-wide text-foreground sm:text-2xl">
              <span className="md:hidden">Prefer to text?</span>
              <span className="hidden md:inline">Prefer email?</span>
            </h2>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            <span className="md:hidden">Text us the details and we&apos;ll get your quote started:</span>
            <span className="hidden md:inline">Email us the details and we&apos;ll get your quote started:</span>
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-muted-foreground">
            {TEXT_CHECKLIST.map((item) => (
              <li key={item} className="flex items-start gap-1.5">
                <CheckCircleIcon className="mt-0.5 size-3.5 shrink-0 text-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-start gap-4 border-t border-border pt-6 sm:items-end sm:border-t-0 sm:border-l sm:border-border sm:pl-8 sm:pt-0">
          {/* CSS-only preview of the pre-filled text — no real customer data,
              just the same blank template used in the actual SMS link. */}
          <div className="w-full max-w-[220px] rounded-xl border border-border-strong bg-background/60 p-3 shadow-inner sm:ml-auto md:hidden">
            <div className="flex items-center gap-1.5 border-b border-border pb-2">
              <span className="size-1.5 rounded-full bg-accent" />
              <span className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                {phone ?? "Moto Relay"}
              </span>
            </div>
            <p className="mt-2 text-[10px] leading-relaxed text-muted-foreground">
              Pickup: <span className="text-foreground/70">___</span>
              <br />
              Delivery: <span className="text-foreground/70">___</span>
              <br />
              Year/Make/Model: <span className="text-foreground/70">___</span>
            </p>
          </div>
          {smsHref ? (
            <Button href={smsHref} variant="primary" className="w-full px-8 py-4 text-base shadow-[0_10px_28px_rgba(255,106,19,.24)] sm:w-auto md:hidden">
              Text for a Quote
            </Button>
          ) : (
            <Button variant="primary" disabled title="Phone number coming soon" className="w-full sm:w-auto">
              Text for a Quote
            </Button>
          )}
          <Button href={emailHref} variant="primary" className="!hidden px-8 py-4 text-base shadow-[0_10px_28px_rgba(255,106,19,.24)] md:!inline-flex">
            Email for a Quote
          </Button>
          {phone && (
            <p className="flex w-full items-center sm:justify-end">
              {phoneHref ? (
                <a href={phoneHref} className="inline-flex w-full items-center justify-center gap-2 rounded-md border-2 border-accent px-6 py-3 text-base font-black text-accent transition-colors hover:bg-accent hover:text-black sm:w-auto md:hidden">
                  <PhoneIcon className="size-4 shrink-0" />
                  Call {phone}
                </a>
              ) : (
                <span className="text-base font-black text-foreground">{phone}</span>
              )}
              <span className="hidden text-right text-base font-black text-foreground md:inline">Call or text {phone} from your phone</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
