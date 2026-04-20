import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowUpRight, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative py-24 md:py-36 border-b border-[#E5E7EB] bg-[#1A1A1A] text-white overflow-hidden"
    >
      {/* blueprint dots */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] rounded-full bg-[#0047AB]/25 blur-[160px] pointer-events-none" />

      <div className="relative container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-7">
            <div className="flex items-center gap-2 mb-8">
              <span className="w-6 h-px bg-[#0047AB]" />
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#9BB7E0] font-semibold">
                §·08 — Let's talk
              </span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              data-testid="contact-heading"
              className="font-display text-[44px] md:text-[72px] lg:text-[96px] leading-[0.9] tracking-[-0.03em] font-medium"
            >
              Tell us about <br />
              your <em className="italic font-normal text-[#9BB7E0]">infrastructure.</em>
            </motion.h2>
            <p className="mt-8 md:text-[18px] leading-relaxed text-white/70 max-w-[520px]">
              A 30-minute call. We'll listen, ask a few pointed questions and
              tell you honestly whether we're the right fit. No pitch decks, no
              pressure.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="tel:7003489743"
                data-testid="contact-call-cta"
                className="btn-arrow group inline-flex items-center gap-2 bg-white text-[#1A1A1A] pl-5 pr-2 py-3 text-[14px] font-medium hover:bg-[#0047AB] hover:text-white transition-colors duration-500"
              >
                Book a call · +91 70034 89743
                <span className="w-7 h-7 grid place-items-center bg-[#1A1A1A] text-white group-hover:bg-white group-hover:text-[#0047AB]">
                  <ArrowUpRight size={16} strokeWidth={2} />
                </span>
              </a>
              <a
                href="https://wa.me/7003489743"
                target="_blank"
                rel="noreferrer"
                data-testid="contact-whatsapp"
                className="inline-flex items-center gap-2 px-5 py-3 border border-white/20 text-[14px] hover:bg-white hover:text-[#1A1A1A] transition-colors duration-500"
              >
                <MessageCircle size={15} /> WhatsApp
              </a>
            </div>
          </div>

          {/* Right column */}
          <div className="md:col-span-4 md:col-start-9 space-y-6">
            {[
              {
                icon: Phone,
                label: "Phone",
                value: "+91 70034 89743",
                href: "tel:7003489743",
                tid: "contact-phone",
              },
              {
                icon: Mail,
                label: "Email",
                value: "guruinstaller@gmail.com",
                href: "mailto:guruinstaller@gmail.com",
                tid: "contact-email",
              },
              {
                icon: MapPin,
                label: "Office",
                value: "04A - Narayan Vatika, Jamdoli\nJaipur, Rajasthan 302031",
                href: "https://maps.google.com/?q=Narayan+Vatika+Jamdoli+Jaipur",
                tid: "contact-address",
              },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.label === "Office" ? "_blank" : undefined}
                rel="noreferrer"
                data-testid={c.tid}
                className="group block border-t border-white/10 pt-5 hover:border-[#9BB7E0] transition-colors duration-500"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 mb-2">
                      / {c.label}
                    </div>
                    <div className="font-display text-[22px] md:text-[26px] leading-tight tracking-tight whitespace-pre-line">
                      {c.value}
                    </div>
                  </div>
                  <c.icon
                    size={18}
                    strokeWidth={1.3}
                    className="text-white/50 group-hover:text-[#9BB7E0] group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-500"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
