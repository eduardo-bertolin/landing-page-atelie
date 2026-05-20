
interface IButtonProps {
  text: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

export default function Button({ text, variant = 'primary' }: IButtonProps) {
  const estiloBase = "w-full font-medium text-lg py-3 px-6 rounded-[0.1rem] cursor-pointer transition-colors duration-200"

  const variants = {
    primary: "bg-[var(--color-bg-dark)] text-[var(--color-text-light)] hover:bg-[var(--color-terra)]",
    secondary: "bg-[var(--color-dourado)] text-[var(--color-ebano)] hover:bg-[var(--color-bg-light)]",
    outline: "bg-transparent border border-[var(--color-dourado)] text-[var(--color-dourado)] hover:bg-[var(--color-cru)]/10",

  }
  return (
    <button className={`${estiloBase} ${variants[variant]}`}>
      {text}
    </button>
  );
}
