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
      badge: 'Input',
      details: 'High-precision operational record entry and initial processing',
    },
    {
      id: 1,
      title: 'Verification & Quality',
      subtitle: 'Integrity Checking',
      icon: CheckCircle2,
      badge: 'Audit',
      details: 'Discrepancy screening, validation rules, and record consistency audits',
    },
    {
      id: 2,
      title: 'ERP & Operations',
      subtitle: 'Inventory & Dispatch',
      icon: Factory,
      badge: 'Sync',
      details: 'Real-time ERP synchronization, order schedules, and warehouse tracking',
    },
    {
      id: 3,
      title: 'Analytics & Reporting',
      subtitle: 'Excel / Power BI',
      icon: BarChart3,
      badge: 'Insight',
      details: 'Management reporting, data extraction, and operational decision support',
    },
  ];

  return (
    <div className="relative w-full rounded-2xl bg-[#FFFFFF] p-5 sm:p-6 lg:p-7 overflow-hidden border border-[#C9B89E] shadow-md shadow-[#4B382C]/5">
      {/* Background ambient lighting */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#A8B5A2]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#D5C7AF]/30 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar */}
      <div className="flex items-center justify-between pb-5 border-b border-[#C9B89E]/60 mb-6">
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#68724F] animate-ping" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#4B382C] font-semibold">
            Operations & Data Pipeline Architecture
          </span>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#4F5A3D] bg-[#E1D7C4] px-2.5 py-1 rounded-full border border-[#C9B89E]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#68724F]" />
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
                  ? 'bg-[#EAE2D2] border-[#68724F] shadow-sm ring-1 ring-[#68724F]/30'
                  : 'bg-[#EAE2D2]/70 hover:bg-[#FFFFFF] border-[#C9B89E]/70 hover:border-[#68724F]/50'
              }`}
              whileHover={{ y: -3 }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-[#E1D7C4] border border-[#C9B89E] text-[#4F5A3D] font-bold group-hover:bg-[#4F5A3D] group-hover:text-[#FFFFFF] transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#A8B5A2]/25 text-[#4F5A3D] border border-[#68724F]/25 font-medium">
                  {step.badge}
                </span>
              </div>

              <div className="text-left">
                <h4 className="text-xs sm:text-sm font-semibold text-[#29261F] group-hover:text-[#4F5A3D] transition-colors">
                  {step.title}
                </h4>
                <p className="text-[11px] font-mono text-[#765C48] mt-0.5">
                  {step.subtitle}
                </p>
                <p className="text-[11px] text-[#665E55] mt-2 leading-relaxed line-clamp-2">
                  {step.details}
                </p>
              </div>

              {/* Connecting arrow indicator for desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 pointer-events-none text-[#C9B89E]">
                  <ArrowRight className="w-4 h-4 text-[#A8B5A2] group-hover:text-[#68724F] transition-colors" />
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Real-time system parameters bar */}
      <div className="mt-6 pt-4 border-t border-[#C9B89E]/60 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left font-mono">
        <div className="p-2.5 rounded-lg bg-[#EAE2D2] border border-[#C9B89E]/70">
          <div className="text-[10px] text-[#765C48] uppercase font-semibold">Core Stack</div>
          <div className="text-xs font-semibold text-[#29261F] mt-0.5">Excel · Power BI</div>
        </div>
        <div className="p-2.5 rounded-lg bg-[#EAE2D2] border border-[#C9B89E]/70">
          <div className="text-[10px] text-[#765C48] uppercase font-semibold">System Scope</div>
          <div className="text-xs font-semibold text-[#29261F] mt-0.5">ERP · MRP · Inventory</div>
        </div>
        <div className="p-2.5 rounded-lg bg-[#EAE2D2] border border-[#C9B89E]/70">
          <div className="text-[10px] text-[#765C48] uppercase font-semibold">Logistics</div>
          <div className="text-xs font-semibold text-[#29261F] mt-0.5">Order & Dispatch Track</div>
        </div>
        <div className="p-2.5 rounded-lg bg-[#EAE2D2] border border-[#C9B89E]/70">
          <div className="text-[10px] text-[#765C48] uppercase font-semibold">Quality Metric</div>
          <div className="text-xs font-semibold text-[#4F5A3D] mt-0.5">100% Verification</div>
        </div>
      </div>
    </div>
  );
};
