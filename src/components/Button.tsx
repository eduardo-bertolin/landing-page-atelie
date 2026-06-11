import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type IButtonProps = {
  text: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'terra' | 'submit';
  href?: string;
  target?: string;
} & ButtonHTMLAttributes<HTMLButtonElement> & AnchorHTMLAttributes<HTMLAnchorElement>;

export default function Button({ text, variant = 'primary', className = "", href, ...props }: IButtonProps) {
  // Adicionado 'inline-flex justify-center items-center' para garantir que a tag 'a' se comporte visualmente igual a um 'button'
  const estiloBase = "inline-flex justify-center items-center w-full font-medium text-lg py-3 px-6 rounded-[0.1rem] cursor-pointer transition-colors active:scale-97 transition-transform disabled:opacity-70 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-ebano hover:!bg-terra text-cru",
    secondary: "bg-dourado text-ebano hover:bg-cru",
    outline: "bg-transparent border border-dourado text-dourado hover:bg-cru/10",
    terra: "bg-terra text-white hover:bg-ebano",
    submit: "bg-terra text-white font-jont font-bold uppercase tracking-wider hover:bg-ebano py-4",
  };

  const finalClassName = `${estiloBase} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={finalClassName} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {text}
      </a>
    );
  }

  return (
    <button className={finalClassName} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {text}
    </button>
  );
}
