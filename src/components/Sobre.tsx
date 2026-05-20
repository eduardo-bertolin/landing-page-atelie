import Costura from "../assets/images/costura.png";


export default function Sobre() {
    return (
        <section id="sobre" className="bg-green-500 w-full min-h-[calc(100vh-var(--nav-height))] flex items-center justify-center bg-[var(--color-cru)]">
            <div className="container">
                <div className=" bg-red-500 grid grid-cols-1 xl:grid-cols-2 items-stretch justify-between w-full ">
                    <div className="order-1 xl:col-start-2 flex flex-col justify-start items-start ">
                        <h2 className="font-serif text-3xl xl:text-5xl">A paixão pelo</h2>
                        <p className="font-serif font-light italic text-3xl xl:text-5xl">detalhe invisível.</p>
                    </div>
                    <div className="order-2 xl:col-start-1 xl:row-start-1 xl-row-span-2 w-full h-[50vh] xl:h-auto overflow-hidden">
                        <img src={Costura} alt="Sobre a costura" className="w-full h-full object-cover" />
                    </div>

                </div>
            </div>
        </section>
    )
}