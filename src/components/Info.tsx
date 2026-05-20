export default function Info() {
    return (
        <section id="informacoes" className="xl:flex w-full h-auto bg-[var(--color-cru)] border-b-20 border-red-500">
            <div className="container flex justify-between my-3 px-10">
                <div className="flex gap-2 flex-col items-center">
                    <span className="font-serif text-2xl xl:text-5xl text-terra">12+</span>
                    <span className="text-base xl:text-xl font-jost text-grafite text-center uppercase">anos de experiência</span>
                </div>
                <div className="flex gap-2 flex-col items-center">
                    <span className="font-serif text-2xl xl:text-5xl text-terra">450+</span>
                    <span className="text-base xl:text-xl font-jost text-grafite text-center uppercase">clientes satisfeitas</span>
                </div>
                <div className="flex gap-2 flex-col items-center">
                    <span className="font-serif text-2xl xl:text-5xl text-terra ">100%</span>
                    <span className="text-base xl:text-xl font-jost text-grafite text-center uppercase">autoral</span>
                </div>
                <div className="flex gap-2 flex-col items-center">
                    <span className="font-serif text-2xl xl:text-5xl text-terra">1200+</span>
                    <span className="text-base xl:text-xl font-jost text-grafite text-center uppercase">peças entregues</span>
                </div>

            </div>
        </section>
    )
}