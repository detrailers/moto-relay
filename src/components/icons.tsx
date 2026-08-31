// A small set of simple, consistent line icons — no external icon library.
// Same stroke width/cap style throughout so they read as one system.
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function TrailerIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M2 16h13V7H8L2 12v4Z" />
      <path d="M15 10h4l3 3v3h-7" />
      <circle cx="6.5" cy="17.5" r="1.5" />
      <circle cx="18.5" cy="17.5" r="1.5" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.25" />
    </svg>
  );
}

export function SnowflakeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2v20M4.9 5.5l14.2 13M19.1 5.5 4.9 18.5" />
      <path d="M8 3.5 12 6l4-2.5M8 20.5 12 18l4 2.5M2.6 9l3.9 1.5-1 4.1M21.4 9l-3.9 1.5 1 4.1M2.6 15l3.9-1.5-1-4.1M21.4 15l-3.9-1.5 1-4.1" />
    </svg>
  );
}

export function MotorcycleIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="5.5" cy="17.5" r="2.5" />
      <circle cx="18.5" cy="17.5" r="2.5" />
      <path d="M8 17.5h7l-2-6h-4l-1.5 3M13.5 11.5 16 7h3M5.5 17.5 9 12M2 14h2.5" />
    </svg>
  );
}

export function CheckCircleIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12.5 2.3 2.3L16 9.5" />
    </svg>
  );
}

export function RouteIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="5" cy="6" r="2" />
      <circle cx="19" cy="18" r="2" />
      <path d="M5 8v3a4 4 0 0 0 4 4h6a4 4 0 0 1 4 4" strokeDasharray="3 3" />
    </svg>
  );
}

export function ShieldCheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 4.5 6v6c0 4.5 3.2 7.5 7.5 9 4.3-1.5 7.5-4.5 7.5-9V6L12 3Z" />
      <path d="m9 12 2 2 4-4.5" />
    </svg>
  );
}

export function AtvIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="5.5" cy="17" r="2.5" />
      <circle cx="18.5" cy="17" r="2.5" />
      <path d="M8 17h8M6.5 14.5 9 9h6l2.5 5.5M9 9V6h2M15 9V6h-2" />
    </svg>
  );
}

export function TrikeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="5" cy="17.5" r="2.2" />
      <circle cx="19" cy="17.5" r="2.2" />
      <circle cx="12" cy="17.5" r="2.2" />
      <path d="M9.5 17.5h1M14.5 17.5h1M8 17.5 11 9h3l1.5 4M11 9 9.5 5h3" />
    </svg>
  );
}

export function MessageIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 5h16v11H8l-4 4V5Z" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6.5 4h3l1.5 4-2 1.5a11 11 0 0 0 5.5 5.5l1.5-2 4 1.5v3a2 2 0 0 1-2 2C10.5 19.5 4.5 13.5 4.5 6a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12h16M13 5l7 7-7 7" />
    </svg>
  );
}
