import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaXmark, FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import Prod1 from "../assets/images/bolsa_terra.webp";
import Prod2 from "../assets/images/bolsa_terra2.webp";
import Prod3 from "../assets/images/bolsa_terra3.webp";
import Prod4 from "../assets/images/bolsa_terra4.webp";
import Prod5 from "../assets/images/bolsa_terra5.webp";
import Prod6 from "../assets/images/camiseta_logo.webp";
import Prod7 from "../assets/images/bolsa_azul.webp";
import Prod8 from "../assets/images/bolsa_azul2.webp";
import Prod9 from "../assets/images/bolsa_azul3.webp";
import Prod10 from "../assets/images/bolsa_azul4.webp";
import Prod11 from "../assets/images/bolsa_azul5.webp";
import Prod12 from "../assets/images/bolsa_azul6.webp";
import Prod13 from "../assets/images/saia_festaj.webp";
import Prod14 from "../assets/images/saia_festaj2.webp";
import Prod15 from "../assets/images/saia_festaj3.webp";
import Prod16 from "../assets/images/saia_festaj4.webp";

type Card = {
  id: number;
  titulo: string;
  categoria: string;
  image: string;
  alt: string;
};

const CARDS: Card[] = [
  { id: 1, titulo: "Bolsa transversal terra", categoria: "Bolsas", image: Prod1, alt: "Bolsa transversal terra" },
  { id: 2, titulo: "Detalhe em patchwork", categoria: "Bolsas", image: Prod2, alt: "Bolsa transversal terra" },
  { id: 3, titulo: "Alça e acabamento", categoria: "Bolsas", image: Prod3, alt: "Bolsa transversal terra" },
  { id: 4, titulo: "Composição de tecidos", categoria: "Bolsas", image: Prod4, alt: "Bolsa transversal terra" },
  { id: 5, titulo: "Bolsa terra — costas", categoria: "Bolsas", image: Prod5, alt: "Bolsa transversal terra" },
  { id: 6, titulo: "Logo bordado à mão", categoria: "Bordados", image: Prod6, alt: "Camiseta com logo costurado" },
  { id: 7, titulo: "Bolsa transversal azul", categoria: "Bolsas", image: Prod7, alt: "Bolsa transversal azul" },
  { id: 8, titulo: "Detalhes em tecido", categoria: "Bolsas", image: Prod8, alt: "Bolsa transversal azul" },
  { id: 9, titulo: "Bolso frontal", categoria: "Bolsas", image: Prod9, alt: "Bolsa transversal azul" },
  { id: 10, titulo: "Fecho artesanal", categoria: "Bolsas", image: Prod10, alt: "Bolsa transversal azul" },
  { id: 11, titulo: "Costura reforçada", categoria: "Bolsas", image: Prod11, alt: "Bolsa transversal azul" },
  { id: 12, titulo: "Bolsa azul finalizada", categoria: "Bolsas", image: Prod12, alt: "Bolsa transversal azul" },
  { id: 13, titulo: "Saia colorida festa junina", categoria: "Vestuário", image: Prod13, alt: "Saia colorida festa junina" },
  { id: 14, titulo: "Estampas tradicionais", categoria: "Vestuário", image: Prod14, alt: "Saia colorida festa junina" },
  { id: 15, titulo: "Composição de babados", categoria: "Vestuário", image: Prod15, alt: "Saia colorida festa junina" },
  { id: 16, titulo: "Peça finalizada", categoria: "Vestuário", image: Prod16, alt: "Saia colorida festa junina" },
];

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const startScroll = useRef(0);
  const isHovered = useRef(false);
  const rafId = useRef<number | null>(null);

  // Auto-scroll (marquee-like)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let last = performance.now();
    let half = el.scrollWidth / 2;

    const updateHalf = () => {
      if (el) half = el.scrollWidth / 2;
    };
    window.addEventListener("resize", updateHalf);

    const step = (now: number) => {
      const dt = now - last;
      last = now;
      if (!isHovered.current && !isDragging) {
        el.scrollLeft += (dt / 16) * 0.6;
        if (half > 0 && el.scrollLeft >= half) {
          el.scrollLeft -= half;
        }
      }
      rafId.current = requestAnimationFrame(step);
    };
    rafId.current = requestAnimationFrame(step);
    return () => {
      window.removeEventListener("resize", updateHalf);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isDragging]);

  const onMouseDown = (e: React.MouseEvent) => {
    const el = containerRef.current;
    if (!el) return;
    setIsDragging(true);
    startX.current = e.pageX;
    startScroll.current = el.scrollLeft;
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const delta = e.pageX - startX.current;
    containerRef.current.scrollLeft = startScroll.current - delta * 1.4;
  };
  const stopDrag = () => setIsDragging(false);

  const duplicated = [...CARDS, ...CARDS];

  const next = () => setOpenIndex((i) => (i === null ? null : (i + 1) % CARDS.length));
  const prev = () => setOpenIndex((i) => (i === null ? null : (i - 1 + CARDS.length) % CARDS.length));

  useEffect(() => {
    if (openIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [openIndex]);

  return (
    <section
      id="portfolio"
      className="section-y overflow-hidden"
      data-testid="portfolio-section"
    >
      <div className="container-x flex flex-col lg:flex-row justify-between lg:items-end gap-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-3"
        >
          <span className="eyebrow flex items-center gap-3">
            <span className="divider-line" />
            Nossa galeria
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-[color:var(--color-ink)]">
            Peças{" "}
            <span className="italic font-light bg-gradient-to-r from-[color:var(--color-terracotta)] to-[color:var(--color-gold)] bg-clip-text text-transparent">
              Icônicas
            </span>
          </h2>
        </motion.div>
        <p className="hidden lg:block max-w-sm text-[color:var(--color-ink-soft)] text-sm leading-relaxed">
          Arraste para navegar em nossas criações recentes. Clique em qualquer peça para ver em detalhes.
        </p>
      </div>

      <div
        ref={containerRef}
        onMouseEnter={() => (isHovered.current = true)}
        onMouseLeave={() => {
          isHovered.current = false;
          stopDrag();
        }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={stopDrag}
        onTouchStart={() => (isHovered.current = true)}
        onTouchEnd={() => (isHovered.current = false)}
        className={`flex gap-4 md:gap-5 overflow-x-auto scrollbar-none py-4 px-6 md:px-10 select-none ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        data-testid="portfolio-carousel"
      >
        {duplicated.map((card, i) => (
          <button
            key={i}
            onClick={() => !isDragging && setOpenIndex(card.id - 1)}
            className="group relative shrink-0 w-[62vw] sm:w-[300px] lg:w-[360px] rounded-2xl overflow-hidden bg-[color:var(--color-sand)] shadow-[0_20px_50px_-25px_rgba(44,36,33,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-terracotta)]"
            data-testid={`portfolio-card-${card.id}`}
          >
            <div className="relative w-full h-[420px] lg:h-[480px] overflow-hidden">
              <img
                src={card.image}
                alt={card.alt}
                loading="lazy"
                decoding="async"
                width={360}
                height={480}
                draggable={false}
                onDragStart={(e) => e.preventDefault()}
                className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.08]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-ink)]/85 via-[color:var(--color-ink)]/10 to-transparent opacity-90" />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/85 backdrop-blur-sm text-[0.62rem] tracking-[0.25em] uppercase text-[color:var(--color-ink)]">
                {card.categoria}
              </span>
              <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                <h3 className="font-serif italic text-2xl text-[color:var(--color-cream)] leading-tight max-w-[70%] text-left">
                  {card.titulo}
                </h3>
                <span className="w-10 h-10 rounded-full bg-[color:var(--color-cream)] text-[color:var(--color-terracotta)] grid place-items-center translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <FaArrowRight size={12} />
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {openIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4"
            data-testid="portfolio-lightbox"
          >
            <div
              className="absolute inset-0 bg-[color:var(--color-ink)]/90 backdrop-blur-md"
              onClick={() => setOpenIndex(null)}
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 w-full max-w-4xl grid grid-cols-1 md:grid-cols-5 gap-0 bg-[color:var(--color-cream)] rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="md:col-span-3 h-[300px] md:h-[560px]">
                <img
                  src={CARDS[openIndex].image}
                  alt={CARDS[openIndex].alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:col-span-2 p-6 md:p-8 flex flex-col gap-6">
                <span className="eyebrow">{CARDS[openIndex].categoria}</span>
                <h3 className="font-serif text-3xl md:text-4xl leading-tight text-[color:var(--color-ink)]">
                  {CARDS[openIndex].titulo}
                </h3>
                <p className="text-[color:var(--color-ink-soft)] leading-relaxed">
                  Peça exclusiva do Ateliê Tati Bertolin. Cada detalhe é costurado à mão com tecidos
                  selecionados e acabamento minucioso. Encomende uma versão personalizada para você.
                </p>
                <div className="flex items-center gap-3 mt-auto pt-4">
                  <button
                    onClick={prev}
                    className="w-12 h-12 rounded-full border border-[color:var(--color-border)] hover:border-[color:var(--color-terracotta)] hover:text-[color:var(--color-terracotta)] grid place-items-center transition-colors"
                    data-testid="lightbox-prev"
                  >
                    <FaArrowLeft size={14} />
                  </button>
                  <button
                    onClick={next}
                    className="w-12 h-12 rounded-full border border-[color:var(--color-border)] hover:border-[color:var(--color-terracotta)] hover:text-[color:var(--color-terracotta)] grid place-items-center transition-colors"
                    data-testid="lightbox-next"
                  >
                    <FaArrowRight size={14} />
                  </button>
                  <a
                    href="#contato"
                    onClick={() => setOpenIndex(null)}
                    className="ml-auto text-[0.72rem] tracking-[0.24em] uppercase text-[color:var(--color-terracotta)] link-underline"
                  >
                    Encomendar peça
                  </a>
                </div>
              </div>
              <button
                onClick={() => setOpenIndex(null)}
                className="absolute top-3 right-3 w-10 h-10 rounded-full bg-[color:var(--color-ink)] text-[color:var(--color-cream)] grid place-items-center hover:bg-[color:var(--color-terracotta)] transition-colors"
                data-testid="lightbox-close"
                aria-label="Fechar"
              >
                <FaXmark size={14} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
