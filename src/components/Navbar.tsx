import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileDown, Menu, X, Check, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/cvData';
import { triggerConfetti } from '../utils/confetti';

interface NavbarProps {
  onDownloadResume?: () => void;
}

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Languages', href: '#languages' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onDownloadResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 40);

          // Scroll-spy: Determine active section
          const sections = NAV_LINKS.map((item) => item.href.substring(1));
          const scrollPosition = window.scrollY + 180;

          for (let i = sections.length - 1; i >= 0; i--) {
            const el = document.getElementById(sections[i]);
            if (el && el.offsetTop <= scrollPosition) {
              setActiveSection(sections[i]);
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

    triggerConfetti({ origin: { y: 0.1 } });

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const el = document.getElementById(targetId);
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
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#EAE2D2]/95 backdrop-blur-md border-b border-[#C9B89E]/60 shadow-sm shadow-[#4B382C]/5'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Monogram */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F5A3D] rounded-lg p-1"
            aria-label="Amit Halder Home"
          >
            <div className="w-9 h-9 rounded-xl bg-[#4F5A3D] p-[1px] flex items-center justify-center shadow-sm shadow-[#4B382C]/10 group-hover:bg-[#68724F] transition-colors">
              <div className="w-full h-full bg-[#4F5A3D] group-hover:bg-[#68724F] rounded-[11px] flex items-center justify-center transition-colors">
                <span className="font-mono text-xs font-bold text-[#FFFFFF]">
                  AH
                </span>
              </div>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm font-semibold tracking-tight text-[#29261F] group-hover:text-[#4F5A3D] transition-colors">
                Amit Halder
              </span>
              <span className="text-[10px] font-mono text-[#665E55] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#68724F] animate-pulse" />
                Operations & Data
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#E1D7C4]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#C9B89E]/70 shadow-sm">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F5A3D] ${
                    isActive
                      ? 'text-[#4F5A3D] font-semibold'
                      : 'text-[#665E55] hover:text-[#29261F] hover:bg-[#D5C7AF]/50'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-[#A8B5A2]/30 border border-[#68724F]/35 rounded-full -z-10 shadow-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA: Download CV & Contact */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={handleDownload}
              className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-lg border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F5A3D] ${
                downloadSuccess
                  ? 'bg-[#A8B5A2]/30 border-[#68724F] text-[#4F5A3D]'
                  : 'bg-[#FFFFFF] border-[#C9B89E] hover:border-[#68724F] text-[#4B382C] hover:text-[#29261F] shadow-sm'
              }`}
              title="Download Amit Halder's CV"
            >
              {downloadSuccess ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#4F5A3D]" />
                  <span>Downloaded!</span>
                </>
              ) : (
                <>
                  <FileDown className="w-3.5 h-3.5 text-[#68724F] group-hover:translate-y-0.5 transition-transform" />
                  <span>Download CV</span>
                </>
              )}
            </button>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="flex items-center gap-2 px-4 py-1.5 text-xs font-semibold rounded-lg bg-[#4F5A3D] hover:bg-[#68724F] text-[#FFFFFF] shadow-sm hover:shadow-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F5A3D]"
            >
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={handleDownload}
              className="p-2 rounded-lg bg-[#E1D7C4] border border-[#C9B89E] text-[#4F5A3D] hover:bg-[#D5C7AF] focus:outline-none"
              aria-label="Download CV"
            >
              {downloadSuccess ? (
                <Check className="w-4 h-4 text-[#4F5A3D]" />
              ) : (
                <FileDown className="w-4 h-4" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#E1D7C4] border border-[#C9B89E] text-[#4B382C] hover:text-[#29261F] hover:bg-[#D5C7AF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F5A3D]"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Animated Dropdown Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden border-b border-[#C9B89E] bg-[#EAE2D2]/98 backdrop-blur-2xl px-4 pt-2 pb-6 shadow-md"
          >
            <div className="flex flex-col space-y-1.5 pt-2">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-[#A8B5A2]/25 text-[#4F5A3D] border border-[#68724F]/30 font-semibold'
                        : 'text-[#4B382C] hover:bg-[#E1D7C4] hover:text-[#29261F]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#4F5A3D]" />}
                  </a>
                );
              })}

              <div className="pt-4 mt-2 border-t border-[#C9B89E] flex flex-col gap-2.5">
                <button
                  onClick={handleDownload}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-[#FFFFFF] border border-[#C9B89E] text-[#4B382C] shadow-sm"
                >
                  <FileDown className="w-4 h-4 text-[#68724F]" />
                  <span>Download CV (PDF)</span>
                </button>

                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-[#4F5A3D] text-[#FFFFFF] shadow-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span>Contact Amit Halder</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
