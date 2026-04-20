import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  Cpu, 
  Zap, 
  ShieldCheck, 
  Globe 
} from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import Navbar from '../components/sections/Navbar';
import Footer from '../components/sections/Footer';

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = SERVICES_DATA[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F9F9F8]">
        <div className="text-center">
          <h1 className="text-4xl font-display mb-4">Service not found</h1>
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
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div className="max-w-3xl">
              <Link 
                to="/#services" 
                className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[#52525B] hover:text-[#0047AB] transition-colors mb-8"
              >
                <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
                Back to solutions
              </Link>
              
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-px bg-[#0047AB]" />
                <span className="font-mono text-[12px] text-[#0047AB] font-bold">DISCIPLINE {service.n}</span>
              </div>
              
              <h1 className="font-display text-[48px] md:text-[80px] lg:text-[100px] leading-[0.9] tracking-tighter mb-8 font-medium">
                {service.title.split(' ')[0]} <br/>
                <span className="text-[#0047AB] italic font-normal">{service.title.split(' ').slice(1).join(' ')}</span>
              </h1>
              
              <p className="text-[20px] md:text-[24px] leading-snug text-[#52525B] max-w-2xl font-medium">
                {service.subtitle}
              </p>
            </div>
            
            <div className="hidden lg:block">
              <service.icon size={180} strokeWidth={0.5} className="text-[#1A1A1A]/5" />
            </div>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1A1A1A]/[0.02] -z-0 pointer-events-none" />
        <div className="absolute top-1/4 left-10 w-px h-64 bg-gradient-to-b from-transparent via-[#E5E7EB] to-transparent" />
      </section>

      {/* Main Content */}
      <section className="py-24 md:py-32">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
            
            {/* Left side: Overview */}
            <div className="lg:col-span-7">
              <h2 className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#0047AB] mb-12 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#0047AB]" />
                Overview
              </h2>
              <p className="text-[20px] md:text-[28px] leading-tight mb-12 font-medium tracking-tight">
                {service.longDesc}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="group p-8 border border-[#E5E7EB] bg-white hover:border-[#0047AB] transition-colors duration-500">
                    <div className="w-10 h-10 grid place-items-center bg-[#F9F9F8] mb-6 group-hover:bg-[#0047AB] group-hover:text-white transition-colors duration-500">
                        <Zap size={18} />
                    </div>
                    <h3 className="font-display text-[22px] mb-4 font-semibold">{feature.title}</h3>
                    <p className="text-[#52525B] text-[15px] leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side: Specs & Benefits */}
            <div className="lg:col-span-4 lg:col-start-9">
              <div className="sticky top-32 space-y-16">
                
                {/* Tech Stack */}
                <div>
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#52525B] mb-8">Hardware & Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {service.tech.map((t) => (
                      <span key={t} className="px-4 py-2 border border-[#E5E7EB] font-mono text-[12px] hover:bg-[#1A1A1A] hover:text-white transition-colors cursor-default">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Benefits List */}
                <div className="p-8 bg-[#1A1A1A] text-white">
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#0047AB] mb-8">Core Benefits</h3>
                  <ul className="space-y-4">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3 group">
                        <CheckCircle2 size={18} className="text-[#0047AB] mt-0.5" />
                        <span className="text-[15px] text-white/80 group-hover:text-white transition-colors">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Vertical CTA */}
                <div className="pt-8 border-t border-[#E5E7EB]">
                   <p className="text-[14px] text-[#52525B] mb-6 font-mono uppercase tracking-wider">Ready to secure your stack?</p>
                   <Link to="/#contact" className="w-full h-14 grid place-items-center bg-[#0047AB] text-white font-medium hover:bg-[#1A1A1A] transition-colors duration-500">
                     Request site survey
                   </Link>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 bg-white border-y border-[#E5E7EB]">
        <div className="container-custom text-center max-w-4xl">
          <ShieldCheck size={48} className="mx-auto mb-10 text-[#0047AB]" />
          <h2 className="font-display text-[32px] md:text-[48px] leading-[1.1] mb-12">
            "We don't just solve IT problems; we engineer the foundations that prevent them."
          </h2>
          <div className="flex items-center justify-center gap-4 py-4 border-y border-[#E5E7EB]/50 w-fit mx-auto px-8">
            <span className="font-mono text-[12px] uppercase tracking-widest font-bold">Engineering team</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#0047AB]" />
            <span className="font-mono text-[12px] uppercase tracking-widest text-[#52525B]">Installer Guru HQ</span>
          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <section className="py-24 md:py-32 bg-[#1A1A1A] text-white overflow-hidden relative">
        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-center md:text-left">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.4em] text-white/40 mb-6">Next Discipline</h3>
              <p className="font-display text-[40px] md:text-[64px] tracking-tighter leading-none hover:text-[#0047AB] transition-colors cursor-pointer">
                Explore <br/>More Solutions
              </p>
            </div>
            <Link to="/#services" className="w-24 h-24 rounded-full border border-white/20 grid place-items-center hover:bg-[#0047AB] hover:border-[#0047AB] transition-all duration-500 group">
              <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
        {/* Background text */}
        <div className="absolute -bottom-10 -left-10 text-[20vw] font-display font-black text-white/[0.03] select-none pointer-events-none leading-none">
          SYSTEMS
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
