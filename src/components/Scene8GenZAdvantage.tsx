import { motion } from 'motion/react';
import { Compass, MessageSquare, Play, Flame, Cpu, Users } from 'lucide-react';

export default function Scene8GenZAdvantage() {
  const collageItems = [
    { title: 'Algorithms', desc: 'Decoding modern recommendations.', position: 'sm:col-span-4 sm:row-span-1 border-white/5 bg-zinc-950/50 text-zinc-300', icon: Compass },
    { title: 'Digital Culture', desc: 'Where memes evolve into sales pipelines.', position: 'sm:col-span-8 sm:row-span-1 bg-zinc-900/60 text-white border-purple-500/10 shadow-[0_0_30px_rgba(124,58,237,0.05)]', icon: MessageSquare },
    { title: 'Creators', desc: 'Real native visual authority.', position: 'sm:col-span-7 sm:row-span-1 border-white/5 bg-zinc-950/50 text-zinc-300', icon: Play },
    { title: 'Attention Arbitrage', desc: 'Capturing split-second digital interest.', position: 'sm:col-span-12 md:col-span-5 sm:row-span-2 bg-gradient-to-br from-purple-950/20 to-black border-purple-500/20 text-white', icon: Flame },
    { title: 'Technology Layer', desc: 'Sprinting inside automated processes.', position: 'sm:col-span-7 md:col-span-4 sm:row-span-1 border-[#7C3AED]/20 bg-[#7C3AED]/5 text-purple-300', icon: Cpu },
    { title: 'Modern Communities', desc: 'Built where organic traffic nests.', position: 'sm:col-span-12 md:col-span-8 sm:row-span-1 border-white/5 bg-zinc-950/50 text-zinc-300', icon: Users }
  ];

  return (
    <section 
      id="scene-genz-edge" 
      className="py-32 bg-black relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[25%] left-[-5%] w-[450px] h-[450px] bg-purple-900/5 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Upper Token */}
        <div className="flex justify-center mb-8">
          <span className="font-mono text-[9px] tracking-[0.25em] text-[#A1A1AA] uppercase font-bold border border-white/10 bg-white/5 px-4 py-1.5 rounded-full">
            THE ATTENTION COEFFICIENT
          </span>
        </div>

        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20 flex flex-col items-center">
          <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white font-normal tracking-tight leading-none">
            We Understand <br />
            <span className="text-gradient-purple italic font-normal">Attention.</span>
          </h2>
          <div className="w-16 h-[1px] bg-zinc-800 my-4" />
          <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light tracking-wide max-w-md mx-auto leading-relaxed">
            Because we grew up where attention lives.
          </p>
        </div>

        {/* Bento Grid Collage */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 max-w-5xl mx-auto auto-rows-[130px] sm:auto-rows-[150px] items-stretch">
          {collageItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 0.9, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                whileHover={{ y: -5, opacity: 1, borderColor: 'rgba(168, 85, 247, 0.3)', transition: { duration: 0.2 } }}
                className={`p-8 rounded-[20px] border flex flex-col justify-between transition-all duration-300 pointer-events-auto select-none ${item.position}`}
              >
                <div className="flex justify-between items-center">
                  <Icon className="w-5 h-5 text-purple-400 opacity-80 shrink-0" />
                  <span className="font-mono text-[8px] text-zinc-500 font-bold uppercase tracking-wider">TAG 0{idx+1}</span>
                </div>

                <div className="space-y-1.5 mt-auto">
                  <h3 className="font-serif text-lg sm:text-xl font-normal tracking-tight text-white">{item.title}</h3>
                  <p className="font-sans text-xs text-zinc-400 font-light leading-snug">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
