import "../styles/utility.css";
import Logo from "../assets/logo.svg";
import "../styles/header.css";
import { useState } from "react";
import Button from "../components/Button";
import MenuIcon from "../assets/menu.svg";
import CloseIcon from "../assets/close.svg";
import Costura from "../assets/images/costura.png";

export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const backgroundStyle = {
    backgroundColor: "var(--color-ebano)",
    backgroundImage: `repeating-linear-gradient(
    45deg,
    #3b2a1c,
    transparent 1px,
    transparent 12px
  )`,
    minHeight: "100vh",
  };
  return (
    <>
      <header className=" py-sm">
        <nav className="flex items-center justify-between">
          <img src={Logo} alt="Logo Atelie Tati" width={220} height={80} />
          <div className="desktop-only">
            <ul className="flex gap-1">
              <li>
                <a href="#solucoes">Sobre</a>
              </li>
              <li>
                <a href="#depoimentos">Serviços</a>
              </li>
              <li>
                <a href="#precos">Portfólio</a>
              </li>
              <li>
                <a href="#contato">Contato</a>
              </li>
            </ul>
          </div>
          <div className="desktop-only">
            <div className="flex items-center">
              <a className="reverse-color ml-lg" href="">
                Login
              </a>
              <Button text="Cadastre-se" />
            </div>
          </div>
          <div className="mobile-menu">
            {showMobileMenu ? (
              <div className="mobile-menu-content">
                <div className="container flex">
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#solution">Sobre</a>
                    </li>
                    <li>
                      <a href="#testimonials">Serviços</a>
                    </li>
                    <li>
                      <a href="#pricing">Portfólio</a>
                    </li>
                    <li>
                      <a href="#contact">Contato</a>
                    </li>
                    <li>
                      <a className="reverse-color" href="#">
                        Login
                      </a>
                    </li>
                  </ul>
                  <span
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                    className="btn-wrapper"
                  >
                    <img
                      src={CloseIcon}
                      alt="ícone fechar menu"
                      width={24}
                      height={24}
                    />
                  </span>
                </div>
              </div>
            ) : (
              <span
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="btn-wrapper"
              >
                <img src={MenuIcon} alt="ícone menu" width={24} height={24} />
              </span>
            )}
          </div>
        </nav>
      </header>

      <main className="flex items-center">
        <section id="hero">
          <div className="flex background" style={backgroundStyle}>
            <div className="container flex hero-row">
              <div className="textos desktop-only container">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  {/* Span apenas para o visual (traço) */}
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
                <p className="font-cormorant color-cru-translucent fs-2xl mw-regular">
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
