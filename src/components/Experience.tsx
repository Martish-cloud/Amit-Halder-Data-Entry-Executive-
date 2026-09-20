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
    <section id="experience" className="py-20 md:py-28 relative bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-300 text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Industrial Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Professional Experience Timeline
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Direct operational responsibilities across production planning, ERP record management, quality checking, and dispatch logistics.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Glowing Line for Desktop */}
          <div className="hidden md:block absolute left-8 top-6 bottom-6 w-[2px] bg-gradient-to-b from-sky-500 via-cyan-500 to-teal-500/40 shadow-sm shadow-cyan-500/30 pointer-events-none" />

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
                  <div className="hidden md:flex absolute left-6 -translate-x-1/2 top-7 w-6 h-6 rounded-full bg-slate-950 border-2 border-cyan-400 items-center justify-center shadow-md shadow-cyan-500/40 z-10">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  </div>

                  {/* Main Card */}
                  <div className="glass-panel rounded-2xl border border-slate-800/90 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden shadow-xl shadow-black/20">
                    {/* Header Row */}
                    <div className="p-6 sm:p-7 border-b border-slate-800/60 bg-slate-950/40">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                          <div className="flex flex-wrap items-center gap-2 mb-1.5">
                            <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-semibold">
                              Role 0{index + 1}
                            </span>
                            {item.isLatest && (
                              <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-semibold">
                                Latest Position
                              </span>
                            )}
                          </div>
                          <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                            {item.role}
                          </h3>
                          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-300 mt-1">
                            <span className="font-semibold text-cyan-300 flex items-center gap-1.5">
                              <Building2 className="w-4 h-4 text-cyan-400" />
                              {item.company}
                            </span>
                            {item.location && (
                              <span className="text-slate-400 flex items-center gap-1">
                                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                                {item.location}
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-750 font-mono text-xs text-slate-300 font-medium">
                            <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                            <span>{item.period}</span>
                          </div>

                          <button
                            onClick={() => toggleExpand(item.id)}
                            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-750 text-slate-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                            aria-label={isExpanded ? 'Collapse responsibilities' : 'Expand responsibilities'}
                          >
                            {isExpanded ? (
                              <ChevronUp className="w-4 h-4 text-cyan-400" />
                            ) : (
                              <ChevronDown className="w-4 h-4 text-slate-400" />
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Tag list */}
                      <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-slate-850/80">
                        {item.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-slate-300"
                          >
                            <Tag className="w-2.5 h-2.5 text-cyan-400" />
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
                          className="p-6 sm:p-7 bg-slate-950/20"
                        >
                          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                            Verified Key Responsibilities (From CV):
                          </div>
                          <ul className="space-y-3">
                            {item.responsibilities.map((resp, rIdx) => (
                              <li key={rIdx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed group">
                                <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-cyan-950/80 border border-cyan-800 flex items-center justify-center text-cyan-400">
                                  <CheckCircle2 className="w-3 h-3 text-cyan-400" />
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
