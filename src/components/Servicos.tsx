import { motion } from "framer-motion";
import { FaRuler, FaShoppingBag, FaGift, FaTruck } from "react-icons/fa";
import { FaScissors } from "react-icons/fa6";
import { MdOutlineGrid4X4 } from "react-icons/md";
import GridServicos from "./Grid-servicos";

const SERVICOS = [
  {
    icon: FaRuler,
    title: "Criação sob medida",
    description:
      "Encomende exatamente o que você precisa. Costura e patchwork em qualquer projeto — você define o modelo, o tecido, as cores e os detalhes, e nós executamos com precisão e acabamento profissional.",
  },
  {
    icon: FaScissors,
    title: "Peças customizadas",
    description:
      "Traga sua referência ou ideia e a gente concretiza. Escolha estampas, cores e materiais para uma peça com a sua cara — do início ao fim.",
  },
  {
    icon: MdOutlineGrid4X4,
    title: "Patchwork Artesanal",
    description:
      "Técnica tradicional com resultado moderno. Criamos peças únicas combinando tecidos, texturas e cores com composição cuidadosa e acabamento impecável.",
  },
  {
    icon: FaShoppingBag,
    title: "Capas & Estojos",
    description:
      "Proteção com estilo. Capas para notebook, tablet e livros, estojos e necessaires com estrutura pensada para o dia a dia e estética que combina com você.",
  },
  {
    icon: FaGift,
    title: "Kits Presenteáveis",
    description:
      "A escolha certa para presentear. Kits coordenados e embalados, ideais para datas especiais, chás, madrinheiras e encomendas corporativas.",
  },
  {
    icon: FaTruck,
    title: "Encomendas em Lote",
    description:
      "Produções para revendas, eventos e empresas. Lotes personalizados com identidade visual da sua marca aplicada em cada peça, com prazo e qualidade garantidos.",
  },
];

export default function Servicos() {
  return (
    <section
      id="servicos"
      className="relative section-y overflow-hidden bg-[color:var(--color-ink)] text-[color:var(--color-cream)] grain"
      data-testid="servicos-section"
    >
      {/* decorative */}
      <div className="absolute inset-0 -z-[1]">
        <div className="absolute top-20 -left-40 w-[500px] h-[500px] rounded-full bg-[color:var(--color-terracotta)]/20 blur-[120px]" />
        <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] rounded-full bg-[color:var(--color-gold)]/10 blur-[120px]" />
      </div>

      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center flex flex-col items-center gap-4 mb-16"
        >
          <span className="eyebrow !text-[color:var(--color-gold)] flex items-center gap-3">
            <span className="divider-line" />
            Nossas especialidades
            <span className="divider-line" />
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
            Serviços{" "}
            <span className="italic font-light text-[color:var(--color-gold)]">Exclusivos</span>
          </h2>
          <p className="text-[color:var(--color-cream)]/70 text-lg max-w-xl">
            Do primeiro esboço ao ponto final: cada projeto recebe atenção quase artesanal-obsessiva
            para nascer único.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {SERVICOS.map((s, i) => (
            <GridServicos key={s.title} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
