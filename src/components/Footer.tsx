interface FooterProps {
  onOpenBooking: () => void;
}

export default function Footer({ onOpenBooking }: FooterProps) {
  return (
    <footer 
      id="main-applet-footer"
      className="site-footer"
    >
      {/* Animated dots border strip */}
      <div className="footer-dots" aria-hidden="true">
        <div className="footer-dots__line" />
      </div>

      {/* Footer Inner Section Grid */}
      <div className="site-footer__inner">
        {/* Top Grid details */}
        <div className="site-footer__top">
          <h2 className="font-sans font-light tracking-tight text-white leading-none">
            The Complete outsourced growth department <br />
            <span className="text-[#B388FF] font-serif italic">behind modern businesses.</span>
          </h2>
          
          <nav className="site-footer__nav" aria-label="Services Links">
            <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 font-bold mb-1">Services</span>
            <a href="#services-section">Branding</a>
            <a href="#services-section">Marketing</a>
            <a href="#services-section">Staffing</a>
            <a href="#services-section">Acquisition</a>
            <a href="#services-section">Consulting</a>
          </nav>

          <nav className="site-footer__nav" aria-label="About Company links">
            <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 font-bold mb-1">Company</span>
            <a href="#ecosystem-section">Ecosystem</a>
            <a href="#why-gba-section">Why us</a>
            <a href="#timeline-section">Our Process</a>
            <a href="#genz-philosophy-section">Gen-Z Edge</a>
            <a href="#contact" onClick={(e) => {
              e.preventDefault();
              onOpenBooking();
            }}>Contact Strategy</a>
          </nav>

          <nav className="site-footer__nav" aria-label="Social links">
            <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 font-bold mb-1">Connect</span>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://x.com" target="_blank" rel="noreferrer">Follow Us on X</a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          </nav>
        </div>

        {/* Brand Row - GBA Wordmark */}
        <div className="site-footer__brand-row">
          <a href="/" className="site-footer__brand" aria-label="GBA home">
            <span className="site-footer__mark" aria-hidden="true" />
            <span>GBA</span>
          </a>
        </div>

        {/* Legal Line */}
        <div className="site-footer__legal">
          <p>© 2026 Gen-Z Business Agency (GBA). All rights reserved.</p>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms and Services</a>
        </div>
      </div>
    </footer>
  );
}
