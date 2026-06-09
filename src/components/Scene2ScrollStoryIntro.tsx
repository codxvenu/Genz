import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Scene2ScrollStoryIntro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const elementHeight = rect.height;
      const scrollOffset = -rect.top;

      // Compute progress from 0 to 1 of this specific section
      const progress = Math.min(Math.max(scrollOffset / (elementHeight - window.innerHeight), 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial run
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const words = [
    { word: 'Imagine.', tag: 'THE VISION TRIGGERS EVERYTHING.' },
    { word: 'Create.', tag: 'FORMING CONCEPTS OUT OF DUST.' },
    { word: 'Build.', tag: 'ENGINEERING REAL OPERATIONAL MUSCLE.' },
    { word: 'Scale.', tag: 'SPREADING PIPELINES WIDER, FASTER.' },
    { word: 'Lead.', tag: 'SETTING THE PACE OF THE CATEGORY.' },
    { word: 'Dominate.', tag: 'NO COMPETITORS LEFT IN SIGHT.' }
  ];

  // Pick word index depending on scroll progress
  // 0 to 1 split into length brackets
  const activeIdx = Math.min(Math.floor(scrollProgress * (words.length + 0.2)), words.length - 1);
  const activeItem = words[activeIdx] || words[0];

  return (
    <div
      ref={containerRef}
      id="scene-scroll-story"
      className="relative h-[300vh] bg-black select-none pointer-events-none"
    >
      {/* Sticky content frame */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-black px-4 sm:px-8">
        
        {/* Subtle royal purple atmospheric glow behind the words */}
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[#7C3AED]/5 blur-[150px] mix-blend-screen pointer-events-none" />

        {/* Mammoth Morphing Word with AnimatePresence */}
        <div className="flex flex-col items-center justify-center text-center max-w-4xl z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.word}
              initial={{ opacity: 0, scale: 0.95, filter: 'blur(12px)', y: 20 }}
              animate={{ opacity: 0.95, scale: 1, filter: 'blur(0px)', y: 0 }}
              exit={{ opacity: 0, scale: 1.05, filter: 'blur(15px)', y: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center space-y-4"
            >
              <h2 className="font-serif text-[60px] sm:text-[96px] md:text-[130px] lg:text-[160px] font-normal tracking-tight text-white leading-none">
                {activeItem.word.endsWith('.') ? (
                  <>
                    <span>{activeItem.word.slice(0, -1)}</span>
                    <span className="text-[#7C3AED]">.</span>
                  </>
                ) : (
                  activeItem.word
                )}
              </h2>
              
              <p className="font-mono text-[9px] sm:text-[11px] tracking-[0.4em] text-zinc-500 uppercase font-bold max-w-md leading-relaxed">
                {activeItem.tag}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
