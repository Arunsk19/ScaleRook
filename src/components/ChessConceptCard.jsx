import React from 'react';
import { TrendingUp, ShieldAlert, Crown, Target, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ChessConceptCard() {
  return (
    <div className="space-y-8">
      {/* Dual Synergy Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* SCALE Card (Purple Theme) */}
        <div className="p-8 rounded-3xl glass-card border border-purple-500/40 relative overflow-hidden group hover:border-purple-400 transition-all duration-300 shadow-purple-glow">
          <div className="absolute top-0 right-0 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl group-hover:scale-125 transition-all"></div>
          
          <div className="relative z-10 space-y-5">
            <div className="w-14 h-14 rounded-2xl bg-purple-900/60 border border-purple-500/40 flex items-center justify-center text-purple-300">
              <TrendingUp className="w-8 h-8 text-purple-brand" />
            </div>

            <div>
              <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">Dimension 01</span>
              <h3 className="text-3xl font-heading font-extrabold text-white mt-1 text-gradient-purple">
                SCALE
              </h3>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed font-medium">
              The continuous expansion of reach, volume, and financial capacity. Scale represents unlocking exponential growth potential without operational breakdown.
            </p>

            <div className="pt-4 border-t border-purple-900/40">
              <span className="text-xs font-mono text-purple-400 uppercase tracking-wider block mb-3">Core Pillars of Scale</span>
              <div className="flex flex-wrap gap-2">
                {['Growth', 'Expansion', 'Revenue', 'Reach', 'Progress'].map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-purple-950/80 border border-purple-500/30 text-purple-200 text-xs font-semibold"
                  >
                    • {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ROOK Card (Gold Theme) */}
        <div className="p-8 rounded-3xl glass-card border border-gold-brand/40 relative overflow-hidden group hover:border-gold-brand transition-all duration-300 shadow-gold-glow">
          <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/15 rounded-full blur-3xl group-hover:scale-125 transition-all"></div>

          <div className="relative z-10 space-y-5">
            <div className="w-14 h-14 rounded-2xl bg-amber-950/60 border border-gold-brand/40 flex items-center justify-center text-gold-brand">
              <Crown className="w-8 h-8 text-gold-brand" />
            </div>

            <div>
              <span className="text-xs font-mono text-gold-brand uppercase tracking-widest">Dimension 02</span>
              <h3 className="text-3xl font-heading font-extrabold text-white mt-1 text-gradient-gold">
                ROOK
              </h3>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed font-medium">
              The cornerstone piece in chess representing unwavering power, defense, and long-range tactical strike ability across open ranks and files.
            </p>

            <div className="pt-4 border-t border-amber-900/40">
              <span className="text-xs font-mono text-gold-brand uppercase tracking-wider block mb-3">Core Pillars of Rook</span>
              <div className="flex flex-wrap gap-2">
                {['Strategy', 'Positioning', 'Strength', 'Precision', 'Calculated Moves'].map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-amber-950/80 border border-gold-brand/30 text-gold-brand text-xs font-semibold"
                  >
                    • {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Unified Verdict Banner */}
      <div className="p-6 md:p-8 rounded-2xl gradient-border text-center space-y-3 relative overflow-hidden">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-gold-brand/40 text-gold-brand text-xs font-mono tracking-widest uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The Chess & Growth Synergy</span>
        </div>
        <p className="text-lg md:text-xl font-heading font-extrabold text-white max-w-3xl mx-auto leading-relaxed">
          "SCALEROOKS represents making strategic moves that create scalable growth. Every business needs the right move at the right time."
        </p>
      </div>
    </div>
  );
}
