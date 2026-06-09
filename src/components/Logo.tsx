import Maquina from "../assets/maquina.svg";

export default function Logo() {
    return (
        <div className="flex justify-center items-center gap-1">
            <img src={Maquina} alt="Logo Atelie Tati" width={70} height={70} className="scale-[1.8]" />
            <div className="flex flex-col">
                <span className="font-cormorant font-bold text-ebano text-xl uppercase">Ateliê Tati Bertolin</span>
            </div>
        </div>
    )
}