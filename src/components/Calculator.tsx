import { useState } from 'react';
import { Target, Receipt, ArrowRight, Compass, Flame, Users } from 'lucide-react';

interface CalculatorProps {
  onOpenBooking: () => void;
}

export default function Calculator({ onOpenBooking }: CalculatorProps) {
  const [arrTarget, setArrTarget] = useState<number>(3); // ARR millions
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([
    'Branding & Storytelling', 'Lead Generation'
  ]);

  const toggleNeed = (need: string) => {
    setSelectedNeeds(prev => 
      prev.includes(need) ? prev.filter(n => n !== need) : [...prev, need]
    );
  };

  const getCalculations = () => {
    const complexityFactor = selectedNeeds.length * 0.45 + (arrTarget * 0.15);
    const timelineWeeks = Math.max(8, Math.floor(6 + complexityFactor * 3.5));
    const suggestedHeadcount = Math.max(1, Math.floor(1.5 + arrTarget * 0.8));
    const estimatedRoi = (3.2 + (selectedNeeds.length * 0.4)).toFixed(1);

    return {
      timelineWeeks,
      suggestedHeadcount,
      estimatedRoi
    };
  };

  const calcs = getCalculations();

  return (
    <section 
      id="calculator-section" 
      className="py-32 bg-black border-t border-white/5 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[20%] left-[-10%] w-[450px] h-[450px] bg-purple-900/5 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Upper Token */}
        <div className="flex justify-center mb-8">
          <span className="font-mono text-[9px] tracking-[0.25em] text-[#A1A1AA] uppercase font-bold border border-white/10 bg-white/5 px-4 py-1.5 rounded-full">
            INTERACTIVE MODELER
          </span>
        </div>

        {/* Header Title */}
        <div className="space-y-4 mb-20 text-center max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-normal tracking-tight">
            Model Your Scale Velocity
          </h2>
          <div className="w-16 h-[1px] bg-zinc-850 my-4" />
          <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light tracking-wide max-w-lg leading-relaxed">
            Specify your desired Annual Recurring Revenue goal and check your required pillars. Observe how our system models operational integration times instantly.
          </p>
        </div>

        {/* Calculator workspace layout */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Panel - Target & Pillars check */}
          <div className="lg:col-span-12 xl:col-span-7 bg-zinc-950/40 border border-white/5 w-full rounded-[20px] p-8 sm:p-10 space-y-10">
            
            {/* ARR Target Benchmark */}
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Target className="w-4 h-4 text-purple-400 animate-pulse" />
                  <span className="text-[10px] font-mono tracking-widest text-[#A1A1AA] uppercase font-bold">Revenue Benchmark Target</span>
                </div>
                <div className="font-mono text-xs text-zinc-400 font-bold">
                  ARR Target: <strong className="text-purple-400 text-lg font-serif font-normal">${arrTarget}M/yr</strong>
                </div>
              </div>
              
              <input
                id="arr-calculator-slider"
                type="range"
                min="1"
                max="15"
                step="1"
                value={arrTarget}
                onChange={(e) => setArrTarget(Number(e.target.value))}
                className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#7C3AED] block"
              />
              <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 font-bold">
                <span>$1M (Emergent Startup)</span>
                <span>$8M (Expansion Scale)</span>
                <span>$15M (Enterprise Anchor)</span>
              </div>
            </div>

            {/* Checkboxes Area */}
            <div className="space-y-5 pt-4 border-t border-white/5">
              <span className="text-[10px] font-mono tracking-widest text-[#A1A1AA] uppercase block font-bold">Active Capability Areas</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Branding & Storytelling',
                  'Social Media Marketing',
                  'Talent Placement / Recruitment',
                  'Lead Generation',
                  'Organizational Consulting',
                  'Location footprints'
                ].map((need) => {
                  const isChecked = selectedNeeds.includes(need);
                  return (
                    <button
                      key={need}
                      onClick={() => toggleNeed(need)}
                      className={`flex items-center p-4 rounded-xl border text-left transition-all text-xs font-sans cursor-pointer ${
                        isChecked 
                          ? 'bg-[#7C3AED]/10 border-purple-500/40 text-[#A855F7] font-bold shadow-soft' 
                          : 'bg-black border-white/5 text-zinc-400 hover:border-white/10'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded border mr-3 flex items-center justify-center transition-all ${
                        isChecked ? 'bg-[#7C3AED] border-[#7C3AED] text-white font-bold' : 'border-zinc-700'
                      }`}>
                        {isChecked && <span className="text-[9px] font-mono font-bold">✓</span>}
                      </div>
                      <span>{need}</span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Panel - Resulting Outputs */}
          <div className="lg:col-span-12 xl:col-span-5 flex flex-col justify-between p-8 sm:p-10 bg-zinc-950 border border-purple-500/10 rounded-[20px] relative overflow-hidden space-y-8 shadow-[0_0_50px_rgba(124,58,237,0.05)]">
            <div className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 bg-purple-500/5 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-8 relative z-10">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 bg-purple-550 rounded-full animate-pulse" />
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#A1A1AA] font-bold">Model System Specifications</span>
                </div>
                <Receipt className="w-4 h-4 text-purple-400" />
              </div>

              {/* Parameter results */}
              <div className="space-y-6">
                
                {/* Duration */}
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-bold block">Integration Pipeline Duration</span>
                    <h5 className="text-xs text-zinc-300">Full Scale Setup Time</h5>
                  </div>
                  <div className="text-right">
                    <span className="font-serif text-xl text-white font-normal">{calcs.timelineWeeks} Weeks</span>
                  </div>
                </div>

                {/* Staffing */}
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-bold block">Talent Placements</span>
                    <h5 className="text-xs text-zinc-300 font-light">Dedicated Core Operators</h5>
                  </div>
                  <div className="text-right">
                    <span className="font-serif text-xl text-white font-normal">{calcs.suggestedHeadcount} Operators</span>
                  </div>
                </div>

                {/* Return */}
                <div className="flex items-center justify-between font-normal">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-bold block">Projected ROI Quotient</span>
                    <h5 className="text-xs text-zinc-300 font-light">Approximate Leverage Rate</h5>
                  </div>
                  <div className="text-right">
                    <span className="font-serif text-[22px] text-purple-400 font-semibold">{calcs.estimatedRoi}x ROI</span>
                  </div>
                </div>

              </div>
            </div>

            {/* CTA action */}
            <div className="space-y-4 relative z-10 pt-4 border-t border-white/5">
              <button
                onClick={onOpenBooking}
                className="w-full py-4 bg-[#7C3AED] hover:bg-[#6D28D9] text-white hover:text-white text-[11px] font-mono tracking-widest uppercase rounded-full transition-all duration-300 shadow-lg shadow-purple-900/40 cursor-pointer flex items-center justify-center space-x-2"
              >
                <span>Request Custom Specs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <p className="font-mono text-[8px] text-zinc-500 text-center uppercase tracking-wider font-bold">
                Simulations calculated using standard organizational analytics.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
