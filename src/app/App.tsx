import { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router';
import { AnimatePresence } from 'motion/react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { PageTransition } from './components/PageTransition';
import { SmoothScroller } from './components/SmoothScroller';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AboutMePage from './pages/AboutMePage';
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
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition key="home"><HomePage /></PageTransition>} />
        <Route path="/about-detail" element={<PageTransition key="about"><AboutPage /></PageTransition>} />
        <Route path="/about-me" element={<PageTransition key="about-me"><AboutMePage /></PageTransition>} />
        <Route path="/project/:id" element={<PageTransition key="project"><ProjectDetailPage /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <HashRouter>
      <SmoothScroller>
        <RouteEffects />
        <div
          className="min-h-screen transition-colors duration-300 relative flex flex-col"
          style={{
            background: 'var(--bg)',
            color: 'var(--text)',
          }}
        >
          <a href="#main-content" className="skip-link">
            Skip to content
          </a>
          
          <Navigation />
          
          <main className="flex-1 min-h-[105vh] w-full relative flex flex-col">
            <AnimatedRoutes />
          </main>

          <Footer />
        </div>
      </SmoothScroller>
    </HashRouter>
  );
}
