import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-50 pointer-events-none bg-[#D8C7AD]/40">
      <motion.div
        className="h-full bg-gradient-to-r from-[#A8B5A2] via-[#68724F] to-[#4F5A3D] origin-left"
        style={{ scaleX }}
      />
    </div>
  );
};
