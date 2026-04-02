import { motion, type Variants } from 'motion/react';
import { ArrowUpRight, Github } from 'lucide-react';
import { projects } from '../data/projects';
import { Link } from 'react-router';

export function AllProjects() {
  const allProjects = projects.filter(p => !p.featured);

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
  };

  const rowVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { type: "spring", stiffness: 50, damping: 20, mass: 1 } 
    }
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] as any } }
  };

  return (
    <section id="work" className="mx-auto max-w-[1540px] px-6 md:px-12" style={{ paddingTop: 'clamp(80px, 12vh, 160px)', paddingBottom: 'clamp(80px, 12vh, 160px)' }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-20%" }}
        variants={headerVariants}
        className="mb-16 flex flex-col gap-6 border-b border-[var(--border)] pb-12 md:mb-20 md:flex-row md:items-end md:justify-between"
      >
        <div>
          <div className="flex items-center gap-[10px] mb-6" style={{ color: 'var(--muted2)' }}>
            <div style={{ width: '20px', height: '1px', background: 'var(--border-hi)' }} />
            <span className="eyebrow">
              Product Index
            </span>
          </div>
          <h2 className="section-title" style={{ lineHeight: '0.9', textTransform: 'uppercase', fontSize: 'clamp(32px, 4vw, 56px)' }}>
            Shipped Builds
          </h2>
        </div>
        <p className="body-text max-w-[48ch] text-[15px]">
          Engineering snapshots of production systems across <span className="text-[var(--text)]">financial infrastructure</span>, <span className="text-[var(--text)]">social discovery</span>, and <span className="text-[var(--text)]">AI automation</span>.
        </p>
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-20%" }}
        variants={containerVariants}
        className="flex flex-col gap-4"
      >
        {allProjects.map((project) => (
          <motion.article
            key={project.name}
            variants={rowVariants}
            className="build-row grid grid-cols-1 md:grid-cols-12 md:gap-12 relative group p-6 md:p-8 border border-[var(--border)] hover:bg-[var(--surface)] hover:border-[var(--accent-border)] rounded-sm transition-all duration-500 ease-[var(--ease-fluid)]"
          >
            <div className="md:col-span-2 transition-transform duration-500 group-hover:translate-x-1">
              <p className="eyebrow mb-2" style={{ color: 'var(--muted2)' }}>{project.year}</p>
              <div className="mb-2">
                <span className="text-[8px] px-2 py-0.5 border border-[var(--accent-border)] bg-[var(--accent-dim)] text-[var(--accent)] font-bold tracking-widest uppercase">
                  {project.category}
                </span>
              </div>
              <h3 className="build-name text-[var(--text)] uppercase text-[18px] font-bold">{project.name}</h3>
              <p className="eyebrow mt-1" style={{ color: 'var(--muted)', letterSpacing: '0.15em', fontSize: '8px' }}>{project.label}</p>
            </div>

            <div className="md:col-span-4 self-center transition-transform duration-500 group-hover:translate-x-2">
              <p className="body-text text-[14px]" style={{ color: 'var(--muted2)' }}>{project.summary}</p>
            </div>

            <div className="md:col-span-4 self-center md:border-l border-[var(--border)] group-hover:border-[var(--accent-border)] md:pl-8 transition-all duration-500 group-hover:translate-x-3">
              <p className="eyebrow mb-2" style={{ color: 'var(--muted2)' }}>Technical Highlight</p>
              <p className="body-text text-[13px] italic mb-3" style={{ color: 'var(--text)' }}>
                {project.highlight}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map(tech => (
                  <span key={tech} className="build-stack inline-block border border-[var(--border)] px-2 py-0.5 rounded-sm" style={{ fontSize: '9px', color: 'var(--muted2)' }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="md:col-span-2 md:text-right self-center flex md:flex-col items-center md:items-end gap-3 md:gap-2 transition-transform duration-500 group-hover:translate-x-4">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex-1 md:flex-none inline-flex items-center justify-center gap-3 border border-[var(--border)] px-4 py-2 text-[9px] tracking-widest font-bold uppercase transition-all hover:bg-[var(--text)] hover:text-[var(--bg)]"
              >
                Launch <ArrowUpRight size={14} />
              </a>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-[var(--border)] text-[var(--muted2)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all"
                  title="Source"
                >
                  <Github size={14} />
                </a>
              )}
              <Link
                to={`/project/${project.id}`}
                className="p-2 eyebrow text-[8px] opacity-40 hover:opacity-100 transition-opacity"
              >
                Details
              </Link>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
