import { motion } from 'motion/react';
import { AlertTriangle, ShieldCheck } from 'lucide-react';

export default function Scene6Transformation() {
  return (
    <section 
      id="scene-transformation" 
      className="py-32 bg-black relative overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Upper Token */}
        <div className="flex justify-center mb-8">
          <span className="font-mono text-[9px] tracking-[0.25em] text-[#A1A1AA] uppercase font-bold border border-white/10 bg-white/5 px-4 py-1.5 rounded-full">
            THE STRUCTURAL CONTRAST
          </span>
        </div>

        {/* Section Headline with Massive typography */}
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-20 flex flex-col items-center">
          <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white font-normal tracking-tight leading-[0.95]">
            From Chaos <br />
            <span className="text-gradient-purple italic font-normal">To Growth.</span>
          </h2>
          <div className="w-16 h-[1px] bg-zinc-800 my-4" />
          <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light tracking-wide max-w-lg leading-relaxed">
            Witness the operational friction of isolated departments versus GBA's singular growth apparatus.
          </p>
        </div>

        {/* Split Screen Matrix Panel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Left panel: CHAOS */}
          <div className="bg-zinc-950/40 border border-red-950/30 rounded-[20px] p-8 sm:p-12 flex flex-col justify-between overflow-hidden relative group">
            {/* Red alarm overlay glow */}
            <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#ef4444_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center space-x-1 py-1.5 px-3 bg-red-950/20 border border-red-900/20 rounded-full">
                  <AlertTriangle className="w-3 h-3 text-red-500" />
                  <span className="font-mono text-[8px] uppercase tracking-wider text-red-400 font-bold">THE SILO METHOD</span>
                </div>
                <span className="font-mono text-[9px] text-zinc-650 tracking-widest uppercase font-bold">CHAOTIC</span>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-zinc-300">Disconnected. Messy. Complex.</h3>
                <p className="font-sans text-xs sm:text-sm text-zinc-500 leading-relaxed font-light">
                  Draining cash flow on multiple fragmented agencies, misaligned operators, isolated marketing structures, and non-authoritative branding that loses trust instantly.
                </p>
              </div>
            </div>

            {/* Silo chaotic visualization */}
            <div className="mt-12 bg-black border border-white/5 rounded-xl p-6 h-56 flex items-center justify-center relative overflow-hidden">
              <div className="relative w-40 h-40">
                <motion.div 
                  animate={{
                    x: [0, -3, 3, -1, 4, -2, 0],
                    y: [0, 2, -4, 3, -1, 2, 0]
                  }}
                  transition={{ duration: 0.3, repeat: Infinity, ease: 'linear' }}
                  className="absolute top-4 left-4 w-12 h-12 rounded-full border border-red-500/25 bg-red-950/20 flex flex-col items-center justify-center font-mono text-[8px] text-red-400 font-semibold"
                >
                  <span>Silo A</span>
                </motion.div>
                <motion.div 
                  animate={{
                    x: [0, 4, -2, 3, -1, 0],
                    y: [0, -3, 3, -2, 2, 0]
                  }}
                  transition={{ duration: 0.4, repeat: Infinity, ease: 'linear' }}
                  className="absolute bottom-6 right-4 w-14 h-14 rounded-full border border-red-500/25 bg-red-950/20 flex flex-col items-center justify-center font-mono text-[8px] text-red-400 font-semibold"
                >
                  <span>Silo B</span>
                </motion.div>
                <motion.div 
                  animate={{
                    x: [0, -2, 2, -3, 1, 0],
                    y: [0, 4, -2, 1, -3, 0]
                  }}
                  transition={{ duration: 0.5, repeat: Infinity, ease: 'linear' }}
                  className="absolute top-6 right-8 w-11 h-11 rounded-full border border-red-500/25 bg-red-950/20 flex flex-col items-center justify-center font-mono text-[8px] text-red-400 font-semibold"
                >
                  <span>Silo C</span>
                </motion.div>
              </div>
            </div>

          </div>

          {/* Right panel: THE GBA SYSTEM */}
          <div className="bg-zinc-950 border border-purple-500/10 rounded-[20px] p-8 sm:p-12 flex flex-col justify-between overflow-hidden relative shadow-[0_0_50px_rgba(124,58,237,0.05)] group">
            {/* Elegant purple overlay */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#7C3AED]/5 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center space-x-1 py-1.5 px-3 bg-purple-950/20 border border-purple-900/20 rounded-full">
                  <ShieldCheck className="w-3 h-3 text-purple-400 animate-pulse" />
                  <span className="font-mono text-[8px] uppercase tracking-wider text-purple-300 font-bold">GBA FRAMEWORK</span>
                </div>
                <span className="font-mono text-[9px] text-[#A855F7] tracking-widest uppercase font-bold">STRUCTURED</span>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white">Structured. Connected. Growing.</h3>
                <p className="font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                  All levers in harmony. A single, dedicated growth partner taking care of brand design, performance advertising, elite placements, and macro strategic systems cohesively.
                </p>
              </div>
            </div>

            {/* GBA organized system visualizer */}
            <div className="mt-12 bg-black border border-white/5 rounded-xl p-6 h-56 flex items-center justify-center relative overflow-hidden">
              <div className="relative w-40 h-40 flex items-center justify-center">
                <div className="absolute inset-0 border border-purple-500/10 rounded-full" />
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-4 border border-dashed border-purple-500/20 rounded-full"
                />
                
                {/* Clockwork connecting active nodes */}
                <div className="absolute top-0 w-3.5 h-3.5 rounded-full bg-[#7C3AED] shadow-2xl flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                </div>
                <div className="absolute bottom-4 left-2 w-2.5 h-2.5 rounded-full bg-[#7C3AED]" />
                <div className="absolute bottom-4 right-2 w-3 h-3 rounded-full bg-[#A855F7]" />

                <div className="w-14 h-14 bg-black border border-purple-500/30 rounded-full flex items-center justify-center text-white font-serif text-xs font-normal shadow-[0_0_20px_rgba(124,58,237,0.15)] relative">
                  GBA
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
