import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Instagram, Youtube, ArrowUpRight, ShieldCheck } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#08070D] border-t border-purple-900/30 text-slate-400 overflow-hidden">
      {/* Subtle glowing ambient lighting in footer */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gold-brand/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="inline-block">
              <Logo size="large" showTagline={true} />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              ScaleRook is your end-to-end business growth and execution partner — helping you build your digital foundation, attract customers, develop sales, build teams, and operate your business.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-obsidian-card border border-purple-500/20 text-xs font-mono text-gold-brand">
              <ShieldCheck className="w-4 h-4 text-gold-brand" />
              <span>Execution Partner, Not Just a Service Provider.</span>
            </div>
          </div>

          {/* Col 3: Capabilities */}
          <div className="space-y-4">
            <h4 className="text-white font-heading font-bold text-sm tracking-wider uppercase text-gradient-purple-gold">
              Core Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link to="/services#build" className="hover:text-gold-brand transition">01 ScaleRook Build</Link></li>
              <li><Link to="/services#creative" className="hover:text-gold-brand transition">02 ScaleRook Creative</Link></li>
              <li><Link to="/services#grow" className="hover:text-gold-brand transition">03 ScaleRook Grow</Link></li>
              <li><Link to="/services#sell" className="hover:text-gold-brand transition">04 ScaleRook Sell</Link></li>
              <li><Link to="/services#talent" className="hover:text-gold-brand transition">05 ScaleRook Talent</Link></li>
              <li><Link to="/services#operate" className="hover:text-gold-brand transition">06 ScaleRook Operate</Link></li>
              <li><Link to="/services#scale" className="hover:text-gold-brand transition">07 ScaleRook Scale</Link></li>
            </ul>
          </div>

          {/* Col 4: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-heading font-bold text-sm tracking-wider uppercase text-gradient-purple-gold">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link to="/" className="hover:text-gold-brand transition">Home</Link></li>
              <li><Link to="/services" className="hover:text-gold-brand transition">Services & Pillars</Link></li>
              <li><Link to="/business-partner" className="hover:text-gold-brand transition">Business Partner Model</Link></li>
              <li><Link to="/about" className="hover:text-gold-brand transition">Who We Work With</Link></li>
              <li><Link to="/about" className="hover:text-gold-brand transition">About Us & Chess Strategy</Link></li>
              <li><Link to="/contact" className="hover:text-gold-brand transition">Contact & Booking</Link></li>
              <li><a href="#privacy" className="hover:text-gold-brand transition">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-gold-brand transition">Terms of Service</a></li>
            </ul>
          </div>

          {/* Col 5: Strategic Partner & Social */}
          <div className="space-y-4">
            <h4 className="text-white font-heading font-bold text-sm tracking-wider uppercase text-gradient-purple-gold">
              Connect With Us
            </h4>
            <p className="text-xs text-slate-400">
              Stay connected with strategic growth insights and execution updates.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-obsidian-card border border-purple-500/20 flex items-center justify-center text-slate-300 hover:text-gold-brand hover:border-gold-brand transition"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-obsidian-card border border-purple-500/20 flex items-center justify-center text-slate-300 hover:text-gold-brand hover:border-gold-brand transition"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-obsidian-card border border-purple-500/20 flex items-center justify-center text-slate-300 hover:text-gold-brand hover:border-gold-brand transition"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-obsidian-card border border-purple-500/20 flex items-center justify-center text-slate-300 hover:text-gold-brand hover:border-gold-brand transition"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-brand hover:underline"
              >
                <span>Schedule Direct Meeting</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Attribution Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            <p>© {currentYear} <strong className="text-white font-semibold">ScaleRook</strong>. All Rights Reserved.</p>
          </div>
          <div className="px-4 py-2 rounded-lg bg-obsidian-card border border-purple-500/20 text-slate-300 text-center font-mono text-[11px]">
            <span className="text-purple-brand font-bold">SCALEROOK</span> — Strategic Moves. Scalable Growth. | <span className="text-gold-brand font-semibold">A brand of ARM Digital Services.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
