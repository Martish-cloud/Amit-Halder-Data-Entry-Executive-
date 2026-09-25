import { useState, lazy, Suspense } from 'react';
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

// Lazy-load modal to keep initial critical JavaScript bundle lean
const ResumeModal = lazy(() =>
  import('./components/ResumeModal').then((m) => ({ default: m.ResumeModal }))
);

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
        {/* Hardware-accelerated warm ambient background & subtle geometric patterns */}
        <div className="absolute inset-0 bg-ambient-warm bg-grid-warm bg-dots-warm" />
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
      {resumeModalOpen && (
        <Suspense fallback={null}>
          <ResumeModal
            isOpen={resumeModalOpen}
            onClose={() => setResumeModalOpen(false)}
          />
        </Suspense>
      )}
    </div>
  );
}

export default App;
