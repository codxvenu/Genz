import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Check, Sparkles, CheckSquare, Square, Calendar } from 'lucide-react';
import { BookingDetails } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AVAILABLE_NEEDS = [
  'Branding & Visual Identity',
  'Omnichannel Marketing',
  'Staffing & Recruitment',
  'Advanced Lead Gen / Customer Acquisition',
  'Strategic Business Consulting',
  'Location & Regional Expansion'
];

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<BookingDetails>({
    fullName: '',
    email: '',
    companyName: '',
    website: '',
    stage: 'launched',
    needs: [],
    message: ''
  });
  const [errors, setErrors] = useState<Partial<Record<keyof BookingDetails, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof BookingDetails]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const toggleNeed = (need: string) => {
    setFormData(prev => {
      const needs = prev.needs.includes(need)
        ? prev.needs.filter(n => n !== need)
        : [...prev.needs, need];
      return { ...prev, needs };
    });
    setErrors(prev => ({ ...prev, needs: undefined }));
  };

  const validateStep = (currentStep: number) => {
    const newErrors: Partial<Record<keyof BookingDetails, string>> = {};

    if (currentStep === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
      if (!formData.email.trim()) {
        newErrors.email = 'Email address is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
      if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    } else if (currentStep === 2) {
      if (formData.needs.length === 0) {
        newErrors.needs = 'Please select at least one growth challenge';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(step)) return;

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1400));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const getAdvisoryMatch = () => {
    if (formData.stage === 'idea') {
      return { advisor: 'Chloe Zhang', role: 'Partner, Brand Launch Division', focus: 'early-stage concept design and initial capital positioning.' };
    }
    if (formData.stage === 'launched' && formData.needs.includes('Staffing & Recruitment')) {
      return { advisor: 'Marcus Vance', role: 'Head of Talent Systems', focus: 'high-skill engineering placements and workflow optimization.' };
    }
    if (formData.stage === 'scaling' || formData.stage === 'enterprise') {
      return { advisor: 'Sebastian Mercer', role: 'Managing Director, Scale Strategies', focus: 'advanced acquisition vectors, corporate structuring, and cross-border footprinting.' };
    }
    return { advisor: 'Sophia Sterling', role: 'Director of Growth', focus: 'integrating modern storytelling with full-funnel digital pipelines.' };
  };

  const advisorInfo = getAdvisoryMatch();

  return (
    <div id="booking-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        id="booking-modal-container"
        className="relative w-full max-w-xl overflow-hidden bg-zinc-950 border border-purple-500/15 shadow-[0_0_50px_rgba(124,58,237,0.15)] rounded-[24px] transition-all duration-300"
      >
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
        <div className="absolute -top-12 -left-12 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="p-6 sm:p-10">
          
          {/* Header */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
              <span className="font-mono text-[9px] tracking-wider uppercase text-zinc-400 font-bold">Consultation Desk</span>
            </div>
            <button 
              id="close-booking-modal-btn"
              onClick={onClose}
              className="px-4 py-1.5 text-[9px] font-mono font-bold text-zinc-400 hover:text-white border border-white/10 hover:border-white/20 bg-white/5 rounded-full transition-all cursor-pointer"
            >
              CLOSE
            </button>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Progress Steps Indicator */}
              <div className="flex items-center justify-between space-x-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="flex-1 flex items-center space-x-2">
                    <div className={`h-[2px] flex-1 rounded-full transition-all duration-300 ${step >= i ? 'bg-[#7C3AED]' : 'bg-zinc-800'}`} />
                    <span className={`text-[10px] font-mono font-bold ${step === i ? 'text-purple-400' : 'text-zinc-655'}`}>0{i}</span>
                  </div>
                ))}
              </div>

              {/* Step 1 */}
              {step === 1 && (
                <div className="space-y-5 animate-fade-in-up">
                  <div className="space-y-1.5">
                    <h3 className="font-serif text-2xl text-white font-normal tracking-tight">Tell us about yourself</h3>
                    <p className="text-xs text-zinc-400 font-light">Establish the foundation. Let us know who we are building with.</p>
                  </div>
                  
                  <div className="space-y-4 pt-2">
                    <div>
                      <label className="block text-[8px] uppercase font-mono tracking-widest text-zinc-400 font-bold mb-1.5" htmlFor="fullName">Your Full Name</label>
                      <input
                        id="fullName"
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g., Jonathan Mercer"
                        className={`w-full px-4 py-3 bg-white/5 border ${errors.fullName ? 'border-red-550/50' : 'border-white/10'} rounded-xl text-white font-sans text-xs sm:text-sm placeholder-zinc-500 focus:outline-none focus:border-purple-550/50 transition-all`}
                        required
                      />
                      {errors.fullName && <p className="text-xs text-red-400 mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-[8px] uppercase font-mono tracking-widest text-zinc-400 font-bold mb-1.5" htmlFor="email">Professional Email</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g., jonathan@scribeai.com"
                        className={`w-full px-4 py-3 bg-white/5 border ${errors.email ? 'border-red-550/50' : 'border-white/10'} rounded-xl text-white font-sans text-xs sm:text-sm placeholder-zinc-500 focus:outline-none focus:border-purple-550/50 transition-all`}
                        required
                      />
                      {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[8px] uppercase font-mono tracking-widest text-zinc-400 font-bold mb-1.5" htmlFor="companyName">Company Name</label>
                        <input
                          id="companyName"
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          placeholder="e.g., ScribeAI"
                          className={`w-full px-4 py-3 bg-white/5 border ${errors.companyName ? 'border-red-550/50' : 'border-white/10'} rounded-xl text-white font-sans text-xs sm:text-sm placeholder-zinc-500 focus:outline-none focus:border-purple-550/50 transition-all`}
                          required
                        />
                        {errors.companyName && <p className="text-xs text-red-400 mt-1">{errors.companyName}</p>}
                      </div>
                      <div>
                        <label className="block text-[8px] uppercase font-mono tracking-widest text-zinc-400 font-bold mb-1.5" htmlFor="website">Website (Optional)</label>
                        <input
                          id="website"
                          type="text"
                          name="website"
                          value={formData.website || ''}
                          onChange={handleInputChange}
                          placeholder="e.g., scribeai.com"
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-sans text-xs sm:text-sm placeholder-zinc-500 focus:outline-none focus:border-purple-555/50 transition-all"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <div className="space-y-5 animate-fade-in-up">
                  <div className="space-y-1.5">
                    <h3 className="font-serif text-2xl text-white font-normal tracking-tight">Select Scale Challenges</h3>
                    <p className="text-xs text-zinc-400 font-light">Choose all domains where your business requires immediate modernization.</p>
                  </div>

                  <div className="space-y-4 pt-2">
                    <div>
                      <span className="block text-[8px] uppercase font-mono tracking-widest text-zinc-400 font-bold mb-2">Company Stage</span>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {(['idea', 'launched', 'scaling', 'enterprise'] as const).map(stage => (
                          <button
                            key={stage}
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, stage }))}
                            className={`px-3 py-2 border rounded-xl text-[10px] font-mono capitalize transition-all ${
                              formData.stage === stage 
                                ? 'bg-[#7C3AED] text-white border-purple-500 font-bold shadow-soft' 
                                : 'bg-transparent text-zinc-450 border-white/10 hover:border-white/20'
                            }`}
                          >
                            {stage}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2.5 pt-2">
                      <span className="block text-[8px] uppercase font-mono tracking-widest text-zinc-450 font-bold">Core Service Pillars Needed</span>
                      {errors.needs && <p className="text-xs text-red-400 mt-1">{errors.needs}</p>}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[180px] overflow-y-auto pr-1">
                        {AVAILABLE_NEEDS.map(need => {
                          const isSelected = formData.needs.includes(need);
                          return (
                            <button
                              key={need}
                              type="button"
                              onClick={() => toggleNeed(need)}
                              className={`flex items-start text-left p-3 rounded-xl border transition-all text-xs font-sans ${
                                isSelected 
                                  ? 'bg-[#7C3AED]/10 border-purple-500/40 text-purple-355 font-bold' 
                                  : 'bg-black border-white/5 text-zinc-400 hover:border-white/15'
                              }`}
                            >
                              <span className="mr-2 mt-0.5 text-zinc-500">
                                {isSelected ? (
                                  <CheckSquare className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                                ) : (
                                  <Square className="w-3.5 h-3.5 text-zinc-700 shrink-0" />
                                )}
                              </span>
                              <span>{need}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <div className="space-y-5 animate-fade-in-up">
                  <div className="space-y-1.5">
                    <h3 className="font-serif text-2xl text-white font-normal tracking-tight">Tell us your vision</h3>
                    <p className="text-xs text-zinc-400 font-light">Briefly state your current growth constraints, timing, or strategic goals.</p>
                  </div>

                  <div className="space-y-4 pt-2">
                    <div>
                      <label className="block text-[8px] uppercase font-mono tracking-widest text-zinc-450 font-bold mb-1.5" htmlFor="message">Your Blueprint Ambitions / Context</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="e.g., We are ready to launch our second physical location and need strategic positioning plus localized acquiring engines in 60 days."
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-sans text-xs sm:text-sm placeholder-zinc-500 focus:outline-none focus:border-purple-500/50 transition-all resize-none"
                      />
                    </div>

                    {/* Advisor Card */}
                    <div className="p-4 bg-purple-950/10 border border-purple-500/10 rounded-xl space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-purple-550 rounded-full animate-pulse" />
                        <span className="text-[8px] font-mono uppercase tracking-widest text-purple-400 font-bold">Strategic Consultant MATCH</span>
                      </div>
                      <p className="text-xs text-zinc-400 font-light leading-relaxed">
                        Based on your profile, we have provisionally aligned your roadmap with <strong className="text-purple-305">{advisorInfo.advisor}</strong> ({advisorInfo.role}), specializing in <span className="text-zinc-300">{advisorInfo.focus}</span>
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Form Navigation */}
              <div className="flex items-center justify-between pt-6 border-t border-white/5">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex items-center space-x-1.5 px-4 py-2 text-[10px] font-mono text-zinc-400 hover:text-white hover:bg-white/5 rounded-full transition-all cursor-pointer font-bold"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <span>BACK</span>
                  </button>
                ) : (
                  <div />
                )}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex items-center space-x-1.5 px-5 py-2.5 bg-[#7C3AED] text-white hover:bg-[#6D28D9] text-[10px] font-mono rounded-full font-bold tracking-widest uppercase transition-all shadow-md shadow-purple-900/40 cursor-pointer"
                  >
                    <span>CONTINUE</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center space-x-2 px-6 py-3 bg-[#7C3AED] text-white hover:bg-[#6D28D9] text-[10px] font-mono rounded-full font-bold tracking-widest uppercase transition-all shadow-md shadow-purple-900/40 cursor-pointer"
                  >
                    <span>{isSubmitting ? 'PROCESSING...' : 'LOCK CONSULTATION'}</span>
                  </button>
                )}
              </div>
            </form>
          ) : (
            
            /* Success State */
            <div className="space-y-6 text-center py-6 animate-fade-in-up">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-purple-950/20 border border-purple-500/20 text-purple-400 shadow-md mb-2">
                <Calendar className="w-6 h-6" />
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-2xl font-normal text-white leading-tight">Consultation Reserved</h3>
                <p className="text-xs sm:text-sm text-[#A1A1AA] max-w-sm mx-auto font-light">
                  Thank you, <span className="text-purple-400 font-bold">{formData.fullName}</span>. We have secured your discovery roadmap session for <span className="text-zinc-255 font-bold">{formData.companyName}</span>.
                </p>
              </div>

              <div className="max-w-md mx-auto p-5 bg-purple-950/10 border border-purple-500/10 rounded-xl text-left space-y-3">
                <div className="flex items-center justify-between border-b border-white/5 pb-2">
                  <span className="text-[8px] font-mono uppercase tracking-widest text-[#7C3AED] font-bold">Assigned Executive</span>
                  <span className="text-[8px] font-mono uppercase tracking-widest text-emerald-400 font-bold">Match Live</span>
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-white">{advisorInfo.advisor}</h4>
                  <p className="text-[10px] text-zinc-400 font-mono mt-0.5">{advisorInfo.role}</p>
                  <p className="text-xs text-zinc-400 leading-relaxed pt-2 font-light">
                    Our team matches you directly. We have forwarded an email invitation containing calendar times to <span className="text-purple-308 font-bold">{formData.email}</span> with pre-meeting guidelines.
                  </p>
                </div>
              </div>

              <button
                id="close-success-booking-modal-btn"
                onClick={onClose}
                className="px-6 py-3 bg-[#7C3AED] hover:bg-[#6D28D9] text-[10px] font-mono text-white rounded-full font-bold tracking-widest uppercase transition-all shadow-md cursor-pointer"
              >
                RETURN TO PREVIEW
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
