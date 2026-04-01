import { motion, useScroll, useTransform } from 'motion/react';
import { Mail, Twitter, Github, Linkedin, ArrowUp, Copy, Check } from 'lucide-react';
import { useRef, useState } from 'react';

export function Footer() {
  const containerRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);
  const email = "worksahilsharma@gmail.com";

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const textX = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" ref={containerRef} className="relative z-[2] mt-48 bg-[var(--bg)] pt-40 pb-12 overflow-hidden border-t border-[var(--border)]">
      
      {/* Massive Background Marquee - Matt Voyce Style */}
      <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none select-none opacity-[0.03] dark:opacity-[0.05]">
        <motion.div 
          style={{ x: textX }}
          className="whitespace-nowrap font-black text-[25vw] leading-none uppercase italic tracking-tighter"
        >
          LET'S BUILD SOMETHING UNIQUE — LET'S BUILD SOMETHING UNIQUE — 
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-32">
        
        {/* Main CTA: The Email Unroll */}
        <div className="flex flex-col items-start gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <div className="w-8 h-px bg-[var(--accent)]" />
            <span className="eyebrow tracking-[0.4em]">Available for 2026 Inquiry</span>
          </motion.div>

          <div className="relative group cursor-pointer" onClick={copyEmail}>
             <h2 className="text-[clamp(32px,8vw,110px)] font-black tracking-tighter leading-[0.9] break-all uppercase">
               {email.split('@')[0]}<span className="text-[var(--accent)] opacity-40">@</span>{email.split('@')[1]}
             </h2>
             
             {/* Copy Feedback Overlay */}
             <motion.div 
               initial={false}
               animate={{ opacity: copied ? 1 : 0, y: copied ? -20 : 0 }}
               className="absolute -top-12 left-0 bg-[var(--accent)] text-black px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-sm"
             >
               {copied ? "Copied to clipboard" : ""}
             </motion.div>

             <div className="mt-6 flex items-center gap-4 text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors">
                {copied ? <Check size={20} /> : <Copy size={20} />}
                <span className="font-mono text-[11px] uppercase tracking-[0.2em]">Click to copy address</span>
             </div>
          </div>
        </div>

        {/* Bottom Bar: Simplified & Elegant */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-end pt-20 border-t border-[var(--border)]">
          <div className="flex flex-col gap-12">
            <div className="flex items-center gap-8">
              {[
                { icon: Github, href: 'https://github.com/phnxsahil' },
                { icon: Twitter, href: 'https://x.com/theonlysahil1' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/sahil-sharma-5a3715270/' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--muted)] hover:text-[var(--accent)] transition-all transform hover:-translate-y-1"
                >
                  <social.icon size={22} />
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3 font-mono text-[10px] uppercase tracking-[0.2em] opacity-40">
               <span>&copy; 2026 Sahil Sharma — ARCHIVE V4.2</span>
               <span>Built with React & Intent // Dehradun, IN</span>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end gap-10">
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-4 text-[var(--muted2)] hover:text-[var(--accent)] transition-all group font-mono text-[10px] uppercase tracking-[0.3em]"
            >
              Back to Surface
              <div className="w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center group-hover:bg-[var(--accent)] group-hover:text-black group-hover:border-[var(--accent)] transition-all">
                <ArrowUp size={16} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

