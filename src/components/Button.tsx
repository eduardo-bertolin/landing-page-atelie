import type { ButtonHTMLAttributes } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'terra' | 'submit';
}


export default function Button({ text, variant = 'primary', className = "", ...props }: IButtonProps) {
  const estiloBase = "w-full font-medium text-lg py-3 px-6 rounded-[0.1rem] cursor-pointer transition-colors active:scale-97 transition-transform disabled:opacity-70 disabled:cursor-not-allowed"

  const variants = {
    primary: "bg-ebano hover:!bg-terra text-cru",
    secondary: "bg-dourado text-ebano hover:bg-cru",
    outline: "bg-transparent border border-dourado text-dourado hover:bg-cru/10",
    terra: "bg-terra text-white hover:bg-ebano",
    submit: "bg-terra text-white font-jont font-bold uppercase tracking-wider hover:bg-ebano py-4",
  }

  return (
    <button className={`${estiloBase} ${variants[variant]} ${className}`} {...props}>
      {text}
    </button>
  );
}
