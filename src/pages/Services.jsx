import React, { useEffect } from 'react';
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
  ArrowRight
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
      title: 'SCALEROOK BUILD',
      headline: 'Build Your Digital Foundation',
      premise: 'We create the digital infrastructure your business needs to establish a professional presence.',
      objective: 'Turn your business idea into a professional digital presence.',
      icon: Globe,
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
    <div className="bg-transparent pb-20 pt-28 text-[#F4F0E8]">
      <section className="ref-shell">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="ref-eyebrow justify-center">Capability directory</div>
          <h1 className="display-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-none text-[#F4F0E8]">Capabilities & deliverables</h1>
          <p className="mx-auto max-w-3xl text-base md:text-lg text-[#E2DDD4] font-medium leading-relaxed">
            From your initial web presence to remote teams and market expansion — explore all 7 ScaleRook pillars engineered for end-to-end business growth.
          </p>
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {serviceModules.map((m) => (
              <a key={m.id} href={`#${m.id}`} className="btn-secondary py-2.5 px-3.5 text-[0.62rem] font-bold">
                {m.num} {m.title.replace('SCALEROOK ', '')}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="ref-shell mt-16 space-y-12">
        {serviceModules.map((module) => {
          return (
            <div
              key={module.id}
              id={module.id}
              data-section={module.id}
              className="editorial-card p-6 md:p-8 xl:p-10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-stretch">
                {/* Left Column: 46-48% width, visually dominant typography */}
                <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-between space-y-6">
                  {/* Service Number + Category Label */}
                  <div className="flex items-center gap-5">
                    <span className="service-marker-number text-[64px] sm:text-[72px] lg:text-[78px] font-extrabold text-[#8D16FF] leading-none select-none">
                      {module.num}
                    </span>
                    <div className="flex flex-col gap-1.5">
                      <span className="text-[13px] md:text-[15px] tracking-[0.18em] uppercase text-[#D7A62A] font-extrabold">
                        {module.title}
                      </span>
                      <div className="h-[2px] w-14 bg-[#D7A62A]/50" />
                    </div>
                  </div>

                  {/* Massive Main Heading: 72px–78px on Desktop */}
                  <h2 className="section-headline text-[38px] sm:text-[46px] md:text-[56px] lg:text-[66px] xl:text-[74px] 2xl:text-[76px] font-extrabold leading-[0.98] text-[#F4F0E8] tracking-[-0.035em]">
                    {module.headline}
                  </h2>

                  {/* Substantial Description: 18px–20px */}
                  <p className="service-premise-text text-[17px] md:text-[19px] lg:text-[20px] text-[#E2DDD4] font-medium leading-[1.62]">
                    {module.premise}
                  </p>

                  {/* Prominent Objective Box */}
                  <div className="p-5 md:p-6 bg-[#050505] border border-[rgba(215,166,42,0.3)] space-y-2">
                    <span className="text-[13px] font-mono text-[#D7A62A] uppercase tracking-widest block font-extrabold">
                      Objective
                    </span>
                    <p className="text-[16px] md:text-[18px] font-serif font-bold text-[#E5B93F] leading-snug">
                      "{module.objective}"
                    </p>
                  </div>

                  {/* Strong CTA Button: 14px–15px */}
                  <button
                    onClick={onOpenStrategyModal}
                    className="btn-gold-rect w-full py-4 px-6 text-[14px] md:text-[15px] uppercase tracking-[0.16em] font-extrabold flex items-center justify-center gap-3"
                  >
                    <span>Request {module.title} Execution</span>
                    <span>→</span>
                  </button>
                </div>

                {/* Right Column: Substantial Deliverables Checklist */}
                <div className="lg:col-span-6 xl:col-span-6 p-6 md:p-8 xl:p-10 bg-[#050505] border border-[rgba(215,166,42,0.25)] flex flex-col justify-between space-y-6">
                  <div className="flex items-center justify-between border-b border-[rgba(215,166,42,0.25)] pb-4">
                    <span className="text-[14px] md:text-[15px] font-mono font-extrabold text-[#D7A62A] uppercase tracking-wider">
                      Deliverables Checklist ({module.checklist.length})
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-auto">
                    {module.checklist.map((item, cIdx) => (
                      <div
                        key={cIdx}
                        className="flex items-center gap-3 p-3.5 bg-[#08070A] border border-[rgba(215,166,42,0.22)] text-[15px] md:text-[16px] font-semibold text-[#F4F0E8] leading-snug"
                      >
                        <CheckCircle2 className="w-[18px] h-[18px] text-[#7B00FF] flex-shrink-0" />
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
        <div className="editorial-card p-10 md:p-14 text-center space-y-6 bg-[#08070A] border-2 border-[rgba(215,166,42,0.45)]">
          <h2 className="text-3xl font-serif font-extrabold text-[#F4F0E8]">
            Need a Customized Combination of Services?
          </h2>
          <p className="text-sm text-[#B8B3AE] max-w-2xl mx-auto">
            Our ScaleRook Business Partner model allows you to combine multiple service pillars into one seamless monthly execution retainer.
          </p>
          <div className="flex items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenStrategyModal}
              className="btn-gold-rect px-8 py-4 text-xs font-bold uppercase tracking-wider"
            >
              Configure Custom Retainer →
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
