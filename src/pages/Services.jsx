import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Globe,
  Palette,
  TrendingUp,
  PhoneCall,
  Users,
  Sliders,
  Layers,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export default function Services({ onOpenStrategyModal }) {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elem = document.getElementById(location.hash.substring(1));
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const serviceModules = [
    {
      id: 'build',
      num: '01',
      title: 'SCALE ROOK BUILD',
      headline: 'Build Your Digital Foundation',
      premise: 'We create the digital infrastructure your business needs to establish a professional presence.',
      objective: 'Turn your business idea into a professional digital presence.',
      icon: Globe,
      color: 'purple',
      checklist: [
        'Business websites',
        'Corporate websites',
        'Landing pages',
        'Portfolio websites',
        'E-commerce websites',
        'WordPress websites',
        'Custom website development',
        'UI/UX design',
        'Website maintenance',
        'Domain & hosting assistance',
        'Website security',
        'Website optimization',
        'Basic integrations',
        'CRM and third-party integrations'
      ]
    },
    {
      id: 'creative',
      num: '02',
      title: 'SCALEROOK CREATIVE',
      headline: 'Make Your Brand Impossible to Ignore.',
      premise: 'Your business needs more than a logo. We create the visual and content assets that help businesses communicate, attract attention and build credibility.',
      objective: 'Turn your business into a brand people remember.',
      icon: Palette,
      color: 'gold',
      checklist: [
        'Brand identity',
        'Logo design',
        'Graphic design',
        'Social media creatives',
        'Content writing',
        'Copywriting',
        'Product photography',
        'Product videos',
        'Promotional videos',
        'Advertisement shooting',
        'Reels and short-form content',
        'Corporate photography',
        'Creative campaigns'
      ]
    },
    {
      id: 'grow',
      num: '03',
      title: 'SCALEROOK GROW',
      headline: 'Put Your Business in Front of the Right People.',
      premise: 'We build digital marketing systems designed to increase visibility, engagement, enquiries and customer acquisition.',
      objective: 'Turn attention into opportunities.',
      icon: TrendingUp,
      color: 'purple',
      checklist: [
        'Social media management',
        'SEO',
        'Local SEO',
        'Content marketing',
        'Meta advertising',
        'Google advertising',
        'YouTube advertising',
        'Lead generation campaigns',
        'Marketing funnels',
        'Landing-page campaigns',
        'Remarketing',
        'Campaign optimization',
        'Analytics and reporting'
      ]
    },
    {
      id: 'sell',
      num: '04',
      title: 'SCALEROOK SELL',
      headline: 'Build a Predictable Sales Pipeline.',
      premise: 'Marketing creates attention. Sales turns opportunities into revenue. Our sales services provide businesses with dedicated outbound and pipeline resources.',
      objective: 'Build conversations that create customers.',
      icon: PhoneCall,
      color: 'gold',
      checklist: [
        'B2B lead generation',
        'Outbound prospecting',
        'SDR services',
        'BDR services',
        'Appointment setting',
        'Cold calling',
        'Email outreach',
        'LinkedIn outreach',
        'Lead qualification',
        'Pipeline development',
        'Market research',
        'CRM management',
        'Sales follow-up'
      ]
    },
    {
      id: 'talent',
      num: '05',
      title: 'SCALEROOK TALENT',
      headline: 'Build Your Team Without Building Everything Yourself.',
      premise: 'Finding the right people can take time and money. ScaleRook supports businesses with vetted, scalable staffing and resource allocation.',
      objective: 'Give businesses access to the people they need to grow.',
      icon: Users,
      color: 'purple',
      checklist: [
        'Recruitment',
        'Talent sourcing',
        'Remote staffing',
        'Dedicated resources',
        'SDR/BDR hiring',
        'Sales resources',
        'Marketing resources',
        'Administrative resources',
        'Virtual assistants',
        'Customer support teams',
        'Back-office resources'
      ]
    },
    {
      id: 'operate',
      num: '06',
      title: 'SCALEROOK OPERATE',
      headline: 'We Help You Keep the Business Moving.',
      premise: 'Growth creates operational complexity. Our operational support eliminates administrative bottlenecks.',
      objective: 'Take operational pressure away from the business owner.',
      icon: Sliders,
      color: 'gold',
      checklist: [
        'Virtual assistance',
        'Customer support',
        'Administrative support',
        'Back-office operations',
        'Data management',
        'CRM management',
        'Lead management',
        'Appointment coordination',
        'Research',
        'Process support',
        'Remote operational teams'
      ]
    },
    {
      id: 'scale',
      num: '07',
      title: 'SCALEROOK SCALE',
      headline: "When You're Ready to Go Further.",
      premise: 'Once the foundation is established, we help businesses identify and execute aggressive expansion opportunities.',
      objective: 'Turn a working business into a scalable business.',
      icon: Layers,
      color: 'purple',
      checklist: [
        'New-market expansion',
        'Sales expansion',
        'Marketing expansion',
        'Process improvement',
        'Automation',
        'Customer acquisition',
        'Team expansion',
        'Remote operations',
        'Business development',
        'Growth strategy'
      ]
    }
  ];

  return (
    <div className="pt-28 pb-20 space-y-16">
      
      {/* Services Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/80 border border-gold-brand/40 shadow-purple-glow">
          <Sparkles className="w-3.5 h-3.5 text-gold-brand" />
          <span className="text-xs font-mono tracking-widest text-gold-brand uppercase font-semibold">
            COMPREHENSIVE CAPABILITY DIRECTORY
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white">
          Services & Execution Capabilities
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
          From your initial web presence to remote teams and market expansion — explore all 7 ScaleRook pillars engineered for end-to-end business growth.
        </p>

        {/* Pillar Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 pt-4">
          {serviceModules.map((m) => (
            <a
              key={m.id}
              href={`#${m.id}`}
              className="px-3.5 py-1.5 rounded-lg bg-obsidian-card border border-purple-500/20 text-xs font-mono text-slate-300 hover:border-gold-brand hover:text-gold-brand transition"
            >
              {m.num} {m.title.replace('SCALEROOK ', '')}
            </a>
          ))}
        </div>
      </section>

      {/* Services Deep Dive Modules */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {serviceModules.map((module) => {
          const Icon = module.icon;
          const isGold = module.color === 'gold';

          return (
            <div
              key={module.id}
              id={module.id}
              data-section={module.id}
              className={`p-8 md:p-12 rounded-3xl glass-card border transition-all duration-300 relative overflow-hidden ${
                isGold ? 'border-gold-brand/40 shadow-gold-glow' : 'border-purple-500/40 shadow-purple-glow'
              }`}
            >
              <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl pointer-events-none" style={{
                background: isGold ? 'rgba(212, 175, 55, 0.1)' : 'rgba(126, 34, 206, 0.1)'
              }}></div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                
                {/* Left Overview Column */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className={`font-mono text-sm font-bold ${isGold ? 'text-gold-brand' : 'text-purple-400'}`}>
                      {module.num}
                    </span>
                    <div className={`p-3 rounded-xl border ${
                      isGold ? 'bg-amber-950/60 border-gold-brand/40 text-gold-brand' : 'bg-purple-950/60 border-purple-500/40 text-purple-300'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
                      {module.title}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-white">
                      {module.headline}
                    </h2>
                    <p className="text-sm text-slate-300 leading-relaxed mt-3 font-medium">
                      {module.premise}
                    </p>
                  </div>

                  {/* Objective Badge */}
                  <div className={`p-4 rounded-xl border space-y-1 ${
                    isGold ? 'bg-amber-950/40 border-gold-brand/30' : 'bg-purple-950/40 border-purple-500/30'
                  }`}>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">Pillar Objective</span>
                    <p className={`text-xs font-heading font-bold ${isGold ? 'text-gold-brand' : 'text-purple-200'}`}>
                      "{module.objective}"
                    </p>
                  </div>

                  <button
                    onClick={onOpenStrategyModal}
                    className={`w-full py-3 px-5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                      isGold
                        ? 'btn-gold-glow text-obsidian shadow-gold-glow'
                        : 'bg-purple-brand hover:bg-purple-600 text-white shadow-purple-glow'
                    }`}
                  >
                    <span>Request {module.title} Execution</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Right Complete Checklist Grid */}
                <div className="lg:col-span-7 p-6 md:p-8 rounded-2xl bg-obsidian-card/90 border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-xs font-mono text-slate-300 uppercase tracking-wider">
                      Full Service Checklist ({module.checklist.length} Deliverables)
                    </span>
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {module.checklist.map((item, cIdx) => (
                      <div
                        key={cIdx}
                        className="flex items-center gap-2.5 p-2.5 rounded-lg bg-obsidian/70 border border-slate-800/80 text-xs text-slate-200 hover:border-slate-600 transition"
                      >
                        <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${isGold ? 'text-gold-brand' : 'text-purple-400'}`} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </section>

      {/* Services CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 md:p-12 rounded-3xl gradient-border text-center space-y-6">
          <h2 className="text-3xl font-heading font-extrabold text-white">
            Need a Customized Combination of Services?
          </h2>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto">
            Our ScaleRook Business Partner model allows you to combine multiple service pillars into one seamless monthly execution retainer.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={onOpenStrategyModal}
              className="px-8 py-4 rounded-xl btn-gold-glow text-obsidian font-bold text-xs uppercase tracking-wider shadow-gold-glow"
            >
              Configure Custom Retainer
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
