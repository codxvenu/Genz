import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { AlertCircle } from 'lucide-react';

export default function Scene3BusinessJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const elementHeight = rect.height;
      const scrollOffset = -rect.top;
      const calculatedProgress = Math.min(Math.max(scrollOffset / (elementHeight - window.innerHeight), 0), 1);
      setProgress(calculatedProgress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const problems = [
    { label: 'Branding', x: -140, y: -120, baseColor: 'border-white/10 bg-zinc-900/50 text-zinc-300', errorColor: 'border-red-500/50 bg-red-950/40 text-red-400', phase: 0.12 },
    { label: 'Marketing', x: 160, y: -100, baseColor: 'border-white/10 bg-zinc-900/50 text-zinc-300', errorColor: 'border-red-500/50 bg-red-950/40 text-red-400', phase: 0.24 },
    { label: 'Hiring', x: -180, y: 30, baseColor: 'border-white/10 bg-zinc-900/50 text-zinc-300', errorColor: 'border-red-500/50 bg-red-950/40 text-red-400', phase: 0.36 },
    { label: 'Customers', x: 190, y: 110, baseColor: 'border-white/10 bg-zinc-900/50 text-zinc-300', errorColor: 'border-red-500/50 bg-red-950/40 text-red-400', phase: 0.48 },
    { label: 'Growth', x: -100, y: 160, baseColor: 'border-white/10 bg-zinc-900/50 text-zinc-300', errorColor: 'border-red-500/50 bg-red-950/40 text-red-400', phase: 0.60 },
    { label: 'Strategy', x: 60, y: -180, baseColor: 'border-white/10 bg-zinc-900/50 text-zinc-300', errorColor: 'border-red-500/50 bg-red-950/40 text-red-400', phase: 0.72 },
  ];

  const isChaotic = progress > 0.45;
  const isOverwhelmed = progress > 0.75;

  return (
    <div
      ref={containerRef}
      id="scene-business-journey"
      className="relative h-[250vh] bg-black select-none"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-black px-4">
        
        {/* Deep background ambient glowing spots that turn red on crisis */}
        <div 
          className="absolute inset-0 pointer-events-none transition-all duration-1000 ease-out z-0"
          style={{
            background: isOverwhelmed 
              ? 'radial-gradient(circle at 50% 50%, rgba(239, 68, 68, 0.12) 0%, rgba(0, 0, 0, 1) 75%)'
              : isChaotic
              ? 'radial-gradient(circle at 50% 50%, rgba(200, 100, 50, 0.08) 0%, rgba(0, 0, 0, 1) 80%)'
              : 'radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.06) 0%, rgba(0, 0, 0, 1) 85%)'
          }}
        />

        {/* Minimal Subtle Grid Texture */}
        <div className="absolute inset-0 opacity-[0.1] bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

        {/* Cinematic Header Text (Visually telling a story without heavy detail) */}
        <div className="absolute top-16 left-1/2 -translate-x-1/2 text-center space-y-3 z-10 max-w-xl px-4 flex flex-col items-center">
          <span className="font-mono text-[9px] tracking-[0.3em] text-[#A1A1AA] uppercase font-bold">
            PHASE I &bull; THE ISOLATED STAGE
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl font-normal text-white tracking-tight">
            {isOverwhelmed 
              ? 'Fatal Friction.' 
              : isChaotic 
              ? 'Failing Connections.' 
              : 'The Business Core.'}
          </h3>
          <div className="w-12 h-px bg-zinc-800" />
        </div>

        {/* Network Playground Container */}
        <div className="relative w-[340px] h-[340px] sm:w-[500px] sm:h-[500px] flex items-center justify-center z-10">
          
          {/* SVG connective threads */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
            {problems.map((prob, i) => {
              if (progress < prob.phase) return null;
              
              let strokeColor = 'rgba(255, 255, 255, 0.15)';
              let strokeDash = '0';
              let classNames = 'transition-all duration-300';

              if (isOverwhelmed) {
                strokeColor = 'rgba(239, 68, 68, 0.45)';
                strokeDash = '2 6';
                classNames += ' animate-[dash_1s_linear_infinite]';
              } else if (isChaotic) {
                strokeColor = 'rgba(245, 158, 11, 0.25)';
                strokeDash = '4 4';
              }

              const centerX = 250;
              const centerY = 250;
              const nodeX = centerX + prob.x;
              const nodeY = centerY + prob.y;

              return (
                <g key={i}>
                  <motion.line
                    x1={centerX}
                    y1={centerY}
                    x2={nodeX}
                    y2={nodeY}
                    stroke={strokeColor}
                    strokeWidth="1"
                    strokeDasharray={strokeDash}
                    className={classNames}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: Math.min((progress - prob.phase) * 5, 1) }}
                    transition={{ duration: 0.5 }}
                  />
                </g>
              );
            })}
          </svg>

          {/* Central Enterprise Core node */}
          <motion.div
            style={{
              scale: isOverwhelmed ? 0.96 : 1,
            }}
            animate={isOverwhelmed ? {
              x: [0, -3, 3, -1.5, 1.5, 0],
              y: [0, 3, -3, 1.5, -1.5, 0]
            } : {}}
            transition={isOverwhelmed ? {
              duration: 0.2,
              repeat: Infinity,
              ease: 'linear'
            } : {}}
            className={`w-28 h-28 sm:w-36 sm:h-36 rounded-full flex flex-col justify-center items-center text-center p-4 border transition-all duration-700 relative z-10 ${
              isOverwhelmed 
                ? 'bg-red-950/20 border-red-500/80 text-red-400' 
                : isChaotic 
                ? 'bg-amber-950/20 border-amber-500/60 text-amber-300' 
                : 'bg-zinc-950 border-white/20 text-white shadow-[0_0_40px_rgba(255,255,255,0.05)]'
            }`}
          >
            <div className="absolute inset-0 rounded-full opacity-5 animate-ping bg-current" style={{ animationDuration: '4s' }} />

            <span className="font-mono text-[8px] uppercase tracking-widest opacity-60 font-bold mb-1">
              THE SUBJECT
            </span>
            <span className="font-serif text-sm sm:text-base font-normal tracking-tight text-center">
              A Business
            </span>

            {isOverwhelmed && (
              <AlertCircle className="w-5 h-5 text-red-500 mt-2 animate-bounce" />
            )}
          </motion.div>

          {/* Drifting Surround Problem Nodes */}
          {problems.map((prob, i) => {
            const hasAppeared = progress > prob.phase;
            if (!hasAppeared) return null;

            const driftSpeed = isOverwhelmed ? 14 : isChaotic ? 5 : 0;
            const xOffset = prob.x + (isChaotic ? Math.sin((progress * 35) + i) * driftSpeed : 0);
            const yOffset = prob.y + (isChaotic ? Math.cos((progress * 35) + i) * driftSpeed : 0);

            return (
              <motion.div
                key={prob.label}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ 
                  opacity: 0.9, 
                  scale: 0.95,
                  x: xOffset,
                  y: yOffset
                }}
                transition={{ type: 'spring', stiffness: 90, damping: 15 }}
                className={`absolute px-4 py-2 rounded-full border text-[10px] font-mono font-bold uppercase tracking-widest shadow-soft flex items-center space-x-1.5 transition-colors duration-500 ${
                  isOverwhelmed ? prob.errorColor : prob.baseColor
                }`}
              >
                <span>{prob.label}</span>
                {isOverwhelmed && (
                  <span className="text-red-500 text-[10px]">&times;</span>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Narrative sub-hint (sleek, centered, dark cinematic) */}
        <div className="absolute bottom-16 max-w-md text-center px-6">
          <p className="font-sans text-xs sm:text-sm text-zinc-500 font-light tracking-wide leading-relaxed transition-all duration-500">
            {isOverwhelmed 
              ? "Overwhelmed. Fragmented service vendors, broken processes, loose strategy, and zero unified tracking. The systems seize up." 
              : isChaotic 
              ? "As marketing expands and staffing changes, misalignment builds friction into the pipeline. Elements collide." 
              : "Isolated and raw. Every node represents a separate department operating in siloed vacuums."}
          </p>
        </div>

      </div>
    </div>
  );
}
