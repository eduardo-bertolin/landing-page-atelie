import GridInfo from "./Grid-info";
import Regua from "../assets/regua.svg";
import Ajustes from "../assets/ajustes.svg";

export default function Servicos() {
    return (
        <section id="servicos" className="bg-ebano w-full section-h flex items-center justify-center ">
            <div className="container flex flex-col items-center py-12">

                <div className="flex flex-col items-center text-center mb-12">
                    <span className="font-jont color-terra font-bold text-sm tracking-[0.375rem] uppercase">Nossas especialidades</span>
                    <div className="flex flex-row gap-3 justify-center items-center mt-2">
                        <h3 className="font-serif color-cru font-bold text-5xl">Serviços</h3>
                        <span className="font-cormorant color-terra font-light text-5xl italic">Exclusivos</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full h-auto">
                    <GridInfo icon={Regua} title="Criação sob medida" description="Encomende exatamente o que você precisa. Trabalhamos com costura e patchwork em qualquer projeto — você define o modelo, o tecido, as cores e os detalhes, e nós executamos com precisão e acabamento profissional." />
                    <GridInfo icon={Ajustes} title="Peças customizadas" description="Traga sua referência ou ideia e a gente concretiza. Escolha estampas, cores e materiais para uma peça com a sua cara — do início ao fim." />
                    <GridInfo icon={Ajustes} title="Patchwork Artesanal" description="Técnica tradicional com resultado moderno. Criamos peças únicas combinando tecidos, texturas e cores com composição cuidadosa e acabamento impecável" />
                    <GridInfo icon={Ajustes} title="Capas & Estojos" description="Proteção com estilo. Capas para notebook, tablet e livros, estojos e necessaires com estrutura pensada para o dia a dia e estética que combina com você." />
                    <GridInfo icon={Ajustes} title="Kits Presenteáveis" description="A escolha certa para presentear. Kits coordenados e embalados, ideais para datas especiais, chás, madrinheiras e encomendas corporativas." />
                    <GridInfo icon={Ajustes} title="Encomendas em Lote" description="Produções para revendas, eventos e empresas. Lotes personalizados com identidade visual da sua marca aplicada em cada peça, com prazo e qualidade garantidos." />
                </div>
            </div>
        </section>
    )
}