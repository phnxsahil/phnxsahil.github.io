import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useInView } from './useInView';

export function Contact() {
  const { ref, isInView } = useInView();

  const scrollToFeatured = () => {
    const element = document.getElementById('featured');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative w-full mx-auto px-6 md:px-12"
      style={{ minHeight: '80vh', paddingTop: 'clamp(80px, 11vh, 140px)', paddingBottom: 'clamp(80px, 11vh, 140px)' }}
    >
      
      {/* High-Impact 'Assembled Hollow' Watermark */}
      <div 
        className="pointer-events-none absolute left-0 top-1/4 w-full flex items-center justify-center select-none"
          style={{ zIndex: 0, transform: 'rotate(-5deg)' }}
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-black"
          style={{
            fontFamily: 'var(--ff-constructive)',
            fontSize: 'clamp(88px, 24vw, 420px)',
            color: 'transparent',
            WebkitTextStroke: '1px var(--border-hi)',
            letterSpacing: '0.08em',
            whiteSpace: 'nowrap',
            filter: 'drop-shadow(0 0 40px rgba(255,255,255,0.01))'
          }}
        >
          CONNECT // ARCHIVE_04
        </motion.div>
      </div>

      <div className="contact-inner relative z-10 max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 36 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-[10px] mb-6" style={{ color: 'var(--accent)' }}>
            <div style={{ width: '20px', height: '1px', background: 'var(--accent)' }} />
            <span className="eyebrow">
              [04] CONTACT
            </span>
          </div>

          <h2
            className="section-title"
            style={{
              lineHeight: '0.9',
              marginBottom: '40px',
              textTransform: 'uppercase',
              fontSize: 'clamp(40px, 5vw, 64px)'
            }}
          >
            INITIATE A <span style={{ color: 'var(--accent)' }}>PROJECT BRIEF.</span>
          </h2>

          <p
            className="body-text"
            style={{
              maxWidth: '54ch',
              marginBottom: '32px',
              fontSize: '16px',
              lineHeight: '1.6'
            }}
          >
            I am currently accepting inquiries for late-2025 and 2026 partner-led builds. 
            Expect a response within 24 hours to schedule a technical discovery session.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 mb-12">
            <a
              href="mailto:worksahilsharma@gmail.com?subject=Project%20Brief"
              className="btn-cta text-black font-bold px-6 sm:px-10 py-4 h-[56px] group flex items-center justify-center shadow-[6px_6px_0_0_rgba(0,0,0,0.2)] hover:shadow-[0_0_20px_var(--accent-dim)]"
              style={{ 
                minWidth: 'min(240px, 100%)',
                background: 'var(--accent)',
                border: 'none'
              }}
            >
              <span className="relative z-10 flex items-center justify-center">
                Start Project Brief
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>

            <button
              type="button"
              onClick={scrollToFeatured}
              className="eyebrow hover:text-[var(--text)] border-b border-[var(--border-hi)] hover:border-[var(--text)] transition-colors pb-1"
              style={{
                color: 'var(--muted2)',
                fontSize: '11px',
                textDecoration: 'none',
                background: 'transparent',
                textAlign: 'left',
                borderTop: 'none',
                borderLeft: 'none',
                borderRight: 'none',
                paddingLeft: 0,
                paddingRight: 0,
                cursor: 'pointer',
              }}
            >
              Review case studies first
            </button>
          </div>

          <div className="flex flex-wrap gap-4 border-t border-[var(--border)] pt-8">
            {[
              { id: 'github', href: 'https://github.com/phnxsahil', icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.41 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0112 6.8c.85 0 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .26.18.58.69.48A10 10 0 0022 12c0-5.52-4.48-10-10-10z" />
                </svg>
              )},
              { id: 'twitter', href: 'https://x.com/theonlysahil1', icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              )},
              { id: 'linkedin', href: 'https://www.linkedin.com/in/sahil-sharma-5a3715270/', icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              )},
              { id: 'instagram', href: 'https://instagram.com/sahil_sm2', icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              )},

            ].map((social) => (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social group transition-all duration-300 rounded-sm flex items-center justify-center text-[var(--muted2)] hover:text-[var(--accent)] hover:border-[var(--accent)]"
                style={{
                  width: '48px',
                  height: '48px',
                  border: '1px solid var(--border)',
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
