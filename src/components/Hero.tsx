import { motion, type Variants } from "framer-motion";
import { FaScissors } from "react-icons/fa6";
import { FaHandHoldingHeart, FaStar } from "react-icons/fa";
import Button from "./Button";

const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-32 md:pt-40 pb-20 md:pb-28 w-full"
      data-testid="hero-section"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--color-cream)] via-[color:var(--color-sand)] to-[color:var(--color-cream)]" />
        <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-[color:var(--color-terracotta)]/10 blur-3xl animate-orbit" />
        <div className="absolute -bottom-24 -right-16 w-[380px] h-[380px] rounded-full bg-[color:var(--color-gold)]/15 blur-3xl animate-orbit" style={{ animationDelay: "-6s" }} />
      </div>

      <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="lg:col-span-6 flex flex-col gap-8"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 text-[color:var(--color-terracotta)]">
            <span className="divider-line" />
            <span className="eyebrow">Ateliê de Patchwork · Desde 2013</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.02] tracking-tight text-[color:var(--color-ink)]"
          >
            Feito à mão,
            <br />
            com{" "}
            <span className="italic font-light bg-gradient-to-r from-[color:var(--color-terracotta)] via-[color:var(--color-terracotta-soft)] to-[color:var(--color-gold)] bg-clip-text text-transparent">
              propósito.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="font-serif italic text-2xl md:text-[1.7rem] leading-relaxed text-[color:var(--color-ink-soft)] max-w-xl"
          >
            Costura artesanal, patchwork autoral e peças únicas para quem acredita que
            <span className="text-[color:var(--color-terracotta)] not-italic font-sans text-lg tracking-widest uppercase mx-2">
              cada detalhe importa.
            </span>
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3 md:gap-4">
            <Button text="Ver a galeria" variant="primary" href="#portfolio" testId="hero-cta-primary" />
            <Button text="Conhecer o ateliê" variant="outline" href="#sobre" testId="hero-cta-secondary" />
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-5 pt-6">
            {[
              { icon: <FaScissors />, label: "Feito à mão" },
              { icon: <FaHandHoldingHeart />, label: "Exclusivo" },
              { icon: <FaStar />, label: "12+ anos" },
            ].map((b) => (
              <div
                key={b.label}
                className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/70 backdrop-blur-md border border-[color:var(--color-border)] text-[color:var(--color-ink-soft)]"
                data-testid={`hero-badge-${b.label.toLowerCase().replace(/\s|\+/g, "-")}`}
              >
                <span className="text-[color:var(--color-terracotta)] text-sm">{b.icon}</span>
                <span className="text-[0.72rem] font-medium tracking-[0.22em] uppercase">{b.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Hero visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="lg:col-span-6 relative"
        >
          <div className="relative mx-auto max-w-[560px] aspect-[4/5]">
            {/* Frame accents */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-l-2 border-t-2 border-[color:var(--color-terracotta)]/50 rounded-tl-3xl" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-r-2 border-b-2 border-[color:var(--color-gold)]/60 rounded-br-3xl" />

            {/* Floating image */}
            <motion.div
              className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-[0_40px_80px_-30px_rgba(44,36,33,0.35)] animate-floaty"
            >
              <img
                src="/images/costura.webp"
                alt="Costura artesanal do Ateliê Tati Bertolin"
                loading="eager"
                // @ts-ignore
                fetchpriority="high"
                decoding="async"
                width={560}
                height={700}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-ink)]/40 via-transparent to-transparent" />
            </motion.div>

            {/* Floating info card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.7 }}
              className="absolute -bottom-8 left-6 md:-left-8 flex items-center gap-4 px-5 py-4 rounded-2xl bg-white/90 backdrop-blur-xl border border-white/60 shadow-[0_20px_50px_-20px_rgba(184,92,56,0.35)]"
            >
              <div className="w-11 h-11 rounded-full bg-[color:var(--color-terracotta)]/10 grid place-items-center text-[color:var(--color-terracotta)]">
                <FaHandHoldingHeart size={18} />
              </div>
              <div>
                <p className="font-serif italic text-lg leading-none text-[color:var(--color-ink)]">450+ clientes</p>
                <p className="text-[0.65rem] tracking-[0.28em] uppercase text-[color:var(--color-muted)] mt-1">
                  Encantadas com nossas peças
                </p>
              </div>
            </motion.div>

            {/* Rating chip */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.7 }}
              className="absolute -top-6 right-4 md:-right-6 px-4 py-3 rounded-2xl bg-[color:var(--color-ink)] text-[color:var(--color-cream)] border border-[color:var(--color-gold)]/40 shadow-xl"
            >
              <div className="flex gap-0.5 mb-1 text-[color:var(--color-gold)]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} size={10} />
                ))}
              </div>
              <p className="text-[0.65rem] tracking-[0.24em] uppercase">Nota 5.0 · Instagram</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
