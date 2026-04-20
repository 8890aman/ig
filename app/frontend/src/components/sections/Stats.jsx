import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 500, suffix: "+", label: "Deployments shipped", tag: "01" },
  { value: 50, suffix: "+", label: "Enterprise clients", tag: "02" },
  { value: 10, suffix: "yrs", label: "In the trenches", tag: "03" },
  { value: 24, suffix: "/7", label: "Monitoring cover", tag: "04" },
];

function Counter({ to, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1400;
    const startTs = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - startTs) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(start + (to - start) * eased));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to]);

  return (
    <span ref={ref} className="font-mono tabular-nums">
      {n}
      <span className="text-[#0047AB]">{suffix}</span>
    </span>
  );
}

export default function Stats() {
  return (
    <section
      data-testid="stats-section"
      className="border-b border-[#E5E7EB] bg-[#F9F9F8]"
    >
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#E5E7EB] border-x border-[#E5E7EB]">
          {STATS.map((s, i) => (
            <motion.div
              key={s.tag}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              data-testid={`stat-${s.tag}`}
              className="px-5 py-10 md:py-14 md:px-8"
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#52525B] mb-3">
                / {s.tag}
              </div>
              <div className="font-display text-[44px] md:text-[72px] leading-none tracking-[-0.03em] font-medium text-[#1A1A1A]">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-3 text-[13px] md:text-[14px] text-[#52525B] font-mono">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
