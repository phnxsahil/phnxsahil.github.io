import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Hero } from '../components/Hero';
import { Ticker } from '../components/Ticker';
import { About } from '../components/About';
import { FeaturedProjects } from '../components/FeaturedProjects';
import { AllProjects } from '../components/AllProjects';
import { Skills } from '../components/Skills';
import { Loader } from '../components/Loader';
import { Manifesto } from '../components/Manifesto';
import { WhyMe } from '../components/WhyMe';
import { Contact } from '../components/Contact';

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

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
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: 'blur(0px)',
      transition: { 
        duration: 1.2, 
        ease: [0.22, 1, 0.36, 1] as any // ease-premium quintic
      }
    }
  };

  return (
    <>
      <Loader onComplete={() => setIsLoaded(true)} />
      
      <AnimatePresence mode="wait">
        {isLoaded && (
          <motion.main 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
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

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={sectionVariants}>
              <Contact />
            </motion.div>

          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}
