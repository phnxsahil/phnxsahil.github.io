import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export function DotMarquee() {
  const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour12: false }));
  const [status, setStatus] = useState("SYSTEM_ONLINE");
  const [showStatus, setShowStatus] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }));
      
      // Update status every 10 seconds or so
      if (now.getSeconds() % 10 === 0) {
        setShowStatus(true);
        setTimeout(() => setShowStatus(false), 3000);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-[var(--bg2)] border-b border-[var(--border)] overflow-hidden flex items-center relative z-50 h-[32px]">
      <motion.div 
        className="flex whitespace-nowrap items-center px-6 gap-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-center gap-8">
            <span 
              className="font-['Doto'] text-[10px] tracking-widest text-[var(--accent)]"
              style={{ fontVariationSettings: '"wght" 600' }}
            >
              LOCAL_TIME: {time}
            </span>
            <div className="w-[3px] h-[3px] rounded-full bg-[var(--border-hi)]" />
            <AnimatePresence mode="wait">
              {showStatus ? (
                <motion.span 
                  key="status"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="font-['Doto'] text-[10px] tracking-widest text-[var(--muted2)]"
                >
                  DEHRADUN_STATION: 30.3165° N, 78.0322° E
                </motion.span>
              ) : (
                <motion.span 
                  key="label"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="font-['Doto'] text-[10px] tracking-widest text-[var(--muted)]"
                >
                  DIGITAL_ARCHIVE_v4.2 // PORTFOLIO_MASTERCLASS
                </motion.span>
              )}
            </AnimatePresence>
            <div className="w-[3px] h-[3px] rounded-full bg-[var(--border-hi)]" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
