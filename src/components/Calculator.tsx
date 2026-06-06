import { useState } from 'react';
import { Target, Users, Hourglass, TrendingUp, Sparkles, Receipt, ArrowRight } from 'lucide-react';

interface CalculatorProps {
  onOpenBooking: () => void;
}

export default function Calculator({ onOpenBooking }: CalculatorProps) {
  const [arrTarget, setArrTarget] = useState<number>(3); // Representing target ARR in millions ($1M to $15M)
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([
    'Branding', 'Lead Generation'
  ]);

  const toggleNeed = (need: string) => {
    setSelectedNeeds(prev => 
      prev.includes(need) ? prev.filter(n => n !== need) : [...prev, need]
    );
  };

  const getCalculations = () => {
    // Generate simulated, logically proportional outputs
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
      className="py-20 sm:py-28 bg-black text-white border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header summary text */}
        <div className="space-y-4 mb-16 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-2">
            <span className="w-1 h-3 bg-zinc-500 rounded-full" />
            <span className="font-mono text-[10px] tracking-widest text-zinc-400 uppercase">Interactive Modeler</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-white tracking-wide">
            Model Your Growth Velocity
          </h2>
          <p className="text-sm text-zinc-400 font-light leading-relaxed">
            Specify your desired Annual Recurring Revenue goal and tick your required pillars. Look at how our operational model adapts structural setups instantly.
          </p>
        </div>

        {/* Calculator layout */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Block: Controller inputs */}
          <div className="lg:col-span-7 glass border border-white/10 w-full rounded-3xl p-6 sm:p-8 space-y-8 bg-transparent">
            
            {/* Target Slider */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Target className="w-4 h-4 text-zinc-400" />
                  <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase font-semibold">Target Revenue Benchmark</span>
                </div>
                <div className="font-mono text-xs text-zinc-400">
                  ARR Target: <strong className="text-white text-base">${arrTarget}M/yr</strong>
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
                className="w-full h-1 bg-zinc-900 rounded-lg appearance-none cursor-pointer accent-white block"
              />
              <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500">
                <span>$1M (Emergent)</span>
                <span>$8M (Expansion Scale)</span>
                <span>$15M (Enterprise Anchor)</span>
              </div>
            </div>

            {/* Checkbox columns mapping growth areas */}
            <div className="space-y-4 pt-2">
              <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block font-semibold">Required Capability Pillars</span>
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
                      className={`flex items-center p-3 rounded-2xl border text-left transition-all text-xs font-sans cursor-pointer ${
                        isChecked 
                          ? 'bg-white border-white text-black font-semibold' 
                          : 'glass border-white/5 text-zinc-300 hover:border-white/15 hover:text-white'
                      }`}
                    >
                      <div className={`w-3.5 h-3.5 rounded border mr-2.5 flex items-center justify-center transition-all ${
                        isChecked ? 'bg-black border-black text-white' : 'border-white/10'
                      }`}>
                        {isChecked && <span className="text-[8px]">✓</span>}
                      </div>
                      <span>{need}</span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Block: Projected Output Metrics Sheet */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 glass border border-white/10 rounded-3xl relative overflow-hidden space-y-8 bg-transparent">
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-white/3 rounded-full blur-[80px]" />

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 font-semibold">Projected System Specs</span>
                </div>
                <Receipt className="w-3.5 h-3.5 text-zinc-500" />
              </div>

              {/* Matrix List of result parameters */}
              <div className="space-y-5">
                
                {/* Duration needed */}
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block font-semibold">Integration Pipeline Duration</span>
                    <h5 className="text-sm font-serif font-normal text-white italic">Full-Scale Setup Time</h5>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-xl text-white font-bold">{calcs.timelineWeeks} Weeks</span>
                  </div>
                </div>

                {/* Team Placement recommended */}
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block font-semibold">Core Placements</span>
                    <h5 className="text-sm font-serif font-normal text-white italic">Dedicated Vetted Operators</h5>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-xl text-white font-bold">{calcs.suggestedHeadcount} Headcount</span>
                  </div>
                </div>

                {/* Estimated ROI multipler */}
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block font-semibold">Projected ROI Ratio</span>
                    <h5 className="text-sm font-serif font-normal text-white italic">Simulated Capital Return</h5>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-xl text-white font-bold">{calcs.estimatedRoi}x ROI</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Action Booking Trigger */}
            <div className="space-y-3 relative z-10">
              <button
                onClick={onOpenBooking}
                className="w-full py-4 bg-white text-black hover:bg-zinc-200 text-xs font-mono rounded-full font-bold tracking-widest uppercase transition-colors flex items-center justify-center space-x-1.5 cursor-pointer"
              >
                <span>Request Spec Blueprint</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <p className="font-mono text-[9px] text-zinc-500 text-center uppercase tracking-wider">
                Simulation calculated using standard EBITDA optimizations.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
