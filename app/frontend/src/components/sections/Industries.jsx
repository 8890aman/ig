import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { INDUSTRIES_DATA } from "../../data/industriesData";

const INDUSTRIES = Object.values(INDUSTRIES_DATA);

export default function Industries() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section
      id="industries"
      data-testid="industries-section"
      className="relative py-24 md:py-36 border-b border-[#E5E7EB] bg-white"
    >
      <div className="container-custom">
        {/* Header row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16 md:mb-20 items-end">
          <div className="md:col-span-7">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-6 h-px bg-[#0047AB]" />
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#0047AB] font-semibold">
                §·03 — Industries
              </span>
            </div>
            <h2
              data-testid="industries-heading"
              className="font-display text-[40px] md:text-[56px] lg:text-[64px] leading-[0.95] tracking-tight font-medium"
            >
              Highly tailored — <br />
              <em className="italic font-normal text-[#0047AB]">
                for your sector.
              </em>
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <p className="text-[16px] leading-relaxed text-[#52525B]">
              Each sector has its own rhythm. We speak hospital uptime, campus
              semester cycles and enterprise audit language.
            </p>
          </div>
        </div>

        {/* 50/50 image + cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 relative aspect-[4/5] overflow-hidden border border-[#E5E7EB] bg-[#1A1A1A] lg:sticky lg:top-24"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIdx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                src={INDUSTRIES[activeIdx].image}
                alt={INDUSTRIES[activeIdx].title}
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 hover:scale-105 transition-all duration-[1200ms] ease-out"
              />
            </AnimatePresence>
            <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-[0.2em] text-white/90 bg-black/30 backdrop-blur px-2 py-1">
              Sector · {INDUSTRIES[activeIdx].title}
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-black/30 backdrop-blur-md inline-block p-4 md:p-6 border-l-2 border-[#0047AB]">
                <div className="font-display text-[24px] md:text-[36px] leading-none tracking-tight text-white">
                  {activeIdx === 0 ? "25+ hospitals" : activeIdx === 1 ? "10+ campuses" : "40+ enterprises"}
                  <br />
                  <span className="text-[#9BB7E0]">1 engineering partner.</span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-7 divide-y divide-[#E5E7EB] border-t border-b border-[#E5E7EB]">
            {INDUSTRIES.map((ind, i) => (
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                onMouseEnter={() => setActiveIdx(i)}
              >
                <Link
                  to={`/industries/${ind.id}`}
                  data-testid={`industry-${ind.title.toLowerCase()}`}
                  className="group grid grid-cols-12 gap-4 md:gap-6 py-8 md:py-10 hover:bg-[#F9F9F8] transition-colors duration-500 px-2"
                >
                  <div className="col-span-12 md:col-span-1 flex items-start">
                    <ind.icon
                      size={24}
                      strokeWidth={1.2}
                      className="text-[#0047AB] group-hover:rotate-6 transition-transform duration-500"
                    />
                  </div>
                  <div className="col-span-12 md:col-span-5">
                    <h3 className="font-display text-[30px] md:text-[40px] leading-none tracking-tight font-medium mb-3">
                      {ind.title}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {ind.clients.map((c) => (
                        <span
                          key={c}
                          className="font-mono text-[10px] uppercase tracking-wider text-[#52525B] border border-[#E5E7EB] px-2 py-1"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-5 text-[14px] md:text-[15px] leading-relaxed text-[#52525B]">
                    {ind.desc}
                  </div>
                  <div className="col-span-12 md:col-span-1 flex items-start justify-end">
                    <ArrowUpRight
                      size={18}
                      className="text-[#1A1A1A] group-hover:text-[#0047AB] group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-500"
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
