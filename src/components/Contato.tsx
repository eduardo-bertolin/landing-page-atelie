import { useState } from "react";
import Button from "./Button";
import Whatsapp from "../assets/whatsapp.svg"

export default function Contato() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [feedbackMsg, setFeedbackMsg] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setFeedbackMsg("");

        try {
            const response = await fetch("/.netlify/functions/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, message }),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus("success");
                setFeedbackMsg("Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.");
                setEmail("");
                setMessage("");
            } else {
                setStatus("error");
                setFeedbackMsg(data.error || "Ocorreu um erro ao enviar a mensagem.");
            }
        } catch (error) {
            console.error("Erro no envio do formulário:", error);
            setStatus("error");
            setFeedbackMsg("Ocorreu um erro inesperado. Tente novamente mais tarde.");
        }
    };

    return (
        <section id="contato" className="relative w-full section-h flex flex-col items-center justify-center bg-ebano">
            <div className="container flex flex-col items-center gap-10 w-full px-5 py-10 xl:py-0">
                <div className="flex flex-col items-center text-center gap-4">
                    <span className="font-jont font-bold text-sm text-terra tracking-[0.375rem] uppercase">Fale Conosco</span>
                    <h2 className="font-serif text-3xl xl:text-5xl text-cru">
                        <span>Entre em </span>
                        <span className="font-light italic text-terra">Contato</span>
                    </h2>
                    <p className="text-cru max-w-lg mt-2">
                        Tem alguma dúvida ou gostaria de fazer um pedido personalizado? Preencha o formulário abaixo e retornaremos o mais breve possível.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-2xl bg-white p-8 xl:p-8 shadow-lg flex flex-col gap-3"
                >
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="font-serif text-ebano text-lg">Seu E-mail</label>
                        <input
                            type="email"
                            id="email"
                            required
                            placeholder="exemplo@email.com"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            disabled={status === "loading"}
                            className="w-full p-4 border border-gray-300 focus:outline-none focus:border-terra transition-colors"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="font-serif text-ebano text-lg">Sua Mensagem</label>
                        <textarea
                            id="message"
                            required
                            rows={5}
                            placeholder="Escreva como podemos te ajudar..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            disabled={status === "loading"}
                            className="w-full p-4 border border-gray-300 focus:outline-none focus:border-terra transition-colors resize-none"
                        ></textarea>

                    </div>

                    <Button
                        type="submit"
                        variant="submit"
                        disabled={status === "loading"}
                        text={status === "loading" ? "Enviando..." : "Enviar Mensagem"}
                        className="mt-2"
                    />

                    {feedbackMsg && (
                        <div className={`p-4 text-center ${status === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                            {feedbackMsg}
                        </div>
                    )}
                </form>

                <div className="w-full max-w-2xl md:hidden mt-2">
                    <a href="" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-white font-jont font-bold uppercase tracking-wider py-4 hover:brightness-110 transition-all shadow-lg">
                        <img src={Whatsapp} alt="WhatsApp" className="w-7 h-7 filter brightness-0 invert" />
                        <span>Falar no WhatsApp</span>
                    </a>
                </div>

            </div>
            <div className="hidden md:block fixed md:bottom-10 md:right-4 z-50 hover:scale-110 transition-transform cursor-pointer hover:brightness-110">
                <a href="" target="_blank" rel="noopener noreferrer">
                    <img src={Whatsapp} alt="WhatsApp" className="w-20 h-20" />
                </a>
            </div>

        </section>
    );
}
