import { motion } from 'motion/react';

interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const transition = { duration: 0.8, ease: [0.76, 0, 0.24, 1] };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.8, duration: 0.4 } }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
        className="w-full relative z-0"
      >
        {children}
      </motion.div>

      <div className="fixed inset-0 z-[9999] pointer-events-none flex flex-col overflow-hidden">
        
        {/* =========================================
            TOP PANEL — SAHIL 
            ========================================= */}
        <motion.div 
           initial={{ y: 0 }}
           animate={{ y: "-100%", transition: { ...transition, delay: 0.5 } }}
           exit={{ y: 0, transition: { ...transition } }}
           className="absolute top-0 left-0 w-full h-1/2 bg-[var(--bg)] flex flex-col items-center justify-end overflow-hidden border-b border-[var(--border)]"
        >
           <div 
             className="text-[var(--accent)] mb-[-0.15em] ml-[0.35em]"
             style={{
               fontFamily: 'var(--ff-cabinet), sans-serif',
               fontSize: 'clamp(80px, 18vw, 360px)',
               fontWeight: 900,
               fontStyle: 'italic',
               lineHeight: 0.8
             }}
           >
             S
           </div>
        </motion.div>

        {/* =========================================
            BOTTOM PANEL — S. 
            ========================================= */}
        <motion.div 
           initial={{ y: 0 }}
           animate={{ y: "100%", transition: { ...transition, delay: 0.5 } }}
           exit={{ y: 0, transition: { ...transition } }}
           className="absolute bottom-0 left-0 w-full h-1/2 bg-[var(--bg)] flex flex-col items-center justify-start overflow-hidden border-t border-[var(--border)]"
        >
           <div 
             className="mt-[-0.15em] mr-[0.35em]"
             style={{
               fontFamily: 'var(--ff-cabinet), sans-serif',
               fontSize: 'clamp(80px, 18vw, 360px)',
               fontWeight: 900,
               color: 'transparent',
               WebkitTextStroke: '2px var(--accent)',
               fontStyle: 'italic',
               lineHeight: 0.8
             }}
           >
             S.
           </div>
        </motion.div>

      </div>
    </>
  );
}
