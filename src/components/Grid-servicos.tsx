import type { IconType } from "react-icons";
import { motion } from "framer-motion";

interface GridServicosProps {
  icon: IconType;
  title: string;
  description: string;
  index?: number;
}

export default function GridServicos({ icon: Icon, title, description, index = 0 }: GridServicosProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="group relative p-8 rounded-2xl border border-[color:var(--color-gold)]/20 bg-[color:var(--color-ink)]/40 backdrop-blur-sm overflow-hidden transition-[background-color,border-color,box-shadow] duration-500 hover:border-[color:var(--color-gold)]/50 hover:bg-[color:var(--color-ink)]/60 hover:shadow-[0_30px_60px_-30px_rgba(201,165,92,0.35)]"
      data-testid={`service-card-${title.toLowerCase().replace(/\s|\W/g, "-")}`}
    >
      <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-[color:var(--color-terracotta)]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      <div className="relative flex flex-col gap-5">
        <div className="w-14 h-14 rounded-full grid place-items-center bg-[color:var(--color-gold)]/10 border border-[color:var(--color-gold)]/30 text-[color:var(--color-gold)] transition-transform duration-500 group-hover:rotate-[8deg] group-hover:scale-110">
          <Icon size={22} />
        </div>

        <h3 className="font-serif text-2xl md:text-[1.7rem] leading-tight text-[color:var(--color-cream)]">
          {title}
        </h3>

        <p className="font-sans text-[0.95rem] leading-relaxed text-[color:var(--color-cream)]/70">
          {description}
        </p>

        <div className="pt-2 flex items-center gap-2 text-[0.7rem] tracking-[0.28em] uppercase text-[color:var(--color-gold)]/70 group-hover:text-[color:var(--color-gold)] transition-colors">
          <span className="w-6 h-px bg-current transition-all duration-500 group-hover:w-10" />
          Sob encomenda
        </div>
      </div>
    </motion.article>
  );
}
