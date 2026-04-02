import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation, useNavigate } from 'react-router';
import { Hero } from '../components/Hero';
import { Ticker } from '../components/Ticker';
import { About } from '../components/About';
import { FeaturedProjects } from '../components/FeaturedProjects';
import { AllProjects } from '../components/AllProjects';
import { Skills } from '../components/Skills';
import { Loader } from '../components/Loader';
import { Manifesto } from '../components/Manifesto';
import { WhyMe } from '../components/WhyMe';
import { ProductEngineer } from '../components/ProductEngineer';
export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.3,
        duration: 1.2,
        ease: [0.76, 0, 0.24, 1] as any // ease-fluid
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: 'blur(0px)',
      transition: { 
        duration: 1.5, 
        ease: [0.76, 0, 0.24, 1] as any // ease-fluid
      }
    }
  };

  useEffect(() => {
    if (!isLoaded) return;

    const scrollTarget = (location.state as { scrollTarget?: string } | null)?.scrollTarget;
    if (!scrollTarget) return;

    const frame = window.requestAnimationFrame(() => {
      const element = document.getElementById(scrollTarget);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      navigate(location.pathname, { replace: true, state: null });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [isLoaded, location.pathname, location.state, navigate]);

  return (
    <>
      <Loader onComplete={() => setIsLoaded(true)} />
      
      <AnimatePresence mode="wait">
        {isLoaded && (
          <motion.main 
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            id="main-content" 
            className="relative z-10"
          >

            
            <Hero />
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={sectionVariants}>
              <About />
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={sectionVariants}>
              <WhyMe />
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={sectionVariants}>
              <Manifesto />
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={sectionVariants}>
              <ProductEngineer />
            </motion.div>



            <Ticker />

            <div className="relative">
              <FeaturedProjects />
            </div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={sectionVariants}>
              <AllProjects />
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={sectionVariants}>
              <Skills />
            </motion.div>

          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}
