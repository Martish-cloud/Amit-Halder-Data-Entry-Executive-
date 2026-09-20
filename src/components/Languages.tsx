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
          badge: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300',
          bar: 'from-emerald-400 to-teal-400',
          dots: 4,
        };
      case 'Professional':
        return {
          badge: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-300',
          bar: 'from-cyan-400 to-sky-400',
          dots: 3,
        };
      case 'Basic':
        return {
          badge: 'bg-sky-500/10 border-sky-500/30 text-sky-300',
          bar: 'from-sky-400 to-indigo-400',
          dots: 2,
        };
      case 'Elementary':
      default:
        return {
          badge: 'bg-slate-800 border-slate-700 text-slate-300',
          bar: 'from-slate-400 to-slate-500',
          dots: 1,
        };
    }
  };

  return (
    <section id="languages" className="py-20 md:py-28 relative bg-slate-950/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-300 text-xs font-mono">
            <Globe2 className="w-3.5 h-3.5" />
            <span>Multilingual Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Language Proficiencies
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
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
                className="glass-panel p-5 rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900/60 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/30 transition-colors">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {lang.name}
                      </h3>
                    </div>

                    <span className={`font-mono text-[11px] px-2.5 py-0.5 rounded-full border ${style.badge}`}>
                      {lang.proficiency}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 mb-4">
                    {lang.badge}
                  </p>
                </div>

                {/* Visual Proficiency Meter */}
                <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between font-mono text-[11px] text-slate-400">
                  <span>Fluency Rating</span>
                  <div className="flex items-center gap-1.5">
                    {[1, 2, 3, 4].map((step) => (
                      <div
                        key={step}
                        className={`w-2.5 h-2.5 rounded-sm transition-colors ${
                          step <= style.dots ? 'bg-cyan-400' : 'bg-slate-800'
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
