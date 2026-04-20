import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, ArrowRight, Zap } from 'lucide-react';
import './BookingModal.css';

const BookingModal = ({ isOpen, onClose }) => {
  const [offsets, setOffsets] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!isOpen) return;
    const { clientX, clientY } = e;
    const x = (clientX - window.innerWidth / 2) * 0.025;
    const y = (clientY - window.innerHeight / 2) * 0.025;
    setOffsets({ x, y });
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('mousemove', handleMouseMove);
      document.body.style.overflow = 'hidden';
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.style.overflow = 'auto';
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="modal-overlay"
          onClick={onClose}
        >
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            
            {/* Magnetic Physics Layers */}
            <motion.div
              className="modal-layer layer-1"
              animate={{ rotate: -2, x: offsets.x * 1.2, y: offsets.y * 1.2 }}
              transition={{ type: 'spring', stiffness: 80, damping: 20 }}
            />
            <motion.div
              className="modal-layer layer-2"
              animate={{ rotate: 2, x: offsets.x * 1.8, y: offsets.y * 1.8 }}
              transition={{ type: 'spring', stiffness: 80, damping: 20 }}
            />

            {/* Main Content Card */}
            <motion.div
              className="layer-main"
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1, x: offsets.x, y: offsets.y }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="modal-close" id="close-modal" onClick={onClose} aria-label="Close">
                <X size={24} />
              </div>

              <header className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#0047AB] grid place-items-center text-white">
                    <Calendar size={16} />
                  </div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#0047AB] font-bold">
                    Technical Consultation
                  </span>
                </div>
                <h2 className="font-display text-[42px] leading-[0.95] tracking-tight font-medium">
                  Let's engineer <br/>
                  <span className="text-[#0047AB] italic font-normal">your solution.</span>
                </h2>
              </header>

              <form className="modal-form" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
                <div className="form-grid">
                  <div className="input-group">
                    <label className="input-label">Project Name / Contact</label>
                    <input 
                      type="text" 
                      className="modal-input" 
                      placeholder="e.g. Apollo Hospital" 
                      required 
                    />
                  </div>
                  <div className="input-group">
                    <label className="input-label">Direct Email</label>
                    <input 
                      type="email" 
                      className="modal-input" 
                      placeholder="name@company.com" 
                      required 
                    />
                  </div>
                </div>

                <div className="input-group">
                  <label className="input-label">Core Infrastructure Need</label>
                  <select className="modal-input">
                    <option>Network & Connectivity</option>
                    <option>Cybersecurity Audit</option>
                    <option>Cloud Migration</option>
                    <option>Backup Systems</option>
                    <option>Managed Support</option>
                  </select>
                </div>

                <div className="input-group">
                  <label className="input-label">Project Scope</label>
                  <textarea 
                    className="modal-input modal-textarea" 
                    placeholder="Briefly describe your environment or challenges..."
                  />
                </div>

                <button type="submit" className="booking-submit">
                  <span>Confirm consultation</span>
                  <ArrowRight size={18} />
                </button>
              </form>

              <footer className="footer-meta border-t border-[#E5E7EB] pt-8">
                <div className="flex items-center gap-2">
                  <Zap size={14} className="text-[#0047AB]" />
                  <span>24h Response SLA</span>
                </div>
                <div className="hidden sm:block">Installer Guru Systems · V.3.1</div>
              </footer>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
