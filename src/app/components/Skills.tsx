import { motion } from 'motion/react';
import { useInView } from './useInView';

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
  const { ref, isInView } = useInView();

  return (
    <section id="stack" ref={ref} className="border-y border-[var(--border)] bg-[var(--bg)] px-6 py-24 md:px-12">
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.62 }}
          className="mb-10"
        >
          <div className="flex items-center gap-[10px] mb-5" style={{ color: 'var(--accent)' }}>
            <div style={{ width: '20px', height: '1px', background: 'var(--accent)' }} />
            <span className="eyebrow">
              Capability Depth
            </span>
          </div>
          <h2
            className="section-title"
            style={{
              lineHeight: '0.9',
              textTransform: 'uppercase',
            }}
          >
            How I Operate
          </h2>
        </motion.div>
 
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {capabilities.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.08, duration: 0.62 }}
              className="surface rounded-sm p-6 md:p-8 border border-[var(--border)]"
            >
              <h3 className="build-name text-[var(--text)] uppercase" style={{ fontSize: '20px' }}>{item.title}</h3>
              <p className="eyebrow mt-2" style={{ color: 'var(--muted2)', fontSize: '9px' }}>{item.scope}</p>
              <div className="h-px w-full bg-[var(--border)] my-6" />
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
      </div>
    </section>
  );
}
