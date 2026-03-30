import { motion } from 'motion/react';
import { useInView } from './useInView';

export function Biography() {
  const { ref, isInView } = useInView();

  return (
    <section 
      id="biography" 
      ref={ref} 
      className="mx-auto max-w-[1540px] px-6 py-32 md:px-12 border-t border-[var(--border)] overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 relative">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-[400px] h-full bg-gradient-to-l from-[var(--accent-dim)] to-transparent pointer-events-none" />

        <div className="md:col-span-12 mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[var(--accent)]" />
            <span className="eyebrow text-[var(--accent)]">[01.5] THE ARCHIVAL STORY</span>
          </div>
          <h2 className="section-title text-[clamp(48px,12vw,140px)] leading-[0.8] mb-12">
            BEHIND THE <br/><span className="text-[var(--accent)]">SYSTEMS.</span>
          </h2>
        </div>

        <div className="md:col-span-5 flex flex-col gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="flex flex-col gap-6"
          >
            <h3 className="font-mono text-[11px] font-bold tracking-[0.3em] uppercase opacity-40">_THE_GENESIS</h3>
            <p className="body-text text-[18px] md:text-[20px] leading-relaxed">
              I grew up in the intersection of heavy metal records and terminal commands. For me, code was never just logic—it was a medium for curation. Whether I was organizing a 10,000-track library or building a high-performance neural engine, the goal remained the same: <span className="text-[var(--text)] font-semibold">Perfect Curation.</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="bg-[var(--surface)] p-8 border border-[var(--border)] rounded-sm relative"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-[var(--accent)]" />
            <span className="font-mono text-[9px] opacity-40 mb-4 block">TECHNICAL_FOOTNOTE_04</span>
            <p className="font-mono text-[12px] leading-relaxed italic opacity-70">
              "Every project built is a response to a friction. If the existing tool doesn't allow for obsessive organization, I build it. Stash, Bookie, and FLTRD weren't market-first; they were logic-first."
            </p>
          </motion.div>
        </div>

        <div className="md:col-span-7 flex flex-col gap-12 justify-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-col gap-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-4">
                <span className="eyebrow text-[var(--accent)]">THE HOBBIES</span>
                <ul className="flex flex-col gap-3 font-mono text-[11px] uppercase tracking-wider opacity-60">
                  <li>— Liquid Drum & Bass</li>
                  <li>— Darkroom Photography</li>
                  <li>— Mechanical Keyboards</li>
                  <li>— Architectural Minimal</li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <span className="eyebrow text-[var(--accent)]">THE PHILOSOPHY</span>
                <p className="body-text text-[14px] leading-relaxed opacity-60">
                  Engineering is the art of making the complex invisible. I don't build to show off; I build to settle the chaos.
                </p>
              </div>
            </div>

            <div className="pt-12 border-t border-[var(--border-hi)]">
              <p className="body-text text-[24px] md:text-[32px] font-bold leading-[1.1] mb-8">
                I DON'T JUST SHIP CODE. I <span className="text-[var(--muted)]">ARCHIVE</span> IMPACT.
              </p>
              <p className="body-text opacity-50 max-w-[60ch]">
                My projects are proof that high-performance engineering doesn't have to be sterile. It can have soul, rhythm, and a deep sense of curation. That's why I focus on founders who want to build legacies, not just features.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
