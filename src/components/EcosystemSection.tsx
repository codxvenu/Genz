import { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Palette, Megaphone, Users, Target, Briefcase, TrendingUp } from 'lucide-react';

export default function EcosystemSection() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const surroundingNodes = [
    {
      id: 'branding',
      title: 'Branding',
      icon: Palette,
      angle: 0,
      description: 'Logos, systems, design, brand guidelines.'
    },
    {
      id: 'marketing',
      title: 'Marketing',
      icon: Megaphone,
      angle: 60,
      description: 'Campaigns, social content, reach networks.'
    },
    {
      id: 'staffing',
      title: 'Staffing & HR',
      icon: Users,
      angle: 120,
      description: 'Principal operators, vetting, sourcing pipelines.'
    },
    {
      id: 'customer_acq',
      title: 'Customer Acquisition',
      icon: Target,
      angle: 180,
      description: 'Outbound sequences, conversion funnels, leads.'
    },
    {
      id: 'consulting',
      title: 'Consulting',
      icon: Briefcase,
      angle: 240,
      description: 'Unit economics models & diagnostic audits.'
    },
    {
      id: 'growth_strategy',
      title: 'Growth Strategy',
      icon: TrendingUp,
      angle: 300,
      description: 'Comprehensive 120-day scale milestones.'
    }
  ];

  // Map polar angles to responsive desktop CSS positions (percentages from center 50%, 50%)
  const radius = 35; // % of container width

  return (
    <section 
      id="ecosystem-section" 
      className="py-24 sm:py-32 bg-gradient-to-b from-white to-violet-50/50 relative overflow-hidden"
    >
      {/* Background Soft Glows */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-100/50 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper Micro Tag */}
        <div className="flex justify-center mb-6">
          <span className="font-mono text-[9px] tracking-widest text-violet-750 uppercase font-extrabold border border-violet-100 bg-violet-50 px-3.5 py-1.5 rounded-full shadow-soft">
            UNIFIED ECOSYSTEM
          </span>
        </div>

        {/* Section Headline */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl text-zinc-900 font-extrabold tracking-tight leading-tight">
            One Partner. <br />
            <span className="text-gradient-purple">Every Growth Problem.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-zinc-550 font-normal max-w-lg mx-auto">
            Hover over the capability pillars to observe how all growth tracks converge dynamically towards your dedicated GBA department.
          </p>
        </div>

        {/* Visual Interactive Diagram Arena */}
        <div className="relative w-full max-w-[700px] mx-auto aspect-square md:aspect-[4/3] flex items-center justify-center border border-violet-105/50 rounded-[48px] bg-white/40 backdrop-blur-md p-6 sm:p-12 shadow-premium">
          
          {/* Constellation lines inside the arena */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            {surroundingNodes.map((node) => {
              // Convert Polar to Cartesian coordinates (Relative to 50% center)
              const angleRad = (node.angle * Math.PI) / 180;
              const xPos = 50 + radius * Math.cos(angleRad);
              const yPos = 50 + radius * Math.sin(angleRad);

              const isHovered = hoveredNode === node.id;
              
              return (
                <g key={node.id}>
                  {/* Outer line */}
                  <line
                    x1="50%"
                    y1="50%"
                    x2={`${xPos}%`}
                    y2={`${yPos}%`}
                    stroke={isHovered ? '#8B5CF6' : '#E6D8FF'}
                    strokeWidth={isHovered ? '2.5' : '1.5'}
                    className="transition-all duration-300"
                  />
                  {/* Pulsing signal dot travelling towards center */}
                  <circle r="4" fill="#8B5CF6" className="animate-[pulse_1.5s_infinite]">
                    <animateMotion
                      dur="2s"
                      repeatCount="indefinite"
                      path={`M ${xPos} 50 L 50 50`}
                      keyPoints="0;1"
                      keyTimes="0;1"
                    />
                  </circle>
                  {isHovered && (
                    <circle cx={`${xPos}%`} cy={`${yPos}%`} r="12" fill="#B388FF" className="opacity-20 animate-ping" />
                  )}
                </g>
              );
            })}
          </svg>

          {/* Core Center Node GBA */}
          <div className="relative z-20 flex flex-col items-center justify-center w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-violet-600 text-white shadow-lg shadow-violet-300 border-2 border-white select-none animate-float">
            <Sparkles className="w-6 h-6 mb-1 text-white animate-spin" style={{ animationDuration: '8s' }} />
            <h3 className="font-sans text-2xl font-black leading-none">GBA</h3>
            <p className="font-mono text-[8px] tracking-wider uppercase mt-1 text-violet-100 font-bold">The Hub</p>
          </div>

          {/* Surrounding Nodes Mapping */}
          {surroundingNodes.map((node) => {
            const angleRad = (node.angle * Math.PI) / 180;
            // polar placement
            const xVal = radius * Math.cos(angleRad);
            const yVal = radius * Math.sin(angleRad);
            const Icon = node.icon;
            const isHovered = hoveredNode === node.id;

            return (
              <div
                key={node.id}
                style={{
                  position: 'absolute',
                  left: `calc(50% + ${xVal}% - 40px)`,
                  top: `calc(50% + ${yVal}% - 40px)`,
                }}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full flex flex-col items-center justify-center cursor-pointer transition-all duration-300 border backdrop-blur-md select-none ${
                  isHovered 
                    ? 'bg-violet-100 border-violet-400 text-violet-700 shadow-bold scale-110 z-10' 
                    : 'bg-white border-violet-100 text-zinc-700 hover:border-violet-300 shadow-soft'
                }`}
              >
                <Icon className={`w-5 h-5 mb-1 ${isHovered ? 'text-violet-700 scale-110' : 'text-zinc-500'} transition-transform duration-300`} />
                <span className="font-mono text-[8px] sm:text-[9px] text-center px-1 font-bold tracking-tight leading-tight uppercase">
                  {node.title}
                </span>
              </div>
            );
          })}

          {/* Information description card at the bottom of the arena */}
          <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 bg-white/70 backdrop-blur-md border border-violet-100/50 p-3 sm:py-4 sm:px-6 rounded-2xl flex items-center justify-center select-none shadow-soft z-20 min-h-[50px]">
            {hoveredNode ? (
              <p className="font-sans text-xs sm:text-sm text-zinc-700 text-center font-normal animate-fade-in">
                <strong>{surroundingNodes.find(n => n.id === hoveredNode)?.title} Track:</strong>{' '}
                {surroundingNodes.find(n => n.id === hoveredNode)?.description}
              </p>
            ) : (
              <p className="font-mono text-[9px] sm:text-[10px] text-violet-500 text-center tracking-widest uppercase font-extrabold flex items-center space-x-1">
                <span>✦ Move cursor over nodes to analyze convergence flow ✦</span>
              </p>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
