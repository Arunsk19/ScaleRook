import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck, Mail, Clock, Calendar } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    setSubmitError('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      fullName: String(formData.get('fullName') || ''),
      email: String(formData.get('email') || ''),
      contactNumber: String(formData.get('contactNumber') || ''),
      company: String(formData.get('company') || ''),
      website: String(formData.get('website') || ''),
      stage: String(formData.get('stage') || ''),
      requirements: String(formData.get('requirements') || ''),
      projectDetails: String(formData.get('projectDetails') || ''),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => ({}));

      if (response.status === 200 && result.success) {
        form.reset();
        setStage('Early Startup');
        setSelectedRequirements([
          'Build (Website/Dev)',
          'Grow (Marketing/SEO)',
          'Sell (Sales Pipeline)'
        ]);
        setSubmitted(true);
        return;
      }

      if (response.status === 400) {
        setSubmitError(result.error || 'Please check the form and try again.');
        return;
      }

      setSubmitError("We couldn't send your request right now. Please try again in a moment.");

    } catch {
      setSubmitError("We couldn't send your request right now. Please try again in a moment.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-transparent pb-20 pt-28 text-[#F4F0E8]">
      <section className="ref-shell text-center space-y-6">
        <div className="ref-eyebrow justify-center">Discovery session</div>
        <h1 className="hero-headline text-[#F4F0E8] max-w-4xl mx-auto">Start a Conversation</h1>
        <p className="mx-auto max-w-2xl text-lg md:text-[21px] text-[#E2DDD4] font-medium leading-[1.65]">
          Request a tailored strategic execution plan for your business. We review every submission and guarantee a response within 24 hours.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Form Left / Center Column */}
          <div className="lg:col-span-7 p-8 md:p-10 editorial-card bg-[#08070A]">
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="border-b border-[rgba(215,166,42,0.2)] pb-4">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#F4F0E8]">Discovery Questionnaire</h3>
                  <p className="text-[15px] md:text-[16px] text-[#E2DDD4] mt-1.5 font-medium leading-relaxed">Fill out the key details below so our strategists can prepare an actionable proposal.</p>
                </div>

                {/* Field 1: Name & Work Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="full-name" className="block text-[12px] font-mono text-[#D7A62A] uppercase font-bold tracking-wider mb-1.5">Full Name *</label>
                    <input
                      id="full-name"
                      type="text"
                      name="fullName"
                      required
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-3 bg-[#050505] border border-[rgba(215,166,42,0.3)] text-[#F4F0E8] placeholder-[#B8B3AE]/50 focus:outline-none focus:border-[#E5B93F] text-[15px]"
                    />
                  </div>
                  <div>
                    <label htmlFor="work-email" className="block text-[12px] font-mono text-[#D7A62A] uppercase font-bold tracking-wider mb-1.5">Work Email *</label>
                    <input
                      id="work-email"
                      type="email"
                      name="email"
                      required
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 bg-[#050505] border border-[rgba(215,166,42,0.3)] text-[#F4F0E8] placeholder-[#B8B3AE]/50 focus:outline-none focus:border-[#E5B93F] text-[15px]"
                    />
                  </div>
                </div>

                {/* Field 2: Contact Number & Company Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-number" className="block text-xs font-mono text-[#D7A62A] uppercase mb-1">Contact Number *</label>
                    <input
                      id="contact-number"
                      type="tel"
                      name="contactNumber"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 bg-[#050505] border border-[rgba(215,166,42,0.3)] text-[#F4F0E8] placeholder-[#B8B3AE]/50 focus:outline-none focus:border-[#E5B93F]"
                    />
                  </div>
                  <div>
                    <label htmlFor="company-name" className="block text-xs font-mono text-[#D7A62A] uppercase mb-1">Company Name *</label>
                    <input
                      id="company-name"
                      type="text"
                      name="company"
                      required
                      placeholder="Acme Ventures"
                      className="w-full px-4 py-3 bg-[#050505] border border-[rgba(215,166,42,0.3)] text-[#F4F0E8] placeholder-[#B8B3AE]/50 focus:outline-none focus:border-[#E5B93F]"
                    />
                  </div>
                </div>

                {/* Field 3: Current Website */}
                <div>
                  <label htmlFor="current-website" className="block text-xs font-mono text-[#D7A62A] uppercase mb-1">Current Website (if any)</label>
                  <input
                    id="current-website"
                    type="url"
                    name="website"
                    placeholder="https://company.com"
                    className="w-full px-4 py-3 bg-[#050505] border border-[rgba(215,166,42,0.3)] text-[#F4F0E8] placeholder-[#B8B3AE]/50 focus:outline-none focus:border-[#E5B93F]"
                  />
                </div>

                {/* Field 3: Business Stage Selector */}
                <div>
                  <label htmlFor="business-stage" className="block text-[12px] md:text-[13px] font-mono font-bold text-[#D7A62A] uppercase tracking-[0.14em] mb-2">
                    Select Your Business Stage *
                  </label>
                  <select
                    id="business-stage"
                    name="stage"
                    value={stage}
                    onChange={(e) => setStage(e.target.value)}
                    className="w-full px-4 py-3.5 bg-[#050505] border border-[rgba(215,166,42,0.3)] text-[#F4F0E8] focus:outline-none focus:border-[#E5B93F] text-[15px]"
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
                  <label className="block text-[12px] md:text-[13px] font-mono font-bold text-[#D7A62A] uppercase tracking-[0.14em] mb-2">
                    Primary Requirements (Check all that apply)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {requirementsOptions.map((opt, idx) => {
                      const checked = selectedRequirements.includes(opt);
                      return (
                        <button
                          type="button"
                          key={idx}
                          onClick={() => toggleReq(opt)}
                          className={`p-3.5 border text-[13px] md:text-[14px] font-mono text-left flex items-center justify-between transition-all ${
                            checked
                              ? 'bg-[#7B00FF]/20 border-[#E5B93F] text-[#F4F0E8]'
                              : 'bg-[#050505] border-[rgba(215,166,42,0.2)] text-[#B8B3AE] hover:text-[#F4F0E8]'
                          }`}
                        >
                          <span className="font-semibold">{opt}</span>
                          <div className={`w-4 h-4 flex items-center justify-center border ${
                            checked ? 'bg-[#D7A62A] border-[#D7A62A] text-[#050505]' : 'border-[#B8B3AE]/40'
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
                  <label htmlFor="project-details" className="block text-[12px] md:text-[13px] font-mono font-bold text-[#D7A62A] uppercase tracking-[0.14em] mb-1.5">
                    Project Details & Specific Goals *
                  </label>
                  <textarea
                    id="project-details"
                    name="projectDetails"
                    required
                    rows="4"
                    placeholder="Describe your vision, launch timeline, revenue targets, or specific department needs..."
                    className="w-full px-4 py-3 bg-[#050505] border border-[rgba(215,166,42,0.3)] text-[#F4F0E8] placeholder-[#B8B3AE]/50 focus:outline-none focus:border-[#E5B93F] text-[15px]"
                  ></textarea>
                </div>

                <div className="p-3.5 bg-[#050505] border border-[rgba(215,166,42,0.25)] flex items-center gap-3 text-xs md:text-sm text-[#B8B3AE]">
                  <ShieldCheck className="w-4 h-4 text-[#7B00FF] flex-shrink-0" />
                  <span>Confidentiality assured. Response guaranteed in less than 24 hours.</span>
                </div>

                {submitError && (
                  <div
                    role="alert"
                    aria-live="assertive"
                    className="p-3.5 bg-red-950/30 border border-red-400/40 text-red-200 text-sm"
                  >
                    {submitError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  aria-busy={submitting}
                  className="btn-gold-rect w-full py-4 text-[14px] md:text-[15px] font-extrabold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <span>{submitting ? 'Sending Request...' : 'Request Strategic Execution Plan'}</span>
                  {!submitting && <span>→</span>}
                </button>
              </form>
            ) : (
              <div className="py-16 text-center space-y-6" role="status" aria-live="polite">
                <div className="w-16 h-16 bg-[#7B00FF]/20 text-[#E5B93F] border border-[#D7A62A] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#F4F0E8]">Execution Plan Requested</h3>
                <p className="text-base text-[#B8B3AE] max-w-md mx-auto leading-relaxed">
                  Thank you! Your discovery request has been assigned to an execution director at ScaleRooks (ARM Digital Services). We will contact you within 24 hours.
                </p>
              </div>
            )}
          </div>

          {/* Direct Channels Right Column */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="editorial-card p-6 md:p-8 space-y-6 bg-[#08070A]">
              <div className="border-b border-[rgba(215,166,42,0.2)] pb-4">
                <span className="text-[12px] font-mono font-bold text-[#D7A62A] uppercase tracking-[0.16em] block">DIRECT CHANNELS</span>
                <h3 className="text-2xl md:text-[26px] font-serif font-bold text-[#F4F0E8] mt-1">Contact & SLA Guarantee</h3>
              </div>

              <div className="space-y-4 text-xs md:text-sm">
                
                <div className="flex items-start gap-3.5 p-4 bg-[#050505] border border-[rgba(215,166,42,0.2)]">
                  <Clock className="w-5 h-5 text-[#E5B93F] flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <strong className="text-[#F4F0E8] block text-[15px] font-semibold">Response SLA Guarantee</strong>
                    <span className="text-[#B8B3AE] block leading-relaxed">Guaranteed response in under 24 hours, Monday through Saturday.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 bg-[#050505] border border-[rgba(215,166,42,0.2)]">
                  <Mail className="w-5 h-5 text-[#7B00FF] flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <strong className="text-[#F4F0E8] block text-[15px] font-semibold">Direct Email Contact</strong>
                    <span className="text-[#E5B93F] font-mono text-[14px] font-semibold block">yokeshmanivannan2000@gmail.com</span>
                    <span className="text-[#B8B3AE] block text-xs">Website: SCALEROOKS.COM</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 bg-[#050505] border border-[rgba(215,166,42,0.2)]">
                  <Calendar className="w-5 h-5 text-[#E5B93F] flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <strong className="text-[#F4F0E8] block text-[15px] font-semibold">Operating Hours</strong>
                    <span className="text-[#B8B3AE] block leading-relaxed">09:00 AM – 07:00 PM EST (Global Operations)</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Corporate Attribution Card */}
            <div className="editorial-card p-7 text-center space-y-3 bg-[#08070A]">
              <span className="text-[11px] font-mono text-[#B8B3AE] uppercase tracking-[0.16em] block">PARENT ORGANIZATION</span>
              <h4 className="text-lg font-serif font-bold text-[#F4F0E8]">ScaleRooks — A brand of ARM Digital Services</h4>
              <p className="text-xs md:text-sm text-[#B8B3AE] leading-relaxed">Strategic Moves. Scalable Growth. Build. Grow. Sell. Operate. Scale.</p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
