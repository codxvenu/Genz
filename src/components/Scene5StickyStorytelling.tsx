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
              <div className="mt-8 relative overflow-hidden rounded-xl h-64 border border-white/5 bg-zinc-950 flex items-center justify-center">
                {/* Unified Cinematic Spotlight Orb Target */}
                <div 
                  className="orb-target absolute inset-0 z-10 flex items-center justify-center pointer-events-none select-none"
                  data-orb-scale="1.05"
                  data-orb-opacity="0.55"
                  data-orb-glow="rgba(167, 139, 250, 0.25)"
                  data-orb-theme="normal"
                  data-orb-mask="true"
                />
                
                {/* Illuminated Vector systems: typography system, logo constructions, identity frameworks */}
                <div className="absolute inset-0 px-6 py-4 flex flex-col justify-between z-0">
                  {/* Fine construction drafting lines */}
                  <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none opacity-40" />
                  
                  <div className="flex justify-between items-start">
                    {/* Typography block */}
                    <div className="font-serif text-[10px] text-zinc-500 space-y-1 bg-black/40 p-2 rounded border border-white/5 backdrop-blur-sm">
                      <span className="text-[#a78bfa] block font-semibold">TYPOGRAPHY SYSTEM</span>
                      <p className="font-serif text-sm tracking-wide text-zinc-300">GBA Display Serif</p>
                      <p className="font-mono text-[8px] text-zinc-400">Scale: 1.618 Golden Ratio</p>
                    </div>
                    {/* Brand guidelines label */}
                    <div className="font-mono text-[8px] text-zinc-500 uppercase tracking-widest text-right">
                      IDF-X // WIREFRAME
                    </div>
                  </div>

                  {/* Central Construction circle aligned around the spotlight orb target */}
                  <div className="relative w-36 h-36 mx-auto flex items-center justify-center">
                    <div className="absolute inset-0 border border-white/[0.04] rounded-full" />
                    <div className="absolute inset-4 border border-[#a78bfa]/15 rounded-full animate-ping" style={{ animationDuration: '4s' }} />
                    <div className="absolute inset-8 border border-dashed border-white/10 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
                    <div className="absolute inset-14 border border-[#a78bfa]/10 rounded-full" />
                    
                    {/* Fine measuring blueprint lines */}
                    <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-white/[0.06]" />
                    <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-white/[0.06]" />
                    
                    <div className="z-10 font-serif text-2xl text-white font-medium bg-black/60 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                      G
                    </div>
                  </div>

                  <div className="flex justify-between items-end text-[8px] font-mono text-zinc-500">
                    <span>GRID 12-COL-FLUID</span>
                    <span>ALIGN: PERFECT CENTER</span>
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
              <div className="mt-8 relative overflow-hidden rounded-xl h-64 border border-white/5 bg-zinc-950 flex items-center justify-center">
                {/* Unified Cinematic Spotlight Orb Target */}
                <div 
                  className="orb-target absolute inset-0 z-10 flex items-center justify-center pointer-events-none select-none"
                  data-orb-scale="1.15"
                  data-orb-opacity="0.58"
                  data-orb-glow="rgba(192, 132, 252, 0.28)"
                  data-orb-theme="normal"
                  data-orb-mask="true"
                />

                {/* Highly structured Audience Flow Vector diagram, revealing pathways */}
                <div className="absolute inset-0 px-6 py-5 flex flex-col justify-between z-0">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">ATTENTION TRANSMISSION FLOW</span>
                    <span className="font-mono text-[8px] px-2 py-0.5 bg-purple-500/10 border border-purple-500/20 text-purple-300 rounded-full">ACTIVE LINK</span>
                  </div>

                  {/* Flow network diagram */}
                  <div className="relative w-full h-28 flex items-center justify-between px-4">
                    {/* Pulse lines connecting nodes */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                      <path d="M 40,56 C 100,20 180,20 220,56 C 260,92 340,92 380,56" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeDasharray="5, 5" className="opacity-40 animate-[dash_10s_linear_infinite]" />
                      <path d="M 40,56 Q 210,110 380,56" fill="none" stroke="#c084fc" strokeWidth="1" strokeDasharray="3, 3" className="opacity-20" />
                    </svg>

                    {/* Nodes representing marketing pathways */}
                    <div className="relative z-10 flex flex-col items-center bg-black/60 p-2 rounded border border-white/5 w-24">
                      <span className="font-mono text-[7px] text-zinc-500 uppercase">Input Node</span>
                      <span className="font-medium text-[10px] text-zinc-200">Creator Alg</span>
                    </div>

                    <div className="relative z-10 flex flex-col items-center bg-purple-950/25 p-2 rounded border border-purple-500/20 w-28 shadow-lg">
                      <span className="font-mono text-[7px] text-[#c084fc] uppercase animate-pulse">Spotlight Center</span>
                      <span className="font-medium text-[10px] text-white">Campaign System</span>
                    </div>

                    <div className="relative z-10 flex flex-col items-center bg-black/60 p-2 rounded border border-white/5 w-24">
                      <span className="font-mono text-[7px] text-zinc-500 uppercase">Growth Out</span>
                      <span className="font-medium text-[10px] text-zinc-200">Scale Portal</span>
                    </div>
                  </div>

                  {/* Analytical bottom indicators */}
                  <div className="flex justify-between items-end border-t border-white/5 pt-2">
                    <div className="flex space-x-4">
                      <div>
                        <span className="font-mono text-[7px] text-zinc-500 block font-bold">ATTENTION RANGE</span>
                        <span className="font-mono text-[10.5px] text-purple-400 font-bold">14.2M FLOWS</span>
                      </div>
                      <div>
                        <span className="font-mono text-[7px] text-zinc-500 block font-bold">PATH CAPABILITY</span>
                        <span className="font-mono text-[10.5px] text-[#c084fc] font-bold">8.42% RATIO</span>
                      </div>
                    </div>
                    <span className="font-mono text-[7px] text-zinc-500">VELOCITY RATIO: 1.84x</span>
                  </div>
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
              <div className="mt-8 relative overflow-hidden rounded-xl h-64 border border-white/5 bg-zinc-950 flex items-center justify-center">
                {/* Unified Cinematic Spotlight Orb Target */}
                <div 
                  className="orb-target absolute inset-0 z-10 flex items-center justify-center pointer-events-none select-none"
                  data-orb-scale="1.1"
                  data-orb-opacity="0.52"
                  data-orb-glow="rgba(216, 180, 254, 0.25)"
                  data-orb-theme="normal"
                  data-orb-mask="true"
                />

                {/* Living Ecosystem Talent Network & Organization Structure */}
                <div className="absolute inset-0 px-6 py-5 flex flex-col justify-between z-0">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">ELITE OPERATOR ECOSYSTEM</span>
                    <span className="font-mono text-[8px] text-[#d8b4fe]">ORGANIC NETWORK</span>
                  </div>

                  {/* Interconnected Living bubble nodes */}
                  <div className="relative w-full h-28 flex items-center justify-center">
                    {/* SVG connection lines for the ecosystem */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                      <line x1="25%" y1="50%" x2="50%" y2="25%" stroke="rgba(216, 180, 254, 0.2)" strokeWidth="1.2" />
                      <line x1="50%" y1="25%" x2="75%" y2="50%" stroke="rgba(216, 180, 254, 0.2)" strokeWidth="1.2" />
                      <line x1="25%" y1="50%" x2="50%" y2="75%" stroke="rgba(216, 180, 254, 0.2)" strokeWidth="1.2" />
                      <line x1="50%" y1="75%" x2="75%" y2="50%" stroke="rgba(216, 180, 254, 0.2)" strokeWidth="1.2" />
                      <line x1="50%" y1="25%" x2="50%" y2="75%" stroke="rgba(216, 180, 254, 0.15)" strokeWidth="1" strokeDasharray="3 3" />
                    </svg>

                    {/* Central Master Node */}
                    <div className="absolute top-[12%] bg-black/80 border border-[#d8b4fe]/35 px-2.5 py-1 rounded-full flex items-center space-x-1.5 shadow-md">
                      <span className="w-1.5 h-1.5 bg-[#d8b4fe] rounded-full animate-ping" />
                      <span className="font-mono text-[8px] text-white">Chief Growth Co-pilot</span>
                    </div>

                    {/* Surrounding Node 1 */}
                    <div className="absolute left-[8%] top-[40%] bg-black/60 border border-white/5 py-1 px-2 rounded">
                      <span className="font-mono text-[8px] text-zinc-300">UX Architect</span>
                    </div>

                    {/* Surrounding Node 2 */}
                    <div className="absolute right-[8%] top-[40%] bg-black/60 border border-white/5 py-1 px-2 rounded">
                      <span className="font-mono text-[8px] text-zinc-300">Campaign Lead</span>
                    </div>

                    {/* Surrounding Node 3 */}
                    <div className="absolute bottom-[10%] bg-purple-950/20 border border-[#d8b4fe]/20 py-1 px-3 rounded shadow-lg">
                      <span className="font-mono text-[8px] text-[#e9d5ff]">Integrator Veteran</span>
                    </div>
                  </div>

                  {/* Overlaid Operator Avatar circles */}
                  <div className="flex justify-between items-center border-t border-white/5 pt-2">
                    <span className="font-mono text-[7px] text-zinc-500 font-bold">OPERATOR PLACEMENT RATE: 100%</span>
                    <div className="flex space-x-[-8px]">
                      {[
                        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120&h=120',
                        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=120&h=120',
                        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120',
                      ].map((imgUrl, i) => (
                        <div key={i} className="w-6 h-6 rounded-full border border-black overflow-hidden shadow">
                          <img src={imgUrl} alt="Vetted operators" className="w-full h-full object-cover filter grayscale" referrerPolicy="no-referrer" />
                        </div>
                      ))}
                      <div className="w-6 h-6 rounded-full bg-[#7C3AED] text-[7px] text-white flex items-center justify-center font-mono font-bold shadow-sm">
                        +12
                      </div>
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
              <div className="mt-8 relative overflow-hidden rounded-xl h-64 border border-white/5 bg-zinc-950 flex items-center justify-center">
                {/* Unified Cinematic Spotlight Orb Target */}
                <div 
                  className="orb-target absolute inset-0 z-10 flex items-center justify-center pointer-events-none select-none"
                  data-orb-scale="1.25"
                  data-orb-opacity="0.65"
                  data-orb-glow="rgba(233, 110, 230, 0.28)"
                  data-orb-theme="normal"
                  data-orb-mask="true"
                />

                {/* Growth Loops connected to the orb, as if energizing each other */}
                <div className="absolute inset-0 px-6 py-5 flex flex-col justify-between z-0">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest font-bold">REVENUE ENGAGEMENT LOOP</span>
                    <span className="font-mono text-[8px] text-pink-400 font-bold animate-pulse">&bull; HARMONIZED STATUS</span>
                  </div>

                  {/* Centered target visual that wraps around the orb's coordinates to synthesize loop */}
                  <div className="relative w-full h-28 flex items-center justify-center">
                    <div className="absolute inset-x-8 h-20 border border-white/5 border-dashed rounded-full animate-spin" style={{ animationDuration: '30s' }} />
                    <div className="absolute inset-x-14 h-12 border border-[#7C3AED]/25 rounded-full animate-ping" style={{ animationDuration: '6s' }} />
                    
                    {/* Visual labels around the centralized reactor */}
                    <div className="absolute left-1 top-[15%] bg-black/60 p-1 rounded border border-white/5 text-[7px] font-mono whitespace-nowrap">
                      &rarr; Lead Generation Capture
                    </div>
                    
                    <div className="absolute right-1 bottom-[15%] bg-black/60 p-1 rounded border border-white/5 text-[7px] font-mono whitespace-nowrap">
                      &larr; Conversion pathways
                    </div>

                    {/* Central ring indicator linking the loop with the orb spotlight */}
                    <div className="w-16 h-16 border-2 border-purple-500/25 rounded-full flex items-center justify-center animate-pulse">
                      <div className="w-10 h-10 border border-pink-500/30 rounded-full flex items-center justify-center text-[8px] font-mono text-zinc-300">
                        REACTOR
                      </div>
                    </div>
                  </div>

                  {/* Bottom Pipeline display */}
                  <div className="flex justify-between items-end text-[8px] font-mono text-zinc-500">
                    <span>CONVERSION FLOW VALUE: ENERGIZED</span>
                    <span>ACTIVE GENERATOR: INSTALLED</span>
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
              <div className="mt-8 relative overflow-hidden rounded-xl h-64 border border-white/5 bg-zinc-950 flex items-center justify-center">
                {/* Unified Cinematic Spotlight Orb Target - LARGER, MORE CONFIDENT, GREATER MASS */}
                <div 
                  className="orb-target absolute inset-0 z-10 flex items-center justify-center pointer-events-none select-none"
                  data-orb-scale="1.45"
                  data-orb-opacity="0.75"
                  data-orb-glow="rgba(147, 51, 234, 0.40)"
                  data-orb-theme="large"
                  data-orb-mask="true"
                />

                {/* Macro Consulting Business Architecture scaling frameworks */}
                <div className="absolute inset-0 px-6 py-5 flex flex-col justify-between z-0">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-[9px] text-[#c084fc] uppercase tracking-widest font-extrabold">STAGE III &bull; MACRO ARCHITECTURE MAP</span>
                    <span className="font-mono text-[8px] text-zinc-500 font-bold">SCALE STATUS: MAX VENTURE</span>
                  </div>

                  {/* Complex structural grids representing expanding frameworks */}
                  <div className="relative w-full h-28 flex items-center justify-between px-2">
                    <div className="w-24 h-16 border border-white/10 rounded flex flex-col justify-between p-2 bg-black/50">
                      <span className="font-mono text-[7px] text-zinc-500">AUDIT MODEL</span>
                      <span className="font-sans text-[8px] text-zinc-300 font-light">&bull; Leakages diagnosed</span>
                    </div>

                    <div className="w-4 flex items-center justify-center font-bold text-[#c084fc] font-mono text-xs animate-bounce">
                      &rarr;
                    </div>

                    <div className="w-28 h-20 border border-purple-500/20 rounded flex flex-col justify-between p-2 bg-purple-950/15 shadow-xl">
                      <span className="font-mono text-[7px] text-[#c084fc]">STABILIZATION FRAMEWORK</span>
                      <span className="font-sans text-[8.5px] text-white font-medium">&bull; Interconnected growth systems alignment</span>
                    </div>

                    <div className="w-4 flex items-center justify-center font-bold text-[#c084fc] font-mono text-xs animate-bounce">
                      &rarr;
                    </div>

                    <div className="w-24 h-16 border border-white/10 rounded flex flex-col justify-between p-2 bg-black/50">
                      <span className="font-mono text-[7px] text-zinc-500">EXPAND ENGINE</span>
                      <span className="font-sans text-[8px] text-zinc-300 font-light">&bull; Macro scaling active</span>
                    </div>
                  </div>

                  {/* Operational indicators */}
                  <div className="flex justify-between items-end border-t border-white/5 pt-2">
                    <span className="font-mono text-[7px] text-zinc-500 font-bold">PREDICTABLE MARGIN BLUEPRINT ACTIVE</span>
                    <span className="font-mono text-[7px] text-[#c084fc] font-bold">10x ENTERPRISE STABILITY INDEX</span>
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
