import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

interface LoaderProps {
  onComplete: () => void;
}

export function Loader({ onComplete }: LoaderProps) {
  const [percent, setPercent] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [activeSegment, setActiveSegment] = useState(0);

  const calibrationLog = [
    "INITIALIZING_CORE_SYSTEM",
    "LOADING_VISUAL_ASSETS",
    "SYNCING_AUDIO_LATENCY",
    "CALIBRATING_INTERACTIONS",
    "ARCHIVE_SYSTEM_READY"
  ];

  useEffect(() => {
    const duration = 2400;
    const interval = 20;
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setPercent(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(onComplete, 1000);
          }, 800);
          return 100;
        }
        return prev + increment;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    setActiveSegment(Math.floor((percent / 100) * (calibrationLog.length - 1)));
  }, [percent]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-[var(--bg)] flex items-center justify-center p-8 overflow-hidden"
        >
          <div className="flex flex-col items-center gap-8 relative max-w-[320px] w-full">
            <div className="flex flex-col items-center gap-4 w-full">
              <AnimatePresence mode="wait">
                <motion.span 
                  key={activeSegment}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.4 }}
                  className="font-mono text-[9px] tracking-[0.4em] font-bold text-[var(--accent)] uppercase text-center h-[12px]"
                >
                  {calibrationLog[activeSegment]}
                </motion.span>
              </AnimatePresence>
              
              <div className="w-full h-[1px] bg-[var(--border-hi)] relative overflow-hidden mt-2">
                 <motion.div 
                   animate={{ width: `${percent}%` }}
                   className="absolute inset-y-0 left-0 bg-[var(--accent)]"
                 />
              </div>
              
              <div className="flex justify-between w-full mt-1">
                 <span className="font-mono text-[8px] opacity-20 tracking-widest uppercase">SY_CALIBRATION</span>
                 <span className="font-mono text-[8px] opacity-60 tracking-widest text-[var(--accent)] tabular-nums">{Math.round(percent)}%</span>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.05 }}
              className="font-mono text-[7px] leading-relaxed uppercase absolute inset-x-[-20%] bottom-[-140%] pointer-events-none text-center"
            >
              [ ACCESS_GRANTED ] // DELPHI_ENGINE_STABLE // HASH_0x82A1B
            </motion.div>
          </div>

          {/* Minimal Meta-data markings */}
          <div className="absolute top-12 left-12 flex flex-col gap-2 font-mono text-[8px] opacity-20">
             <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-[var(--accent)]" />
                <span>SS.portfolio_v4</span>
             </div>
          </div>

          <div className="absolute bottom-12 right-12 font-mono text-[8px] opacity-20 flex flex-col gap-1 items-end">
             <span>EST_LATENCY: 8ms</span>
             <div className="flex gap-2 items-center">
                <div className="w-2 h-2 rounded-full border border-[var(--accent)]" />
                <span>BOOT_READY</span>
             </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
