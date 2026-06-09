import { motion } from 'motion/react';

export default function Scene9CoreMessage() {
  return (
    <section 
      id="scene-core-message" 
      className="min-h-screen bg-black flex flex-col justify-center items-center py-24 px-6 sm:px-8 relative overflow-hidden select-none"
    >
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        
        {/* Support Token */}
        <div className="flex justify-center mb-6">
          <span className="font-mono text-[9px] tracking-[0.25em] text-[#A1A1AA] uppercase font-bold border border-white/10 bg-white/5 px-4 py-1.5 rounded-full">
            THE DOGMA OF SCALE
          </span>
        </div>

        {/* Massive Headline Typography */}
        <div className="space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[42px] sm:text-[68px] md:text-[84px] lg:text-[100px] text-white font-normal tracking-tight leading-[1.05]"
          >
            Most Agencies <br className="hidden sm:block" />
            <span className="text-zinc-500 italic font-normal">Sell Services.</span> <br />
            We Build <br className="hidden sm:block" />
            <span className="text-gradient-purple font-normal italic">Growth Systems.</span>
          </motion.h2>
        </div>

      </div>
    </section>
  );
}
