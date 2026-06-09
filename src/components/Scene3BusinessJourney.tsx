import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { AlertCircle, HelpCircle } from 'lucide-react';

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

  // Define problem nodes coords (dx, dy from center)
  const problems = [
    { label: 'Branding', x: -140, y: -120, color: 'border-red-300 text-red-650 bg-red-50/70', phase: 0.15 },
    { label: 'Marketing', x: 160, y: -100, color: 'border-rose-300 text-rose-650 bg-rose-50/70', phase: 0.28 },
    { label: 'Hiring', x: -180, y: 30, color: 'border-orange-300 text-orange-655 bg-orange-50/70', phase: 0.40 },
    { label: 'Customers', x: 190, y: 110, color: 'border-red-400 text-red-700 bg-red-50/70', phase: 0.52 },
    { label: 'Growth', x: -100, y: 160, color: 'border-amber-300 text-amber-700 bg-amber-50/70', phase: 0.65 },
    { label: 'Strategy', x: 60, y: -190, color: 'border-rose-400 text-rose-700 bg-rose-50/70', phase: 0.75 },
  ];

  // Scale variables driven by scroll progress
  // At progress = 0: only main node.
  // At progress > 0.15: problem nodes start entering.
  // At progress > 0.50: lines start shaking and breaking.
  // At progress > 0.80: absolute chaotic break, red glow.

  const isChaotic = progress > 0.55;
  const isOverwhelmed = progress > 0.8;

  return (
    <div
      ref={containerRef}
      id="scene-business-journey"
      className="relative h-[280vh] bg-zinc-50/40 select-none overflow-hidden"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-white">
        
        {/* Absolute Background Ambient Glow that shifts from soft white to alarm crimson red as chaos intensifies */}
        <div 
          className="absolute inset-0 pointer-events-none transition-all duration-700 ease-out z-0"
          style={{
            background: isOverwhelmed 
              ? 'radial-gradient(circle at 50% 50%, rgba(254, 226, 226, 0.4) 0%, rgba(255, 255, 255, 1) 100%)'
              : isChaotic
              ? 'radial-gradient(circle at 50% 50%, rgba(254, 243, 199, 0.25) 0%, rgba(255, 255, 255, 1) 100%)'
              : 'radial-gradient(circle at 50% 50%, rgba(250, 245, 255, 0.4) 0%, rgba(255, 255, 255, 1) 100%)'
          }}
        />

        {/* Floating background grids */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Header story prompt */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 text-center space-y-2 z-10 max-w-lg px-4">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-zinc-150/45 border border-zinc-200/50 rounded-full">
            <span className="w-1.5 h-1.5 bg-rose-500 rounded-full animate-ping" />
            <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 font-extrabold">SCENE 03</span>
          </div>
          <h3 className="font-sans text-xl sm:text-2xl font-black text-zinc-900 tracking-tight">
            {isOverwhelmed 
              ? 'System Breakdown. Critical Overplay.' 
              : isChaotic 
              ? 'Fragmented connections begin to trigger.' 
              : 'A Business starts its journey.'}
          </h3>
          <p className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 font-extrabold">SCROLL TO EXPERIENCE THE JOURNEY</p>
        </div>

        {/* Visual Core Playground with SVG links & interactive nodes */}
        <div className="relative w-[340px] h-[340px] sm:w-[500px] sm:h-[500px] flex items-center justify-center z-10">
          
          {/* Svg paths drawing connective links */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
            {problems.map((prob, i) => {
              // Only draw if target node has started to enter
              if (progress < prob.phase) return null;
              
              // Determine line style
              let strokeColor = 'rgba(139, 92, 246, 0.25)'; // regular purple
              let strokeDash = '0';
              let classNames = 'transition-all duration-300';

              if (isOverwhelmed) {
                strokeColor = 'rgba(239, 68, 68, 0.75)'; // alarm red
                strokeDash = '2 5'; // broken
                classNames += ' animate-[dash_1s_linear_infinite]';
              } else if (isChaotic) {
                strokeColor = 'rgba(245, 158, 11, 0.45)'; // Amber warning
                strokeDash = '5 5';
              }

              // Compute coordinates relative to container (center is 250, 250)
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
                    strokeWidth={isOverwhelmed ? "1.5" : "1"}
                    strokeDasharray={strokeDash}
                    className={classNames}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: Math.min((progress - prob.phase) * 4, 1) }}
                    transition={{ duration: 0.4 }}
                  />
                </g>
              );
            })}
          </svg>

          {/* Central Client Business Node */}
          <motion.div
            style={{
              scale: isOverwhelmed ? 0.95 : 1,
            }}
            animate={isOverwhelmed ? {
              x: [0, -4, 4, -2, 2, 0],
              y: [0, 4, -4, 2, -2, 0]
            } : {}}
            transition={isOverwhelmed ? {
              duration: 0.15,
              repeat: Infinity,
              ease: 'linear'
            } : {}}
            className={`w-28 h-28 sm:w-36 sm:h-36 rounded-full flex flex-col justify-center items-center text-center p-4 border transition-all duration-500 relative z-10 ${
              isOverwhelmed 
                ? 'bg-red-50 border-red-500 text-red-900 shadow-premium' 
                : isChaotic 
                ? 'bg-amber-50 border-amber-400 text-amber-900' 
                : 'bg-violet-600 border-violet-500 text-white shadow-premium shadow-violet-200'
            }`}
          >
            <div className="absolute inset-0 rounded-full opacity-10 animate-ping bg-current" style={{ animationDuration: '3s' }} />

            <span className="font-mono text-[9px] uppercase tracking-widest opacity-80 font-extrabold mb-1">
              THE SUBJECT
            </span>
            <span className="font-sans text-xs sm:text-sm font-black tracking-tight leading-none uppercase text-center">
              A Business
            </span>

            {isOverwhelmed && (
              <AlertCircle className="w-5 h-5 text-red-600 mt-2 animate-bounce shrink-0" />
            )}
          </motion.div>

          {/* Issue/Problems Nodes surrounding the central core */}
          {problems.map((prob, i) => {
            const hasAppeared = progress > prob.phase;
            if (!hasAppeared) return null;

            // Chaotic drift factor
            const driftRange = isOverwhelmed ? 16 : isChaotic ? 6 : 0;
            const xOffset = prob.x + (isChaotic ? Math.sin((progress * 40) + i) * driftRange : 0);
            const yOffset = prob.y + (isChaotic ? Math.cos((progress * 40) + i) * driftRange : 0);

            return (
              <motion.div
                key={prob.label}
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  x: xOffset,
                  y: yOffset
                }}
                transition={{ type: 'spring', stiffness: isChaotic ? 80 : 180, damping: isChaotic ? 10 : 20 }}
                className={`absolute px-4 py-2 rounded-2xl border text-[11px] font-mono font-black uppercase tracking-wider shadow-soft flex items-center space-x-1.5 select-none pointer-events-none ${prob.color}`}
              >
                <span>{prob.label}</span>
                {isOverwhelmed && (
                  <span className="text-red-500 text-[10px] animate-pulse">✖</span>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Prompt statements of chaos */}
        <div className="absolute bottom-12 max-w-sm text-center px-4 space-y-1">
          <p className="font-sans text-xs sm:text-sm text-zinc-500 font-normal leading-relaxed">
            {isOverwhelmed 
              ? "The business is overwhelmed. Fractured vendors, broken structures, and lost pipelines lead to complete stagnation." 
              : isChaotic 
              ? "Every new strategy causes friction. Disconnected hiring and loose branding break structural lines." 
              : "Ambitious but isolated. Growth is limited when systems operate within fragmented departments."}
          </p>
        </div>

      </div>
    </div>
  );
}
