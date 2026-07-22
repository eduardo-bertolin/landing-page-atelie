import { useEffect } from "react";
import "../styles/utility.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Info from "../components/Info";
import Sobre from "../components/Sobre";
import Servicos from "../components/Servicos";
import Portfolio from "../components/Portfolio";
import Avaliacoes from "../components/Avaliacoes";
import Contato from "../components/Contato";
import Footer from "../components/Footer";

export default function Home() {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href || href === "#") return;

      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        window.history.pushState(null, "", href);
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-[color:var(--color-cream)]">
      <Header />
      <main className="w-full">
        <Hero />
        <Info />
        <Sobre />
        <Servicos />
        <Portfolio />
        <Avaliacoes />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}
