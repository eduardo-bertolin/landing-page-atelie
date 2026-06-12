import Costura from "../assets/images/costura.png";
import Maquina from "../assets/maquina.svg";

export default function Sobre() {
    return (
        <section id="sobre" className="w-full section-h flex items-center justify-center">
            <div className="container">
                <div className="grid grid-cols-1 xl:grid-cols-2 items-stretch gap-12 py-12 w-full">
                    <div className="order-1 xl:col-start-2 flex flex-col items-start">
                        <h2 className="font-serif text-3xl xl:text-5xl text-ebano flex flex-col items-start">
                            <span>A paixão pelo</span>
                        </h2>
                        <p className="font-serif font-light italic text-ebano text-3xl xl:text-5xl">detalhe invisível.</p>
                    </div>
                    <div className="order-2 xl:col-start-1 xl:row-start-1 xl:row-span-2 w-full h-[50vh] xl:h-auto overflow-hidden">
                        <img src={Costura} alt="Sobre a costura" className="w-full h-full object-cover" />
                    </div>

                    <div className="order-3 xl:col-start-2 xl:row-start-2 flex flex-col justify-center gap-12">
                        <p className="font-cormorant font-semibold text-ebano text-xl">Fundada pela mestra artesã Tatiana Bertolin, o ateliê nasceu do desejo de resgatar a elegância da costura tradicional em um mundo de moda rápida. Cada peça que sai de nossas mãos é o resultado de horas de dedicação, escolha meticulosa de fios e um olhar atento à harmonia das formas.</p>
                        <p className="font-cormorant font-semibold text-ebano text-xl">Acreditamos que uma peça feita à mão carrega consigo uma história, uma energia e um cuidado que a produção em massa não consegue replicar. Por isso, trabalhamos em pequena escala, garantindo que cada detalhe seja perfeito.</p>
                        <div className="flex flex-col gap-2">
                            <div className="bg-cru-border w-18 h-18 rounded-lg flex items-center justify-center">
                                <img src={Maquina} alt="Máquina de costura" className="flex w-full h-full scale-70" />
                            </div>
                            <p className="text-sm font-jost font-bold text-ebano uppercase pt-3">Tatiana Bertolin - Fundadora e Artesã</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}