import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "contact" | "ghost" | "secondary-on-light";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-bold uppercase tracking-wide transition-colors disabled:cursor-not-allowed disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-accent-foreground hover:bg-accent-hover",
  secondary: "border border-border text-foreground hover:border-accent hover:text-accent",
  contact: "border-2 border-accent bg-accent-soft text-accent shadow-[0_10px_30px_rgba(255,106,19,.18)] hover:bg-accent hover:text-accent-foreground",
  ghost: "text-foreground hover:text-accent",
  // For the rare case a button sits on the light quote-form surface instead
  // of the dark site background (kept separate from `secondary` so its
  // dark-on-light colors never fight the default variant's classes).
  "secondary-on-light": "border border-form-border text-form-foreground hover:border-accent hover:text-accent-hover",
};

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

type LinkButtonProps = CommonProps & {
  href: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">;

type NativeButtonProps = CommonProps & {
  href?: undefined;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export type ButtonProps = LinkButtonProps | NativeButtonProps;

// A single component for every CTA on the site so link-vs-button semantics
// (navigation vs. form action) stay correct while the look stays consistent.
export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  const classes = cn(base, variants[variant], className);

  if ("href" in props && props.href !== undefined) {
    const { href, ...rest } = props;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...rest } = props as NativeButtonProps;
  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}
