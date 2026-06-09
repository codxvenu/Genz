import { motion } from 'motion/react';
import { Sparkles, TrendingUp, Compass, Heart, Award, MessageCircle, Play } from 'lucide-react';

export default function Scene8GenZAdvantage() {
  const collageItems = [
    { title: 'Algorithms', desc: 'Decoding feed distributions.', position: 'sm:col-span-4 sm:row-span-1 border-violet-100 bg-violet-50/50', icon: Compass },
    { title: 'Digital Culture', desc: 'Where memes convert to pipelines.', position: 'sm:col-span-8 sm:row-span-1 bg-zinc-900 text-white border-zinc-800', icon: MessageCircle },
    { title: 'Creators', desc: 'Direct community relationships.', position: 'sm:col-span-7 sm:row-span-1 border-violet-100 bg-white shadow-soft', icon: Play },
    { title: 'Attention Arbitrage', desc: 'Capturing split-second interest.', position: 'sm:col-span-5 sm:row-span-2 bg-gradient-to-tr from-violet-100/30 to-purple-100/30 border-purple-150', icon: TrendingUp },
    { title: 'Trend Movements', desc: 'Scaling inside modern speed.', position: 'sm:col-span-4 sm:row-span-1 border-violet-150 bg-violet-600 text-white', icon: Sparkles },
    { title: 'Social Platforms', desc: 'Built where recommendations live.', position: 'sm:col-span-8 sm:row-span-1 border-zinc-200/50 bg-zinc-50/50', icon: Heart }
  ];

  return (
    <section 
      id="scene-genz-edge" 
      className="py-24 sm:py-32 bg-white relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[30%] left-[-10%] w-[350px] h-[350px] bg-violet-100/20 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper Badge */}
        <div className="flex justify-center mb-6">
          <span className="font-mono text-[9px] tracking-widest text-violet-750 uppercase font-extrabold border border-violet-100 bg-violet-50 px-3.5 py-1.5 rounded-full shadow-soft font-bold">
            The Native Quotient
          </span>
        </div>

        {/* Section Headline */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl text-zinc-900 font-extrabold tracking-tight leading-none">
            We Understand <span className="text-gradient-purple">Attention.</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-zinc-550 max-w-sm mx-auto font-normal leading-relaxed">
            Because we grew up where attention lives.
          </p>
        </div>

        {/* Bento Grid Collage */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 max-w-4xl mx-auto auto-rows-[120px] sm:auto-rows-[140px] items-stretch">
          {collageItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`p-6 rounded-[28px] border flex flex-col justify-between transition-all duration-300 pointer-events-auto select-none ${item.position}`}
              >
                <div className="flex justify-between items-center">
                  <Icon className="w-5 h-5 opacity-70 shrink-0" />
                  <span className="font-mono text-[8px] text-zinc-400 font-extrabold uppercase">TAG 0{idx+1}</span>
                </div>

                <div className="space-y-1 mt-auto">
                  <h3 className="font-sans text-sm sm:text-base font-black tracking-tight">{item.title}</h3>
                  <p className="font-sans text-[11px] opacity-75 font-normal leading-none">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
