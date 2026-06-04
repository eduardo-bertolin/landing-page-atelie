import { useState } from "react";
import Button from "./Button";

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
        <section id="contato" className="w-full py-20 flex flex-col items-center bg-ebano">
            <div className="container flex flex-col items-center gap-8 w-full px-5">
                <div className="flex flex-col items-center text-center gap-3">
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
                    className="w-full max-w-2xl bg-white p-8 xl:p-12 shadow-lg flex flex-col gap-6"
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
                        variant="terra"
                        disabled={status === "loading"}
                        text={status === "loading" ? "Enviando..." : "Enviar Mensagem"}
                        className="font-jont font-bold uppercase tracking-wider py-4 mt-2"
                    />

                    {feedbackMsg && (
                        <div className={`p-4 text-center ${status === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                            {feedbackMsg}
                        </div>
                    )}
                </form>
            </div>
        </section>
    );
}
