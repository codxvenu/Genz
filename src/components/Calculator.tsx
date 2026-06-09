import { useState } from 'react';
import { Target, Users, Hourglass, TrendingUp, Sparkles, Receipt, ArrowRight } from 'lucide-react';

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
      className="py-24 sm:py-32 bg-white border-t border-violet-100 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] bg-violet-100/30 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper Badge */}
        <div className="flex justify-center mb-6">
          <span className="font-mono text-[9px] tracking-widest text-violet-750 uppercase font-extrabold border border-violet-100 bg-violet-50 px-3.5 py-1.5 rounded-full shadow-soft font-bold">
            Interactive Modeler
          </span>
        </div>

        {/* Header Title */}
        <div className="space-y-4 mb-16 text-center max-w-2xl mx-auto">
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl text-zinc-900 font-extrabold tracking-tight leading-zero">
            Model Your Scale Velocity
          </h2>
          <p className="font-sans text-sm sm:text-base text-zinc-550 leading-relaxed font-normal">
            Specify your desired Annual Recurring Revenue goal and check your required pillars. Observe how our system models operational integration times and specs immediately.
          </p>
        </div>

        {/* Calculator workspace layout */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Panel - Target & Pillars check */}
          <div className="lg:col-span-12 xl:col-span-7 bg-white border border-violet-100/80 w-full rounded-[32px] p-6 sm:p-8 space-y-8 shadow-soft">
            
            {/* ARR Target Benchmark */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Target className="w-4 h-4 text-violet-605 animate-pulse" />
                  <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase font-extrabold">Revenue Benchmark Target</span>
                </div>
                <div className="font-mono text-xs text-zinc-500 font-bold">
                  ARR Target: <strong className="text-violet-700 text-base">${arrTarget}M/yr</strong>
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
                className="w-full h-1.5 bg-violet-100 rounded-lg appearance-none cursor-pointer accent-violet-600 block"
              />
              <div className="flex items-center justify-between text-[10px] font-mono text-zinc-455 font-bold">
                <span>$1M (Emergent Startup)</span>
                <span>$8M (Expansion Scale)</span>
                <span>$15M (Enterprise Anchor)</span>
              </div>
            </div>

            {/* Checkboxes Area */}
            <div className="space-y-4 pt-2">
              <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase block font-extrabold">Active Capability Areas</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                      className={`flex items-center p-3.5 rounded-2xl border text-left transition-all text-xs font-sans cursor-pointer ${
                        isChecked 
                          ? 'bg-violet-55 border-violet-350 text-violet-700 font-extrabold shadow-soft bg-violet-50/50' 
                          : 'bg-white border-violet-100 text-zinc-650 hover:border-violet-200'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded border mr-3 flex items-center justify-center transition-all ${
                        isChecked ? 'bg-violet-600 border-violet-600 text-white font-extrabold' : 'border-violet-200'
                      }`}>
                        {isChecked && <span className="text-[9px]">✓</span>}
                      </div>
                      <span>{need}</span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Panel - Resulting Outputs */}
          <div className="lg:col-span-12 xl:col-span-5 flex flex-col justify-between p-6 sm:p-8 bg-white border border-violet-100/80 rounded-[32px] relative overflow-hidden space-y-8 shadow-premium">
            <div className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 bg-violet-100/20 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between border-b border-violet-100 pb-3">
                <div className="flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 font-extrabold">Model System Specifications</span>
                </div>
                <Receipt className="w-4 h-4 text-violet-600" />
              </div>

              {/* Parameter results */}
              <div className="space-y-5">
                
                {/* Duration */}
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-405 font-bold block">Integration Pipeline Duration</span>
                    <h5 className="text-xs sm:text-sm text-zinc-550 leading-none">Full Scale Setup Time</h5>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-lg sm:text-xl text-violet-700 font-extrabold">{calcs.timelineWeeks} Weeks</span>
                  </div>
                </div>

                {/* Staffing */}
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-405 font-bold block">Talent Placements</span>
                    <h5 className="text-xs sm:text-sm text-zinc-555 leading-none">Dedicated Core Operators</h5>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-lg sm:text-xl text-violet-700 font-extrabold">{calcs.suggestedHeadcount} Headcount</span>
                  </div>
                </div>

                {/* Return */}
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-405 font-bold block">Projected ROI Quotient</span>
                    <h5 className="text-xs sm:text-sm text-zinc-555 leading-none">Approximate Leverage Rate</h5>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-lg sm:text-xl text-violet-705 font-extrabold">{calcs.estimatedRoi}x ROI</span>
                  </div>
                </div>

              </div>
            </div>

            {/* CTA action */}
            <div className="space-y-3 relative z-10">
              <button
                onClick={onOpenBooking}
                className="w-full py-4 bg-violet-600 text-white hover:bg-violet-700 text-xs font-mono rounded-full font-bold tracking-widest uppercase transition-all shadow-md shadow-violet-200 cursor-pointer flex items-center justify-center space-x-1"
              >
                <span>Request Custom Specs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <p className="font-mono text-[9px] text-zinc-400 text-center uppercase tracking-wider font-semibold">
                Simulations calculated using standard organizational analytics.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
