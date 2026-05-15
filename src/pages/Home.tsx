import "../styles/utility.css";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex items-center">
        <Hero />
      </main>
    </>
  );
}
