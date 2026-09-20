import React from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  Database,
  Clock,
  ShieldCheck,
  FolderGit2,
  Award,
} from 'lucide-react';
import { PERSONAL_INFO, OPERATIONAL_PILLARS, VERIFIED_CV_METRICS } from '../data/cvData';

export const About: React.FC = () => {
  const STRENGTHS = [
    {
      title: 'Data Accuracy & Validation',
      desc: 'Systematic verification workflows to maintain dependable and error-free operational databases.',
      icon: ShieldCheck,
      color: 'text-cyan-400',
    },
    {
      title: 'Attention to Detail',
      desc: 'Meticulous verification of numbers, operational specs, batch entries, and inventory counts.',
      icon: CheckCircle2,
      color: 'text-teal-400',
    },
    {
      title: 'Systematic Organization',
      desc: 'Structured filing, document control, and clear record maintenance across departments.',
      icon: FolderGit2,
      color: 'text-sky-400',
    },
    {
      title: 'Deadline Orientation',
      desc: 'Punctual dispatch coordination, timely reporting, and dependable throughput under tight operational schedules.',
      icon: Clock,
      color: 'text-emerald-400',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative bg-slate-950/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-300 text-xs font-mono">
            <Database className="w-3.5 h-3.5" />
            <span>Professional Profile & Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Grounded in Operational Accuracy & Data Discipline
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Derived directly from verified professional experience across manufacturing, printing, and packaging enterprises.
          </p>
        </div>

        {/* Verified Metric Cards (100% CV Grounded) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {VERIFIED_CV_METRICS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-5 rounded-2xl border border-slate-800/80 text-left hover:border-cyan-500/30 transition-all group"
            >
              <div className="font-mono text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-300 group-hover:scale-105 transition-transform origin-left">
                {item.value}
              </div>
              <div className="text-sm font-semibold text-slate-200 mt-2">
                {item.label}
              </div>
              <div className="text-xs text-slate-400 mt-1 leading-snug">
                {item.detail}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Executive Summary Narrative & Core Strengths */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Executive Summary Card */}
          <div className="lg:col-span-6 glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800/90 text-left space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2.5">
              <Award className="w-5 h-5 text-cyan-400" />
              <span>Executive Summary</span>
            </h3>
            <div className="text-sm sm:text-base text-slate-300 leading-relaxed space-y-4 font-normal">
              <p>
                {PERSONAL_INFO.summary}
              </p>
              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/80 text-xs text-slate-300 font-mono space-y-2">
                <div className="text-cyan-400 font-semibold uppercase tracking-wider">
                  Operational Focus Areas:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>ERP Data Management</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>Inventory & Dispatch</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    <span>Data Quality & Validation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    <span>Excel & Power BI Reports</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Strengths Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {STRENGTHS.map((strength, idx) => {
              const Icon = strength.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="glass-panel p-5 rounded-xl border border-slate-800/80 text-left hover:border-slate-700 hover:bg-slate-900/60 transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center mb-3">
                    <Icon className={`w-4 h-4 ${strength.color}`} />
                  </div>
                  <h4 className="text-sm font-semibold text-slate-100">
                    {strength.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                    {strength.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Operational Pillars Deep-Dive */}
        <div className="space-y-6 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-850 pb-4">
            <h3 className="text-xl font-bold text-white tracking-tight">
              Operational Competencies Framework
            </h3>
            <span className="text-xs font-mono text-cyan-400">
              4 Pillar Architecture
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {OPERATIONAL_PILLARS.map((pillar, i) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-panel p-5 rounded-xl border border-slate-800/80 hover:border-cyan-500/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider mb-1">
                    {pillar.metricsLabel}
                  </div>
                  <h4 className="text-sm font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/60 space-y-1.5">
                  {pillar.highlights.map((h, hi) => (
                    <div key={hi} className="text-[11px] font-mono text-slate-300 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-cyan-400" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
