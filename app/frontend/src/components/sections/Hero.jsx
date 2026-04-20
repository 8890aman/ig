import { motion } from "framer-motion";
import { ArrowUpRight, Play, Circle } from "lucide-react";

const ease = [0.2, 0.9, 0.3, 1];

export default function Hero() {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden"
    >
      {/* soft grid lines */}
      <div className="absolute inset-0 grid-lines opacity-60 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] rounded-full bg-[#0047AB]/5 blur-[120px] pointer-events-none" />

      <div className="relative container-custom">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="flex items-center gap-3 mb-8"
          data-testid="hero-eyebrow"
        >
          <span className="w-8 h-px bg-[#0047AB]" />
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#0047AB] font-semibold">
            IT Infrastructure · Cybersecurity · Cloud
          </span>
          <span className="font-mono text-[11px] text-[#52525B]">
            / Est. Jaipur, IN
          </span>
        </motion.div>

        {/* H1 with staggered mask */}
        <h1
          data-testid="hero-heading"
          className="font-display font-medium tracking-[-0.03em] text-[44px] sm:text-[64px] md:text-[88px] lg:text-[112px] leading-[0.95] text-[#1A1A1A] max-w-[1200px]"
        >
          {["We engineer", "IT that hospitals", "& businesses", "rely on."].map(
            (line, i) => (
              <span key={i} className="mask-line">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.2 + i * 0.12, ease }}
                  className="inline-block"
                >
                  {i === 1 ? (
                    <>
                      IT that{" "}
                      <em className="italic font-normal text-[#0047AB] font-display">
                        hospitals
                      </em>
                    </>
                  ) : (
                    line
                  )}
                </motion.span>
              </span>
            ),
          )}
        </h1>

        {/* Lower grid */}
        <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease }}
            data-testid="hero-subtitle"
            className="md:col-span-5 text-[17px] md:text-[19px] leading-relaxed text-[#52525B] max-w-[500px]"
          >
            Highly tailored IT infrastructure — built, managed and supported by
            a small engineering team obsessed with uptime, security and calm
            operations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.05, ease }}
            className="md:col-span-4 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              data-testid="hero-cta-primary"
              className="btn-arrow group inline-flex items-center gap-2 bg-[#1A1A1A] text-white pl-5 pr-2 py-2.5 text-[14px] font-medium hover:bg-[#0047AB] transition-colors duration-500"
            >
              Free consultation
              <span className="w-7 h-7 grid place-items-center bg-white text-[#1A1A1A]">
                <ArrowUpRight size={16} strokeWidth={2} />
              </span>
            </a>
            <a
              href="https://youtu.be/GXsopis-2Ek"
              target="_blank"
              rel="noreferrer"
              data-testid="hero-cta-secondary"
              className="group inline-flex items-center gap-2.5 px-4 py-2.5 border border-[#1A1A1A] text-[14px] font-medium hover:bg-[#1A1A1A] hover:text-white transition-colors duration-500"
            >
              <Play
                size={13}
                strokeWidth={2}
                className="fill-current"
              />
              How we work
            </a>
          </motion.div>

          {/* Meta column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease }}
            className="md:col-span-3 md:ml-auto"
            data-testid="hero-meta"
          >
            <div className="flex items-center gap-2 mb-2">
              <motion.span
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-emerald-500"
              />
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#52525B]">
                Available · 24/7
              </span>
            </div>
            <div className="font-display text-[22px] leading-tight">
              500+ deployments
            </div>
            <div className="font-mono text-[12px] text-[#52525B] mt-1">
              Across healthcare, education & enterprise
            </div>
          </motion.div>
        </div>

        {/* Hero imagery strip — two framed panels */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.4, ease }}
          className="mt-16 md:mt-24 grid grid-cols-12 gap-4 md:gap-6"
          data-testid="hero-visuals"
        >
          <div className="col-span-12 md:col-span-8 relative aspect-[16/9] md:aspect-[2/1] overflow-hidden border border-[#E5E7EB] bg-[#0A0A0A] group">
            <img
              src="https://images.unsplash.com/photo-1639066648921-82d4500abf1a?crop=entropy&cs=srgb&fm=jpg&q=85"
              alt="Server rack infrastructure"
              className="w-full h-full object-cover opacity-90 grayscale-[0.25] group-hover:scale-[1.03] group-hover:grayscale-0 transition-all duration-[1200ms] ease-out"
            />
            <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-[0.18em] text-white/80 bg-black/30 backdrop-blur px-2 py-1">
              Datacenter · Jaipur
            </div>
            <div className="absolute bottom-4 right-4 flex items-center gap-2 font-mono text-[10px] text-white/80">
              <Circle size={8} className="fill-emerald-400 text-emerald-400" />
              UPTIME 99.98%
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 grid grid-rows-2 gap-4 md:gap-6">
            <div className="relative overflow-hidden border border-[#E5E7EB] bg-white p-6 flex flex-col justify-between hover-lift hover:border-[#0047AB] cursor-pointer">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#0047AB]">
                / 01 — Mission
              </div>
              <div className="font-display text-[22px] leading-tight tracking-tight">
                Calm, secure IT — from the first cable to the last backup.
              </div>
            </div>
            <div className="relative overflow-hidden border border-[#E5E7EB] bg-[#1A1A1A] text-white p-6 flex flex-col justify-between hover-lift cursor-pointer group">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/60">
                / 02 — Reach
              </div>
              <div className="font-display text-[40px] md:text-[52px] leading-none tracking-tight flex items-baseline gap-2">
                <span>10</span>
                <span className="text-[#0047AB]">+</span>
                <span className="text-[14px] font-mono text-white/60 ml-2">
                  years
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
