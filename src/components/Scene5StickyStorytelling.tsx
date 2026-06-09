import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Megaphone, Users, Target, Shield } from 'lucide-react';

interface VisId {
  id: string;
  title: string;
  tagline: string;
  num: string;
}

export default function Scene5StickyStorytelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState('branding');

  const services: VisId[] = [
    { id: 'branding', title: 'Branding', tagline: 'Unified Visual Narrative', num: '01' },
    { id: 'marketing', title: 'Marketing', tagline: 'Omnichannel Attention Ecosystem', num: '02' },
    { id: 'staffing', title: 'Staffing', tagline: 'Elite Operator Placements', num: '03' },
    { id: 'acquisition', title: 'Acquisition', tagline: 'Predictable Growth Loops', num: '04' },
    { id: 'consulting', title: 'Consulting', tagline: 'Macro Scale Architecture', num: '05' }
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
      className="relative bg-black py-24 select-none"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Sticky Layout Setup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Left panel is sticky */}
          <div className="lg:col-span-5 lg:sticky lg:top-36 space-y-10 py-6">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
              <span className="w-1.5 h-1.5 bg-[#7C3AED] rounded-full animate-pulse" />
              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#A1A1AA] font-bold">EXHIBITION ROOM</span>
            </div>

            <div className="space-y-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-extrabold block">
                INTEGRATED CAPABILITIES
              </span>
              
              <div className="space-y-4">
                {services.map(ser => {
                  const isActive = activeTab === ser.id;
                  return (
                    <div
                      key={ser.id}
                      className={`transition-all duration-500 ease-out flex items-center space-x-4 ${
                        isActive 
                          ? 'opacity-100 translate-x-1' 
                          : 'opacity-20 translate-x-0'
                      }`}
                    >
                      <span className="font-mono text-xs text-[#7C3AED] font-bold">{ser.num}</span>
                      <div className="flex flex-col">
                        <h4 className="font-serif text-3xl sm:text-4xl text-white font-normal tracking-tight">
                          {ser.title}
                        </h4>
                        {isActive && (
                          <motion.p 
                            layoutId="tagline-active"
                            className="font-mono text-[9px] sm:text-[10px] tracking-wider text-purple-400 uppercase font-bold mt-1"
                          >
                            {ser.tagline}
                          </motion.p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick interactive line indicators */}
            <div className="hidden lg:flex items-center space-x-3 pt-8 border-t border-white/5">
              {services.map(s => {
                const isActive = activeTab === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => {
                      const el = document.getElementById(`service-visual-${s.id}`);
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }}
                    className={`h-[2px] flex-1 transition-all duration-300 cursor-pointer ${
                      isActive ? 'bg-[#7C3AED] ' : 'bg-zinc-800'
                    }`}
                  />
                );
              })}
            </div>
          </div>

          {/* Right panel scrolls vertically */}
          <div className="lg:col-span-7 space-y-36 py-12 lg:py-16">
            
            {/* BRANDING */}
            <div 
              id="service-visual-branding"
              className="relative overflow-hidden rounded-[24px] border border-white/5 bg-zinc-950/65 p-8 sm:p-12 min-h-[520px] flex flex-col justify-between shadow-2xl transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 sm:p-3 bg-white/5 rounded-xl border border-white/10">
                    <Sparkles className="w-5 h-5 text-purple-400" />
                  </div>
                  <span className="font-mono text-[9px] tracking-[0.25em] text-[#A1A1AA] uppercase font-bold">AUTHENTIC IDENTITY</span>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl font-normal text-white tracking-tight leading-tight">Narrative Authority</h3>
                <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                  We lay absolute structural brand formulas. Custom logos, distinct typographies, packaging layouts, and digital guidelines paired meticulously to win long-term customer authority.
                </p>
              </div>

              {/* Graphic Experience */}
              <div className="mt-8 relative overflow-hidden rounded-xl h-64 border border-white/5 bg-black">
                <img 
                  src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=800" 
                  alt="Branding architecture sketching design" 
                  className="w-full h-full object-cover filter brightness-[0.35] contrast-[1.1] grayscale"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay Drafting Graphic */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-4">
                  <div className="relative w-44 h-44 flex items-center justify-center">
                    <div className="absolute inset-4 border border-[#7C3AED]/25 rounded-full animate-pulse" />
                    <div className="absolute inset-10 border border-dashed border-white/10 rounded-full animate-spin" style={{ animationDuration: '24s' }} />
                    <div className="w-16 h-16 bg-[#7C3AED]/10 border border-[#7C3AED]/35 rounded-full flex items-center justify-center text-white font-serif text-2xl font-bold">
                      G
                    </div>
                    {/* Drafting overlay lines */}
                    <div className="absolute left-0 right-0 h-[1px] bg-white/5" />
                    <div className="absolute top-0 bottom-0 w-[1px] bg-white/5" />
                  </div>
                </div>
              </div>
            </div>

            {/* MARKETING */}
            <div 
              id="service-visual-marketing"
              className="relative overflow-hidden rounded-[24px] border border-white/5 bg-zinc-950/65 p-8 sm:p-12 min-h-[520px] flex flex-col justify-between shadow-2xl transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 sm:p-3 bg-white/5 rounded-xl border border-white/10">
                    <Megaphone className="w-5 h-5 text-purple-400" />
                  </div>
                  <span className="font-mono text-[9px] tracking-[0.25em] text-[#A1A1AA] uppercase font-bold">KINETIC ATTENTION</span>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl font-normal text-white tracking-tight leading-tight">Audience Synchronization</h3>
                <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                  Active attention capture. We capture internet-scale attention using multichannel distribution campaigns, native creator algorithms, and high-frequency digital loops.
                </p>
              </div>

              {/* Graphic Experience */}
              <div className="mt-8 relative overflow-hidden rounded-xl h-64 border border-white/5 bg-black">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800" 
                  alt="High speed marketing attention campaign nodes" 
                  className="w-full h-full object-cover filter brightness-[0.35] grayscale"
                  referrerPolicy="no-referrer"
                />
                
                {/* Dynamic upward chart indicators */}
                <div className="absolute inset-x-6 bottom-4 h-24 flex items-end justify-between space-x-3 bg-black/45 backdrop-blur-md p-4 rounded-lg border border-white/5">
                  {[20, 38, 54, 48, 72, 88, 110].map((v, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center space-y-1">
                      <span className="font-mono text-[8px] text-purple-400 font-bold">+{v}%</span>
                      <motion.div 
                        initial={{ height: 0 }}
                        whileInView={{ height: `${v * 0.4}px` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.05 }}
                        className="w-full bg-gradient-to-t from-purple-900 to-[#A855F7] rounded-sm"
                      />
                      <span className="font-mono text-[7px] text-zinc-500 font-bold">W{i+1}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* STAFFING */}
            <div 
              id="service-visual-staffing"
              className="relative overflow-hidden rounded-[24px] border border-white/5 bg-zinc-950/65 p-8 sm:p-12 min-h-[520px] flex flex-col justify-between shadow-2xl transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 sm:p-3 bg-white/5 rounded-xl border border-white/10">
                    <Users className="w-5 h-5 text-purple-400" />
                  </div>
                  <span className="font-mono text-[9px] tracking-[0.25em] text-[#A1A1AA] uppercase font-bold">OPERATIONAL VETERANS</span>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl font-normal text-white tracking-tight leading-tight">Elite Force Placements</h3>
                <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                  We build scalable talent setups. We recruit, thoroughly vet, and embed top-tier growth operators natively into your workflow, bypassing recruiters completely.
                </p>
              </div>

              {/* Graphic Experience */}
              <div className="mt-8 relative overflow-hidden rounded-xl h-64 border border-white/5 bg-black">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                  alt="Elite operations meeting room office" 
                  className="w-full h-full object-cover filter brightness-[0.3] grayscale"
                  referrerPolicy="no-referrer"
                />

                {/* Overlaid Operator Avatar circles */}
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="flex space-x-[-12px] bg-black/60 backdrop-blur-md px-6 py-4 rounded-full border border-white/10">
                    {[
                      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120&h=120',
                      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=120&h=120',
                      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120',
                    ].map((imgUrl, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ y: -6, scale: 1.05 }}
                        className="w-12 h-12 rounded-full border border-zinc-900 overflow-hidden shadow-2xl relative cursor-pointer"
                      >
                        <img src={imgUrl} alt="Vetted operators" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all" referrerPolicy="no-referrer" />
                      </motion.div>
                    ))}
                    <div className="w-12 h-12 rounded-full border border-zinc-900 bg-[#7C3AED] text-white flex items-center justify-center font-mono text-[10px] font-bold shadow-2xl">
                      +100
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CUSTOMER ACQUISITION */}
            <div 
              id="service-visual-acquisition"
              className="relative overflow-hidden rounded-[24px] border border-white/5 bg-zinc-950/65 p-8 sm:p-12 min-h-[520px] flex flex-col justify-between shadow-2xl transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 sm:p-3 bg-white/5 rounded-xl border border-white/10">
                    <Target className="w-5 h-5 text-purple-400" />
                  </div>
                  <span className="font-mono text-[9px] tracking-[0.25em] text-[#A1A1AA] uppercase font-bold">PREDICTABLE PIPELINES</span>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl font-normal text-white tracking-tight leading-tight">Growth Machine</h3>
                <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                  No more guessing where sales will come from. We install automated lead engines, outbound sequences, and proprietary landing funnels designed for rapid, repeated validation.
                </p>
              </div>

              {/* Graphic Experience */}
              <div className="mt-8 relative overflow-hidden rounded-xl h-64 border border-white/5 bg-black">
                <img 
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800"
                  alt="High contrast growth dashboard presentation workspace" 
                  className="w-full h-full object-cover filter brightness-[0.3] grayscale"
                  referrerPolicy="no-referrer"
                />

                {/* Overlaid elegant funnel chart representation */}
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="w-full max-w-sm space-y-2 bg-black/50 backdrop-blur-md p-4 rounded-lg border border-white/5">
                    <div className="h-6 bg-purple-950/10 border border-purple-500/10 rounded-sm flex items-center justify-between px-3 text-[9px] font-mono font-bold text-purple-300">
                      <span>AUDIENCE SOURCED</span>
                      <span>100%</span>
                    </div>
                    <div className="w-[85%] mx-auto h-6 bg-purple-950/20 border border-purple-500/15 rounded-sm flex items-center justify-between px-3 text-[9px] font-mono font-bold text-purple-350">
                      <span>ENGAGED REACH</span>
                      <span>68%</span>
                    </div>
                    <div className="w-[65%] mx-auto h-6 bg-purple-900/30 border border-purple-500/25 rounded-sm flex items-center justify-between px-3 text-[9px] font-mono font-bold text-purple-200">
                      <span>VERIFIED TARGETS</span>
                      <span>36%</span>
                    </div>
                    <div className="w-[45%] mx-auto h-6 bg-[#7C3AED] rounded-sm flex items-center justify-between px-3 text-[9px] font-mono font-bold text-white shadow-lg">
                      <span>REVENUE SYSTEM</span>
                      <span>8.8%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CONSULTING */}
            <div 
              id="service-visual-consulting"
              className="relative overflow-hidden rounded-[24px] border border-white/5 bg-zinc-950/65 p-8 sm:p-12 min-h-[520px] flex flex-col justify-between shadow-2xl transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 sm:p-3 bg-white/5 rounded-xl border border-white/10">
                    <Shield className="w-5 h-5 text-purple-400" />
                  </div>
                  <span className="font-mono text-[9px] tracking-[0.25em] text-[#A1A1AA] uppercase font-bold">SYSTEM ARCHITECTURE</span>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl font-normal text-white tracking-tight leading-tight">Macro Tactics Blueprint</h3>
                <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                  We diagnose leaks. Our consultants operate as co-pilots, drafting actual operating playbooks, tactical sheets, and structural milestones for strategic enterprise scale.
                </p>
              </div>

              {/* Graphic Experience */}
              <div className="mt-8 relative overflow-hidden rounded-xl h-64 border border-white/5 bg-black">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800" 
                  alt="Macro blueprint consulting desk work space" 
                  className="w-full h-full object-cover filter brightness-[0.3] grayscale"
                  referrerPolicy="no-referrer"
                />

                {/* Overlaid strategic stage connectors */}
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="flex items-center space-x-4 bg-black/60 backdrop-blur-md px-6 py-4 rounded-lg border border-white/10 select-none">
                    <div className="px-3 py-1 bg-white/5 border border-white/10 rounded font-mono text-[8px] text-zinc-300 font-bold">STAGE I: AUDIT</div>
                    <span className="text-purple-500 font-bold text-sm">&rarr;</span>
                    <div className="px-3 py-1 bg-[#7C3AED]/15 border border-[#7C3AED]/40 rounded font-mono text-[8px] text-purple-300 font-bold">STAGE II: POSITION</div>
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
