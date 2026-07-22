import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

type IButtonProps = {
  text?: string;
  children?: ReactNode;
  variant?: "primary" | "outline" | "ghost" | "submit";
  href?: string;
  target?: string;
  testId?: string;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

export default function Button({
  text,
  children,
  variant = "primary",
  className = "",
  href,
  testId,
  ...props
}: IButtonProps) {
  const base =
    "btn-shine inline-flex items-center justify-center gap-2 font-sans text-[0.78rem] tracking-[0.22em] uppercase font-medium px-8 py-4 rounded-full transition-[transform,background-color,color,box-shadow] duration-300 ease-out will-change-transform active:scale-[0.97] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap";

  const variants = {
    primary:
      "bg-[color:var(--color-terracotta)] text-[color:var(--color-cream)] hover:bg-[color:var(--color-terracotta-deep)] hover:-translate-y-0.5 shadow-[0_10px_25px_-10px_rgba(184,92,56,0.55)] hover:shadow-[0_20px_40px_-12px_rgba(184,92,56,0.55)]",
    outline:
      "bg-transparent border border-[color:var(--color-nude)] text-[color:var(--color-ink)] hover:border-[color:var(--color-terracotta)] hover:text-[color:var(--color-terracotta)] hover:-translate-y-0.5",
    ghost:
      "bg-transparent text-[color:var(--color-cream)] border border-[color:var(--color-gold)]/40 hover:border-[color:var(--color-gold)] hover:bg-[color:var(--color-gold)]/10 hover:-translate-y-0.5",
    submit:
      "bg-[color:var(--color-terracotta)] text-[color:var(--color-cream)] hover:bg-[color:var(--color-terracotta-deep)] hover:-translate-y-0.5 shadow-[0_10px_25px_-10px_rgba(184,92,56,0.55)] w-full py-5",
  } as const;

  const finalClassName = `${base} ${variants[variant]} ${className}`;
  const label = children ?? text;

  if (href) {
    return (
      <a
        href={href}
        data-testid={testId}
        className={finalClassName}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        <span className="relative z-[2]">{label}</span>
      </a>
    );
  }

  return (
    <button
      data-testid={testId}
      className={finalClassName}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      <span className="relative z-[2]">{label}</span>
    </button>
  );
}
