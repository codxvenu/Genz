import { useState } from 'react';
import { Sparkles, Calendar, Target, Hourglass, Landmark } from 'lucide-react';
import { PROCESS_STEPS } from '../data';

export default function StepTimeline() {
  const [activeStepIdx, setActiveStepIdx] = useState(0);

  const activeStep = PROCESS_STEPS[activeStepIdx];

  return (
    <section 
      id="timeline-section" 
      className="py-20 sm:py-28 bg-black text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block copy */}
        <div className="space-y-4 mb-16 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-2">
            <span className="w-1 h-3 bg-zinc-500 rounded-full" />
            <span className="font-mono text-[10px] tracking-widest text-zinc-400 uppercase">Operational Milestones</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white tracking-wide">
            The Integration Sequence
          </h2>
          <p className="text-sm text-zinc-400 font-light leading-relaxed">
            How we scale a system from 0 to Hero. Simple milestones, high programmatic intensity, and complete operational transparency.
          </p>
        </div>

        {/* Timeline Desktop Interactive Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          
          {/* Left panel: Vertical 6 Steps Navigator */}
          <div className="lg:col-span-5 space-y-3">
            <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block mb-1 font-semibold">Execution Pipeline Sequential</span>
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = idx === activeStepIdx;
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStepIdx(idx)}
                  className={`w-full flex items-center p-4 rounded-2xl border text-left cursor-pointer transition-all duration-300 relative ${
                    isActive 
                      ? 'bg-white border-white text-black shadow-md' 
                      : 'glass border-white/5 hover:border-white/15 text-zinc-455'
                  }`}
                >
                  <span className={`font-mono text-xs font-semibold mr-4 ${isActive ? 'text-black' : 'text-zinc-650'}`}>
                    0{step.number}
                  </span>
                  <div className="flex-1 space-y-0.5">
                    <h3 className={`font-serif text-sm tracking-wide ${isActive ? 'text-black font-semibold' : 'text-zinc-300 font-light'}`}>
                      {step.title}
                    </h3>
                    <p className={`font-mono text-[9px] uppercase ${isActive ? 'text-black/60' : 'text-zinc-500'}`}>{step.duration}</p>
                  </div>

                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-black ml-2 animate-pulse" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right panel: Active Step details showcase */}
          <div className="lg:col-span-7">
            <div className="glass border border-white/10 rounded-3xl p-6 sm:p-10 relative overflow-hidden h-full flex flex-col justify-between">
              
              {/* Top hairline glass effect */}
              <div className="absolute top-0 left-0 w-[1px] h-1/2 bg-gradient-to-b from-white/10 to-transparent" />
              <div className="absolute -right-24 -bottom-24 w-60 h-60 bg-white/3 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center space-x-2.5">
                    <span className="font-serif text-3xl sm:text-4xl text-zinc-500 font-light">0{activeStep.number}</span>
                    <span className="text-zinc-700">|</span>
                    <span className="font-mono text-[9px] tracking-widest text-zinc-400 uppercase font-semibold">Active Discovery Phases</span>
                  </div>
                  <div className="flex items-center space-x-1 border border-white/10 px-3 py-1 bg-white/5 rounded-full">
                    <Hourglass className="w-3 h-3 text-zinc-400" />
                    <span className="font-mono text-[10px] text-zinc-400">{activeStep.duration}</span>
                  </div>
                </div>

                <div className="space-y-3 py-2">
                  <h4 className="font-serif text-2xl sm:text-3xl text-white tracking-wide">{activeStep.title}</h4>
                  <p className="font-sans text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
                    {activeStep.description}
                  </p>
                </div>
              </div>

              {/* Physical Deliverable asset tag */}
              <div className="mt-8 p-4 bg-white/3 border border-white/10 rounded-2xl space-y-2 relative z-10">
                <div className="flex items-center space-x-2 text-zinc-400">
                  <Target className="w-3.5 h-3.5 text-white" />
                  <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-400 font-semibold">Phase Concrete Deliverable Assets</span>
                </div>
                <p className="font-mono text-xs text-white leading-normal pl-5">
                  {activeStep.deliverable}
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
