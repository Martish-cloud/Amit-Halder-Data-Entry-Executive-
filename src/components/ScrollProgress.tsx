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
    <div className="fixed top-0 left-0 right-0 h-[3px] z-50 pointer-events-none bg-slate-900/30 backdrop-blur-sm">
      <motion.div
        className="h-full bg-gradient-to-r from-sky-500 via-cyan-400 to-teal-400 origin-left"
        style={{ scaleX }}
      />
    </div>
  );
};
