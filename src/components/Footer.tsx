import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa6";
import Logo from "./Logo";

const SOCIALS = [
  { icon: FaInstagram, label: "@atelietatibertolin", href: "https://www.instagram.com/atelietatibertolin/", hover: "hover:text-[#E1306C] hover:border-[#E1306C]" },
  { icon: FaFacebook, label: "/atelietatibertolin", href: "https://www.facebook.com/atelietatibertolin/", hover: "hover:text-[#1877F2] hover:border-[#1877F2]" },
  { icon: FaYoutube, label: "/atelietatibertolin", href: "https://www.youtube.com/channel/UCZYuZOcvh9gY5lCuft8Thng", hover: "hover:text-[#FF0000] hover:border-[#FF0000]" },
];

const LINKS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Depoimentos", href: "#avaliacoes" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[color:var(--color-cream)] border-t border-[color:var(--color-border)] pt-16 pb-8" data-testid="site-footer">
      <div className="container-x grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
        {/* brand col */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-2 flex flex-col gap-4 max-w-md"
        >
          <Logo />
          <p className="text-[color:var(--color-ink-soft)] text-[0.95rem] leading-relaxed">
            Peças feitas à mão com todo cuidado e carinho. Transformando tecidos em itens únicos que
            carregam história em cada detalhe.
          </p>
          <div className="flex gap-3 mt-2">
            {SOCIALS.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                data-testid={`footer-social-${s.label.slice(1, 5)}`}
                className={`w-11 h-11 grid place-items-center rounded-full border border-[color:var(--color-border)] text-[color:var(--color-ink-soft)] transition-all duration-300 hover:-translate-y-1 ${s.hover}`}
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* nav col */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-col gap-4"
        >
          <p className="text-[0.7rem] tracking-[0.3em] uppercase text-[color:var(--color-terracotta)] font-medium">
            Navegação
          </p>
          <ul className="flex flex-col gap-3">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="link-underline text-[color:var(--color-ink)] hover:text-[color:var(--color-terracotta)] transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* contact col */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col gap-4"
        >
          <p className="text-[0.7rem] tracking-[0.3em] uppercase text-[color:var(--color-terracotta)] font-medium">
            Atendimento
          </p>
          <div className="flex flex-col gap-3 text-[color:var(--color-ink-soft)] text-[0.95rem]">
            <span>(45) 98815-7023</span>
            <span>atelietatibertolin@hotmail.com</span>
            <span>Cascavel — PR</span>
            <span>Seg — Sex · 08h às 18h</span>
          </div>
        </motion.div>
      </div>

      <div className="container-x mt-14 pt-6 border-t border-[color:var(--color-border)] flex flex-col md:flex-row gap-3 items-center justify-between">
        <p className="font-sans text-xs text-[color:var(--color-muted)] tracking-[0.24em] uppercase">
          © {new Date().getFullYear()} Ateliê Tati Bertolin — Todos os direitos reservados.
        </p>
        <p className="font-serif italic text-[color:var(--color-muted)] text-sm">
          Feito à mão com <span className="text-[color:var(--color-terracotta)]">♥</span> em Cascavel/PR
        </p>
      </div>
    </footer>
  );
}
