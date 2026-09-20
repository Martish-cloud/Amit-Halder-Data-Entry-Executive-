import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Calendar } from 'lucide-react';
import { EDUCATION_DATA } from '../data/cvData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 relative bg-slate-900/30 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-300 text-xs font-mono">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education Credentials
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Formal education credentials documented exactly as stated in the CV.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
          {EDUCATION_DATA.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-800/90 hover:border-cyan-500/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/40 transition-colors">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span
                    className={`font-mono text-xs px-2.5 py-1 rounded-full border ${
                      item.status?.includes('Pursuing')
                        ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-300'
                        : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                  {item.institution}
                </h3>
                <div className="text-sm font-semibold text-slate-300 mt-1">
                  {item.degree}
                </div>
                {item.notes && (
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {item.notes}
                  </p>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between font-mono text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Curriculum Arts Stream</span>
                </span>
                {item.period && (
                  <span className="flex items-center gap-1 text-cyan-400 font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
