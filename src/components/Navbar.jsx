import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, PhoneCall, Sparkles } from 'lucide-react';
import Logo from './Logo';

export default function Navbar({ onOpenStrategyModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Business Partner', path: '/business-partner' },
    { name: 'Who We Work With', path: '/about' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-obsidian/90 backdrop-blur-xl py-3 border-b border-purple-500/20 shadow-glass-card'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <Logo size="medium" showTagline={true} />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-obsidian-card/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-purple-500/20">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.path}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                isActive(link.path)
                  ? 'text-white bg-gradient-to-r from-purple-brand/40 to-gold-brand/40 border border-gold-brand/40 shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenStrategyModal}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full btn-gold-glow text-obsidian font-bold text-xs tracking-wider uppercase overflow-hidden shadow-gold-glow"
          >
            <Sparkles className="w-3.5 h-3.5 text-obsidian animate-pulse" />
            <span>Book Strategy Call</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-obsidian-card border border-purple-500/30 text-slate-200 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-obsidian-card/95 backdrop-blur-2xl border-b border-purple-500/30 px-4 pt-4 pb-6 space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-semibold transition ${
                  isActive(link.path)
                    ? 'text-gold-brand bg-purple-900/30 border-l-4 border-gold-brand'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenStrategyModal();
              }}
              className="w-full py-3 rounded-xl btn-gold-glow text-obsidian font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-gold-glow"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Book Strategy Call</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
