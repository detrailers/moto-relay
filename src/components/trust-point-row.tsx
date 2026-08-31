import type { ComponentType, SVGProps } from "react";
import { cn } from "@/lib/cn";

export type TrustPoint = {
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

// Compact inline trust row — white icons/text with thin orange dividers
// between items, styled to sit directly over photography rather than as
// bordered pill badges.
export function TrustPointRow({ points, className }: { points: TrustPoint[]; className?: string }) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-x-5 gap-y-2.5 sm:gap-x-0", className)}>
      {points.map(({ label, icon: Icon }, i) => (
        <li
          key={label}
          className={cn(
            "flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-foreground",
            i > 0 && "sm:border-l sm:border-accent/50 sm:pl-5",
          )}
        >
          <Icon className="size-4 shrink-0 text-foreground" />
          {label}
        </li>
      ))}
    </ul>
  );
}
