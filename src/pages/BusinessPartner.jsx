import React from 'react';
import { Check, X, ShieldCheck, ArrowRight, Zap, Users } from 'lucide-react';
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
    <div className="bg-transparent pb-20 pt-28 text-[#F4F0E8]">
      <section data-section="partner" className="ref-shell text-center space-y-6">
        <div className="ref-eyebrow justify-center">Flagship engagement model</div>
        <h1 className="display-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-none text-[#F4F0E8]">ScaleRook Business Partner</h1>
        <p className="mx-auto max-w-3xl text-base md:text-lg text-[#E2DDD4] font-medium leading-relaxed">
          The single partner solution to eliminate agency sprawl. Access world-class web, creative, marketing, sales, talent, and ops without managing six different vendors.
        </p>
        <div className="pt-2">
          <button onClick={onOpenStrategyModal} className="btn-gold-rect">Discuss partner retainer <span>→</span></button>
        </div>
      </section>

      {/* 2. Fragmented Management vs ScaleRook Solution */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 mt-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold text-[#D7A62A] uppercase tracking-widest block">
            COMPARATIVE ANALYSIS
          </span>
          <h2 className="section-headline text-[38px] sm:text-[46px] md:text-[56px] lg:text-[66px] xl:text-[72px] font-extrabold text-[#F4F0E8] leading-[0.98]">
            Fragmented Agency Sprawl vs. ScaleRook
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Fragmented Management (The Headache) */}
          <div className="lg:col-span-6 p-8 editorial-card border-red-900/40 space-y-6 bg-[#08070A]">
            <div className="flex items-center justify-between border-b border-red-900/30 pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-widest block">The Old Way</span>
                <h3 className="text-2xl font-serif font-bold text-[#F4F0E8]">Fragmented Vendor Sprawl</h3>
              </div>
              <X className="w-6 h-6 text-red-400" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {fragmentedAgents.map((ag, idx) => (
                <div key={idx} className="p-3.5 bg-[#050505] border border-red-900/30 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#F4F0E8]">
                    <X className="w-3.5 h-3.5 text-red-400" />
                    <span>{ag.title}</span>
                  </div>
                  <p className="text-[12px] text-[#D8D3CC] font-medium">{ag.headache}</p>
                </div>
              ))}
            </div>

            <div className="p-4 bg-red-950/20 border border-red-900/40 text-xs text-red-300 font-mono font-medium">
              Result: Endless meetings, conflicting strategies, double invoicing, and zero single-point accountability.
            </div>
          </div>

          {/* Right: The ScaleRook Solution */}
          <div className="lg:col-span-6 p-8 editorial-card border-[rgba(215,166,42,0.45)] space-y-6 bg-[#08070A]">
            <div className="flex items-center justify-between border-b border-[rgba(215,166,42,0.3)] pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-[#D7A62A] uppercase tracking-widest block">The ScaleRook Way</span>
                <h3 className="text-2xl font-serif font-bold text-[#E5B93F]">Single Strategic Execution Partner</h3>
              </div>
              <Check className="w-6 h-6 text-[#E5B93F]" />
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-[#050505] border border-[rgba(215,166,42,0.25)] flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#D7A62A] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-base font-serif font-bold text-[#F4F0E8]">1 Strategic Account Director</h4>
                  <p className="text-xs text-[#E2DDD4] font-medium leading-relaxed">Single point of contact orchestrating all design, web, marketing, sales, and remote talent execution.</p>
                </div>
              </div>

              <div className="p-4 bg-[#050505] border border-[rgba(215,166,42,0.25)] flex items-start gap-3">
                <Zap className="w-5 h-5 text-[#7B00FF] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-base font-serif font-bold text-[#F4F0E8]">7 Integrated Capability Pillars</h4>
                  <p className="text-xs text-[#E2DDD4] font-medium leading-relaxed">Build, Creative, Grow, Sell, Talent, Operate, and Scale aligned towards a single revenue goal.</p>
                </div>
              </div>

              <div className="p-4 bg-[#050505] border border-[rgba(215,166,42,0.25)] flex items-start gap-3">
                <Users className="w-5 h-5 text-[#D7A62A] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-base font-serif font-bold text-[#F4F0E8]">Unified Dedicated Extended Team</h4>
                  <p className="text-xs text-[#E2DDD4] font-medium leading-relaxed">Scalable remote resource allocation without internal payroll or HR overhead.</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#050505] border border-[rgba(215,166,42,0.45)] text-xs text-[#E5B93F] font-mono font-bold">
              Result: 1 Contract. 1 Dedicated Partner. Aligned Execution. Scalable Business Growth.
            </div>
          </div>

        </div>
      </section>

      {/* 3. 4 Modular Engagement Options */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 mt-16">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold text-[#D7A62A] uppercase tracking-widest block">
            FLEXIBLE ENGAGEMENT
          </span>
          <h2 className="section-headline text-[38px] sm:text-[46px] md:text-[56px] lg:text-[66px] xl:text-[72px] font-extrabold text-[#F4F0E8] leading-[0.98]">
            4 Modular Engagement Options
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {engagementOptions.map((opt, idx) => (
            <div
              key={idx}
              className={`editorial-card p-6 flex flex-col justify-between space-y-4 bg-[#08070A] ${
                opt.highlight
                  ? 'border-2 border-[#D7A62A]'
                  : 'border border-[rgba(215,166,42,0.25)]'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-1 bg-[#050505] border border-[rgba(215,166,42,0.3)] text-[#D7A62A]">
                    {opt.option}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-[#B8B3AE]">
                    {opt.badge}
                  </span>
                </div>

                <div>
                  <span className="text-xs text-[#B8B3AE] block font-mono">{opt.type}</span>
                  <h3 className="text-xl font-serif font-bold text-[#F4F0E8] mt-0.5">{opt.title}</h3>
                </div>

                <div className="p-3 bg-[#050505] border border-[rgba(215,166,42,0.2)] text-xs italic font-serif text-[#E5B93F]">
                  "{opt.trigger}"
                </div>

                <p className="text-xs text-[#B8B3AE] leading-relaxed">
                  {opt.desc}
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenStrategyModal}
                  className={`w-full py-3 text-xs font-bold uppercase tracking-wider ${
                    opt.highlight
                      ? 'btn-gold-rect'
                      : 'bg-[#050505] border border-[rgba(215,166,42,0.3)] text-[#F4F0E8] hover:border-[#E5B93F]'
                  }`}
                >
                  Select {opt.type} →
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
