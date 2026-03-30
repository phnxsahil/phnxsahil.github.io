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
      className="w-full py-4 overflow-hidden flex whitespace-nowrap border-y border-[var(--border)] group cursor-default"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="flex items-center"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: isHovered ? 80 : 40,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ minWidth: '200%' }}
      >
        {scrollWords.map((word, i) => (
          <div key={i} className="flex items-center gap-10 shrink-0">
            <motion.span 
              className="font-medium text-[10px] tracking-[0.2em] uppercase transition-colors duration-500"
              animate={{ color: isHovered ? "var(--accent)" : "var(--muted2)" }}
              style={{ paddingRight: '12px' }}
            >
              {word}
            </motion.span>
            <span className="h-[1px] w-8 bg-[var(--border)] shrink-0 opacity-40" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
