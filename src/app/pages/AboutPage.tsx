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
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as any }
    }
  };

  const principles = [
    { title: 'Technical Integrity', desc: 'Code is only as good as the reliability it provides to the user. I prioritize systems that are robust, testable, and maintainable.' },
    { title: 'UX as First-Class Citizen', desc: 'Design is not a coat of paint. It is the fundamental interaction layer and should be integrated into every architectural decision.' },
    { title: 'Rapid Prototype to Production', desc: 'The valley between MVP and stable software is where most ideas die. I specialize in bridging that gap with high-speed, safe deployments.' },
    { title: 'Intention-First Social', desc: 'We are in a pivot point for social software. I build tools that respect user attention and prioritize qualitative discovery over quantitative addiction.' }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-[1400px] mx-auto">
      <Link to="/" className="group inline-flex items-center gap-2 mb-16 text-[var(--muted2)] hover:text-[var(--text)] transition-colors eyebrow text-[10px]">
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        Back to Index
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-32">
        {/* Left Column: Intention Narrative */}
        <div className="md:col-span-8">
           <motion.div
             initial="hidden"
             animate="visible"
             variants={sectionVariants}
             className="mb-24"
           >
              <span className="eyebrow text-[var(--accent)] mb-6 block">Origin // Philosophy</span>
              <h1 className="section-title mb-12" style={{ fontSize: 'clamp(56px, 10vw, 120px)', lineHeight: '0.85', textTransform: 'uppercase' }}>
                Engineering <span className="opacity-40">Resonance</span> Through Software.
              </h1>
              <div className="flex flex-col gap-10">
                <p className="body-text text-[22px] md:text-[28px] leading-tight opacity-90 font-medium">
                  I am a Product Engineer focused on the intersection of strategic design and robust architecture. I build from the 0→1 stage, helping founders turn abstract visions into high-performing systems.
                </p>
                <p className="body-text text-[18px] opacity-70 leading-relaxed max-w-[70ch]">
                  My work is driven by the belief that the best digital products are those that feel "heavy" and intentional. In an era of disposable software and infinite scrolls, I choose to build tools that encourage deep work, intentional social discovery, and reflective thinking.
                </p>
                <p className="body-text text-[18px] opacity-70 leading-relaxed max-w-[70ch]">
                  Technically, I specialize in the React/Next.js ecosystem on the frontend and FastAPI/Python or Node.js on the backend, with a heavy emphasis on real-time systems, vector search, and AI integration.
                </p>
              </div>
           </motion.div>

           <motion.section 
             initial="hidden" 
             whileInView="visible" 
             viewport={{ once: true }} 
             variants={sectionVariants}
             className="mb-32"
           >
              <h2 className="section-title mb-16" style={{ fontSize: 'clamp(32px, 5vw, 64px)' }}>Core Principles</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                {principles.map((p, i) => (
                  <div key={i} className="flex flex-col gap-4 p-8 border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent-border)] transition-all">
                     <span className="text-[var(--accent)] font-mono text-[10px] tracking-widest uppercase">P-0{i+1}</span>
                     <h3 className="eyebrow text-[16px] text-[var(--text)]">{p.title}</h3>
                     <p className="body-text text-[14px] opacity-60 leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
           </motion.section>

           <motion.section 
             initial="hidden" 
             whileInView="visible" 
             viewport={{ once: true }} 
             variants={sectionVariants}
           >
              <h2 className="section-title mb-12" style={{ fontSize: 'clamp(32px, 5vw, 64px)' }}>Beyond the Terminal</h2>
              <div className="flex flex-col gap-8 opacity-70">
                <p className="body-text text-[18px]">
                  When I'm not architecting production systems, you'll likely find me diving deep into the history of interface design, experimenting with analog synthesis, or exploring the future of decentralized networks. I believe that being a better engineer requires a wide field of curious interest beyond the code itself.
                </p>
                <div className="flex flex-wrap gap-4 mt-4">
                  {['Digital Gardening', 'Modular Synths', 'Type Design', 'History of Cybernetics'].map(interest => (
                    <span key={interest} className="px-4 py-2 border border-[var(--border)] rounded-full eyebrow text-[10px] opacity-60">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
           </motion.section>
        </div>

        {/* Right Column: Connection Sidebar */}
        <aside className="md:col-span-4 self-start sticky top-32 flex flex-col gap-12">
           <div className="p-10 border border-[var(--border)] bg-[var(--surface)] rounded-2xl relative overflow-hidden">
             <div className="relative z-10 flex flex-col gap-8">
               <div className="flex flex-col gap-2">
                 <p className="eyebrow text-[var(--muted2)]">Current Location</p>
                 <p className="text-[var(--text)] font-bold text-[18px]">Remote / Global</p>
               </div>
               
               <div className="flex flex-col gap-2">
                 <p className="eyebrow text-[var(--muted2)]">Contact // Discovery</p>
                 <a href="mailto:worksahilsharma@gmail.com" className="group flex items-center justify-between p-4 border border-[var(--border)] bg-[var(--bg)] hover:border-[var(--accent)] transition-all">
                   <div className="flex items-center gap-3">
                     <Mail size={18} className="text-[var(--muted2)] group-hover:text-[var(--accent)] transition-colors" />
                     <span className="text-[12px] font-bold uppercase tracking-widest text-[var(--text)]">Direct Email</span>
                   </div>
                   <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
                 </a>
               </div>

               <div className="flex flex-col gap-4">
                 <p className="eyebrow text-[var(--muted2)]">Technical Socials</p>
                 <div className="grid grid-cols-2 gap-3">
                   {[
                     { label: 'GitHub', icon: Github, href: 'https://github.com/phnxsahil' },
                     { label: 'Twitter', icon: Twitter, href: 'https://x.com/theonlysahil1' },
                     { label: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/sahil-sharma-5a3715270/' },
                     { label: 'Insta', icon: MessageCircle, href: 'https://instagram.com/sahil_sm2' }
                   ].map(social => (
                     <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3 border border-[var(--border)] hover:bg-[var(--surface2)] transition-all">
                        <social.icon size={14} className="text-[var(--muted2)]" />
                        <span className="text-[9px] font-bold uppercase tracking-widest text-[var(--text)]">{social.label}</span>
                     </a>
                   ))}
                 </div>
               </div>
             </div>
           </div>

           <div className="mt-8 text-center">
              <p className="eyebrow text-[var(--muted2)] mb-4" style={{ fontSize: '9px' }}>Interested in building together?</p>
              <Link to="/" className="btn-cta w-full bg-[var(--accent)] text-black py-4 font-black uppercase text-[11px] tracking-[0.2em] transition-transform hover:scale-102">
                Initiate Project Brief
              </Link>
           </div>
        </aside>
      </div>
    </div>
  );
}
