import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Calendar } from 'lucide-react';
import { EDUCATION_DATA } from '../data/cvData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 relative bg-transparent border-t border-[#D8C7AD]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2EBDD]/90 backdrop-blur-md border border-[#68724F]/35 text-[#4F5A3D] text-xs font-mono font-medium shadow-xs">
            <GraduationCap className="w-3.5 h-3.5 text-[#68724F]" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#4B382C] tracking-tight drop-shadow-xs">
            Education Credentials
          </h2>
          <p className="text-[#4B382C]/90 text-sm sm:text-base leading-relaxed font-medium">
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
              className="bg-[#FFFFFF] p-6 sm:p-7 rounded-2xl border border-[#D8C7AD] hover:border-[#68724F]/50 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F2EBDD] border border-[#D8C7AD] flex items-center justify-center text-[#4F5A3D] group-hover:border-[#68724F]/40 transition-colors">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span
                    className={`font-mono text-xs px-2.5 py-1 rounded-full border font-semibold ${
                      item.status?.includes('Pursuing')
                        ? 'bg-[#A8B5A2]/25 border-[#68724F]/35 text-[#4F5A3D]'
                        : 'bg-[#68724F]/15 border-[#68724F]/35 text-[#4F5A3D]'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#4B382C] tracking-tight group-hover:text-[#4F5A3D] transition-colors">
                  {item.institution}
                </h3>
                <div className="text-sm font-semibold text-[#29261F] mt-1">
                  {item.degree}
                </div>
                {item.notes && (
                  <p className="text-xs text-[#6F675D] mt-2 leading-relaxed">
                    {item.notes}
                  </p>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-[#D8C7AD]/60 flex items-center justify-between font-mono text-xs text-[#765C48]">
                <span className="flex items-center gap-1.5 text-[#6F675D]">
                  <BookOpen className="w-3.5 h-3.5 text-[#68724F]" />
                  <span>Curriculum Arts Stream</span>
                </span>
                {item.period && (
                  <span className="flex items-center gap-1 text-[#4F5A3D] font-semibold">
                    <Calendar className="w-3.5 h-3.5 text-[#68724F]" />
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
