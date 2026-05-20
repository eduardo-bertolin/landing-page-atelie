import "../styles/utility.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Info from "../components/Info";
import Sobre from "../components/Sobre";
export default function Home() {
  return (
    <>
      <Header />

      <main className="flex items-center">
        <Hero />
      </main>
      <Info />
      <Sobre />
    </>
  );
}
