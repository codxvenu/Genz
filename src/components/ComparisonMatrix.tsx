import { motion } from 'motion/react';
import { Sparkles, HelpCircle, XCircle, CheckCircle, Flame, ArrowRight } from 'lucide-react';

export default function ComparisonMatrix() {
  const agencyPoints = [
    {
      title: 'Runs Ads Only',
      desc: 'Simply buys ad space on Facebook or Google without correcting the backend conversion bottlenecks or pricing structures.'
    },
    {
      title: 'Single Service Scope',
      desc: 'Operates in a narrow silo. If your problem lies in hiring, sales, or logistics, they tell you it is "out of scope."'
    },
    {
      title: 'Project-Based Focus',
      desc: 'Delivers a static asset or single campaign and immediately disengages, leaving you to manage maintenance issues.'
    },
    {
      title: 'Limited Business View',
      desc: 'Chases vanity metrics (e.g. clicks, impressions) rather than connecting results to direct EBITDA multiple gains.'
    }
  ];

  const gbaPoints = [
    {
      title: 'Builds Total Growth Systems',
      desc: 'We construct secure, self-reinforcing pipelines, refining funnels, pricing maps, and retention systems simultaneously.'
    },
    {
      title: 'Multi-Department Support',
      desc: 'We operate as branding designers, direct ad buyers, elite technical recruiters, and strategic consultants combined.'
    },
    {
      title: 'Long-Term Growth Partnerships',
      desc: 'Our operators align deeply with your workspace, continuously optimising systems based on live scalability diagnostics.'
    },
    {
      title: 'Deep Business Focus',
      desc: 'We map every action directly to corporate enterprise value, preparing your startup or brand for long-term exits.'
    }
  ];

  return (
    <section 
      id="why-gba-section" 
      className="py-24 sm:py-32 bg-violet-50/30 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[30%] left-[-10%] w-[350px] h-[350px] bg-purple-100/40 rounded-full blur-[90px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] bg-violet-100/40 rounded-full blur-[90px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper Badge */}
        <div className="flex justify-center mb-6">
          <span className="font-mono text-[9px] tracking-widest text-violet-750 uppercase font-extrabold border border-violet-100 bg-violet-50 px-3.5 py-1.5 rounded-full shadow-soft">
            Strategic Comparison
          </span>
        </div>

        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl text-zinc-900 font-extrabold tracking-tight leading-tight">
            Most Agencies Sell Services. <br />
            <span className="text-gradient-purple">We Build Growth Systems.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-zinc-500 font-normal leading-relaxed">
            Stop stitching together five different vendors. GBA acts as your unified operational growth department.
          </p>
        </div>

        {/* Balanced Side-by-Side Comparison Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Traditional Agency Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 backdrop-blur-md rounded-[32px] p-8 sm:p-10 border border-zinc-200/60 shadow-soft relative"
          >
            <div className="flex items-center space-x-3 mb-8 pb-4 border-b border-zinc-150">
              <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 text-orange-600 flex items-center justify-center">
                <XCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-sans text-lg font-extrabold text-zinc-900">Traditional Agency</h3>
                <p className="font-mono text-[9px] text-zinc-400 uppercase tracking-wider font-semibold">Fragmented Vendors</p>
              </div>
            </div>

            <div className="space-y-6">
              {agencyPoints.map((point) => (
                <div key={point.title} className="space-y-1">
                  <div className="flex items-center space-x-2 text-zinc-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
                    <h4 className="font-sans text-sm font-extrabold">{point.title}</h4>
                  </div>
                  <p className="font-sans text-xs text-zinc-500 leading-relaxed font-normal pl-3.5">
                    {point.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* GBA Unified growth department Column */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-[32px] p-8 sm:p-10 border border-violet-150/80 shadow-premium relative overflow-hidden ring-1 ring-violet-50"
          >
            {/* Soft decorative glow inside our card */}
            <div className="absolute top-0 right-0 -mr-12 -mt-12 w-36 h-36 bg-violet-100/30 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center space-x-3 mb-8 pb-4 border-b border-violet-100/60">
              <div className="w-10 h-10 rounded-xl bg-violet-600 text-white flex items-center justify-center shadow-md shadow-violet-200/70">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-sans text-lg font-extrabold text-violet-700">GBA (Unified growth)</h3>
                <p className="font-mono text-[9px] text-violet-500 uppercase tracking-wider font-extrabold">Outsourced Growth Department</p>
              </div>
            </div>

            <div className="space-y-6">
              {gbaPoints.map((point) => (
                <div key={point.title} className="space-y-1">
                  <div className="flex items-center space-x-2 text-violet-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
                    <h4 className="font-sans text-sm font-extrabold">{point.title}</h4>
                  </div>
                  <p className="font-sans text-xs text-zinc-650 leading-relaxed font-normal pl-3.5">
                    {point.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
