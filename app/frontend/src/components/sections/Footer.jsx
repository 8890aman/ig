import { useState } from "react";
import { Youtube, Facebook, Instagram, Linkedin, ArrowUp } from "lucide-react";
import BookingModal from "../ui/BookingModal/BookingModal";

export default function Footer() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const COLUMNS = [
    {
      title: "Services",
      links: [
        { label: "Network Setup", href: "/#services" },
        { label: "Cybersecurity", href: "/#services" },
        { label: "Cloud Server Setup", href: "/#services" },
        { label: "Backup & Data Security", href: "/#services" },
        { label: "Remote Management", href: "/#services" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/#top" },
        { label: "Industries", href: "/#industries" },
        { label: "Team", href: "/#team" },
        { label: "Journal", href: "/#blog" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Book a call", isModal: true },
        { label: "Client Support", href: "/#contact" },
        { label: "Help & FAQ", href: "/#contact" },
      ],
    },
  ];

  const SOCIALS = [
    { icon: Youtube, href: "https://www.youtube.com/@installerguru", label: "YouTube" },
    { icon: Facebook, href: "https://www.facebook.com/installerguruindia", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/installerguru", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/installerguru", label: "LinkedIn" },
  ];

  return (
    <footer
      data-testid="site-footer"
      className="bg-[#F9F9F8] text-[#1A1A1A]"
    >
      <div className="container-custom pt-20 md:pt-28 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-9 h-9 grid place-items-center border border-[#1A1A1A]">
                <div className="w-1.5 h-1.5 bg-[#0047AB]" />
              </div>
              <span className="font-display text-[19px] tracking-tight font-medium">
                Installer<span className="text-[#0047AB]">Guru</span>
              </span>
            </div>
            <p className="text-[15px] leading-relaxed text-[#52525B] max-w-[380px]">
              Highly tailored IT infrastructure — built, managed and supported
              from Jaipur, serving hospitals, schools and enterprises across
              India.
            </p>

            <button 
              onClick={() => setIsBookingOpen(true)}
              className="mt-8 px-8 py-4 bg-[#1A1A1A] text-white font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-[#0047AB] transition-colors duration-500"
            >
              Consultation Request
            </button>

            <div className="mt-8 flex items-center gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 grid place-items-center border border-[#E5E7EB] hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A] transition-colors duration-500"
                >
                  <s.icon size={15} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Columns */}
          <div className="md:col-span-6 md:col-start-7 grid grid-cols-3 gap-6">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#0047AB] mb-5">
                  {col.title}
                </div>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {link.isModal ? (
                        <button
                          onClick={() => setIsBookingOpen(true)}
                          className="text-[14px] text-[#1A1A1A] link-underline text-left appearance-none bg-none border-none p-0"
                        >
                          {link.label}
                        </button>
                      ) : (
                        <a
                          href={link.href}
                          className="text-[14px] text-[#1A1A1A] link-underline"
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BIG wordmark */}
      <div className="border-t border-[#E5E7EB] py-10 md:py-14 overflow-hidden bg-white flex justify-center">
        <div className="font-display text-[12vw] md:text-[14vw] leading-[0.85] tracking-[-0.04em] font-medium text-[#1A1A1A] whitespace-nowrap select-none px-4 text-center">
          INSTALLER<span className="text-[#0047AB]">GURU.</span>
        </div>
      </div>

      <div className="container-custom py-10">
        <div className="border-t border-[#E5E7EB] pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[11px] font-mono uppercase tracking-[0.15em] text-[#52525B]">
          <div>© 2025 InstallerGuru · Jaipur, IN</div>
          <div className="flex items-center gap-6">
            <span>guruinstaller@gmail.com</span>
            <a href="#top" className="inline-flex items-center gap-1.5 text-[#1A1A1A] link-underline">
              Back to top <ArrowUp size={11} />
            </a>
          </div>
        </div>
      </div>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </footer>
  );
}
