import Logo from "./Logo";
import { FaPhone, FaLocationDot, FaRegClock, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";



export default function Footer() {
    return (
        <section id="footer" className="w-full h-auto py-20 flex">
            <div className="grid grid-cols-2 lg:grid-cols-3 w-full mx-auto">
                <div className="flex flex-col w-full h-auto justify-start px-5 gap-4 col-span-2 lg:col-span-1 pb-8 lg:pb-0">
                    <Logo />
                    <p className="text-grafite font-jost text-lg max-w-md">
                        Peças feitas à mão com todo cuidado e carinho. Transformando tecidos em itens únicos que carregam história em cada detalhe.
                    </p>
                </div>

                <div className="flex flex-col w-full h-auto justify-start px-5 gap-4 lg:mx-auto lg:w-fit">
                    <p className="text-md text-grafite uppercase font-semibold">Redes Sociais</p>
                    <a href="https://www.instagram.com/atelietatibertolin/" className="group flex flex-row items-center gap-2 cursor-pointer w-fit">
                        <FaInstagram className="w-4 h-4 text-grafite transition-colors group-hover:text-orange-500" />
                        <span className="font-jost text-lg text-grafite transition-colors group-hover:text-orange-500">@atelietatibertolin</span>
                    </a>
                    <a href="https://www.facebook.com/atelietatibertolin/" className="group flex flex-row items-center gap-2 cursor-pointer w-fit">
                        <FaFacebook className="w-4 h-4 text-grafite transition-colors group-hover:text-blue-500" />
                        <span className="font-jost text-lg text-grafite transition-colors group-hover:text-blue-500">/atelietatibertolin</span>
                    </a>
                    <a href="https://www.youtube.com/channel/UCZYuZOcvh9gY5lCuft8Thng" className="group flex flex-row items-center gap-2 cursor-pointer w-fit">
                        <FaYoutube className="w-4 h-4 text-grafite transition-colors group-hover:text-red-500" />
                        <span className="font-jost text-lg text-grafite transition-colors group-hover:text-red-500">/atelietatibertolin</span>
                    </a>
                </div>

                <div className="flex flex-col w-full h-auto justify-start px-5 gap-4 lg:mx-auto lg:w-fit">
                    <p className="text-md text-grafite uppercase font-semibold">Atendimento</p>
                    <div className="flex flex-row items-center gap-2">
                        <FaPhone className="text-grafite w-4 h-4 " />
                        <span className="text-grafite font-jost text-lg">(47) 99211-1591</span>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <IoMdMail className="text-grafite w-4 h-4 " />
                        <span className="text-grafite font-jost text-lg">email@gmail.com</span>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <FaLocationDot className="text-grafite w-4 h-4 " />
                        <span className="text-grafite font-jost text-lg">Cascavel - PR</span>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <FaRegClock className="text-grafite w-4 h-4 " />
                        <span className="text-grafite font-jost text-lg">Segunda a Sexta - 08:00 às 18:00</span>
                    </div>
                </div>

            </div>
        </section>
    )
}
