import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-[rgba(215,166,42,0.18)] text-[#B8B3AE]">
      <div className="ref-shell py-12">
        <div className="footer-grid border-b border-[rgba(215,166,42,0.18)] pb-10">
          <div className="space-y-5">
            <Link to="/" className="inline-flex items-center gap-3">
              <Logo size="small" showTagline={false} />
            </Link>
            <div className="flex flex-col gap-2">
              <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#D7A62A]">ScaleRook</div>
              <div className="text-[0.68rem] font-medium tracking-[0.18em] uppercase text-[#E2DDD4]">Strategic Moves. Scalable Growth.</div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#D7A62A]">Services</div>
            <ul className="space-y-2 footer-muted">
              <li><Link to="/services" className="hover:text-[#F4F0E8] transition-colors">Build</Link></li>
              <li><Link to="/services" className="hover:text-[#F4F0E8] transition-colors">Creative</Link></li>
              <li><Link to="/services" className="hover:text-[#F4F0E8] transition-colors">Grow</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#D7A62A]">Navigation</div>
            <ul className="space-y-2 footer-muted">
              <li><Link to="/business-partner" className="hover:text-[#F4F0E8] transition-colors">Business Partner</Link></li>
              <li><Link to="/about" className="hover:text-[#F4F0E8] transition-colors">Approach</Link></li>
              <li><Link to="/contact" className="hover:text-[#F4F0E8] transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#D7A62A]">Brand</div>
            <div className="footer-muted">A brand of ARM Digital Services</div>
            <div className="footer-muted">© {currentYear} ScaleRook</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
