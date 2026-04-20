import Marquee from "react-fast-marquee";
import { Asterisk } from "lucide-react";

const CLIENTS = [
  "Sudha Medical College",
  "Sims Hospital",
  "Jain Fertility",
  "Bharti Hospital",
  "Mangalam Medicity",
  "Marbal City Hospital",
  "Jansewa Hospital",
  "Asmi Global Software",
  "Tantia",
  "Ne Clinic",
];

export default function MarqueeSection() {
  return (
    <section
      data-testid="marquee-section"
      className="border-y border-[#E5E7EB] bg-[#F4F4F1] py-3.5 overflow-hidden"
    >
      <Marquee gradient={true} gradientColor="#F4F4F1" speed={40} pauseOnHover={true}>
        <div className="flex items-center">
          {CLIENTS.map((c, i) => (
            <div key={i} className="flex items-center gap-8 px-10 shrink-0">
              <Asterisk
                size={16}
                strokeWidth={1.2}
                className="text-[#0047AB]"
              />
              <span className="font-display text-[18px] md:text-[22px] tracking-tight text-[#1A1A1A] whitespace-nowrap">
                {c}
              </span>
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
}
