import { motion, type Variants } from 'motion/react';
import { useInView } from './useInView';

export function About() {
  const { ref, isInView } = useInView();

  const tags = ['Product Design', 'Next.js', 'FastAPI', 'Supabase', 'AI Integration', 'Founder Ops'];

  const facts = [
    { value: '5+', label: 'Products shipped' },
    { value: '2', label: 'Live in production' },
    { value: '0-1', label: 'Founder-led builds' },
    { value: '3', label: 'Product categories' },
  ];

  const containerVariants: Variants = {
    hidden: {},
    visible: { 
      transition: { 
        staggerChildren: 0.1, 
        delayChildren: 0.1 
      } 
    }
  };

  const maskVariants: Variants = {
    hidden: { y: "120%", rotate: 2 },
    visible: { 
      y: "0%", 
      rotate: 0,
      transition: { type: "spring", stiffness: 60, damping: 20, mass: 1 } 
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { type: "spring", stiffness: 50, damping: 20, mass: 1 } 
    }
  };

  const fadeVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } }
  };

  return (
    <section
      id="about"
      ref={ref}
      className="relative z-[2] mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 px-6 py-24 md:grid-cols-2 md:gap-[72px] md:px-12"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-15%" }}
      >
        <div className="overflow-hidden p-1">
          <motion.div variants={maskVariants} className="mb-6 flex items-center gap-[10px]" style={{ color: 'var(--accent)' }}>
            <div style={{ width: '20px', height: '1px', background: 'var(--accent)' }} />
            <span className="eyebrow">Core Philosophy</span>
          </motion.div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="overflow-hidden p-1">
            <motion.h2
              variants={maskVariants}
              className="section-title text-[clamp(40px,6vw,72px)] leading-[0.85] tracking-tighter uppercase"
            >
              Strategic Product
            </motion.h2>
          </div>
          <div className="overflow-hidden p-1">
            <motion.h2
              variants={maskVariants}
              className="section-title text-[clamp(40px,6vw,72px)] leading-[0.85] tracking-tighter uppercase"
            >
              Engineering.
            </motion.h2>
          </div>
        </div>

        <motion.p
          variants={fadeVariants}
          className="body-text"
          style={{
            marginTop: '32px',
            maxWidth: '54ch',
            fontSize: '17px',
            lineHeight: '1.6',
          }}
        >
          I partner with early-stage founders to bridge the gap between abstract vision and
          production-ready infrastructure. My focus is on delivering high-integrity systems
          where technical architecture and user experience are treated as a unified discipline.
        </motion.p>

        <motion.div variants={fadeVariants} className="mt-10 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="chip-label tag-pill"
              style={{
                border: '1px solid var(--border)',
                color: 'var(--muted2)',
              }}
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-15%" }}
        className="grid grid-cols-1 gap-4 sm:grid-cols-6"
      >
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -5, rotate: -1, zIndex: 10 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors duration-300 hover:border-[var(--accent)]/30 hover:bg-[var(--surface2)] sm:col-span-4 md:p-8"
          style={{ backdropFilter: 'blur(10px)', boxShadow: 'var(--shadow-md)' }}
        >
          <div
            className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{ background: 'radial-gradient(circle at top right, var(--accent-dim), transparent 70%)' }}
          />
          <div
            className="tabular mb-2"
            style={{ fontFamily: 'var(--ff-sans)', fontWeight: 800, fontSize: '48px', lineHeight: '1', color: 'var(--accent)', letterSpacing: '-0.02em' }}
          >
            {facts[0].value}
          </div>
          <div className="eyebrow" style={{ color: 'var(--muted2)', fontSize: '9px', letterSpacing: '0.2em' }}>
            {facts[0].label}
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -5, rotate: 1, zIndex: 10 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors duration-300 hover:border-[var(--accent)]/30 hover:bg-[var(--surface2)] sm:col-span-2 md:p-8"
          style={{ backdropFilter: 'blur(10px)', boxShadow: 'var(--shadow-md)' }}
        >
          <div
            className="tabular mb-2"
            style={{ fontFamily: 'var(--ff-sans)', fontWeight: 800, fontSize: '48px', lineHeight: '1', color: 'var(--text)', letterSpacing: '-0.02em' }}
          >
            {facts[1].value}
          </div>
          <div className="eyebrow" style={{ color: 'var(--muted2)', fontSize: '9px', letterSpacing: '0.2em' }}>
            {facts[1].label}
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -5, rotate: -1, zIndex: 10 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors duration-300 hover:border-[var(--accent)]/30 hover:bg-[var(--surface2)] sm:col-span-2 md:p-8"
          style={{ backdropFilter: 'blur(10px)', boxShadow: 'var(--shadow-md)' }}
        >
          <div
            className="tabular mb-2 flex items-center"
            style={{ fontFamily: 'var(--ff-sans)', fontWeight: 800, fontSize: '48px', lineHeight: '1', color: 'var(--text)', letterSpacing: '-0.02em' }}
          >
            <span className="text-[var(--accent)]">0</span>
            <span className="mx-1 text-[24px] opacity-20">-&gt;</span>
            <span className="text-[var(--accent)]">1</span>
          </div>
          <div className="eyebrow" style={{ color: 'var(--muted2)', fontSize: '9px', letterSpacing: '0.2em' }}>
            {facts[2].label}
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -5, rotate: 1, zIndex: 10 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors duration-300 hover:border-[var(--accent)]/30 hover:bg-[var(--surface2)] sm:col-span-4 md:p-8"
          style={{ backdropFilter: 'blur(10px)', boxShadow: 'var(--shadow-md)' }}
        >
          <div
            className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{ background: 'radial-gradient(circle at bottom left, var(--accent-dim), transparent 70%)' }}
          />
          <div
            className="tabular mb-2"
            style={{ fontFamily: 'var(--ff-sans)', fontWeight: 800, fontSize: '48px', lineHeight: '1', color: 'var(--accent)', letterSpacing: '-0.02em' }}
          >
            {facts[3].value}
          </div>
          <div className="eyebrow" style={{ color: 'var(--muted2)', fontSize: '9px', letterSpacing: '0.2em' }}>
            {facts[3].label}
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 36, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ delay: 0.2, type: "spring", stiffness: 100, damping: 20 }}
        className="relative mt-8 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] md:col-span-2"
        style={{ padding: 'clamp(24px, 5vw, 48px) clamp(20px, 4vw, 40px)', boxShadow: 'var(--shadow-lg)' }}
      >
        <div
          className="pointer-events-none absolute -left-2 -top-4 select-none opacity-[0.03]"
          style={{ fontSize: '180px', fontFamily: 'serif', color: 'var(--text)' }}
        >
          "
        </div>

        <div className="relative z-10">
          <blockquote
            className="body-text"
            style={{ fontSize: 'clamp(17px, 2.5vw, 20px)', color: 'var(--text)', maxWidth: '65ch', lineHeight: '1.5', fontWeight: 500, letterSpacing: '-0.01em' }}
          >
            "The best products are built when <span className="text-[var(--accent)]">design and engineering</span> are treated as one continuous decision system."
          </blockquote>

          <div className="mt-8 flex items-center gap-4">
            <div className="h-[1px] w-8 bg-[var(--accent)]" />
            <div className="flex flex-col">
               <cite className="eyebrow" style={{ color: 'var(--text)', fontStyle: 'normal', fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em' }}>
                 SAHIL SHARMA
               </cite>
               <span style={{ fontSize: '9px', color: 'var(--muted2)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '2px' }}>
                 Design Engineer
               </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
