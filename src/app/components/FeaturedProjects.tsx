import { motion } from 'motion/react';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { projects } from '../data/projects';
import { Link } from 'react-router';

export function FeaturedProjects() {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section id="featured" className="mx-auto max-w-[1540px] px-6 py-32 md:px-12 relative">
      <div className="mb-32 flex items-center gap-4">
        <div className="h-px w-10 bg-[var(--border-hi)]" />
        <span className="eyebrow" style={{ color: 'var(--muted2)' }}>
          Selected Case Studies // Stack
        </span>
      </div>

      <div className="flex flex-col w-full relative pb-[10vh]">
        {featuredProjects.map((study, idx) => {
          return (
            <div 
              key={study.id} 
              className="sticky w-full max-w-6xl mx-auto flex items-center justify-center"
              style={{
                top: `calc(10vh + ${idx * 40}px)`, // Staggers the cards as they stack
                zIndex: idx + 1,
                marginBottom: idx === featuredProjects.length - 1 ? '0' : '40vh',
              }}
            >
              <motion.article
                initial={{ opacity: 0, y: 100, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ margin: "-10%", once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="w-full rounded-xl overflow-hidden border border-[var(--border-hi)] bg-[var(--bg)] shadow-[0_-20px_40px_rgba(0,0,0,0.4)] flex flex-col md:flex-row"
                style={{
                  minHeight: 'min(70vh, 600px)',
                  borderTop: '1px solid var(--accent)',
                }}
              >
                {/* Left Side: Info */}
                <div className="w-full md:w-5/12 p-8 md:p-14 flex flex-col justify-between z-10 bg-[var(--surface)] border-r border-[var(--border)]">
                  <div>
                    <div className="flex items-center gap-4 mb-8">
                       <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                       <p className="eyebrow font-mono" style={{ color: 'var(--accent)', letterSpacing: '0.25em', fontSize: '9px' }}>
                         {study.category} // 0{idx + 1}
                       </p>
                    </div>
                    
                    <h3
                      className="mb-6 font-extrabold uppercase"
                      style={{
                        lineHeight: '0.9',
                        fontSize: 'clamp(32px, 5vw, 64px)',
                        letterSpacing: '-0.04em',
                        WebkitTextStroke: '1px var(--accent-border)'
                      }}
                    >
                      {study.name}
                    </h3>

                    <p className="body-text text-lg opacity-70 leading-relaxed font-mono italic max-w-sm">
                      {study.summary}
                    </p>
                  </div>

                  <div className="mt-12 md:mt-auto flex items-center gap-6 pt-8 border-t border-[var(--border)]">
                    <Link
                      to={`/project/${study.id}`}
                      className="group flex flex-1 items-center justify-between text-[var(--accent)] font-bold text-[11px] tracking-widest uppercase py-3 border border-[var(--accent)] px-6 rounded-sm hover:bg-[var(--accent)] hover:text-black transition-colors"
                    >
                      <span>Deep Dive</span>
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
                    </Link>
                    
                    <div className="flex gap-2">
                       {study.url && (
                        <a
                          href={study.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 border border-[var(--border)] text-[var(--muted2)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all rounded-sm flex items-center justify-center bg-[var(--bg)]"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                      {study.github && (
                        <a
                          href={study.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 border border-[var(--border)] text-[var(--muted2)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all rounded-sm flex items-center justify-center bg-[var(--bg)]"
                        >
                          <Github size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Side: Visual */}
                <div className="w-full md:w-7/12 relative min-h-[40vh] md:min-h-full group overflow-hidden bg-black">
                  <Link to={`/project/${study.id}`} className="absolute inset-0 block">
                    <ImageWithFallback
                      src={study.image || ''}
                      alt={`${study.name} product preview`}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.5s] ease-[auto] group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    />
                    {/* Dark gradient overlay for blending */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--surface)] to-transparent opacity-80 md:w-[25%]" />
                  </Link>
                </div>

              </motion.article>
            </div>
          );
        })}
      </div>
    </section>
  );
}

