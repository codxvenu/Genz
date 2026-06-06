/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import ComparisonMatrix from './components/ComparisonMatrix';
import GrowthDiagram from './components/GrowthDiagram';
import StepTimeline from './components/StepTimeline';
import Testimonials from './components/Testimonials';
import Calculator from './components/Calculator';
import BookingModal from './components/BookingModal';
import Footer from './components/Footer';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  const scrollIntoServices = () => {
    const element = document.getElementById('services-section');
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
    <div id="genz-agency-app" className="min-h-screen bg-black text-white font-sans antialiased selection:bg-white selection:text-black">
      
      {/* Background radial soft ambient lights */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none opacity-50">
        <div id="glow-beam-1" className="absolute top-[10%] left-[-15%] w-[800px] h-[800px] bg-zinc-900/10 rounded-full blur-[180px]" />
        <div id="glow-beam-2" className="absolute bottom-[20%] right-[-15%] w-[800px] h-[800px] bg-zinc-900/10 rounded-full blur-[180px]" />
      </div>

      <div className="relative z-10">
        {/* Navigation Bar Header */}
        <Navbar onOpenBooking={openBooking} />

        {/* Hero Section with Interactive Worktop Scale Selector */}
        <Hero onOpenBooking={openBooking} onExploreServices={scrollIntoServices} />

        {/* Why Choose Us / Comparative Matrix */}
        <ComparisonMatrix />

        {/* 6 Capabilities Services Section Grid */}
        <ServicesGrid onOpenBooking={openBooking} />

        {/* Startup Growth Diagram */}
        <GrowthDiagram />

        {/* Process Milestone Chronology timeline */}
         <StepTimeline />

        {/* Performance Goal Modeler Calculator */}
        <Calculator onOpenBooking={openBooking} />

        {/* Client reviews testimonials deck */}
        <Testimonials />

        {/* High Conversion Final Banner CTA */}
        <section id="final-cta-section" className="py-24 sm:py-32 bg-black border-t border-zinc-905 overflow-hidden text-white relative">
          {/* Subtle light accent */}
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-zinc-900/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
            <div className="inline-flex items-center space-x-2 bg-zinc-900/50 border border-zinc-850 px-3 py-1.5 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
              <span className="font-mono text-[9px] tracking-widest text-zinc-400 uppercase font-medium">LAUNCH WORKBENCH</span>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-light tracking-wide leading-tight">
                Ready To Build <br />
                <span className="italic font-light text-zinc-400">Something Bigger?</span>
              </h2>
              <p className="text-sm sm:text-base text-zinc-450 font-light max-w-xl mx-auto leading-relaxed">
                From branding and staffing to customer acquisition and growth strategy, we help businesses scale with absolute confidence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
              <button
                onClick={openBooking}
                className="w-full sm:w-auto px-8 py-4 bg-white text-black hover:bg-zinc-200 text-xs font-mono rounded-full font-bold tracking-widest uppercase transition-colors shadow-md cursor-pointer"
              >
                Schedule Consultation
              </button>
              <button
                onClick={openBooking}
                className="w-full sm:w-auto px-8 py-4 glass text-zinc-300 hover:text-white text-xs font-mono rounded-full font-bold tracking-widest uppercase transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
              >
                <span>Start Growing Today</span>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
              </button>
            </div>
          </div>
        </section>

        {/* Global Footer */}
        <Footer onOpenBooking={openBooking} />

        {/* Reservation scheduling mult-step lead dialogue */}
        <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
      </div>

    </div>
  );
}
