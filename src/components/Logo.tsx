import LogoAtelie from "../assets/images/LogoAtelie.png";

export default function Logo() {
    return (
        <div className="flex items-center gap-2">
            <img src={LogoAtelie} alt="Logo Atelie Tati" width={90} height={90} className="scale-[1]" />
            <span className="font-cormorant font-bold text-ebano text-xl uppercase">Ateliê Tati Bertolin</span>
        </div>
    )
}