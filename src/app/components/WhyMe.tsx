import { motion } from 'motion/react';

const MANIFESTO_ITEMS = [
  {
    title: "ENGINEERING_FOR_FOUNDERS",
    description: "I don't just write code; I build leverage. Having shipped products from zero to one, I understand that technical debt is a business decision and speed is a competitive advantage."
  },
  {
    title: "WHERE_I_DIFFER",
    description: "Most engineers focus on the 'How'. I focus on the 'Why'. I bridge the gap between pixel-perfect design and production-grade architecture, ensuring that every interaction serves a commercial outcome."
  },
  {
    title: "HONEST_TALKS_NO_BS",
    description: "I value radical transparency. If a feature doesn't move the needle, I'll tell you. My goal isn't just to finish a task; it's to solve a problem profitably."
  }
];

export function WhyMe() {
  return (
    <section
      id="why-me"
      className="relative py-24 md:py-32 px-6 md:px-12 overflow-hidden border-y border-[var(--border)]"
      style={{ background: 'color-mix(in srgb, var(--surface) 82%, transparent)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-16">
          <div className="w-12 h-[1px] bg-[var(--accent)]" />
          <span className="eyebrow tracking-[0.4em] text-[var(--accent)]">[02] THE_DIFFERENTIATOR</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-24">
          {MANIFESTO_ITEMS.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.8 }}
              className="flex flex-col gap-6"
            >
              <h3 className="text-[20px] font-black uppercase tracking-tighter leading-none text-[var(--text)]">
                {item.title}
              </h3>
              <p className="font-mono text-[12px] leading-relaxed text-[var(--muted2)] max-w-[34ch]">
                {item.description}
              </p>
              <div className="h-[2px] w-6 bg-[var(--border-hi)] group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>

        {/* Tactical Footer */}
        <div className="mt-24 md:mt-32 pt-12 border-t border-[var(--border)] flex flex-col md:flex-row justify-between gap-8 opacity-60 hover:opacity-100 transition-opacity duration-700">
           <div className="flex flex-col gap-1 font-mono text-[8px] uppercase tracking-widest leading-loose">
              <span>MODEL: PERFORMANCE_DRIVEN</span>
              <span>STACK: ARCHITECTURE_FIRST</span>
              <span>COMMUNICATION: SYNC_RADICAL_HONESTY</span>
           </div>
           <div className="flex items-center gap-6">
              <span className="font-mono text-[8px] uppercase tracking-widest text-[var(--accent)]">SAHIL // DIFFERENTIA_v4.2</span>
           </div>
        </div>
      </div>
    </section>
  );
}
