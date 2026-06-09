import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Compass } from 'lucide-react';

export default function Scene7Impact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      metric: '+320%',
      title: 'Pipeline Acceleration',
      desc: 'Average spike in qualified lead systems within 60 days of integration.'
    },
    {
      metric: '3X',
      title: 'Customer Onboarding',
      desc: 'Typical multiplier of monthly brand scaling velocity across target channels.'
    },
    {
      metric: '50+',
      title: 'Global Operators Placed',
      desc: 'Elite personnel embedded in critical engineering, recruiting, and consulting roles.'
    },
    {
      metric: '∞',
      title: 'Growth Leverage',
      desc: 'Empowering endless scalable horizons by replacing fragmented agency setups.'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const elementHeight = rect.height;
      const scrollOffset = -rect.top;
      
      // Calculate fraction
      const fraction = Math.min(Math.max(scrollOffset / (elementHeight - window.innerHeight), 0), 1);
      
      // Split 0 to 1 into slides length
      const currentIdx = Math.min(Math.floor(fraction * slides.length), slides.length - 1);
      setActiveSlide(currentIdx);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeItem = slides[activeSlide] || slides[0];

  return (
    <div
      ref={containerRef}
      id="scene-impact"
      className="relative h-[250vh] bg-zinc-950 select-none overflow-hidden"
    >
      {/* Sticky container covering screen */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center bg-zinc-950 px-4">
        
        {/* Soft violet spotlight dots in the dark corner/center */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-900/10 rounded-full blur-[140px]" />
          <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[120px]" />
        </div>

        {/* Header information info */}
        <div className="absolute top-14 left-12 right-12 flex justify-between items-center z-10 border-b border-white/5 pb-4">
          <div className="flex items-center space-x-2">
            <Award className="w-4 h-4 text-violet-400" />
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white font-extrabold">IMPACT ANALYSIS INDEX</span>
          </div>
          <div className="font-mono text-[10px] text-zinc-500 font-extrabold flex items-center space-x-2">
            <span>SECTIONS</span>
            <div className="flex items-center space-x-1">
              {slides.map((_, idx) => (
                <div 
                  key={idx}
                  className={`h-1 rounded-full transition-all duration-300 ${idx === activeSlide ? 'bg-violet-400 w-4' : 'bg-white/10 w-1'}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Narrative Workspace */}
        <div className="max-w-7xl mx-auto flex flex-col justify-center items-center text-center space-y-6 relative z-10 h-full w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, scale: 0.85, filter: 'blur(8px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 1.15, filter: 'blur(10px)' }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-center items-center w-full"
            >
              {/* Massive animating number */}
              <h2 className="font-sans text-[110px] sm:text-[180px] md:text-[240px] lg:text-[290px] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-violet-950/40 leading-none select-none select-none select-none">
                {activeItem.metric}
              </h2>

              {/* Accompanying descriptive info */}
              <div className="space-y-2 max-w-md pt-4">
                <h4 className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-violet-400 uppercase font-extrabold">
                  {activeItem.title}
                </h4>
                <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                  {activeItem.desc}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slider manual override triggers */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center space-y-1 opacity-40">
          <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest font-extrabold">HOLD SCROLL TO TRANSITION</span>
        </div>

      </div>
    </div>
  );
}
