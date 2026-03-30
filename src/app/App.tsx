import { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectDetailPage from './pages/ProjectDetailPage';

function RouteEffects() {
  const location = useLocation();

  useEffect(() => {
    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';

    return () => {
      window.history.scrollRestoration = previous;
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname]);

  return null;
}

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true;
    const saved = window.localStorage.getItem('theme');
    if (saved === 'dark') return true;
    if (saved === 'light') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      window.localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      window.localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <HashRouter>
      <RouteEffects />
      <div
        className="min-h-screen transition-colors duration-300 relative"
        style={{
          background: 'var(--bg)',
          color: 'var(--text)',
        }}
      >
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        
        <Navigation isDark={isDark} toggleDark={() => setIsDark(!isDark)} />
        
        <Routes>
           <Route path="/" element={<HomePage />} />
           <Route path="/about-detail" element={<AboutPage />} />
           <Route path="/project/:id" element={<ProjectDetailPage />} />

        </Routes>

        <Footer />
      </div>
    </HashRouter>
  );
}
