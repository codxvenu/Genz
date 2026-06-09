import { motion } from 'motion/react';
import { Flame, Compass, Heart, Award, ArrowUpRight } from 'lucide-react';

export default function WhyGenZ() {
  const values = [
    {
      title: 'Attention Native',
      desc: 'We do not read manuals about modern social media; we built it. We know how to capture high-density interest instantly.',
      icon: Flame
    },
    {
      title: 'Algorithm Aligned',
      desc: 'We map organic search, feed recommendation models, and outbound indexing to boost direct pipeline ROI.',
      icon: Compass
    },
    {
      title: 'Culture Driven',
      desc: 'We are embedded inside modern purchasing culture. We write words that persuade, engage, and trigger action.',
      icon: Heart
    }
  ];

  return (
    <section 
      id="genz-philosophy-section" 
      className="py-24 sm:py-32 bg-gradient-to-b from-violet-50/50 to-white relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[30%] right-[-10%] w-[380px] h-[380px] bg-purple-100/30 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Block text column */}
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center space-x-2 bg-violet-150/40 border border-violet-200/50 rounded-full px-4 py-1.5 shadow-soft">
              <Award className="w-4 h-4 text-violet-600 animate-pulse" />
              <span className="font-mono text-[9px] tracking-widest text-violet-750 uppercase font-extrabold">The Gen-Z Advantage</span>
            </div>

            <div className="space-y-4">
              <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl text-zinc-900 font-extrabold tracking-tight leading-tight">
                Internet Native. <br />
                Culture Driven. <br />
                <span className="text-gradient-purple">Growth Obsessed.</span>
              </h2>
              
              <p className="font-sans text-sm sm:text-base text-zinc-650 leading-relaxed font-normal">
                We grew up understanding attention, algorithms, digital behavior, and modern consumer culture. That gives us a unique advantage in helping businesses grow in today's world.
              </p>
            </div>

            {/* Custom vector timeline badge */}
            <div className="p-5 rounded-2xl bg-violet-600 text-white shadow-premium">
              <h4 className="font-mono text-xs uppercase tracking-wider font-extrabold mb-1">Attention Arbitrage Strategy</h4>
              <p className="text-xs text-violet-100 font-medium">To scale in 2026, you cannot operate with 2012 marketing playbooks. GBA constructs high-converting loops designed for active platforms.</p>
            </div>
          </div>

          {/* Right pillars column */}
          <div className="lg:col-span-6 space-y-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 rounded-[28px] bg-white border border-violet-100/50 hover:border-violet-300 shadow-soft hover:shadow-premium transition-all duration-300 flex items-start space-x-4"
                >
                  <div className="p-3 bg-violet-50 rounded-2xl border border-violet-100 text-violet-600">
                    <Icon className="w-5 h-5 text-violet-600" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-sans text-base font-extrabold text-zinc-900">{val.title}</h3>
                    <p className="font-sans text-xs sm:text-sm text-zinc-500 font-normal leading-normal">{val.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
