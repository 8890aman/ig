import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowLeft, 
  CheckCircle2, 
  ChevronRight, 
  Zap, 
  ShieldCheck, 
  Activity,
  Users,
  Target
} from 'lucide-react';
import { INDUSTRIES_DATA } from '../data/industriesData';
import Navbar from '../components/sections/Navbar';
import Footer from '../components/sections/Footer';

const IndustryDetail = () => {
  const { slug } = useParams();
  const industry = INDUSTRIES_DATA[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!industry) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F9F9F8]">
        <div className="text-center">
          <h1 className="text-4xl font-display mb-4">Sector not found</h1>
          <Link to="/" className="text-[#0047AB] font-mono uppercase tracking-widest text-sm">Return Home</Link>
        </div>
      </div>
    );
  }

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div className="bg-[#F9F9F8] text-[#1A1A1A] selection:bg-[#0047AB] selection:text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-[#E5E7EB]">
        <motion.div 
          style={{ opacity, scale }}
          className="container-custom relative z-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            <div className="lg:col-span-5">
              <Link 
                to="/#industries" 
                className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[#52525B] hover:text-[#0047AB] transition-colors mb-12"
              >
                <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
                Back to sectors
              </Link>
              
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-px bg-[#0047AB]" />
                <span className="font-mono text-[12px] text-[#0047AB] font-bold">SECTOR {industry.n}</span>
              </div>
              
              <h1 className="font-display text-[48px] md:text-[80px] lg:text-[110px] leading-[0.85] tracking-tighter mb-10 font-medium">
                {industry.title} <br/>
                <span className="text-[#0047AB] italic font-normal">Solutions</span>
              </h1>
              
              <p className="text-[20px] md:text-[24px] leading-snug text-[#52525B] font-medium max-w-lg">
                {industry.subtitle}
              </p>
            </div>
            
            <div className="lg:col-span-7 flex justify-end">
              <div className="relative w-full max-w-[850px] aspect-[4/5] lg:aspect-[16/11]">
                <div className="absolute inset-0 border border-[#E5E7EB] translate-x-6 translate-y-6" />
                <div className="relative w-full h-full overflow-hidden border border-[#1A1A1A]">
                   <motion.img 
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.8, ease: [0.2, 0.9, 0.3, 1] }}
                    src={industry.image} 
                    alt={industry.title} 
                    className="w-full h-full object-cover" 
                   />
                   <div className="absolute inset-0 bg-[#0047AB]/5 mix-blend-overlay" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="py-24 md:py-32">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
            
            {/* Left side: Overview */}
            <div className="lg:col-span-7">
              <h2 className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#0047AB] mb-12 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#0047AB]" />
                Sector Strategy
              </h2>
              <p className="text-[20px] md:text-[28px] leading-tight mb-12 font-medium tracking-tight">
                {industry.longDesc}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-20">
                {industry.features.map((feature, idx) => (
                  <div key={idx} className="group p-8 border border-[#E5E7EB] bg-white hover:border-[#0047AB] transition-all duration-500 hover:shadow-xl hover:shadow-[#0047AB]/5">
                    <div className="w-10 h-10 grid place-items-center bg-[#F9F9F8] mb-6 group-hover:bg-[#0047AB] group-hover:text-white transition-colors duration-500">
                        <Activity size={18} />
                    </div>
                    <h3 className="font-display text-[22px] mb-4 font-semibold">{feature.title}</h3>
                    <p className="text-[#52525B] text-[15px] leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side: Clients & Benefits */}
            <div className="lg:col-span-4 lg:col-start-9">
              <div className="sticky top-32 space-y-16">
                
                {/* Trusted By */}
                <div>
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#52525B] mb-8 flex items-center gap-2">
                    <Users size={14} /> Major Clients
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {industry.clients.map((c) => (
                      <span key={c} className="px-4 py-2 border border-[#E5E7EB] font-mono text-[12px] hover:bg-[#1A1A1A] hover:text-white transition-colors cursor-default">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Benefits List */}
                <div className="p-8 bg-[#1A1A1A] text-white">
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#0047AB] mb-8">Operational ROI</h3>
                  <ul className="space-y-4">
                    {industry.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3 group">
                        <Target size={18} className="text-[#0047AB] mt-0.5" />
                        <span className="text-[15px] text-white/80 group-hover:text-white transition-colors">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Vertical CTA */}
                <div className="pt-8 border-t border-[#E5E7EB]">
                   <p className="text-[14px] text-[#52525B] mb-6 font-mono uppercase tracking-wider">Deploy sector-specific tech</p>
                   <Link to="/#contact" className="w-full h-14 grid place-items-center bg-[#0047AB] text-white font-medium hover:bg-[#1A1A1A] transition-colors duration-500">
                     Request sector audit
                   </Link>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-white border-y border-[#E5E7EB]">
        <div className="container-custom text-center max-w-4xl">
          <industry.icon size={48} className="mx-auto mb-10 text-[#0047AB]" />
          <h2 className="font-display text-[32px] md:text-[48px] leading-[1.1] mb-12">
            "Technology without domain expertise is just hardware. We build for the workflow, not just the wire."
          </h2>
          <div className="flex items-center justify-center gap-4 py-4 border-y border-[#E5E7EB]/50 w-fit mx-auto px-8">
            <span className="font-mono text-[12px] uppercase tracking-widest font-bold">Domain Specialists</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#0047AB]" />
            <span className="font-mono text-[12px] uppercase tracking-widest text-[#52525B]">Installer Guru Architects</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IndustryDetail;
