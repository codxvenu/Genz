import { useState } from 'react';
import Navbar from './components/Navbar';
import Scene1Hero from './components/Scene1Hero';
import Scene2ScrollStoryIntro from './components/Scene2ScrollStoryIntro';
import Scene3BusinessJourney from './components/Scene3BusinessJourney';
import Scene4GbaeEnters from './components/Scene4GbaeEnters';
import Scene5StickyStorytelling from './components/Scene5StickyStorytelling';
import Scene6Transformation from './components/Scene6Transformation';
import Scene7Impact from './components/Scene7Impact';
import Scene8GenZAdvantage from './components/Scene8GenZAdvantage';
import Scene9CoreMessage from './components/Scene9CoreMessage';
import Scene10FinalCta from './components/Scene10FinalCta';
import Calculator from './components/Calculator';
import BookingModal from './components/BookingModal';
import Footer from './components/Footer';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  // Smooth scroll helper
  const scrollIntoSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div 
      id="genz-business-agency-app" 
      className="min-h-screen bg-black text-white font-sans antialiased selection:bg-[#7C3AED] selection:text-white relative"
    >
      
      {/* Absolute ambient lights background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[5%] left-[-15%] w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[10%] right-[-15%] w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 flex flex-col">
        {/* Navigation Bar */}
        <Navbar onOpenBooking={openBooking} />

        {/* SCENE 1 — HERO */}
        <Scene1Hero 
          onOpenBooking={openBooking} 
          onStartJourney={() => scrollIntoSection('scene-scroll-story')} 
        />

        {/* SCENE 2 — SCROLL STORY INTRO */}
        <Scene2ScrollStoryIntro />

        {/* SCENE 3 — THE BUSINESS JOURNEY */}
        <Scene3BusinessJourney />

        {/* SCENE 4 — GBA ENTERS */}
        <Scene4GbaeEnters />

        {/* SCENE 5 — STICKY STORYTELLING EXPERIENCE */}
        <Scene5StickyStorytelling />

        {/* SCENE 6 — TRANSFORMATION */}
        <Scene6Transformation />

        {/* SCENE 7 — IMPACT SECTION */}
        <Scene7Impact />

        {/* SCENE 8 — THE GEN-Z ADVANTAGE */}
        <Scene8GenZAdvantage />

        {/* SCENE 9 — THE CORE MESSAGE */}
        <Scene9CoreMessage />

        {/* INTERSTITIAL - Scale velocity planning calculator */}
        <div id="calculator-section-divider">
          <Calculator onOpenBooking={openBooking} />
        </div>

        {/* SCENE 10 — FINAL CTA */}
        <Scene10FinalCta onOpenBooking={openBooking} />

        {/* GLOBAL FOOTER */}
        <Footer onOpenBooking={openBooking} />

        {/* BOOKING FLOW MODAL */}
        <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
      </div>

    </div>
  );
}
