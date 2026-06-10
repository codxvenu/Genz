import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Scene7Impact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      text: "The Right Brand Changes Everything.",
      tagline: "DESIGN IS NARRATIVE POWER",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200"
    },
    {
      text: "The Right Strategy Multiplies Growth.",
      tagline: "TACTICAL PRECISION OVER NOISE",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200"
    },
    {
      text: "The Right Team Accelerates Success.",
      tagline: "ELITE OPERATIONS EMBEDDED",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
    },
    {
      text: "The Right Partner Scales It.",
      tagline: "UNIFIED DIRECTION AT SCALE",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const elementHeight = rect.height;
      const scrollOffset = -rect.top;
      
      const fraction = Math.min(Math.max(scrollOffset / (elementHeight - window.innerHeight), 0), 1);
      const currentIdx = Math.min(Math.floor(fraction * (slides.length + 0.15)), slides.length - 1);
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
      className="relative h-[320vh] bg-black select-none"
    >
      {/* Sticky viewport frame */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center bg-black overflow-hidden">
        
        {/* Full-screen Background Image Sequence transition */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeItem.image}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 0.35, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={activeItem.image}
                alt="Cinematic Architectural Space"
                className="w-full h-full object-cover filter brightness-[0.7] contrast-[1.1] grayscale"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
        </div>

        {/* Minimal status indicator indexes */}
        <div className="absolute top-16 left-8 right-8 flex justify-between items-center z-20 border-b border-white/5 pb-4">
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-zinc-400 font-bold">
            PHASE III &bull; THE COVENANT
          </span>
          <div className="flex items-center space-x-2">
            <span className="font-mono text-[9px] text-zinc-500 font-bold">0{activeSlide + 1} / 0{slides.length}</span>
            <div className="flex space-x-1">
              {slides.map((_, i) => (
                <div 
                  key={i}
                  className={`h-[2px] transition-all duration-300 ${i === activeSlide ? 'bg-white w-5' : 'bg-white/10 w-2'}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Editorial Text Overlay workspace */}
        <div className="relative z-20 max-w-5xl mx-auto text-center px-6 flex flex-col items-center justify-center h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -30, filter: 'blur(8px)' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              <span className="font-mono text-[10px] tracking-[0.3em] text-purple-400 font-bold block mb-2 uppercase">
                {activeItem.tagline}
              </span>
              <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl text-white font-normal leading-[1.05] tracking-tight max-w-4xl">
                {activeItem.text.endsWith('.') ? (
                  <>
                    <span>{activeItem.text.slice(0, -1)}</span>
                    <span className="text-[#7C3AED]">.</span>
                  </>
                ) : (
                  activeItem.text
                )}
              </h2>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1 opacity-40 z-20">
          <span className="font-mono text-[8px] text-zinc-500 uppercase tracking-widest font-extrabold">CONTINUE DOWNWARD</span>
        </div>

      </div>
    </div>
  );
}
