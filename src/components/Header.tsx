import Button from "../components/Button";
import MenuIcon from "../assets/menu.svg";
import CloseIcon from "../assets/close.svg";
import Logo from "../assets/logo.svg";
import { useState } from "react";



export default function Header() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <header>
            <nav className="flex items-center py-sm">
                <div className="container flex items-center justify-between">
                    <img src={Logo} alt="Logo Atelie Tati" width={220} height={80} />
                    <div className="desktop-only">
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
                        <div className="flex items-center gap-4">
                            <a className="reverse-color ml-lg" href="">
                                Login
                            </a>
                            <Button text="Cadastre-se" />
                        </div>
                    </div>
                    <div className="mobile-menu">
                        {showMobileMenu && (
                            <div className="mobile-menu-content">
                                <div className="container flex flex-col items-center justify-center h-full relative">
                                    <ul className="flex flex-col gap-8 text-center text-2xl font-jost uppercase tracking-widest">
                                        <li>
                                            <a href="#" className="color-ebano">Home</a>
                                        </li>
                                        <li>
                                            <a href="#sobre" className="color-ebano">Sobre</a>
                                        </li>
                                        <li>
                                            <a href="#servicos" className="color-ebano">Serviços</a>
                                        </li>
                                        <li>
                                            <a href="#portfolio" className="color-ebano">Portfólio</a>
                                        </li>
                                        <li>
                                            <a href="#contato" className="color-ebano">Contato</a>
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