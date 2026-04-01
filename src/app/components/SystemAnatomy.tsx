import { motion } from 'motion/react';
import React from 'react';

interface SystemAnatomyProps {
  stack: string[];
}

export function SystemAnatomy({ stack }: SystemAnatomyProps) {
  // Simple deterministic way to position nodes in a technical grid
  const getNodePos = (index: number, total: number) => {
    const angle = (index / total) * Math.PI * 2;
    const radius = 120;
    return {
      x: Math.cos(angle) * radius + 200,
      y: Math.sin(angle) * radius + 200
    };
  };

  return (
    <div className="relative w-full max-w-md mx-auto aspect-square bg-[var(--surface)] border border-[var(--border)] rounded-2xl overflow-hidden p-8 shadow-inner group">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none select-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="anatomy-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#anatomy-grid)" />
        </svg>
      </div>

      <svg viewBox="0 0 400 400" className="relative z-10 w-full h-full drop-shadow-2xl">
        {/* Central Core Node */}
        <motion.circle
          cx="200"
          cy="200"
          r="40"
          className="fill-[var(--bg)] stroke-[var(--accent)] stroke-[1.5px]"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.text
          x="200"
          y="205"
          textAnchor="middle"
          className="fill-[var(--accent)] font-mono text-[10px] font-bold tracking-tighter uppercase pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Kernel
        </motion.text>

        {/* Dynamic Stack Nodes */}
        {stack.map((tech, i) => {
          const pos = getNodePos(i, stack.length);
          return (
            <React.Fragment key={tech}>
              {/* Connection Line */}
              <motion.line
                x1="200"
                y1="200"
                x2={pos.x}
                y2={pos.y}
                className="stroke-[var(--border-hi)] stroke-[1px] group-hover:stroke-[var(--accent-border)] transition-colors"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.4 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
              />
              
              {/* Node Circle */}
              <motion.g
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8 + i * 0.1, type: "spring", stiffness: 100 }}
              >
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r="6"
                  className="fill-[var(--accent)]"
                />
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r="12"
                  className="fill-transparent stroke-[var(--accent)] stroke-[1px] opacity-20 group-hover:opacity-40 transition-opacity"
                />
                
                {/* Node Label */}
                <text
                  x={pos.x + 16}
                  y={pos.y + 4}
                  className="fill-[var(--muted2)] group-hover:fill-[var(--text)] transition-colors font-mono text-[9px] uppercase tracking-widest pointer-events-none"
                >
                  {tech}
                </text>
              </motion.g>
            </React.Fragment>
          );
        })}

        {/* Orbiting ring for dynamic feel */}
        <motion.circle
          cx="200"
          cy="200"
          r="160"
          className="fill-none stroke-[var(--border-hi)] stroke-dashed stroke-[1px] opacity-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: 'center' }}
        />
      </svg>
      
      <div className="absolute top-4 left-4 flex items-center gap-2">
         <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
         <span className="eyebrow text-[9px] opacity-40">Build Topology v4</span>
      </div>
    </div>
  );
}
