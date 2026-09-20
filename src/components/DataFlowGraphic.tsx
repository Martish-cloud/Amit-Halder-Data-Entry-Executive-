import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Database, CheckCircle2, Factory, BarChart3, ArrowRight, ShieldCheck } from 'lucide-react';

export const DataFlowGraphic: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      id: 0,
      title: 'Data Entry & Processing',
      subtitle: 'Batch Intake & Capture',
      icon: Database,
      color: 'from-blue-500 to-sky-500',
      badge: 'Input',
      details: 'High-precision operational record entry and initial processing',
    },
    {
      id: 1,
      title: 'Verification & Quality',
      subtitle: 'Integrity Checking',
      icon: CheckCircle2,
      color: 'from-sky-500 to-cyan-500',
      badge: 'Audit',
      details: 'Discrepancy screening, validation rules, and record consistency audits',
    },
    {
      id: 2,
      title: 'ERP & Operations',
      subtitle: 'Inventory & Dispatch',
      icon: Factory,
      color: 'from-cyan-500 to-teal-500',
      badge: 'Sync',
      details: 'Real-time ERP synchronization, order schedules, and warehouse tracking',
    },
    {
      id: 3,
      title: 'Analytics & Reporting',
      subtitle: 'Excel / Power BI / SQL',
      icon: BarChart3,
      color: 'from-teal-500 to-emerald-500',
      badge: 'Insight',
      details: 'Management reporting, data extraction, and operational decision support',
    },
  ];

  return (
    <div className="relative w-full rounded-2xl glass-panel p-5 sm:p-6 lg:p-7 overflow-hidden border border-slate-800/90 shadow-2xl">
      {/* Background ambient lighting */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar */}
      <div className="flex items-center justify-between pb-5 border-b border-slate-800/80 mb-6">
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
          <span className="font-mono text-xs uppercase tracking-widest text-slate-300 font-semibold">
            Operations & Data Pipeline Architecture
          </span>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[11px] text-slate-400 bg-slate-900/90 px-2.5 py-1 rounded-full border border-slate-800">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Strict CV Grounded</span>
        </div>
      </div>

      {/* Interactive Workflow Node Chain */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isSelected = activeStep === idx;

          return (
            <motion.div
              key={step.id}
              onClick={() => setActiveStep(isSelected ? null : idx)}
              className={`relative cursor-pointer group p-4 rounded-xl transition-all duration-300 border ${
                isSelected
                  ? 'bg-slate-800/90 border-cyan-400/60 shadow-lg shadow-cyan-500/10 ring-1 ring-cyan-400/40'
                  : 'bg-slate-900/50 hover:bg-slate-850 border-slate-800/70 hover:border-slate-700'
              }`}
              whileHover={{ y: -3 }}
            >
              <div className="flex items-center justify-between mb-3">
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br ${step.color} shadow-sm text-slate-950 font-bold`}
                >
                  <Icon className="w-4 h-4 text-slate-950" />
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-300 border border-slate-700/60 font-medium">
                  {step.badge}
                </span>
              </div>

              <div className="text-left">
                <h4 className="text-xs sm:text-sm font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors">
                  {step.title}
                </h4>
                <p className="text-[11px] font-mono text-slate-400 mt-0.5">
                  {step.subtitle}
                </p>
                <p className="text-[11px] text-slate-400/90 mt-2 leading-relaxed line-clamp-2">
                  {step.details}
                </p>
              </div>

              {/* Connecting arrow indicator for desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 pointer-events-none text-slate-600">
                  <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Real-time system parameters bar */}
      <div className="mt-6 pt-4 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left font-mono">
        <div className="p-2.5 rounded-lg bg-slate-900/40 border border-slate-800/60">
          <div className="text-[10px] text-slate-400 uppercase">Core Stack</div>
          <div className="text-xs font-semibold text-slate-200 mt-0.5">Excel · Power BI · SQL</div>
        </div>
        <div className="p-2.5 rounded-lg bg-slate-900/40 border border-slate-800/60">
          <div className="text-[10px] text-slate-400 uppercase">System Scope</div>
          <div className="text-xs font-semibold text-slate-200 mt-0.5">ERP · MRP · Inventory</div>
        </div>
        <div className="p-2.5 rounded-lg bg-slate-900/40 border border-slate-800/60">
          <div className="text-[10px] text-slate-400 uppercase">Logistics</div>
          <div className="text-xs font-semibold text-slate-200 mt-0.5">Order & Dispatch Track</div>
        </div>
        <div className="p-2.5 rounded-lg bg-slate-900/40 border border-slate-800/60">
          <div className="text-[10px] text-slate-400 uppercase">Quality Metric</div>
          <div className="text-xs font-semibold text-emerald-400 mt-0.5">100% Verification</div>
        </div>
      </div>
    </div>
  );
};
