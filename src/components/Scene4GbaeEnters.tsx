import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, CheckCircle, Zap } from 'lucide-react';

export default function Scene4GbaeEnters() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const elementHeight = rect.height;
      const scrollOffset = -rect.top;
      const calcProgress = Math.min(Math.max(scrollOffset / (elementHeight - window.innerHeight), 0), 1);
      setProgress(calcProgress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Structural nodes representing GBA organized systems
  const organizedNodes = [
    { label: 'Branding', x: -140, y: -70 },
    { label: 'Marketing', x: 140, y: -70 },
    { label: 'Staffing', x: -150, y: 70 },
    { label: 'Acquisition', x: 150, y: 70 },
    { label: 'Consulting', x: 0, y: -140 },
    { label: 'Ecosystem', x: 0, y: 140 }
  ];

  // Animation phase triggers based on scroll progress
  const logoVisible = progress > 0.15;
  const systemAligned = progress > 0.45;
  const titleVisible = progress > 0.70;

  return (
    <div
      ref={containerRef}
      id="scene-gba-enters"
      className="relative h-[220vh] bg-white select-none overflow-hidden"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-white">
        
        {/* Soft, elegant purple grid structures in the background */}
        <div className="absolute inset-0 pointer-events-none opacity-30 select-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-violet-100/40" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-violet-100/40" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-violet-100/40" />
        </div>

        {/* Ambient violet spotlight from behind GBA logo */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-violet-100/45 blur-[120px] transition-all duration-1000"
          style={{
            transform: `translate(-50%, -50%) scale(${logoVisible ? 1 : 0.4})`,
            opacity: logoVisible ? 0.8 : 0
          }}
        />

        {/* Outer progress indicators */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 text-center space-y-1 Z-20">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-violet-50 border border-violet-150 rounded-full shadow-soft font-bold">
            <Zap className="w-3.5 h-3.5 text-violet-600 animate-bounce" />
            <span className="font-mono text-[9px] uppercase tracking-widest text-violet-750">THE TRANSITION</span>
          </div>
        </div>

        {/* Interactive nodes system */}
        <div className="relative w-[340px] h-[340px] sm:w-[500px] sm:h-[500px] flex items-center justify-center Z-10">
          
          {/* Organized connections lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
            {organizedNodes.map((node, i) => {
              if (!systemAligned) return null;
              
              const centerX = 250;
              const centerY = 250;
              const targetX = centerX + node.x;
              const targetY = centerY + node.y;

              return (
                <g key={i}>
                  <motion.line
                    x1={centerX}
                    y1={centerY}
                    x2={targetX}
                    y2={targetY}
                    stroke="#8B5CF6"
                    strokeWidth="1.5"
                    className="opacity-75"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8, delay: i * 0.08 }}
                  />
                </g>
              );
            })}
          </svg>

          {/* Glowing GBA Central Core logo block */}
          <AnimatePresence>
            {logoVisible && (
              <motion.div
                initial={{ opacity: 0, scale: 0.1, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 100 }}
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-violet-600 border-4 border-white text-white flex flex-col justify-center items-center shadow-premium relative z-10 select-none"
              >
                {/* Absolute inner rotating pulse ring */}
                <div className="absolute inset-2 border border-violet-300/40 rounded-full animate-spin" style={{ animationDuration: '8s' }} />
                
                <h2 className="font-sans text-2xl sm:text-3xl font-black tracking-widest leading-none">
                  GBA
                </h2>
                <span className="font-mono text-[8px] uppercase tracking-widest text-violet-200 mt-1 font-extrabold text-center">
                  Growth Engine
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Outer Organized Nodes Aligned Perfectly */}
          {organizedNodes.map((node, i) => {
            if (!systemAligned) return null;

            return (
              <motion.div
                key={node.label}
                initial={{ opacity: 0, scale: 0.2, x: 0, y: 0 }}
                animate={{ opacity: 1, scale: 1, x: node.x, y: node.y }}
                transition={{ type: 'spring', damping: 20, stiffness: 120, delay: i * 0.05 }}
                className="absolute px-3 sm:px-4 py-2 rounded-full border border-violet-200 bg-violet-50/80 text-violet-700 text-[10px] sm:text-xs font-mono font-black tracking-wider uppercase shadow-soft flex items-center space-x-1 bg-white"
              >
                <CheckCircle className="w-3.5 h-3.5 text-violet-500 shrink-0" />
                <span>{node.label}</span>
              </motion.div>
            );
          })}

        </div>

        {/* Headline "Growth. Simplified." */}
        <div className="absolute bottom-12 text-center max-w-lg px-4 space-y-4">
          <AnimatePresence>
            {titleVisible && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-3"
              >
                <h3 className="font-sans text-4xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight leading-none">
                  Growth. <span className="text-gradient-purple">Simplified.</span>
                </h3>
                <p className="font-sans text-xs sm:text-sm text-zinc-550 max-w-sm mx-auto font-normal leading-relaxed">
                  GBA absorbs operational chaos, reconnecting fractured structures into a singular, highly efficient corporate engine.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
