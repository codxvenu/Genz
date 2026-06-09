import { useState } from 'react';
import { Quote, Sparkles, Star, ChevronRight, ChevronLeft, Award } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  const prevTestimonial = () => {
    setActiveIdx(prev => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveIdx(prev => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const activeTest = TESTIMONIALS[activeIdx] || TESTIMONIALS[0];

  return (
    <section 
      id="testimonials-section" 
      className="py-24 sm:py-32 bg-violet-50/20 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[-10%] w-[355px] h-[355px] bg-purple-100/30 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper Tag */}
        <div className="flex justify-center mb-6">
          <span className="font-mono text-[9px] tracking-widest text-violet-750 uppercase font-extrabold border border-violet-100 bg-violet-50 px-3.5 py-1.5 rounded-full shadow-soft">
            Founder Testimonials
          </span>
        </div>

        {/* Section Headline */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl text-zinc-900 font-extrabold tracking-tight leading-tight">
            The Trust Behind <br />
            <span className="text-gradient-purple">Our Growth Systems.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-zinc-550 font-normal leading-relaxed">
            Read direct narratives from industry leaders who scaled their brand authority and operational efficiency with GBA.
          </p>
        </div>

        {/* Main interactive slider block container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white border border-violet-100/80 rounded-[36px] p-6 sm:p-12 overflow-hidden shadow-premium">
            
            {/* Background semi-transparent Quote icon decoration */}
            <Quote className="absolute top-10 right-10 w-24 h-24 text-violet-100/20 pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Left Column: Profile Card */}
              <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left space-y-5">
                
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-violet-100/50 blur-[3px] scale-105" />
                  <img
                    src={activeTest.image}
                    alt={activeTest.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-violet-200 shadow-bold relative z-10"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="space-y-1">
                  <h4 className="font-sans text-lg font-extrabold text-zinc-900 leading-none">{activeTest.name}</h4>
                  <p className="font-mono text-[10px] text-zinc-400 font-bold mt-1">
                    {activeTest.role.toUpperCase()}, <span className="text-violet-605">{activeTest.company.toUpperCase()}</span>
                  </p>
                </div>

                {/* Star Ratings */}
                <div className="flex items-center space-x-1 justify-center lg:justify-start">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

              </div>

              {/* Right Column: Narrative Block */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6 lg:pl-6 border-t lg:border-t-0 lg:border-l border-violet-100/60 pt-6 lg:pt-0">
                
                {/* Specific custom feature label */}
                <div className="inline-flex self-center lg:self-start items-center space-x-2 bg-violet-50/85 px-3.5 py-1.5 rounded-full border border-violet-100">
                  <span className="w-1.5 h-1.5 bg-violet-500 rounded-full animate-pulse" />
                  <span className="font-mono text-[9px] uppercase tracking-wider font-extrabold text-violet-750">
                    {activeTest.highlight}
                  </span>
                </div>

                {/* Real quote block */}
                <p className="font-sans text-sm sm:text-base text-zinc-700 tracking-wide leading-relaxed italic text-center lg:text-left font-normal">
                  "{activeTest.quote}"
                </p>

                {/* Outcomes display row & arrows */}
                <div className="border-t border-violet-100/50 pt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  
                  <div className="space-y-0.5">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 font-bold">Verified Scalability Metric</span>
                    <h5 className="font-sans text-2xl font-black text-violet-600 leading-none">{activeTest.metric}</h5>
                    <p className="text-[10px] text-zinc-550 font-mono tracking-wide font-bold mt-1 uppercase">{activeTest.metricLabel}</p>
                  </div>

                  {/* Manual Carousel indicators */}
                  <div className="flex items-center space-x-2 self-center sm:self-auto">
                    <button
                      id="prev-testimonial-btn"
                      onClick={prevTestimonial}
                      className="p-2.5 w-10 h-10 flex items-center justify-center rounded-full border border-violet-100 bg-white hover:bg-violet-50 text-zinc-500 hover:text-violet-700 shadow-soft transition-all cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      id="next-testimonial-btn"
                      onClick={nextTestimonial}
                      className="p-2.5 w-10 h-10 flex items-center justify-center rounded-full border border-violet-100 bg-white hover:bg-violet-50 text-zinc-500 hover:text-violet-700 shadow-soft transition-all cursor-pointer"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
