import Logo from "./Logo";

export default function Footer() {
    return (
        <section id="footer" className="bg-red-500 w-full h-auto py-20 flex flex-col items-center">
            <div className="flex flex-row gap-5 w-full">
                <div className="bg-green-500 flex flex-col w-full h-auto items-center justify-center">
                    <Logo />
                    <span>Peças feitas à mão com todo cuidado e carinho. Transformando tecidos em itens únicos que carregam história em cada detalhe.</span>
                </div>
                <div className="bg-green-500 flex flex-col w-full h-auto items-center justify-center">

                </div>
                <div className="bg-green-500 flex flex-col w-full h-auto items-center justify-center"><h1>c</h1></div>
                <div className="bg-green-500 flex flex-col w-full h-auto items-center justify-center"><h1>d</h1></div>
            </div>
        </section>
    )
}
