import Link from "next/link";
import type { ComponentType, SVGProps } from "react";
import { ArrowRightIcon } from "@/components/icons";

export function ServiceCard({
  title,
  description,
  href,
  icon: Icon,
}: {
  title: string;
  description?: string;
  href: string;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
}) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col justify-between gap-5 overflow-hidden rounded-xl border border-border bg-gradient-to-b from-surface to-surface-2 p-6 transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-lg hover:shadow-black/40"
    >
      <span
        aria-hidden="true"
        className="absolute right-0 top-0 h-24 w-24 -translate-y-1/2 translate-x-1/2 rounded-full bg-accent/10 blur-2xl transition-opacity group-hover:bg-accent/20"
      />
      <div className="relative">
        {Icon && (
          <span className="mb-4 flex size-11 items-center justify-center rounded-lg border border-border-strong bg-black/20 text-accent transition-colors group-hover:border-accent">
            <Icon className="size-5" />
          </span>
        )}
        <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">{title}</h3>
        {description && <p className="mt-2 text-sm text-muted-foreground">{description}</p>}
      </div>
      <span className="relative inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-accent">
        Learn more
        <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
