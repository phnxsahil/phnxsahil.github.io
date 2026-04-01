import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Github, Activity, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';
import { Link } from 'react-router';

export function Projects() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const featured = projects.filter(p => p.featured);
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(featured.length - 1) * 25}%`]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-transparent">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Section Header - Fixed Left */}
        <div className="absolute top-24 left-12 z-20 max-w-md pointer-events-none">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[var(--accent)]" />
            <span className="eyebrow text-[var(--accent)]">[02] SELECTED CASE STUDIES</span>
          </div>
          <h2 className="section-title text-[clamp(48px,8vw,120px)] leading-[0.8] mb-8">
            KINETIC <br/><span className="text-[var(--accent)]">ARCHIVE.</span>
          </h2>
        </div>

        <motion.div style={{ x }} className="flex gap-12 px-12 md:px-48 ml-[20vw]">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
          
          {/* End cap */}
          <div className="flex-shrink-0 w-[40vw] flex items-center justify-center">
             <div className="text-center">
                <p className="eyebrow opacity-20 mb-4">End of Selected Archive</p>
                <Link to="/#work" className="text-4xl font-black uppercase italic hover:text-[var(--accent)] transition-colors">
                   View Full Registry →
                </Link>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any, index: number }) {
  const statusColors = {
    active: 'bg-emerald-500',
    live: 'bg-emerald-500',
    waitlist: 'bg-amber-500',
    maintenance: 'bg-blue-500',
    crashed: 'bg-rose-500',
    soon: 'bg-purple-500'
  };

  return (
    <motion.div 
      className="relative flex-shrink-0 w-[70vw] md:w-[850px] aspect-[16/10] md:aspect-auto md:h-[550px] group bg-[var(--surface)] border border-[var(--border)] overflow-hidden rounded-sm"
      whileHover={{ borderColor: 'var(--accent-border)' }}
      transition={{ duration: 0.4 }}
    >
      {/* Background Image / Placeholder */}
      <div className="absolute inset-0 z-0">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.name} 
            className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[var(--bg)] to-[var(--surface2)] opacity-20" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent opacity-80" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full p-8 md:p-12 flex flex-col">
        <div className="flex justify-between items-start mb-auto">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[10px] opacity-40 uppercase tracking-widest">System_Ref: 0{index + 1} // {project.year}</span>
            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic leading-none group-hover:text-[var(--accent)] transition-colors">
              {project.name}
            </h3>
          </div>
          
          {/* Status Badge */}
          <div className="flex items-center gap-3 px-4 py-2 bg-black/40 backdrop-blur-md border border-white/5 rounded-full">
            <div className={`w-2 h-2 rounded-full animate-pulse ${statusColors[project.status as keyof typeof statusColors] || 'bg-white'}`} />
            <span className="font-mono text-[9px] font-bold uppercase tracking-widest">{project.status}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <div className="flex flex-col gap-6">
            <p className="body-text text-lg opacity-70 leading-relaxed max-w-sm italic">
              "{project.summary}"
            </p>
            <div className="flex flex-wrap gap-2">
              {project.stack.slice(0, 4).map(tech => (
                <span key={tech} className="text-[9px] font-mono tracking-widest uppercase border border-white/10 px-2 py-1 bg-white/5 opacity-60">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 md:items-end">
            <Link 
              to={`/project/${project.id}`}
              className="group/btn flex items-center gap-4 bg-[var(--accent)] text-black font-black uppercase tracking-widest text-[11px] px-8 py-4 hover:scale-105 transition-all shadow-[8px_8px_0_0_rgba(0,0,0,0.2)] active:translate-y-1 active:shadow-none"
            >
              System Audit
              <ArrowUpRight size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
            </Link>
            
            <div className="flex gap-3">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 border border-white/10 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all">
                  <Github size={18} />
                </a>
              )}
              {project.url && (
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="p-3 border border-white/10 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all">
                  <Activity size={18} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
