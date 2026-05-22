import "../styles/utility.css";
import Costura from "../assets/images/costura.png";
import Button from "./Button";
export default function Hero() {
  return (
    <section id="hero" className="w-full section-h">
      <div className="flex items-center background bg-ebano py-12 xl:py-0 section-h" >
        <div className="container flex flex-col xl:flex-row justify-between gap-12 xl:gap-0">
          <div className="flex flex-col gap-8 xl:gap-[3rem] self-center">
            <div className="flex items-center gap-4">
              <span className="line" />

              <span className="font-jost color-dourado uppercase text-lg tracking-[0.375rem]">
                Ateliê de Patchwork
              </span>
            </div>
            <h1 className="font-serif color-cru text-6xl">
              Feito à mão, <br />
              com{" "}
              <span className="font-cormorant color-dourado text-6xl italic">
                propósito.
              </span>
            </h1>
            <p className="font-cormorant color-cru max-w-[350px] text-3xl ">
              Costura artesanal para quem acredita em peças únicas.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-4">
              <Button text="Ver peças" variant="secondary" />
              <Button text="Ver coleções" variant="outline" />
            </div>
          </div>

          <div className="desktop-only">
            <img
              src={Costura}
              alt="Costura artesanal"
              className="w-[600px] h-[600px] object-cover transition-transform duration-750 ease-in-out group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
