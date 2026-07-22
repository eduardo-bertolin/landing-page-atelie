import { motion } from "framer-motion";
import GridAvaliacoes from "./Grid-avaliacoes";

const AVALIACOES = [
  {
    stars: 5,
    comment: "Encomendei uma bolsa personalizada e superou todas as expectativas. Acabamento perfeito e cada detalhe pensado.",
    name: "Camila Rocha",
    profession: "Cliente — Cascavel/PR",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzB8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwYXZhdGFyfGVufDB8fHx8MTc4NDczNzM1M3ww&ixlib=rb-4.1.0&q=85",
  },
  {
    stars: 5,
    comment: "Tati é maravilhosa! As peças são delicadas, de qualidade e feitas com muito carinho. Já sou cliente há anos.",
    name: "Maria Helena",
    profession: "Cliente fiel",
    image: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzB8MHwxfHNlYXJjaHwyfHx3b21hbiUyMHBvcnRyYWl0JTIwYXZhdGFyfGVufDB8fHx8MTc4NDczNzM1M3ww&ixlib=rb-4.1.0&q=85",
  },
  {
    stars: 5,
    comment: "Fizemos um lote de kits presenteáveis para nossa empresa. Qualidade impecável e prazo respeitado.",
    name: "Marina Vieira",
    profession: "Empreendedora",
    image: "https://images.pexels.com/photos/17275807/pexels-photo-17275807.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

export default function Avaliacoes() {
  return (
    <section
      id="avaliacoes"
      className="section-y bg-[color:var(--color-sand)] relative overflow-hidden"
      data-testid="avaliacoes-section"
    >
      <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-[color:var(--color-terracotta)]/8 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-[color:var(--color-gold)]/10 blur-3xl" />

      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center flex flex-col items-center gap-4 mb-14"
        >
          <span className="eyebrow flex items-center gap-3">
            <span className="divider-line" />
            Depoimentos
            <span className="divider-line" />
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-[color:var(--color-ink)]">
            Quem confia,{" "}
            <span className="italic font-light bg-gradient-to-r from-[color:var(--color-terracotta)] to-[color:var(--color-gold)] bg-clip-text text-transparent">
              se apaixona.
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AVALIACOES.map((a, i) => (
            <GridAvaliacoes key={i} {...a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
