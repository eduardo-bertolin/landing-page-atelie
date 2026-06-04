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
  return (
    <>
      <Header />

      <main className="flex items-center">
        <Hero />
      </main>
      <Info />
      <Sobre />
      <Servicos />
      <Portfolio />
      <Avaliacoes />
      <Contato />
      <Footer />
    </>
  );
}
