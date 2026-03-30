import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';
import { useInView } from './useInView';

export function Projects() {
  const { ref, isInView } = useInView();

  const projects = [
    {
      number: '01',
      name: 'DESIGNFLOW AI',
      description: 'AI-powered design system generator that converts Figma mockups to production-ready React components.',
      stack: ['React', 'TypeScript', 'OpenAI', 'Figma API'],
      github: '#',
      live: '#',
    },
    {
      number: '02',
      name: 'MOMENTUM',
      description: 'Habit tracking app with beautiful animations and social accountability features. Built for early-stage users.',
      stack: ['Next.js', 'Supabase', 'Framer Motion', 'TailwindCSS'],
      github: '#',
      live: '#',
    },
    {
      number: '03',
      name: 'WORKSPACE',
      description: 'Minimalist productivity dashboard that combines calendar, tasks, and focus timer in one elegant interface.',
      stack: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
      github: '#',
      live: '#',
    },
    {
      number: '04',
      name: 'BRAND STUDIO',
      description: 'Design tool for creating consistent brand identities. Generate color palettes, typography scales, and component libraries.',
      stack: ['Vue.js', 'Canvas API', 'WebGL', 'Express'],
      github: '#',
      live: '#',
    },
    {
      number: '05',
      name: 'CODEFLOW',
      description: 'Real-time collaborative code editor with AI pair programming assistant. Built for remote dev teams.',
      stack: ['WebSockets', 'Monaco', 'GPT-4', 'Docker'],
      github: '#',
      live: '#',
    },
  ];

  return (
    <section
      id="work"
      ref={ref}
      style={{
        padding: 'var(--spacing-xxl) 0',
        background: 'var(--bg-primary)',
      }}
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-end justify-between mb-20 px-12"
      >
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div
              style={{
                width: '32px',
                height: '1px',
                background: 'var(--accent)',
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
              }}
            >
              Selected Work
            </span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '80px',
              lineHeight: '0.95',
              letterSpacing: '0.02em',
              color: 'var(--text-primary)',
            }}
          >
            Projects
          </h2>
        </div>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '13px',
            color: 'var(--text-muted)',
          }}
        >
          05 Projects
        </div>
      </motion.div>

      {/* Horizontal Scroll Container */}
      <div
        className="relative overflow-x-auto overflow-y-hidden pb-10"
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: 'var(--border-bright) transparent',
        }}
      >
        <div className="flex gap-6 px-12">
          {projects.map((project, i) => (
            <ProjectCard key={project.number} project={project} index={i} isInView={isInView} />
          ))}
        </div>

        {/* Right Fade Gradient */}
        <div
          className="absolute top-0 right-0 bottom-10 w-[120px] pointer-events-none"
          style={{
            background: `linear-gradient(to left, var(--bg-primary), transparent)`,
          }}
        />
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: {
    number: string;
    name: string;
    description: string;
    stack: string[];
    github: string;
    live: string;
  };
  index: number;
  isInView: boolean;
}

function ProjectCard({ project, index, isInView }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1 * index, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group flex-shrink-0"
      style={{
        width: '420px',
        background: 'var(--bg-surface)',
        border: '1px solid var(--border-default)',
        transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.borderColor = 'var(--border-bright)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = 'var(--border-default)';
      }}
    >
      {/* Screenshot Area */}
      <div
        className="relative overflow-hidden"
        style={{
          width: '420px',
          height: '260px',
          background: 'var(--bg-secondary)',
          backgroundImage: `radial-gradient(circle, var(--border-default) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div
            style={{
              width: '48px',
              height: '48px',
              border: '1px solid var(--border-bright)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '8px',
            }}
          >
            <ExternalLink size={20} color="var(--text-muted)" />
          </div>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              color: 'var(--text-muted)',
            }}
          >
            ADD SCREENSHOT
          </span>
        </div>

        {/* Hover Overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6"
          style={{
            background: 'linear-gradient(to top, var(--bg-primary) 0%, transparent 100%)',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
            }}
          >
            View Live →
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div style={{ padding: '28px' }}>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            color: 'var(--text-muted)',
            marginBottom: '8px',
          }}
        >
          {project.number} / 05
        </div>

        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '36px',
            letterSpacing: '0.02em',
            lineHeight: '1',
            color: 'var(--text-primary)',
            marginBottom: '12px',
          }}
        >
          {project.name}
        </h3>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '14px',
            lineHeight: '1.6',
            color: 'var(--text-secondary)',
            marginBottom: '16px',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {project.description}
        </p>

        {/* Stack Chips */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.stack.map((tech) => (
            <div
              key={tech}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                padding: '4px 10px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--border-default)',
                color: 'var(--text-muted)',
              }}
            >
              {tech}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          style={{
            width: '100%',
            height: '1px',
            background: 'var(--border-default)',
            margin: '20px 0',
          }}
        />

        {/* Links */}
        <div className="flex items-center gap-4">
          <a
            href={project.github}
            className="flex items-center gap-2 transition-colors"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              color: 'var(--text-muted)',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--accent)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-muted)';
            }}
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href={project.live}
            className="flex items-center gap-1 transition-colors"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              color: 'var(--accent-3)',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--accent)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--accent-3)';
            }}
          >
            ↗ Live
          </a>
        </div>
      </div>
    </motion.div>
  );
}
