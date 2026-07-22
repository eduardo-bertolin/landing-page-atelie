import { motion } from "framer-motion";
import { FaScissors } from "react-icons/fa6";
import CosturaImg from "../assets/images/costura.webp";

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="section-y relative overflow-hidden"
      data-testid="sobre-section"
    >
      <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-6 order-2 lg:order-1"
        >
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border border-[color:var(--color-terracotta)]/30 rounded-[2rem]" />
            <div className="relative rounded-[2rem] overflow-hidden shadow-[0_40px_80px_-30px_rgba(44,36,33,0.25)]">
              <img
                src={CosturaImg}
                alt="Tatiana Bertolin, fundadora do Ateliê Tati"
                loading="lazy"
                decoding="async"
                width={600}
                height={520}
                className="w-full h-[520px] object-cover"
              />
            </div>

            {/* Signature block */}
            <div className="absolute -bottom-6 right-4 md:right-8 flex items-center gap-4 px-5 py-4 rounded-2xl bg-[color:var(--color-cream)] border border-[color:var(--color-border)] shadow-xl">
              <div className="w-12 h-12 rounded-full bg-[color:var(--color-terracotta)]/10 grid place-items-center text-[color:var(--color-terracotta)]">
                <FaScissors size={18} />
              </div>
              <div>
                <p className="font-serif italic text-xl leading-none text-[color:var(--color-ink)]">Tatiana Bertolin</p>
                <p className="text-[0.65rem] tracking-[0.28em] uppercase text-[color:var(--color-muted)] mt-1">
                  Fundadora & Artesã
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
          className="lg:col-span-6 order-1 lg:order-2 flex flex-col gap-6"
        >
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
            }}
            className="eyebrow flex items-center gap-3"
          >
            <span className="divider-line" />
            Nossa história
          </motion.span>

          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-[color:var(--color-ink)]"
          >
            A paixão pelo{" "}
            <span className="italic font-light bg-gradient-to-r from-[color:var(--color-terracotta)] to-[color:var(--color-gold)] bg-clip-text text-transparent">
              detalhe invisível.
            </span>
          </motion.h2>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
            }}
            className="font-serif text-xl md:text-[1.35rem] leading-relaxed text-[color:var(--color-ink-soft)]"
          >
            Fundado pela mestra artesã <em>Tatiana Bertolin</em>, o ateliê nasceu do desejo de resgatar a
            elegância da costura tradicional em um mundo de moda rápida. Cada peça é o resultado de horas
            de dedicação, escolha meticulosa de fios e um olhar atento à harmonia das formas.
          </motion.p>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
            }}
            className="text-base md:text-lg leading-relaxed text-[color:var(--color-ink-soft)]"
          >
            Acreditamos que uma peça feita à mão carrega consigo uma história, uma energia e um cuidado
            que a produção em massa não consegue replicar. Trabalhamos em pequena escala, garantindo que
            cada detalhe seja perfeito.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
            }}
            className="grid grid-cols-3 gap-4 pt-4"
          >
            {["Costura autoral", "Patchwork único", "Acabamento fino"].map((tag) => (
              <div
                key={tag}
                className="rounded-2xl border border-[color:var(--color-border)] bg-white/60 backdrop-blur-sm px-4 py-3 text-center"
              >
                <span className="font-serif italic text-[color:var(--color-terracotta)] text-lg">{tag}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
