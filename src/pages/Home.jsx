import React from 'react';
import { Link } from 'react-router-dom';
import CinematicRookHero from '../components/CinematicRookHero';

export default function Home({ onOpenStrategyModal }) {
  const strategicMoves = [
    {
      num: '01',
      category: 'BUILD',
      title: 'Start with a strong foundation.',
      description: 'Your business deserves more than a basic online presence. We build the digital and brand foundation that makes the next move possible.',
      quote: '“A great business begins with a foundation built to carry the future.”',
      visual: 'build'
    },
    {
      num: '02',
      category: 'GROW',
      title: 'Put the business in front of the right people.',
      description: 'From content and SEO to paid campaigns and lead generation, we turn attention into measurable opportunities.',
      quote: '“Visibility is not the destination. It is the beginning of the conversation.”',
      visual: 'grow'
    },
    {
      num: '03',
      category: 'SELL',
      title: 'Turn conversations into customers.',
      description: 'We build and manage sales pipelines that consistently create, nurture and convert the right opportunities.',
      quote: '“The right conversation can change the direction of a business.”',
      visual: 'sell'
    },
    {
      num: '04',
      category: 'OPERATE',
      title: 'Keep the business moving.',
      description: 'Strong systems and reliable operations ensure your business runs smoothly behind every successful move.',
      quote: '“Growth becomes powerful when the system behind it can keep up.”',
      visual: 'operate'
    },
    {
      num: '05',
      category: 'SCALE',
      title: 'Make every next move count.',
      description: 'Sales, people, systems and operations come together when the business is ready to go further.',
      quote: '“Growth is not about moving faster. It is about making better moves.”',
      visual: 'scale'
    }
  ];

  const capabilityCards = [
    { num: '01', category: 'BUILD', title: 'Digital Foundation', desc: 'Websites, e-commerce, UI/UX, hosting, security, maintenance and integrations.' },
    { num: '02', category: 'CREATIVE', title: 'Brand & Content', desc: 'Brand identity, design, copy, photography, video, reels and campaigns.' },
    { num: '03', category: 'GROW', title: 'Digital Marketing', desc: 'SEO, social media, advertising, lead generation, funnels and analytics.' },
    { num: '04', category: 'SELL', title: 'Sales Pipeline', desc: 'B2B lead generation, outbound, SDR/BDR support, appointment setting and CRM.' },
    { num: '05', category: 'TALENT', title: 'People & Staffing', desc: 'Recruitment, remote staffing, dedicated resource, virtual assistants and support teams.' },
    { num: '06', category: 'OPERATE', title: 'Business Operations', desc: 'Virtual assistance, admin, back-office, data, CRM and process support.' },
    { num: '07', category: 'SCALE', title: 'Growth & Expansion', desc: 'New-market expansion, automation, customer acquisition, team expansion and growth strategy.' },
  ];

  const processSteps = [
    { num: '01', title: 'Understand', desc: 'Business, goals, market, customers and challenges.' },
    { num: '02', title: 'Plan', desc: 'Create the execution roadmap.' },
    { num: '03', title: 'Build', desc: 'Create the digital and brand foundation.' },
    { num: '04', title: 'Launch', desc: 'Take the offer to market.' },
    { num: '05', title: 'Grow', desc: 'Generate visibility, leads and opportunities.' },
    { num: '06', title: 'Scale', desc: 'Add capacity as the business grows.' },
  ];

  return (
    <div className="ref-section bg-transparent pb-20">
      <section data-section="hero" className="hero-cinematic">
        <div className="hero-cinematic-media">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="hero-video"
            poster="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80"
          >
            <source src="https://cdn.coverr.co/videos/coverr-digital-background-1562151982629/1080p.mp4" type="video/mp4" />
          </video>
          <div className="hero-vignette" />
          <div className="hero-glow hero-glow-left" />
          <div className="hero-glow hero-glow-right" />
        </div>

        {/* Cinematic 3D Dark Metallic Chess Rook Hero & Strategy Atmosphere */}
        <CinematicRookHero />

        <div className="hero-content">
          <div className="hero-badge">
            <span>Strategic moves • scalable growth</span>
          </div>

          <h1 className="hero-headline">
            Every business has a vision.<br />
            <span className="hero-headline-gradient">We make the moves.</span>
          </h1>

          <p className="hero-subheadline">
            ScaleRook is the execution partner behind your business — combining digital, creative, marketing, sales, talent, and operations under one strategic roof.
          </p>

          <div className="hero-cta-row">
            <button type="button" onClick={onOpenStrategyModal} className="hero-cta-primary">
              Explore ScaleRook <span aria-hidden="true">→</span>
            </button>
            <Link to="/services" className="hero-cta-secondary">
              View Capabilities
            </Link>
          </div>

          <div className="hero-scroll-indicator">
            <span className="hero-scroll-line" />
            <span>Scroll to explore</span>
          </div>
        </div>
      </section>

      <div className="ref-marquee">
        <div className="ref-marquee-inner">
          <span>Built to move</span><span>•</span><span>Strategy</span><span>•</span><span>Creative</span><span>•</span><span>Growth</span><span>•</span><span>Sales</span><span>•</span><span>Talent</span><span>•</span><span>Operations</span><span>•</span><span>Built to scale</span><span>•</span>
          <span>Built to move</span><span>•</span><span>Strategy</span><span>•</span><span>Creative</span><span>•</span><span>Growth</span><span>•</span><span>Sales</span><span>•</span><span>Talent</span><span>•</span><span>Operations</span><span>•</span><span>Built to scale</span><span>•</span>
        </div>
      </div>

      <section className="ref-shell py-20">
        <div className="ref-grid gap-y-10">
          {strategicMoves.map((move) => (
            <div key={move.num} className="ref-panel col-span-12 p-6 md:p-8 lg:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 pr-0 lg:pr-10">
                  <div className="flex items-center gap-5">
                    <span className="service-marker-number text-[58px] lg:text-[76px] font-extrabold text-[#8D16FF] leading-none select-none">{move.num}</span>
                    <span className="service-category-label text-[13px] md:text-[15px] font-extrabold tracking-[0.18em] uppercase text-[#D7A62A] ml-2">{move.category}</span>
                  </div>
                  <h3 className="section-headline text-[38px] sm:text-[46px] md:text-[56px] lg:text-[66px] xl:text-[72px] font-extrabold leading-[0.98] mt-5">{move.title}</h3>
                  <p className="service-premise-text text-[17px] md:text-[19px] lg:text-[20px] text-[#E2DDD4] font-medium leading-[1.62] mt-4 max-w-xl">{move.description}</p>
                  <p className="ref-quote text-[16px] md:text-[18px] mt-5 font-bold leading-relaxed">{move.quote}</p>
                </div>

                <div className="lg:col-span-5">
                  <div className={`ref-visual ${move.visual} h-64 lg:h-72`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(123,0,255,0.12),_transparent_45%,_rgba(7,6,9,0.8)_100%)]"></div>
                    {move.visual === 'build' && (
                      <>
                        <span className="cube left-[18%] top-[18%] h-16 w-16 border border-[rgba(215,166,42,0.35)]"></span>
                        <span className="cube right-[20%] top-[28%] h-20 w-20 border border-[rgba(215,166,42,0.35)]"></span>
                        <span className="line left-[30%] top-[60%] w-28"></span>
                        <span className="line left-[54%] top-[46%] w-20"></span>
                      </>
                    )}
                    {move.visual === 'grow' && (
                      <>
                        <span className="bar left-[18%] h-[42%]"></span>
                        <span className="bar left-[34%] h-[60%]"></span>
                        <span className="bar left-[50%] h-[52%]"></span>
                        <span className="bar left-[66%] h-[72%]"></span>
                        <span className="line left-[16%] top-[58%] w-48"></span>
                      </>
                    )}
                    {move.visual === 'sell' && (
                      <>
                        <span className="node left-[22%] top-[34%]"></span>
                        <span className="node left-[45%] top-[44%]"></span>
                        <span className="node left-[58%] top-[28%]"></span>
                        <span className="node left-[74%] top-[50%]"></span>
                        <span className="line left-[22%] top-[34%] w-24 rotate-[18deg]"></span>
                        <span className="line left-[45%] top-[44%] w-24 rotate-[-12deg]"></span>
                        <span className="line left-[58%] top-[28%] w-20 rotate-[18deg]"></span>
                      </>
                    )}
                    {move.visual === 'operate' && (
                      <>
                        <span className="ring left-[24%] top-[24%] h-20 w-20"></span>
                        <span className="ring left-[38%] top-[38%] h-24 w-24 border-[rgba(123,0,255,0.5)]"></span>
                        <span className="ring left-[56%] top-[20%] h-20 w-20"></span>
                        <span className="node left-[52%] top-[48%]"></span>
                        <span className="line left-[30%] top-[50%] w-36"></span>
                        <span className="line left-[52%] top-[52%] w-24 rotate-[90deg]"></span>
                      </>
                    )}
                    {move.visual === 'scale' && (
                      <>
                        <span className="ring left-[28%] top-[24%] h-20 w-20"></span>
                        <span className="ring left-[32%] top-[28%] h-28 w-28 border-[rgba(123,0,255,0.45)]"></span>
                        <span className="node left-[50%] top-[52%]"></span>
                        <span className="node left-[68%] top-[38%]"></span>
                        <span className="line left-[22%] top-[62%] w-52"></span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="ref-shell py-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="ref-eyebrow">Capabilities</div>
            <h2 className="mt-3 section-headline text-[44px] sm:text-[54px] md:text-[64px] lg:text-[72px] xl:text-[76px] font-extrabold leading-[0.98] text-[#F4F0E8]">Seven capabilities.<br />One direction.</h2>
          </div>
          <p className="max-w-md text-base text-[#E2DDD4] font-medium leading-relaxed">Choose the move your business needs today. Add capabilities as tomorrow demands more.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {capabilityCards.map((cap, index) => (
            <div key={cap.num} className={`capability-card editorial-card editorial-card-hover ${index === 6 ? 'xl:col-span-3' : ''}`}>
              <div className="flex items-center justify-between border-b border-[rgba(215,166,42,0.2)] pb-4">
                <span className="num">{cap.num}</span>
                <span className="inline-flex h-9 w-9 items-center justify-center border border-[rgba(215,166,42,0.25)] bg-[#050505] text-[#D7A62A] font-bold">•</span>
              </div>
              <div className="mt-5">
                <span className="label">{cap.category}</span>
                <h3 className="title mt-2">{cap.title}</h3>
              </div>
              <p className="desc mt-5">{cap.desc}</p>
              <div className="mt-7 flex justify-end text-[#D7A62A] text-xl font-bold">→</div>
            </div>
          ))}
        </div>
      </section>

      <section className="ref-shell py-20">
        <div className="ref-cta-panel">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
            <div className="lg:col-span-8">
              <h2 className="display-serif text-6xl md:text-8xl lg:text-9xl font-black leading-[0.84] text-[#F4F0E8]">
                <span>BUILD.</span>
                <span className="block text-gradient-purple">GROW.</span>
                <span className="block">SELL.</span>
                <span className="block text-[#D8D3CC]">OPERATE.</span>
                <span className="block text-gradient-gold">SCALE.</span>
              </h2>
            </div>
            <div className="lg:col-span-4 lg:border-l lg:border-[rgba(215,166,42,0.2)] lg:pl-8">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center border border-[rgba(215,166,42,0.4)] bg-[#050505] text-[#D7A62A] text-2xl font-bold">•</div>
              <h3 className="display-serif text-3xl md:text-4xl font-bold text-[#F4F0E8]">The complete execution architecture.</h3>
              <p className="mt-4 text-base text-[#E2DDD4] font-medium leading-relaxed">One partner providing all five growth pillars under a single strategic command.</p>
              <button onClick={onOpenStrategyModal} className="btn-gold-rect mt-7 w-full">Initiate strategy</button>
            </div>
          </div>
        </div>
      </section>

      <section className="ref-shell py-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="ref-eyebrow justify-center">Scalerook business partner</div>
          <h2 className="mt-4 section-headline text-[44px] sm:text-[54px] md:text-[64px] lg:text-[72px] xl:text-[76px] font-extrabold leading-[0.98] text-[#F4F0E8]">Stop managing vendors.<br /><span className="text-gradient-gold">Build one strategic team.</span></h2>
          <p className="mt-5 text-base md:text-lg text-[#E2DDD4] font-medium leading-relaxed">ScaleRook Business Partner brings multiple capabilities under one relationship — from your first digital foundation to marketing, sales, talent and operations as you grow.</p>
        </div>
      </section>

      <section className="ref-shell py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-3 space-y-3">
            {['BUILD', 'CREATIVE', 'GROW', 'SELL', 'TALENT', 'OPERATE', 'SCALE'].map((item, index) => (
              <div key={item} className="flex items-center justify-between border border-[rgba(215,166,42,0.2)] bg-[#08070A] px-4 py-3 text-[0.65rem] font-bold tracking-[0.16em] uppercase text-[#F4F0E8]">
                <span>{String(index + 1).padStart(2, '0')} {item}</span>
                <span className="text-[#D7A62A] font-bold">→</span>
              </div>
            ))}
          </div>

          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="flex h-52 w-52 items-center justify-center border border-[rgba(215,166,42,0.5)] bg-[#050505] shadow-[0_0_35px_rgba(123,0,255,0.22)]">
              <div className="h-16 w-16 border border-[rgba(215,166,42,0.9)] bg-[#09070B] rotate-45"></div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-4">
            {['ONE PARTNER', 'MULTIPLE CAPABILITIES', 'SCALABLE EXECUTION'].map((item) => (
              <div key={item} className="border border-[rgba(215,166,42,0.2)] bg-[#08070A] p-4">
                <div className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[#D7A62A]">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ref-shell py-16">
        <div className="text-center max-w-3xl mx-auto">
          <div className="ref-eyebrow justify-center">The process</div>
          <h2 className="mt-4 section-headline text-[40px] sm:text-[50px] md:text-[60px] lg:text-[68px] xl:text-[74px] font-extrabold leading-[1.0] text-[#F4F0E8]">Understand. Plan. Build. Launch. Grow. Scale.</h2>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-6 gap-4">
          {processSteps.map((step) => (
            <div key={step.num} className="ref-process-node p-4" data-num={step.num}>
              <h3 className="mt-4 display-serif text-2xl font-bold text-[#F4F0E8]">{step.title}</h3>
              <p className="mt-2 text-xs leading-6 text-[#E2DDD4] font-medium">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="ref-shell pb-8 pt-3">
        <div className="ref-cta-panel text-center">
          <div className="relative z-10">
            <div className="ref-eyebrow justify-center">Start the conversation</div>
            <h2 className="mt-5 section-headline text-[44px] sm:text-[56px] md:text-[66px] lg:text-[76px] xl:text-[82px] font-extrabold leading-[0.96] text-[#F4F0E8]">Don’t just build a business.<br /><span className="text-gradient-purple-gold">Build one that can scale.</span></h2>
            <p className="mx-auto mt-5 max-w-2xl text-base md:text-lg text-[#E2DDD4] font-medium leading-relaxed">Tell us what you’re trying to build. ScaleRook can help identify the right capabilities and execution path.</p>
            <button onClick={onOpenStrategyModal} className="btn-gold-rect mt-7">Start your journey <span>→</span></button>
          </div>
        </div>
      </section>
    </div>
  );
}
