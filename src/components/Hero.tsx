import { motion } from 'motion/react';
import { ArrowUpRight, Sparkles, Network, ArrowDown, Flame, Zap } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

export default function Hero({ onOpenBooking, onExploreServices }: HeroProps) {
  return (
    <section 
      id="hero-section" 
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-gradient-hero"
    >
      {/* Premium Ambient Gradients & Floating Nodes */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        
        {/* Soft floating glowing spheres */}
        <div className="absolute top-[15%] left-[10%] w-[450px] h-[450px] bg-purple-200/40 rounded-full blur-[100px] animate-pulse-soft" />
        <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-violet-200/50 rounded-full blur-[120px] animate-pulse-soft" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[40%] right-[30%] w-[300px] h-[300px] bg-lavender-100/50 rounded-full blur-[80px] animate-pulse-soft" style={{ animationDelay: '4s' }} />

        {/* Dynamic Connected Node Background - Interactive lines with animated dasharrays */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.25]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="grad-node" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="1" />
              <stop offset="100%" stopColor="#C084FC" stopOpacity="0" />
            </radialGradient>
          </defs>
          
          {/* Constellation pathways */}
          <path d="M 100,200 Q 300,120 500,250 T 900,150 T 1300,300" fill="none" stroke="#B388FF" strokeWidth="1.5" strokeDasharray="6,6" className="animate-[dash_60s_linear_infinite]" />
          <path d="M 150,550 Q 400,680 800,500 T 1400,600" fill="none" stroke="#C084FC" strokeWidth="1.5" strokeDasharray="8,4" className="animate-[dash_40s_linear_infinite]" />
          <path d="M 1100,100 T 800,450 T 400,300" fill="none" stroke="#E6D8FF" strokeWidth="1.5" strokeDasharray="5,10" />

          {/* Floating node targets */}
          <circle cx="500" cy="250" r="4" fill="#8B5CF6" className="animate-ping" />
          <circle cx="500" cy="250" r="3" fill="#8B5CF6" />
          <circle cx="900" cy="150" r="4.5" fill="#C084FC" />
          <circle cx="800" cy="500" r="5" fill="#8B5CF6" className="animate-pulse" />
          <circle cx="400" cy="680" r="3.5" fill="#B388FF" />
        </svg>

        {/* Premium Grid Sheet */}
        <div className="absolute inset-0 opacity-[0.06]" 
          style={{
            backgroundImage: `radial-gradient(circle, #8B5CF6 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content Text Block */}
          <div className="lg:col-span-7 text-left space-y-8">
            
            {/* Elegant upper premium micro-badge */}
            <div className="inline-flex items-center space-x-2 bg-violet-50 border border-violet-100 rounded-full px-4 py-1.5 shadow-soft">
              <Sparkles className="w-4 h-4 text-violet-600 animate-spin" style={{ animationDuration: '6s' }} />
              <span className="font-mono text-[10px] tracking-widest text-violet-700 uppercase font-extrabold">Next-Gen Growth Partner</span>
              <span className="text-violet-300 font-mono text-[10px]">|</span>
              <span className="font-mono text-[10px] tracking-wider text-violet-600 font-bold">Unifying Your Infrastructure</span>
            </div>

            {/* Headline section */}
            <div className="space-y-4">
              <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl xl:text-[66px] text-zinc-900 font-extrabold tracking-tight leading-[1.05]">
                The Growth Team <br />
                <span className="text-gradient-purple">Behind Ambitious</span> <br />
                <span className="relative">
                  <span className="absolute -bottom-2 left-0 right-0 h-2 bg-violet-100 -z-10 rounded-full" />
                  Businesses.
                </span>
              </h1>
              
              <p className="font-sans text-base sm:text-lg text-zinc-650 font-normal leading-relaxed max-w-xl">
                From branding and marketing to staffing and customer acquisition, GBA becomes the complete outsourced growth department behind modern businesses.
              </p>
            </div>

            {/* Action buttons CTAs */}
            <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-4 bg-violet-600 text-white hover:bg-violet-700 text-xs font-mono rounded-full font-bold tracking-widest uppercase transition-all shadow-lg shadow-violet-200 hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
              >
                Book Strategy Call
              </button>
              <button
                onClick={onExploreServices}
                className="w-full sm:w-auto px-8 py-4 bg-white text-zinc-700 hover:text-zinc-950 hover:bg-violet-50 border border-violet-100/80 text-xs font-mono rounded-full font-bold tracking-widest uppercase transition-all shadow-soft hover:-translate-y-0.5 cursor-pointer flex items-center justify-center space-x-1 whitespace-nowrap"
              >
                <span>Explore Services</span>
                <ArrowDown className="w-4 h-4 text-zinc-450 animate-bounce" />
              </button>
            </div>

            {/* Live Client Proof strip */}
            <div className="pt-4 flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-6 text-zinc-500">
              <div className="flex -space-x-2.5">
                <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=80" alt="Client 1" referrerPolicy="no-referrer" />
                <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=80" alt="Client 2" referrerPolicy="no-referrer" />
                <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=80" alt="Client 3" referrerPolicy="no-referrer" />
              </div>
              <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 font-semibold">
                Trusted by high-growth startups Solas, LogixFlow, and Zetta.
              </p>
            </div>

          </div>

          {/* Hero Right Visual Column - Elegant Floating Hub Card */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0 flex justify-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] bg-violet-300/30 rounded-full blur-[60px] animate-pulse-soft -z-10" />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full max-w-[360px] sm:max-w-[400px] glass-premium rounded-[32px] p-6 space-y-6 border border-white relative shadow-premium bg-white/70"
            >
              <div className="flex items-center justify-between border-b border-violet-100/50 pb-4">
                <div className="flex items-center space-x-2">
                  <Network className="w-5 h-5 text-violet-600 animate-pulse" />
                  <span className="font-mono text-[10px] tracking-widest text-violet-700 uppercase font-extrabold">Active System Integration</span>
                </div>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              {/* Connected Visual Block details */}
              <div className="space-y-4">
                
                {/* Integration Node 1 */}
                <div className="flex justify-between items-center p-3 bg-violet-50/50 border border-violet-100/40 rounded-2xl">
                  <div>
                    <h4 className="font-mono text-xs font-extrabold text-zinc-900 uppercase">Core Departments Joined</h4>
                    <p className="text-[10px] text-zinc-500 font-medium">Outsourced department active state</p>
                  </div>
                  <span className="px-2.5 py-1 bg-violet-100 text-violet-700 text-[9px] font-mono rounded-full font-bold">5 Departments</span>
                </div>

                {/* Integration Node 2 */}
                <div className="flex justify-between items-center p-3 bg-violet-50/50 border border-violet-100/40 rounded-2xl">
                  <div>
                    <h4 className="font-mono text-xs font-extrabold text-zinc-900 uppercase">Growth Systems Aligned</h4>
                    <p className="text-[10px] text-zinc-500 font-medium">B2B funnels / organic retention loops</p>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Flame className="w-3.5 h-3.5 text-orange-500" />
                    <span className="text-xs font-mono font-bold text-zinc-800">100% Sync</span>
                  </div>
                </div>

                {/* Integration Node 3 */}
                <div className="flex justify-between items-center p-3 bg-violet-50/50 border border-violet-100/40 rounded-2xl">
                  <div>
                    <h4 className="font-mono text-xs font-extrabold text-zinc-900 uppercase">Candidate Shortlist Time</h4>
                    <p className="text-[10px] text-zinc-500 font-medium">Average position fulfillment lag</p>
                  </div>
                  <div className="flex items-center space-x-1 text-violet-600">
                    <Zap className="w-3.5 h-3.5" />
                    <span className="text-xs font-mono font-bold">&lt; 14 Days</span>
                  </div>
                </div>

              </div>

              {/* Fine Print inside floating UI card */}
              <div className="pt-2 flex justify-between items-center text-[10px] font-mono text-zinc-400">
                <span>GBA OPERATIONAL LAB</span>
                <span>v3.0.4 ONLINE</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
