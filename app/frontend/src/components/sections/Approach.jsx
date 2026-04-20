import { motion } from "framer-motion";

const STEPS = [
  {
    n: "A.",
    title: "Listen & survey",
    body: "We start on-site. Floor plan in hand, we map every cable run, rack and risk before we quote.",
  },
  {
    n: "B.",
    title: "Design & document",
    body: "Architecture diagrams, asset inventory, bill of materials. Everything written down, nothing improvised.",
  },
  {
    n: "C.",
    title: "Deploy & harden",
    body: "Clean installations, labelled cables, secure defaults. Penetration-tested before handover.",
  },
  {
    n: "D.",
    title: "Operate & protect",
    body: "24/7 monitoring, immutable backups, quarterly security reviews. You sleep, we don't.",
  },
];

export default function Approach() {
  return (
    <section
      data-testid="approach-section"
      className="relative py-24 md:py-36 border-b border-[#E5E7EB]"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-14">
          <div className="md:col-span-6">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-6 h-px bg-[#0047AB]" />
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#0047AB] font-semibold">
                §·04 — Method
              </span>
            </div>
            <h2 className="font-display text-[40px] md:text-[56px] lg:text-[64px] leading-[0.95] tracking-tight font-medium">
              A four-beat <em className="italic font-normal text-[#0047AB]">rhythm.</em>
            </h2>
          </div>
          <div className="md:col-span-5 md:col-start-8 flex items-end">
            <p className="text-[16px] leading-relaxed text-[#52525B]">
              We've refined the same sequence across 500+ deployments. It's
              boring, repeatable, and that's the point.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 border-t border-[#E5E7EB]">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              data-testid={`approach-step-${i}`}
              className={`relative py-10 md:py-14 px-0 md:px-6 ${i > 0 ? "md:border-l md:border-[#E5E7EB]" : ""
                } ${i > 0 ? "border-t md:border-t-0 border-[#E5E7EB]" : ""}`}
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#0047AB] mb-6">
                STEP {s.n}
              </div>
              <h3 className="font-display text-[26px] md:text-[30px] tracking-tight leading-tight font-medium mb-3">
                {s.title}
              </h3>
              <p className="text-[14px] leading-relaxed text-[#52525B]">
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
