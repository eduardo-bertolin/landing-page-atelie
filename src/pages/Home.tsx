import "../styles/utility.css";
import Costura from "../assets/images/costura.png";
import Header from "../components/Header";
export default function Home() {
  const backgroundStyle = {
    backgroundColor: "var(--color-ebano)",
    backgroundImage: `repeating-linear-gradient(
    45deg,
    #3b2a1c,
    transparent 1px,
    transparent 12px
  )`,
    minHeight: "calc(100vh - var(--nav-height))",
  };
  return (
    <>
      <Header />

      <main className="flex items-center">
        <section id="hero">
          <div className="flex items-center background" style={backgroundStyle}>
            <div className="container flex hero-row">
              <div className="textos desktop-only">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >

                  <span className="line" />

                  <span className="font-jost color-dourado uppercase fs-md ls-md">
                    Ateliê de Patchwork
                  </span>
                </div>
                <h1 className="font-serif color-cru fs-6xl">
                  Feito à mão, <br />
                  com{" "}
                  <span className="font-cormorant color-dourado fs-6xl">
                    propósito.
                  </span>
                </h1>
                <p className="font-cormorant color-cru-translucent mw-regular fs-xl">
                  Costura artesanal para quem acredita em peças únicas.
                </p>
              </div>

              <div className="hero-image desktop-only">
                <img src={Costura} alt="" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
