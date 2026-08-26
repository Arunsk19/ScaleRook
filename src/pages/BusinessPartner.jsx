import React from 'react';
import { Sparkles, Check, X, ShieldCheck, ArrowRight, Zap, Layers, Users, Layers3 } from 'lucide-react';
import RetainerConfigurator from '../components/RetainerConfigurator';

export default function BusinessPartner({ onOpenStrategyModal }) {
  const fragmentedAgents = [
    { title: '1 Marketing Agency', fee: 'High Retainer', headache: 'Separate Account Mgr, Siloed Data' },
    { title: '1 Web Developer', fee: 'Per-Project Fee', headache: 'No Marketing Strategy Integration' },
    { title: '1 Graphic Designer', fee: 'Hourly / Fixed', headache: 'Disconnected Brand Visuals' },
    { title: '1 Sales Outbound Agency', fee: 'Commission + Setup', headache: 'Out-of-sync Messaging' },
    { title: '1 HR Recruiter', fee: '15-20% Placement', headache: 'Slow Hiring Turnaround' },
    { title: '1 Virtual Assistant', fee: 'Monthly Subscription', headache: 'Limited Strategic Context' },
  ];

  const engagementOptions = [
    {
      option: 'Option 1',
      type: 'Project',
      title: 'ScaleRook Build',
      trigger: 'Need a website or brand identity package?',
      desc: 'Fixed-scope, turnkey execution for websites, landing pages, custom dev, and visual identity.',
      badge: 'Fixed Deliverable'
    },
    {
      option: 'Option 2',
      type: 'Service',
      title: 'ScaleRook Grow',
      trigger: 'Need ongoing monthly digital marketing & SEO?',
      desc: 'Dedicated monthly marketing, social media content, paid ad optimization, and lead generation.',
      badge: 'Monthly Capability'
    },
    {
      option: 'Option 3',
      type: 'Dedicated Team',
      title: 'ScaleRook Sell / Talent',
      trigger: 'Need two dedicated SDRs or remote staffing?',
      desc: 'Handpicked, vetted remote resources dedicated exclusively to your outbound sales and pipeline.',
      badge: 'Dedicated Resources'
    },
    {
      option: 'Option 4',
      type: 'Complete Partner',
      title: 'Complete Business Partner',
      trigger: 'Need everything under one roof?',
      desc: 'A monthly retainer model combining multiple services and dedicated resources customized to your business stage.',
      badge: 'Flagship Partner Model',
      highlight: true
    }
  ];

  return (
    <div className="pt-28 pb-20 space-y-20">
      
      {/* 1. Hero Section */}
      <section data-section="partner" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/80 border border-gold-brand/40 shadow-purple-glow">
          <Sparkles className="w-3.5 h-3.5 text-gold-brand" />
          <span className="text-xs font-mono tracking-widest text-gold-brand uppercase font-semibold">
            FLAGSHIP ENGAGEMENT ARCHITECTURE
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-tight">
          OUR BIGGEST DIFFERENCE — <br className="hidden sm:block" />
          <span className="text-gradient-purple-gold">SCALEROOK BUSINESS PARTNER</span>
        </h1>

        <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
          The single partner solution to eliminate agency sprawl. Access world-class web, creative, marketing, sales, talent, and ops without managing six different vendors.
        </p>

        <div className="pt-4">
          <button
            onClick={onOpenStrategyModal}
            className="px-8 py-4 rounded-2xl btn-gold-glow text-obsidian font-extrabold text-xs uppercase tracking-wider shadow-gold-glow inline-flex items-center gap-2"
          >
            <span>Discuss Partner Retainer</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 2. Fragmented Management vs ScaleRook Solution */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono text-gold-brand uppercase tracking-widest">
            Comparative Breakdown
          </span>
          <h2 className="text-3xl font-heading font-extrabold text-white">
            Fragmented Agency Sprawl vs. ScaleRook
          </h2>
          <p className="text-sm text-slate-300">
            Why managing 6 disconnected vendors slows down your growth and burns capital.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Fragmented Management (The Headache) */}
          <div className="lg:col-span-6 p-8 rounded-3xl glass-card border border-red-500/30 space-y-6 relative overflow-hidden bg-red-950/10">
            <div className="flex items-center justify-between border-b border-red-900/30 pb-4">
              <div>
                <span className="text-xs font-mono text-red-400 uppercase tracking-widest block">The Old Way</span>
                <h3 className="text-xl font-heading font-bold text-white">Fragmented Agency Sprawl</h3>
              </div>
              <X className="w-8 h-8 text-red-400 p-1.5 rounded-xl bg-red-950/60 border border-red-500/30" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {fragmentedAgents.map((ag, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-obsidian-card border border-red-900/40 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-white">
                    <X className="w-3.5 h-3.5 text-red-400" />
                    <span>{ag.title}</span>
                  </div>
                  <p className="text-[11px] text-slate-400">{ag.headache}</p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-red-950/40 border border-red-900/50 text-xs text-red-300 leading-relaxed font-mono">
              Result: Endless meetings, conflicting strategies, double invoicing, and zero single-point accountability.
            </div>
          </div>

          {/* Right: The ScaleRook Solution */}
          <div className="lg:col-span-6 p-8 rounded-3xl glass-card border border-gold-brand/40 shadow-gold-glow space-y-6 relative overflow-hidden bg-purple-950/20">
            <div className="flex items-center justify-between border-b border-gold-brand/30 pb-4">
              <div>
                <span className="text-xs font-mono text-gold-brand uppercase tracking-widest block">The ScaleRook Way</span>
                <h3 className="text-xl font-heading font-bold text-white text-gradient-gold">Single Strategic Execution Partner</h3>
              </div>
              <Check className="w-8 h-8 text-obsidian p-1.5 rounded-xl bg-gold-brand font-bold" />
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-obsidian-card border border-purple-500/30 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-gold-brand flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">1 Strategic Account Director</h4>
                  <p className="text-xs text-slate-300">Single point of contact orchestrating all design, web, marketing, sales, and remote talent execution.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-obsidian-card border border-purple-500/30 flex items-start gap-3">
                <Zap className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">7 Integrated Capability Pillars</h4>
                  <p className="text-xs text-slate-300">Build, Creative, Grow, Sell, Talent, Operate, and Scale aligned towards a single revenue goal.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-obsidian-card border border-purple-500/30 flex items-start gap-3">
                <Users className="w-5 h-5 text-gold-brand flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Unified Dedicated Extended Team</h4>
                  <p className="text-xs text-slate-300">Scalable remote resource allocation without internal payroll or HR overhead.</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-gold-brand/10 border border-gold-brand/40 text-xs text-gold-brand leading-relaxed font-mono">
              Result: 1 Contract. 1 Dedicated Partner. Aligned Execution. Scalable Business Growth.
            </div>
          </div>

        </div>
      </section>

      {/* 3. 4 Modular Engagement Options */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">
            Flexible Collaboration
          </span>
          <h2 className="text-3xl font-heading font-extrabold text-white">
            4 Modular Engagement Options
          </h2>
          <p className="text-sm text-slate-300">
            Engage with ScaleRook based on your exact stage and operational priorities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {engagementOptions.map((opt, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl glass-card border flex flex-col justify-between space-y-4 transition-all ${
                opt.highlight
                  ? 'border-gold-brand bg-purple-950/30 shadow-gold-glow scale-[1.02]'
                  : 'border-purple-500/20 hover:border-purple-500/50'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-purple-950 border border-purple-500/30 text-purple-300">
                    {opt.option}
                  </span>
                  <span className={`text-[10px] font-mono font-bold ${opt.highlight ? 'text-gold-brand' : 'text-slate-400'}`}>
                    {opt.badge}
                  </span>
                </div>

                <div>
                  <span className="text-xs text-slate-400 block font-mono">{opt.type}</span>
                  <h3 className="text-xl font-heading font-bold text-white mt-0.5">{opt.title}</h3>
                </div>

                <div className="p-3 rounded-lg bg-obsidian/80 border border-slate-800 text-xs font-medium text-gold-brand">
                  "{opt.trigger}"
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {opt.desc}
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenStrategyModal}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition ${
                    opt.highlight
                      ? 'btn-gold-glow text-obsidian shadow-gold-glow'
                      : 'bg-obsidian-card border border-purple-500/30 text-white hover:border-gold-brand'
                  }`}
                >
                  Select {opt.type}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Embedded Retainer Configurator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RetainerConfigurator onOpenModal={onOpenStrategyModal} />
      </section>

    </div>
  );
}
