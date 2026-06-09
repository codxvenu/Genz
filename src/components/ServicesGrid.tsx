import { motion } from 'motion/react';
import { Palette, Megaphone, Users, Target, Briefcase, Check, ArrowUpRight } from 'lucide-react';

interface ServicesGridProps {
  onOpenBooking: () => void;
}

export default function ServicesGrid({ onOpenBooking }: ServicesGridProps) {
  const bentoServices = [
    {
      id: 'branding',
      title: 'Branding',
      desc: 'We construct timeless brand universes, positioning, and storytelling that command industry authority.',
      icon: Palette,
      items: ['Brand Identity', 'Logo Systems', 'Packaging Systems', 'Visual Direction'],
      size: 'md:col-span-6',
      accent: 'linear-gradient(135deg, #FBF8FF 0%, #F5ECFF 100%)'
    },
    {
      id: 'marketing',
      title: 'Marketing',
      desc: 'High-frequency outreach programs designed to capture modern buyer behavior across all digital pipelines.',
      icon: Megaphone,
      items: ['Social Media Engineering', 'Strategic Ad Campaigns', 'Performance Marketing', 'Local & Regional Marketing'],
      size: 'md:col-span-6',
      accent: 'linear-gradient(135deg, #FAFAFF 0%, #EEF2FF 100%)'
    },
    {
      id: 'staffing',
      title: 'Staffing',
      desc: 'We solve the hardest scaling bottleneck: quickly qualifying and embedding elite global operators into your workflow.',
      icon: Users,
      items: ['Candidate Recruitment', 'Talent Acquisition', 'Operator Shortlisting', 'HR Alignment & Support'],
      size: 'md:col-span-4',
      accent: 'linear-gradient(135deg, #FDF8FF 0%, #F5F0FF 100%)'
    },
    {
      id: 'acquisition',
      title: 'Customer Acquisition',
      desc: 'We build self-reinforcing pipelines, outbound target machines, and customer retention loops.',
      icon: Target,
      items: ['Qualified Lead Generation', 'Audience Flow Research', 'Customer Retention Loops', 'Automated Growth Funnels'],
      size: 'md:col-span-4',
      accent: 'linear-gradient(135deg, #FAFDFD 0%, #EDFDFB 100%)'
    },
    {
      id: 'consulting',
      title: 'Business Consulting',
      desc: 'Our strategic wing maps roadmaps, analyzes market shifts, and streamlines systems for long-term scale.',
      icon: Briefcase,
      items: ['Business Strategy', 'Growth Milestone Planning', 'In-depth Market Analysis', 'System Scale Architecture'],
      size: 'md:col-span-4',
      accent: 'linear-gradient(135deg, #FCF9FF 0%, #F2F0FF 100%)'
    }
  ];

  return (
    <section 
      id="services-section" 
      className="py-24 sm:py-32 bg-white relative overflow-hidden"
    >
      {/* Top micro light elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[10%] w-[380px] h-[380px] bg-purple-100/30 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper Badge */}
        <div className="flex justify-center mb-6">
          <span className="font-mono text-[9px] tracking-widest text-violet-750 uppercase font-extrabold border border-violet-100 bg-violet-50 px-3.5 py-1.5 rounded-full shadow-soft">
            UNIFIED CAPABILITIES
          </span>
        </div>

        {/* Heading Section */}
        <div className="space-y-4 mb-20 text-center max-w-2xl mx-auto">
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl text-zinc-900 font-extrabold tracking-tight leading-tight">
            Our Multi-Departmental <br />
            <span className="text-gradient-purple">Growth Service Engines.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-zinc-500 font-normal leading-relaxed">
            We don't sell disconnected individual projects. We architect synchronized scaling departments that coordinate directly to multiply your business growth.
          </p>
        </div>

        {/* Spacious Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          {bentoServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                style={{ background: service.accent }}
                className={`${service.size} rounded-[32px] p-8 border border-violet-100/70 hover:border-violet-300 transition-all duration-300 cursor-pointer group shadow-soft hover:shadow-premium flex flex-col justify-between relative overflow-hidden`}
              >
                
                {/* Floating Node decoration inside individual bento */}
                <div className="absolute top-0 right-0 -mr-6 -mt-6 w-24 h-24 bg-violet-200/20 rounded-full blur-2xl pointer-events-none group-hover:bg-violet-300/30 transition-all" />

                {/* Card Top Block */}
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 w-12 h-12 rounded-2xl bg-white border border-violet-100 flex items-center justify-center text-violet-600 shadow-soft group-hover:bg-violet-600 group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-[10px] text-zinc-400 font-bold group-hover:text-violet-600 transition-colors">0{idx + 1}</span>
                  </div>

                  <h3 className="font-sans text-xl font-extrabold text-zinc-900 mb-2 group-hover:text-violet-700 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="font-sans text-xs sm:text-sm text-zinc-550 mb-6 leading-relaxed font-normal">
                    {service.desc}
                  </p>
                </div>

                {/* Card Bottom Block: Tactical checklist & CTA */}
                <div className="space-y-4 pt-4 border-t border-violet-100/50">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.items.map((item) => (
                      <div key={item} className="flex items-center space-x-2 text-zinc-700">
                        <div className="w-4 h-4 rounded-full bg-violet-100 text-violet-700 flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className="text-[11px] font-sans font-medium">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center pt-2">
                    <span className="text-[10px] font-mono tracking-widest text-violet-600 uppercase font-bold group-hover:translate-x-1 transition-transform">
                      EXPLORE FRAMEWORK →
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenBooking();
                      }}
                      className="p-1 px-3.5 bg-white border border-violet-200 rounded-full text-[10px] font-mono text-zinc-650 hover:bg-violet-50 transition-all flex items-center space-x-1"
                    >
                      <span>Request Setup</span>
                      <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                    </button>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
