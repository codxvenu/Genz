import { useState } from 'react';
import { ArrowUpRight, Sparkles, Sliders, Target, Users, Landmark, Percent } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

export default function Hero({ onOpenBooking, onExploreServices }: HeroProps) {
  // Slider state for simulation (representing monthly revenue in thousand dollars)
  const [revenue, setRevenue] = useState(25); // default $25k/mo

  // Dynamic projection calculations based on simulated revenue
  const getSimulatedMetrics = (rev: number) => {
    // Basic multipliers to simulate growth with Gen-Z partnership
    const acquisitionRate = Math.min(96, Math.floor(rev * 1.5 + 15));
    const monthlyConversions = Math.floor(rev * 38.5 + 180);
    const engineeringPlacements = Math.max(1, Math.floor(rev / 15));
    const valuationImpact = (rev * 12 * 4.2).toFixed(1); // 4.2x multiple simulation

    return {
      acquisitionRate,
      monthlyConversions: monthlyConversions.toLocaleString(),
      engineeringPlacements,
      valuationImpact
    };
  };

  const metrics = getSimulatedMetrics(revenue);

  return (
    <section 
      id="hero-section" 
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden bg-black text-white"
    >
      {/* Visual background texture & spotlights */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Subtle, soft light beams representing McKinsey/Linear luxury tone */}
        <div className="absolute top-[-10%] left-[25%] w-[600px] h-[600px] bg-zinc-900/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-zinc-800/5 rounded-full blur-[140px]" />
        
        {/* Fine grid lines matching premium Stripe/Linear style */}
        <div className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Announcement Tagline Badge */}
        <div className="flex justify-center mb-6 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-zinc-900/40 border border-zinc-800/80 rounded-full px-3.5 py-1.5 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-pulse" />
            <span className="font-mono text-[10px] tracking-widest text-zinc-400 uppercase font-medium">GEN-Z CORE DOCTRINE</span>
            <span className="text-zinc-600 font-mono text-[10px]">|</span>
            <span className="font-mono text-[10px] tracking-wider text-zinc-300">"Stand. Build. Grow."</span>
          </div>
        </div>

        {/* Headline block */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7.5xl tracking-tight text-white leading-[1.1] font-normal">
            Build Your <span className="italic">Business</span> From <br />
            <span className="text-gradient font-normal">0 to Hero</span>
          </h1>
          
          <p className="font-sans text-base sm:text-lg text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto">
            Marketing, Branding, Staffing, Customer Acquisition, Growth Strategy, and Business Consulting — all under one unified roof.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-4 bg-white text-black hover:bg-zinc-200 text-xs font-mono rounded-full font-bold tracking-widest uppercase transition-colors shadow-md cursor-pointer"
            >
              Book Free Consultation
            </button>
            <button
              onClick={onExploreServices}
              className="w-full sm:w-auto px-8 py-4 glass text-white text-xs font-mono rounded-full font-bold tracking-widest uppercase transition-all cursor-pointer"
            >
              Explore Services
            </button>
          </div>
        </div>

        {/* Interactive Scale Projector Panel (Scale Simulator) */}
        <div className="mt-16 sm:mt-24 max-w-4xl mx-auto">
          <div className="relative glass rounded-3xl shadow-2xl p-6 sm:p-8 overflow-hidden">
            
            {/* Top accent line */}
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-700/60 to-transparent" />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <Sliders className="w-4 h-4 text-zinc-400" />
                  <span className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase font-semibold">Scale Projection Workbench</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-white italic">Project Your Growth Trajectory</h3>
              </div>
              <div className="flex items-center space-x-2 bg-zinc-900/40 border border-white/15 px-4 py-2.5 rounded-xl">
                <span className="font-mono text-xs text-zinc-400">Target Monthly State:</span>
                <span className="font-mono text-base font-bold text-white">${revenue}k/mo</span>
              </div>
            </div>

            {/* Slider controller */}
            <div className="py-6 space-y-2">
              <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                <span>STAGE 1: SEED ($5k)</span>
                <span>STAGE 2: SCALING ($50k)</span>
                <span>STAGE 3: HERO ($150k+)</span>
              </div>
              <input
                id="revenue-projection-slider"
                type="range"
                min="5"
                max="150"
                step="5"
                value={revenue}
                onChange={(e) => setRevenue(Number(e.target.value))}
                className="w-full h-1 bg-zinc-900 rounded-lg appearance-none cursor-pointer accent-white block"
              />
            </div>

            {/* Dynamic Result Matrix Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-4">
              
              {/* Acquisition pipeline efficiency */}
              <div className="p-5 glass rounded-2xl flex flex-col justify-between border-t border-l border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">Growth Efficiency</span>
                  <Target className="w-3.5 h-3.5 text-zinc-455" />
                </div>
                <div className="space-y-1">
                  <div className="font-mono text-xl sm:text-3xl font-light text-white leading-none">
                    {metrics.acquisitionRate}%
                  </div>
                  <p className="text-[10px] text-zinc-400 leading-normal">Optimized media programmatic conversion flow</p>
                </div>
              </div>

              {/* Monthly customer volume conversions */}
              <div className="p-5 glass rounded-2xl flex flex-col justify-between border-t border-l border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">Monthly Leads</span>
                  <Percent className="w-3.5 h-3.5 text-zinc-455" />
                </div>
                <div className="space-y-1">
                  <div className="font-mono text-xl sm:text-3xl font-light text-white leading-none">
                    {metrics.monthlyConversions}
                  </div>
                  <p className="text-[10px] text-zinc-400 leading-normal">Qualified corporate/transactional pipelines</p>
                </div>
              </div>

              {/* Vetted team members placed */}
              <div className="p-5 glass rounded-2xl flex flex-col justify-between border-t border-l border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">Placements Filled</span>
                  <Users className="w-3.5 h-3.5 text-zinc-455" />
                </div>
                <div className="space-y-1">
                  <div className="font-mono text-xl sm:text-2xl font-light text-white leading-none">
                    {metrics.engineeringPlacements} Vetted
                  </div>
                  <p className="text-[10px] text-zinc-400 leading-normal">Core designers & execution leaders integrated</p>
                </div>
              </div>

              {/* Decisional corporate value scale */}
              <div className="p-5 glass rounded-2xl flex flex-col justify-between border-t border-l border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">Asset Value Target</span>
                  <Landmark className="w-3.5 h-3.5 text-zinc-455" />
                </div>
                <div className="space-y-1">
                  <div className="font-mono text-xl sm:text-2xl font-light text-white leading-none">
                    ${metrics.valuationImpact}M
                  </div>
                  <p className="text-[10px] text-zinc-400 leading-normal">Approximate 4.2x ARR enterprise market multiplier</p>
                </div>
              </div>

            </div>

            {/* Custom note explaining model integration */}
            <div className="mt-4 flex items-center justify-center space-x-2">
              <span className="w-1 h-1 bg-zinc-400 rounded-full" />
              <p className="font-mono text-[9px] text-zinc-500 text-center tracking-wide uppercase">
                Projections modeled on client averages across ScribeAI, Apex, and Rove pipelines.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
