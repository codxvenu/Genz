import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Zap, Check } from 'lucide-react';

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

  // GBA Organized structures
  const organizedNodes = [
    { label: 'Branding', x: -140, y: -70 },
    { label: 'Marketing', x: 140, y: -70 },
    { label: 'Staffing', x: -150, y: 70 },
    { label: 'Acquisition', x: 150, y: 70 },
    { label: 'Consulting', x: 0, y: -140 },
    { label: 'Ecosystem', x: 0, y: 140 }
  ];

  const logoVisible = progress > 0.15;
  const systemAligned = progress > 0.45;
  const titleVisible = progress > 0.65;

  return (
    <div
      ref={containerRef}
      id="scene-gba-enters"
      className="relative h-[220vh] bg-black select-none"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-black px-4">
        
        {/* Subtle royal geometric orbit guidelines in black & dark purple */}
        <div className="absolute inset-0 pointer-events-none opacity-20 select-none z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-purple-500/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-purple-500/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-purple-500/10" />
        </div>

        {/* Ambient violet central glow overlay */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#7C3AED]/10 blur-[130px] transition-all duration-1000 z-0"
          style={{
            transform: `translate(-50%, -50%) scale(${logoVisible ? 1.2 : 0.5})`,
            opacity: logoVisible ? 0.9 : 0
          }}
        />

        {/* Top Status Token */}
        <div className="absolute top-16 left-1/2 -translate-x-1/2 text-center z-20">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full font-bold">
            <Zap className="w-3.5 h-3.5 text-[#A855F7] animate-pulse" />
            <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-300">PHASE II &bull; THE UNIFICATION</span>
          </div>
        </div>

        {/* Core Organised Nodes Network */}
        <div className="relative w-[340px] h-[340px] sm:w-[500px] sm:h-[500px] flex items-center justify-center z-10">
          
          {/* Organised Connection SVG Lines */}
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
                    stroke="#7C3AED"
                    strokeWidth="1.2"
                    className="opacity-40"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8, delay: i * 0.05 }}
                  />
                </g>
              );
            })}
          </svg>

          {/* Central GBA Shield/Signet Ring Core */}
          <AnimatePresence>
            {logoVisible && (
              <motion.div
                initial={{ opacity: 0, scale: 0.4, rotate: -90 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 90 }}
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-black border border-purple-500/35 text-white flex flex-col justify-center items-center shadow-[0_0_50px_rgba(124,58,237,0.15)] relative z-10 select-none"
              >
                {/* Rotating accent rings */}
                <div className="absolute inset-2 border border-purple-500/10 rounded-full animate-spin" style={{ animationDuration: '10s' }} />
                
                <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-wider leading-none text-white">
                  GBA
                </h2>
                <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-purple-400 mt-2 font-bold text-center">
                  GROWTH ENGINE
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Connected Organised Outer Nodes */}
          {organizedNodes.map((node, i) => {
            if (!systemAligned) return null;

            return (
              <motion.div
                key={node.label}
                initial={{ opacity: 0, scale: 0.5, x: 0, y: 0 }}
                animate={{ opacity: 0.9, scale: 1, x: node.x, y: node.y }}
                transition={{ type: 'spring', damping: 18, stiffness: 100, delay: i * 0.04 }}
                className="absolute px-4 py-2 rounded-full border border-purple-500/20 bg-zinc-950 text-zinc-200 text-[10px] sm:text-[11px] font-mono font-bold tracking-widest uppercase shadow-2xl flex items-center space-x-1.5"
              >
                <Check className="w-3 h-3 text-[#A855F7] shrink-0" />
                <span>{node.label}</span>
              </motion.div>
            );
          })}

        </div>

        {/* Narrative Headline block "Growth. Simplified." */}
        <div className="absolute bottom-12 text-center max-w-lg px-4 space-y-4">
          <AnimatePresence>
            {titleVisible && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-3"
              >
                <h3 className="font-serif text-4xl sm:text-5xl font-normal text-white tracking-tight leading-none">
                  Growth<span className="text-[#7C3AED]">.</span> <span className="italic font-normal text-gradient-purple">Simplified.</span>
                </h3>
                <p className="font-sans text-xs sm:text-sm text-zinc-400 max-w-sm mx-auto font-light tracking-wide leading-relaxed">
                  GBA operates as your complete growth squad. We absorb the friction, reconnecting isolated modules into a single synchronized framework.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
