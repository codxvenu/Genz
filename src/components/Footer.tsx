import { Sparkles, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export default function Footer({ onOpenBooking }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (id: string) => {
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

  const currentYear = new Date().getFullYear();

  return (
    <footer 
      id="main-applet-footer"
      className="bg-black border-t border-zinc-900 py-16 sm:py-20 text-white relative overflow-hidden"
    >
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-zinc-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Core Upper split section */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-zinc-90 w-full">
          
          {/* Brand block columns */}
          <div className="col-span-2 md:col-span-4 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-950 border border-zinc-800 text-white shadow-inner">
                <Sparkles className="w-4 h-4 text-zinc-300" />
              </div>
              <span className="font-serif text-lg tracking-wide text-white font-medium">Gen-Z</span>
            </div>
            
            <p className="text-xs text-zinc-500 font-light leading-relaxed max-w-sm">
              We stand together, build together, and grow together. Modular corporate advisory, creative, and talent engines designed exclusively for high-scale digital and geographic brands.
            </p>
          </div>

          {/* Core Services columns */}
          <div className="col-span-1 md:col-span-2.5 space-y-3">
            <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 block">Services</span>
            <ul className="space-y-2">
              {['Branding & Identity', 'Omnichannel Marketing', 'Staffing & Hiring', 'Business Strategy', 'Acquisition Systems'].map(item => (
                <li key={item}>
                  <button 
                    onClick={() => scrollToSection('services-section')}
                    className="text-xs text-zinc-450 hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Operational Resources columns */}
          <div className="col-span-1 md:col-span-2 pb-1 space-y-3">
            <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 block">Process</span>
            <ul className="space-y-2">
              {['Deep System Audit', 'Identify Growth Vector', 'Re-Architect Branding', 'Acquire Customers', 'Scale Operations'].map(item => (
                <li key={item}>
                  <button 
                    onClick={() => scrollToSection('timeline-section')}
                    className="text-xs text-zinc-450 hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social connections column */}
          <div className="col-span-1 md:col-span-2.5 space-y-3">
            <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 block">Ecosystem</span>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-zinc-455 hover:text-white transition-colors block"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-zinc-455 hover:text-white transition-colors block"
                >
                  Instagram
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenBooking}
                  className="text-xs text-zinc-455 hover:text-white transition-colors cursor-pointer text-left font-bold"
                >
                  Schedule consultation
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Lower segment copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <span className="text-[10px] font-mono text-zinc-600">
              © {currentYear} Gen-Z Business Agency. All capital structures protected.
            </span>
            <span className="hidden sm:inline text-zinc-800 font-mono text-[10px]">|</span>
            <span className="text-[10px] font-sans text-zinc-600 italic">
              "Stand Together. Build Together. Grow Together."
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1 px-3 py-1.5 bg-zinc-950 hover:bg-zinc-900 border border-zinc-900 rounded-md text-[10px] font-mono text-zinc-400 hover:text-white transition-all cursor-pointer"
          >
            <span>BACK TO COVERTURE</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>

      </div>
    </footer>
  );
}
