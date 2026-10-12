import { site } from "@/lib/site";
import { Button } from "@/components/button";
import { MessageIcon, PhoneIcon, CheckCircleIcon } from "@/components/icons";

const TEXT_CHECKLIST = [
  "Pickup ZIP code",
  "Delivery ZIP code",
  "Year, make and model",
  "Open, enclosed, or both",
  "Whether it runs",
  "Whether it rolls",
];

// Quote SMS links go through required shipment details before opening Messages.
export function TextQuoteCta() {
  const { textQuoteHref, phone, phoneHref, emailHref } = site;

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
            <span className="md:hidden">Fill in these details, then open your text message:</span>
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
          <Button href={textQuoteHref} variant="primary" className="w-full px-8 py-4 text-base shadow-[0_10px_28px_rgba(255,106,19,.24)] sm:w-auto md:hidden">
            Text for a Quote
          </Button>
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
