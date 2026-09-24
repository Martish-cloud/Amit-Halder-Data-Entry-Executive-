import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, MessageSquare } from 'lucide-react';
import { LANGUAGE_DATA } from '../data/cvData';

export const Languages: React.FC = () => {
  // Visual level indicator colors & styles
  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case 'Native':
        return {
          badge: 'bg-[#68724F]/20 border-[#68724F]/40 text-[#4F5A3D] font-semibold',
          dots: 4,
        };
      case 'Professional':
        return {
          badge: 'bg-[#A8B5A2]/30 border-[#68724F]/35 text-[#4F5A3D] font-semibold',
          dots: 3,
        };
      case 'Basic':
        return {
          badge: 'bg-[#D5C7AF] border-[#C9B89E] text-[#765C48] font-medium',
          dots: 2,
        };
      case 'Elementary':
      default:
        return {
          badge: 'bg-[#E1D7C4] border-[#C9B89E] text-[#765C48] font-medium',
          dots: 1,
        };
    }
  };

  return (
    <section id="languages" className="py-20 md:py-28 relative bg-[#E1D7C4]/85 backdrop-blur-xs border-t border-[#C9B89E]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE2D2] border border-[#68724F]/35 text-[#4F5A3D] text-xs font-mono font-medium shadow-xs">
            <Globe2 className="w-3.5 h-3.5 text-[#68724F]" />
            <span>Multilingual Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#4B382C] tracking-tight">
            Language Proficiencies
          </h2>
          <p className="text-[#665E55] text-sm sm:text-base leading-relaxed font-medium">
            Proficiency levels recorded directly from the CV for operational and cross-regional communication.
          </p>
        </div>

        {/* Language Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto text-left">
          {LANGUAGE_DATA.map((lang, idx) => {
            const style = getProficiencyColor(lang.proficiency);

            return (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-[#FFFFFF] p-5 rounded-2xl border border-[#C9B89E] hover:border-[#68724F]/50 transition-all flex flex-col justify-between group shadow-xs hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-lg bg-[#E1D7C4] border border-[#C9B89E] flex items-center justify-center text-[#4F5A3D] group-hover:border-[#68724F]/40 transition-colors">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-bold text-[#29261F] group-hover:text-[#4F5A3D] transition-colors">
                        {lang.name}
                      </h3>
                    </div>

                    <span className={`font-mono text-[11px] px-2.5 py-0.5 rounded-full border ${style.badge}`}>
                      {lang.proficiency}
                    </span>
                  </div>

                  <p className="text-xs text-[#665E55] mb-4">
                    {lang.badge}
                  </p>
                </div>

                {/* Visual Proficiency Meter */}
                <div className="pt-3 border-t border-[#C9B89E]/60 flex items-center justify-between font-mono text-[11px] text-[#765C48]">
                  <span>Fluency Rating</span>
                  <div className="flex items-center gap-1.5">
                    {[1, 2, 3, 4].map((step) => (
                      <div
                        key={step}
                        className={`w-2.5 h-2.5 rounded-sm transition-colors ${
                          step <= style.dots ? 'bg-[#4F5A3D]' : 'bg-[#C9B89E]/60'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
