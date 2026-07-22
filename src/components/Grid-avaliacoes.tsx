import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

interface GridAvaliacoesProps {
  stars: number;
  comment: string;
  name: string;
  profession: string;
  image: string;
  index?: number;
}

export default function GridAvaliacoes({
  stars,
  comment,
  name,
  profession,
  image,
  index = 0,
}: GridAvaliacoesProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="relative flex flex-col gap-6 p-8 rounded-2xl bg-white/70 backdrop-blur-md border border-[color:var(--color-border)] shadow-[0_20px_50px_-25px_rgba(184,92,56,0.15)] transition-shadow duration-500 hover:shadow-[0_30px_60px_-25px_rgba(184,92,56,0.25)]"
      data-testid={`testimonial-card-${index}`}
    >
      <FaQuoteLeft className="absolute top-6 right-6 text-[color:var(--color-terracotta)]/15" size={40} />

      <div className="flex gap-1">
        {Array.from({ length: stars }).map((_, i) => (
          <motion.span
            key={i}
            initial={{ scale: 0, rotate: -30 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12 + i * 0.08, duration: 0.5, type: "spring", stiffness: 260 }}
            className="text-[color:var(--color-gold)]"
          >
            <FaStar size={16} />
          </motion.span>
        ))}
      </div>

      <p className="font-serif italic text-xl md:text-2xl leading-relaxed text-[color:var(--color-ink)]">
        {comment}
      </p>

      <div className="flex items-center gap-3 mt-auto pt-4 border-t border-[color:var(--color-border)]">
        <div className="relative">
          <img
            src={image}
            alt={`Foto de ${name}`}
            className="h-12 w-12 rounded-full object-cover border-2 border-[color:var(--color-gold)]/50"
          />
        </div>
        <div className="flex flex-col leading-tight">
          <span className="font-sans text-sm font-medium tracking-wider uppercase text-[color:var(--color-ink)]">
            {name}
          </span>
          <span className="font-sans text-xs text-[color:var(--color-muted)]">{profession}</span>
        </div>
      </div>
    </motion.article>
  );
}
