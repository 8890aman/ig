import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const QUOTES = [
  {
    q: "From IT setup to customer service, Installer Guru handled everything smoothly. Their dedication and reliability truly impressed us.",
    who: "Sudha Medical College & Hospital",
    role: "IT Consultant",
  },
  {
    q: "Our institution's digital transition was made easy. From servers to student systems, everything was set up smoothly.",
    who: "Sims Hospital",
    role: "IT Consultant",
  },
  {
    q: "We needed a secure billing and backup solution, and Installer Guru delivered exactly what we wanted. Fast, secure, hassle-free.",
    who: "Jain Fertility & Mother Care",
    role: "IT Consultant",
  },
  {
    q: "Data protection was our top concern. They designed a robust IT security framework that gave us complete peace of mind.",
    who: "Ne Clinic",
    role: "IT Executive",
  },
  {
    q: "Installer Guru designed and implemented our network infrastructure flawlessly. Planning, execution, and support exceeded expectations.",
    who: "Manglam Medicity",
    role: "IT Executive",
  },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % QUOTES.length);
  const prev = () => setI((p) => (p - 1 + QUOTES.length) % QUOTES.length);
  const cur = QUOTES[i];

  return (
    <section
      data-testid="testimonials-section"
      className="relative py-24 md:py-36 border-b border-[#E5E7EB] bg-white"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-14">
          <div className="md:col-span-8">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-6 h-px bg-[#0047AB]" />
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#0047AB] font-semibold">
                §·06 — Praise
              </span>
            </div>
            <h2
              data-testid="testimonials-heading"
              className="font-display text-[40px] md:text-[56px] lg:text-[64px] leading-[0.95] tracking-tight font-medium"
            >
              What clients say — <br />
              <em className="italic font-normal text-[#0047AB]">
                when we're not in the room.
              </em>
            </h2>
          </div>
        </div>

        <div className="relative border-t border-b border-[#E5E7EB] py-14 md:py-20 grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 md:col-span-1 hidden md:block">
            <Quote
              size={40}
              strokeWidth={1}
              className="text-[#0047AB] -scale-x-100"
            />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="col-span-12 md:col-span-10"
            >
              <p
                data-testid="testimonial-quote"
                className="font-display text-[26px] md:text-[40px] lg:text-[48px] leading-[1.1] tracking-tight font-medium text-[#1A1A1A]"
              >
                &ldquo;{cur.q}&rdquo;
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-10 h-10 grid place-items-center border border-[#E5E7EB] font-mono text-[11px] text-[#0047AB]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <div className="font-display text-[17px] tracking-tight font-medium">
                    {cur.who}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#52525B] mt-0.5">
                    {cur.role}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center gap-2" data-testid="testimonials-dots">
            {QUOTES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                data-testid={`testimonial-dot-${idx}`}
                className={`h-px transition-all duration-500 ${idx === i
                  ? "w-10 bg-[#0047AB]"
                  : "w-5 bg-[#1A1A1A]/20 hover:bg-[#1A1A1A]/50"
                  }`}
                aria-label={`Show testimonial ${idx + 1}`}
              />
            ))}
            <span className="ml-4 font-mono text-[11px] text-[#52525B] tabular-nums">
              {String(i + 1).padStart(2, "0")} / {String(QUOTES.length).padStart(2, "0")}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              data-testid="testimonial-prev"
              aria-label="Previous testimonial"
              className="w-11 h-11 grid place-items-center border border-[#E5E7EB] hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A] transition-colors duration-500"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={next}
              data-testid="testimonial-next"
              aria-label="Next testimonial"
              className="w-11 h-11 grid place-items-center border border-[#E5E7EB] hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A] transition-colors duration-500"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
