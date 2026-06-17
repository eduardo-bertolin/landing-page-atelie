import React, { useRef, useState } from "react";
import Button from "./Button";
import { FaWhatsapp } from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contato() {
    // states

    const [email, setEmail] = useState("");

    const [isChallengeCompleted, setChallengeCompleted] = useState(false);

    const recaptchaRef = useRef<ReCAPTCHA>(null);

    const [message, setMessage] = useState("");

    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const [feedbackMsg, setFeedbackMsg] = useState("");

    // validacao

    function isNullOrEmpty(val: string) {
        return val === null || val === undefined || val.trim() === '';
    }

    function isValidForm() {
        return !isNullOrEmpty(email) && !isNullOrEmpty(message);
    }

    // requisicao http

    // Função assíncrona que envia os dados do formulário para a Serverless Function do Netlify
    async function handleSendEmail(): Promise<boolean> {
        setStatus("loading");
        try {
            // Faz uma requisição POST para a rota da nossa função backend na Netlify
            const response = await fetch("/.netlify/functions/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, message }),
            });

            if (response.ok) {
                setStatus("success");
                toast.success("E-mail enviado com sucesso!", {
                    className: "!bg-cru !text-ebano !border !border-terra !rounded-none !shadow-2xl",
                });
                return true;
            } else {
                setStatus("error");
                toast.error("Falha ao enviar o e-mail. Tente novamente.", {
                    className: "!bg-cru !text-ebano !border !border-terra !rounded-none !shadow-2xl",
                });
                return false;
            }
        } catch (error) {
            setStatus("error");
            toast.error("Erro de conexão. Verifique sua rede e tente novamente.", {
                className: "!bg-cru !text-ebano !border !border-terra !rounded-none !shadow-2xl",
            });
            return false;
        }
    }

    function resetFields() {
        setEmail("");
        setMessage("");
    }

    // forms

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        // impede recarregar a página
        e.preventDefault();

        if (!isValidForm()) {
            return;
        }

        if (!isChallengeCompleted) {
            setStatus("error");
            toast.warning("Por favor, complete o reCAPTCHA antes de enviar.", {
                className: "!bg-cru !text-ebano !border !border-terra !rounded-none !shadow-2xl",
            });
            return;
        }

        // limpa
        setFeedbackMsg("");
        setChallengeCompleted(false);

        const success = await handleSendEmail();

        // 4. Se o e-mail foi enviado com sucesso, limpa os campos e reseta visualmente o reCAPTCHA
        if (success) {
            resetFields();
            recaptchaRef.current?.reset();
        }
    }

    // ---- CALLBACK DO RECAPTCHA ----

    // Função disparada automaticamente quando o reCAPTCHA é resolvido pelo usuário
    function handleCompleteChallenge(token: string | null) {
        // se não houver token
        if (!token) {
            setChallengeCompleted(false);
            return;
        }

        // se houver token
        setChallengeCompleted(true);
    }


    // ---- INTERFACE GRÁFICA (JSX) ----
    return (
        <section id="contato" className="relative w-full section-h flex flex-col items-center justify-center bg-ebano">
            <div className="container flex flex-col items-center gap-10 w-full px-5 py-10 xl:py-0">

                {/* Títulos da seção de Contato */}
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

                {/* forms */}
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-2xl bg-white p-8 xl:p-8 shadow-lg flex flex-col gap-3"
                >
                    {/* e-mail */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="font-serif text-ebano text-lg">Seu E-mail</label>
                        <input
                            type="email"
                            id="email"
                            required
                            placeholder="exemplo@email.com"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            disabled={status === "loading"} // Desabilita o campo enquanto estiver enviando
                            className="w-full p-4 border border-gray-300 focus:outline-none focus:border-terra transition-colors"
                        />
                    </div>

                    {/* mensagem */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="font-serif text-ebano text-lg">Sua Mensagem</label>
                        <textarea
                            id="message"
                            required
                            rows={5}
                            placeholder="Escreva como podemos te ajudar..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            disabled={status === "loading"} // Desabilita o campo enquanto estiver enviando
                            className="w-full p-4 border border-gray-300 focus:outline-none focus:border-terra transition-colors resize-none"
                        ></textarea>
                    </div>

                    {/* google reCAPTCHA */}
                    <div className="flex justify-center my-2">
                        <ReCAPTCHA
                            ref={recaptchaRef} // Conecta a ref local ao widget
                            sitekey="6LfXuBstAAAAACgxzmEIgH55TDjFY-ypxhazKz-E" // Chave pública de integração do site
                            onChange={handleCompleteChallenge} // Função chamada ao concluir o captcha
                        />
                    </div>


                    <Button
                        type="submit"
                        variant="submit"
                        disabled={status === "loading"}
                        text={status === "loading" ? "Enviando..." : "Enviar Mensagem"}
                        className="mt-2"
                    />

                    {/* Mensagem de Feedback (Exibida dinamicamente caso haja texto) */}
                    {feedbackMsg && (
                        <div className={`p-4 text-center ${status === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                            {feedbackMsg}
                        </div>
                    )}
                </form>

                {/* Botão de WhatsApp exclusivo para telas Mobile (MD oculto) */}
                <div className="w-full max-w-2xl md:hidden mt-2">
                    <a href="http://wa.me/45988157023" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-3 bg-terra font-jont font-semibold uppercase tracking-wider py-4 hover:brightness-110 transition-all shadow-lg ">
                        <FaWhatsapp size={28} className="text-green-500" />
                        <span className="text-white ">Falar no WhatsApp</span>
                    </a>
                </div>

            </div>

            {/* botao whats pra tela menor */}
            <div className="hidden md:block fixed md:bottom-10 md:right-4 z-50 hover:scale-110 transition-transform cursor-pointer hover:brightness-110">
                <a href="http://wa.me/45988157023" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="w-20 h-20 text-dourado" />
                </a>
            </div>

            {/* Importa os estilos padrões do React Toastify e o container para renderizar as notificações */}
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="light"
                transition={Bounce}
            />
        </section>
    );
}
