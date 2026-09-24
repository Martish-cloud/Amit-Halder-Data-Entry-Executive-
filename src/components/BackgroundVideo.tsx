import React, { useState } from 'react';

export const BackgroundVideo: React.FC = () => {
  const [videoError, setVideoError] = useState(false);
  const videoSrc = `${import.meta.env.BASE_URL}background/young-master-where-winds-meet-moewalls.mp4`;

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Cinematic Background Video */}
      {!videoError && (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onError={() => setVideoError(true)}
          className="w-full h-full object-cover object-center filter blur-[1.5px] scale-[1.02] transform-gpu opacity-45 sm:opacity-50 transition-opacity duration-700"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      {/* Warm executive atmospheric tint overlay for optimal contrast and readability */}
      <div className="absolute inset-0 bg-[#F7F3EA]/25 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#F7F3EA]/40 via-transparent to-[#F2EBDD]/50 pointer-events-none" />
    </div>
  );
};
