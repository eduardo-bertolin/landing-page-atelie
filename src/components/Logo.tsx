interface LogoProps {
  variant?: "light" | "dark";
  compact?: boolean;
}

export default function Logo({ variant = "dark", compact = false }: LogoProps) {
  const textColor = variant === "light" ? "text-[color:var(--color-cream)]" : "text-[color:var(--color-ink)]";
  return (
    <div className="flex items-center gap-2" data-testid="brand-logo">
      <img
        src="/images/LogoAtelie.webp"
        alt="Ateliê Tati Bertolin"
        width={44}
        height={44}
        decoding="async"
        className="w-9 h-9 md:w-11 md:h-11 object-contain"
      />
      {!compact && (
        <div className="flex flex-col leading-none">
          <span className={`font-serif text-[1.05rem] md:text-[1.2rem] tracking-tight ${textColor}`}>
            Ateliê Tati
          </span>
          <span
            className={`font-sans text-[0.6rem] tracking-[0.35em] uppercase mt-1 ${
              variant === "light" ? "text-[color:var(--color-gold)]" : "text-[color:var(--color-terracotta)]"
            }`}
          >
            Bertolin
          </span>
        </div>
      )}
    </div>
  );
}
