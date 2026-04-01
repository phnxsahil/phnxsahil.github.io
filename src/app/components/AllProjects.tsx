import { motion, type Variants } from 'motion/react';
import { ArrowUpRight, Github, Activity, ShieldCheck, Box } from 'lucide-react';
import { projects } from '../data/projects';
import { Link } from 'react-router';

export function AllProjects() {
  const allProjects = projects.filter(p => !p.featured);

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } }
  };

  const rowVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <section id="work" className="mx-auto max-w-[1540px] px-6 md:px-12 py-40">
      <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-12 border-b border-[var(--border)] pb-16">
        <div className="max-w-2xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-[var(--accent)]" />
            <span className="eyebrow tracking-[0.3em]" style={{ color: 'var(--accent)' }}>System Index // Archive v4.2</span>
          </div>
          <h2 className="section-title leading-[0.85] tracking-tighter mb-8">
            Product <br/> <span className="opacity-40 italic font-light">Registry.</span>
          </h2>
          <p className="body-text text-xl opacity-60 max-w-xl">
            A comprehensive catalog of engineered systems, from financial distribution layers to AI-driven social discovery engines.
          </p>
        </div>

        <div className="flex gap-12 text-[10px] font-mono tracking-[0.2em] uppercase opacity-40">
           <div className="flex flex-col gap-2">
              <span className="text-[var(--accent)]">Metric_01</span>
              <span>99.9% Uptime</span>
           </div>
           <div className="flex flex-col gap-2">
              <span className="text-[var(--accent)]">Metric_02</span>
              <span>Zero-Downtime CD</span>
           </div>
        </div>
      </div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        variants={containerVariants}
        className="flex flex-col border-t border-[var(--border)]"
      >
        {allProjects.map((project) => (
          <motion.article
            key={project.name}
            variants={rowVariants}
            className="group relative border-b border-[var(--border)] transition-all duration-500 overflow-hidden"
          >
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 py-12 md:py-16 px-4 md:px-8 items-center bg-transparent group-hover:bg-[var(--surface)] transition-colors">
              
              {/* Meta Pillar */}
              <div className="md:col-span-2">
                <span className="text-[9px] font-mono tracking-[0.3em] opacity-40 mb-4 block">SHIPPED_{project.year}</span>
                <h3 className="text-2xl font-black uppercase tracking-tighter group-hover:text-[var(--accent)] transition-colors">{project.name}</h3>
                <div className="mt-4 flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                   <span className="text-[8px] font-mono tracking-widest uppercase opacity-60">Status: Active_Production</span>
                </div>
              </div>

              {/* Summary Pillar */}
              <div className="md:col-span-4">
                 <p className="body-text text-sm opacity-60 group-hover:opacity-100 transition-opacity leading-relaxed max-w-sm italic">
                    {project.summary}
                 </p>
              </div>

              {/* Technical Pillar */}
              <div className="md:col-span-4 border-l border-[var(--border)] pl-8 flex flex-col gap-6">
                 <div>
                    <span className="text-[9px] font-mono tracking-[0.3em] opacity-40 mb-3 block">CORE_SYSTEMS</span>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map(tech => (
                        <span key={tech} className="text-[9px] font-mono tracking-[0.1em] px-2 py-0.5 border border-[var(--border)] bg-[var(--bg)] rounded-sm opacity-60 group-hover:border-[var(--accent-border)] group-hover:opacity-100 transition-all">
                          {tech}
                        </span>
                      ))}
                    </div>
                 </div>
                 
                 <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 text-[var(--accent)] opacity-40 group-hover:opacity-100 transition-opacity">
                       <ShieldCheck size={14} />
                       <span className="text-[8px] font-mono tracking-widest uppercase">Verified Build</span>
                    </div>
                    <div className="flex items-center gap-2 text-[var(--accent)] opacity-40 group-hover:opacity-100 transition-opacity">
                       <Box size={14} />
                       <span className="text-[8px] font-mono tracking-widest uppercase">Dockerized OS</span>
                    </div>
                 </div>
              </div>

              {/* Actions Pillar */}
              <div className="md:col-span-2 flex md:flex-col items-center md:items-end gap-4">
                 <Link to={`/project/${project.id}`} className="w-full md:w-auto px-6 py-3 border border-[var(--border)] group-hover:border-[var(--accent)] text-[9px] font-mono tracking-[0.3em] uppercase flex items-center justify-between gap-4 bg-[var(--bg)] group-hover:bg-[var(--accent)] group-hover:text-black transition-all">
                    System_Audit
                    <ArrowUpRight size={14} />
                 </Link>
                 
                 <div className="flex gap-3">
                    {project.url && (
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="p-3 border border-[var(--border)] text-[var(--muted2)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all">
                        <Activity size={16} />
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 border border-[var(--border)] text-[var(--muted2)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all">
                        <Github size={16} />
                      </a>
                    )}
                 </div>
              </div>

            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}


