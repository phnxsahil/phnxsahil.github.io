import { motion, type Variants } from 'motion/react';
import { ArrowLeft, Mail, Twitter, Github, Linkedin, Cpu, Music, Camera, Layout, Zap, ArrowRight, Server, Database } from 'lucide-react';
import { Link } from 'react-router';
import { useEffect } from 'react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';

export default function AboutMePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 } 
    }
  };

  const disciplines = [
    { 
      title: 'Architectural Engineering', 
      desc: 'Specializing in high-throughput, low-latency distributed systems and AI-native infrastructure.',
      icon: Server,
      skills: ['FastAPI', 'Node.js', 'Next.js', 'PostgreSQL', 'Redis']
    },
    { 
      title: 'Interface Mechanics', 
      desc: 'Designing and building tactical, high-fidelity interaction layers that respect user intent.',
      icon: Layout,
      skills: ['Framer Motion', 'TailwindCSS', 'TypeScript', 'Motion Physics']
    }
  ];

  const sideArchive = [
    { 
      title: 'Harmonic Systems', 
      cat: 'Modular Synthesis',
      desc: 'Exploring tactile frequency modulation and generative soundscapes. Synthesis influences my view on system modularity and signal flow.',
      icon: Music,
      specs: ['VCO Control', 'Logic Gates', 'FM Synthesis']
    },
    { 
      title: 'Visual Index', 
      cat: 'Cinematic Photography',
      desc: 'Curating frames that focus on light, shadow, and architectural minimalism. Framing is foundational to interface composition.',
      icon: Camera,
      specs: ['Fixed Focal', 'Natural Light', 'Geometry']
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] selection:bg-[var(--accent)] selection:text-black pb-40">
      
      {/* Background Decorator */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0" 
           style={{ backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      <nav className="fixed top-0 left-0 w-full z-[100] px-4 md:px-12 py-6 flex justify-between items-center backdrop-blur-md bg-[var(--bg)]/80 border-b border-[var(--border)]">
        <Link to="/" className="group flex items-center gap-3 text-[var(--text)] hover:text-[var(--accent)] transition-all active:opacity-80">
          <div className="w-8 h-8 rounded-full border border-[var(--border)] flex items-center justify-center group-hover:bg-[var(--accent)] group-hover:text-black transition-all">
            <ArrowLeft size={14} />
          </div>
          <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em]">Return Home</span>
        </Link>
        <div className="flex items-center gap-2">
           <div className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
           <span className="font-mono text-[9px] font-black uppercase tracking-[0.2em] opacity-60">Architect_Log: Active</span>
        </div>
      </nav>

      <main className="max-w-[1200px] mx-auto px-6 md:px-12 pt-32 md:pt-48 relative z-10 flex flex-col gap-32 md:gap-48">
        
        {/* Intro Header */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col gap-12"
        >
          <div className="flex flex-col gap-4">
            <Badge variant="outline" className="w-fit font-mono text-[9px] tracking-[0.4em] uppercase border-[var(--accent)]/30 text-[var(--accent)] bg-[var(--accent)]/5 px-4 py-1">Identity // Profile</Badge>
            <h1 className="text-[clamp(48px,10vw,140px)] font-black leading-[0.8] tracking-tighter uppercase italic">
              Product <br/><span className="opacity-20 italic font-thin not-italic uppercase">Architect.</span>
            </h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
             <div className="md:col-span-7">
                <p className="text-2xl md:text-4xl leading-tight font-medium opacity-80 italic mb-8">
                  "I architect digital mechanics that bridge the gap between abstract design and low-level system performance."
                </p>
                <div className="flex flex-col gap-6 opacity-60 text-lg md:text-xl leading-relaxed">
                   <p>
                     My journey is rooted in an obsession with how things work—not just on the surface, but at the structural level. I see software as a physical manifestation of logic, requiring the same rigor as architectural blueprints.
                   </p>
                   <p>
                     Currently focusing on AI-native infrastructure, vector mechanics, and real-time interactive physics.
                   </p>
                </div>
             </div>
             <div className="md:col-span-5 flex flex-col gap-12">
                <div className="p-8 border border-[var(--border)] bg-[var(--surface)]/50 backdrop-blur-sm space-y-8">
                   <span className="font-mono text-[10px] tracking-[0.4em] opacity-40 uppercase">Network // Links</span>
                   <div className="flex flex-col gap-4">
                      {[
                        { label: 'GitHub', icon: Github, href: 'https://github.com/phnxsahil' },
                        { label: 'Twitter', icon: Twitter, href: 'https://x.com/theonlysahil1' },
                        { label: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/sahil-sharma-5a3715270/' },
                        { label: 'Email', icon: Mail, href: 'mailto:worksahilsharma@gmail.com' }
                      ].map((link) => (
                        <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="flex justify-between items-center group hover:text-[var(--accent)] transition-colors">
                           <div className="flex items-center gap-3">
                              <link.icon size={16} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                              <span className="text-[11px] font-bold uppercase tracking-widest">{link.label}</span>
                           </div>
                           <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                        </a>
                      ))}
                   </div>
                </div>
             </div>
          </div>
        </motion.section>

        {/* Professional Disciplines */}
        <section className="flex flex-col gap-16">
           <div className="flex flex-col gap-4">
              <span className="font-mono text-[10px] tracking-[0.4em] opacity-40 uppercase">Core // Disciplines</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">Technical <span className="opacity-20 font-thin not-italic">Backbone.</span></h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {disciplines.map((d, i) => (
                <Card key={i} className="p-10 bg-[var(--surface)] border-[var(--border)] hover:border-[var(--accent-border)] transition-all duration-700 group relative overflow-hidden">
                   <div className="flex flex-col gap-8 relative z-10">
                      <div className="flex justify-between items-start">
                         <div className="p-4 bg-black/40 border border-white/5 rounded-2xl group-hover:border-[var(--accent)]/30 transition-colors duration-700">
                            <d.icon size={28} className="text-[var(--accent)]" />
                         </div>
                         <span className="font-mono text-[10px] opacity-20 uppercase tracking-widest">DEP_0{i+1}</span>
                      </div>
                      <h3 className="text-2xl font-bold uppercase italic tracking-tight">{d.title}</h3>
                      <p className="body-text text-base opacity-60 leading-relaxed max-w-sm">{d.desc}</p>
                      <div className="flex flex-wrap gap-2 pt-4">
                         {d.skills.map(skill => (
                           <Badge key={skill} variant="outline" className="bg-[var(--bg)] border-white/5 text-[9px] font-mono tracking-widest uppercase py-1 px-3 opacity-40 group-hover:opacity-100 transition-opacity">
                             {skill}
                           </Badge>
                         ))}
                      </div>
                   </div>
                   {/* Background Decorator */}
                   <div className="absolute -bottom-12 -right-12 w-40 h-40 border border-[var(--accent)]/5 rounded-full group-hover:scale-150 transition-transform duration-1000" />
                </Card>
              ))}
           </div>
        </section>

        <Separator className="bg-[var(--border)] opacity-20" />

        {/* Side Archive - Hobbies Redesigned as Architectural Studies */}
        <section className="flex flex-col gap-16">
           <div className="flex flex-col gap-4">
              <span className="font-mono text-[10px] tracking-[0.4em] opacity-40 uppercase">Parallel // Studies</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">Signal <span className="opacity-20 font-thin not-italic">& Light.</span></h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
              {sideArchive.map((item, i) => (
                <div key={i} className="flex flex-col gap-10 group">
                   <div className="w-full aspect-[16/9] bg-[var(--surface)] border border-[var(--border)] rounded-sm flex items-center justify-center relative overflow-hidden group-hover:border-[var(--accent-border)] transition-colors duration-700">
                      {/* Grid Background */}
                      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `linear-gradient(var(--text) 1px, transparent 1px), linear-gradient(90deg, var(--text) 1px, transparent 1px)`, backgroundSize: '20px 20px' }} />
                      
                      {/* Animated Icon Study */}
                      <div className="relative z-10 flex flex-col items-center gap-6">
                         <item.icon size={64} className="opacity-10 group-hover:opacity-60 group-hover:text-[var(--accent)] transition-all duration-700 group-hover:scale-110" />
                         <div className="flex gap-2">
                            {item.specs.map(spec => (
                              <span key={spec} className="font-mono text-[7px] tracking-[0.3em] uppercase opacity-0 group-hover:opacity-40 transition-all duration-700 delay-100 border border-white/10 px-2 py-1">{spec}</span>
                            ))}
                         </div>
                      </div>

                      {/* Technical Callouts */}
                      <div className="absolute top-4 left-4 font-mono text-[8px] opacity-20 uppercase tracking-[0.2em]">Study_Ref: 0{i+1}</div>
                      <div className="absolute bottom-4 right-4 font-mono text-[8px] opacity-20 uppercase tracking-[0.2em]">Signal_Status: Locked</div>
                   </div>

                   <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-4">
                         <div className="w-8 h-[1px] bg-[var(--accent)]" />
                         <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-[var(--accent)]">{item.cat}</span>
                      </div>
                      <h3 className="text-3xl font-black uppercase italic tracking-tight">{item.title}</h3>
                      <p className="body-text text-lg opacity-50 leading-relaxed max-w-xl">
                        {item.desc}
                      </p>
                   </div>
                </div>
              ))}
           </div>
        </section>

        {/* Footer Link */}
        <section className="mt-20 pt-20 border-t border-[var(--border)] flex flex-col items-center gap-12">
           <span className="font-mono text-[9px] tracking-[0.5em] opacity-30 uppercase text-center">Interested in technical snapshots?</span>
           <Link to="/" className="text-[clamp(40px,10vw,140px)] font-black uppercase italic leading-none hover:text-[var(--accent)] transition-all duration-700 text-center">
              Back to Index
           </Link>
        </section>

      </main>
    </div>
  );
}
