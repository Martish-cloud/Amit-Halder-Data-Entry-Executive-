import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Search,
  CheckCircle2,
  Database,
  Layers,
  BarChart3,
  FileSpreadsheet,
  FileCheck,
  Package,
  Truck,
  FileText,
} from 'lucide-react';
import { SKILL_CATEGORIES, ALL_TECHNICAL_SKILLS } from '../data/cvData';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Icon mapper helper
  const getSkillIcon = (skillName: string) => {
    const s = skillName.toLowerCase();
    if (s.includes('excel')) return FileSpreadsheet;
    if (s.includes('power bi') || s.includes('analytics') || s.includes('reporting')) return BarChart3;
    if (s.includes('sql') || s.includes('data management') || s.includes('data entry')) return Database;
    if (s.includes('erp') || s.includes('mrp')) return Layers;
    if (s.includes('inventory')) return Package;
    if (s.includes('dispatch') || s.includes('order')) return Truck;
    if (s.includes('verification') || s.includes('accuracy')) return FileCheck;
    if (s.includes('documentation') || s.includes('record')) return FileText;
    return CheckCircle2;
  };

  const filteredSkills = useMemo(() => {
    return ALL_TECHNICAL_SKILLS.filter((skill) => {
      const matchesCategory =
        activeCategory === 'all' ||
        (activeCategory === 'data-operations' && skill.category === 'Data & Operations') ||
        (activeCategory === 'analytics-tools' && skill.category === 'Analytics & Business Tools') ||
        (activeCategory === 'erp-planning' && skill.category === 'ERP & Planning');

      const matchesSearch =
        searchQuery.trim() === '' ||
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-slate-950/70 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical & Operational Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Verified Competencies Matrix
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Strictly derived from professional responsibilities in data validation, ERP administration, production analytics, and reporting.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="max-w-4xl mx-auto mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-xl bg-slate-900/90 border border-slate-800 w-full sm:w-auto">
            {SKILL_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-slate-950 font-semibold shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  {cat.title}
                </button>
              );
            })}
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search competencies..."
              className="w-full pl-9 pr-4 py-1.5 text-xs bg-slate-900/80 border border-slate-800 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400/60 transition-colors font-mono"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="max-w-5xl mx-auto">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            <AnimatePresence>
              {filteredSkills.map((skill, index) => {
                const Icon = getSkillIcon(skill.name);

                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.25, delay: index * 0.02 }}
                    key={skill.name}
                    className="glass-panel p-4 rounded-xl border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all flex items-center justify-between text-left group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-cyan-500/30 flex items-center justify-center flex-shrink-0 transition-colors">
                        <Icon className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </div>
                        <div className="text-[10px] font-mono text-slate-400 mt-0.5">
                          {skill.category}
                        </div>
                      </div>
                    </div>

                    <div className="w-2 h-2 rounded-full bg-cyan-500/40 group-hover:bg-cyan-400 transition-colors" />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {filteredSkills.length === 0 && (
            <div className="text-center py-12 text-slate-500 text-sm font-mono">
              No matching skills found for "{searchQuery}".
            </div>
          )}
        </div>

        {/* Competency Group Breakdowns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-16 text-left">
          <div className="glass-panel p-6 rounded-2xl border border-slate-800/90">
            <div className="flex items-center gap-2 mb-3">
              <Database className="w-4 h-4 text-cyan-400" />
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                Data & Operations
              </h4>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              High-volume data capture, record integrity checks, and documentation workflows across industrial and warehouse operations.
            </p>
            <div className="text-[11px] font-mono text-cyan-300">
              14 Verified Core Methods
            </div>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-slate-800/90">
            <div className="flex items-center gap-2 mb-3">
              <BarChart3 className="text-teal-400 w-4 h-4" />
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                Analytics & Business Tools
              </h4>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Structured database querying, analytical data extraction, and executive reporting using Microsoft Excel, Power BI, and SQL.
            </p>
            <div className="text-[11px] font-mono text-teal-300">
              6 Verified Analytical Capabilities
            </div>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-slate-800/90">
            <div className="flex items-center gap-2 mb-3">
              <Layers className="w-4 h-4 text-sky-400" />
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                ERP & Production Planning
              </h4>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Enterprise Resource Planning operations, inventory synchronization, Material Requirements Planning (MRP), and dispatch logs.
            </p>
            <div className="text-[11px] font-mono text-sky-300">
              2 Core Enterprise Systems
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
