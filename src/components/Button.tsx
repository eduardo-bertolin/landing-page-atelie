
interface IButtonProps {
  text: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

export default function Button({ text, variant = 'primary' }: IButtonProps) {
  const estiloBase = "w-full font-medium text-lg py-3 px-6 rounded-[0.1rem] cursor-pointer transition-colors active:scale-97 transition-transform"

  const variants = {
    primary: "bg-ebano text-cru hover:bg-terra",
    secondary: "bg-dourado text-ebano hover:bg-cru",
    outline: "bg-transparent border border-dourado text-dourado hover:bg-cru/10",
  }
  return (
    <button className={`${estiloBase} ${variants[variant]}`}>
      {text}
    </button>
  );
}
