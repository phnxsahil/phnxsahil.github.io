import { motion } from 'motion/react';

interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.4, delay: 0.6 } }} // fade out old page beneath the wipe
        className="w-full"
      >
        {children}
      </motion.div>

      {/* The Entry/Exit Wipe Overlay */}
      <motion.div
        initial={{ top: 0, height: "100vh" }}
        animate={{ height: 0 }}
        exit={{ top: 0, height: "100vh" }}
        transition={{ duration: 1.2, ease: [0.85, 0, 0.15, 1] }} // Slower, heavier Uncommon Studio feel
        className="fixed inset-x-0 bg-[var(--bg)] z-[9999] flex flex-col items-center justify-center overflow-hidden pointer-events-none origin-top border-b-2 border-[var(--accent)]"
      >
        <motion.div 
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="flex flex-col items-center justify-center absolute inset-0"
        >
          <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--muted2)] mb-4">
            Establishing Link
          </div>
          <div className="font-bold text-[clamp(44px,8vw,80px)] italic text-[var(--text)] leading-none tracking-tighter" style={{ fontFamily: 'var(--ff-cabinet)' }}>
            S S.
          </div>
          <div className="h-[2px] w-[120px] bg-[var(--border-hi)] mt-6 relative overflow-hidden">
             <motion.div 
               animate={{ x: ["-100%", "100%"] }}
               transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
               className="absolute inset-y-0 left-0 w-[40px] bg-[var(--accent)]"
             />
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
