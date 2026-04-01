import { motion, useScroll, useTransform } from 'motion/react';
import { Mail, Twitter, Github, Linkedin, ArrowUp } from 'lucide-react';
import { useRef } from 'react';

export function Footer() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-30%", "10%"]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer ref={containerRef} className="relative z-[2] mt-32 border-t border-[var(--border)] bg-[var(--bg)] pt-24 pb-12 overflow-hidden">
      
      {/* Scrolling Marquee Watermark — sits BEHIND the "Stay in Touch" content */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden"
      >
        <motion.div
          className="flex items-center whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ x: { duration: 30, repeat: Infinity, ease: "linear" } }}
          style={{ minWidth: '200%', opacity: 0.12 }}
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <span 
              key={i} 
              className="flex items-center gap-6 shrink-0 px-6"
              style={{
                fontFamily: 'var(--ff-cabinet), sans-serif',
                fontSize: 'clamp(80px, 14vw, 200px)',
                fontWeight: 900,
                fontStyle: 'italic',
                textTransform: 'uppercase',
                lineHeight: 1,
                color: i % 2 === 0 ? 'var(--accent)' : 'transparent',
                WebkitTextStroke: i % 2 === 0 ? 'none' : '2px var(--accent)',
              }}
            >
              SS. ARCHIVE
              <span 
                className="inline-block mx-4"
                style={{ fontSize: '0.25em', verticalAlign: 'middle', opacity: 0.5 }}
              >
                ◆
              </span>
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Footer Content — sits ON TOP of the watermark */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-24 grid grid-cols-1 gap-16 md:grid-cols-2">
          <div className="flex flex-col gap-8">
            <h2 className="section-title text-[clamp(40px,5vw,72px)] leading-none text-[var(--accent)]">
              STAY IN <br/>TOUCH.
            </h2>
            <div className="flex flex-col gap-4">
               <p className="body-text max-w-[32ch] text-[16px] opacity-70 leading-relaxed">
                 Always open to technical discovery sessions, high-integrity builds, and sonic exploration.
               </p>
            </div>
            
            <div className="flex items-center gap-4">
              {[
                { icon: Github, href: 'https://github.com/phnxsahil' },
                { icon: Twitter, href: 'https://x.com/theonlysahil1' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/sahil-sharma-5a3715270/' },
                { icon: Mail, href: 'mailto:worksahilsharma@gmail.com' }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -8, scale: 1.15, rotate: i % 2 === 0 ? 5 : -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="p-3 border border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--accent)] hover:text-[var(--bg)] hover:border-[var(--accent)] rounded-sm text-[var(--muted2)] transition-colors shadow-sm"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between items-start gap-10 md:items-end">
            <button 
              onClick={scrollToTop}
              className="group flex flex-col items-center gap-3 text-[var(--muted2)] hover:text-[var(--accent)] transition-colors uppercase font-mono text-[9px] tracking-[0.3em]"
            >
              <div className="w-12 h-12 rounded-full border border-[var(--border)] flex items-center justify-center group-hover:border-[var(--accent)] transition-colors">
                <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
              </div>
              Back to Top
            </button>

            <div className="hidden md:flex flex-col items-end gap-2 text-right">
               <span className="eyebrow text-[9px]">Status</span>
               <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse shadow-[0_0_8px_var(--accent)]" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text)]">Available for 2026 builds</span>
               </div>
            </div>
          </div>
        </div>

        <div className="mt-auto flex flex-col gap-8 border-t border-[var(--border-hi)] pt-12 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col items-start gap-4 text-[10px] font-mono uppercase tracking-[0.2em] opacity-40 md:flex-row md:items-center md:gap-6">
             <span>&copy; 2026 Sahil Sharma</span>
             <div className="hidden md:block w-px h-3 bg-[var(--border-hi)]" />
             <span>Designed & Built with Intent</span>
          </div>
          
          <div className="flex flex-col items-start gap-4 text-[10px] font-mono uppercase tracking-[0.2em] opacity-40 md:flex-row md:items-center md:gap-6">
             <span>Digital Archive v4.2</span>
             <div className="hidden md:block w-px h-3 bg-[var(--border-hi)]" />
             <span>Dehradun</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
