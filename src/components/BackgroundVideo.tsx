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
      className="absolute inset-0 -z-10 pointer-events-none overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Hero Scoped Background Video - Young Master visual background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-cover object-center filter blur-[0.5px] scale-[1.01] transform-gpu opacity-85"
      >
        <source src="./background/young-master.mp4" type="video/mp4" />
        <source src="/background/young-master.mp4" type="video/mp4" />
        <source src="./young-master.mp4" type="video/mp4" />
        <source src="/young-master.mp4" type="video/mp4" />
        <source src="./background/young-master-where-winds-meet-moewalls.mp4" type="video/mp4" />
      </video>

      {/* Subtle atmospheric tint to maintain readability */}
      <div className="absolute inset-0 bg-[#29261F]/20 pointer-events-none" />

      {/* Seamless bottom fade into dimmed next section */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-[#E1D7C4] pointer-events-none" />
    </div>
  );
};
