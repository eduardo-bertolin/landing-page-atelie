import { useEffect, useRef, useCallback } from "react";
import Costura from "../assets/images/costura.png";

export default function Portfolio() {
    // Referência ao elemento <div> que contém todos os cards (a "trilha" do carrossel)
    const trackRef = useRef<HTMLDivElement>(null);

    // Objeto único que guarda todo o estado da animação.
    // Usamos useRef em vez de useState para que mudanças de estado NÃO causem re-renders
    // (re-renders matariam a fluidez da animação de 60fps)
    const state = useRef({
        pos: 0,           // Posição atual do translateX em pixels (negativo = movido para a esquerda)
        halfW: 0,         // Largura de metade da trilha (= largura de 1 cópia dos cards)
        speed: 0.8,       // Velocidade ATUAL do autoplay (px por frame) — muda gradualmente
        target: 0.8,      // Velocidade ALVO do autoplay — 0.8 normalmente, 0 no hover
        momentum: 0,      // Velocidade da inércia após soltar o arrasto (px por frame)
        dragging: false,   // Se o usuário está arrastando agora
        startX: 0,        // Posição X do mouse/toque quando começou a arrastar
        startPos: 0,      // Posição do carrossel quando começou a arrastar
        lastX: 0,         // Última posição X registrada (para calcular velocidade)
        lastT: 0,         // Último timestamp registrado (para calcular velocidade)
        frameId: 0,       // ID do requestAnimationFrame (para poder cancelar no cleanup)
    });

    // Lista de cards do portfólio
    const cards = [
        { id: 1, titulo: "bunda enorme gigantesca", image: Costura, alt: "Trabalho de Costura e acabamento" },
        { id: 2, titulo: "bunda enorme gigantesca", image: Costura, alt: "Confecção artesanal sob medida" },
        { id: 3, titulo: "bunda enorme gigantesca", image: Costura, alt: "Detalhes de costura criativa" },
        { id: 4, titulo: "bunda enorme gigantesca", image: Costura, alt: "Peças exclusivas e patchwork" },
    ];

    // ========== MEASURE ==========
    // Calcula a largura de metade da trilha (1 cópia dos cards).
    // Precisamos desse valor para saber em que ponto resetar a posição e criar o loop infinito.
    // É chamada na montagem e toda vez que a janela é redimensionada.
    const measure = useCallback(() => {
        if (trackRef.current) state.current.halfW = trackRef.current.scrollWidth / 2;
    }, []);

    // ========== ANIMATE (Loop principal — roda ~60 vezes por segundo) ==========
    // Esta função é o "coração" do carrossel. Ela decide como mover a trilha a cada frame.
    const animate = useCallback(() => {
        const s = state.current;       // Atalho para o estado
        const track = trackRef.current; // Atalho para o elemento DOM da trilha

        // Guarda de segurança: se a trilha não existe ou não foi medida ainda, tenta de novo no próximo frame
        if (!track || !s.halfW) {
            s.frameId = requestAnimationFrame(animate);
            return;
        }

        // Só move o carrossel automaticamente quando o usuário NÃO está arrastando
        if (!s.dragging) {

            // CASO 1: Tem inércia ativa (o usuário acabou de soltar após arrastar)
            // O carrossel continua "deslizando" na direção do arrasto e vai desacelerando
            if (Math.abs(s.momentum) > 0.3) {
                s.pos += s.momentum;       // Move a posição pela velocidade de inércia
                s.momentum *= 0.95;        // Reduz a velocidade em 5% a cada frame (desaceleração suave)

                // Quando a velocidade fica muito baixa, zera completamente para parar de vez
                if (Math.abs(s.momentum) <= 0.3) s.momentum = 0;
            }

            // CASO 2: Sem inércia — autoplay normal
            else {
                // Interpola a velocidade atual (speed) em direção à velocidade alvo (target).
                // A fórmula: speed += (target - speed) * 0.03
                //   - Se target é 0.8 e speed é 0 → speed sobe lentamente até 0.8 (começa suave)
                //   - Se target é 0 e speed é 0.8 → speed desce lentamente até 0 (para suave)
                //   - O fator 0.03 controla a suavidade: quanto menor, mais gradual a transição
                // Isso é o que impede o carrossel de "parar do nada"!
                s.speed += (s.target - s.speed) * 0.03;

                // Move a posição para a esquerda pela velocidade atual
                s.pos -= s.speed;
            }
        }

        // ---- LOOP INFINITO ----
        // O carrossel tem 2 cópias idênticas dos cards lado a lado.
        // Quando a posição passa de -halfW (passou uma cópia inteira), somamos halfW
        // para voltar ao início sem que o usuário perceba — pois os cards são idênticos.
        // Funciona igual nos dois sentidos (caso o usuário arraste para a direita).
        if (s.pos <= -s.halfW) s.pos += s.halfW;
        else if (s.pos > 0) s.pos -= s.halfW;

        // Aplica a posição como CSS transform — isso roda na GPU do navegador,
        // sendo MUITO mais fluido do que usar scrollLeft (que roda na CPU)
        track.style.transform = `translateX(${s.pos}px)`;

        // Agenda o próximo frame da animação (~16ms depois, ou seja, 60fps)
        s.frameId = requestAnimationFrame(animate);
    }, []);

    // ========== EFEITO DE INICIALIZAÇÃO ==========
    // Roda uma vez quando o componente monta e faz o cleanup quando desmonta
    useEffect(() => {
        measure();                                        // Mede a largura da trilha
        window.addEventListener("resize", measure);       // Remede quando a janela muda de tamanho
        state.current.frameId = requestAnimationFrame(animate); // Inicia o loop de animação

        // Cleanup: remove listener e cancela a animação quando o componente é destruído
        return () => {
            window.removeEventListener("resize", measure);
            cancelAnimationFrame(state.current.frameId);
        };
    }, [animate, measure]);

    // ========== HELPER: getX ==========
    // Extrai a posição X (horizontal) do cursor, funcionando tanto para mouse quanto para touch.
    // - Eventos de mouse têm e.clientX diretamente
    // - Eventos de touch têm e.touches[0].clientX
    // O "?? state.current.lastX" é um fallback caso o touch não exista (ex: touchEnd não tem touches)
    const getX = (e: React.MouseEvent | React.TouchEvent) =>
        "touches" in e ? e.touches[0]?.clientX ?? state.current.lastX : e.clientX;

    // ========== onStart (mouseDown / touchStart) ==========
    // Chamada quando o usuário começa a arrastar o carrossel
    const onStart = (e: React.MouseEvent | React.TouchEvent) => {
        const s = state.current;
        const x = getX(e); // Pega a posição X inicial do cursor/toque

        // Atualiza o estado de uma vez: marca que está arrastando, zera o momentum,
        // e salva a posição inicial do mouse e do carrossel (para calcular o deslocamento depois)
        Object.assign(s, {
            dragging: true,        // Ativa o modo de arrasto
            momentum: 0,           // Cancela qualquer inércia que estava rolando
            startX: x,             // Onde o dedo/mouse começou
            startPos: s.pos,       // Onde o carrossel estava quando começou
            lastX: x,              // Inicializa "última posição" com a posição atual
            lastT: performance.now() // Inicializa "último timestamp" com o tempo atual
        });
    };

    // ========== onMove (mouseMove / touchMove) ==========
    // Chamada a cada movimento do mouse/dedo enquanto arrasta
    const onMove = (e: React.MouseEvent | React.TouchEvent) => {
        const s = state.current;

        // Se não está arrastando, ignora o evento
        if (!s.dragging) return;

        // Previne o comportamento padrão (ex: seleção de texto durante arrasto)
        if ("preventDefault" in e) e.preventDefault();

        const x = getX(e);             // Posição atual do cursor
        const now = performance.now();   // Timestamp atual (milissegundos de alta precisão)
        const dt = now - s.lastT;        // Tempo decorrido desde a última leitura (em ms)

        // Move o carrossel: posição original + quanto o dedo se deslocou desde o início
        s.pos = s.startPos + (x - s.startX);

        // Calcula a velocidade instantânea do arrasto (px/ms → px/frame)
        // Multiplicamos por 16 porque 1 frame ≈ 16ms (60fps)
        // Essa velocidade será usada como inércia quando o usuário soltar
        if (dt > 0) s.momentum = ((x - s.lastX) / dt) * 16;

        // Atualiza as referências para a próxima leitura
        s.lastX = x;
        s.lastT = now;
    };

    // ========== onEnd (mouseUp / touchEnd / mouseLeave) ==========
    // Chamada quando o usuário solta o arrasto
    const onEnd = () => {
        const s = state.current;

        // Se não estava arrastando, não faz nada
        if (!s.dragging) return;

        // Desativa o modo de arrasto — o loop animate() vai começar a processar o momentum
        s.dragging = false;

        // Limita a velocidade do momentum entre -20 e +20 px/frame
        // para evitar que um arrasto muito rápido faça o carrossel "voar"
        s.momentum = Math.max(-20, Math.min(20, s.momentum));

        // Se a velocidade é muito baixa, zera para não ficar com micro-movimento
        if (Math.abs(s.momentum) < 0.5) s.momentum = 0;
    };

    // ========== renderCards ==========
    // Renderiza a lista de cards. Chamamos 2 vezes ("a" e "b") para ter duas
    // cópias idênticas lado a lado — necessário para o loop infinito funcionar.
    const renderCards = (prefix: string) =>
        cards.map((card, i) => (
            <div key={`${prefix}-${card.id}-${i}`} className="group shrink-0 flex flex-col gap-4 w-[15rem] xl:w-[30rem]">
                <div className="w-full h-[20rem] xl:h-[35rem] overflow-hidden shadow-md transition-transform duration-300 group-hover:scale-[1.01]">
                    <img src={card.image} alt={card.alt} draggable="false"
                        className="w-full h-full object-cover grayscale-0 md:grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out select-none" />
                </div>
                <h3 className="font-serif text-xl xl:text-2xl text-ebano">{card.titulo}</h3>
            </div>
        ));

    return (
        <section id="portfolio" className="w-full section-h flex flex-col items-center justify-start overflow-hidden">
            <div className="container flex flex-row justify-between items-end w-full py-10">
                <div className="flex flex-col gap-3 xl:gap-0 items-start">
                    <span className="font-jont font-bold text-sm text-terra tracking-[0.375rem] uppercase">Nossa galeria</span>
                    <h2 className="font-serif text-3xl xl:text-5xl text-ebano items-start">
                        <span>Peças{" "}</span>
                        <span className="font-serif font-light italic text-3xl xl:text-5xl text-terra">Icônicas</span>
                    </h2>
                </div>
                <span className="desktop-only font-jont text-lg text-grafite">Arraste para navegar em nossas criações recentes</span>
            </div>

            {/* Área visível do carrossel — overflow:hidden esconde o que está fora */}
            {/* onMouseEnter: muda velocidade alvo para 0 (vai parar suavemente) */}
            {/* onMouseLeave: volta velocidade alvo para 0.8 (retoma autoplay suave) */}
            <div className="w-full overflow-hidden cursor-grab active:cursor-grabbing"
                onMouseDown={onStart} onMouseMove={onMove} onMouseUp={onEnd}
                onMouseEnter={() => { state.current.target = 0; }}
                onMouseLeave={() => { state.current.target = 0.8; onEnd(); }}
                onTouchStart={onStart} onTouchMove={onMove} onTouchEnd={onEnd}>

                {/* Trilha que se move — will-change-transform avisa o navegador para otimizar com GPU */}
                <div ref={trackRef} className="flex gap-6 w-max py-4 select-none will-change-transform">
                    {renderCards("a")}  {/* Cópia 1 dos cards */}
                    {renderCards("b")}  {/* Cópia 2 dos cards (idêntica, para loop infinito) */}
                </div>
            </div>
        </section>
    );
}