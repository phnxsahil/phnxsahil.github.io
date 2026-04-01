import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

interface LoaderProps {
  onComplete: () => void;
}

export function Loader({ onComplete }: LoaderProps) {
  const [percent, setPercent] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // High-speed numeric count (1500ms total)
    const duration = 1500;
    const interval = 15;
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setPercent(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          // Wait 600ms at 100 before wiping
          setTimeout(() => {
            setIsDone(true);
            // Trigger audio start event (if any)
            window.dispatchEvent(new CustomEvent('portfolio-start'));
            // Wipe duration + buffer
            setTimeout(onComplete, 1200); 
          }, 600);
          return 100;
        }
        return prev + increment;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  const displayValue = Math.round(percent).toString().padStart(3, '0');

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            top: 0, 
            height: 0, 
            transition: { duration: 1, ease: [0.85, 0, 0.15, 1] } 
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--bg)] overflow-hidden pointer-events-none origin-top"
        >
          {/* Top-down wipe effect built into the loader exit */}
          <div className="relative flex flex-col items-center justify-center">
            
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               className="leading-none tracking-tighter flex"
               style={{
                 fontFamily: 'var(--ff-cabinet), sans-serif',
                 fontSize: 'clamp(140px, 28vw, 600px)',
                 fontWeight: 900,
                 color: 'var(--accent)',
                 fontStyle: 'italic',
                 WebkitTextStroke: '1px var(--accent-border)'
               }}
             >
               <div className="w-[1ch] text-right">{displayValue[0]}</div>
               <div className="w-[1ch] text-right">{displayValue[1]}</div>
               <div className="w-[1ch] text-right">{displayValue[2]}</div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.5, y: 0 }}
              className="eyebrow absolute top-[105%] text-[var(--accent)] font-mono text-[10px] tracking-[0.3em]"
            >
              ENGINEER // ARCHITECT
            </motion.p>
          </div>

          <div className="absolute bottom-12 left-12 font-mono text-[8px] opacity-20 uppercase tracking-[0.4em]">
             System Registry // Booting_v4.2.0
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
