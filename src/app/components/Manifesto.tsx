import { motion } from 'motion/react';
import { useInView } from './useInView';

export function Manifesto() {
  const { ref, isInView } = useInView();

  const punchlines = [
    { title: "CREATIVE FRICTION", desc: "I don't just solve problems; I engineer experiences. My process thrives at the intersection of architectural rigor and obsessive hobbyist curiosity." },
    { title: "OBSESSIVE CURATION", desc: "Whether it's a codebase or a digital archive, I believe in the power of selection. High-performance builds born from a wide-lens perspective." },
    { title: "ARCHITECT OF INTENT", desc: "Every line of code and every pixel is a deliberate choice. I build for founders who understand that 'vibe' is just another technical requirement." }
  ];

  return (
    <section 
      id="manifesto" 
      ref={ref} 
      className="mx-auto max-w-[1540px] px-6 py-32 md:px-12 border-t border-[var(--border)]"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-[160px]">
        <div className="md:col-span-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-[var(--accent)]" />
            <span className="eyebrow text-[var(--accent)]">[01] MANIFESTO</span>
          </div>
          <h2 
            className="section-title mb-12"
            style={{ 
              fontSize: 'clamp(48px, 6vw, 120px)', 
              lineHeight: '0.82', 
              letterSpacing: '-0.06em' 
            }}
          >
            ENGINEER <br/>BY TRADE. <br/><span style={{ color: 'var(--muted)' }}>CURATOR BY</span> OBSESSION.
          </h2>
        </div>

        <div className="md:col-span-8 flex flex-col justify-center gap-20">
          {punchlines.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + (idx * 0.15), duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-4 max-w-[540px]"
            >
              <h3 className="eyebrow text-[12px] font-black tracking-[0.25em]">{p.title} / 0{idx + 1}</h3>
              <p className="body-text text-[20px] md:text-[23px] font-normal leading-tight opacity-90" style={{ color: 'var(--text)' }}>
                {p.desc}
              </p>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 1 }}
            className="pt-12 border-t border-[var(--border-hi)]"
          >
            <blockquote 
              className="font-mono italic text-[16px] md:text-[17px] opacity-40 leading-relaxed max-w-[64ch]"
              style={{ color: 'var(--text)' }}
            >
              "Most engineers optimize for efficiency. I optimize for resonance. From local liquid dnb archives to production-grade architecture—everything is a system, and every system deserves to be a masterclass."
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
