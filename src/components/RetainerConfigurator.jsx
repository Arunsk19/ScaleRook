import React, { useState } from 'react';
import { Check, ShieldCheck, Sparkles, ArrowRight, Layers, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RetainerConfigurator({ onOpenModal }) {
  const [selectedStage, setSelectedStage] = useState('Early Startup');
  const [selectedPillars, setSelectedPillars] = useState([
    'ScaleRook Build',
    'ScaleRook Grow',
    'ScaleRook Sell'
  ]);
  const [teamBandwidth, setTeamBandwidth] = useState('Dedicated Specialist');

  const pillars = [
    { id: 'ScaleRook Build', name: '01 Build', tag: 'Websites & Apps', priceWeight: 1 },
    { id: 'ScaleRook Creative', name: '02 Creative', tag: 'Branding & Video', priceWeight: 1 },
    { id: 'ScaleRook Grow', name: '03 Grow', tag: 'Marketing & Ads', priceWeight: 1.2 },
    { id: 'ScaleRook Sell', name: '04 Sell', tag: 'SDR Outbound', priceWeight: 1.5 },
    { id: 'ScaleRook Talent', name: '05 Talent', tag: 'Remote Staffing', priceWeight: 1.3 },
    { id: 'ScaleRook Operate', name: '06 Operate', tag: 'Virtual Assistance', priceWeight: 1 },
    { id: 'ScaleRook Scale', name: '07 Scale', tag: 'Market Expansion', priceWeight: 1.4 },
  ];

  const stages = [
    'Entrepreneur Idea',
    'Early Startup',
    'SME Growth',
    'Established Enterprise'
  ];

  const togglePillar = (id) => {
    if (selectedPillars.includes(id)) {
      if (selectedPillars.length > 1) {
        setSelectedPillars(selectedPillars.filter(p => p !== id));
      }
    } else {
      setSelectedPillars([...selectedPillars, id]);
    }
  };

  // Estimate engagement scope score
  const scopeScore = selectedPillars.length;
  const engagementTier =
    scopeScore === 1
      ? 'Single Pillar Project'
      : scopeScore <= 3
      ? 'Modular Growth Retainer'
      : scopeScore <= 5
      ? 'Multi-Department Business Accelerator'
      : 'Full ScaleRook Complete Business Partner';

  return (
    <div className="p-6 md:p-10 rounded-3xl glass-card border border-purple-500/30 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-purple-900/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-brand/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 space-y-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-brand/10 border border-gold-brand/30 text-gold-brand text-xs font-mono tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Retainer Configurator</span>
          </div>
          <h3 className="text-2xl md:text-4xl font-heading font-extrabold text-white">
            Custom Retainer & Scope Builder
          </h3>
          <p className="text-sm text-slate-300">
            Combine multiple execution pillars into a single unified business partner agreement. No agency sprawl.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Left Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Select Stage */}
            <div>
              <label className="block text-xs font-mono text-gold-brand uppercase tracking-wider mb-2">
                1. Select Your Current Business Stage
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {stages.map((stage, sIdx) => (
                  <button
                    key={sIdx}
                    onClick={() => setSelectedStage(stage)}
                    className={`py-2.5 px-4 rounded-xl text-xs font-semibold border text-left transition-all ${
                      selectedStage === stage
                        ? 'bg-purple-brand/30 border-gold-brand text-white shadow-purple-glow'
                        : 'bg-obsidian-card border-slate-800 text-slate-300 hover:border-slate-600'
                    }`}
                  >
                    {stage}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Select Capability Pillars */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs font-mono text-gold-brand uppercase tracking-wider">
                  2. Select Capabilities Required ({selectedPillars.length} Selected)
                </label>
                <span className="text-[11px] text-slate-400">Click to toggle</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {pillars.map((pillar) => {
                  const isChecked = selectedPillars.includes(pillar.id);
                  return (
                    <button
                      key={pillar.id}
                      onClick={() => togglePillar(pillar.id)}
                      className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                        isChecked
                          ? 'bg-gradient-to-r from-purple-950/80 to-slate-900 border-gold-brand text-white shadow-sm'
                          : 'bg-obsidian-card border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <div>
                        <div className="text-xs font-heading font-bold">{pillar.name}</div>
                        <div className="text-[10px] text-slate-400">{pillar.tag}</div>
                      </div>
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${
                        isChecked ? 'bg-gold-brand border-gold-brand text-obsidian' : 'border-slate-700'
                      }`}>
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Team Bandwidth */}
            <div>
              <label className="block text-xs font-mono text-gold-brand uppercase tracking-wider mb-2">
                3. Resource Allocation Preference
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['Shared Resource', 'Dedicated Specialist', 'Full Dedicated Team'].map((bw, bwIdx) => (
                  <button
                    key={bwIdx}
                    onClick={() => setTeamBandwidth(bw)}
                    className={`py-2 px-3 rounded-lg text-[11px] font-semibold border text-center transition-all ${
                      teamBandwidth === bw
                        ? 'bg-gold-brand/20 border-gold-brand text-gold-brand'
                        : 'bg-obsidian-card border-slate-800 text-slate-400'
                    }`}
                  >
                    {bw}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Result Output Right Column */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-obsidian-card/90 border border-purple-500/30 space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block">Recommended Model</span>
              <h4 className="text-xl font-heading font-bold text-white mt-1">
                {engagementTier}
              </h4>
              <p className="text-xs text-slate-300 mt-1">
                Tailored for <strong className="text-gold-brand">{selectedStage}</strong> stage execution.
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Included Pillar Suite:</span>
              <ul className="space-y-2">
                {selectedPillars.map((pId, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                    <Zap className="w-3.5 h-3.5 text-gold-brand flex-shrink-0" />
                    <span>{pId}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-800/40 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-gold-brand">
                <Users className="w-4 h-4" />
                <span>Unified Team Allocation</span>
              </div>
              <p className="text-xs text-slate-300 leading-normal">
                1 Account Director + {selectedPillars.length} Specialized Execution Leads ({teamBandwidth} level).
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenModal}
                className="w-full py-3.5 px-4 rounded-xl btn-gold-glow text-obsidian font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-gold-glow"
              >
                <span>Request Custom Retainer Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
