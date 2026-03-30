import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useInView } from './useInView';
import { projects } from '../data/projects';
import { Link } from 'react-router';
import React from 'react';

// 3D Tilt Component Wrapper
function TiltCard({ children, className }: { children: React.ReactNode, className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      <div style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}>
        {children}
      </div>
    </motion.div>
  );
}

export function FeaturedProjects() {
  const { ref, isInView } = useInView();
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section id="featured" ref={ref} className="mx-auto max-w-[1540px] px-6 py-32 md:px-12">
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
          }
        }}
        className="mb-20 flex items-center gap-4"
      >
        <div className="h-px w-10 bg-[var(--border-hi)]" />
        <span className="eyebrow" style={{ color: 'var(--muted2)' }}>
          Selected Case Studies
        </span>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        {featuredProjects.map((study, idx) => {
          // Asymmetric grid logic: 7/5 for first pair, full-width for singles.
          const gridSpan = idx % 3 === 0 ? "md:col-span-7" : idx % 3 === 1 ? "md:col-span-5" : "md:col-span-12";
          
          return (
            <TiltCard 
              key={study.id} 
              className={`${gridSpan} perspective-[2000px]`}
            >
              <motion.article
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.1 * idx, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="project-case surface flex flex-col h-full relative p-5 md:p-8 rounded-sm overflow-hidden"
              >
                <Link
                  to={`/project/${study.id}`}
                  className="project-screenshot-lg relative flex items-center justify-center overflow-hidden w-full group/img rounded-sm border border-[var(--border)] mb-8"
                  style={{ aspectRatio: '16/10' }}
                >
                  <ImageWithFallback
                    src={study.image || ''}
                    alt={`${study.name} product preview`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                     <span className="eyebrow text-white text-[10px] border border-white/20 px-4 py-2 backdrop-blur-sm">Analyze Build</span>
                  </div>
                </Link>

                <div className="flex flex-col flex-grow">
                  <p className="eyebrow mb-2" style={{ color: 'var(--accent)', letterSpacing: '0.25em', fontSize: '9px' }}>
                    {study.category} // ARCHIVE_0{idx + 1}
                  </p>
                  
                  <h3
                    className="mb-4 font-extrabold"
                    style={{
                      lineHeight: '0.9',
                      fontSize: 'clamp(28px, 4vw, 48px)',
                      letterSpacing: '-0.04em'
                    }}
                  >
                    {study.name}
                  </h3>

                  <p className="body-text text-[15px] mb-8 opacity-80 leading-relaxed font-mono italic">
                    {study.summary}
                  </p>

                  <div className="mt-auto flex items-center justify-between pt-6 border-t border-[var(--border)]">
                    <Link
                      to={`/project/${study.id}`}
                      className="btn-case group inline-flex items-center gap-2 text-[var(--accent)] font-bold text-[10px] tracking-widest uppercase"
                    >
                      Deep Dive
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                    
                    <div className="flex gap-2">
                       {study.url && (
                        <a
                          href={study.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 border border-[var(--border)] text-[var(--muted2)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all rounded-sm"
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}
                      {study.github && (
                        <a
                          href={study.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 border border-[var(--border)] text-[var(--muted2)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all rounded-sm"
                        >
                          <Github size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            </TiltCard>
          );
        })}
      </div>
    </section>
  );
}
