import Button from "../components/Button";
import MenuIcon from "../assets/menu.svg";
import CloseIcon from "../assets/close.svg";
import Logo from "../assets/logo.svg";
import { useState } from "react";
import Maquina from "../assets/maquina.svg";




export default function Header() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <header>
            <nav className="flex items-center">
                <div className="container flex items-center justify-between">
                    <a href="#" className="flex items-center h-auto gap-1">
                        <img src={Maquina} alt="Logo Atelie Tati" width={70} height={70} className="scale-[1.8]" />
                        <div className="flex flex-col">
                            <p className="font-cormorant font-bold text-ebano text-xl uppercase">Ateliê Tati Bertolin</p>
                        </div>
                    </a>
                    <div className="hidden xl:flex">
                        <ul className="flex gap-4">
                            <li>
                                <a href="#sobre">Sobre</a>
                            </li>
                            <li>
                                <a href="#servicos">Serviços</a>
                            </li>
                            <li>
                                <a href="#portfolio">Portfólio</a>
                            </li>
                            <li>
                                <a href="#contato">Contato</a>
                            </li>
                        </ul>
                    </div>
                    <div className="desktop-only">
                        <div className="flex items-center">
                            <Button

                                text="Solicitar orçamento" />
                        </div>
                    </div>
                    <div className="mobile-menu">
                        {showMobileMenu && (
                            <div className="mobile-menu-content">
                                <div className="container flex flex-col items-center justify-center h-full relative">
                                    <ul className="flex flex-col gap-8 text-center text-2xl font-jost uppercase tracking-widest">
                                        <li>
                                            <a href="#" className="color-ebano" onClick={() => setShowMobileMenu(false)}>Home</a>

                                        </li>
                                        <li>
                                            <a href="#sobre" className="color-ebano" onClick={() => setShowMobileMenu(false)}>Sobre</a>
                                        </li>
                                        <li>
                                            <a href="#servicos" className="color-ebano" onClick={() => setShowMobileMenu(false)}>Serviços</a>
                                        </li>
                                        <li>
                                            <a href="#portfolio" className="color-ebano" onClick={() => setShowMobileMenu(false)}>Portfólio</a>
                                        </li>
                                        <li>
                                            <a href="#contato" className="color-ebano" onClick={() => setShowMobileMenu(false)}>Contato</a>
                                        </li>
                                        <li>
                                            <a className="color-ebano" href="#">
                                                Login
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}
                        <span
                            onClick={() => setShowMobileMenu(!showMobileMenu)}
                            className="btn-wrapper relative z-[101]"
                        >
                            <img src={showMobileMenu ? CloseIcon : MenuIcon} alt="ícone menu" width={24} height={24} />
                        </span>
                    </div>
                </div>
            </nav>
        </header>
    )
}