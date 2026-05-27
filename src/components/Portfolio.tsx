export default function Portfolio() {
    return (
        <section id="portfolio" className="w-full section-h flex items-top py-10">
            <div className="container flex flex-row justify-between items-center">
                <div className="flex flex-col items-start">
                    <span className="font-jont font-bold text-sm text-terra tracking-[0.375rem] uppercase">Nossa galeria</span>
                    <h2 className="font-serif text-3xl xl:text-5xl text-ebano flex flex-row gap-2 items-start">
                        <span>Peças</span>
                        <span className="font-serif font-light italic text-3xl xl:text-5xl text-terra">Icônicas</span>
                    </h2>
                </div>
                <span className="font-jont text-lg text-grafite">Arraste para navegar em nossas criações recentes</span>

            </div>

        </section>
    )
}