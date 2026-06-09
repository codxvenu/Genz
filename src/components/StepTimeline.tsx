import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, FileText, Play, ZoomIn, Target, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data';

export default function StepTimeline() {
  const [activeIdx, setActiveIdx] = useState(0);

  // Map state numbers to icons
  const getStepIcon = (num: number) => {
    switch (num) {
      case 1:
        return <Compass className="w-5 h-5 text-violet-600" />;
      case 2:
        return <FileText className="w-5 h-5 text-violet-600" />;
      case 3:
        return <Play className="w-5 h-5 text-violet-600" />;
      case 4:
        return <ZoomIn className="w-5 h-5 text-violet-600" />;
      default:
        return <Compass className="w-5 h-5 text-violet-600" />;
    }
  };

  const activeStep = PROCESS_STEPS[activeIdx] || PROCESS_STEPS[0];

  return (
    <section 
      id="timeline-section" 
      className="py-24 sm:py-32 bg-white relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[40%] right-[-10%] w-[350px] h-[350px] bg-violet-100/30 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper Badge */}
        <div className="flex justify-center mb-6">
          <span className="font-mono text-[9px] tracking-widest text-violet-750 uppercase font-extrabold border border-violet-100 bg-violet-50 px-3.5 py-1.5 rounded-full shadow-soft">
            The Timeline Sequence
          </span>
        </div>

        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl text-zinc-900 font-extrabold tracking-tight leading-tight">
            How We Build <br />
            <span className="text-gradient-purple">Your Growth Department.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-zinc-550 font-normal leading-relaxed">
            Our sequential execution playbook guarantees absolute operational transparency from day one to launch.
          </p>
        </div>

        {/* Timeline Interactive Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left: Interactive 4-step vertical navigator */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
            <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest font-extrabold mb-1">
              Sequence Track (Click Steps)
            </span>

            {PROCESS_STEPS.map((step, idx) => {
              const isActive = idx === activeIdx;
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveIdx(idx)}
                  className={`w-full flex items-center p-5 rounded-3xl border text-left cursor-pointer transition-all duration-300 relative ${
                    isActive 
                      ? 'bg-violet-600 border-violet-600 text-white shadow-premium' 
                      : 'bg-white border-violet-100/70 hover:border-violet-300 text-zinc-700 shadow-soft'
                  }`}
                >
                  {/* Step index */}
                  <span className={`font-mono text-sm font-extrabold mr-4 ${isActive ? 'text-violet-200' : 'text-violet-600'}`}>
                    0{step.number}
                  </span>

                  <div className="flex-1 space-y-1">
                    <h3 className="font-sans text-base font-extrabold tracking-tight leading-none">
                      {step.title}
                    </h3>
                    <p className={`font-mono text-[10px] uppercase font-bold ${isActive ? 'text-violet-100' : 'text-zinc-450'}`}>
                      {step.duration}
                    </p>
                  </div>

                  {isActive ? (
                    <div className="w-2 h-2 rounded-full bg-white animate-ping" />
                  ) : (
                    <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-1 transition-transform" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right: Detailed Content Display Cell */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-[32px] border border-violet-100/70 p-8 sm:p-10 shadow-premium relative overflow-hidden h-full flex flex-col justify-between"
              >
                
                {/* Visual elements */}
                <div className="absolute top-0 right-0 -mr-12 -mt-12 w-40 h-40 bg-violet-100/20 rounded-full blur-2xl pointer-events-none" />

                <div className="space-y-8">
                  {/* Step badge info */}
                  <div className="flex justify-between items-center pb-4 border-b border-violet-100/50">
                    <div className="flex items-center space-x-3">
                      <div className="p-2.5 bg-violet-50 rounded-xl border border-violet-100">
                        {getStepIcon(activeStep.number)}
                      </div>
                      <div>
                        <span className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest font-extrabold">Active Milestone</span>
                        <h4 className="font-sans text-xs font-extrabold text-zinc-700 leading-none">STAGE 0{activeStep.number}</h4>
                      </div>
                    </div>

                    <div className="px-3 py-1.5 bg-violet-50 border border-violet-100 rounded-full font-mono text-[10px] text-violet-600 font-extrabold">
                      {activeStep.duration}
                    </div>
                  </div>

                  {/* Descriptions */}
                  <div className="space-y-3">
                    <h3 className="font-sans text-2xl sm:text-3xl text-zinc-900 font-extrabold tracking-tight leading-tight">
                      {activeStep.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-zinc-550 leading-relaxed font-normal">
                      {activeStep.description}
                    </p>
                  </div>
                </div>

                {/* Scope deliverable assets statement */}
                <div className="mt-8 p-4 bg-violet-50/50 border border-violet-100/50 rounded-2xl space-y-2">
                  <div className="flex items-center space-x-2 text-violet-700">
                    <Target className="w-4 h-4 text-violet-600" />
                    <span className="font-mono text-[9px] uppercase tracking-wider font-extrabold">CONCRETE STAGE DELIVERABLE</span>
                  </div>
                  <p className="font-mono text-xs text-zinc-800 font-bold pl-6">
                    {activeStep.deliverable}
                  </p>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
