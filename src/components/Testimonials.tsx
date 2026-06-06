import { useState } from 'react';
import { Quote, Sparkles, Star, ChevronRight, ChevronLeft } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  const prevTestimonial = () => {
    setActiveIdx(prev => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveIdx(prev => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const activeTest = TESTIMONIALS[activeIdx];

  return (
    <section 
      id="testimonials-section" 
      className="py-20 sm:py-28 bg-black/95 border-t border-zinc-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header summary text */}
        <div className="space-y-4 mb-16 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-2">
            <span className="w-1 h-3 bg-zinc-500 rounded-full" />
            <span className="font-mono text-[10px] tracking-widest text-zinc-400 uppercase">Case Ledger Evidence</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-white tracking-wide">
            Proven Performance Ledger
          </h2>
          <p className="text-sm text-zinc-400 font-light leading-relaxed">
            Real founders, real statistics, compounding value. When physical or digital brands scale with Gen-Z, the results speak for themselves.
          </p>
        </div>

        {/* Highlight Deck container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative glass border border-white/10 rounded-3xl p-6 sm:p-12 overflow-hidden shadow-2xl">
            
            {/* Background luxury subtle logo */}
            <Quote className="absolute top-8 right-8 w-24 h-24 text-white/5 pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Left Column: Metric highlight indicator and avatar profile */}
              <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left space-y-5">
                
                {/* Micro avatar framed with high-end border */}
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 to-transparent blur-[2px]" />
                  <img
                    src={activeTest.image}
                    alt={activeTest.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border border-white/15 shadow-xl"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="space-y-1">
                  <h4 className="font-serif text-lg text-white font-medium">{activeTest.name}</h4>
                  <p className="font-mono text-xs text-zinc-500">{activeTest.role}, <span className="text-zinc-400">{activeTest.company}</span></p>
                </div>

                {/* Stars visual rate */}
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} className="w-3.5 h-3.5 fill-white text-white" />
                  ))}
                </div>

              </div>

              {/* Right Column: Concrete Quote text and dynamic statistic metric banner */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6 lg:pl-4">
                
                {/* Highlights tag */}
                <div className="inline-flex self-center lg:self-start items-center space-x-2 bg-white/5 px-3.5 py-1.5 rounded-full border border-white/10">
                  <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full" />
                  <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-350">
                    {activeTest.highlight}
                  </span>
                </div>

                <p className="font-serif text-base sm:text-lg text-zinc-200 tracking-wide leading-relaxed italic text-center lg:text-left">
                  "{activeTest.quote}"
                </p>

                {/* Core result indicator panel */}
                <div className="border-t border-white/10 pt-5 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-500">Audited Growth Result</span>
                    <h5 className="font-mono text-2xl font-bold text-white tracking-tight">{activeTest.metric}</h5>
                    <p className="text-[10px] text-zinc-400 font-sans">{activeTest.metricLabel}</p>
                  </div>

                  {/* Manual Navigator controls */}
                  <div className="flex items-center space-x-2">
                    <button
                      id="prev-testimonial-btn"
                      onClick={prevTestimonial}
                      className="p-2 w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 bg-white/3 hover:bg-white/5 text-zinc-400 hover:text-white transition-all cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      id="next-testimonial-btn"
                      onClick={nextTestimonial}
                      className="p-2 w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 bg-white/3 hover:bg-white/5 text-zinc-400 hover:text-white transition-all cursor-pointer"
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
