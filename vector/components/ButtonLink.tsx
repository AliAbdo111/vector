import { ArrowRight } from "lucide-react";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  arrow?: boolean;
  className?: string;
};

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 will-change-transform focus-visible:outline-offset-4";

const variants = {
  primary:
    "bg-white text-ink-950 shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_8px_30px_-6px_rgba(91,108,255,0.55)] hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.2),0_14px_44px_-8px_rgba(91,108,255,0.8)]",
  secondary:
    "border border-white/12 bg-white/[0.03] text-white backdrop-blur hover:border-white/25 hover:bg-white/[0.07]",
  ghost: "text-white hover:text-accent-200",
};

const sizes = {
  md: "h-10 px-5 text-sm",
  lg: "h-12 px-7 text-[15px]",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  arrow = false,
  className = "",
}: ButtonLinkProps) {
  return (
    <a href={href} className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}>
      <span>{children}</span>
      {arrow && (
        <ArrowRight
          aria-hidden
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </a>
  );
}
