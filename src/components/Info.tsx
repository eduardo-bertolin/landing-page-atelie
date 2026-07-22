import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const STATS = [
  { value: 12, suffix: "+", label: "Anos de experiência" },
  { value: 450, suffix: "+", label: "Clientes satisfeitas" },
  { value: 100, suffix: "%", label: "Autoral & artesanal" },
  { value: 1200, suffix: "+", label: "Peças entregues" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, target, { duration: 2, ease: [0.22, 1, 0.36, 1] });
    return () => controls.stop();
  }, [inView, count, target]);

  useEffect(() => {
    const unsub = rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = `${v}${suffix}`;
    });
    return () => unsub();
  }, [rounded, suffix]);

  return <span ref={ref}>{`0${suffix}`}</span>;
}

export default function Info() {
  return (
    <section
      id="informacoes"
      className="relative w-full bg-[color:var(--color-sand)] border-y border-[color:var(--color-border)]"
      data-testid="info-section"
    >
      <div className="container-x grid grid-cols-2 lg:grid-cols-4 gap-y-8">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className={`flex flex-col items-center text-center py-10 md:py-12 ${
              i !== 0 ? "lg:border-l" : ""
            } ${i > 0 ? "border-l md:border-l" : ""} border-[color:var(--color-border)]`}
          >
            <span className="font-serif text-4xl md:text-6xl tracking-tight text-[color:var(--color-terracotta)]">
              <Counter target={s.value} suffix={s.suffix} />
            </span>
            <span className="mt-3 text-[0.7rem] md:text-xs font-medium tracking-[0.28em] uppercase text-[color:var(--color-ink-soft)]">
              {s.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
