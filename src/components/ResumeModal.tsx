import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileDown, Printer, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/cvData';
import confetti from 'canvas-confetti';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = PERSONAL_INFO.resumeUrl;
    link.download = PERSONAL_INFO.resumeFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    try {
      confetti({
        particleCount: 40,
        spread: 50,
        origin: { y: 0.3 },
        colors: ['#A8B5A2', '#68724F', '#4F5A3D', '#D8C7AD'],
      });
    } catch {
      // fallback
    }
  };

  const handlePrint = () => {
    const printWindow = window.open(PERSONAL_INFO.resumeUrl, '_blank');
    if (printWindow) {
      printWindow.focus();
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#29261F]/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-[#EAE2D2] border border-[#C9B89E] rounded-2xl shadow-xl overflow-hidden z-10 text-left"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-[#C9B89E] bg-[#E1D7C4]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FFFFFF] border border-[#C9B89E] flex items-center justify-center text-[#4F5A3D] shadow-xs">
                <FileDown className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#29261F]">
                  Curriculum Vitae — Amit Halder
                </h3>
                <p className="text-xs text-[#665E55] font-mono">
                  Data Entry Executive & Operations Professional
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-[#FFFFFF] border border-[#C9B89E] text-[#4B382C] hover:bg-[#D5C7AF] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 space-y-4 text-xs sm:text-sm text-[#665E55]">
            <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#C9B89E] flex items-center justify-between shadow-xs">
              <div>
                <div className="text-xs font-bold text-[#29261F]">
                  {PERSONAL_INFO.resumeFileName}
                </div>
                <div className="text-[11px] text-[#765C48] font-mono mt-0.5">
                  Official CV (Single Source of Truth) · PDF Format
                </div>
              </div>

              <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#4F5A3D] font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-[#68724F]" />
                <span>Verified Data</span>
              </div>
            </div>

            <div className="space-y-2 text-[#665E55] leading-relaxed text-xs">
              <p>
                This document reflects all verified professional milestones, including positions at Pioneer Mega Printers, Jay Boxes, and York Print Pvt. Ltd., alongside technical proficiencies in Microsoft Excel, Power BI, and ERP systems.
              </p>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-5 border-t border-[#C9B89E] bg-[#E1D7C4] flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FFFFFF] hover:bg-[#D5C7AF] text-[#4B382C] text-xs font-medium border border-[#C9B89E] transition-colors shadow-xs"
            >
              <Printer className="w-3.5 h-3.5 text-[#68724F]" />
              <span>Open in New Tab</span>
            </button>

            <div className="flex items-center gap-2.5">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-[#665E55] hover:text-[#29261F] text-xs font-medium transition-colors"
              >
                Close
              </button>
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#4F5A3D] hover:bg-[#68724F] text-[#FFFFFF] font-bold text-xs shadow-sm transition-all"
              >
                <FileDown className="w-4 h-4" />
                <span>Download PDF</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
