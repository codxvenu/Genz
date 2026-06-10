import { useState, useEffect, useRef, CSSProperties } from 'react';
import { motion } from 'motion/react';

interface RevolvingOrbVideoProps {
  className?: string;
  style?: CSSProperties;
}

export default function RevolvingOrbVideo({ className = '', style }: RevolvingOrbVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasError, setHasError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Reset error state
    setHasError(false);

    // Force autoplay programmatically (guarantees playback across Safari/Chrome)
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn('Programmatic video play interrupted or blocked:', err);
          // If blocked by browser, try interacting or keep waiting. Don't mark as error yet,
          // but we still have CSS fallback layers underneath so it never looks empty.
        });
    }
  }, []);

  const handleVideoError = () => {
    console.error('Failed to load revolving_orb.mp4 video file.');
    setHasError(true);
  };

  return (
    <div className={`relative w-full h-full flex items-center justify-center ${className}`} style={style}>
      {/* 
        Aesthetic CSS Gradient Fallback (Z-Index -1 / Underlay).
        This renders immediately while the video is loading or if the video fails to load entirely, 
        ensuring the page always shows a premium cosmic kinetic orb rather than empty space.
      */}
      <div className="absolute inset-0 rounded-full overflow-hidden flex items-center justify-center z-[-1]">
        {/* Core glow */}
        <div 
          className="absolute inset-[15%] rounded-full opacity-60 blur-[40px] animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(124, 58, 237, 0.8) 0%, rgba(99, 102, 241, 0.4) 50%, transparent 100%)',
            animationDuration: '3s'
          }}
        />
        {/* Swirling energy blobs */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-[5%] rounded-full opacity-40 blur-[30px] bg-gradient-to-tr from-purple-600 via-indigo-500 to-pink-500 mix-blend-color-dodge"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [0.9, 1.1, 0.95, 0.9],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-[10%] rounded-full opacity-30 blur-[25px] bg-gradient-to-bl from-cyan-400 via-purple-700 to-amber-500 mix-blend-screen"
        />
        {/* Glass overlay highlight */}
        <div className="absolute inset-0 rounded-full border border-white/10 shadow-[inset_0_4px_16px_rgba(255,255,255,0.15)] bg-gradient-to-tr from-black/80 via-transparent to-white/5" />
      </div>

      {/* Main Video Element */}
      {!hasError && (
        <video
          ref={videoRef}
          src="/revolving_orb.mp4"
          autoPlay
          loop
          muted
          playsInline
          onError={handleVideoError}
          className="w-full h-full object-contain mix-blend-screen select-none pointer-events-none transition-opacity duration-1000"
          style={{
            opacity: isPlaying ? 1 : 0, // Fade-in gracefully once playing starts
          }}
          referrerPolicy="no-referrer"
        />
      )}
    </div>
  );
}
