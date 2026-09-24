import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Briefcase,
  Calendar,
  Building2,
  MapPin,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Tag,
} from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/cvData';

export const Experience: React.FC = () => {
  // Store expanded state per item (all open by default for immediate readability)
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({
    'pioneer-mega-printers': true,
    'jay-boxes': true,
    'york-print': true,
  });

  const toggleExpand = (id: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="experience" className="py-20 md:py-28 relative bg-transparent border-t border-[#D8C7AD]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2EBDD]/90 backdrop-blur-md border border-[#68724F]/35 text-[#4F5A3D] text-xs font-mono font-medium shadow-xs">
            <Briefcase className="w-3.5 h-3.5 text-[#68724F]" />
            <span>Industrial Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#4B382C] tracking-tight drop-shadow-xs">
            Professional Experience Timeline
          </h2>
          <p className="text-[#4B382C]/90 text-sm sm:text-base leading-relaxed font-medium">
            Direct operational responsibilities across production planning, ERP record management, quality checking, and dispatch logistics.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Glowing Line for Desktop */}
          <div className="hidden md:block absolute left-8 top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#A8B5A2] via-[#68724F] to-[#4F5A3D] pointer-events-none" />

          {/* Experience Cards */}
          <div className="space-y-8">
            {EXPERIENCE_DATA.map((item, index) => {
              const isExpanded = expandedItems[item.id] ?? true;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative md:pl-20 text-left"
                >
                  {/* Timeline Dot Node for Desktop */}
                  <div className="hidden md:flex absolute left-6 -translate-x-1/2 top-7 w-6 h-6 rounded-full bg-[#F7F3EA] border-2 border-[#4F5A3D] items-center justify-center shadow-xs z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#68724F]" />
                  </div>

                  {/* Main Card */}
                  <div className="bg-[#FFFFFF] rounded-2xl border border-[#D8C7AD] hover:border-[#68724F]/50 transition-all duration-300 overflow-hidden shadow-xs hover:shadow-md">
                    {/* Header Row */}
                    <div className="p-6 sm:p-7 border-b border-[#D8C7AD]/60 bg-[#F2EBDD]/40">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                          <div className="flex flex-wrap items-center gap-2 mb-1.5">
                            <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-[#F2EBDD] border border-[#D8C7AD] text-[#4B382C] font-semibold">
                              Role 0{index + 1}
                            </span>
                            {item.isLatest && (
                              <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-[#A8B5A2]/30 border border-[#68724F]/35 text-[#4F5A3D] font-semibold">
                                Latest Position
                              </span>
                            )}
                          </div>
                          <h3 className="text-lg sm:text-xl font-bold text-[#29261F] tracking-tight">
                            {item.role}
                          </h3>
                          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#6F675D] mt-1">
                            <span className="font-semibold text-[#4B382C] flex items-center gap-1.5">
                              <Building2 className="w-4 h-4 text-[#68724F]" />
                              {item.company}
                            </span>
                            {item.location && (
                              <span className="text-[#6F675D] flex items-center gap-1">
                                <MapPin className="w-3.5 h-3.5 text-[#765C48]" />
                                {item.location}
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F7F3EA] border border-[#D8C7AD] font-mono text-xs text-[#4B382C] font-medium shadow-xs">
                            <Calendar className="w-3.5 h-3.5 text-[#68724F]" />
                            <span>{item.period}</span>
                          </div>

                          <button
                            onClick={() => toggleExpand(item.id)}
                            className="p-2 rounded-lg bg-[#F7F3EA] hover:bg-[#E6D8C3] border border-[#D8C7AD] text-[#4B382C] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F5A3D]"
                            aria-label={isExpanded ? 'Collapse responsibilities' : 'Expand responsibilities'}
                          >
                            {isExpanded ? (
                              <ChevronUp className="w-4 h-4 text-[#4F5A3D]" />
                            ) : (
                              <ChevronDown className="w-4 h-4 text-[#6F675D]" />
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Tag list */}
                      <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-[#D8C7AD]/60">
                        {item.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-[#F7F3EA] border border-[#D8C7AD] text-[11px] font-mono text-[#765C48]"
                          >
                            <Tag className="w-2.5 h-2.5 text-[#68724F]" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Expandable Responsibilities Content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="p-6 sm:p-7 bg-[#FFFFFF]"
                        >
                          <div className="text-xs font-mono uppercase tracking-wider text-[#765C48] font-semibold mb-3">
                            Verified Key Responsibilities (From CV):
                          </div>
                          <ul className="space-y-3">
                            {item.responsibilities.map((resp, rIdx) => (
                              <li key={rIdx} className="flex items-start gap-3 text-sm text-[#6F675D] leading-relaxed group">
                                <div className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-[#A8B5A2]/25 border border-[#68724F]/30 flex items-center justify-center text-[#4F5A3D]">
                                  <CheckCircle2 className="w-3 h-3 text-[#4F5A3D]" />
                                </div>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
