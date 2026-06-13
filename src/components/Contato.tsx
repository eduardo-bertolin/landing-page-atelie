import React, { useRef, useState } from "react";
import Button from "./Button";
import { FaWhatsapp } from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contato() {
    // ---- ESTADOS (States) ----
    
    // Estado para armazenar o email digitado pelo usuário
    const [email, setEmail] = useState("");
    
    // Estado para verificar se o usuário completou o desafio do reCAPTCHA
    const [isChallengeCompleted, setChallengeCompleted] = useState(false);
    
    // Referência (Ref) usada para interagir diretamente com o componente do ReCAPTCHA (ex: resetá-lo)
    const recaptchaRef = useRef<ReCAPTCHA>(null);

    // Estado para armazenar o texto da mensagem
    const [message, setMessage] = useState("");
    
    // Estado para monitorar o status do envio do formulário (ocioso, carregando, sucesso ou erro)
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    
    // Estado para controlar o texto de feedback (mensagens de erro ou sucesso) exibido na tela
    const [feedbackMsg, setFeedbackMsg] = useState("");

    // ---- FUNÇÕES AUXILIARES E DE VALIDAÇÃO ----

    // Função utilitária para verificar se um campo de texto está nulo, indefinido ou vazio (apenas espaços)
    function isNullOrEmpty(val: string) {
        return val === null || val === undefined || val.trim() === '';
    }

    // Função que valida se todos os campos obrigatórios do formulário foram preenchidos
    function isValidForm() {
        return !isNullOrEmpty(email) && !isNullOrEmpty(message);
    }

    // ---- REQUISIÇÃO HTTP (Envio do E-mail) ----

    // Função assíncrona que envia os dados do formulário para a Serverless Function do Netlify
    async function handleSendEmail(): Promise<boolean> {
        // Altera o status para 'loading' para desabilitar botões/inputs e mostrar indicador de carregamento
        setStatus("loading");
        try {
            // Faz uma requisição POST para a rota da nossa função backend na Netlify
            const response = await fetch("/.netlify/functions/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, message }),
            });
            
            // Se a resposta do servidor for 200-299 (ok), atualiza para sucesso
            if (response.ok) {
                setStatus("success");
                setFeedbackMsg("Enviado com sucesso!");
                return true;
            } else {
                // Caso contrário (ex: erro no servidor SMTP), atualiza para erro
                setStatus("error");
                setFeedbackMsg("Falha ao enviar o e-mail. Tente novamente.");
                return false;
            }
        } catch (error) {
            // Captura erros de rede ou conexão
            setStatus("error");
            setFeedbackMsg("Erro de conexão. Verifique sua rede e tente novamente.");
            return false;
        }
    }

    // Função para limpar os campos de input do formulário após o sucesso
    function resetFields() {
        setEmail("");
        setMessage("");
    }

    // ---- MANIPULADOR DE SUBMIT (Formulário) ----

    // Função principal disparada quando o usuário clica no botão de enviar
    async function handeleSubmit(e: React.FormEvent<HTMLFormElement>) {
        // Impede o comportamento padrão do HTML de recarregar a página ao enviar o formulário
        e.preventDefault();

        // 1. Valida se os campos de texto (email e mensagem) foram digitados
        if (!isValidForm()) {
            return;
        }

        // 2. Valida se o usuário resolveu o reCAPTCHA
        if (!isChallengeCompleted) {
            setStatus("error");
            setFeedbackMsg("Por favor, complete o reCAPTCHA antes de enviar.");
            return;
        }

        // Limpa mensagens anteriores e redefine o estado do captcha
        setFeedbackMsg("");
        setChallengeCompleted(false);

        // 3. Executa a função de envio e aguarda (await) o resultado boolean
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
        // Se não houver token, significa que o desafio expirou ou falhou
        if (!token) {
            setChallengeCompleted(false);
            return;
        }

        // Se houver token, o desafio foi superado com sucesso
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

                {/* Formulário de Contato */}
                <form
                    onSubmit={handeleSubmit}
                    className="w-full max-w-2xl bg-white p-8 xl:p-8 shadow-lg flex flex-col gap-3"
                >
                    {/* Campo: E-mail */}
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

                    {/* Campo: Mensagem */}
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

                    {/* Componente Google reCAPTCHA */}
                    <div className="flex justify-center my-2">
                        <ReCAPTCHA
                            ref={recaptchaRef} // Conecta a ref local ao widget
                            sitekey="6LfXuBstAAAAACgxzmEIgH55TDjFY-ypxhazKz-E" // Chave pública de integração do site
                            onChange={handleCompleteChallenge} // Função chamada ao concluir o captcha
                        />
                    </div>

                    {/* Botão de Envio (Componente Customizado) */}
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
                    <a href="http://wa.me/45988157023" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-3 bg-terra font-jont font-bold uppercase tracking-wider py-4 hover:brightness-110 transition-all shadow-lg">
                        <FaWhatsapp size={28} className="text-green-500" />
                        <span className="text-white">Falar no WhatsApp</span>
                    </a>
                </div>

            </div>
            
            {/* Ícone flutuante de WhatsApp fixo no canto inferior direito para telas Desktop (MD para cima) */}
            <div className="hidden md:block fixed md:bottom-10 md:right-4 z-50 hover:scale-110 transition-transform cursor-pointer hover:brightness-110">
                <a href="http://wa.me/45988157023" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="w-20 h-20 text-dourado" />
                </a>
            </div>

        </section>
    );
}
