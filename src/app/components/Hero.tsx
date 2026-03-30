import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Github, Twitter, Linkedin } from 'lucide-react';
import { Marquee } from './Marquee';
import { useState, useEffect } from 'react';

export function Hero() {
  const roles = [
    "Design Engineering",
    "Production Architecture",
    "Interaction Design",
    "Full-Stack Dev"
  ];
  const [roleIndex, setRoleIndex] = useState(0);

  // Typewriter states
  const words = ["SHARMA", "sharmajikabeta"];
  const [index, setIndex] = useState(0); 
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  // Typing effect
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !isDeleting) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? 75 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting]);

  // Blink effect for cursor
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative flex flex-col justify-end overflow-hidden"
      style={{ minHeight: '100dvh', paddingTop: 'clamp(80px, 11vh, 140px)' }}
    >
      {/* Dynamic Grid Layer - Audio Reactive */}
      <motion.div 
        animate={{ 
          opacity: 0.35,
          scale: 1
        }}
        className="absolute inset-0 z-0 hero-grid" 
        style={{ 
          opacity: 0.05
        }} 
      />

      {/* Focus Darkening - Radial gradient behind text */}
      <div 
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: 'var(--hero-vignette)'
        }}
      />

      <div className="relative z-10 w-full px-6 md:px-12 flex-grow flex flex-col justify-center max-w-[1400px] mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.2
              }
            }
          }}
          className="flex flex-col items-start"
        >
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0 }
            }}
            className="flex items-center gap-4 mb-2" 
          >
            <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--muted2)]">
              <motion.div 
                animate={{ scale: 1, opacity: 0.6 }}
                className="w-[6px] h-[6px] rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]" 
              />
              <div className="relative h-[18px] w-[min(210px,55vw)] overflow-hidden translate-y-[0.5px]">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={roleIndex}
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -15, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-y-0 left-0 flex items-center eyebrow font-bold text-[9px] tracking-[0.16em]"
                    style={{ color: 'var(--text)' }}
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            style={{
              fontSize: 'clamp(44px, 11vw, 140px)',
              lineHeight: '0.85',
              letterSpacing: '-0.04em',
              textTransform: 'uppercase',
              marginBottom: '32px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
            }}
          >
            <motion.span 
              animate={{ x: 0 }}
              style={{ color: 'var(--text)', fontFamily: 'var(--ff-sans)', fontWeight: 800 }}
            >
              SAHIL
            </motion.span>
            <div 
              style={{ 
                fontFamily: 'var(--ff-sans)', 
                fontWeight: 300,
                marginTop: '-0.05em',
                display: 'inline-flex',
                alignItems: 'center',
                minHeight: '1.2em'
              }}
            >
              <motion.span 
                animate={{ 
                  color: 'var(--text)',
                  scale: 1 
                }}
                transition={{ duration: 0.1 }}
                style={{ 
                  background: `linear-gradient(to right, var(--text) 0%, var(--accent) 150%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  position: 'relative',
                  display: 'inline-block'
                }}
              >
                {words[index].substring(0, subIndex)}
              </motion.span>
              <span 
                style={{ 
                  display: 'inline-block',
                  width: '3px', 
                  height: '0.9em', 
                  background: 'var(--accent)', 
                  marginLeft: '6px',
                  opacity: blink ? 1 : 0,
                  transition: 'opacity 0.1s'
                }}
              />
            </div>
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="body-text max-w-[54ch] text-[18px] md:text-[21px] font-normal"
            style={{ lineHeight: '1.5', color: 'var(--muted2)' }}
          >
            I engineer high-performance digital products for <span className="text-[var(--text)] font-medium">founders</span> and <span className="text-[var(--text)] font-medium">investors</span>, bridging the gap between strategic design and production-grade architecture.
          </motion.p>

          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-6 sm:gap-8 w-full sm:w-auto"
          >
            <motion.button 
              onClick={scrollToContact} 
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="btn-cta bg-[var(--accent)] text-black px-6 sm:px-10 py-4 h-[56px] group transition-all duration-400 w-full sm:w-auto"
              style={{ 
                border: 'none',
                boxShadow: '0 4px 14px 0 var(--accent-dim)'
              }}
            >
              <span className="relative z-10 flex items-center font-bold uppercase tracking-wider text-[11px]">
                Start Project Brief
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
            <div className="flex items-center gap-4 justify-start">
              {[
                { icon: Github, url: 'https://github.com/phnxsahil' },
                { icon: Twitter, url: 'https://x.com/theonlysahil1' },
                { icon: Linkedin, url: 'https://www.linkedin.com/in/sahil-sharma-5a3715270/' },
              ].map((social) => (
                <motion.a
                  key={social.url}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, borderColor: 'var(--accent)', color: 'var(--accent)', boxShadow: '0 4px 12px rgba(200, 241, 53, 0.2)' }}
                  className="bg-[var(--bg)] border border-[var(--border-hi)] text-[var(--muted2)] flex items-center justify-center transition-all duration-200"
                  style={{
                    width: '46px',
                    height: '46px',
                  }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="mt-auto pt-16 border-t border-[var(--text)]">
        <Marquee />
      </div>
    </section>
  );
}
