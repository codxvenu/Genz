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
    { word: 'Imagine.', tag: 'The vision triggers everything.' },
    { word: 'Create.', tag: 'Forming concepts out of dust.' },
    { word: 'Build.', tag: 'Engineering real operational muscle.' },
    { word: 'Scale.', tag: 'Spreading pipelines wider, faster.' },
    { word: 'Lead.', tag: 'Setting the pace of the category.' },
    { word: 'Dominate.', tag: 'No competitors left in sight.' }
  ];

  // Pick word index depending on scroll progress
  // 0 to 1 split into 6 brackets
  const activeIdx = Math.min(Math.floor(scrollProgress * words.length), words.length - 1);
  const activeItem = words[activeIdx] || words[0];

  return (
    <div
      ref={containerRef}
      id="scene-scroll-story"
      className="relative h-[280vh] bg-white select-none pointer-events-none"
    >
      {/* Sticky content frame */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-white px-4">
        
        {/* Subtle grid accent background */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-100 to-transparent" />
        <div className="absolute inset-y-0 left-12 w-px bg-violet-100/10" />
        <div className="absolute inset-y-0 right-12 w-px bg-violet-100/10" />

        {/* Outer progress bar */}
        <div className="absolute top-10 left-12 right-12 h-[1px] bg-zinc-100/80">
          <motion.div 
            className="h-full bg-violet-600 rounded-full"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>

        {/* Minimal indicator label */}
        <div className="absolute top-14 left-1/2 -translate-x-1/2 flex items-center space-x-1.5 opacity-60">
          <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 font-extrabold">Active Chapters</span>
          <span className="font-sans text-[10px] text-violet-600 font-extrabold">0{activeIdx + 1} / 0{words.length}</span>
        </div>

        {/* Mammoth Morphing Word with AnimatePresence */}
        <div className="flex flex-col items-center justify-center text-center space-y-6 max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.word}
              initial={{ opacity: 0, scale: 0.9, filter: 'blur(8px)', y: 15 }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)', y: 0 }}
              exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)', y: -15 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center space-y-3"
            >
              <h2 className="font-sans text-6xl sm:text-[92px] md:text-[116px] lg:text-[144px] font-black tracking-tighter text-zinc-900 leading-none">
                {activeItem.word}
              </h2>
              
              <p className="font-mono text-[10px] sm:text-xs tracking-[0.25em] text-violet-700 uppercase font-extrabold transition-opacity duration-300">
                {activeItem.tag}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Subtle navigation cue */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1 opacity-50">
          <span className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest font-extrabold mb-1">CARRY SCROLLING ON</span>
          <div className="w-[1px] h-4 bg-zinc-300 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
