import { type Variants } from 'framer-motion';

export const springTransition = {
  type: 'spring' as const,
  stiffness: 120,
  damping: 20,
  mass: 0.8,
};

export const smoothEase = [0.16, 1, 0.3, 1] as const;

export const fadeInVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: smoothEase,
    },
  },
};

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const scaleCardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: smoothEase,
    },
  },
  hover: {
    y: -6,
    scale: 1.01,
    transition: {
      duration: 0.25,
      ease: smoothEase,
    },
  },
};

export const badgeHoverVariants: Variants = {
  initial: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.2 } },
};

export const buttonHoverVariants: Variants = {
  initial: { scale: 1, y: 0 },
  hover: { scale: 1.02, y: -2, transition: { duration: 0.2, ease: smoothEase } },
  tap: { scale: 0.98, y: 0 },
};
