import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import StaggeredMenu from "../ui/StaggeredMenu/StaggeredMenu";

const NAV = [
  { label: "Services", href: "/#services" },
  { label: "Industries", href: "/#industries" },
  { label: "Team", href: "/#team" },
  { label: "Journal", href: "/#blog" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      data-testid="site-navbar"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.2, 0.9, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-[#F9F9F8]/80 backdrop-blur-xl border-b border-[#E5E7EB]"
          : "bg-transparent border-b border-transparent"
        }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - Hidden on mobile, shown on desktop */}
          <Link
            to="/"
            data-testid="navbar-logo"
            className="hidden lg:flex items-center gap-2.5 group"
          >
            <div className="relative w-8 h-8 grid place-items-center border border-[#1A1A1A] group-hover:bg-[#1A1A1A] transition-colors duration-500">
              <div className="w-1.5 h-1.5 bg-[#0047AB] group-hover:bg-white transition-colors duration-500" />
            </div>
            <span className="font-display text-[17px] tracking-tight font-medium">
              Installer<span className="text-[#0047AB]">Guru</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {NAV.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                data-testid={`nav-${item.label.toLowerCase()}`}
                className="text-[13px] font-medium tracking-wide text-[#1A1A1A] link-underline"
              >
                <span className="font-mono text-[10px] text-[#0047AB] mr-1.5">
                  0{i + 1}
                </span>
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:7003489743"
              data-testid="navbar-phone"
              className="text-[13px] font-mono text-[#52525B] hover:text-[#1A1A1A] transition"
            >
              +91 70034 89743
            </a>
            <a
              href="#contact"
              data-testid="navbar-cta"
              className="btn-arrow group inline-flex items-center gap-1.5 bg-[#1A1A1A] text-white pl-4 pr-2 py-2 text-[13px] font-medium hover:bg-[#0047AB] transition-colors duration-500"
            >
              Free consultation
              <span className="w-6 h-6 grid place-items-center bg-white text-[#1A1A1A] group-hover:bg-white group-hover:text-[#0047AB]">
                <ArrowUpRight size={14} strokeWidth={2} />
              </span>
            </a>
          </div>

        </div>
      </div>

      {/* Mobile Staggered Menu - Provides the logo and CTA on mobile */}
      <div className="lg:hidden absolute top-0 left-0 right-0 h-full">
        <StaggeredMenu
          items={NAV}
          socialItems={[
            { label: "WhatsApp", link: "https://wa.me/917003489743" },
            { label: "LinkedIn", link: "https://linkedin.com" },
          ]}
          menuButtonColor="#1A1A1A"
          openMenuButtonColor="#1A1A1A"
          accentColor="#0047AB"
          colors={["#F9F9F8", "#0047AB"]}
        />
      </div>
    </motion.header>
  );
}
