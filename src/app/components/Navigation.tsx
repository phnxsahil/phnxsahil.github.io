import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router';

interface NavigationProps {
  isDark: boolean;
  toggleDark: () => void;
}

interface NavItem {
  label: string;
  id?: string;
  path?: string;
  type: 'scroll' | 'link';
}

export function Navigation({ isDark, toggleDark }: NavigationProps) {
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
    { label: 'About', id: 'about', type: 'scroll' },
    { label: 'Work', id: 'featured', type: 'scroll' },
    { label: 'Philosophy', path: '/about-detail', type: 'link' },
    { label: 'Contact', id: 'contact', type: 'scroll' }
  ];

  return (
    <>
      <motion.nav
        id="site-nav"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.2, 0.9, 0.22, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-[16px] border-b border-[var(--border)] backdrop-blur-[40px] transition-all duration-300"
        style={{
          background: isDark ? 'rgba(8, 8, 12, 0.88)' : 'rgba(252, 252, 248, 0.88)',
          boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.08)' : 'none'
        }}
      >
        {/* Logo - Minimalist SS. Branding */}
        <Link
          to="/"
          className="relative group flex items-center font-black tracking-tighter text-[24px]"
          style={{ 
            fontFamily: 'var(--ff-sans)', 
            textDecoration: 'none', 
            color: 'var(--text)' 
          }}
        >
          SS.
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex nav-links items-center gap-2">
          {[
            { label: 'Work', id: 'featured', type: 'scroll' },
            { label: 'Why Me?', id: 'why-me', type: 'scroll' },
            { label: 'Philosophy', path: '/about-detail', type: 'link' },
            { label: 'Contact', id: 'contact', type: 'scroll' }
          ].map((item) => (
            <motion.div
              key={item.label}
              className="relative px-3 py-2 cursor-pointer group"
              onClick={() => handleNavClick(item)}
            >
              <button
                className="relative z-10 transition-all duration-300 opacity-60 group-hover:opacity-100"
                style={{
                  color: 'var(--text)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '11px',
                  letterSpacing: '0.05em',
                }}
              >
                {item.label}
              </button>
            </motion.div>
          ))}

          <div className="h-5 w-px bg-[var(--border)] mx-4 opacity-50" />

          <button
            onClick={toggleDark}
            className="p-2 text-[var(--muted2)] hover:text-[var(--text)] transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>



        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleDark}
            className="group relative flex items-center w-[40px] h-[20px] bg-[var(--surface)] border border-[var(--border)] rounded-full p-1 cursor-pointer"
            aria-label="Toggle theme"
          >
            <motion.div
              className="absolute w-3 h-3 bg-[var(--text)] rounded-full flex items-center justify-center"
              initial={false}
              animate={{ x: isDark ? 0 : 18 }}
              transition={{ duration: 0.25, ease: [0.2, 0.9, 0.22, 1] }}
            />
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-[var(--text)] transition-transform hover:scale-110"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu - Matte Waterglass Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(40px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.4 }}
            id="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col items-center justify-center px-6 md:hidden"
            style={{
              background: isDark ? 'rgba(8, 8, 12, 0.88)' : 'rgba(252, 252, 248, 0.88)',
            }}
          >
            <div className="flex flex-col items-center gap-10 w-full max-w-xs">
              {navItems.map((item, idx) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => handleNavClick(item)}
                  className="text-4xl font-bold text-[var(--text)] uppercase tracking-tighter transition-all hover:text-[var(--accent)]"
                  style={{ fontFamily: 'var(--ff-sans)' }}
                >
                  {item.label}
                </motion.button>
              ))}
              
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                onClick={() => handleNavClick({ type: 'scroll', id: 'contact' })}
                className="w-full bg-[var(--text)] text-[var(--bg)] font-black py-5 px-8 mt-12 text-center uppercase text-[11px] tracking-[0.2em] rounded-full shadow-lg"
              >
                Inquiry
              </motion.button>
              
              <div className="mt-12 flex flex-col items-center gap-3">
                 <div
                  className="avail-badge"
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: 'var(--accent)',
                    boxShadow: `0 0 15px var(--accent)`,
                    animation: 'pulse 2s ease-in-out infinite',
                  }}
                />
                <span className="eyebrow tracking-[0.2em] opacity-60" style={{ fontSize: '9px' }}>AVAILABLE FOR WORK</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
