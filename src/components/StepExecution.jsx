import React, { useState } from 'react';
import { Search, Map, Cpu, Rocket, TrendingUp, Layers, CheckCircle2 } from 'lucide-react';

export default function StepExecution() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'UNDERSTAND',
      subtitle: 'Deep Business Alignment',
      icon: Search,
      desc: 'We understand your business, goals, market, customers and challenges.',
      details: [
        'Founder vision & business objective audit',
        'Target customer demographic & persona analysis',
        'Competitive positioning & market landscape study',
        'Operational bottleneck & growth hurdle diagnosis'
      ],
      color: 'from-purple-600 to-indigo-600'
    },
    {
      num: '02',
      title: 'PLAN',
      subtitle: 'Strategic Execution Roadmap',
      icon: Map,
      desc: 'We identify what needs to be built and create an execution roadmap.',
      details: [
        'Milestone-driven execution timeline',
        'Resource & bandwidth allocation plan',
        'Technology & digital infrastructure stack selection',
        'Sales pipeline & marketing funnel blueprints'
      ],
      color: 'from-indigo-600 to-purple-700'
    },
    {
      num: '03',
      title: 'BUILD',
      subtitle: 'Foundational Infrastructure',
      icon: Cpu,
      desc: 'We create the required digital, creative and operational foundation.',
      details: [
        'High-converting website & digital assets',
        'Brand identity, typography, & media collateral',
        'CRM, analytics, and operational tracking setup',
        'Outbound sales & lead management workflows'
      ],
      color: 'from-purple-700 to-amber-600'
    },
    {
      num: '04',
      title: 'LAUNCH',
      subtitle: 'Market Entry & Deployment',
      icon: Rocket,
      desc: 'We take your brand, product or service to the market.',
      details: [
        'Public go-to-market rollout & launch campaign',
        'Omnichannel ad, SEO & content activation',
        'Cold prospecting & SDR outreach initiation',
        'Real-time traffic & lead monitoring'
      ],
      color: 'from-amber-600 to-yellow-500'
    },
    {
      num: '05',
      title: 'GROW',
      subtitle: 'Customer Acquisition Engine',
      icon: TrendingUp,
      desc: 'We generate visibility, enquiries, leads and sales opportunities.',
      details: [
        'Paid ad performance & conversion optimization',
        'Predictable B2B lead & SDR appointment setting',
        'Retargeting & nurturing sequence execution',
        'Data-driven campaign scaling'
      ],
      color: 'from-yellow-500 to-amber-500'
    },
    {
      num: '06',
      title: 'SCALE',
      subtitle: 'Capacity & Expansion',
      icon: Layers,
      desc: 'We add people, systems, marketing and sales capacity as your business grows.',
      details: [
        'Dedicated remote team staffing & resource scaling',
        'Automated operational workflows & back-office support',
        'New market & product line expansion',
        'Long-term strategic business partnership'
      ],
      color: 'from-amber-500 to-gold-brand'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Timeline Steps Selector Header */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isSelected = activeStep === idx;
          return (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-xl text-left transition-all duration-300 relative overflow-hidden group ${
                isSelected
                  ? 'glass-card border-gold-brand shadow-gold-glow bg-obsidian-card'
                  : 'glass-card border-purple-900/30 hover:border-purple-500/50 opacity-75 hover:opacity-100'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`font-mono text-xs font-bold ${isSelected ? 'text-gold-brand' : 'text-purple-400'}`}>
                  {step.num}
                </span>
                <Icon className={`w-4 h-4 ${isSelected ? 'text-gold-brand' : 'text-slate-400 group-hover:text-purple-300'}`} />
              </div>
              <h4 className="font-heading font-bold text-sm text-white tracking-wider">
                {step.title}
              </h4>
              <div className={`h-1 w-full mt-3 rounded-full transition-all ${
                isSelected ? 'bg-gradient-to-r from-purple-brand to-gold-brand' : 'bg-slate-800'
              }`} />
            </button>
          );
        })}
      </div>

      {/* Selected Step Expanded Detail Showcase */}
      <div className="p-6 md:p-8 rounded-2xl glass-card border border-purple-500/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-900/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-gold-brand font-mono text-xs">
              <span>STEP {steps[activeStep].num} OF 06</span>
              <span>•</span>
              <span className="text-white">{steps[activeStep].subtitle}</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-white">
              {steps[activeStep].title}
            </h3>

            <p className="text-base text-slate-200 leading-relaxed font-medium">
              "{steps[activeStep].desc}"
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {steps[activeStep].details.map((detail, dIdx) => (
                <div key={dIdx} className="flex items-start gap-2.5 p-3 rounded-lg bg-obsidian/80 border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-gold-brand flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300 leading-snug">{detail}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-xl bg-obsidian-card/80 border border-purple-500/20 text-center space-y-4">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-brand/30 to-gold-brand/30 flex items-center justify-center border border-gold-brand/40 shadow-purple-glow">
              {React.createElement(steps[activeStep].icon, { className: 'w-10 h-10 text-gold-brand' })}
            </div>
            <div>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block">Phase Objective</span>
              <h5 className="text-lg font-heading font-bold text-white mt-1">
                Seamless {steps[activeStep].title} Execution
              </h5>
            </div>
            <div className="w-full pt-2">
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1">
                <span>Progress Milestone</span>
                <span className="text-gold-brand font-bold">{Math.round(((activeStep + 1) / 6) * 100)}%</span>
              </div>
              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-brand to-gold-brand transition-all duration-500"
                  style={{ width: `${((activeStep + 1) / 6) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
