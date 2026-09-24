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
    },
    {
      title: 'Attention to Detail',
      desc: 'Meticulous verification of numbers, operational specs, batch entries, and inventory counts.',
      icon: CheckCircle2,
    },
    {
      title: 'Systematic Organization',
      desc: 'Structured filing, document control, and clear record maintenance across departments.',
      icon: FolderGit2,
    },
    {
      title: 'Deadline Orientation',
      desc: 'Punctual dispatch coordination, timely reporting, and dependable throughput under tight operational schedules.',
      icon: Clock,
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative bg-[#E1D7C4] border-t border-[#C9B89E]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE2D2] border border-[#68724F]/35 text-[#4F5A3D] text-xs font-mono font-medium shadow-xs">
            <Database className="w-3.5 h-3.5 text-[#68724F]" />
            <span>Professional Profile & Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#4B382C] tracking-tight">
            Grounded in Operational Accuracy & Data Discipline
          </h2>
          <p className="text-[#665E55] text-sm sm:text-base leading-relaxed font-medium">
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
              className="bg-[#FFFFFF] p-5 rounded-2xl border border-[#C9B89E] text-left hover:border-[#68724F]/50 shadow-xs hover:shadow-md transition-all group"
            >
              <div className="font-mono text-3xl sm:text-4xl font-extrabold text-[#4F5A3D] group-hover:scale-105 transition-transform origin-left">
                {item.value}
              </div>
              <div className="text-sm font-bold text-[#4B382C] mt-2">
                {item.label}
              </div>
              <div className="text-xs text-[#665E55] mt-1 leading-snug">
                {item.detail}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Executive Summary Narrative & Core Strengths */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Executive Summary Card */}
          <div className="lg:col-span-6 bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#C9B89E] text-left space-y-4 shadow-sm">
            <h3 className="text-lg font-bold text-[#4B382C] flex items-center gap-2.5">
              <Award className="w-5 h-5 text-[#68724F]" />
              <span>Executive Summary</span>
            </h3>
            <div className="text-sm sm:text-base text-[#665E55] leading-relaxed space-y-4 font-normal">
              <p>
                {PERSONAL_INFO.summary}
              </p>
              <div className="p-4 rounded-xl bg-[#EAE2D2] border border-[#C9B89E] text-xs text-[#4B382C] font-mono space-y-2">
                <div className="text-[#4F5A3D] font-bold uppercase tracking-wider">
                  Operational Focus Areas:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[#4B382C]">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#68724F]" />
                    <span>ERP Data Management</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#68724F]" />
                    <span>Inventory & Dispatch</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4F5A3D]" />
                    <span>Data Quality & Validation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4F5A3D]" />
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
                  className="bg-[#FFFFFF] p-5 rounded-xl border border-[#C9B89E] text-left hover:border-[#68724F]/50 shadow-xs hover:shadow-sm transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#E1D7C4] border border-[#C9B89E] flex items-center justify-center mb-3 text-[#4F5A3D]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-[#29261F]">
                    {strength.title}
                  </h4>
                  <p className="text-xs text-[#665E55] mt-1.5 leading-relaxed">
                    {strength.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Operational Pillars Deep-Dive */}
        <div className="space-y-6 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#C9B89E] pb-4">
            <h3 className="text-xl font-bold text-[#4B382C] tracking-tight">
              Operational Competencies Framework
            </h3>
            <span className="text-xs font-mono text-[#4F5A3D] font-semibold">
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
                className="bg-[#FFFFFF] p-5 rounded-xl border border-[#C9B89E] hover:border-[#68724F]/50 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="text-[10px] font-mono text-[#68724F] uppercase tracking-wider font-semibold mb-1">
                    {pillar.metricsLabel}
                  </div>
                  <h4 className="text-sm font-bold text-[#29261F] group-hover:text-[#4F5A3D] transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-[#665E55] mt-2 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#C9B89E]/60 space-y-1.5">
                  {pillar.highlights.map((h, hi) => (
                    <div key={hi} className="text-[11px] font-mono text-[#4B382C] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#68724F]" />
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
