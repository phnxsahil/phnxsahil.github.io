import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, Mail, Twitter, Github, Linkedin, MessageCircle } from 'lucide-react';
import { Link } from 'react-router';
import { useEffect } from 'react';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as any },
    },
  };

  const principles = [
    { title: 'Technical Integrity', desc: 'Code is only as good as the reliability it provides to the user. I prioritize systems that are robust, testable, and maintainable.' },
    { title: 'UX as First-Class Citizen', desc: 'Design is not a coat of paint. It is the fundamental interaction layer and should be integrated into every architectural decision.' },
    { title: 'Rapid Prototype to Production', desc: 'The valley between MVP and stable software is where most ideas die. I specialize in bridging that gap with high-speed, safe deployments.' },
    { title: 'Intention-First Social', desc: 'We are in a pivot point for social software. I build tools that respect user attention and prioritize qualitative discovery over quantitative addiction.' },
  ];

  return (
    <div className="mx-auto min-h-screen max-w-[1400px] px-6 pt-28 pb-20 md:px-12 md:pt-32 md:pb-24">
      <Link to="/" className="group mb-16 inline-flex items-center gap-2 text-[10px] text-[var(--muted2)] transition-colors hover:text-[var(--text)] eyebrow">
        <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
        Back to Index
      </Link>

      <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-32">
        <div className="md:col-span-8">
          <motion.div initial="hidden" animate="visible" variants={sectionVariants} className="mb-24">
            <span className="eyebrow mb-6 block text-[var(--accent)]">Origin // Philosophy</span>
            <h1 className="section-title mb-12" style={{ fontSize: 'clamp(56px, 10vw, 120px)', lineHeight: '0.85', textTransform: 'uppercase' }}>
              Engineering <span className="opacity-40">Resonance</span> Through Software.
            </h1>
            <div className="flex flex-col gap-10">
              <p className="body-text text-[22px] font-medium leading-tight opacity-90 md:text-[28px]">
                I am a Product Engineer focused on the intersection of strategic design and robust architecture. I build from the 0-1 stage, helping founders turn abstract visions into high-performing systems.
              </p>
              <p className="body-text max-w-[70ch] text-[18px] leading-relaxed opacity-70">
                My work is driven by the belief that the best digital products are those that feel "heavy" and intentional. In an era of disposable software and infinite scrolls, I choose to build tools that encourage deep work, intentional social discovery, and reflective thinking.
              </p>
              <p className="body-text max-w-[70ch] text-[18px] leading-relaxed opacity-70">
                Technically, I specialize in the React/Next.js ecosystem on the frontend and FastAPI/Python or Node.js on the backend, with a heavy emphasis on real-time systems, vector search, and AI integration.
              </p>
            </div>
          </motion.div>

          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="mb-24 md:mb-32">
            <h2 className="section-title mb-12 md:mb-16" style={{ fontSize: 'clamp(32px, 5vw, 64px)' }}>
              Core Principles
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-12">
              {principles.map((p, i) => (
                <div key={i} className="flex flex-col gap-4 border border-[var(--border)] bg-[var(--surface)] p-6 transition-all hover:border-[var(--accent-border)] md:p-8">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent)]">P-0{i + 1}</span>
                  <h3 className="eyebrow text-[16px] text-[var(--text)]">{p.title}</h3>
                  <p className="body-text text-[14px] leading-relaxed opacity-60">{p.desc}</p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
            <h2 className="section-title mb-12" style={{ fontSize: 'clamp(32px, 5vw, 64px)' }}>
              Beyond the Terminal
            </h2>
            <div className="flex flex-col gap-8 opacity-70">
              <p className="body-text text-[18px]">
                When I'm not architecting production systems, you'll likely find me diving deep into the history of interface design, experimenting with analog synthesis, or exploring the future of decentralized networks. I believe that being a better engineer requires a wide field of curious interest beyond the code itself.
              </p>
              <div className="mt-4 flex flex-wrap gap-4">
                {['Digital Gardening', 'Modular Synths', 'Type Design', 'History of Cybernetics'].map((interest) => (
                  <span key={interest} className="rounded-full border border-[var(--border)] px-4 py-2 text-[10px] opacity-60 eyebrow">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.section>
        </div>

        <aside className="self-start md:col-span-4 md:sticky md:top-32">
          <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-10">
            <div className="relative z-10 flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <p className="eyebrow text-[var(--muted2)]">Current Location</p>
                <p className="text-[18px] font-bold text-[var(--text)]">Remote / Global</p>
              </div>

              <div className="flex flex-col gap-2">
                <p className="eyebrow text-[var(--muted2)]">Contact // Discovery</p>
                <a href="mailto:worksahilsharma@gmail.com" className="group flex items-center justify-between border border-[var(--border)] bg-[var(--bg)] p-4 transition-all hover:border-[var(--accent)]">
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-[var(--muted2)] transition-colors group-hover:text-[var(--accent)]" />
                    <span className="text-[12px] font-bold uppercase tracking-widest text-[var(--text)]">Direct Email</span>
                  </div>
                  <ExternalLink size={14} className="opacity-0 transition-all group-hover:opacity-100" />
                </a>
              </div>

              <div className="flex flex-col gap-4">
                <p className="eyebrow text-[var(--muted2)]">Technical Socials</p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'GitHub', icon: Github, href: 'https://github.com/phnxsahil' },
                    { label: 'Twitter', icon: Twitter, href: 'https://x.com/theonlysahil1' },
                    { label: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/sahil-sharma-5a3715270/' },
                    { label: 'Insta', icon: MessageCircle, href: 'https://instagram.com/sahil_sm2' },
                  ].map((social) => (
                    <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-[var(--border)] p-3 transition-all hover:bg-[var(--surface2)]">
                      <social.icon size={14} className="text-[var(--muted2)]" />
                      <span className="text-[9px] font-bold uppercase tracking-widest text-[var(--text)]">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="eyebrow mb-4 text-[var(--muted2)]" style={{ fontSize: '9px' }}>
              Interested in building together?
            </p>
            <Link to="/" className="btn-cta w-full bg-[var(--accent)] py-4 text-[11px] font-black uppercase tracking-[0.2em] text-black transition-transform hover:scale-102">
              Initiate Project Brief
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
