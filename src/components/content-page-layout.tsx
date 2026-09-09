import Link from "next/link";

export function ContentPageLayout({
  eyebrow,
  title,
  intro,
  reviewed = false,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  reviewed?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      {eyebrow && (
        <p className="text-xs font-bold uppercase tracking-widest text-accent">{eyebrow}</p>
      )}
      <h1 className="mt-2 font-heading text-3xl font-bold uppercase tracking-wide text-foreground sm:text-4xl">
        {title}
      </h1>
      {intro && <p className="mt-4 text-lg text-muted-foreground">{intro}</p>}
      {reviewed && (
        <p className="mt-5 border-l-2 border-accent pl-4 text-sm text-muted-foreground">
          Reviewed by the Moto Relay team. Moto Relay is owned and operated by Texas Moto Worx, drawing on 22 years
          of transport experience.{" "}
          <Link href="/about" className="font-semibold text-accent hover:underline">
            Learn about Moto Relay
          </Link>
          .
        </p>
      )}
      <div className="mt-8 space-y-4 text-muted-foreground">
        {children ?? (
          <p className="rounded-md border border-dashed border-border p-6 text-sm">
            Placeholder — content for this page has not been written yet.
          </p>
        )}
      </div>
    </article>
  );
}
