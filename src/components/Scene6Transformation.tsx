import { motion } from 'motion/react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

export default function Scene6Transformation() {
  return (
    <section 
      id="scene-transformation" 
      className="py-24 sm:py-32 bg-white relative overflow-hidden border-b border-violet-50/50"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-100 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper Badge */}
        <div className="flex justify-center mb-6">
          <span className="font-mono text-[9px] tracking-widest text-violet-750 uppercase font-extrabold border border-violet-100 bg-violet-50 px-3.5 py-1.5 rounded-full shadow-soft font-bold">
            The Structural Pivot
          </span>
        </div>

        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl text-zinc-900 font-extrabold tracking-tight leading-none">
            From Complexity <span className="text-gradient-purple">To Clarity.</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-zinc-500 font-normal leading-relaxed">
            Witness the operational contrast of standard corporate segmentation versus GBA's synchronized scaling matrix.
          </p>
        </div>

        {/* Split Screen Matrix Panel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Left panel: CHAOS */}
          <div className="bg-zinc-50 border border-zinc-200/50 rounded-[32px] p-6 sm:p-10 flex flex-col justify-between overflow-hidden relative group">
            {/* Chaotic background line nodes */}
            <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#ef4444_1px,transparent_1px)] bg-[size:14px_14px]" />

            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-red-50 border border-red-100 rounded-full font-bold">
                  <AlertCircle className="w-3.5 h-3.5 text-red-500" />
                  <span className="font-mono text-[9px] uppercase tracking-widest text-red-700">LEGACY SYSTEM</span>
                </div>
                <span className="font-mono text-xs text-zinc-400 font-black">CHAOS</span>
              </div>
              <h3 className="font-sans text-xl sm:text-2xl font-extrabold text-zinc-800 tracking-tight leading-none">Fragmented Scarcity</h3>
              <p className="font-sans text-xs sm:text-sm text-zinc-450 leading-relaxed font-normal">
                Draining resources on multiple misaligned contractors, slow communication channels, stale data silos, and decaying conversion loops.
              </p>
            </div>

            {/* Chaotic graphics preview area */}
            <div className="mt-8 bg-zinc-100/50 border border-zinc-200/40 rounded-2xl p-6 h-56 flex items-center justify-center relative overflow-hidden">
              {/* Shaking disconnected circles */}
              <div className="relative w-40 h-40">
                <motion.div 
                  animate={{
                    x: [0, -3, 3, -1, 4, -2, 0],
                    y: [0, 2, -4, 3, -1, 2, 0]
                  }}
                  transition={{ duration: 0.4, repeat: Infinity, ease: 'linear' }}
                  className="absolute top-4 left-4 w-12 h-12 rounded-full border border-red-300 bg-red-55/65 flex items-center justify-center font-mono text-[9px] text-red-650 font-black uppercase"
                >
                  Silo A
                </motion.div>
                <motion.div 
                  animate={{
                    x: [0, 4, -2, 3, -1, 0],
                    y: [0, -3, 3, -2, 2, 0]
                  }}
                  transition={{ duration: 0.5, repeat: Infinity, ease: 'linear' }}
                  className="absolute bottom-6 right-4 w-14 h-14 rounded-full border border-orange-300 bg-orange-55/65 flex items-center justify-center font-mono text-[9px] text-orange-655 font-black uppercase"
                >
                  Silo B
                </motion.div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1.5px] h-20 bg-dashed bg-red-200/50" />
                <motion.div 
                  animate={{
                    x: [0, -2, 2, -3, 1, 0],
                    y: [0, 4, -2, 1, -3, 0]
                  }}
                  transition={{ duration: 0.6, repeat: Infinity, ease: 'linear' }}
                  className="absolute top-6 right-8 w-11 h-11 rounded-full border border-rose-300 bg-rose-55/65 flex items-center justify-center font-mono text-[9px] text-rose-650 font-black uppercase"
                >
                  Silo C
                </motion.div>
              </div>
            </div>

          </div>

          {/* Right panel: THE GBA CLARITY SYSTEM */}
          <div className="bg-white border border-violet-100 rounded-[32px] p-6 sm:p-10 flex flex-col justify-between overflow-hidden relative shadow-premium group">
            {/* Elegant gradient overlay */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-violet-100/20 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-violet-50 border border-violet-100 rounded-full font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-violet-605" />
                  <span className="font-mono text-[9px] uppercase tracking-widest text-violet-755">GBA FRAMEWORK</span>
                </div>
                <span className="font-mono text-xs text-violet-600 font-extrabold">CLARITY</span>
              </div>
              <h3 className="font-sans text-xl sm:text-2xl font-extrabold text-zinc-900 tracking-tight leading-none">Coordinated Velocity</h3>
              <p className="font-sans text-xs sm:text-sm text-zinc-500 leading-relaxed font-normal">
                All departments align. One cohesive partner handling branding, targeting campaigns, onboarding specialists, and strategic operations under a unified engine.
              </p>
            </div>

            {/* Organized system graphics */}
            <div className="mt-8 bg-violet-50/20 border border-violet-100/50 rounded-2xl p-6 h-56 flex items-center justify-center relative overflow-hidden">
              {/* Perfectly calm connected circles */}
              <div className="relative w-40 h-40 flex items-center justify-center">
                <div className="absolute inset-0 border border-violet-100/80 rounded-full" />
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-4 border border-dashed border-violet-200/85 rounded-full"
                />
                
                {/* Connecting active nodes */}
                <div className="absolute top-0 w-4 h-4 rounded-full bg-violet-600 shadow-bold flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                </div>
                <div className="absolute bottom-4 left-2 w-3 h-3 rounded-full bg-violet-600" />
                <div className="absolute bottom-4 right-2 w-3.5 h-3.5 rounded-full bg-violet-500" />

                <div className="w-14 h-14 bg-violet-600 rounded-full flex items-center justify-center text-white font-mono text-xs font-black shadow-premium">
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
