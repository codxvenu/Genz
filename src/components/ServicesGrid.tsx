import { useState } from 'react';
import { 
  Sparkles, 
  Megaphone, 
  Users, 
  Briefcase, 
  Target, 
  TrendingUp, 
  Check, 
  ArrowRight,
  HelpCircle
} from 'lucide-react';
import { SERVICES } from '../data';
import { Service } from '../types';

interface ServicesGridProps {
  onOpenBooking: () => void;
}

export default function ServicesGrid({ onOpenBooking }: ServicesGridProps) {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('branding');

  // Map icon strings to Lucide icon components
  const renderIcon = (name: string, className: string) => {
    switch (name) {
      case 'Sparkles':
        return <Sparkles className={className} />;
      case 'Megaphone':
        return <Megaphone className={className} />;
      case 'Users':
        return <Users className={className} />;
      case 'Briefcase':
        return <Briefcase className={className} />;
      case 'Target':
        return <Target className={className} />;
      case 'TrendingUp':
        return <TrendingUp className={className} />;
      default:
        return <HelpCircle className={className} />;
    }
  };

  const selectedService = SERVICES.find(s => s.id === selectedServiceId) || SERVICES[0];

  return (
    <section 
      id="services-section" 
      className="py-20 sm:py-28 bg-black/95 border-t border-zinc-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header summary text */}
        <div className="space-y-4 mb-14 md:mb-20 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-2">
            <span className="w-1 h-3 bg-zinc-500 rounded-full" />
            <span className="font-mono text-[10px] tracking-widest text-zinc-400 uppercase">Modular Scale Divisions</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white tracking-wide">
            One Unified Partner, <br />
            <span className="italic font-light text-zinc-400">Unlimited Execution Power</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
            We don't merely consult. We plug deep operational engines directly into your brand, solving product positioning, acquisition, staffing, and marketing simultaneously.
          </p>
        </div>

        {/* 6 Divisions Selector Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {SERVICES.map((service) => {
            const isSelected = service.id === selectedServiceId;
            return (
              <div
                id={`service-card-${service.id}`}
                key={service.id}
                onClick={() => setSelectedServiceId(service.id)}
                className={`relative group p-6 rounded-3xl border transition-all duration-300 cursor-pointer ${
                  isSelected 
                    ? 'glass border-white/20 bg-white/5 shadow-xl shadow-black/80 ring-1 ring-white/10' 
                    : 'glass border-white/5 bg-transparent hover:border-white/15'
                }`}
              >
                {/* Micro accent corner */}
                {isSelected && (
                  <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                )}

                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl border transition-all duration-300 ${
                    isSelected 
                      ? 'bg-white text-black border-white' 
                      : 'bg-white/3 text-zinc-400 border-white/8 group-hover:border-white/20 group-hover:text-white'
                  }`}>
                    {renderIcon(service.icon, 'w-5 h-5')}
                  </div>
                  <div className="space-y-1 pr-4">
                    <h3 className="font-serif text-base text-white tracking-wide font-normal">{service.title}</h3>
                    <p className="font-sans text-xs text-zinc-450 line-clamp-1">{service.tagline}</p>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  {service.stat ? (
                    <div className="font-mono text-[9px] text-zinc-400 uppercase tracking-wider">
                      <strong className="text-white bg-white/5 px-2 py-1 rounded border border-white/10">{service.stat.value}</strong>
                    </div>
                  ) : (
                    <div />
                  )}
                  <span className={`text-[9px] font-mono tracking-widest uppercase transition-all duration-300 ${
                    isSelected ? 'text-white translate-x-1' : 'text-zinc-550 group-hover:text-zinc-300'
                  }`}>
                    View Blueprint →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Detailed Workspace Showcase Panes */}
        <div className="relative glass border border-white/10 rounded-3xl p-6 sm:p-10 overflow-hidden">
          
          {/* Subtle light effect top edge */}
          <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
            
            {/* Left detail description block */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="font-mono text-[9px] tracking-widest text-zinc-500 uppercase font-semibold">Active Blueprint Workspace</span>
                  <span className="text-zinc-700">|</span>
                  <span className="font-mono text-[10px] text-white/80 uppercase tracking-widest font-semibold">{selectedService.id}</span>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl text-white tracking-wide">
                  {selectedService.title}
                </h3>
                <p className="font-sans text-sm text-zinc-400 italic">
                  "{selectedService.tagline}"
                </p>
              </div>

              <p className="font-sans text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
                {selectedService.description}
              </p>

              {/* Deliverable Lists */}
              <div className="space-y-3 pt-2">
                <h4 className="font-mono text-[9px] tracking-widest text-zinc-500 uppercase font-semibold">Tactical Engineering Areas</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.items.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2.5">
                      <div className="flex items-center justify-center w-5 h-5 rounded-md bg-white/5 border border-white/10 text-zinc-300 shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-xs text-zinc-300 font-sans font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right statistics preview highlight card */}
            <div className="lg:col-span-5 flex flex-col justify-between p-6 glass border border-white/10 rounded-3xl relative space-y-6">
              
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase font-semibold">Decision Metric</span>
                  <span className="text-[9px] font-mono tracking-widest text-zinc-400 uppercase font-semibold">System Audited</span>
                </div>
                
                {selectedService.stat && (
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] text-zinc-500 uppercase">Expected System Result</span>
                    <h4 className="text-4xl sm:text-5xl font-mono font-bold text-white tracking-tight">{selectedService.stat.value}</h4>
                    <p className="text-xs text-zinc-400 font-sans italic">{selectedService.stat.label}</p>
                  </div>
                )}
              </div>

              {/* Micro interactive mockup content placeholder representing structural analysis schema */}
              <div className="p-4 bg-black/40 border border-white/5 rounded-2xl space-y-2">
                <div className="flex items-center space-x-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span className="font-mono text-[8px] text-zinc-500 uppercase tracking-widest font-semibold">Active Client Integration Path</span>
                </div>
                <div className="space-y-1.5">
                  <div className="h-1 bg-white/5 rounded w-full" />
                  <div className="h-1 bg-white/5 rounded w-11/12" />
                  <div className="h-1 bg-white/5 rounded w-4/5" />
                </div>
              </div>

              {/* Conversion CTA targeting specific service selected */}
              <button
                onClick={onOpenBooking}
                className="w-full py-4 bg-white text-black hover:bg-zinc-200 text-xs font-mono rounded-full font-bold tracking-widest uppercase transition-colors flex items-center justify-center space-x-1.5 cursor-pointer"
              >
                <span>Commission {selectedService.title.toUpperCase()}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
