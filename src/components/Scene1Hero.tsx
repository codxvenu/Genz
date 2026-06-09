import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onStartJourney: () => void;
}

export default function Scene1Hero({ onOpenBooking, onStartJourney }: HeroProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left - rect.width / 2,
        y: e.clientY - rect.top - rect.height / 2,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Soft floating nodes coordinates
  const nodes = [
    { id: 1, cx: -150, cy: -180, r: 84, duration: 6, color: 'bg-violet-100/30' },
    { id: 2, cx: 200, cy: -220, r: 120, duration: 8, color: 'bg-purple-100/30' },
    { id: 3, cx: -280, cy: 120, r: 110, duration: 10, color: 'bg-lavender-100/20' },
    { id: 4, cx: 310, cy: 140, r: 90, duration: 7, color: 'bg-violet-200/10' },
    { id: 5, cx: 0, cy: 260, r: 130, duration: 9, color: 'bg-indigo-100/20' },
  ];

  return (
    <section
      id="scene-hero"
      ref={containerRef}
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-center items-center bg-white overflow-hidden px-4 sm:px-6 lg:px-8 border-b border-violet-50/50"
    >
      {/* Background Interactive Nodes & Blur Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Soft violet radial mesh */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-violet-200/30 to-purple-200/20 rounded-full blur-[120px] mix-blend-multiply opacity-70" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-bl from-lavender-200/20 to-violet-100/30 rounded-full blur-[130px] mix-blend-multiply opacity-60" />

        {/* Mouse interactive parralax network container */}
        <motion.div
          animate={{
            x: mousePos.x * 0.05,
            y: mousePos.y * 0.05,
          }}
          transition={{ type: 'spring', damping: 25, stiffness: 120 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {nodes.map((node) => (
            <motion.div
              key={node.id}
              style={{
                top: `calc(50% + ${node.cy}px)`,
                left: `calc(50% + ${node.cx}px)`,
                width: node.r * 2,
                height: node.r * 2,
              }}
              animate={{
                y: [0, 15, -15, 0],
                x: [0, -10, 10, 0],
              }}
              transition={{
                duration: node.duration,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className={`absolute rounded-full pointer-events-none blur-3xl ${node.color}`}
            />
          ))}

          {/* Interactive Connective Lines Representation */}
          <div className="absolute w-[800px] h-[600px] opacity-[0.06] pointer-events-none select-none">
            <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path d="M100 150 L350 100 L250 450 L100 150 Z" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="5" />
              <path d="M350 100 L650 120 L550 480 L250 450" stroke="#8B5CF6" strokeWidth="2" />
              <path d="M650 120 L400 300" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="3" />
              <circle cx="100" cy="150" r="4" fill="#8B5CF6" />
              <circle cx="350" cy="100" r="6" fill="#8B5CF6" />
              <circle cx="250" cy="450" r="5" fill="#8B5CF6" />
              <circle cx="650" cy="120" r="7" fill="#8B5CF6" />
              <circle cx="550" cy="480" r="5" fill="#8B5CF6" />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Hero Content Column */}
      <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center justify-center space-y-8 select-none">
        
        {/* Subtle Luxury Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center space-x-2 bg-violet-50/50 border border-violet-100/60 px-4 py-1.5 rounded-full shadow-soft"
        >
          <Sparkles className="w-3.5 h-3.5 text-violet-550 animate-pulse" />
          <span className="font-mono text-[9px] tracking-widest text-violet-750 uppercase font-extrabold">
            GEN-Z BUSINESS AGENCY
          </span>
        </motion.div>

        {/* Main Mammoth Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-[44px] sm:text-6xl md:text-7xl lg:text-[84px] text-zinc-900 font-extrabold tracking-tight leading-[1.03] space-y-1"
        >
          We Don't Build Brands. <br />
          <span className="text-gradient-purple font-serif italic text-[40px] sm:text-[54px] md:text-[68px] lg:text-[76px] font-normal leading-[1.15]">
            We Build Businesses.
          </span>
        </motion.h1>

        {/* Sleek supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-sm sm:text-base md:text-lg text-zinc-500 font-light max-w-lg leading-relaxed"
        >
          GBA becomes the growth department behind ambitious companies.
        </motion.p>

        {/* Elegant Action Trigger and Sub-hint */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center space-y-4 pt-4"
        >
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white text-xs font-mono rounded-full font-bold tracking-widest uppercase transition-all shadow-md shadow-violet-200 active:scale-95 cursor-pointer block"
            >
              Start Growing
            </button>
            <button
              onClick={onStartJourney}
              className="px-7 py-4 bg-zinc-50 hover:bg-zinc-100 text-zinc-700 hover:text-zinc-900 text-xs font-mono rounded-full font-extrabold tracking-widest uppercase transition-all border border-zinc-200/60 flex items-center space-x-1.5 cursor-pointer"
            >
              <span>Scroll to Explore</span>
              <ArrowRight className="w-3.5 h-3.5 text-zinc-400 group-hover:translate-x-1 transition-transform animate-pulse" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Floating elegant bottom prompt indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1 cursor-pointer" onClick={onStartJourney}>
        <span className="font-mono text-[9px] tracking-wider text-zinc-400 uppercase font-medium animate-pulse">SCROLL STORY</span>
        <div className="w-[1.5px] h-6 bg-gradient-to-b from-violet-400 to-transparent rounded-full animate-float" />
      </div>
    </section>
  );
}
