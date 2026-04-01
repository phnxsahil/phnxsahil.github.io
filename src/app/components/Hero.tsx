import { motion, AnimatePresence, type Variants } from 'motion/react';
import { ArrowRight, Github, Twitter, Linkedin } from 'lucide-react';
import { Marquee } from './Marquee';
import { useState, useEffect, useRef } from 'react';

// 21st.dev inspired Magnetic Component
function Magnetic({ children, strength = 0.2 }: { children: React.ReactNode, strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    if (!ref.current) return;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * strength, y: middleY * strength });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
}

export function Hero() {
  const roles = [
    "Design Engineering",
    "Production Architecture",
    "Interaction Design",
    "Full-Stack Dev"
  ];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const scrollToExplore = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants: Variants = {
    hidden: {},
    visible: { 
      transition: { 
        staggerChildren: 0.1, 
        delayChildren: 0.6 // Increased for cinematic aperture opening
      } 
    }
  };

  const maskVariants: Variants = {
    hidden: { y: "125%", rotate: 1 },
    visible: { 
      y: "0%", 
      rotate: 0,
      transition: { type: "spring", stiffness: 60, damping: 22, mass: 1 } 
    }
  };

  const fadeVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section
      id="hero"
      className="relative flex flex-col justify-end overflow-hidden"
      style={{ minHeight: '100dvh', paddingTop: 'clamp(80px, 11vh, 140px)' }}
    >
      {/* Background Grid Layer - Optimized */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0 hero-grid pointer-events-none" 
      />

      <div 
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: 'var(--hero-vignette)', opacity: 0.7 }}
      />

      {/* MASSIVE SPLIT TYPOGRAPHY (MAT VOYCE STYLE) OVERLAPPING SECTIONS */}
      <motion.div 
        initial={{ x: '-60vw', opacity: 0 }}
        animate={{ x: '0vw', opacity: 0.65 }}
        transition={{ duration: 4.5, ease: [0.19, 1, 0.22, 1], delay: 0.4 }}
        className="voyce-text-top flex"
      >
        SAHIL
      </motion.div>

      <motion.div 
        initial={{ x: '60vw', opacity: 0 }}
        animate={{ x: '0vw', opacity: 0.55 }}
        transition={{ duration: 4.5, ease: [0.19, 1, 0.22, 1], delay: 0.6 }}
        className="voyce-text-bottom flex"
      >
        SHARMA
      </motion.div>

      {/* CENTRAL CARD CONTENT */}
      <div className="relative z-10 w-full px-6 flex-grow flex flex-col items-center justify-center pointer-events-none">
        <motion.div
           initial="hidden"
           animate="visible"
           variants={containerVariants}
           className="pointer-events-auto w-full flex justify-center"
        >
          <div className="voyce-center-card flex flex-col items-start w-full mx-auto backdrop-blur-xl rounded-sm">
            
            <motion.div variants={fadeVariants} className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--bg)] shadow-inner text-[var(--muted2)]">
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
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
                      className="absolute inset-y-0 left-0 flex items-center eyebrow font-bold text-[9px] tracking-[0.16em] text-[var(--text)]"
                    >
                      {roles[roleIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            <div className="flex flex-col gap-1 mb-6">
              <div className="overflow-hidden p-1">
                <motion.h1 variants={maskVariants} className="text-[clamp(32px,4vw,48px)] font-black leading-[0.9] tracking-tight text-[var(--text)]" style={{ fontFamily: 'var(--ff-cabinet)' }}>
                  BUILDING RESONANT
                </motion.h1>
              </div>
              <div className="overflow-hidden p-1">
                <motion.h1 variants={maskVariants} className="text-[clamp(32px,4vw,48px)] font-black leading-[0.9] tracking-tight text-[var(--accent)] italic" style={{ fontFamily: 'var(--ff-cabinet)' }}>
                  DIGITAL SYSTEMS.
                </motion.h1>
              </div>
            </div>

            <div className="overflow-hidden p-1 mb-8">
              <motion.p variants={maskVariants} className="body-text max-w-[46ch] text-[16px] md:text-[18px] font-normal leading-[1.6] text-[var(--muted2)]">
                I engineer high-performance interfaces for <span className="text-[var(--text)] font-medium">founders</span> and <span className="text-[var(--text)] font-medium">investors</span>, bridging the gap between strategic design and production architecture.
              </motion.p>
            </div>

            <motion.div variants={fadeVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 w-full sm:w-auto">
              <Magnetic strength={0.3}>
                <motion.button 
                  onClick={scrollToExplore} 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-cta bg-[var(--accent)] text-black px-6 sm:px-8 py-4 h-[56px] transition-all duration-300 w-full sm:w-auto rounded-sm group"
                  style={{ boxShadow: '0 8px 24px -8px var(--accent-dim)' }}
                >
                  <span className="relative z-10 flex items-center font-bold uppercase tracking-wider text-[11px]">
                    Explore Archive
                    <motion.div
                      animate={{ y: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      className="ml-2"
                    >
                      <ArrowRight size={16} className="rotate-90" />
                    </motion.div>
                  </span>
                </motion.button>
              </Magnetic>

              <div className="flex items-center gap-4 justify-start">
                {[
                  { icon: Github, url: 'https://github.com/phnxsahil' },
                  { icon: Twitter, url: 'https://x.com/theonlysahil1' },
                  { icon: Linkedin, url: 'https://www.linkedin.com/in/sahil-sharma-5a3715270/' },
                ].map((social, i) => (
                  <Magnetic key={i} strength={0.4}>
                    <motion.a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, borderColor: 'var(--accent)', color: 'var(--accent)' }}
                      className="bg-[var(--bg)] border border-[var(--border-hi)] text-[var(--muted2)] flex items-center justify-center transition-colors duration-200 rounded-sm"
                      style={{ width: '48px', height: '48px' }}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  </Magnetic>
                ))}
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>

      <div className="mt-auto pt-16 border-t border-[var(--border-hi)] relative z-10 bg-[var(--bg)]">
        <Marquee />
      </div>
    </section>
  );
}
