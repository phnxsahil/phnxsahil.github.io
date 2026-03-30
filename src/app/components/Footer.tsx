import { motion } from 'motion/react';
import { Mail, Twitter, Github, Linkedin, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-[2] mt-32 border-t border-[var(--border)] bg-[var(--bg)] pt-24 pb-12 overflow-hidden">
      {/* Sleek Background Watermark */}
      <div className="absolute inset-x-0 bottom-[-15%] flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-70">
        <span 
          className="wm-cabinet whitespace-nowrap leading-none"
          style={{ fontSize: 'clamp(120px, 25vw, 500px)', fontWeight: 900, textTransform: 'uppercase' }}
        >
          SAHIL SHARMA
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div className="flex flex-col gap-8">
            <h2 className="section-title text-[clamp(40px,5vw,72px)] leading-none text-[var(--accent)]">
              STAY IN <br/>TOUCH.
            </h2>
            <div className="flex flex-col gap-4">
               <p className="body-text max-w-[32ch] text-[15px] opacity-60">
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
                  whileHover={{ y: -5, color: 'var(--accent)' }}
                  className="p-3 border border-[var(--border)] rounded-sm text-[var(--muted2)] transition-colors"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between items-end">
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

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-[var(--border-hi)] mt-auto">
          <div className="flex flex-col md:flex-row items-center gap-6 text-[10px] font-mono uppercase tracking-[0.2em] opacity-40">
             <span>&copy; 2026 Sahil Sharma</span>
             <div className="hidden md:block w-px h-3 bg-[var(--border-hi)]" />
             <span>Designed & Built with Intent</span>
          </div>
          
          <div className="flex items-center gap-6 text-[10px] font-mono uppercase tracking-[0.2em] opacity-40">
             <span>Digital Archive v4.2</span>
             <div className="hidden md:block w-px h-3 bg-[var(--border-hi)]" />
             <span>Dehradun</span>
          </div>
        </div>
      </div>
    </footer>
  );
}


