import { motion } from 'motion/react';
import { Zap, ShieldCheck, Cpu } from 'lucide-react';
import { useState, useEffect } from 'react';

export function KineticFeed() {
  const [processes, setProcesses] = useState([
    { name: 'design_system.ts', sub: 'Figma tokens → CSS vars', progress: 88, color: 'var(--accent)' },
    { name: 'rag_pipeline.py', sub: 'Embedding + retrieval layer', progress: 72, color: '#4488FF' },
    { name: 'interaction_model.tsx', sub: 'State → animation mapping', progress: 95, color: 'var(--accent)' },
    { name: 'deploy.yml', sub: 'Edge → prod pipeline', progress: 62, color: 'var(--accent)' },
    { name: 'product_brief.md', sub: 'Scope → execution plan', progress: 100, color: '#4488FF' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProcesses(prev => prev.map(p => ({
        ...p,
        progress: Math.max(30, Math.min(100, p.progress + (Math.random() > 0.5 ? 1 : -1) * Math.round(Math.random() * 8)))
      })));
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-8 w-full max-w-[320px]">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-5 h-px bg-[var(--border-hi)]" />
          <span className="font-mono text-[9px] tracking-[0.18em] uppercase text-[var(--muted2)]">System processes</span>
        </div>
        <div className="flex flex-col gap-2.5">
          {processes.map((proc, i) => (
            <div key={i} className="grid grid-cols-[1fr_auto] items-center gap-3 p-2.5 bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--border-hi)] transition-colors group">
              <div className="flex flex-col">
                <span className="font-mono text-[10px] tracking-tight text-[var(--text)] opacity-80">{proc.name}</span>
                <span className="font-mono text-[8px] tracking-tight text-[var(--muted)] mt-0.5">{proc.sub}</span>
              </div>
              <div className="w-20 h-[3px] bg-[var(--bg)] relative overflow-hidden">
                <motion.div 
                  className="absolute inset-y-0 left-0"
                  animate={{ width: `${proc.progress}%`, backgroundColor: proc.color }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-5 h-px bg-[var(--border-hi)]" />
          <span className="font-mono text-[9px] tracking-[0.18em] uppercase text-[var(--muted2)]">Operational Status</span>
        </div>
        <div className="flex flex-col gap-2">
           {[
             { label: 'A designer who hands off', status: 'Blocked', icon: <CheckIcon /> },
             { label: 'A dev who ignores UX', status: 'Blocked', icon: <CheckIcon /> },
             { label: 'Available in 6 months', status: 'Restricted', icon: <CheckIcon /> }
           ].map((item, i) => (
             <div key={i} className="flex items-center justify-between p-2.5 bg-[var(--surface)] border border-[var(--border)] opacity-40">
                <span className="font-mono text-[9px] tracking-tight line-through">{item.label}</span>
                <div className="flex items-center gap-2 text-[var(--accent)]">
                   <span className="font-mono text-[8px] uppercase tracking-widest">{item.status}</span>
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
