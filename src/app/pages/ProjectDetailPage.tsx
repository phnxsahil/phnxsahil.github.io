import { useParams, Link } from 'react-router';
import { motion, type Variants } from 'motion/react';
import { ArrowLeft, ExternalLink, Github, Code2, Cpu, BarChart3, ChevronRight } from 'lucide-react';
import { projects } from '../data/projects';
import { useEffect } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { SystemAnatomy } from '../components/SystemAnatomy';

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

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
  };

  const maskVariants: Variants = {
    hidden: { y: "120%", rotate: 2 },
    visible: { 
      y: "0%", 
      rotate: 0,
      transition: { type: "spring", stiffness: 60, damping: 20, mass: 1 } 
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { type: "spring", stiffness: 50, damping: 20, mass: 1 } 
    }
  };

  const fadeVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } }
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
        variants={containerVariants}
        className="mb-20 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start"
      >
        <div className="md:col-span-12">
           <div className="overflow-hidden p-1 mb-6">
              <motion.div variants={maskVariants} className="flex items-center gap-3">
                <span className="chip-label px-3 py-1 border border-[var(--accent-border)] bg-[var(--accent-dim)] text-[var(--accent)] text-[9px] font-bold">
                  {project.category} // {project.year}
                </span>
              </motion.div>
           </div>
           
           <div className="flex flex-col gap-2 mb-8">
             <div className="overflow-hidden p-1">
                <motion.h1 variants={maskVariants} className="section-title text-[clamp(56px,10vw,120px)] leading-[0.85] tracking-[-0.04em] uppercase">
                  {project.name}
                </motion.h1>
             </div>
           </div>

           <motion.div variants={fadeVariants}>
             <p className="body-text max-w-[65ch] text-[20px] md:text-[24px] leading-tight opacity-80 mb-10">
               {project.description}
             </p>
           </motion.div>

           <motion.div variants={fadeVariants} className="flex flex-wrap gap-4">
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
           </motion.div>
        </div>
      </motion.header>

      {/* Featured Image Section (Ultra-Clean) */}
      {project.image && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.98, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-full aspect-[21/9] rounded-sm overflow-hidden border border-[var(--border)] mb-32 bg-[var(--surface)] group"
        >
          <ImageWithFallback 
            src={project.image} 
            alt={project.name} 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
        </motion.div>
      )}

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-32">
        
        {/* Left Column: Narrative */}
        <div className="md:col-span-7 flex flex-col gap-24">
          
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={containerVariants}>
            <div className="overflow-hidden p-1">
              <motion.div variants={maskVariants} className="flex items-center gap-3 mb-8">
                 <div className="p-2 border border-[var(--border)] rounded-lg bg-[var(--surface)]">
                   <Code2 size={24} className="text-[var(--accent)]" />
                 </div>
                 <h2 className="eyebrow text-[var(--text)] text-[14px]">Functional UX // Interaction Design</h2>
              </motion.div>
            </div>
            <motion.div variants={fadeVariants}>
              <p className="body-text text-[18px] mb-8 leading-relaxed opacity-70">
                {project.uxDeepDive || project.uxPerspective || "The experiential layer of this product is rooted in intentional motion and user-centric flows. Every interaction is designed to bridge the gap between complex backend logic and seamless frontend execution."}
              </p>
            </motion.div>
          </motion.section>

          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={containerVariants}>
            <div className="overflow-hidden p-1">
              <motion.div variants={maskVariants} className="flex items-center gap-3 mb-8">
                 <div className="p-2 border border-[var(--border)] rounded-lg bg-[var(--surface)]">
                   <Cpu size={24} className="text-[var(--accent)]" />
                 </div>
                 <h2 className="eyebrow text-[var(--text)] text-[14px]">Technical Architecture // Logic Layer</h2>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeVariants}>
                <p className="body-text text-[18px] mb-8 leading-relaxed opacity-70">
                  {project.techDeepDive || project.architecture || "Built on a modern stack prioritized for reliability and performance. The architecture utilizes distributed systems where necessary and adheres to the principles of high-performance product engineering."}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {project.stack.slice(0, 4).map((tech, idx) => (
                    <motion.div 
                      key={tech} 
                      variants={cardVariants}
                      custom={idx}
                      className="p-4 border border-[var(--border)] bg-[var(--surface)] rounded-sm flex items-center gap-3 group hover:border-[var(--accent)] transition-colors"
                    >
                        <ChevronRight size={14} className="text-[var(--accent)] group-hover:translate-x-1 transition-transform" />
                        <span className="eyebrow text-[10px] tracking-widest text-[var(--text)]">{tech}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeVariants} className="w-full">
                <SystemAnatomy stack={project.stack} />
              </motion.div>
            </div>
          </motion.section>

          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={containerVariants}>
            <div className="overflow-hidden p-1">
              <motion.div variants={maskVariants} className="flex items-center gap-3 mb-8">
                 <div className="p-2 border border-[var(--border)] rounded-lg bg-[var(--surface)]">
                   <BarChart3 size={24} className="text-[var(--accent)]" />
                 </div>
                 <h2 className="eyebrow text-[var(--text)] text-[14px]">Impact Scorecard // Shipped Outcomes</h2>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {project.outcomes.map((outcome, idx) => (
                <motion.div 
                  key={idx} 
                  variants={cardVariants}
                  className="group relative p-12 border border-[var(--border)] bg-[var(--surface)] overflow-hidden"
                >
                   <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity font-black text-9xl italic select-none">
                      0{idx + 1}
                   </div>
                   <div className="relative z-10 flex flex-col gap-6">
                      <div className="w-12 h-px bg-[var(--accent)]" />
                      <p className="text-3xl font-bold tracking-tight leading-tight max-w-xl group-hover:text-[var(--accent)] transition-colors">
                        {outcome}
                      </p>
                   </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Right Column: Meta & Sidebar */}
        <aside className="md:col-span-5 flex flex-col gap-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-10 border border-[var(--border)] bg-[var(--surface)] rounded-2xl relative overflow-hidden group hover:border-[var(--accent-border)] transition-all"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-dim)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
             <div className="relative z-10">
               <p className="eyebrow text-[var(--muted2)] mb-2">Build Duration</p>
               <p className="section-title mb-8" style={{ fontSize: '32px' }}>{project.year === '2025' ? 'Active Production' : 'v1.0 Shipped'}</p>
               
               <p className="eyebrow text-[var(--muted2)] mb-2">Key Critical Decisions</p>
               <ul className="flex flex-col gap-4">
                 {project.decisions.map((decision, idx) => (
                   <motion.li 
                     key={idx} 
                     initial={{ opacity: 0, x: 20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ delay: idx * 0.1 }}
                     className="text-[14px] leading-snug border-l-2 border-[var(--accent)] pl-4 py-1 italic opacity-80"
                   >
                      {decision}
                   </motion.li>
                 ))}
               </ul>
             </div>
          </motion.div>

          <div className="sticky top-24 p-8 border-t border-[var(--border)] pt-12">
            <h3 className="eyebrow text-[var(--muted2)] mb-6">Explore Other Builds</h3>
            <div className="flex flex-col gap-4">
              {projects.filter(p => p.id !== project.id).slice(0, 3).map((p, idx) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link to={`/project/${p.id}`} className="flex items-center justify-between group p-3 hover:bg-[var(--surface)] transition-all rounded-lg border border-transparent hover:border-[var(--border)]">
                    <span className="text-[var(--text)] uppercase font-bold text-[12px] transition-colors group-hover:text-[var(--accent)]">{p.name}</span>
                    <ArrowLeft size={16} className="rotate-180 opacity-40 group-hover:translate-x-1 group-hover:opacity-100 transition-all text-[var(--accent)]" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
}
