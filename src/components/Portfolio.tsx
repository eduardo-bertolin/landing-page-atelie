import { useEffect, useRef, useState } from "react";
import Prod1 from "../assets/images/prod1.jpeg";
import Prod2 from "../assets/images/prod2.jpeg";
import Prod3 from "../assets/images/prod3.jpeg";
import Prod4 from "../assets/images/prod4.jpeg";
import Prod5 from "../assets/images/prod5.jpeg";


export default function Portfolio() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeftState, setScrollLeftState] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    // Refs para o cálculo de inércia (momentum)
    const isDraggingRef = useRef(false);
    const lastXRef = useRef(0);
    const velocityRef = useRef(0);
    const momentumFrameId = useRef<number | null>(null);
    const scrollPosRef = useRef(0);

    const cards = [
        { id: 1, titulo: "Bolsa Artesanal", image: Prod1, alt: "Trabalho de Costura e acabamento" },
        { id: 2, titulo: "Bolsa Artesanal", image: Prod2, alt: "Confecção artesanal sob medida" },
        { id: 3, titulo: "Bolsa Artesanal", image: Prod3, alt: "Detalhes de costura criativa" },
        { id: 4, titulo: "Bolsa Artesanal", image: Prod4, alt: "Peças exclusivas e patchwork" },
        { id: 5, titulo: "Bolsa Artesanal", image: Prod5, alt: "Peças exclusivas e patchwork" },
    ];

    // Multiplica a lista 10 vezes para garantir que o carrossel funcione
    const duplicatedCards = Array(10).fill(cards).flat();

    const getSingleSetWidth = () => {
        const container = containerRef.current;
        if (!container) return 0;
        if (container.children.length >= cards.length + 1) {
            const firstCard = container.children[0] as HTMLElement;
            const nextSetCard = container.children[cards.length] as HTMLElement;
            const diff = nextSetCard.offsetLeft - firstCard.offsetLeft;
            if (diff > 0) return diff;
        }
        return container.scrollWidth / 10;
    };

    // Inicializa o carrossel no meio 
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const initScroll = () => {
            const width = getSingleSetWidth();
            if (width > 0) {
                const initialScroll = width * 4;
                container.scrollLeft = initialScroll;
                scrollPosRef.current = initialScroll;
            }
        };

        // Pequeno timeout para garantir que o layout renderizou na tela antes de calcular a largura
        const timer = setTimeout(initScroll, 50);
        return () => clearTimeout(timer);
    }, []);

    // detecta quando o scroll passa dos limites e faz o salto imperceptível
    const handleScroll = () => {
        const container = containerRef.current;
        if (!container || isDraggingRef.current) return; // evita interferir no meio do arrasto físico do usuário

        const width = getSingleSetWidth();
        if (width === 0) return;

        // Se rolar muito para a direita
        if (container.scrollLeft >= width * 6) {
            container.scrollLeft -= width * 2;
        }
        // Se rolar muito para a esquerda
        else if (container.scrollLeft <= width * 3) {
            container.scrollLeft += width * 2;
        }
    };

    // 2. Autoplay: desliza suavemente para a esquerda infinitamente
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let animationFrameId: number;

        const scroll = () => {
            // Apenas executa o autoplay se não estiver arrastando, não estiver com o mouse por cima
            // E se a inércia (momentum) do último arrasto já tiver parado
            if (!isDraggingRef.current && !isHovered && Math.abs(velocityRef.current) < 0.2) {
                // Sincroniza a posição caso o usuário tenha rolado manualmente
                if (Math.abs(scrollPosRef.current - container.scrollLeft) > 1) {
                    scrollPosRef.current = container.scrollLeft;
                }

                // Incrementa a posição real com precisão de ponto flutuante
                scrollPosRef.current += 0.8;

                // Loop infinito também durante o autoplay
                const width = getSingleSetWidth();
                if (width > 0 && scrollPosRef.current >= width * 6) {
                    scrollPosRef.current -= width * 2;
                }
                container.scrollLeft = scrollPosRef.current;
            } else {
                // Sincroniza a posição enquanto o usuário arrasta ou ocorre a inércia
                scrollPosRef.current = container.scrollLeft;
            }
            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);

        return () => cancelAnimationFrame(animationFrameId);
    }, [isHovered]);

    // Função que aplica a desaceleração física (inércia/momentum)
    const startMomentum = () => {
        const container = containerRef.current;
        if (!container) return;

        if (momentumFrameId.current) {
            cancelAnimationFrame(momentumFrameId.current);
        }

        const decay = () => {
            // Fricção física (0.95 significa que perde 5% da velocidade por frame)
            velocityRef.current *= 0.95;

            // Aplica a rolagem horizontal
            container.scrollLeft -= velocityRef.current;

            // Mantém o loop infinito rodando perfeitamente durante a desaceleração
            const width = getSingleSetWidth();
            if (width > 0) {
                if (container.scrollLeft >= width * 6) {
                    container.scrollLeft -= width * 2;
                } else if (container.scrollLeft <= width * 3) {
                    container.scrollLeft += width * 2;
                }
            }

            // Continua animando enquanto a velocidade for perceptível (maior que 0.2px por frame)
            if (Math.abs(velocityRef.current) > 0.2) {
                momentumFrameId.current = requestAnimationFrame(decay);
            } else {
                velocityRef.current = 0; // Zera totalmente para liberar o autoplay
            }
        };

        momentumFrameId.current = requestAnimationFrame(decay);
    };

    // 3. Drag to Scroll (Arrastar com o mouse no Desktop)
    const handleMouseDown = (e: React.MouseEvent) => {
        const container = containerRef.current;
        if (!container) return;

        // Cancela qualquer inércia que esteja ativa no momento do clique
        if (momentumFrameId.current) {
            cancelAnimationFrame(momentumFrameId.current);
        }

        setIsDragging(true);
        isDraggingRef.current = true;
        setStartX(e.pageX - container.offsetLeft);
        setScrollLeftState(container.scrollLeft);

        // Inicializa dados para o cálculo da velocidade
        lastXRef.current = e.pageX;
        velocityRef.current = 0;
    };

    const handleMouseLeave = () => {
        if (isDraggingRef.current) {
            setIsDragging(false);
            isDraggingRef.current = false;
            startMomentum(); // Começa a inércia ao sair arrastando
        }
        setIsHovered(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        isDraggingRef.current = false;
        startMomentum(); // Começa a inércia ao soltar o mouse
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDraggingRef.current) return;
        e.preventDefault();

        const container = containerRef.current;
        if (!container) return;

        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 1.5;
        container.scrollLeft = scrollLeftState - walk;

        // Calcula a velocidade baseada na distância percorrida desde o último evento de mouse
        velocityRef.current = e.pageX - lastXRef.current;
        lastXRef.current = e.pageX;

        // Ajusta o loop infinito também durante o arrasto se passar dos limites
        const width = getSingleSetWidth();
        if (width > 0) {
            if (container.scrollLeft >= width * 6) {
                container.scrollLeft -= width * 2;
                setStartX(e.pageX - container.offsetLeft);
                setScrollLeftState(container.scrollLeft);
            } else if (container.scrollLeft <= width * 3) {
                container.scrollLeft += width * 2;
                setStartX(e.pageX - container.offsetLeft);
                setScrollLeftState(container.scrollLeft);
            }
        }
    };

    // Limpa frames de animação ativos ao desmontar o componente
    useEffect(() => {
        return () => {
            if (momentumFrameId.current) cancelAnimationFrame(momentumFrameId.current);
        };
    }, []);

    return (
        <section id="portfolio" className="w-full h-[42rem] xl:section-h flex flex-col items-center justify-start overflow-hidden">
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

            {/* Container do Carrossel */}
            <div
                ref={containerRef}
                onScroll={handleScroll}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onTouchStart={() => setIsHovered(true)}
                onTouchEnd={() => setIsHovered(false)}
                onTouchCancel={() => setIsHovered(false)}
                className="w-full flex flex-row gap-3 overflow-x-auto scrollbar-none cursor-grab active:cursor-grabbing select-none py-4 px-10"
            >
                {duplicatedCards.map((card, index) => (
                    <div
                        key={index}
                        className="group shrink-0 flex flex-col gap-2 w-[15rem] xl:w-[25rem]"
                    >
                        <div className="w-full h-[25rem] xl:h-[30rem] overflow-hidden shadow-md transition-transform duration-300 group-hover:scale-[1.01]">
                            <img
                                src={card.image}
                                alt={card.alt}
                                draggable="false"
                                onDragStart={(e) => e.preventDefault()}
                                className="w-full h-full object-cover grayscale-0 xl:grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out select-none"
                            />
                        </div>

                        <div className="">
                            <h3 className="font-serif text-xl xl:text-2xl text-ebano">
                                {card.titulo}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}