import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { useRef } from 'react';

export function PersonalStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const y1 = useTransform(smoothProgress, [0, 1], ["-20%", "20%"]);
  const y2 = useTransform(smoothProgress, [0, 1], ["20%", "-20%"]);
  const rotate1 = useTransform(smoothProgress, [0, 1], [0, 120]);
  const scale1 = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);

  return (
    <section 
      id="story" 
      ref={containerRef}
      className="relative mx-auto max-w-[1540px] px-6 py-60 md:px-12 overflow-hidden border-t border-[var(--border)]"
    >
      {/* Abstract Background Element - Cinematic Orb */}
      <motion.div 
        style={{ y: y1, rotate: rotate1, scale: scale1 }}
        className="absolute top-40 right-[-10%] md:right-0 w-[400px] md:w-[800px] aspect-square rounded-full opacity-20 pointer-events-none mix-blend-screen filter blur-[120px]"
        initial={{ background: 'radial-gradient(circle, var(--accent) 0%, transparent 75%)' }}
        animate={{ 
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating Glass Prism Element */}
      <motion.div
        style={{ y: y2, rotate: -rotate1 }}
        className="absolute bottom-40 left-[-5%] w-[300px] h-[300px] border border-white/10 bg-white/5 backdrop-blur-3xl opacity-10 pointer-events-none rotate-12"
      />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-32">
        
        {/* Left Column: Massive Storytelling Header */}
        <div className="md:col-span-5 flex flex-col gap-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-[var(--accent)]" />
            <span className="eyebrow tracking-[0.4em]" style={{ color: 'var(--accent)' }}>Case_File // Human_Variable</span>
          </div>
          
          <div className="flex flex-col">
            <h2 className="section-title text-[clamp(64px,10vw,140px)] leading-[0.75] tracking-[-0.04em] uppercase font-black italic">
              Digital <br />
              <span className="opacity-20 not-italic font-thin">Flesh.</span>
            </h2>
          </div>
          
          <p className="body-text text-xl md:text-2xl opacity-60 leading-tight max-w-md font-mono italic">
            "Software is a mirror. It reflects the architecture of the mind that built it."
          </p>
        </div>

        {/* Right Column: Narrative Blocks */}
        <div className="md:col-span-7 flex flex-col gap-32">
          
          {/* Studies & Foundation */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: [0.2, 0, 0, 1] }}
            className="flex flex-col gap-6 relative"
          >
            <span className="font-mono text-[9px] tracking-[0.5em] uppercase opacity-30">Archive_01 // The_Gene</span>
            <p className="body-text text-2xl md:text-3xl leading-[1.1] font-bold tracking-tight text-[var(--text)]">
              I grew up in the intersection of <span className="text-[var(--accent)]">analog grit</span> and binary logic. 
              My education wasn't just in syntax, but in the structural integrity of high-throughput systems.
            </p>
            <p className="body-text text-lg opacity-50 leading-relaxed max-w-2xl">
              Studying the core mechanics of computer architecture taught me that beauty isn't skin deep—it's foundational. 
              I build products that are fast because they are right, not because they are optimized at the end.
            </p>
          </motion.div>

          {/* Hobbies & Beyond */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: [0.2, 0, 0, 1], delay: 0.1 }}
            className="flex flex-col gap-6 relative"
          >
            <span className="font-mono text-[9px] tracking-[0.5em] uppercase opacity-30">Archive_02 // Frequency</span>
            <p className="body-text text-2xl md:text-3xl leading-[1.1] font-bold tracking-tight text-[var(--text)]">
              Curation is my <span className="text-[var(--accent)]">primary ritual.</span> Whether tuning 
              a modular synth or indexing a 10k track library, the goal is clarity.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              {['Liquid D&B', 'Darkroom Photography', 'Brutalist Architecture', 'Mechanical Keyboards'].map(tag => (
                <span key={tag} className="px-4 py-2 border border-white/5 bg-white/5 rounded-sm font-mono text-[9px] tracking-widest uppercase opacity-40">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Future Vision */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: [0.2, 0, 0, 1], delay: 0.2 }}
            className="flex flex-col gap-8 p-12 border border-[var(--accent-border)] bg-[var(--accent-dim)] relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-6 font-mono text-[8px] opacity-20 uppercase tracking-[0.5em]">Future_Lock: Active</div>
            <p className="body-text text-2xl md:text-3xl leading-tight font-black uppercase italic tracking-tighter text-[var(--text)]">
              "We are building the <span className="text-[var(--accent)]">next epoch</span> of creative agency. 
              Tools that don't just solve, but augment."
            </p>
            <p className="body-text text-lg opacity-70 leading-relaxed">
              My trajectory is locked onto the intersection of AI-native workflows and high-fidelity interaction physics. 
              I am building the infrastructure for the next generation of creative founders.
            </p>
            
            {/* Animated UI Accent */}
            <motion.div 
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-40"
            />
          </motion.div>

        </div>
      </div>

      {/* Background Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} 
      />
    </section>
  );
}
