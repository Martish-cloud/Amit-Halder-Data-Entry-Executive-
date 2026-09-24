import React, { useRef, useEffect, useState } from 'react';

export const BackgroundVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reducedMotion] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (reducedMotion) return;

    const video = videoRef.current;
    if (video) {
      video.defaultMuted = true;
      video.muted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn('Hero video autoplay prevented:', err);
        });
      }
    }
  }, [reducedMotion]);

  return (
    <div
      className="absolute inset-0 -z-10 pointer-events-none overflow-hidden select-none bg-[#EAE2D2]"
      aria-hidden="true"
    >
      {/* Hero Scoped Background Video - Young Master */}
      {!reducedMotion && (
        <video
          ref={videoRef}
          src="./background/young-master.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover object-center filter blur-[0.5px] scale-[1.01] transform-gpu opacity-85"
        >
          <source src="./background/young-master.mp4" type="video/mp4" />
          <source src="./young-master.mp4" type="video/mp4" />
          <source src="/background/young-master.mp4" type="video/mp4" />
          <source src="/young-master.mp4" type="video/mp4" />
          <source src="./background/young-master-where-winds-meet-moewalls.mp4" type="video/mp4" />
        </video>
      )}

      {/* Transparent/Dark Overlay for optimal text readability */}
      <div className="absolute inset-0 bg-[#29261F]/20 pointer-events-none" />
    </div>
  );
};
