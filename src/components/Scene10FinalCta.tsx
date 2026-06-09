import { motion } from 'motion/react';
import { Sparkles, Calendar, ArrowRight } from 'lucide-react';

interface FinalCtaProps {
  onOpenBooking: () => void;
}

export default function Scene10FinalCta({ onOpenBooking }: FinalCtaProps) {
  return (
    <section 
      id="scene-final-cta" 
      className="py-24 sm:py-36 bg-white relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute bottom-[-10%] right-[-10%] w-[380px] h-[380px] bg-violet-100/40 rounded-full blur-[90px]" />
        <div className="absolute top-[-10%] left-[-10%] w-[350px] h-[350px] bg-purple-50/40 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10 relative z-10 select-none">
        
        {/* Subtle upper token */}
        <div className="flex justify-center">
          <div className="inline-flex items-center space-x-2 bg-violet-50/60 border border-violet-100 px-4 py-1.5 rounded-full shadow-soft">
            <Sparkles className="w-4 h-4 text-violet-600 animate-spin" style={{ animationDuration: '6s' }} />
            <span className="font-mono text-[9px] tracking-widest text-violet-755 uppercase font-bold">
              START THE ROADMAP
            </span>
          </div>
        </div>

        {/* Large Statement */}
        <div className="space-y-4">
          <h2 className="font-sans text-4xl sm:text-5xl lg:text-7xl text-zinc-900 font-extrabold tracking-tight leading-none uppercase">
            Ready To Build <br />
            <span className="text-gradient-purple font-serif italic font-normal tracking-wide text-3xl sm:text-5xl lg:text-6xl lowercase">
              something bigger?
            </span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-zinc-500 font-light max-w-sm mx-auto leading-relaxed mt-2 uppercase tracking-wide">
            Let's grow together.
          </p>
        </div>

        {/* Dynamic Launch Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white text-xs font-mono rounded-full font-bold tracking-widest uppercase transition-all shadow-md shadow-violet-200 cursor-pointer hover:scale-[1.02] active:scale-95"
          >
            Book Strategy Call
          </button>
          
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 bg-zinc-50 border border-zinc-200 hover:bg-zinc-100 text-zinc-700 text-xs font-mono rounded-full font-bold tracking-widest uppercase transition-all flex items-center justify-center space-x-2 cursor-pointer"
          >
            <span>Custom Interactive Model</span>
            <ArrowRight className="w-4 h-4 text-zinc-400" />
          </button>
        </div>

      </div>
    </section>
  );
}
