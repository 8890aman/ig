import { motion } from "framer-motion";
import {
  Network,
  Shield,
  Server,
  Cloud,
  HardDrive,
  Monitor,
  Code2,
  Database,
  ArrowUpRight,
} from "lucide-react";

const SERVICES = [
  {
    n: "01",
    icon: Network,
    title: "Network Setup",
    desc: "Design, implement and optimize secure, scalable networks with proper device setup and structured configuration.",
    tags: ["LAN/WAN", "Wi-Fi 6", "Structured Cabling"],
  },
  {
    n: "02",
    icon: Shield,
    title: "Cybersecurity",
    desc: "Firewall setup, antivirus configuration, vulnerability analysis and data security against cyber threats.",
    tags: ["Firewall", "EDR", "Audit"],
  },
  {
    n: "03",
    icon: Server,
    title: "Server Management",
    desc: "Physical and virtual machine configuration with proactive monitoring, maintenance and troubleshooting.",
    tags: ["Hyper-V", "Proxmox", "Linux"],
  },
  {
    n: "04",
    icon: Cloud,
    title: "Cloud Server Setup",
    desc: "Deploy and manage secure cloud servers and private cloud solutions like Nextcloud for remote access.",
    tags: ["Nextcloud", "Hybrid", "Remote"],
  },
  {
    n: "05",
    icon: HardDrive,
    title: "Backup & Data Security",
    desc: "Encrypted, automated, unlimited and immutable data backups using Veeam, Acronis and Veritas.",
    tags: ["Veeam", "Acronis", "Immutable"],
  },
  {
    n: "06",
    icon: Monitor,
    title: "Remote Management",
    desc: "24×7 remote IT support, secure access setup (TightVNC, RDP), and continuous system monitoring.",
    tags: ["RDP", "VNC", "24/7"],
  },
  {
    n: "07",
    icon: Code2,
    title: "Software Solutions",
    desc: "Hospital, school, accounting and custom software with installation, training and ongoing support.",
    tags: ["HMS", "ERP", "Custom"],
  },
  {
    n: "08",
    icon: Database,
    title: "Storage Server Setup",
    desc: "NAS Core, NAS Scale, SAS storage and customized storage servers with backup and scalability.",
    tags: ["TrueNAS", "SAS", "NAS"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="relative py-24 md:py-36 border-b border-[#E5E7EB]"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 md:mb-24">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-6 h-px bg-[#0047AB]" />
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#0047AB] font-semibold">
                §·02 — Services
              </span>
            </div>
            <h2
              data-testid="services-heading"
              className="font-display text-[40px] md:text-[56px] lg:text-[64px] leading-[0.95] tracking-tight font-medium"
            >
              Eight <em className="italic font-normal text-[#0047AB]">disciplines.</em>
              <br /> One practice.
            </h2>
          </div>
          <div className="md:col-span-5 md:col-start-8 flex items-end">
            <p className="text-[17px] md:text-[19px] leading-relaxed text-[#52525B]">
              From the first site survey to 3am incident response, we run
              everything in-house. No middlemen, no subcontracting, no excuses —
              just precise, documented work by engineers who care.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-t border-[#E5E7EB]">
          {SERVICES.map((s, i) => (
            <motion.a
              key={s.n}
              href="#contact"
              data-testid={`service-card-${s.n}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.08, ease: [0.2, 0.9, 0.3, 1] }}
              className="group relative border-r border-b border-[#E5E7EB] p-7 md:p-8 bg-white hover:bg-[#1A1A1A] transition-colors duration-500 min-h-[280px] flex flex-col"
            >
              <div className="flex items-start justify-between mb-10">
                <span className="font-mono text-[11px] text-[#52525B] group-hover:text-white/50 transition">
                  / {s.n}
                </span>
                <ArrowUpRight
                  size={16}
                  className="text-[#1A1A1A] group-hover:text-[#0047AB] group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-500"
                />
              </div>

              <s.icon
                size={32}
                strokeWidth={1.25}
                className="text-[#1A1A1A] group-hover:text-[#0047AB] transition-colors duration-500 mb-6"
              />

              <h3 className="font-display text-[22px] md:text-[26px] tracking-tight leading-tight font-medium text-[#1A1A1A] group-hover:text-white transition-colors duration-500">
                {s.title}
              </h3>
              <p className="mt-3 text-[13px] leading-relaxed text-[#52525B] group-hover:text-white/70 transition-colors duration-500 flex-1">
                {s.desc}
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 border border-[#E5E7EB] group-hover:border-white/20 text-[#52525B] group-hover:text-white/60 transition"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
