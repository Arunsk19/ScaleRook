import React, { useState } from 'react';
import { X, CheckCircle, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';

export default function StrategyCallModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    serviceNeed: 'ScaleRooks Build',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-all">
      <div className="relative w-full max-w-lg p-6 md:p-8 rounded-2xl glass-card border border-purple-500/30 shadow-2xl overflow-hidden">
        {/* Glowing aura inside modal */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-gold-brand/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-brand/20 rounded-full blur-3xl pointer-events-none"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-lg bg-obsidian-card hover:bg-slate-800 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-gold-brand text-xs font-mono tracking-wider uppercase mb-2">
              <Calendar className="w-4 h-4 text-gold-brand" />
              <span>Priority Consultation</span>
            </div>
            <h3 className="text-2xl font-heading font-extrabold text-white mb-2">
              Book Your Strategic Call
            </h3>
            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              Connect directly with a ScaleRooks execution strategist to align on your growth goals, digital foundation, or remote team needs.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-obsidian-card border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-gold-brand transition"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Work Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-obsidian-card border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-gold-brand transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Company Name</label>
                  <input
                    type="text"
                    placeholder="ScaleRooks Ltd"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-obsidian-card border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-gold-brand transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Primary Objective</label>
                <select
                  value={formData.serviceNeed}
                  onChange={(e) => setFormData({ ...formData, serviceNeed: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-obsidian-card border border-slate-700/80 text-white focus:outline-none focus:border-gold-brand transition"
                >
                  <option value="ScaleRooks Build">ScaleRooks Build (Websites & Foundation)</option>
                  <option value="ScaleRooks Creative">ScaleRooks Creative (Brand & Media)</option>
                  <option value="ScaleRooks Grow">ScaleRooks Grow (Digital Marketing & Traffic)</option>
                  <option value="ScaleRooks Sell">ScaleRooks Sell (Sales & Outbound Pipeline)</option>
                  <option value="ScaleRooks Talent">ScaleRooks Talent (Remote Staffing & Teams)</option>
                  <option value="ScaleRooks Operate">ScaleRooks Operate (Operations & Virtual Assistance)</option>
                  <option value="ScaleRooks Scale">ScaleRooks Scale (Market & Systems Expansion)</option>
                  <option value="Complete Business Partner">Complete Business Partner Retainer</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Brief Goals or Questions</label>
                <textarea
                  rows="3"
                  placeholder="Tell us about your timeline, team size, or growth targets..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-obsidian-card border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-gold-brand transition"
                ></textarea>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-slate-400 pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Strict non-disclosure. Response guaranteed within 24 hours.</span>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 mt-2 rounded-xl btn-gold-glow text-obsidian font-bold text-sm flex items-center justify-center gap-2 tracking-wide uppercase shadow-gold-glow"
              >
                <span>Confirm Strategy Session</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-heading font-bold text-white">Strategy Request Reserved</h4>
            <p className="text-sm text-slate-300 max-w-xs mx-auto">
              Thank you, <span className="text-gold-brand font-semibold">{formData.name}</span>. An execution strategist from ARM Digital Services will reach out within 24 hours.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
