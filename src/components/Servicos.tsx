import { FaRuler, FaCut, FaShoppingBag, FaGift, FaTruck, } from "react-icons/fa";
import { MdOutlineGrid4X4 } from "react-icons/md";
import GridServicos from "./Grid-servicos";


export default function Servicos() {
    return (
        <section id="servicos" className="bg-ebano w-full section-h flex items-center ">
            <div className="container flex flex-col items-center py-6 xl:py-0">

                <div className="flex flex-col items-center text-center gap-2 pb-6">
                    <span className="font-jont color-dourado font-bold text-sm tracking-[0.375rem] uppercase">Nossas especialidades</span>
                    <h2 className="justify-center items-center font-serif color-cru font-bold text-5xl">
                        <span>Serviços{" "}</span>
                        <span className="font-cormorant color-dourado font-light text-5xl italic">Exclusivos</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full h-auto">
                    <GridServicos icon={FaRuler} title="Criação sob medida" description="Encomende exatamente o que você precisa. Trabalhamos com costura e patchwork em qualquer projeto — você define o modelo, o tecido, as cores e os detalhes, e nós executamos com precisão e acabamento profissional." />
                    <GridServicos icon={FaCut} title="Peças customizadas" description="Traga sua referência ou ideia e a gente concretiza. Escolha estampas, cores e materiais para uma peça com a sua cara — do início ao fim." />
                    <GridServicos icon={MdOutlineGrid4X4} title="Patchwork Artesanal" description="Técnica tradicional com resultado moderno. Criamos peças únicas combinando tecidos, texturas e cores com composição cuidadosa e acabamento impecável" />
                    <GridServicos icon={FaShoppingBag} title="Capas & Estojos" description="Proteção com estilo. Capas para notebook, tablet e livros, estojos e necessaires com estrutura pensada para o dia a dia e estética que combina com você." />
                    <GridServicos icon={FaGift} title="Kits Presenteáveis" description="A escolha certa para presentear. Kits coordenados e embalados, ideais para datas especiais, chás, madrinheiras e encomendas corporativas." />
                    <GridServicos icon={FaTruck} title="Encomendas em Lote" description="Produções para revendas, eventos e empresas. Lotes personalizados com identidade visual da sua marca aplicada em cada peça, com prazo e qualidade garantidos." />
                </div>
            </div>
        </section>
    )
}