import { motion } from "framer-motion";

const TEAM = [
  {
    name: "Mr. Sudip Batabyal",
    role: "CEO",
    url: "https://www.installerguru.in/uploads/employee/1756291793_WhatsApp Image 2025-08-27 at 4.06.40 PM.jpeg",
  },
  {
    name: "Mahendra Raibari",
    role: "Hardware Support",
    url: "https://www.installerguru.in/uploads/employee/1748177020_editphoto.jpg",
  },
  {
    name: "Khushiram Gurjar",
    role: "Network Support",
    url: "https://www.installerguru.in/uploads/employee/1742974058_WhatsApp Image 2025-03-26 at 12.57.15_54f64ac3.jpg",
  },
  {
    name: "Birbal Sain",
    role: "System Admin",
    url: "https://www.installerguru.in/uploads/employee/1756292914_WhatsApp Image 2025-08-27 at 4.37.49 PM-removebg-preview.jpg",
  },
  {
    name: "Tapasi Batabyal",
    role: "Director",
    url: "https://www.installerguru.in/uploads/employee/1756292508_WhatsApp Image 2025-08-27 at 4.28.56 PM-removebg-preview.jpg",
  },
  {
    name: "Sandeep Sharma",
    role: "Network Administrator",
    url: "https://www.installerguru.in/uploads/employee/1748177502_1746526390_WhatsApp Image 2025-05-06 at 3.39.03 PM (1).jpeg",
  },
  {
    name: "Shyam Sharma",
    role: "Hardware Manager",
    url: "https://images.unsplash.com/photo-1576558656222-ba66febe3dec?crop=entropy&cs=srgb&fm=jpg&q=85",
  },
];

export default function Team() {
  return (
    <section
      id="team"
      data-testid="team-section"
      className="relative py-24 md:py-36 border-b border-[#E5E7EB] bg-[#F9F9F8]"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-14 items-end">
          <div className="md:col-span-7">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-6 h-px bg-[#0047AB]" />
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#0047AB] font-semibold">
                §·05 — People
              </span>
            </div>
            <h2
              data-testid="team-heading"
              className="font-display text-[40px] md:text-[56px] lg:text-[64px] leading-[0.95] tracking-tight font-medium"
            >
              Small team. <br />
              <em className="italic font-normal text-[#0047AB]">Deep bench.</em>
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <p className="text-[16px] leading-relaxed text-[#52525B]">
              Seven engineers who show up, take responsibility, and stay with
              you. No pods, no tier-1 forwarding — the person solving your
              problem is the person who built the system.
            </p>
          </div>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {TEAM.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
              data-testid={`team-member-${i}`}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#1A1A1A] border border-[#E5E7EB]">
                <img
                  src={m.url}
                  alt={m.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-[1100ms] ease-out"
                />
                <div className="absolute top-3 left-3 font-mono text-[9px] uppercase tracking-[0.2em] text-white/85 bg-black/30 backdrop-blur px-1.5 py-0.5">
                  0{i + 1}
                </div>
              </div>
              <div className="mt-3 flex items-baseline justify-between">
                <h3 className="font-display text-[16px] md:text-[18px] tracking-tight font-medium">
                  {m.name}
                </h3>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#52525B]">
                  {m.role}
                </span>
              </div>
            </motion.div>
          ))}

          {/* "Your seat" card */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.24 }}
            data-testid="team-join-card"
            className="group relative aspect-[4/5] border border-dashed border-[#1A1A1A]/30 flex items-center justify-center hover:bg-[#1A1A1A] hover:border-[#1A1A1A] transition-colors duration-500"
          >
            <div className="text-center px-4">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#0047AB] mb-3">
                + Open role
              </div>
              <div className="font-display text-[22px] leading-tight tracking-tight text-[#1A1A1A] group-hover:text-white transition-colors">
                Field Engineer <br /> (Jaipur)
              </div>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
