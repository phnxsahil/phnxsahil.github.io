import { useParams, Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, Github, Code2, Cpu, BarChart3, ChevronRight } from 'lucide-react';
import { projects } from '../data/projects';
import { useEffect } from 'react';

export default function ProjectDetailPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="flex h-screen flex-col items-center justify-center p-6 text-center">
        <h1 className="section-title mb-4">Project Not Found</h1>
        <Link to="/" className="btn-secondary px-8 py-3 uppercase tracking-widest font-bold border border-[var(--border)] hover:bg-[var(--text)] hover:text-[var(--bg)] transition-all">
          Return Home
        </Link>
      </div>
    );
  }

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as any }
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-[1400px] mx-auto">
      <Link to="/" className="group inline-flex items-center gap-2 mb-12 text-[var(--muted2)] hover:text-[var(--text)] transition-colors eyebrow text-[10px]">
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        Return to Portfolio Index
      </Link>

      {/* Hero Header */}
      <motion.header
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="mb-20 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start"
      >
        <div className="md:col-span-12">
           <div className="flex items-center gap-3 mb-6">
              <span className="chip-label px-3 py-1 border border-[var(--accent-border)] bg-[var(--accent-dim)] text-[var(--accent)] text-[9px] font-bold">
                {project.category} // {project.year}
              </span>
           </div>
           <h1 className="section-title mb-8" style={{ fontSize: 'clamp(56px, 10vw, 120px)', lineHeight: '0.85', textTransform: 'uppercase' }}>
             {project.name}
           </h1>
           <p className="body-text max-w-[65ch] text-[20px] md:text-[24px] leading-tight opacity-80 mb-10">
             {project.description}
           </p>

           <div className="flex flex-wrap gap-4">
             {project.url && (
               <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn-cta bg-[var(--accent)] text-black px-8 py-3 font-bold uppercase text-[11px] tracking-wider flex items-center gap-2 hover:scale-105 transition-transform">
                 Launch Project <ExternalLink size={14} />
               </a>
             )}
             {project.github && (
               <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-[var(--border)] text-[var(--text)] font-bold uppercase text-[11px] tracking-wider flex items-center gap-2 hover:bg-[var(--surface2)] transition-all">
                 <Github size={16} /> Repository
               </a>
             )}
           </div>
        </div>
      </motion.header>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-32">
        
        {/* Left Column: Narrative */}
        <div className="md:col-span-7 flex flex-col gap-24">
          
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
            <div className="flex items-center gap-3 mb-8">
               <div className="p-2 border border-[var(--border)] rounded-lg bg-[var(--surface)]">
                 <Code2 size={24} className="text-[var(--accent)]" />
               </div>
               <h2 className="eyebrow text-[var(--text)] text-[14px]">Functional UX // Interaction Design</h2>
            </div>
            <p className="body-text text-[18px] mb-8 leading-relaxed opacity-70">
              {project.uxDeepDive || project.uxPerspective || "The experiential layer of this product is rooted in intentional motion and user-centric flows. Every interaction is designed to bridge the gap between complex backend logic and seamless frontend execution."}
            </p>
          </motion.section>

          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
            <div className="flex items-center gap-3 mb-8">
               <div className="p-2 border border-[var(--border)] rounded-lg bg-[var(--surface)]">
                 <Cpu size={24} className="text-[var(--accent)]" />
               </div>
               <h2 className="eyebrow text-[var(--text)] text-[14px]">Technical Architecture // Logic Layer</h2>
            </div>
            <p className="body-text text-[18px] mb-8 leading-relaxed opacity-70">
              {project.techDeepDive || project.architecture || "Built on a modern stack prioritized for reliability and performance. The architecture utilizes distributed systems where necessary and adheres to the principles of high-performance product engineering."}
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
               {project.stack.map(tech => (
                 <div key={tech} className="p-4 border border-[var(--border)] bg-[var(--surface)] rounded-sm flex items-center gap-3">
                    <ChevronRight size={14} className="text-[var(--accent)]" />
                    <span className="eyebrow text-[10px] tracking-widest text-[var(--text)]">{tech}</span>
                 </div>
               ))}
            </div>
          </motion.section>

          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
            <div className="flex items-center gap-3 mb-8">
               <div className="p-2 border border-[var(--border)] rounded-lg bg-[var(--surface)]">
                 <BarChart3 size={24} className="text-[var(--accent)]" />
               </div>
               <h2 className="eyebrow text-[var(--text)] text-[14px]">The Impact // Shipped Outcomes</h2>
            </div>
            <ul className="flex flex-col gap-6">
              {project.outcomes.map((outcome, idx) => (
                <li key={idx} className="flex gap-4 p-6 border border-[var(--border)] bg-[var(--surface)]/50 group hover:border-[var(--accent-border)] transition-colors">
                   <span className="text-[var(--accent)] font-mono opacity-40">0{idx + 1}</span>
                   <p className="body-text text-[16px]">{outcome}</p>
                </li>
              ))}
            </ul>
          </motion.section>
        </div>

        {/* Right Column: Meta & Sidebar */}
        <aside className="md:col-span-5 flex flex-col gap-12">
          <div className="p-10 border border-[var(--border)] bg-[var(--surface)] rounded-2xl relative overflow-hidden group hover:border-[var(--accent-border)] transition-all">
             <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-dim)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
             <div className="relative z-10">
               <p className="eyebrow text-[var(--muted2)] mb-2">Build Duration</p>
               <p className="section-title mb-8" style={{ fontSize: '32px' }}>{project.year === '2025' ? 'Active Production' : 'v1.0 Shipped'}</p>
               
               <p className="eyebrow text-[var(--muted2)] mb-2">Key Critical Decisions</p>
               <ul className="flex flex-col gap-4">
                 {project.decisions.map((decision, idx) => (
                   <li key={idx} className="text-[14px] leading-snug border-l-2 border-[var(--accent)] pl-4 py-1 italic opacity-80">
                      {decision}
                   </li>
                 ))}
               </ul>
             </div>
          </div>

          <div className="sticky top-24 p-8 border-t border-[var(--border)] pt-12">
            <h3 className="eyebrow text-[var(--muted2)] mb-6">Explore Other Builds</h3>
            <div className="flex flex-col gap-4">
              {projects.filter(p => p.id !== project.id).slice(0, 3).map(p => (
                <Link key={p.id} to={`/project/${p.id}`} className="flex items-center justify-between group p-3 hover:bg-[var(--surface)] transition-all rounded-lg border border-transparent hover:border-[var(--border)]">
                  <span className="text-[var(--text)] uppercase font-bold text-[12px]">{p.name}</span>
                  <ArrowLeft size={16} className="rotate-180 opacity-40 group-hover:translate-x-1 group-hover:opacity-100 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
}
