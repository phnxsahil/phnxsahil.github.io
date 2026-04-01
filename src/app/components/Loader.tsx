import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

interface LoaderProps {
  onComplete: () => void;
}

export function Loader({ onComplete }: LoaderProps) {
  const [percent, setPercent] = useState(0);
  const [phase, setPhase] = useState<'counting' | 'name' | 'splitting' | 'done'>('counting');

  useEffect(() => {
    const duration = 1800;
    const interval = 18;
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setPercent(prev => {
        if (prev >= 100) {
          clearInterval(timer);

          // Beat 1: Show the name (600ms after count finishes)
          setTimeout(() => setPhase('name'), 400);

          // Beat 2: Start splitting (1400ms total pause)
          setTimeout(() => {
            setPhase('splitting');
            // Trigger audio start event
            window.dispatchEvent(new CustomEvent('portfolio-start'));
            
            // Beat 3: Signal done (800ms after split starts)
            setTimeout(onComplete, 900);
          }, 1600);

          return 100;
        }
        return prev + increment;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  const displayValue = Math.round(percent).toString().padStart(3, '0');
  const isCounting = phase === 'counting';
  const showName = phase === 'name' || phase === 'splitting';
  const isSplitting = phase === 'splitting';

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden pointer-events-none"
        >
          {/* TOP PANEL — SAHIL rides up */}
          <motion.div 
            initial={{ y: 0 }}
            animate={{ y: isSplitting ? "-100%" : 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 45, 
              damping: 18, 
              mass: 1.2,
              delay: isSplitting ? 0 : 0
            }}
            className="absolute top-0 left-0 w-full h-1/2 bg-[var(--bg)] z-10 flex flex-col items-center justify-end overflow-hidden"
          >
             <AnimatePresence>
               {showName && (
                 <motion.div
                   initial={{ y: 80, opacity: 0, scale: 0.95 }}
                   animate={{ y: 0, opacity: 1, scale: 1 }}
                   transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                   className="text-[var(--accent)] mb-[-0.12em]"
                   style={{
                     fontFamily: 'var(--ff-cabinet), sans-serif',
                     fontSize: 'clamp(64px, 14vw, 280px)',
                     fontWeight: 900,
                     fontStyle: 'italic',
                     lineHeight: 1
                   }}
                 >
                   SAHIL
                 </motion.div>
               )}
             </AnimatePresence>
          </motion.div>
          
          {/* BOTTOM PANEL — SHARMA rides down */}
          <motion.div 
            initial={{ y: 0 }}
            animate={{ y: isSplitting ? "100%" : 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 45, 
              damping: 18, 
              mass: 1.2,
              delay: isSplitting ? 0.05 : 0
            }}
            className="absolute bottom-0 left-0 w-full h-1/2 bg-[var(--bg)] z-10 flex flex-col items-center justify-start overflow-hidden"
          >
             <AnimatePresence>
                {showName && (
                  <motion.div
                    initial={{ y: -80, opacity: 0, scale: 0.95 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                    className="mt-[-0.12em]"
                    style={{
                      fontFamily: 'var(--ff-cabinet), sans-serif',
                      fontSize: 'clamp(64px, 14vw, 280px)',
                      fontWeight: 900,
                      color: 'transparent',
                      WebkitTextStroke: '2px var(--accent)',
                      fontStyle: 'italic',
                      lineHeight: 1
                    }}
                  >
                    SHARMA
                  </motion.div>
                )}
             </AnimatePresence>

             {/* Aperture Cut Line — only glows when split begins */}
             <motion.div 
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ 
                  scaleX: showName ? 1 : 0, 
                  opacity: showName ? 0.6 : 0,
                  boxShadow: isSplitting 
                    ? '0 0 40px var(--accent), 0 0 80px var(--accent)' 
                    : '0 0 10px var(--accent)'
                }}
                className="h-[2px] w-full bg-[var(--accent)] origin-center"
                style={{ position: 'absolute', top: -1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
             />
          </motion.div>

          {/* Central Numeric Counter */}
          <div className="relative z-20 w-full flex flex-col items-center justify-center">
             <AnimatePresence mode="wait">
               {isCounting && (
                 <motion.div 
                    key="counter"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.15, filter: "blur(12px)" }}
                    transition={{ duration: 0.35 }}
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
               )}
             </AnimatePresence>

             <AnimatePresence>
               {isCounting && (
                 <motion.p
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 0.5, y: 0 }}
                   exit={{ opacity: 0, y: -10 }}
                   transition={{ duration: 0.3 }}
                   className="eyebrow absolute top-[105%] text-[var(--accent)] font-mono text-[10px] tracking-[0.3em]"
                 >
                   ENGINEER // ARCHITECT
                 </motion.p>
               )}
             </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
