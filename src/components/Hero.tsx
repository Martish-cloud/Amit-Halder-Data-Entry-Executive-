import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FileDown,
  Briefcase,
  Sparkles,
  Mail,
  CheckCircle2,
  Database,
  Layers,
  BarChart2,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/cvData';
import { DataFlowGraphic } from './DataFlowGraphic';
import confetti from 'canvas-confetti';

interface HeroProps {
  onDownloadResume?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDownloadResume }) => {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onDownloadResume) {
      onDownloadResume();
    } else {
      const link = document.createElement('a');
      link.href = PERSONAL_INFO.resumeUrl;
      link.download = PERSONAL_INFO.resumeFileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    try {
      confetti({
        particleCount: 40,
        spread: 50,
        origin: { y: 0.2 },
        colors: ['#A8B5A2', '#68724F', '#4F5A3D', '#D8C7AD'],
      });
    } catch {
      // fallback
    }

    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col justify-center overflow-hidden bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Status chip */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2EBDD] border border-[#D8C7AD] shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#68724F] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4F5A3D]" />
              </span>
              <span className="font-mono text-xs text-[#4B382C] font-medium">
                Kolkata, West Bengal, India
              </span>
              <span className="text-[#D8C7AD]">|</span>
              <span className="text-xs text-[#4F5A3D] font-semibold">Available for Data & Operations Roles</span>
            </motion.div>

            {/* Name & Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-[#4B382C] leading-none">
                AMIT <span className="text-[#4F5A3D]">HALDER</span>
              </h1>
              <div className="flex items-center gap-2 pt-2">
                <h2 className="text-lg sm:text-2xl font-semibold text-[#29261F] tracking-tight">
                  Data Entry Executive & Operations Professional
                </h2>
              </div>
            </motion.div>

            {/* CV-Grounded Supporting Statement */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base text-[#6F675D] leading-relaxed max-w-2xl font-normal"
            >
              Experienced in <span className="text-[#4B382C] font-semibold">data entry, data processing, verification, and validation</span>, alongside continuous <span className="text-[#4B382C] font-semibold">ERP data management</span> and record maintenance. Proven operational background spanning <span className="text-[#4F5A3D] font-semibold">inventory tracking, order processing, dispatch coordination</span>, and analytical report preparation utilizing <span className="text-[#4F5A3D] font-semibold">Microsoft Excel and Power BI</span>.
            </motion.p>

            {/* Micro Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap gap-2 pt-1"
            >
              {[
                { name: 'Data Verification', icon: CheckCircle2 },
                { name: 'ERP Systems', icon: Layers },
                { name: 'Excel & Power BI', icon: BarChart2 },
                { name: 'Record Maintenance', icon: Database },
              ].map((pill, i) => {
                const Icon = pill.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#F2EBDD] border border-[#D8C7AD] text-xs text-[#4B382C] font-mono shadow-xs"
                  >
                    <Icon className="w-3.5 h-3.5 text-[#68724F]" />
                    <span>{pill.name}</span>
                  </div>
                );
              })}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3 pt-4"
            >
              <button
                onClick={() => scrollTo('experience')}
                className="group flex items-center gap-2 px-5 py-3 rounded-xl bg-[#4F5A3D] hover:bg-[#68724F] text-[#F7F3EA] font-semibold text-sm shadow-md shadow-[#4B382C]/10 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F5A3D]"
              >
                <Briefcase className="w-4 h-4 text-[#F7F3EA] group-hover:rotate-6 transition-transform" />
                <span>View My Experience</span>
              </button>

              <button
                onClick={() => scrollTo('skills')}
                className="group flex items-center gap-2 px-5 py-3 rounded-xl bg-[#FFFFFF] hover:bg-[#E6D8C3] text-[#4B382C] font-medium text-sm border border-[#765C48]/35 shadow-xs transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F5A3D]"
              >
                <Sparkles className="w-4 h-4 text-[#68724F] group-hover:scale-110 transition-transform" />
                <span>Explore Skills</span>
              </button>

              <button
                onClick={handleDownload}
                className={`group flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm border transition-all shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F5A3D] ${
                  downloaded
                    ? 'bg-[#A8B5A2]/30 border-[#68724F] text-[#4F5A3D]'
                    : 'bg-[#F2EBDD] hover:bg-[#E6D8C3] text-[#4B382C] border-[#765C48]/30'
                }`}
              >
                <FileDown className="w-4 h-4 text-[#68724F] group-hover:translate-y-0.5 transition-transform" />
                <span>{downloaded ? 'Resume Downloaded' : 'Download CV'}</span>
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="flex items-center gap-2 px-4 py-3 rounded-xl text-[#6F675D] hover:text-[#4F5A3D] font-medium text-sm transition-colors"
              >
                <Mail className="w-4 h-4 text-[#68724F]" />
                <span>Contact Me</span>
              </button>
            </motion.div>
          </div>

          {/* Right Column: Interactive Data Operations Flow Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <DataFlowGraphic />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
