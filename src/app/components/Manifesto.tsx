import { motion, type Variants } from 'motion/react';
import { useInView } from './useInView';

export function Manifesto() {
  const { ref, isInView } = useInView();

  const punchlines = [
    { title: 'CREATIVE FRICTION', desc: "I don't just solve problems; I engineer experiences. My process thrives at the intersection of architectural rigor and obsessive hobbyist curiosity." },
    { title: 'OBSESSIVE CURATION', desc: "Whether it's a codebase or a digital archive, I believe in the power of selection. High-performance builds born from a wide-lens perspective." },
    { title: 'ARCHITECT OF INTENT', desc: "Every line of code and every pixel is a deliberate choice. I build for founders who understand that 'vibe' is just another technical requirement." },
  ];

  const maskVariants: Variants = {
    hidden: { y: "120%", rotate: 2 },
    visible: { 
      y: "0%", 
      rotate: 0,
      transition: { type: "spring", stiffness: 60, damping: 20, mass: 1 } 
    }
  };

  const lineVariants: Variants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { type: "spring", stiffness: 50, damping: 20 } }
  };

  return (
    <section
      id="manifesto"
      ref={ref}
      className="mx-auto max-w-[1540px] border-t border-[var(--border)] px-6 py-24 md:px-12 md:py-32"
    >
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-15%" }}
        transition={{ staggerChildren: 0.15, delayChildren: 0.1 }}
        className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-[160px]"
      >
        <div className="md:col-span-4 flex flex-col gap-6">
          <div className="mb-8 flex items-center gap-3 overflow-hidden p-1">
            <motion.div variants={lineVariants} className="h-px w-8 bg-[var(--accent)] origin-left" />
            <motion.span variants={maskVariants} className="eyebrow text-[var(--accent)] inline-block">
              [01] MANIFESTO
            </motion.span>
          </div>
          
          <div className="flex flex-col gap-2">
            <div className="overflow-hidden p-2">
              <motion.h2 variants={maskVariants} className="section-title text-[clamp(48px,6vw,120px)] leading-[0.82] tracking-[-0.06em]">
                ENGINEER
              </motion.h2>
            </div>
            <div className="overflow-hidden p-2">
              <motion.h2 variants={maskVariants} className="section-title text-[clamp(48px,6vw,120px)] leading-[0.82] tracking-[-0.06em]">
                BY TRADE.
              </motion.h2>
            </div>
            <div className="overflow-hidden p-2">
              <motion.h2 variants={maskVariants} className="section-title text-[clamp(48px,6vw,120px)] leading-[0.82] tracking-[-0.06em]">
                <span style={{ color: 'var(--muted)' }}>CURATOR BY</span> OBSESSION.
              </motion.h2>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-14 md:col-span-8 md:gap-20">
          {punchlines.map((p, idx) => (
            <motion.div
              key={idx}
              variants={maskVariants}
              className="flex max-w-[540px] flex-col gap-4"
            >
              <h3 className="eyebrow text-[12px] font-black tracking-[0.25em]">{p.title} / 0{idx + 1}</h3>
              <p className="body-text text-[20px] font-normal leading-tight opacity-90 md:text-[23px]" style={{ color: 'var(--text)' }}>
                {p.desc}
              </p>
            </motion.div>
          ))}

          <motion.div
            variants={maskVariants}
            className="border-t border-[var(--border-hi)] pt-12"
          >
            <blockquote
              className="max-w-[64ch] font-mono text-[16px] leading-relaxed italic opacity-40 md:text-[17px]"
              style={{ color: 'var(--text)' }}
            >
              "Most engineers optimize for efficiency. I optimize for resonance. From local liquid dnb archives to production-grade architecture, everything is a system, and every system deserves to be a masterclass."
            </blockquote>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
