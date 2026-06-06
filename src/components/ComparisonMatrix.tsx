import { useState } from 'react';
import { Shield, Sparkles, Check, AlertCircle } from 'lucide-react';

interface ComparisonRow {
  feature: string;
  typicalAgency: string;
  genZAgency: string;
}

export default function ComparisonMatrix() {
  const [activeTab, setActiveTab2] = useState<'alignment' | 'action' | 'scope'>('alignment');

  const rows: Record<'alignment' | 'action' | 'scope', ComparisonRow[]> = {
    alignment: [
      {
        feature: 'Fee Structure',
        typicalAgency: 'Heavy fixed monthly retainers regardless of execution outcome.',
        genZAgency: 'Competitive base model paired with growth/performance milestone bonuses.'
      },
      {
        feature: 'Incentive Structure',
        typicalAgency: 'Maximize their own margin by keeping work localized to generic templates.',
        genZAgency: 'Total alignment. Our team expands only when your ARR scales up.'
      }
    ],
    action: [
      {
        feature: 'Integration Speed',
        typicalAgency: '4-6 weeks of onboarding meetings, template handoffs, and passive planning.',
        genZAgency: 'Audit begins in Week 1. Active ad pipelines and hires rolling by Week 4.'
      },
      {
        feature: 'Team Interaction',
        typicalAgency: 'Isolated ticket queues and slow email threads.',
        genZAgency: 'Direct Slack/Discord engineering, sync calls, and daily alignment.'
      }
    ],
    scope: [
      {
        feature: 'Operational Scope',
        typicalAgency: 'Only runs ads or only builds websites. No support for hiring or strategy.',
        genZAgency: 'Complete system: custom branding, ad buying, talent hunting, and local expansions.'
      },
      {
        feature: 'Intellectual Property',
        typicalAgency: 'Often locks your brand to proprietary platforms and secret campaigns.',
        genZAgency: '100% Client-Owned. Your code, your media accounts, your CRM assets.'
      }
    ]
  };

  return (
    <section 
      id="matrix-section" 
      className="py-20 sm:py-28 bg-black/95 border-t border-zinc-905 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Headline Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-14 md:mb-20 items-end">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center space-x-2">
              <Shield className="w-4 h-4 text-zinc-400" />
              <span className="font-mono text-[10px] tracking-widest text-zinc-400 uppercase font-medium">Core Value Propositions</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white tracking-wide leading-tight">
              More Than An Agency. <br />
              <span className="italic font-light text-zinc-400">We Build Your Core Systems</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm text-zinc-400 leading-relaxed font-light">
              Typical agencies only market your business. <strong>We partner to build it.</strong> We audit every component—analyzing conversion pipelines, staffing models, and locational footprinting to craft systemic, compounding capital.
            </p>
          </div>
        </div>

        {/* Dynamic Selector Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-white/5">
          {(['alignment', 'action', 'scope'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab2(tab)}
              className={`px-5 py-2.5 font-mono text-[10px] tracking-widest uppercase rounded-full transition-all cursor-pointer whitespace-nowrap ${
                activeTab === tab 
                  ? 'bg-white text-black font-bold shadow-md' 
                  : 'glass text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab === 'alignment' && '01 / Financial Alignment'}
              {tab === 'action' && '02 / Speed & Action'}
              {tab === 'scope' && '03 / Full-Spectrum Scope'}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rows[activeTab].map((row, idx) => (
            <div 
              key={idx}
              className="glass border border-white/10 rounded-3xl overflow-hidden shadow-xl"
            >
              {/* Feature Header */}
              <div className="p-5 border-b border-white/10 bg-white/3 flex items-center justify-between">
                <span className="font-serif text-base sm:text-lg text-white font-medium">{row.feature}</span>
                <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
              </div>

              {/* Matrix Compare layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
                
                {/* Typical agency block */}
                <div className="p-6 space-y-2.5 bg-white/1">
                  <div className="flex items-center space-x-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                    <span className="font-mono text-[9px] tracking-wider text-zinc-500 uppercase font-semibold">Typical Agencies</span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                    {row.typicalAgency}
                  </p>
                </div>

                {/* Gen-Z agency block */}
                <div className="p-6 space-y-2.5 bg-white/4">
                  <div className="flex items-center space-x-1.5">
                    <Check className="w-3.5 h-3.5 text-zinc-300 shrink-0" />
                    <span className="font-mono text-[9px] tracking-wider text-white uppercase font-bold">Gen-Z Agency</span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-normal">
                    {row.genZAgency}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
