import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ShieldCheck, Mail, Clock, Calendar, ArrowRight, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [stage, setStage] = useState('Early Startup');
  const [selectedRequirements, setSelectedRequirements] = useState([
    'Build (Website/Dev)',
    'Grow (Marketing/SEO)',
    'Sell (Sales Pipeline)'
  ]);

  const requirementsOptions = [
    'Build (Website/Dev)',
    'Creative (Brand/Media)',
    'Grow (Marketing/SEO)',
    'Sell (Sales Pipeline)',
    'Talent (Remote Staffing)',
    'Operate (Operations/VA)',
    'Scale (Expansion)',
    'Complete Business Partner'
  ];

  const toggleReq = (req) => {
    if (selectedRequirements.includes(req)) {
      if (selectedRequirements.length > 1) {
        setSelectedRequirements(selectedRequirements.filter(r => r !== req));
      }
    } else {
      setSelectedRequirements([...selectedRequirements, req]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-20 space-y-16">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/80 border border-gold-brand/40 shadow-purple-glow">
          <Sparkles className="w-3.5 h-3.5 text-gold-brand" />
          <span className="text-xs font-mono tracking-widest text-gold-brand uppercase font-semibold">
            STRATEGY CONSULTATION & DISCOVERY
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white">
          Contact & Discovery Session
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Request a tailored strategic execution plan for your business. We review every submission and guarantee a response within 24 hours.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Form Left / Center Column (Netlify Form Integrated) */}
          <div className="lg:col-span-7 p-8 md:p-10 rounded-3xl glass-card border border-purple-500/30 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-purple-900/10 rounded-full blur-3xl pointer-events-none"></div>

            {!submitted ? (
              <form
                name="contact-discovery"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
                className="space-y-6 relative z-10"
              >
                {/* Netlify Hidden Form Field */}
                <input type="hidden" name="form-name" value="contact-discovery" />

                <div className="border-b border-slate-800 pb-4">
                  <h3 className="text-2xl font-heading font-bold text-white">Discovery Questionnaire</h3>
                  <p className="text-xs text-slate-400 mt-1">Fill out the key details below so our strategists can prepare an actionable proposal.</p>
                </div>

                {/* Field 1: Name & Work Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-3 rounded-xl bg-obsidian-card border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-gold-brand transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Work Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-obsidian-card border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-gold-brand transition"
                    />
                  </div>
                </div>

                {/* Field 2: Company Name & Current Website */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Company Name *</label>
                    <input
                      type="text"
                      name="company"
                      required
                      placeholder="Acme Ventures"
                      className="w-full px-4 py-3 rounded-xl bg-obsidian-card border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-gold-brand transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Current Website (if applicable)</label>
                    <input
                      type="url"
                      name="website"
                      placeholder="https://company.com"
                      className="w-full px-4 py-3 rounded-xl bg-obsidian-card border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-gold-brand transition"
                    />
                  </div>
                </div>

                {/* Field 3: Business Stage Selector */}
                <div>
                  <label className="block text-xs font-mono text-gold-brand uppercase tracking-wider mb-2">
                    Field 3: Select Your Business Stage *
                  </label>
                  <select
                    name="stage"
                    value={stage}
                    onChange={(e) => setStage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-obsidian-card border border-slate-700 text-white focus:outline-none focus:border-gold-brand transition"
                  >
                    <option value="Entrepreneur with Idea">Entrepreneur with Idea</option>
                    <option value="Early Startup">Early Startup</option>
                    <option value="SME">SME (Small & Medium Business)</option>
                    <option value="Established Enterprise">Established Enterprise</option>
                    <option value="Entering New Market">Entering New Market</option>
                  </select>
                </div>

                {/* Field 4: Primary Requirements Multi-select */}
                <div>
                  <label className="block text-xs font-mono text-gold-brand uppercase tracking-wider mb-2">
                    Field 4: Primary Requirements (Check all that apply)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {requirementsOptions.map((opt, idx) => {
                      const checked = selectedRequirements.includes(opt);
                      return (
                        <button
                          type="button"
                          key={idx}
                          onClick={() => toggleReq(opt)}
                          className={`p-3 rounded-xl border text-xs font-semibold text-left flex items-center justify-between transition-all ${
                            checked
                              ? 'bg-purple-950/80 border-gold-brand text-white shadow-sm'
                              : 'bg-obsidian-card border-slate-800 text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          <span>{opt}</span>
                          <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                            checked ? 'bg-gold-brand border-gold-brand text-obsidian' : 'border-slate-700'
                          }`}>
                            {checked && <CheckCircle2 className="w-3.5 h-3.5" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                  <input type="hidden" name="requirements" value={selectedRequirements.join(', ')} />
                </div>

                {/* Field 5: Project Details & Goals */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Field 5: Project Details & Specific Goals *
                  </label>
                  <textarea
                    name="projectDetails"
                    required
                    rows="4"
                    placeholder="Describe your vision, launch timeline, revenue targets, or specific department needs..."
                    className="w-full px-4 py-3 rounded-xl bg-obsidian-card border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-gold-brand transition"
                  ></textarea>
                </div>

                <div className="p-3.5 rounded-xl bg-purple-950/40 border border-purple-800/40 flex items-center gap-3 text-xs text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Confidentiality assured. Response guaranteed in less than 24 hours.</span>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl btn-gold-glow text-obsidian font-extrabold text-xs uppercase tracking-wider shadow-gold-glow flex items-center justify-center gap-2"
                >
                  <span>Request Strategic Execution Plan</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="py-16 text-center space-y-6">
                <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="text-3xl font-heading font-bold text-white">Execution Plan Requested</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you! Your discovery request has been assigned to an execution director at ScaleRook (ARM Digital Services). We will contact you within 24 hours.
                </p>
              </div>
            )}
          </div>

          {/* Direct Channels Right Column */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 md:p-8 rounded-3xl glass-card border border-gold-brand/30 space-y-6 bg-purple-950/20">
              <div className="border-b border-slate-800 pb-4">
                <span className="text-xs font-mono text-gold-brand uppercase tracking-widest block">Direct Reach</span>
                <h3 className="text-xl font-heading font-bold text-white mt-1">Direct Channels & Guarantee</h3>
              </div>

              <div className="space-y-4 text-xs">
                
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-obsidian-card border border-purple-500/20">
                  <Clock className="w-5 h-5 text-gold-brand flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Response SLA Guarantee</strong>
                    <span className="text-slate-400">Guaranteed response in under 24 hours, Monday through Saturday.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-obsidian-card border border-purple-500/20">
                  <Mail className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Direct Email Contact</strong>
                    <span className="text-gold-brand font-mono">strategy@scalerook.com</span>
                    <span className="text-slate-400 block text-[11px]">CC: contact@armdigitalservices.com</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-obsidian-card border border-purple-500/20">
                  <Calendar className="w-5 h-5 text-gold-brand flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Operating Hours</strong>
                    <span className="text-slate-400">09:00 AM – 07:00 PM EST (Global Operations)</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Corporate Attribution Card */}
            <div className="p-6 rounded-2xl bg-obsidian-card border border-purple-500/20 text-center space-y-2">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">Parent Organization</span>
              <h4 className="text-base font-heading font-bold text-white">ScaleRook — A brand of ARM Digital Services</h4>
              <p className="text-xs text-slate-400">Strategic Moves. Scalable Growth. Build. Grow. Sell. Operate. Scale.</p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
