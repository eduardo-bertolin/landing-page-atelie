import "../styles/utility.css";
import Logo from "../assets/logo.svg";
import "../styles/header.css";
import { useState } from "react";
import Button from "../components/Button";
import MenuIcon from "../assets/menu.svg";
import CloseIcon from "../assets/close.svg";

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
                <a href="#solucoes">Soluções</a>
              </li>
              <li>
                <a href="#depoimentos">Depoimentos</a>
              </li>
              <li>
                <a href="#precos">Preços</a>
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
                      <a href="#solution">Soluções</a>
                    </li>
                    <li>
                      <a href="#testimonials">Depoimentos</a>
                    </li>
                    <li>
                      <a href="#pricing">Preços</a>
                    </li>
                    <li>
                      <a href="#contact">Contato</a>
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
        <div className="flex background" style={backgroundStyle}>
          <div className="desktop-only container">
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              {/* Span apenas para o visual (traço) */}
              <span className="line" />

              <h2 className="font-jost color-dourado uppercase fs-md ls-md">
                Ateliê de Patchwork
              </h2>
            </div>
            <h1 className="font-serif color-cru">
              Feito à mão, <br />
              com{" "}
              <span className="font-cormorant color-dourado fs-3xl">
                propósito.
              </span>
            </h1>
            <h2 className="font-cormorant color-cru-translucent">
              Costura artesanal para quem acredita em peças únicas.
            </h2>
          </div>
        </div>
      </main>
    </>
  );
}
