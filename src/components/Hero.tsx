import "../styles/utility.css";
import Costura from "../assets/images/costura.png";
import Button from "./Button";
export default function Hero() {
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
    <section id="hero" className="w-full">
      <div className="flex items-center background" style={backgroundStyle}>
        <div className="container flex hero-row justify-between">
          <div className="hidden xl:flex flex-col gap-[3rem] self-center">
            <div className="flex items-center gap-4">
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
            <p className="font-cormorant color-cru-translucent max-w-[350px] fs-xl ">
              Costura artesanal para quem acredita em peças únicas.
            </p>
            <div className="flex items-center gap-4">
              <Button text="Ver peças" secondary={true} />
              <Button text="Ver coleções" secondary={false} />
            </div>
          </div>

          <div className="hero-image desktop-only">
            <img
              src={Costura}
              alt="Costura artesanal"
              className="w-[600px] h-[700px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
