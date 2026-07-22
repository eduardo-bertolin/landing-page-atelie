import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import Button from "./Button";
import Logo from "./Logo";

const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#avaliacoes", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);
  const [activeId, setActiveId] = useState<string>("hero");

  // Scroll listener for header state + active section
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const ids = ["hero", "sobre", "servicos", "portfolio", "avaliacoes", "contato"];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveId(id);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body when mobile is open
  useEffect(() => {
    document.documentElement.style.overflow = openMobile ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [openMobile]);

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none"
        data-testid="site-header"
      >
        <nav
          className={`pointer-events-auto mt-3 md:mt-5 w-[94%] max-w-6xl transition-all duration-500 ease-out
          ${
            scrolled
              ? "bg-white/70 backdrop-blur-xl border border-white/60 shadow-[0_20px_50px_-25px_rgba(44,36,33,0.15)]"
              : "bg-white/40 backdrop-blur-md border border-white/40"
          } rounded-full`}
        >
          <div className="flex items-center justify-between pl-4 pr-2 md:pl-6 md:pr-3 py-2 md:py-2.5">
            <a href="#hero" className="shrink-0" data-testid="nav-home-link">
              <Logo />
            </a>

            <ul className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((l) => {
                const active = activeId === l.href.slice(1);
                return (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      data-testid={`nav-link-${l.href.slice(1)}`}
                      className={`relative px-4 py-2 text-[0.78rem] tracking-[0.22em] uppercase font-medium transition-colors duration-300 ${
                        active
                          ? "text-[color:var(--color-terracotta)]"
                          : "text-[color:var(--color-ink)] hover:text-[color:var(--color-terracotta)]"
                      }`}
                    >
                      {l.label}
                      {active && (
                        <motion.span
                          layoutId="nav-active-dot"
                          className="absolute left-1/2 -translate-x-1/2 -bottom-0.5 w-1 h-1 rounded-full bg-[color:var(--color-terracotta)]"
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="hidden lg:block">
              <Button text="Orçamento" variant="primary" href="#contato" testId="nav-cta-btn" className="!py-3 !px-6" />
            </div>

            <button
              type="button"
              aria-label="Abrir menu"
              onClick={() => setOpenMobile(true)}
              className="lg:hidden w-11 h-11 grid place-items-center rounded-full bg-[color:var(--color-ink)] text-[color:var(--color-cream)] hover:bg-[color:var(--color-terracotta)] transition-colors"
              data-testid="nav-mobile-open"
            >
              <HiMenuAlt4 size={20} />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {openMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] lg:hidden"
            data-testid="mobile-menu"
          >
            <div
              className="absolute inset-0 bg-[color:var(--color-ink)]/60 backdrop-blur-md"
              onClick={() => setOpenMobile(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-[color:var(--color-cream)] shadow-2xl flex flex-col p-6"
            >
              <div className="flex items-center justify-between mb-10">
                <Logo />
                <button
                  type="button"
                  aria-label="Fechar menu"
                  onClick={() => setOpenMobile(false)}
                  className="w-10 h-10 grid place-items-center rounded-full border border-[color:var(--color-border)] hover:border-[color:var(--color-terracotta)] hover:text-[color:var(--color-terracotta)] transition-colors"
                  data-testid="nav-mobile-close"
                >
                  <HiX size={20} />
                </button>
              </div>

              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                  >
                    <a
                      href={l.href}
                      onClick={() => setOpenMobile(false)}
                      data-testid={`mobile-nav-link-${l.href.slice(1)}`}
                      className="group flex items-baseline gap-3 py-4 border-b border-[color:var(--color-border)]"
                    >
                      <span className="text-[0.7rem] tracking-[0.3em] text-[color:var(--color-terracotta)]">
                        0{i + 1}
                      </span>
                      <span className="font-serif text-3xl text-[color:var(--color-ink)] group-hover:text-[color:var(--color-terracotta)] transition-colors">
                        {l.label}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <Button
                  text="Solicitar orçamento"
                  variant="primary"
                  href="#contato"
                  onClick={() => setOpenMobile(false)}
                  testId="mobile-nav-cta"
                  className="w-full"
                />
                <p className="text-xs font-sans text-[color:var(--color-muted)] mt-6 tracking-widest uppercase">
                  Cascavel — PR · (45) 98815-7023
                </p>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
