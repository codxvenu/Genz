import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

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
        x: (e.clientX - rect.left - rect.width / 2) * 0.03,
        y: (e.clientY - rect.top - rect.height / 2) * 0.03,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="scene-hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center items-center bg-black overflow-hidden px-4 sm:px-6 lg:px-8 select-none"
    >
      {/* Background Cinematic image + purple gradient overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{
            x: mousePos.x,
            y: mousePos.y,
            scale: 1.05
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 80 }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1800"
            alt="Luxury Cinematic Space"
            className="w-full h-full object-cover filter brightness-[0.25] contrast-[1.15]"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        {/* Aggressive radial and atmospheric gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/90 to-black z-10" />
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-900/15 rounded-full blur-[140px] mix-blend-screen pointer-events-none z-10 animate-pulse-soft" />
      </div>

      {/* Hero Content Area */}
      <div className="relative z-20 text-center max-w-5xl mx-auto flex flex-col items-center justify-center space-y-10 px-4">
        
        {/* Sleek Minimal Token */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center space-x-2 border border-white/10 bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-full"
        >
          <span className="w-1.5 h-1.5 bg-[#7C3AED] rounded-full animate-ping" />
          <span className="font-mono text-[9px] tracking-[0.3em] text-[#A1A1AA] uppercase font-bold">
            GBA // ELITE GROWTH PARTNER
          </span>
        </motion.div>

        {/* Massive Serif Editorial Headline */}
        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[48px] sm:text-7xl md:text-8xl lg:text-[110px] text-white font-normal tracking-tight leading-[0.95]"
          >
            Growth <br />
            <span className="text-gradient-purple italic font-normal text-[44px] sm:text-[68px] md:text-[84px] lg:text-[105px]">
              Is Not An Accident.
            </span>
          </motion.h1>
        </div>

        {/* Minimal Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-xs sm:text-sm md:text-base text-zinc-400 font-light max-w-md tracking-wider leading-relaxed"
        >
          GBA becomes the growth department behind ambitious companies.
        </motion.p>

        {/* Minimal CTA Trigger */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="pt-4 flex flex-col sm:flex-row items-center gap-4"
        >
          <button
            onClick={onOpenBooking}
            className="group flex items-center space-x-3 px-8 py-4 bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-[11px] font-mono tracking-widest uppercase rounded-full transition-all duration-300 shadow-lg shadow-purple-900/40 hover:scale-105 cursor-pointer"
          >
            <span>Start Growing</span>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1.5 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 cursor-pointer z-20"
        onClick={onStartJourney}
      >
        <span className="font-mono text-[8px] tracking-[0.3em] text-[#A1A1AA] uppercase font-bold hover:text-white transition-colors">
          REVEAL NARRATIVE
        </span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-white to-transparent opacity-40 animate-pulse" />
      </div>
    </section>
  );
}
