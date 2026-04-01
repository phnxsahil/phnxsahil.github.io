import { motion, type Variants } from 'motion/react';

type Capability = {
  title: string;
  scope: string;
  evidence: string[];
};

const capabilities: Capability[] = [
  {
    title: 'Product Direction',
    scope: 'From idea framing to launch narrative',
    evidence: [
      'Shipped 5 products from concept to production-ready experience.',
      'Defines product rails: positioning, flows, interaction model, and release scope.',
      'Works directly with founders to convert ambiguous goals into execution plans.',
    ],
  },
  {
    title: 'Design Systems',
    scope: 'Structured tokens, typography, and interaction behavior',
    evidence: [
      'Uses tokenized theming and spacing for consistent visual rhythm.',
      'Builds components that preserve hierarchy across desktop and mobile.',
      'Pairs system decisions with engineering constraints early in the process.',
    ],
  },
  {
    title: 'Frontend Engineering',
    scope: 'Production React/Next builds with motion and data UX',
    evidence: [
      'Production work across Next.js, TypeScript, and motion architecture.',
      'Delivers interactive surfaces with clear loading/error/empty states.',
      'Keeps performance practical with transform-based animation patterns.',
    ],
  },
  {
    title: 'Backend + AI Integration',
    scope: 'APIs, realtime systems, and retrieval-driven intelligence',
    evidence: [
      'FastAPI and Supabase backends used across shipped products.',
      'Implemented vector search and memory-oriented retrieval in Miryn.',
      'Integrated AI summarization/tagging workflows in Stash and Bookie.',
    ],
  },
];

export function Skills() {
  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { type: "spring", stiffness: 50, damping: 20, mass: 1 } 
    }
  };

  const maskVariants: Variants = {
    hidden: { y: "120%", rotate: 2 },
    visible: { 
      y: "0%", 
      rotate: 0,
      transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] as any } 
    }
  };

  const lineVariants: Variants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 1, ease: [0.76, 0, 0.24, 1] as any } }
  };

  return (
    <section id="stack" className="border-y border-[var(--border)] bg-[var(--bg)] px-6 py-24 md:px-12">
      <motion.div 
        className="mx-auto max-w-[1280px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-20%" }}
        variants={containerVariants}
      >
        <div className="mb-10 flex flex-col gap-5">
          <div className="flex items-center gap-[10px] overflow-hidden p-1" style={{ color: 'var(--accent)' }}>
            <motion.div variants={lineVariants} className="origin-left" style={{ width: '20px', height: '1px', background: 'var(--accent)' }} />
            <motion.span variants={maskVariants} className="eyebrow inline-block">
              Capability Depth
            </motion.span>
          </div>
          <div className="overflow-hidden p-2">
            <motion.h2
              variants={maskVariants}
              className="section-title"
              style={{
                lineHeight: '0.9',
                textTransform: 'uppercase',
              }}
            >
              How I Operate
            </motion.h2>
          </div>
        </div>
 
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {capabilities.map((item) => (
            <motion.article
              key={item.title}
              variants={cardVariants}
              className="surface rounded-sm p-6 md:p-8 border border-[var(--border)] group hover:border-[var(--accent)] transition-colors"
            >
              <h3 className="build-name text-[var(--text)] uppercase transition-colors group-hover:text-[var(--accent)]" style={{ fontSize: '20px' }}>{item.title}</h3>
              <p className="eyebrow mt-2" style={{ color: 'var(--muted2)', fontSize: '9px' }}>{item.scope}</p>
              <div className="origin-left h-px w-full bg-[var(--border)] my-6 transition-transform duration-700 group-hover:scale-x-105" />
              <ul className="flex flex-col gap-3 info-list">
                {item.evidence.map((line) => (
                  <li key={line} className="flex gap-3">
                    <span style={{ color: 'var(--accent)', fontSize: '18px', lineHeight: '1' }}>•</span>
                    <span className="text-[14px] leading-relaxed">{line}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
