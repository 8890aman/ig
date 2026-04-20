import { Youtube, Facebook, Instagram, Linkedin, ArrowUp } from "lucide-react";

const COLUMNS = [
  {
    title: "Services",
    links: [
      ["Network Setup", "#services"],
      ["Cybersecurity", "#services"],
      ["Cloud Server Setup", "#services"],
      ["Backup & Data Security", "#services"],
      ["Remote Management", "#services"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About", "#top"],
      ["Industries", "#industries"],
      ["Team", "#team"],
      ["Journal", "#blog"],
    ],
  },
  {
    title: "Support",
    links: [
      ["Client Support", "#contact"],
      ["Help & FAQ", "#contact"],
      ["Contact", "#contact"],
    ],
  },
];

const SOCIALS = [
  { icon: Youtube, href: "https://www.youtube.com/@installerguru", label: "YouTube" },
  { icon: Facebook, href: "https://www.facebook.com/installerguruindia", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/installerguru", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/installerguru", label: "LinkedIn" },
];

export default function Footer() {
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

            <div className="mt-8 flex items-center gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  data-testid={`footer-social-${s.label.toLowerCase()}`}
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
                  {col.links.map(([label, href]) => (
                    <li key={label}>
                      <a
                        href={href}
                        data-testid={`footer-link-${label.toLowerCase().replace(/\s|&/g, "-")}`}
                        className="text-[14px] text-[#1A1A1A] link-underline"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BIG wordmark - CONTAINER FLUID */}
      <div
        data-testid="footer-wordmark"
        className="border-t border-[#E5E7EB] py-10 md:py-14 overflow-hidden bg-white flex justify-center"
      >
        <div className="font-display text-[12vw] md:text-[14vw] leading-[0.85] tracking-[-0.04em] font-medium text-[#1A1A1A] whitespace-nowrap select-none px-4 text-center">
          INSTALLER<span className="text-[#0047AB]">GURU.</span>
        </div>
      </div>

      <div className="container-custom py-10">
        {/* Bottom row */}
        <div className="border-t border-[#E5E7EB] pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[11px] font-mono uppercase tracking-[0.15em] text-[#52525B]">
          <div>© 2025 InstallerGuru · Jaipur, IN</div>
          <div className="flex items-center gap-6">
            <span>Crafted with care ·{" "}
              <a href="mailto:guruinstaller@gmail.com" className="link-underline text-[#1A1A1A]">
                guruinstaller@gmail.com
              </a>
            </span>
            <a
              href="#top"
              data-testid="footer-back-to-top"
              className="inline-flex items-center gap-1.5 text-[#1A1A1A] link-underline"
            >
              Back to top <ArrowUp size={11} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
