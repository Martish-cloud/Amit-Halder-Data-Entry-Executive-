import React, { useRef, useEffect } from 'react';

export const BackgroundVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.defaultMuted = true;
      video.muted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn('Video autoplay prevented:', err);
        });
      }
    }
  }, []);

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Fixed Background Video - Vivid, clean & clearly visible with subtle soft blur (matching ML portfolio treatment) */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-cover object-center filter blur-[1px] scale-[1.01] transform-gpu opacity-85"
      >
        <source src="./background/young-master.mp4" type="video/mp4" />
        <source src="/background/young-master.mp4" type="video/mp4" />
        <source src="./young-master.mp4" type="video/mp4" />
        <source src="/young-master.mp4" type="video/mp4" />
        <source src="./background/young-master-where-winds-meet-moewalls.mp4" type="video/mp4" />
      </video>

      {/* Subtle atmospheric tint to maintain readability while keeping the video clean and visible */}
      <div className="absolute inset-0 bg-[#29261F]/15 pointer-events-none transition-colors duration-300" />
    </div>
  );
};
