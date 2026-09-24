import React, { useState, useEffect } from 'react';

export const BackgroundVideo: React.FC = () => {
  const [videoError, setVideoError] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener?.('change', handleChange);
    return () => mediaQuery.removeEventListener?.('change', handleChange);
  }, []);

  const rootVideoSrc = `${import.meta.env.BASE_URL}young-master.mp4`;
  const bgVideoSrc = `${import.meta.env.BASE_URL}background/young-master.mp4`;
  const legacyVideoSrc = `${import.meta.env.BASE_URL}background/young-master-where-winds-meet-moewalls.mp4`;

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none bg-[#F7F3EA]"
      aria-hidden="true"
    >
      {/* Cinematic Background Video - respects reduced motion, preloads metadata, non-blocking */}
      {!videoError && !reducedMotion && (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          onError={() => setVideoError(true)}
          className="w-full h-full object-cover object-center filter blur-[1.5px] scale-[1.02] transform-gpu opacity-45 sm:opacity-50 transition-opacity duration-700"
        >
          <source src={rootVideoSrc} type="video/mp4" />
          <source src={bgVideoSrc} type="video/mp4" />
          <source src={legacyVideoSrc} type="video/mp4" />
        </video>
      )}

      {/* Warm executive atmospheric tint overlay for optimal contrast and readability */}
      <div className="absolute inset-0 bg-[#F7F3EA]/25 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#F7F3EA]/40 via-transparent to-[#F2EBDD]/50 pointer-events-none" />
    </div>
  );
};
