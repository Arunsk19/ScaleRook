import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Navbar({ onOpenStrategyModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Strict immutable navigation order (Left to Right):
  // 1. OUR MOVE -> /
  // 2. CAPABILITIES -> /services
  // 3. BUSINESS PARTNER -> /business-partner
  // 4. APPROACH -> /about
  // 5. CONTACT -> /contact
  // 6. START A CONVERSATION -> CTA Button on far right
  const navLinks = [
    { name: 'OUR MOVE', path: '/' },
    { name: 'CAPABILITIES', path: '/services' },
    { name: 'APPROACH', path: '/about' },
    { name: 'BUSINESS PARTNER', path: '/business-partner' },
    { name: 'CONTACT', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className={`ref-header ${scrolled ? 'shadow-[0_10px_24px_rgba(0,0,0,0.18)]' : ''}`}>
      <div className="ref-header-inner">
        {/* LOGO on the far left */}
          <Link to="/" className="flex items-center gap-3 group shrink-0" aria-label="ScaleRooks Home">
          <Logo size="small" showTagline={false} />
        </Link>

        {/* Desktop Navigation: Explicit Left-to-Right order with consistent spacing + CTA on far right */}
        <div className="hidden xl:flex items-center gap-7 xl:gap-8">
          <nav className="nav-menu flex items-center gap-6 xl:gap-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link whitespace-nowrap ${isActive(link.path) ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <button
            onClick={onOpenStrategyModal}
            className="btn-gold-rect px-4 py-2.5 shrink-0 whitespace-nowrap"
          >
            START A CONVERSATION <span className="ml-1">→</span>
          </button>
        </div>

        {/* Mobile Hamburger toggle button */}
        <div className="flex items-center xl:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 border border-[rgba(215,166,42,0.3)] bg-[#08070A] text-[#F3EFE7]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation (Identical order preserved) */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-[rgba(215,166,42,0.15)] bg-[#050505]/98 px-6 py-5 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 text-xs font-bold tracking-[0.18em] uppercase ${
                isActive(link.path) ? 'text-[#F0C34E]' : 'text-[#F4F0E8]/85 hover:text-[#F4F0E8]'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenStrategyModal();
            }}
            className="btn-gold-rect w-full mt-3 py-3 text-xs font-bold uppercase tracking-wider"
          >
            START A CONVERSATION →
          </button>
        </div>
      )}
    </header>
  );
}
