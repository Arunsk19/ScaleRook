import React from 'react';
import { Sparkles, ShieldCheck, Crown, Target, Users, Building2, Rocket, Globe2, Compass, ArrowRight } from 'lucide-react';
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
    <div className="pt-28 pb-20 space-y-20">
      
      {/* 1. Header & Brand Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/80 border border-gold-brand/40 shadow-purple-glow">
          <Sparkles className="w-3.5 h-3.5 text-gold-brand" />
          <span className="text-xs font-mono tracking-widest text-gold-brand uppercase font-semibold">
            ABOUT SCALEROOK & PHILOSOPHY
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white">
          Who We Work With & Our Story
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
          ScaleRook was founded on a simple truth: turning ambition into a thriving enterprise requires strategic moves, execution muscle, and unified discipline.
        </p>
      </section>

      {/* 2. Target Audiences (Who We Work With) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono text-gold-brand uppercase tracking-widest">
            Target Segments
          </span>
          <h2 className="text-3xl font-heading font-extrabold text-white">
            Who We Work With
          </h2>
          <p className="text-sm text-slate-300">
            Engineered for five distinct business profiles requiring dedicated execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {targetAudiences.map((ta, idx) => {
            const Icon = ta.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl glass-card border border-purple-500/20 space-y-4 hover:border-gold-brand/40 transition flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-300">
                    <Icon className="w-6 h-6 text-gold-brand" />
                  </div>

                  <h3 className="text-xl font-heading font-bold text-white">{ta.title}</h3>

                  <p className="text-xs text-slate-300 leading-relaxed font-medium">
                    "{ta.desc}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800">
                  <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest block">Primary Focus</span>
                  <span className="text-xs text-gold-brand font-semibold">{ta.focus}</span>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Universal Partner Summary */}
          <div className="p-6 rounded-2xl glass-card border border-gold-brand/40 shadow-gold-glow space-y-4 flex flex-col justify-between bg-purple-950/30">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-gold-brand/20 border border-gold-brand/40 flex items-center justify-center text-gold-brand">
                <Crown className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-bold text-white text-gradient-gold">Custom Alignment</h3>
              <p className="text-xs text-slate-200 leading-relaxed">
                Whether you need a single landing page or a 10-person dedicated remote sales and ops department, ScaleRook scales dynamically with your stage.
              </p>
            </div>

            <button
              onClick={onOpenStrategyModal}
              className="w-full py-2.5 px-4 rounded-xl btn-gold-glow text-obsidian font-bold text-xs uppercase tracking-wider"
            >
              Discuss Your Stage
            </button>
          </div>
        </div>
      </section>

      {/* 3. Core Story & Brand Architecture */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 md:p-12 rounded-3xl glass-card border border-purple-500/30 space-y-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">
              Brand Philosophy & Narrative
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white">
              Strategic Moves Over Reactive Hustle
            </h2>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
              In chess, amateurs react to every individual attack while grandmasters move with structured strategy, controlling key files and creating inescapable positions. In business, reactive hustle creates burnout; calculated execution creates market leadership.
            </p>
          </div>

          <ChessConceptCard />
        </div>
      </section>

      {/* 4. Legal Attribution & Corporate Heritage */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 md:p-10 rounded-3xl gradient-border text-center space-y-6 relative overflow-hidden">
          <div className="inline-block p-4 rounded-2xl bg-obsidian/90 border border-gold-brand/40 shadow-gold-glow">
            <Logo size="large" showTagline={true} />
          </div>

          <div className="space-y-2 max-w-xl mx-auto">
            <h3 className="text-xl font-heading font-extrabold text-white">
              Corporate Affiliation & Heritage
            </h3>
            <p className="text-sm text-slate-300">
              ScaleRook is a specialized corporate brand operating under the umbrella of <strong className="text-gold-brand font-semibold">ARM Digital Services</strong> — delivering enterprise-grade web architecture, creative media, digital marketing, outbound sales development, and remote staffing globally.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-950/80 border border-purple-500/30 text-xs font-mono text-gold-brand">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Official Brand of ARM Digital Services. All Rights Reserved.</span>
          </div>
        </div>
      </section>

    </div>
  );
}
