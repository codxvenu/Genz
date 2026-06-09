import { motion } from 'motion/react';

export default function Scene9CoreMessage() {
  return (
    <section 
      id="scene-core-message" 
      className="min-h-screen bg-violet-50/20 flex flex-col justify-center items-center py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden select-none"
    >
      {/* Abstract light purple background blur paths */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[40%] right-[-10%] w-[450px] h-[450px] bg-violet-100/35 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] left-[-15%] w-[400px] h-[400px] bg-purple-100/30 rounded-full blur-[90px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
        
        {/* Supporting tag */}
        <div className="flex justify-center mb-4">
          <span className="font-mono text-[9px] tracking-widest text-violet-750 uppercase font-extrabold border border-violet-100 bg-white px-3.5 py-1.5 rounded-full shadow-soft font-bold">
            The Golden Rule
          </span>
        </div>

        {/* Massive Headline Typography */}
        <div className="space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-sans text-[38px] sm:text-[62px] md:text-[76px] lg:text-[88px] text-zinc-900 font-extrabold tracking-tighter leading-[1.05]"
          >
            Most Agencies <br className="hidden sm:block" />
            <span className="text-zinc-400 font-serif italic font-normal text-[36px] sm:text-[56px] md:text-[68px] lg:text-[76px] tracking-tight mr-1">Sell Services.</span> <br />
            We Build <br className="hidden sm:block" />
            <span className="text-gradient-purple font-black">Growth Systems.</span>
          </motion.h2>
        </div>

      </div>

    </section>
  );
}
