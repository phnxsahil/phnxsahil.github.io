import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation, useNavigate } from 'react-router';
import { Hero } from '../components/Hero';
import { Ticker } from '../components/Ticker';
import { About } from '../components/About';
import { PersonalStory } from '../components/PersonalStory';
import { FeaturedProjects } from '../components/FeaturedProjects';
import { AllProjects } from '../components/AllProjects';
import { Skills } from '../components/Skills';
import { Loader } from '../components/Loader';
import { Manifesto } from '../components/Manifesto';
import { WhyMe } from '../components/WhyMe';
import { ProductEngineer } from '../components/ProductEngineer';
export default function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Back to always showing loader on initial component mount
  const [isLoaded, setIsLoaded] = useState(!!location.state);

  const handleLoaderComplete = () => {
    setIsLoaded(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.3,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as any
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: 'blur(0px)',
      transition: { 
        duration: 1.4, 
        ease: [0.2, 0, 0, 1] as any // soft liquid exit
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
      {!isLoaded && <Loader onComplete={handleLoaderComplete} />}
      
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
              <PersonalStory />
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

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={sectionVariants}>
              <FeaturedProjects />
            </motion.div>

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
