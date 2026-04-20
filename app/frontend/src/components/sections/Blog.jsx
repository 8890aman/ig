import { motion } from "framer-motion";
import { Play, ArrowUpRight } from "lucide-react";

const POSTS = [
  {
    id: "GXsopis-2Ek",
    date: "May 22, 2025",
    title: "How to Install Chrome OS Flex on Any PC or Laptop",
    tag: "OS",
    url: "https://www.installerguru.in/blog-details/22",
  },
  {
    id: "2aOzW10fty0",
    date: "Jul 05, 2025",
    title: "Set Up Your Private Cloud: Nextcloud on TrueNAS",
    tag: "Cloud",
    url: "https://www.installerguru.in/blog-details/29",
  },
  {
    id: "nuHrlFCmu-U",
    date: "Jul 07, 2025",
    title: "Install & Configure Snipe-IT for Asset Management",
    tag: "DevOps",
    url: "https://www.installerguru.in/blog-details/30",
  },
  {
    id: "FW0DYpbWUj4",
    date: "Jun 25, 2025",
    title: "Set Up SFTP Server on TrueNAS SCALE Using SFTPGo",
    tag: "Storage",
    url: "https://www.installerguru.in/blog-details/27",
  },
  {
    id: "NNuPseD1mmk",
    date: "May 06, 2025",
    title: "Install Deepseek AI Models Locally with LM Studio",
    tag: "AI",
    url: "https://www.installerguru.in/blog-details/17",
  },
  {
    id: "SnjYSnGLsbg",
    date: "Jun 30, 2025",
    title: "Set Up a Password Manager in Nextcloud",
    tag: "Security",
    url: "https://www.installerguru.in/blog-details/28",
  },
];

export default function Blog() {
  return (
    <section
      id="blog"
      data-testid="blog-section"
      className="relative py-24 md:py-36 border-b border-[#E5E7EB] bg-[#F9F9F8]"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-14 items-end">
          <div className="md:col-span-7">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-6 h-px bg-[#0047AB]" />
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#0047AB] font-semibold">
                §·07 — Journal
              </span>
            </div>
            <h2
              data-testid="blog-heading"
              className="font-display text-[40px] md:text-[56px] lg:text-[64px] leading-[0.95] tracking-tight font-medium"
            >
              We write & record <br />
              <em className="italic font-normal text-[#0047AB]">
                what we learn.
              </em>
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9 flex md:justify-end">
            <a
              href="https://www.youtube.com/@installerguru"
              target="_blank"
              rel="noreferrer"
              data-testid="blog-youtube-cta"
              className="btn-arrow group inline-flex items-center gap-2 border border-[#1A1A1A] px-4 py-2.5 text-[13px] font-medium hover:bg-[#1A1A1A] hover:text-white transition-colors duration-500"
            >
              Watch on YouTube
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {POSTS.map((p, i) => (
            <motion.a
              key={p.id}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              data-testid={`blog-card-${p.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              className="group relative bg-white border border-[#E5E7EB] hover:border-[#0047AB] transition-colors duration-500"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#1A1A1A]">
                <img
                  src={`https://img.youtube.com/vi/${p.id}/hqdefault.jpg`}
                  alt={p.title}
                  className="w-full h-full object-cover opacity-90 group-hover:scale-[1.05] group-hover:opacity-100 transition-all duration-[1000ms] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-3 left-3 font-mono text-[9px] uppercase tracking-[0.2em] text-white/95 bg-black/40 backdrop-blur px-2 py-0.5">
                  {p.tag}
                </div>
                <div className="absolute inset-0 grid place-items-center">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/90 backdrop-blur grid place-items-center group-hover:bg-[#0047AB] group-hover:text-white transition-colors duration-500">
                    <Play
                      size={18}
                      strokeWidth={2}
                      className="fill-current ml-0.5"
                    />
                  </div>
                </div>
              </div>
              <div className="p-5 md:p-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#52525B] mb-3">
                  {p.date}
                </div>
                <h3 className="font-display text-[18px] md:text-[20px] leading-tight tracking-tight font-medium text-[#1A1A1A] group-hover:text-[#0047AB] transition-colors duration-500">
                  {p.title}
                </h3>
                <div className="mt-4 flex items-center justify-between text-[12px]">
                  <span className="font-mono text-[#52525B]">Read tutorial</span>
                  <ArrowUpRight
                    size={14}
                    className="text-[#1A1A1A] group-hover:text-[#0047AB] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-500"
                  />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
