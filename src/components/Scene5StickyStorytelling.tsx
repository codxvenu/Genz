import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Target, Sparkles, Users, Megaphone, Map } from 'lucide-react';

interface VisId {
  id: string;
  title: string;
  tagline: string;
}

export default function Scene5StickyStorytelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState('branding');

  const services: VisId[] = [
    { id: 'branding', title: 'Branding', tagline: 'Unified visual storytelling.' },
    { id: 'marketing', title: 'Marketing', tagline: 'Omnichannel loop networks.' },
    { id: 'staffing', title: 'Staffing', tagline: 'Elite operator placements.' },
    { id: 'acquisition', title: 'Customer Acquisition', tagline: 'Predictable growth loops.' },
    { id: 'consulting', title: 'Business Consulting', tagline: 'Macro scale frameworks.' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const elements = services.map(s => document.getElementById(`service-visual-${s.id}`));
      const viewportHeight = window.innerHeight;

      let closestId = 'branding';
      let closestDistance = Infinity;

      elements.forEach(el => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        // Distance of elements center to view center
        const distance = Math.abs(rect.top + rect.height / 2 - viewportHeight / 2);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestId = el.id.replace('service-visual-', '');
        }
      });

      setActiveTab(closestId);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      id="scene-sticky-storytelling"
      className="relative bg-white border-t border-b border-violet-100/50 py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Layout Setup Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left panel is sticky */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8 py-6">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-violet-50 border border-violet-100/50 rounded-full font-bold">
              <span className="w-1.5 h-1.5 bg-violet-600 rounded-full animate-ping" />
              <span className="font-mono text-[9px] uppercase tracking-widest text-violet-755">EXHIBITION ROOM</span>
            </div>

            <div className="space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 font-extrabold block">ACTIVE SERVICE BLOCK</span>
              
              <div className="space-y-2 h-[220px]">
                {services.map(ser => {
                  const isActive = activeTab === ser.id;
                  return (
                    <div
                      key={ser.id}
                      className={`transition-all duration-500 ease-out flex flex-col ${
                        isActive 
                          ? 'opacity-100 translate-x-0 scale-100 pl-4 border-l-2 border-violet-600' 
                          : 'opacity-25 -translate-x-2 scale-95 pl-0 border-l-0'
                      }`}
                    >
                      <h4 className="font-sans text-3xl sm:text-4xl text-zinc-900 font-black tracking-tight uppercase leading-tight">
                        {ser.title}
                      </h4>
                      <p className="font-mono text-[10px] sm:text-xs tracking-wider text-violet-600 uppercase font-bold mt-1">
                        {ser.tagline}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick indicators */}
            <div className="hidden lg:flex items-center space-x-3 pt-6 border-t border-violet-100/50">
              {services.map(s => {
                const isActive = activeTab === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => {
                      const el = document.getElementById(`service-visual-${s.id}`);
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }}
                    className={`h-[3px] flex-1 rounded-full transition-all duration-300 cursor-pointer ${
                      isActive ? 'bg-violet-600 w-12' : 'bg-zinc-200'
                    }`}
                  />
                );
              })}
            </div>
          </div>

          {/* Right panel scrolls vertically */}
          <div className="lg:col-span-7 space-y-32 py-12 lg:py-24">
            
            {/* Subsection 1: Branding */}
            <div 
              id="service-visual-branding"
              className="bg-zinc-50 border border-violet-100/60 rounded-[36px] p-6 sm:p-10 min-h-[460px] flex flex-col justify-between shadow-soft hover:border-violet-250 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-100/20 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-violet-50 rounded-xl">
                    <Sparkles className="w-5 h-5 text-violet-650" />
                  </div>
                  <span className="font-mono text-[10px] tracking-widest text-zinc-450 uppercase font-extrabold">BRAND ARCHITECTURE</span>
                </div>
                <h3 className="font-sans text-2xl font-black text-zinc-900 leading-tight">Identity Assembly</h3>
                <p className="font-sans text-xs sm:text-sm text-zinc-500 font-normal leading-relaxed">
                  We lay structural formulas for brands. Logos, guidelines, typographies, and aesthetic foundations constructed to convey authority instantly.
                </p>
              </div>

              {/* Graphic animation preview */}
              <div className="mt-8 bg-white border border-violet-100/50 rounded-2xl p-6 h-56 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] [background-size:16px_16px]" />
                
                {/* Brand construction circles drafting animation */}
                <div className="relative w-44 h-44 flex items-center justify-center">
                  <div className="absolute inset-0 border border-violet-300 rounded-full opacity-60 animate-ping" style={{ animationDuration: '4s' }} />
                  <div className="absolute inset-6 border border-dashed border-violet-200 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
                  <div className="absolute inset-12 border border-violet-100 rounded-full" />
                  <div className="w-16 h-16 bg-violet-600 rounded-full flex items-center justify-center text-white font-serif text-2xl shadow-premium relative z-10 font-bold">
                    G
                  </div>
                  {/* Grid lines drafting branding alignment */}
                  <div className="absolute left-0 right-0 h-[1.5px] bg-violet-100/80" />
                  <div className="absolute top-0 bottom-0 w-[1.5px] bg-violet-100/80" />
                </div>
              </div>
            </div>

            {/* Subsection 2: Marketing */}
            <div 
              id="service-visual-marketing"
              className="bg-zinc-50 border border-violet-100/60 rounded-[36px] p-6 sm:p-10 min-h-[460px] flex flex-col justify-between shadow-soft hover:border-violet-250 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100/20 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-violet-50 rounded-xl">
                    <Megaphone className="w-5 h-5 text-violet-650" />
                  </div>
                  <span className="font-mono text-[10px] tracking-widest text-zinc-450 uppercase font-extrabold">TRAFFIC FLOODS</span>
                </div>
                <h3 className="font-sans text-2xl font-black text-zinc-900 leading-tight">Audience Synchronization</h3>
                <p className="font-sans text-xs sm:text-sm text-zinc-500 font-normal leading-relaxed">
                  Active attention capture. We coordinate omnichannel distributions, algorithmic feed recommendations, and direct responses to feed high conversion rates.
                </p>
              </div>

              {/* Graphic element */}
              <div className="mt-8 bg-white border border-violet-100/50 rounded-2xl p-6 h-56 flex flex-col justify-end relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  {/* Dynamic upward metrics representation */}
                  <div className="w-full h-full flex items-end justify-between space-x-2.5">
                    {[30, 48, 62, 54, 76, 92, 110].map((h, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center space-y-1.5">
                        <div className="font-mono text-[9px] text-violet-600 font-extrabold">+{h}%</div>
                        <motion.div 
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h * 0.9}px` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: i * 0.05 }}
                          className="w-full bg-linear-to-t from-violet-100 to-violet-600 rounded-t-lg shadow-soft"
                        />
                        <span className="font-mono text-[8px] text-zinc-400 font-bold">W0{i+1}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Subsection 3: Staffing */}
            <div 
              id="service-visual-staffing"
              className="bg-zinc-50 border border-violet-100/60 rounded-[36px] p-6 sm:p-10 min-h-[460px] flex flex-col justify-between shadow-soft hover:border-violet-250 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-100/20 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-violet-50 rounded-xl">
                    <Users className="w-5 h-5 text-violet-650" />
                  </div>
                  <span className="font-mono text-[10px] tracking-widest text-zinc-450 uppercase font-extrabold">OPERATORS HUB</span>
                </div>
                <h3 className="font-sans text-2xl font-black text-zinc-900 leading-tight">Elite Talent Placements</h3>
                <p className="font-sans text-xs sm:text-sm text-zinc-500 font-normal leading-relaxed">
                  We source, test, and vet top-tier global operators and embed them as permanent components of your organization.
                </p>
              </div>

              {/* Staffing connections card mockup */}
              <div className="mt-8 bg-white border border-violet-100/50 rounded-2xl p-6 h-56 flex items-center justify-center relative overflow-hidden select-none">
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:20px_20px]" />
                
                <div className="flex space-x-[-12px] relative z-10">
                  {[
                    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120&h=120',
                    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=120&h=120',
                    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120',
                  ].map((img, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -8, scale: 1.05 }}
                      className="w-14 h-14 rounded-full border-2 border-white overflow-hidden shadow-bold relative cursor-pointer"
                    >
                      <img src={img} alt="Operator" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </motion.div>
                  ))}
                  <div className="w-14 h-14 rounded-full border-2 border-white bg-violet-600 text-white flex items-center justify-center font-mono text-xs font-black shadow-bold relative z-10 cursor-pointer">
                    +50
                  </div>
                </div>
              </div>
            </div>

            {/* Subsection 4: Customer Acquisition */}
            <div 
              id="service-visual-acquisition"
              className="bg-zinc-50 border border-violet-100/60 rounded-[36px] p-6 sm:p-10 min-h-[460px] flex flex-col justify-between shadow-soft hover:border-violet-250 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100/20 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-violet-50 rounded-xl">
                    <Target className="w-5 h-5 text-violet-650" />
                  </div>
                  <span className="font-mono text-[10px] tracking-widest text-zinc-450 uppercase font-extrabold">STEADY CONVERSIONS</span>
                </div>
                <h3 className="font-sans text-2xl font-black text-zinc-900 leading-tight">Sustained Pipelines</h3>
                <p className="font-sans text-xs sm:text-sm text-zinc-500 font-normal leading-relaxed">
                  Continuous conversion pathways. We assemble outbound tools and inbound campaigns that drive massive predictable pipeline flows.
                </p>
              </div>

              {/* Graphic element */}
              <div className="mt-8 bg-white border border-violet-100/50 rounded-2xl p-6 h-56 flex flex-col justify-center items-center relative overflow-hidden">
                {/* Funnel animation blocks */}
                <div className="w-full max-w-sm space-y-2">
                  <div className="h-7 bg-violet-100/30 border border-violet-200/50 rounded-lg flex items-center justify-between px-3 text-[10px] font-mono font-bold text-violet-800">
                    <span>TOP OF FUNNEL (TRAFFIC)</span>
                    <span>100%</span>
                  </div>
                  <div className="w-[85%] mx-auto h-7 bg-violet-100/50 border border-violet-250/50 rounded-lg flex items-center justify-between px-3 text-[10px] font-mono font-bold text-violet-850">
                    <span>ENGAGED PROSPECTS</span>
                    <span>64%</span>
                  </div>
                  <div className="w-[65%] mx-auto h-7 bg-violet-200/60 border border-violet-300/50 rounded-lg flex items-center justify-between px-3 text-[10px] font-mono font-bold text-violet-900">
                    <span>QUALIFIED LEADS</span>
                    <span>32%</span>
                  </div>
                  <div className="w-[45%] mx-auto h-7 bg-violet-600 rounded-lg flex items-center justify-between px-3 text-[10px] font-mono font-bold text-white shadow-soft">
                    <span>REVENUE</span>
                    <span>8.4%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Subsection 5: Consulting */}
            <div 
              id="service-visual-consulting"
              className="bg-zinc-50 border border-violet-100/60 rounded-[36px] p-6 sm:p-10 min-h-[460px] flex flex-col justify-between shadow-soft hover:border-violet-250 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-100/20 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-violet-50 rounded-xl">
                    <Map className="w-5 h-5 text-violet-650" />
                  </div>
                  <span className="font-mono text-[10px] tracking-widest text-zinc-450 uppercase font-extrabold">MAP BLUEPRINT</span>
                </div>
                <h3 className="font-sans text-2xl font-black text-zinc-900 leading-tight">Expansion Architecture</h3>
                <p className="font-sans text-xs sm:text-sm text-zinc-500 font-normal leading-relaxed">
                  We diagnose structural bottlenecks, design localized footprint blueprints, and build macro tactics for repeatable category positioning.
                </p>
              </div>

              {/* Graphic element rendering abstract maps */}
              <div className="mt-8 bg-white border border-violet-100/50 rounded-2xl p-6 h-56 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] bg-[size:10px_10px]" />
                
                {/* Visual node network diagram for strategy */}
                <div className="flex items-center space-x-6 relative z-10">
                  <div className="flex flex-col space-y-4">
                    <div className="px-3 py-1.5 bg-violet-100 border border-violet-200 rounded-lg font-mono text-[9px] text-violet-800 font-bold">STAGE A</div>
                    <div className="px-3 py-1.5 bg-violet-100 border border-violet-200 rounded-lg font-mono text-[9px] text-violet-800 font-bold">STAGE B</div>
                  </div>
                  <div className="text-violet-400 font-bold text-lg select-none">⟶</div>
                  <div className="w-16 h-16 rounded-full bg-violet-600 text-white flex items-center justify-center flex-col shadow-premium font-mono font-black text-xs uppercase tracking-tight text-center">
                    <span>MAPPED</span>
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
