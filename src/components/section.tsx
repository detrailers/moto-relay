import { cn } from "@/lib/cn";

type SectionProps = {
  id?: string;
  className?: string;
  contained?: boolean;
  as?: "section" | "div";
  "aria-labelledby"?: string;
  children: React.ReactNode;
};

// Shared vertical rhythm + max-width container for every homepage/content
// section, so spacing stays consistent without repeating utility classes.
export function Section({
  id,
  className,
  contained = true,
  as: Tag = "section",
  children,
  ...rest
}: SectionProps) {
  return (
    <Tag id={id} className={cn("py-12 sm:py-16", className)} {...rest}>
      <div className={contained ? "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" : undefined}>{children}</div>
    </Tag>
  );
}
