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
    <div className="relative min-h-screen bg-[#F7F3EA] text-[#29261F] selection:bg-[#A8B5A2]/40 selection:text-[#29261F]">
      {/* Subtle Desktop Interactive Cursor */}
      <CustomCursor />

      {/* Top Viewport Scroll Progress Bar */}
      <ScrollProgress />

      {/* Floating Sticky Navigation Bar */}
      <Navbar onDownloadResume={() => setResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero onDownloadResume={() => setResumeModalOpen(true)} />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Languages />
        <Contact />
      </main>

      {/* Minimal Premium Footer */}
      <Footer />

      {/* Resume Download / Preview Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}

export default App;
