import type { ButtonHTMLAttributes } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'terra';
}

<button
  type="submit"
  disabled={status === "loading"}
  className="w-full bg-terra text-white font-jont font-bold uppercase tracking-wider py-4 mt-2 hover:bg-ebano transition-colors disabled:opacity-70 disabled:cursor-not-allowed active:scale-97 transition-transform cursor-pointer"
>
  {status === "loading" ? "Enviando..." : "Enviar Mensagem"}
</button>

export default function Button({ text, variant = 'primary', className = "", ...props }: IButtonProps) {
  const estiloBase = "w-full font-medium text-lg py-3 px-6 rounded-[0.1rem] cursor-pointer transition-colors active:scale-97 transition-transform disabled:opacity-70 disabled:cursor-not-allowed"

  const variants = {
    primary: "bg-ebano text-cru hover:bg-terra",
    secondary: "bg-dourado text-ebano hover:bg-cru",
    outline: "bg-transparent border border-dourado text-dourado hover:bg-cru/10",
    terra: "bg-terra text-white hover:bg-ebano",
  }

  return (
    <button className={`${estiloBase} ${variants[variant]} ${className}`} {...props}>
      {text}
    </button>
  );
}
