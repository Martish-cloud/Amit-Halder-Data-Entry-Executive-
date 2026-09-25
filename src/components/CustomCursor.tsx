import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [isPointerDevice] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  });

  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ targetX: -100, targetY: -100, currentX: -100, currentY: -100 });
  const isHoveredRef = useRef(false);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    if (!isPointerDevice) return;

    let animId: number;
    const ring = cursorRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;

    // Smooth 60/120fps lerp loop for the outer ring without triggering React re-renders
    const render = () => {
      const { targetX, targetY, currentX, currentY } = posRef.current;
      const ease = 0.2;
      const nextX = currentX + (targetX - currentX) * ease;
      const nextY = currentY + (targetY - currentY) * ease;
      posRef.current.currentX = nextX;
      posRef.current.currentY = nextY;

      const hovered = isHoveredRef.current;
      const ringOffset = hovered ? 24 : 16;
      ring.style.transform = `translate3d(${nextX - ringOffset}px, ${nextY - ringOffset}px, 0)`;
      dot.style.transform = `translate3d(${targetX - 3}px, ${targetY - 3}px, 0) scale(${hovered ? 1.5 : 1})`;

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    const onMouseMove = (e: MouseEvent) => {
      posRef.current.targetX = e.clientX;
      posRef.current.targetY = e.clientY;
      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        ring.style.opacity = '1';
        dot.style.opacity = '1';
      }
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const isInteractive = !!target.closest('button, a, input, textarea, select, [role="button"], .interactive-card');
      if (isInteractive !== isHoveredRef.current) {
        isHoveredRef.current = isInteractive;
        if (isInteractive) {
          ring.style.width = '48px';
          ring.style.height = '48px';
          ring.style.backgroundColor = 'rgba(168, 181, 162, 0.22)';
          ring.style.borderColor = 'rgba(79, 90, 61, 0.8)';
        } else {
          ring.style.width = '32px';
          ring.style.height = '32px';
          ring.style.backgroundColor = 'rgba(168, 181, 162, 0.08)';
          ring.style.borderColor = 'rgba(104, 114, 79, 0.45)';
        }
      }
    };

    const onMouseLeave = () => {
      isVisibleRef.current = false;
      ring.style.opacity = '0';
      dot.style.opacity = '0';
    };

    const onMouseEnter = () => {
      isVisibleRef.current = true;
      ring.style.opacity = '1';
      dot.style.opacity = '1';
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseover', onMouseOver, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isPointerDevice]);

  if (!isPointerDevice) return null;

  return (
    <>
      {/* Outer ring */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border transition-[width,height,background-color,border-color] duration-200 ease-out opacity-0 border-[#68724F]/40"
        style={{
          width: '32px',
          height: '32px',
          backgroundColor: 'rgba(168, 181, 162, 0.08)',
          borderColor: 'rgba(104, 114, 79, 0.45)',
          willChange: 'transform',
        }}
      />
      {/* Inner dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full bg-[#4F5A3D] opacity-0 transition-transform duration-100 ease-out"
        style={{
          width: '6px',
          height: '6px',
          willChange: 'transform',
        }}
      />
    </>
  );
};
