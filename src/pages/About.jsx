import React from 'react';
import { ShieldCheck, Crown, Rocket, Building2, Users, Globe2, Compass } from 'lucide-react';
import ChessConceptCard from '../components/ChessConceptCard';
import Logo from '../components/Logo';

export default function About({ onOpenStrategyModal }) {
  const targetAudiences = [
    {
      icon: Compass,
      title: 'Entrepreneurs',
      desc: 'You have the idea but don\'t have the time or team to execute it.',
      focus: 'Turning vision into turnkey execution'
    },
    {
      icon: Rocket,
      title: 'Startups',
      desc: 'You need to establish your brand, digital presence, and customer acquisition engine.',
      focus: 'Go-to-market speed & foundation'
    },
    {
      icon: Building2,
      title: 'Small & Medium Businesses',
      desc: 'You need professional marketing, sales, and operational support without building large internal teams.',
      focus: 'Scalable capability expansion'
    },
    {
      icon: Users,
      title: 'Established Businesses',
      desc: 'You need additional sales, marketing, recruitment, or operational capacity.',
      focus: 'Dedicated remote resource scaling'
    },
    {
      icon: Globe2,
      title: 'Businesses Entering New Markets',
      desc: 'You need research, lead generation, sales development, and remote resources to establish a presence.',
      focus: 'Outbound pipeline & market entry'
    }
  ];

  return (
    <div className="bg-transparent pb-20 pt-28 text-[#F4F0E8]">
      <section className="ref-shell text-center space-y-6">
        <div className="ref-eyebrow justify-center">About ScaleRook</div>
        <h1 className="hero-headline text-[#F4F0E8] max-w-5xl mx-auto">
          Who We Work With & Our Story
        </h1>
        <p className="mx-auto max-w-3xl text-lg md:text-[21px] text-[#E2DDD4] font-medium leading-[1.65]">
          ScaleRook was founded on a simple truth: turning ambition into a thriving enterprise requires strategic moves, execution muscle, and unified discipline.
        </p>
      </section>

      {/* 2. Target Audiences (Who We Work With) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 mt-16">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-[13px] md:text-[14px] font-mono font-bold text-[#D7A62A] uppercase tracking-[0.18em] block">
            TARGET PROFILES
          </span>
          <h2 className="section-headline text-center">
            Who We Work With
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {targetAudiences.map((ta, idx) => {
            const Icon = ta.icon;
            return (
              <div
                key={idx}
                className="editorial-card p-7 space-y-5 flex flex-col justify-between bg-[#08070A]"
              >
                <div className="space-y-3.5">
                  <div className="w-12 h-12 bg-[#050505] border border-[rgba(215,166,42,0.3)] flex items-center justify-center text-[#D7A62A] font-bold">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-2xl md:text-[26px] font-serif font-bold text-[#F4F0E8] leading-tight">{ta.title}</h3>

                  <p className="text-[15px] md:text-[16px] text-[#E2DDD4] font-medium leading-relaxed">
                    "{ta.desc}"
                  </p>
                </div>

                <div className="pt-3.5 border-t border-[rgba(215,166,42,0.2)]">
                  <span className="text-[11px] font-mono font-bold text-[#D7A62A] uppercase tracking-widest block">Primary Focus</span>
                  <span className="text-[13px] md:text-[14px] text-[#E5B93F] font-bold">{ta.focus}</span>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Universal Partner Summary */}
          <div className="editorial-card p-7 space-y-5 flex flex-col justify-between bg-[#08070A] border-2 border-[rgba(215,166,42,0.45)]">
            <div className="space-y-3.5">
              <div className="w-12 h-12 bg-[#050505] border border-[rgba(215,166,42,0.3)] flex items-center justify-center text-[#E5B93F] font-bold">
                <Crown className="w-6 h-6" />
              </div>
              <h3 className="text-2xl md:text-[26px] font-serif font-bold text-[#E5B93F] leading-tight">Custom Alignment</h3>
              <p className="text-[15px] md:text-[16px] text-[#E2DDD4] font-medium leading-relaxed">
                Whether you need a single landing page or a 10-person dedicated remote sales and ops department, ScaleRook scales dynamically with your stage.
              </p>
            </div>

            <button
              onClick={onOpenStrategyModal}
              className="btn-gold-rect w-full py-3.5 text-xs font-bold uppercase tracking-wider"
            >
              Discuss Your Stage →
            </button>
          </div>
        </div>
      </section>

      {/* 3. Core Story & Brand Architecture */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="editorial-card p-8 md:p-12 space-y-8 bg-[#08070A]">
          <div className="max-w-4xl space-y-4">
            <span className="text-[13px] md:text-[14px] font-mono font-bold text-[#D7A62A] uppercase tracking-[0.18em] block">
              PHILOSOPHY & NARRATIVE
            </span>
            <h2 className="section-headline">
              Strategic Moves Over Reactive Hustle
            </h2>
            <p className="text-lg md:text-[21px] text-[#E2DDD4] font-medium leading-[1.65]">
              In chess, amateurs react to every individual attack while grandmasters move with structured strategy, controlling key files and creating inescapable positions. In business, reactive hustle creates burnout; calculated execution creates market leadership.
            </p>
          </div>

          <ChessConceptCard />
        </div>
      </section>

      {/* 4. Legal Attribution & Corporate Heritage */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="editorial-card p-8 md:p-12 text-center space-y-7 bg-[#08070A] border-2 border-[rgba(215,166,42,0.45)]">
          <div className="inline-block p-4 bg-[#050505] border border-[rgba(215,166,42,0.3)]">
            <Logo size="large" showTagline={true} />
          </div>

          <div className="space-y-3 max-w-2xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#F4F0E8] leading-snug">
              Corporate Heritage & Affiliation
            </h3>
            <p className="text-base md:text-[18px] text-[#E2DDD4] font-medium leading-relaxed">
              ScaleRook is a specialized corporate brand operating under the umbrella of <strong className="text-[#E5B93F]">ARM Digital Services</strong> — delivering enterprise-grade web architecture, creative media, digital marketing, outbound sales development, and remote staffing globally.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#050505] border border-[rgba(215,166,42,0.25)] text-xs md:text-sm font-mono font-bold text-[#D7A62A]">
            <ShieldCheck className="w-4 h-4 text-[#7B00FF]" />
            <span>Official Brand of ARM Digital Services. All Rights Reserved.</span>
          </div>
        </div>
      </section>

    </div>
  );
}
