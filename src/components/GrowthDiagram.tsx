import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Layers, 
  GitCommit, 
  Megaphone, 
  Users, 
  TrendingUp, 
  Target, 
  CheckCircle2, 
  Briefcase 
} from 'lucide-react';

interface NodeChallenge {
  id: string;
  label: string;
  icon: React.ReactNode;
  problem: string;
  solution: string;
  deliverable: string;
}

export default function GrowthDiagram() {
  const [activeNodeId, setActiveNodeId] = useState<string>('branding');

  const challenges: NodeChallenge[] = [
    {
      id: 'branding',
      label: 'Branding & Design',
      icon: <Sparkles className="w-4 h-4" />,
      problem: 'Struggling to command premium prices due to amateur or placeholder visual presentation.',
      solution: 'We construct an integrated, luxury brand identity that projects immediate trust and authority.',
      deliverable: 'Corporate Identity Book, Custom Typography Systems, Asset Packaging Guides.'
    },
    {
      id: 'marketing',
      label: 'Omnichannel Marketing',
      icon: <Megaphone className="w-4 h-4" />,
      problem: 'High customer acquisition costs (CAC) due to generic, stale direct-response advertisements.',
      solution: 'Creative production pipeline focused on current internet attention and authentic creator alignment.',
      deliverable: 'Dynamic Creative Ad Packs, Social Platform Funnels, Regional Campaigns.'
    },
    {
      id: 'staffing',
      label: 'Staffing & Hiring',
      icon: <Users className="w-4 h-4" />,
      problem: 'Founders spending 50%+ of their creative time filtering candidates instead of building.',
      solution: 'End-to-end recruitment pipelines filtering elite global talent within 18 days.',
      deliverable: 'Pre-vetted engineering, brand & sales hires, aligned salary maps.'
    },
    {
      id: 'decisions',
      label: 'Business Decisions',
      icon: <Briefcase className="w-4 h-4" />,
      problem: 'Expanding into wrong markets or launching products with negative unit economics.',
      solution: 'Intelligent geodemographic mapping and rigor-tested financial structural models.',
      deliverable: 'Geo-Locational Feasibility Maps, Customer LTV:CAC Audit, Pricing Models.'
    },
    {
      id: 'acquisition',
      label: 'Customer Acquisition',
      icon: <Target className="w-4 h-4" />,
      problem: 'Ad-hoc sales cycles and chaotic customer intake pipelines.',
      solution: 'Automated CRM systems and B2B email sequence programmatic engines built for infinite scaling.',
      deliverable: 'CRM Pipelines, High-Intent Conversion Flow Funnels, Outbound Playbooks.'
    }
  ];

  const activeNode = challenges.find(c => c.id === activeNodeId) || challenges[0];

  return (
    <section 
      id="diagram-section" 
      className="py-20 sm:py-28 bg-black border-t border-zinc-900 text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title section */}
        <div className="space-y-4 mb-16 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-2">
            <span className="w-1 h-3 bg-zinc-500 rounded-full" />
            <span className="font-mono text-[10px] tracking-widest text-zinc-400 uppercase">Interactive Structural Flow</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-white tracking-wide">
            One Partner For <br />
            <span className="italic font-light text-zinc-400">Every Stage Of Growth</span>
          </h2>
          <p className="text-sm text-zinc-400 font-light leading-relaxed">
            Unlike disjointed agencies, we align everything. See how your fundamental operations connect into a unified scaling engine. Click each need node to explore how we bridge the gap.
          </p>
        </div>

        {/* Visual Multi-Node interactive diagram diagram box */}
        <div className="relative glass border border-white/10 rounded-3xl p-6 sm:p-10 mb-10 overflow-hidden">
          
          {/* Subtle light spotlight overlaying the active connections */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-zinc-900/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Column 1: The Client (Startup) - Left Node */}
            <div className="lg:col-span-3 flex flex-col items-center lg:items-end justify-center text-center lg:text-right space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                <span className="font-mono text-[9px] text-zinc-400 uppercase font-semibold">Input Vector</span>
              </div>
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white/3 border border-white/10 flex flex-col items-center justify-center p-4 shadow-xl select-none">
                <Layers className="w-6 h-6 text-white mb-1" />
                <span className="font-serif text-sm text-white">Scaling</span>
                <span className="font-mono text-[9px] text-zinc-500 uppercase">Startup</span>
              </div>
              <p className="text-[11px] text-zinc-400 leading-normal max-w-[180px] font-light">
                Ambitious enterprise seeking brand authority, customer volume, and elite talent.
              </p>
            </div>

            {/* Column 2: Challenge Node Links - Center Node */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center space-y-3 relative py-4">
              
              {/* Vertical link connector trace visual line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent pointer-events-none hidden lg:block" />

              {challenges.map((challenge) => {
                const isActive = challenge.id === activeNodeId;
                return (
                  <button
                    key={challenge.id}
                    onClick={() => setActiveNodeId(challenge.id)}
                    className={`w-full max-w-sm flex items-center justify-between p-3.5 rounded-2xl border transition-all duration-300 relative group cursor-pointer ${
                      isActive 
                        ? 'bg-white border-white text-black shadow-md' 
                        : 'glass border-white/5 text-zinc-400 hover:border-white/15 hover:text-white'
                    }`}
                  >
                    {/* Visual directional vector bullets */}
                    <div className="flex items-center space-x-3">
                      <div className={`p-1.5 rounded-md border transition-all duration-300 ${
                        isActive ? 'bg-black text-white border-black' : 'bg-white/3 text-zinc-400 border-white/10'
                      }`}>
                        {challenge.icon}
                      </div>
                      <span className="text-xs font-sans font-medium tracking-wide">{challenge.label}</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <span className={`text-[9px] font-mono uppercase tracking-wider ${isActive ? 'text-black/80 font-bold' : 'text-zinc-500 group-hover:text-zinc-300'}`}>
                        {isActive ? 'Active Path' : 'Select'}
                      </span>
                      <GitCommit className={`w-3.5 h-3.5 transition-colors ${isActive ? 'text-black' : 'text-zinc-650'}`} />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Column 3: The Target (Agency) - Right Node */}
            <div className="lg:col-span-3 flex flex-col items-center lg:items-start justify-center text-center lg:text-left space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                <span className="font-mono text-[9px] text-zinc-300 uppercase">Growth Resolve</span>
              </div>
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white text-black flex flex-col items-center justify-center p-4 shadow-xl select-none relative group hover:scale-[1.02] transition-transform duration-300">
                {/* Visual tiny glowing aura */}
                <div className="absolute inset-0 rounded-full border border-white/20 animate-ping group-hover:block" />
                <Sparkles className="w-6 h-6 text-black mb-1" />
                <span className="font-serif text-sm font-semibold text-center leading-none">Gen-Z</span>
                <span className="font-mono text-[9px] text-zinc-600 uppercase mt-0.5 font-bold">Agency</span>
              </div>
              <p className="text-[11px] text-zinc-400 leading-normal max-w-[180px] font-light">
                Modular deployment model that transforms raw challenges into high-EBITDA operational engines.
              </p>
            </div>

          </div>
        </div>

        {/* Diagnostic breakdown sheet mapping activeNode solutions */}
        <div className="glass border border-white/10 rounded-3xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          
          <div className="space-y-1 md:border-r md:border-white/10 md:pr-6">
            <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-500 block font-semibold">01 / Challenge Definition</span>
            <h4 className="text-sm font-serif font-semibold text-white mt-1">The Traditional Obstacle</h4>
            <p className="text-xs text-zinc-400 leading-relaxed mt-2">{activeNode.problem}</p>
          </div>

          <div className="space-y-1 md:border-r md:border-white/10 md:px-6">
            <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-500 block font-semibold">02 / Gen-Z Strategy Solution</span>
            <h4 className="text-sm font-serif font-semibold text-zinc-100 mt-1">Our Integrated Architecture</h4>
            <p className="text-xs text-zinc-400 leading-relaxed mt-2">{activeNode.solution}</p>
          </div>

          <div className="space-y-1 md:pl-6">
            <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-500 block font-semibold">03 / Quantifiable Deliverables</span>
            <h4 className="text-sm font-serif font-semibold text-zinc-100 mt-1">Operational Assets</h4>
            <p className="text-xs text-zinc-400 leading-relaxed mt-2 font-mono">{activeNode.deliverable}</p>
          </div>

          {/* Bottom tag line constraint */}
          <div className="col-span-1 md:col-span-3 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-zinc-400" />
              <span className="font-sans text-xs text-zinc-350">
                Single Agency Accountability — zero fragmented vendor finger-pointing.
              </span>
            </div>
            <span className="font-serif italic text-xs text-zinc-400">
              "Stand Together. Build Together. Grow Together."
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
