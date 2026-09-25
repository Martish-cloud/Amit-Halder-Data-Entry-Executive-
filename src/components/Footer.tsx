import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Mail, Phone } from 'lucide-react';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { PERSONAL_INFO } from '../data/cvData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative bg-[#4B382C] border-t border-[#765C48]/40 pt-12 pb-16 overflow-hidden text-[#EAE2D2]">
      {/* Top glowing ambient gradient */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#A8B5A2]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#765C48]/40"
        >
          {/* Identity */}
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-[#5A4537] border border-[#765C48] flex items-center justify-center shadow-xs">
              <span className="font-mono text-xs font-bold text-[#FFFFFF]">AH</span>
            </div>
            <div>
              <div className="text-sm font-bold text-[#FFFFFF]">Amit Halder</div>
              <div className="text-xs text-[#C9B89E] font-mono">
                Data Entry Executive & Operations Professional
              </div>
            </div>
          </div>

          {/* Direct Verified Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-1.5 text-[#D5C7AF] hover:text-[#FFFFFF] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#A8B5A2]" />
              <span>{PERSONAL_INFO.email}</span>
            </a>
            <span className="text-[#765C48]">·</span>
            <a
              href={`tel:${PERSONAL_INFO.phoneClean}`}
              className="flex items-center gap-1.5 text-[#D5C7AF] hover:text-[#FFFFFF] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#A8B5A2]" />
              <span>{PERSONAL_INFO.phone}</span>
            </a>
            <span className="text-[#765C48]">·</span>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#D5C7AF] hover:text-[#FFFFFF] transition-colors"
            >
              <LinkedInIcon className="w-3.5 h-3.5 text-[#A8B5A2]" />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#5A4537] border border-[#765C48] text-[#D5C7AF] hover:text-[#FFFFFF] hover:bg-[#6F5444] text-xs font-mono transition-all shadow-xs"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#A8B5A2] group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </motion.div>

        {/* Bottom Credits & Grounding Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#C9B89E]/90 font-mono"
        >
          <div>
            © {new Date().getFullYear()} Amit Halder. All operational data verified against curriculum vitae.
          </div>
          <div className="flex items-center gap-1.5 text-[#C9B89E]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A8B5A2]" />
            <span>Kolkata, West Bengal, India</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
