import { motion } from 'motion/react';
import { ShieldAlert, Split, RefreshCw, Layers, AlertCircle, Sparkles } from 'lucide-react';

export default function ProblemSection() {
  const challenges = [
    {
      title: 'Branding',
      desc: 'Disconnect between brand values & creative collateral.',
      icon: Layers,
      color: 'border-red-100 bg-red-50/50 text-red-600'
    },
    {
      title: 'Marketing',
      desc: 'Expensive media buyers running unoptimized direct-ad spend.',
      icon: RefreshCw,
      color: 'border-amber-100 bg-amber-50/50 text-amber-600'
    },
    {
      title: 'Hiring',
      desc: 'Failing to qualify and source specialized operators on time.',
      icon: Split,
      color: 'border-rose-100 bg-rose-50/50 text-rose-600'
    },
    {
      title: 'Customer Acquisition',
      desc: 'Unpredictable leads, leaky retainers, and poor pipeline ROI.',
      icon: ShieldAlert,
      color: 'border-yellow-105 bg-yellow-50/50 text-yellow-600'
    },
    {
      title: 'Business Growth',
      desc: 'Fragmented tactical plans with no unified scale system coordination.',
      icon: AlertCircle,
      color: 'border-orange-100 bg-orange-50/50 text-orange-600'
    }
  ];

  return (
    <section 
      id="problem-section" 
      className="py-24 sm:py-32 bg-white relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] bg-red-100/30 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading Tag */}
        <div className="flex justify-center mb-6">
          <span className="font-mono text-[9px] tracking-widest text-zinc-450 uppercase font-bold border border-zinc-200 bg-zinc-50 px-3.5 py-1.5 rounded-full shadow-soft">
            The Scaling Friction
          </span>
        </div>

        {/* Headline */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl text-zinc-900 font-extrabold tracking-tight leading-tight">
            Growing A Business Shouldn't Mean <br />
            <span className="text-gradient-purple">Managing Five Different Agencies.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-zinc-500 font-normal max-w-xl mx-auto">
            Too many leaders spend their days coordinating misaligned consultants, leading to absolute strategy fragmentation.
          </p>
        </div>

        {/* Display animated business challenges */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-14">
          {challenges.map((challenge, idx) => {
            const Icon = challenge.icon;
            return (
              <motion.div
                key={challenge.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-5 rounded-2xl border ${challenge.color} shadow-soft flex flex-col justify-between h-[160px] relative overflow-hidden`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-zinc-500">0{idx + 1}</span>
                  <Icon className="w-5 h-5 opacity-80" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-sans text-sm font-extrabold text-zinc-900">{challenge.title}</h4>
                  <p className="font-sans text-[10px] text-zinc-500 leading-normal font-medium">{challenge.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Reveal Resolution Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-premium rounded-[30px] p-8 sm:p-12 text-center relative overflow-hidden border border-violet-100 bg-gradient-to-r from-violet-50/50 to-purple-50/50"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-violet-200/40 rounded-full blur-[80px]" />
          
          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center space-x-1.5 bg-violet-100/60 px-3 py-1 rounded-full text-violet-700">
              <Sparkles className="w-3.5 h-3.5 text-violet-600 animate-pulse" />
              <span className="font-mono text-[9px] uppercase tracking-wider font-extrabold">The Solution Blueprint</span>
            </div>
            
            <h3 className="font-sans text-2xl sm:text-3xl text-zinc-900 font-extrabold tracking-tight">
              "You don't need more vendors. <br />
              <span className="text-violet-600 relative">
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-violet-200/60 -z-10 rounded-full" />
                You need one growth partner."
              </span>
            </h3>
            
            <p className="font-mono text-[10px] text-zinc-400 tracking-wider uppercase font-semibold">
              GBA consolidates the full-stack scaling operational ecosystem under one cohesive operator.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
