import { motion } from 'motion/react';
import { Database, Server, Layout, Cpu, ShieldCheck, Zap } from 'lucide-react';

export function ProductEngineer() {
  const pillars = [
    {
      title: "Full-Stack Systems",
      icon: <Server className="text-[var(--accent)]" size={32} />,
      desc: "Architecting resilient, high-throughput distributed systems. Beyond just 'API glue', I build core infrastructures that scale.",
      stack: ["Go", "Node.js", "GraphQL", "PostgreSQL"],
      delay: 0.1
    },
    {
      title: "Product Experience",
      icon: <Layout className="text-[var(--accent)]" size={32} />,
      desc: "Bridging the gap between engineering and human-centered design. I build products that are technically superior and aesthetically elite.",
      stack: ["React", "Next.js", "Framer Motion", "Tailwind"],
      delay: 0.2
    },
    {
      title: "Core Infrastructure",
      icon: <Database className="text-[var(--accent)]" size={32} />,
      desc: "Optimizing the 'engine room'. From database indexing to CI/CD pipelines, I ensure the foundation is unbreakable.",
      stack: ["Docker", "AWS", "Redis", "CI/CD"],
      delay: 0.3
    }
  ];

  return (
    <section className="mx-auto max-w-[1540px] px-6 py-40 md:px-12 relative overflow-hidden">
      {/* Background technical grid accent */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="arch-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#arch-grid)" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-end gap-12 mb-32 border-b border-[var(--border)] pb-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-px bg-[var(--accent)]" />
            <span className="eyebrow tracking-[0.3em]" style={{ color: 'var(--accent)' }}>Product Engineering // V4 Architect</span>
          </motion.div>
          
          <h2 className="section-title leading-[0.85] tracking-tighter mb-8">
            Engineering <br/> <span className="opacity-40 italic font-light">With Intent.</span>
          </h2>
          
          <p className="body-text text-xl max-w-xl opacity-70 leading-relaxed">
            I don't just 'code frontends'. I engineer full-cycle products. 
            Designing the architecture, the data flow, and the interaction physics 
            to create high-integrity digital experiences.
          </p>
        </div>

        <div className="flex flex-col gap-8 md:text-right font-mono text-[10px] uppercase tracking-[0.2em] opacity-40">
           <div className="flex items-center gap-3 md:justify-end">
              <span>Performance 99+</span>
              <Zap size={14} className="text-[var(--accent)]" />
           </div>
           <div className="flex items-center gap-3 md:justify-end">
              <span>Security Audited</span>
              <ShieldCheck size={14} className="text-[var(--accent)]" />
           </div>
           <div className="flex items-center gap-3 md:justify-end">
              <span>Low Latency Ops</span>
              <Cpu size={14} className="text-[var(--accent)]" />
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {pillars.map((pillar, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: pillar.delay, ease: [0.2, 0, 0, 1] }}
            className="group relative flex flex-col p-10 border border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--bg2)] transition-all duration-500 overflow-hidden"
          >
            <div className="mb-10 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 origin-left">
              {pillar.icon}
            </div>
            
            <h3 className="text-3xl font-bold mb-6 tracking-tight group-hover:text-[var(--accent)] transition-colors">
              {pillar.title}
            </h3>
            
            <p className="body-text text-base opacity-60 leading-relaxed mb-10 group-hover:opacity-80 transition-opacity">
              {pillar.desc}
            </p>

            <div className="mt-auto flex flex-wrap gap-2 pt-8 border-t border-[var(--border)] group-hover:border-[var(--accent-border)] transition-colors">
              {pillar.stack.map((tech, j) => (
                <span key={j} className="text-[9px] font-mono tracking-[0.1em] px-2 py-1 bg-[var(--bg)] border border-[var(--border)] rounded-sm">
                  {tech}
                </span>
              ))}
            </div>

            {/* Subtle architectural background number */}
            <span className="absolute -bottom-4 -right-2 font-black text-8xl opacity-[0.02] group-hover:opacity-[0.05] transition-opacity select-none pointer-events-none">
              0{i+1}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
