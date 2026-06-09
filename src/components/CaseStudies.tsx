import { motion } from 'motion/react';
import { CASE_STUDIES } from '../data';
import { Award, ArrowUpRight } from 'lucide-react';

export default function CaseStudies() {
  return (
    <section 
      id="case-studies-section" 
      className="py-24 sm:py-32 bg-white relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-[10%] left-[-10%] w-[350px] h-[350px] bg-violet-100/30 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper Badge */}
        <div className="flex justify-center mb-6">
          <span className="font-mono text-[9px] tracking-widest text-violet-750 uppercase font-extrabold border border-violet-100 bg-violet-50 px-3.5 py-1.5 rounded-full shadow-soft">
            Proven Outcomes
          </span>
        </div>

        {/* Section Headline */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl text-zinc-900 font-extrabold tracking-tight leading-tight">
            Elite Operational <br />
            <span className="text-gradient-purple">Case Studies.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-zinc-550 font-normal leading-relaxed">
            Observe the numeric gains achieved when ambitious businesses swap fragmented vendors for a unified growth department.
          </p>
        </div>

        {/* Premium Case Study Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {CASE_STUDIES.map((cs, idx) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white rounded-[32px] border border-violet-100 overflow-hidden hover:border-violet-300 shadow-soft hover:shadow-premium transition-all duration-300 flex flex-col justify-between group h-full"
            >
              
              {/* Card Image Area with Metric Layer */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={cs.image} 
                  alt={cs.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                
                {/* Metric Overlay Badge */}
                <div className="absolute bottom-4 left-4 bg-violet-600 text-white px-4.5 py-2.5 rounded-2xl border border-white font-mono text-sm sm:text-base font-extrabold shadow-lg">
                  {cs.metric}
                </div>
              </div>

              {/* Card Text Content Area */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <span className="font-mono text-[9px] text-violet-700 tracking-wider uppercase font-extrabold">
                    {cs.category}
                  </span>
                  
                  <h3 className="font-sans text-lg font-extrabold text-zinc-900 group-hover:text-violet-700 transition-colors leading-snug">
                    {cs.title}
                  </h3>
                  
                  <p className="font-sans text-xs sm:text-sm text-zinc-500 font-normal leading-relaxed">
                    {cs.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-violet-50 flex items-center justify-between text-[11px] font-mono font-bold text-violet-600 uppercase tracking-widest">
                  <span>View Full Narrative</span>
                  <div className="w-6 h-6 rounded-full bg-violet-50 text-violet-600 flex items-center justify-center group-hover:bg-violet-600 group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
