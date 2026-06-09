import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';

interface FinalCtaProps {
  onOpenBooking: () => void;
}

export default function Scene10FinalCta({ onOpenBooking }: FinalCtaProps) {
  return (
    <section 
      id="scene-final-cta" 
      className="py-32 bg-black relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[130px]" />
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[400px] bg-purple-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center space-y-12 relative z-10 select-none">
        
        {/* Subtle upper token */}
        <div className="flex justify-center">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-[#A855F7] animate-pulse" />
            <span className="font-mono text-[9px] tracking-[0.25em] text-[#A1A1AA] uppercase font-bold">
              START THE ROADMAP
            </span>
          </div>
        </div>

        {/* Large Statement */}
        <div className="space-y-4">
          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-white font-normal tracking-tight leading-[1.05]">
            Ready To Build <br />
            <span className="text-gradient-purple italic font-normal">
              Something Bigger?
            </span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-zinc-500 font-light max-w-sm mx-auto leading-relaxed mt-2 tracking-wide uppercase">
            Let&apos;s engineer your growth apparatus cohesively.
          </p>
        </div>

        {/* Dynamic Launch Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenBooking}
            className="group flex items-center space-x-3 px-8 py-4 bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-[11px] font-mono tracking-widest uppercase rounded-full transition-all duration-300 shadow-lg shadow-purple-900/40 hover:scale-105 cursor-pointer"
          >
            <span>Book Strategy Call</span>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
