import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  CheckCircle,
  ShieldCheck,
  Zap,
  Globe,
  Palette,
  TrendingUp,
  PhoneCall,
  Users,
  Sliders,
  Layers,
  ChevronRight,
  Briefcase,
  Target,
  Clock,
  Compass
} from 'lucide-react';
import HeroCanvas from '../components/HeroCanvas';
import ChessConceptCard from '../components/ChessConceptCard';
import StepExecution from '../components/StepExecution';

export default function Home({ onOpenStrategyModal }) {
  const demands = [
    'A brand.',
    'A website.',
    'Marketing.',
    'Content.',
    'Customers.',
    'Sales.',
    'People.',
    'Systems.',
    'Operations.',
    'Growth.'
  ];

  const scenarios = [
    'Starting a business',
    'Launching a new product',
    'Building your first website',
    'Looking for customers',
    'Expanding into a new market',
    'Building a sales pipeline',
    'Hiring a remote team',
    'Improving your operations',
    'Scaling an existing company'
  ];

  const servicePillars = [
    {
      num: '01',
      title: 'ScaleRook Build',
      tagline: 'Digital Foundation',
      desc: 'High-performing business websites, e-commerce, custom dev, and UI/UX design infrastructure.',
      icon: Globe,
      link: '/services#build'
    },
    {
      num: '02',
      title: 'ScaleRook Creative',
      tagline: 'Brand & Content',
      desc: 'Brand identity, visual creatives, product photography, promotional shooting & short-form video.',
      icon: Palette,
      link: '/services#creative'
    },
    {
      num: '03',
      title: 'ScaleRook Grow',
      tagline: 'Digital Marketing',
      desc: 'SEO, Meta/Google ads, lead gen funnels, social media management & traffic acquisition.',
      icon: TrendingUp,
      link: '/services#grow'
    },
    {
      num: '04',
      title: 'ScaleRook Sell',
      tagline: 'Sales Pipeline',
      desc: 'B2B prospecting, SDR/BDR appointment setting, cold calling, and lead qualification.',
      icon: PhoneCall,
      link: '/services#sell'
    },
    {
      num: '05',
      title: 'ScaleRook Talent',
      tagline: 'Remote Staffing',
      desc: 'Vetted remote staffing, SDR recruitment, marketing specialists, and dedicated resources.',
      icon: Users,
      link: '/services#talent'
    },
    {
      num: '06',
      title: 'ScaleRook Operate',
      tagline: 'Operational Systems',
      desc: 'Virtual assistance, back-office operations, CRM management, & administrative support.',
      icon: Sliders,
      link: '/services#operate'
    },
    {
      num: '07',
      title: 'ScaleRook Scale',
      tagline: 'Expansion Strategy',
      desc: 'New market entry, sales expansion, process automation, and enterprise scale execution.',
      icon: Layers,
      link: '/services#scale'
    }
  ];

  const clientPillars = [
    {
      title: 'One Partner',
      desc: 'Reduce the complexity of managing multiple vendors by consolidating design, marketing, sales, and operations under one roof.'
    },
    {
      title: 'Flexible',
      desc: 'Use one service or combine multiple services depending on your immediate growth stage and priorities.'
    },
    {
      title: 'Scalable',
      desc: 'Start with what you need today and expand seamlessly as your revenue and organization grow.'
    },
    {
      title: 'Execution Focused',
      desc: 'We don\'t just provide recommendations. We roll up our sleeves and help execute every move.'
    },
    {
      title: 'Remote Ready',
      desc: 'Access skilled professionals and dedicated resources without building every department internally.'
    },
    {
      title: 'Entrepreneur Friendly',
      desc: 'Designed for founders who have the ambition but may not have the time or resources to do everything themselves.'
    }
  ];

  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. HERO SECTION */}
      <section data-section="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
        <HeroCanvas />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8 pt-8">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-purple-950/80 border border-gold-brand/40 shadow-purple-glow backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-gold-brand animate-ping"></span>
            <span className="text-xs font-mono tracking-widest text-gold-brand uppercase font-semibold">
              STRATEGIC MOVES • SCALABLE GROWTH
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold text-white tracking-tight leading-[1.1] max-w-5xl mx-auto">
            BUILD YOUR BUSINESS.{' '}
            <span className="text-gradient-purple">GROW YOUR BUSINESS.</span>{' '}
            <span className="text-gradient-gold">SCALE YOUR BUSINESS.</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-base sm:text-xl text-slate-200 max-w-3xl mx-auto font-normal leading-relaxed">
            ScaleRook is your end-to-end business growth and execution partner — helping you build your digital foundation, attract customers, develop sales, build teams and operate your business.
          </p>

          {/* Tagline Accent */}
          <div className="inline-block px-5 py-2 rounded-xl bg-obsidian-card/80 border border-purple-500/30 text-gold-brand font-medium italic text-sm">
            "The execution partner behind the business, not simply another service provider."
          </div>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenStrategyModal}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl btn-gold-glow text-obsidian font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-gold-glow"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              to="/services"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-obsidian-card/90 border border-purple-500/40 hover:border-gold-brand text-white font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all hover:bg-purple-950/40"
            >
              <span>Explore Our Services</span>
              <ChevronRight className="w-4 h-4 text-purple-400" />
            </Link>
          </div>

          {/* Trust stats indicator */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="p-4 rounded-xl glass-card border-purple-900/30 text-center">
              <span className="text-2xl font-extrabold text-gold-brand font-mono">7 Pillars</span>
              <p className="text-[11px] text-slate-400 uppercase mt-0.5">End-to-End Capabilities</p>
            </div>
            <div className="p-4 rounded-xl glass-card border-purple-900/30 text-center">
              <span className="text-2xl font-extrabold text-purple-300 font-mono">1 Partner</span>
              <p className="text-[11px] text-slate-400 uppercase mt-0.5">Unified Strategic Team</p>
            </div>
            <div className="p-4 rounded-xl glass-card border-purple-900/30 text-center">
              <span className="text-2xl font-extrabold text-gold-brand font-mono">6 Steps</span>
              <p className="text-[11px] text-slate-400 uppercase mt-0.5">Execution Roadmap</p>
            </div>
            <div className="p-4 rounded-xl glass-card border-purple-900/30 text-center">
              <span className="text-2xl font-extrabold text-emerald-400 font-mono">&lt; 24 hr</span>
              <p className="text-[11px] text-slate-400 uppercase mt-0.5">Strategy SLA Response</p>
            </div>
          </div>

        </div>
      </section>

      {/* 2. WHY SCALEROOK SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 md:p-12 rounded-3xl glass-card border border-purple-500/30 space-y-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono text-gold-brand uppercase tracking-widest">
              The Reality of Modern Business Building
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white">
              Why ScaleRook Was Built
            </h2>
            <p className="text-base text-slate-200 leading-relaxed font-medium">
              Every business starts with an idea. But turning that idea into a real, functioning, and growing business requires much more than an idea.
            </p>
          </div>

          {/* 10 Demands Grid Pills */}
          <div className="space-y-3">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
              The 10 Demands Every Founder Faces:
            </span>
            <div className="flex flex-wrap gap-2.5">
              {demands.map((item, idx) => (
                <div
                  key={idx}
                  className="px-4 py-2 rounded-xl bg-purple-950/60 border border-purple-500/30 text-slate-200 text-xs font-semibold flex items-center gap-2 hover:border-gold-brand transition"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-brand"></span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Value Pitch Box */}
          <div className="p-6 rounded-2xl bg-obsidian-card border border-purple-500/20 space-y-3">
            <p className="text-sm text-slate-200 leading-relaxed">
              Many entrepreneurs have the passion to build something of their own but don't have the time, team or expertise to manage everything themselves. <strong className="text-gold-brand">That's where ScaleRook comes in.</strong> We become an extension of your business. You focus on your vision. We focus on the execution.
            </p>
          </div>
        </div>
      </section>

      {/* 3. WHAT DOES SCALEROOK MEAN? (CHESS & GROWTH) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono text-gold-brand uppercase tracking-widest">
            Brand Philosophy
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white">
            What Does ScaleRook Mean?
          </h2>
          <p className="text-sm text-slate-300">
            A synergistic fusion of exponential scale and chess tactical mastery.
          </p>
        </div>

        <ChessConceptCard />
      </section>

      {/* 4. OUR PURPOSE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 md:p-12 rounded-3xl glass-card border border-purple-500/30 space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">
              Core Mission
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white">
              To make business building easier.
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              ScaleRook exists to help entrepreneurs and businesses access the capabilities they need without having to build every department themselves.
            </p>
          </div>

          {/* Multi-scenario Checklist */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono text-gold-brand uppercase tracking-wider">
              Whether You Are:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {scenarios.map((sc, sIdx) => (
                <div
                  key={sIdx}
                  className="p-3.5 rounded-xl bg-obsidian-card border border-purple-900/40 flex items-center gap-3 text-xs text-slate-200 hover:border-gold-brand/40 transition"
                >
                  <CheckCircle className="w-4 h-4 text-gold-brand flex-shrink-0" />
                  <span>{sc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-950/60 to-obsidian border border-purple-500/30 text-center">
            <p className="text-lg font-heading font-bold text-white italic">
              "ScaleRook can become the team behind you."
            </p>
          </div>
        </div>
      </section>

      {/* 5. SERVICES GRID OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono text-gold-brand uppercase tracking-widest">
              7 Integrated Pillars
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white mt-1">
              End-to-End Capabilities
            </h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-bold text-gold-brand hover:underline"
          >
            <span>View All Service Checklists</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicePillars.map((sp, pIdx) => {
            const Icon = sp.icon;
            return (
              <div
                key={pIdx}
                className="p-6 rounded-2xl glass-card glass-card-hover border border-purple-500/20 space-y-4 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-gold-brand">{sp.num}</span>
                    <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:text-gold-brand group-hover:border-gold-brand transition">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div>
                    <span className="text-[11px] font-mono text-purple-400 uppercase tracking-wider block">{sp.tagline}</span>
                    <h3 className="text-xl font-heading font-bold text-white mt-0.5">{sp.title}</h3>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {sp.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <Link
                    to={sp.link}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-300 group-hover:text-gold-brand transition"
                  >
                    <span>Explore Capability</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. OUR 6-STEP EXECUTION APPROACH */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono text-gold-brand uppercase tracking-widest">
            Methodology
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white">
            Our 6-Step Execution Approach
          </h2>
          <p className="text-sm text-slate-300">
            A battle-tested horizontal sequence to transition from idea to scalable enterprise.
          </p>
        </div>

        <StepExecution />
      </section>

      {/* 7. WHY CLIENTS CHOOSE SCALEROOK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">
            The ScaleRook Advantage
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white">
            Why Clients Choose ScaleRook
          </h2>
          <p className="text-sm text-slate-300">
            6 core pillars engineered specifically for modern founders and ambitious business leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clientPillars.map((cp, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl glass-card border border-purple-500/20 space-y-3 hover:border-gold-brand/40 transition"
            >
              <div className="w-8 h-8 rounded-lg bg-gold-brand/10 border border-gold-brand/30 flex items-center justify-center text-gold-brand font-mono text-xs font-bold">
                0{idx + 1}
              </div>
              <h3 className="text-lg font-heading font-bold text-white">{cp.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{cp.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. THE SCALEROOK PROMISE & CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 md:p-14 rounded-3xl gradient-border space-y-8 text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-4 relative z-10">
            <span className="text-xs font-mono text-gold-brand uppercase tracking-widest">
              The ScaleRook Promise
            </span>
            <h2 className="text-2xl md:text-4xl font-heading font-extrabold text-white leading-tight">
              "We don't want to be another vendor you have to manage. We want to become the team behind your business."
            </h2>
            <p className="text-sm md:text-base text-slate-200 leading-relaxed font-normal">
              Whether you need a website today, marketing tomorrow, sales support next month or an entire remote team six months from now, ScaleRook is built to grow with you.
            </p>
            <div className="p-4 rounded-xl bg-obsidian/80 border border-gold-brand/30 text-gold-brand font-heading font-bold text-sm md:text-base">
              One business. One strategic partner. Multiple capabilities. One goal — scalable growth.
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <button
              onClick={onOpenStrategyModal}
              className="px-8 py-4 rounded-2xl btn-gold-glow text-obsidian font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-gold-glow"
            >
              <span>Book Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              to="/contact"
              className="px-8 py-4 rounded-2xl bg-obsidian-card border border-purple-500/40 text-white font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:border-gold-brand transition"
            >
              <span>Contact Execution Team</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
