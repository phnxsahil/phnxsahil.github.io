import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router';

interface NavItem {
  label: string;
  id?: string;
  path?: string;
  type: 'scroll' | 'link';
}

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const handleNavClick = (item: NavItem) => {
    if (item.type === 'link') {
      navigate(item.path!);
      setIsMobileMenuOpen(false);
    } else {
      if (location.pathname !== '/') {
        navigate('/', { state: { scrollTarget: item.id } });
      } else {
        const element = document.getElementById(item.id!);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Work', id: 'work', type: 'scroll' as const },
    { label: 'What I Am', path: '/about-me', type: 'link' as const },
    { label: 'Philosophy', path: '/about-detail', type: 'link' as const },
    { label: 'Contact', id: 'contact', type: 'scroll' as const }
  ];

  const navContainerVariants = {
    hidden: {},
    visible: { 
      transition: { 
        staggerChildren: 0.1, 
        delayChildren: 2.2 // wait for initial loader to almost finish
      } 
    }
  };

  const navItemVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { type: "spring" as any, stiffness: 70, damping: 20, mass: 1 } 
    }
  };

  return (
    <>
      <motion.nav
        id="site-nav"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }} 
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-12 py-[16px] border-b border-[var(--border)] backdrop-blur-md transition-all duration-300 bg-[var(--bg)]/80"
        style={{
          boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.2)' : 'none'
        }}
      >
        <motion.div 
          className="flex items-center justify-between w-full"
          variants={navContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Logo - SS. Minimalist */}
          <div className="overflow-hidden p-1">
            <motion.div variants={navItemVariants}>
              <Link
                to="/"
                className="group relative flex items-center h-10 px-2"
                style={{ textDecoration: 'none' }}
              >
                <div className="flex flex-col items-start leading-[0.8]">
                   <span className="font-black tracking-[-0.08em] text-[24px] md:text-[28px] text-[var(--text)] group-hover:text-[var(--accent)] transition-all duration-500 uppercase italic">
                     SS<span className="text-[var(--accent)] group-hover:text-[var(--text)]">.</span>
                   </span>
                   
                   {/* High Fidelity Reveal */}
                   <div className="overflow-hidden h-0 group-hover:h-3 transition-all duration-500 ease-[var(--ease-spring)] hidden sm:block">
                     <span className="font-mono text-[7px] tracking-[0.4em] text-[var(--muted)] uppercase whitespace-nowrap">
                       V4_ARCHITECT
                     </span>
                   </div>
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex nav-links items-center gap-2">
            {navItems.map((item) => (
              <div key={item.label} className="overflow-hidden p-1">
                <motion.div
                  variants={navItemVariants}
                  className="relative px-3 py-2 cursor-pointer group"
                  onClick={() => handleNavClick(item)}
                >
                  <button
                    className="relative z-10 transition-all duration-300 opacity-60 group-hover:opacity-100 font-bold text-[10px] uppercase tracking-[0.1em] text-[var(--text)]"
                  >
                    {item.label}
                  </button>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-[var(--text)] transition-transform hover:scale-110 active:scale-90"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu - Full Screen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            id="mobile-menu"
            className="fixed inset-0 z-[200] flex flex-col items-center justify-center px-6 md:hidden bg-[var(--bg)]"
          >
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-8 right-6 p-4 text-[var(--text)] opacity-40 hover:opacity-100"
            >
              <X size={32} />
            </button>

            <div className="flex flex-col items-start gap-8 w-full max-w-xs">
              <span className="font-mono text-[9px] tracking-[0.5em] opacity-30 uppercase mb-4">Nav_Directory</span>
              {navItems.map((item, idx) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => handleNavClick(item)}
                  className="text-5xl font-black text-[var(--text)] uppercase tracking-tighter transition-all hover:text-[var(--accent)] italic text-left"
                >
                  {item.label}<span className="text-[var(--accent)]">.</span>
                </motion.button>
              ))}
              
              <div className="mt-12 w-full pt-12 border-t border-white/5 flex flex-col gap-6">
                 <div className="flex flex-col gap-2">
                    <span className="font-mono text-[8px] tracking-[0.3em] opacity-30 uppercase">Status</span>
                    <div className="flex items-center gap-3">
                       <div className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse shadow-[0_0_10px_var(--accent)]" />
                       <span className="text-[10px] font-bold uppercase tracking-widest">Available for Q2 2026</span>
                    </div>
                 </div>
                 
                 <div className="flex flex-col gap-2">
                    <span className="font-mono text-[8px] tracking-[0.3em] opacity-30 uppercase">Connect</span>
                    <div className="flex gap-6">
                       <Twitter size={18} className="opacity-40 hover:opacity-100 transition-opacity" />
                       <Github size={18} className="opacity-40 hover:opacity-100 transition-opacity" />
                       <Linkedin size={18} className="opacity-40 hover:opacity-100 transition-opacity" />
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
