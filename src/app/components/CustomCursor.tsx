import { useEffect, useRef, useState } from 'react';

export function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [ringPos, setRingPos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const checkMobile = () => {
      const coarse = window.matchMedia('(pointer: coarse)').matches;
      setIsMobile(window.innerWidth <= 768 || coarse || 'ontouchstart' in window);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      const nextPos = { x: e.clientX, y: e.clientY };
      mouseRef.current = nextPos;
      setMousePos(nextPos);
    };

    window.addEventListener('mousemove', handleMouseMove);

    let rafId = 0;
    const animateRing = () => {
      setRingPos((prev) => ({
        x: prev.x + (mouseRef.current.x - prev.x) * 0.12,
        y: prev.y + (mouseRef.current.y - prev.y) * 0.12,
      }));
      rafId = requestAnimationFrame(animateRing);
    };

    rafId = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Dot cursor */}
      <div
        style={{
          position: 'fixed',
          width: '8px',
          height: '8px',
          background: 'var(--accent)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'difference',
          transition: 'transform 0.15s',
        }}
      />

      {/* Ring cursor */}
      <div
        style={{
          position: 'fixed',
          width: '32px',
          height: '32px',
          border: '1px solid var(--accent)',
          opacity: 0.4,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          left: `${ringPos.x}px`,
          top: `${ringPos.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
}
