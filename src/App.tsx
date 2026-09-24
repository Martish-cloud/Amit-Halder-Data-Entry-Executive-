import { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Languages } from './components/Languages';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#EAE2D2] text-[#29261F] selection:bg-[#A8B5A2]/40 selection:text-[#29261F]">
      {/* ========================================================================= */}
      {/* SEPARATE BACKGROUND LAYER (Strictly 20% Opacity Effect Across Entire Website) */}
      {/* Sits behind content, non-blocking, pointer-events: none, content remains 100% */}
      {/* ========================================================================= */}
      <div
        className="website-bg-layer select-none overflow-hidden"
        style={{ opacity: 0.20 }}
        aria-hidden="true"
      >
        {/* Subtle warm geometric grid & dot patterns */}
        <div className="absolute inset-0 bg-grid-warm bg-dots-warm" />

        {/* Ambient atmospheric warm accents */}
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-[#A8B5A2] blur-3xl transform-gpu" />
        <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full bg-[#68724F] blur-3xl transform-gpu" />
        <div className="absolute bottom-1/3 -left-32 w-[550px] h-[550px] rounded-full bg-[#D5C7AF] blur-3xl transform-gpu" />
        <div className="absolute -bottom-32 right-1/4 w-[600px] h-[600px] rounded-full bg-[#4F5A3D] blur-3xl transform-gpu" />
      </div>

      {/* Subtle Desktop Interactive Cursor */}
      <CustomCursor />

      {/* Top Viewport Scroll Progress Bar */}
      <ScrollProgress />

      {/* Floating Sticky Navigation Bar */}
      <Navbar onDownloadResume={() => setResumeModalOpen(true)} />

      {/* Main Content Sections (Layered safely above background video) */}
      <main className="relative z-10">
        <Hero onDownloadResume={() => setResumeModalOpen(true)} />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Languages />
        <Contact />
      </main>

      {/* Minimal Premium Footer */}
      <div className="relative z-10">
        <Footer />
      </div>

      {/* Resume Download / Preview Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}

export default App;
