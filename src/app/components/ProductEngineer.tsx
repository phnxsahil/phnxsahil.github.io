import { motion } from 'motion/react';
import { Database, Layers, Code2 } from 'lucide-react';
import React from 'react';

export function ProductEngineer() {
  const pillars = [
    {
      title: "Systems Architecture",
      icon: Database,
      items: ["Scalable Data Flow", "Node.js / Go / Rust", "Real-time Architecture"],
      desc: "Architecting the invisible backbone of high-performance applications."
    },
    {
      title: "Interface Engineering",
      icon: Code2,
      items: ["Advanced UX Logic", "Framer Motion Physics", "TypeScript Mastery"],
      desc: "Crafting interactions that feel tangible and pixel-perfect."
    },
    {
      title: "Product Strategy",
      icon: Layers,
      items: ["Technical Discovery", "End-to-End Ownership", "Iterative Deployment"],
      desc: "Bridging the gap between code and commercial goals."
    }
  ];

  return (
    <section id="engineering" className="mx-auto max-w-[1400px] px-6 py-32 md:px-12 relative">
      <div className="mb-24">
        <motion.div
           initial={{ opacity: 0, x: -10 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="flex items-center gap-3 mb-6"
        >
          <div className="h-px w-6 bg-[var(--accent)]" />
          <span className="eyebrow tracking-[0.3em] font-mono text-[var(--accent)] text-[9px]">ENGINEERING CORE</span>
        </motion.div>
        
        <h2 className="text-[clamp(32px,6vw,84px)] font-black uppercase leading-[0.85] tracking-tighter" style={{ fontFamily: 'var(--ff-cabinet)' }}>
           FOCUSING ON <br /> WHAT MATTERS.
        </h2>
        
        <p className="mt-8 body-text max-w-xl text-[15px] opacity-50 leading-relaxed font-mono">
          Systems engineered for longevity, performance, and user-centric logic.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-[var(--border)] pt-20">
        {pillars.map((pillar, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="group flex flex-col gap-8"
          >
            <div className="w-10 h-10 border border-[var(--border)] rounded-sm flex items-center justify-center group-hover:border-[var(--accent)] transition-colors">
               <pillar.icon size={18} className="text-[var(--accent)] opacity-60 group-hover:opacity-100 transition-opacity" />
            </div>
            
            <div>
              <h3 className="text-xl font-bold uppercase mb-3 tracking-tighter" style={{ fontFamily: 'var(--ff-cabinet)' }}>
                {pillar.title}
              </h3>
              <p className="text-[13px] opacity-40 font-mono leading-relaxed mb-8 max-w-[28ch]">
                {pillar.desc}
              </p>
            </div>

            <ul className="space-y-4">
              {pillar.items.map((item, j) => (
                <li key={j} className="flex items-center gap-3 opacity-30 group-hover:opacity-80 transition-opacity">
                  <div className="w-1 h-1 bg-[var(--accent)] rounded-full" />
                  <span className="font-mono text-[10px] uppercase tracking-widest">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
