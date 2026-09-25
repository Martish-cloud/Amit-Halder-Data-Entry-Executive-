import type { Options } from 'canvas-confetti';

/**
 * Dynamically loads canvas-confetti on demand to prevent bundling 40KB+ into the critical path.
 */
export const triggerConfetti = async (options?: Options) => {
  try {
    const { default: confetti } = await import('canvas-confetti');
    confetti({
      particleCount: 40,
      spread: 50,
      origin: { y: 0.25 },
      colors: ['#A8B5A2', '#68724F', '#4F5A3D', '#D8C7AD'],
      ...options,
    });
  } catch {
    // Graceful fallback if blocked or unsupported
  }
};
