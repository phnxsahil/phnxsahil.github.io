import { motion, useAnimationControls } from 'motion/react';
import { useEffect, useState } from 'react';

export function Marquee() {
  const words = [
    "DESIGN ENGINEERING",
    "PRODUCTION ARCHITECTURE",
    "INTERACTION DESIGN",
    "FRONTEND SYSTEMS",
    "FULL-STACK DEPLOYMENT",
    "NEO-BRUTALISM",
  ];

  const scrollWords = [...words, ...words, ...words, ...words];
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="w-full py-4 overflow-hidden flex whitespace-nowrap border-y border-[var(--border)] group cursor-default bg-[var(--surface)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="flex items-center"
        animate={{
          x: ["0%", "-50%"],
          skewX: isHovered ? -2 : 0,
        }}
        transition={{
          x: {
            duration: isHovered ? 120 : 60,
            repeat: Infinity,
            ease: "linear",
          },
          skewX: {
            type: "spring",
            stiffness: 50,
            damping: 20
          }
        }}
        style={{ minWidth: '200%' }}
      >
        {scrollWords.map((word, i) => (
          <div key={i} className="flex items-center gap-12 shrink-0">
            <motion.span 
              className="font-bold text-[9px] tracking-[0.25em] uppercase transition-all duration-700 font-mono"
              animate={{ 
                color: isHovered ? "var(--accent)" : "var(--muted2)",
                opacity: isHovered ? 1 : 0.4 
              }}
              style={{ paddingRight: '16px' }}
            >
              {word}
            </motion.span>
            <div className="flex items-center gap-2 opacity-20 group-hover:opacity-100 transition-opacity duration-700">
               <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
               <div className="h-[1px] w-12 bg-[var(--border)]" />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
