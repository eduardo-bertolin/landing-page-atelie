import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FaLocationDot, FaClock, FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import ReCAPTCHA from "react-google-recaptcha";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "./Button";

export default function Contato() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isChallengeCompleted, setChallengeCompleted] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const isNullOrEmpty = (val: string) => !val || val.trim() === "";
  const isValidForm = () => !isNullOrEmpty(email) && !isNullOrEmpty(message);

  const toastStyle = "!bg-[color:var(--color-cream)] !text-[color:var(--color-ink)] !border !border-[color:var(--color-border)] !rounded-2xl !shadow-2xl !font-sans";

  async function handleSendEmail(): Promise<boolean> {
    setStatus("loading");
    try {
      const response = await fetch("/.netlify/functions/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });
      if (response.ok) {
        setStatus("success");
        toast.success("E-mail enviado com sucesso! Retornaremos em breve.", { className: toastStyle });
        return true;
      }
      setStatus("error");
      toast.error("Falha ao enviar o e-mail. Tente novamente.", { className: toastStyle });
      return false;
    } catch (err) {
      setStatus("error");
      toast.error("Erro de conexão. Verifique sua rede e tente novamente.", { className: toastStyle });
      return false;
    }
  }

  const resetFields = () => {
    setEmail("");
    setMessage("");
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isValidForm()) return;
    if (!isChallengeCompleted) {
      setStatus("error");
      toast.warning("Por favor, complete o reCAPTCHA antes de enviar.", { className: toastStyle });
      return;
    }
    setChallengeCompleted(false);
    const success = await handleSendEmail();
    if (success) {
      resetFields();
      recaptchaRef.current?.reset();
    }
  }

  function handleCompleteChallenge(token: string | null) {
    setChallengeCompleted(!!token);
  }

  return (
    <section
      id="contato"
      className="relative section-y bg-[color:var(--color-ink)] text-[color:var(--color-cream)] overflow-hidden grain"
      data-testid="contato-section"
    >
      {/* decorative bg */}
      <div className="absolute inset-0 -z-[1]">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[color:var(--color-terracotta)]/20 blur-[120px]" />
        <div className="absolute -bottom-40 -left-32 w-[500px] h-[500px] rounded-full bg-[color:var(--color-gold)]/10 blur-[120px]" />
      </div>

      <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 flex flex-col gap-8"
        >
          <span className="eyebrow !text-[color:var(--color-gold)] flex items-center gap-3">
            <span className="divider-line" />
            Fale conosco
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Vamos criar algo{" "}
            <span className="italic font-light text-[color:var(--color-gold)]">único juntas?</span>
          </h2>
          <p className="text-[color:var(--color-cream)]/70 leading-relaxed text-lg max-w-md">
            Tem alguma dúvida ou gostaria de fazer um pedido personalizado? Preencha o formulário
            ao lado e retornaremos o mais breve possível.
          </p>

          <div className="space-y-4 pt-4">
            {[
              { icon: <FaPhone />, label: "(45) 98815-7023", testId: "contact-phone" },
              { icon: <IoMdMail />, label: "atelietatibertolin@hotmail.com", testId: "contact-email" },
              { icon: <FaLocationDot />, label: "Cascavel — PR", testId: "contact-location" },
              { icon: <FaClock />, label: "Segunda a sexta · 08h às 18h", testId: "contact-hours" },
            ].map((it) => (
              <div key={it.testId} className="flex items-center gap-4" data-testid={it.testId}>
                <span className="w-11 h-11 grid place-items-center rounded-full bg-[color:var(--color-gold)]/10 border border-[color:var(--color-gold)]/30 text-[color:var(--color-gold)]">
                  {it.icon}
                </span>
                <span className="text-[color:var(--color-cream)]/85">{it.label}</span>
              </div>
            ))}
          </div>

          <a
            href="http://wa.me/45988157023"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="contact-whatsapp-btn"
            className="btn-shine inline-flex items-center justify-center gap-3 mt-2 px-6 py-4 rounded-full bg-[#25D366] text-white font-medium tracking-widest text-[0.72rem] uppercase hover:-translate-y-0.5 transition-transform shadow-[0_10px_25px_-10px_rgba(37,211,102,0.6)] w-fit"
          >
            <FaWhatsapp size={22} />
            <span className="relative z-[2]">Falar no WhatsApp</span>
          </a>
        </motion.div>

        {/* Right: form */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 0.15 }}
          onSubmit={handleSubmit}
          className="lg:col-span-7 relative p-8 md:p-10 rounded-3xl bg-white/[0.04] backdrop-blur-md border border-white/10 shadow-[0_40px_100px_-40px_rgba(0,0,0,0.6)]"
          data-testid="contact-form"
        >
          <div className="grid grid-cols-1 gap-8">
            <div className="field">
              <input
                type="email"
                id="email"
                required
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "loading"}
                data-testid="contact-email-input"
              />
              <label htmlFor="email">Seu e-mail</label>
            </div>

            <div className="field">
              <textarea
                id="message"
                required
                rows={5}
                placeholder=" "
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={status === "loading"}
                data-testid="contact-message-input"
              />
              <label htmlFor="message">Sua mensagem</label>
            </div>

            <div className="flex justify-start">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6LfXuBstAAAAACgxzmEIgH55TDjFY-ypxhazKz-E"
                onChange={handleCompleteChallenge}
                theme="dark"
              />
            </div>

            <Button
              type="submit"
              variant="submit"
              disabled={status === "loading"}
              text={status === "loading" ? "Enviando..." : "Enviar mensagem"}
              testId="contact-submit-btn"
            />
          </div>
        </motion.form>
      </div>

      {/* Floating WhatsApp desktop */}
      <a
        href="http://wa.me/45988157023"
        target="_blank"
        rel="noopener noreferrer"
        data-testid="floating-whatsapp-btn"
        className="hidden md:grid place-items-center fixed bottom-8 right-8 z-40 w-16 h-16 rounded-full bg-[#25D366] text-white shadow-[0_20px_40px_-15px_rgba(37,211,102,0.7)] hover:scale-110 transition-transform"
        aria-label="Falar no WhatsApp"
      >
        <FaWhatsapp size={28} />
      </a>

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
