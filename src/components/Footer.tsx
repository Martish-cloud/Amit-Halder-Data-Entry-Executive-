import React from 'react';
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
    <footer className="relative bg-slate-950 border-t border-slate-850 pt-12 pb-16 overflow-hidden">
      {/* Top glowing ambient gradient */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          {/* Identity */}
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-500 p-[1px] flex items-center justify-center shadow-md">
              <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                <span className="font-mono text-xs font-bold text-cyan-300">AH</span>
              </div>
            </div>
            <div>
              <div className="text-sm font-bold text-white">Amit Halder</div>
              <div className="text-xs text-slate-400 font-mono">
                Data Entry Executive & Operations Professional
              </div>
            </div>
          </div>

          {/* Direct Verified Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-300 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>{PERSONAL_INFO.email}</span>
            </a>
            <span className="text-slate-700">·</span>
            <a
              href={`tel:${PERSONAL_INFO.phoneClean}`}
              className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-teal-400" />
              <span>{PERSONAL_INFO.phone}</span>
            </a>
            <span className="text-slate-700">·</span>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-300 transition-colors"
            >
              <LinkedInIcon className="w-3.5 h-3.5 text-sky-400" />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/40 text-xs font-mono transition-all"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Bottom Credits & Grounding Notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} Amit Halder. All operational data verified against curriculum vitae.
          </div>
          <div className="flex items-center gap-1.5 text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Kolkata, West Bengal, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
