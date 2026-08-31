import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

// Approved logo artwork (transparent PNG, native 1746x901, ~1.94:1). Sized by
// explicit width + h-auto (not a height utility) so it stays legible at a
// deliberate rendered width instead of shrinking to fit a short header bar.
// Do not recolor/crop/add effects — this is the single approved lockup.
export function Wordmark({
  className,
  imageClassName,
  priority = false,
}: {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}) {
  return (
    <Link href="/" className={cn("shrink-0", className)} aria-label={`${site.name} home`}>
      <Image
        src="/images/moto-relay-logo.png"
        alt="Moto Relay by Texas Moto Worx"
        width={1746}
        height={901}
        priority={priority}
        className={cn("h-auto w-[130px] sm:w-[170px] lg:w-[200px]", imageClassName)}
      />
    </Link>
  );
}
