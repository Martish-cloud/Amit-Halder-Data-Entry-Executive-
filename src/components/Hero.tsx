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
        particleCount: 65,
        spread: 70,
        origin: { y: 0.2 },
        colors: ['#38bdf8', '#0ea5e9', '#14b8a6', '#f8fafc'],
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
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col justify-center overflow-hidden bg-grid-pattern"
    >
      {/* Dynamic ambient radial gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-sky-500/15 via-cyan-500/10 to-teal-500/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Status chip */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/80 backdrop-blur-md shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
              </span>
              <span className="font-mono text-xs text-slate-300 font-medium">
                Kolkata, West Bengal, India
              </span>
              <span className="text-slate-600">|</span>
              <span className="text-xs text-cyan-400 font-medium">Ready for New Challenges</span>
            </motion.div>

            {/* Name & Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-none">
                Amit <span className="text-gradient-cyan">Halder</span>
              </h1>
              <div className="flex items-center gap-2 pt-2">
                <h2 className="text-lg sm:text-2xl font-semibold text-slate-200 tracking-tight">
                  Data Entry Executive & Operations Professional
                </h2>
              </div>
            </motion.div>

            {/* CV-Grounded Supporting Statement */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base text-slate-300/90 leading-relaxed max-w-2xl font-normal"
            >
              Experienced in <span className="text-white font-medium">data entry, data processing, verification, and validation</span>, alongside continuous <span className="text-white font-medium">ERP data management</span> and record maintenance. Proven operational background spanning <span className="text-cyan-300 font-medium">inventory tracking, order processing, dispatch coordination</span>, and analytical report preparation utilizing <span className="text-cyan-300 font-medium">Microsoft Excel, Power BI, and SQL</span>.
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
                { name: 'SQL Querying', icon: Database },
              ].map((pill, i) => {
                const Icon = pill.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/60 border border-slate-800 text-xs text-slate-300 font-mono"
                  >
                    <Icon className="w-3.5 h-3.5 text-cyan-400" />
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
                className="group flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-sky-500 via-cyan-500 to-teal-500 text-slate-950 font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/35 hover:scale-[1.02] active:scale-[0.98] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                <Briefcase className="w-4 h-4 text-slate-950 group-hover:rotate-6 transition-transform" />
                <span>View My Experience</span>
              </button>

              <button
                onClick={() => scrollTo('skills')}
                className="group flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-850 text-slate-200 hover:text-white font-medium text-sm border border-slate-800 hover:border-cyan-500/40 shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <Sparkles className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>Explore Skills</span>
              </button>

              <button
                onClick={handleDownload}
                className={`group flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm border transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                  downloaded
                    ? 'bg-emerald-950/80 border-emerald-500/50 text-emerald-300'
                    : 'bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white border-slate-700/80 hover:border-slate-600'
                }`}
              >
                <FileDown className="w-4 h-4 text-cyan-400 group-hover:translate-y-0.5 transition-transform" />
                <span>{downloaded ? 'Resume Downloaded' : 'Download CV'}</span>
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="flex items-center gap-2 px-4 py-3 rounded-xl text-slate-400 hover:text-cyan-300 font-medium text-sm transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </button>
            </motion.div>
          </div>

          {/* Right Column: Interactive Data Operations Flow Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
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
