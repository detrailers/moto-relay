import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

// Edge-to-edge photographic tile for the "Vehicles We Ship" row. Every tile
// shares one aspect ratio/height so the row reads as a dense, consistent
// strip rather than a set of boxed cards.
export function VehicleTile({
  title,
  href,
  src,
  alt,
}: {
  title: string;
  href: string;
  src: string;
  alt: string;
}) {
  return (
    <Link
      href={href}
      className="group relative block aspect-square overflow-hidden rounded-md border-2 border-transparent outline-none transition-colors duration-200 hover:border-accent hover:shadow-[0_0_28px_-4px_rgba(255,106,19,0.55)] focus-visible:border-accent focus-visible:shadow-[0_0_28px_-4px_rgba(255,106,19,0.55)]"
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 25vw, 50vw"
        className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/25 to-transparent"
      />
      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[3px] bg-accent transition-all duration-200 group-hover:h-1.5"
      />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3.5 sm:p-4">
        <span className="font-heading text-base font-bold uppercase leading-tight tracking-wide text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.6)] sm:text-lg">
          {title}
        </span>
        <ArrowRightIcon className="size-4 shrink-0 text-accent transition-transform duration-200 group-hover:translate-x-1 sm:size-5" />
      </div>
    </Link>
  );
}
