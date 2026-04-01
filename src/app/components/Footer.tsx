import { motion, useScroll, useTransform } from 'motion/react';
import { Mail, Twitter, Github, Linkedin, ArrowUp, Send } from 'lucide-react';
import { useRef } from 'react';

export function Footer() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const xOffset = useTransform(scrollYProgress, [0, 1], ["20%", "0%"]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer ref={containerRef} className="relative z-[2] mt-48 border-t border-[var(--border)] bg-[var(--bg)] pt-32 pb-16 overflow-hidden">
      
      {/* Asymmetric Header Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-16 mb-40">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          >
            <span className="eyebrow block mb-8 text-[9px] tracking-[0.4em] opacity-40 uppercase">Project Inquiry // Feedback</span>
            <h2 className="text-[clamp(48px,12vw,140px)] font-black leading-[0.8] uppercase tracking-tighter" style={{ fontFamily: 'var(--ff-cabinet)' }}>
              TALK <br /> SOON. 
            </h2>
          </motion.div>
        </div>

        <motion.div 
          style={{ x: xOffset }}
          className="flex flex-col gap-8 md:items-end text-left md:text-right"
        >
          <a 
            href="mailto:worksahilsharma@gmail.com" 
            className="group relative inline-flex items-center gap-4 text-[clamp(24px,4vw,48px)] font-mono font-medium tracking-tighter text-[var(--accent)] hover:text-[var(--text)] transition-colors"
          >
            worksahilsharma@gmail.com
            <div className="p-3 border border-[var(--accent)] rounded-full group-hover:bg-[var(--accent)] group-hover:text-black transition-all">
              <Send size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </a>
          <p className="body-text max-w-[32ch] text-[14px] opacity-40 font-mono italic">
            Currently accepting select engineering and product design mandates for Q3 2026.
          </p>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-8 border-t border-[var(--border)] pt-16">
          
          <div className="flex flex-col gap-6">
            <span className="eyebrow text-[9px] opacity-20 uppercase tracking-[0.3em]">Quick Links</span>
            <div className="flex flex-col gap-3 font-mono text-[11px] uppercase tracking-wider">
               <a href="#featured" className="opacity-40 hover:opacity-100 transition-opacity">Work Archive</a>
               <a href="#about" className="opacity-40 hover:opacity-100 transition-opacity">Philosophy</a>
               <a href="https://read.cv/sahils" target="_blank" className="opacity-40 hover:opacity-100 transition-opacity">Resume / CV</a>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <span className="eyebrow text-[9px] opacity-20 uppercase tracking-[0.3em]">Social Systems</span>
            <div className="flex flex-col gap-3 font-mono text-[11px] uppercase tracking-wider">
               <a href="https://twitter.com/theonlysahil1" target="_blank" className="opacity-40 hover:opacity-100 transition-opacity">X // Twitter</a>
               <a href="https://github.com/phnxsahil" target="_blank" className="opacity-40 hover:opacity-100 transition-opacity">GitHub</a>
               <a href="https://linkedin.com/in/sahil-sharma-5a3715270/" target="_blank" className="opacity-40 hover:opacity-100 transition-opacity">LinkedIn</a>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <span className="eyebrow text-[9px] opacity-20 uppercase tracking-[0.3em]">Core Tech</span>
            <p className="font-mono text-[11px] uppercase tracking-wider opacity-40">
              React + Node + Rust <br/>
              Motion Architecture <br/>
              System Design
            </p>
          </div>

          <div className="flex flex-col gap-8 md:items-end">
            <div className="flex flex-col items-start md:items-end gap-2 text-right">
               <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text)]">Sahil Sharma // SS.</span>
               </div>
               <span className="eyebrow text-[8px] opacity-20">Available Q3 2026</span>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="group flex items-center gap-3 text-[var(--muted2)] hover:text-[var(--accent)] transition-colors uppercase font-mono text-[9px] tracking-[0.3em]"
            >
              Scroll to top
              <div className="w-8 h-8 rounded-full border border-[var(--border)] flex items-center justify-center group-hover:border-[var(--accent)] transition-colors">
                <ArrowUp size={12} className="group-hover:-translate-y-1 transition-transform" />
              </div>
            </button>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-[var(--border-glow)] flex flex-col md:flex-row justify-between items-center gap-8 opacity-20 text-[9px] font-mono uppercase tracking-[0.4em]">
           <span>&copy; 2026 Archive v4.8</span>
           <div className="flex gap-12">
             <span>Built with Intent</span>
             <span>Dehradun, India</span>
           </div>
        </div>
      </div>

      {/* Decorative Monogram */}
      <div className="absolute bottom-[-5vh] right-[-5vw] text-[20vw] font-black italic opacity-[0.02] pointer-events-none select-none" style={{ fontFamily: 'var(--ff-cabinet)' }}>
        SS.
      </div>
    </footer>
  );
}
