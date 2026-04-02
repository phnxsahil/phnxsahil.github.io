import { motion, useScroll, useTransform } from 'motion/react';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { projects } from '../data/projects';
import { Link } from 'react-router';
import React, { useRef } from 'react';

export function FeaturedProjects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const featuredProjects = projects.filter(p => p.featured);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Balanced horizontal translation
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(featuredProjects.length - 1) * 75 + 15}%`]);

  return (
    <section 
      id="featured" 
      ref={containerRef} 
      className="relative h-[350vh] bg-[var(--bg)]"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
        {/* Minimalist Title Section */}
        <div className="absolute top-12 left-6 md:left-12 z-20">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-px w-6 bg-[var(--accent)]" />
            <span className="eyebrow tracking-[0.3em] font-mono text-[var(--accent)] text-[9px]">SELECTED BUILDS</span>
          </motion.div>
          <h2 className="text-[clamp(32px,5vw,72px)] font-black uppercase tracking-tighter leading-none" style={{ fontFamily: 'var(--ff-cabinet)' }}>
            WORK ARCHIVE
          </h2>
        </div>

        {/* Lean Horizontal Track */}
        <motion.div 
          style={{ x }} 
          className="flex gap-20 px-6 md:px-12 items-center"
        >
          {featuredProjects.map((study, idx) => (
            <motion.div
              key={study.id}
              className="relative shrink-0 w-[80vw] md:w-[65vw] lg:w-[55vw]"
            >
              <motion.article
                className="w-full rounded-sm overflow-hidden border border-[var(--border)] bg-[var(--surface)] shadow-sm flex flex-col md:flex-row transition-all duration-700 hover:border-[var(--accent-border)]"
                style={{
                  minHeight: '55vh',
                }}
              >
                {/* Left Side: Minimal Text Info */}
                <div className="w-full md:w-5/12 p-8 md:p-12 flex flex-col justify-between z-10 bg-[var(--surface)] border-r border-[var(--border)]">
                  <div>
                    <div className="flex items-center gap-4 mb-10">
                       <p className="eyebrow font-mono opacity-40 uppercase" style={{ letterSpacing: '0.25em', fontSize: '9px' }}>
                         0{idx + 1} // {study.category}
                       </p>
                    </div>
                    
                    <h3
                      className="mb-8 font-extrabold uppercase tracking-tighter transition-colors group-hover:text-[var(--accent)]"
                      style={{
                        fontFamily: 'var(--ff-cabinet)',
                        lineHeight: '0.9',
                        fontSize: 'clamp(28px, 4vw, 48px)',
                      }}
                    >
                      {study.name}
                    </h3>

                    <p className="body-text text-[14px] opacity-40 leading-relaxed font-mono italic max-w-sm">
                      {study.summary}
                    </p>
                  </div>

                  <div className="mt-12 md:mt-auto flex items-center gap-6 pt-10 border-t border-[var(--border)]">
                    <Link
                      to={`/project/${study.id}`}
                      className="group flex flex-1 items-center justify-between text-[var(--accent)] font-bold text-[10px] tracking-[0.2em] uppercase py-3 border border-[var(--accent)] px-6 rounded-sm hover:bg-[var(--accent)] hover:text-black transition-all"
                    >
                      <span>Deep Dive</span>
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                    
                    <div className="flex gap-2">
                       {study.url && (
                          <a
                            href={study.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 border border-[var(--border)] text-[var(--muted2)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all rounded-sm flex items-center justify-center bg-[var(--bg)]"
                          >
                            <ExternalLink size={16} />
                          </a>
                      )}
                      {study.github && (
                          <a
                            href={study.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 border border-[var(--border)] text-[var(--muted2)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all rounded-sm flex items-center justify-center bg-[var(--bg)]"
                          >
                            <Github size={16} />
                          </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Side: Massive Image */}
                <div className="w-full md:w-7/12 relative min-h-[30vh] md:min-h-full group overflow-hidden bg-black">
                  <Link to={`/project/${study.id}`} className="absolute inset-0 block">
                    <ImageWithFallback
                      src={study.image || ''}
                      alt={`${study.name} product preview`}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[2s] ease-[var(--ease-fluid)] group-hover:scale-105 opacity-60 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--surface)] to-transparent opacity-60 md:w-[25%]" />
                  </Link>
                </div>
              </motion.article>
            </motion.div>
          ))}
          
          <div className="shrink-0 w-[15vw]" />
        </motion.div>

        {/* Minimalist Progress Line */}
        <div className="absolute bottom-16 left-6 md:left-12 right-6 md:right-12 h-px bg-[var(--border)]">
           <motion.div 
             style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
             className="w-full h-full bg-[var(--accent)]"
           />
        </div>
      </div>
    </section>
  );
}
