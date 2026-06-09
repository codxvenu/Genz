import React, { useState } from 'react';
import { X, ChevronRight, ChevronLeft, Check, Sparkles, CheckSquare, Square, Calendar } from 'lucide-react';
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
    <div id="booking-modal-overlay" className="fixed inset-0 z-55 flex items-center justify-center p-4 bg-zinc-950/40 backdrop-blur-sm animate-fade-in">
      <div 
        id="booking-modal-container"
        className="relative w-full max-w-xl overflow-hidden bg-white rounded-[32px] border border-violet-150 shadow-premium transition-all duration-300"
      >
        <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-violet-600/30 to-transparent" />
        <div className="absolute -top-12 -left-12 w-32 h-32 bg-violet-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="p-6 sm:p-8">
          
          {/* Header */}
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-violet-50">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-violet-605 animate-pulse" />
              <span className="font-mono text-[10px] tracking-wider uppercase text-zinc-500 font-extrabold">Consultation Desk</span>
            </div>
            <button 
              id="close-booking-modal-btn"
              onClick={onClose}
              className="px-3.5 py-1 text-[10px] font-mono font-bold text-zinc-450 hover:text-zinc-800 border border-violet-100 hover:border-violet-200 bg-violet-50/50 rounded-full transition-all cursor-pointer"
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
                    <div className={`h-[2.5px] flex-1 rounded-full transition-all duration-300 ${step >= i ? 'bg-violet-600' : 'bg-violet-100'}`} />
                    <span className={`text-[10px] font-mono font-bold ${step === i ? 'text-violet-700' : 'text-zinc-400'}`}>0{i}</span>
                  </div>
                ))}
              </div>

              {/* Step 1 */}
              {step === 1 && (
                <div className="space-y-4 animate-fade-in-up">
                  <div className="space-y-1">
                    <h3 className="font-sans text-xl sm:text-2xl text-zinc-900 font-extrabold tracking-tight">Tell us about yourself</h3>
                    <p className="text-xs sm:text-sm text-zinc-500 font-normal">Establish the foundation. Let us know who we are building with.</p>
                  </div>
                  
                  <div className="space-y-4 pt-2">
                    <div>
                      <label className="block text-[10px] uppercase font-mono tracking-wider text-zinc-550 font-bold mb-1" htmlFor="fullName">Your Full Name</label>
                      <input
                        id="fullName"
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g., Jonathan Mercer"
                        className={`w-full px-4 py-3 bg-violet-50/20 border ${errors.fullName ? 'border-red-400' : 'border-violet-100'} rounded-2xl text-zinc-800 font-sans text-xs sm:text-sm placeholder-zinc-400 focus:outline-none focus:border-violet-500 transition-all`}
                        required
                      />
                      {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase font-mono tracking-wider text-zinc-555 font-bold mb-1" htmlFor="email">Professional Email</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g., jonathan@scribeai.com"
                        className={`w-full px-4 py-3 bg-violet-50/20 border ${errors.email ? 'border-red-400' : 'border-violet-100'} rounded-2xl text-zinc-800 font-sans text-xs sm:text-sm placeholder-zinc-400 focus:outline-none focus:border-violet-500 transition-all`}
                        required
                      />
                      {errors.email && <p className="text-xs text-red-505 mt-1">{errors.email}</p>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] uppercase font-mono tracking-wider text-zinc-550 font-bold mb-1" htmlFor="companyName">Company Name</label>
                        <input
                          id="companyName"
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          placeholder="e.g., ScribeAI"
                          className={`w-full px-4 py-3 bg-violet-50/20 border ${errors.companyName ? 'border-red-400' : 'border-violet-100'} rounded-2xl text-zinc-800 font-sans text-xs sm:text-sm placeholder-zinc-400 focus:outline-none focus:border-violet-500 transition-all`}
                          required
                        />
                        {errors.companyName && <p className="text-xs text-red-505 mt-1">{errors.companyName}</p>}
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase font-mono tracking-wider text-zinc-550 font-bold mb-1" htmlFor="website">Website URL (Optional)</label>
                        <input
                          id="website"
                          type="text"
                          name="website"
                          value={formData.website || ''}
                          onChange={handleInputChange}
                          placeholder="e.g., scribeai.com"
                          className="w-full px-4 py-3 bg-violet-50/20 border border-violet-100 rounded-2xl text-zinc-800 font-sans text-xs sm:text-sm placeholder-zinc-400 focus:outline-none focus:border-violet-500 transition-all"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <div className="space-y-4 animate-fade-in-up">
                  <div className="space-y-1">
                    <h3 className="font-sans text-xl sm:text-2xl text-zinc-900 font-extrabold tracking-tight">Select Scale Challenges</h3>
                    <p className="text-xs sm:text-sm text-zinc-550">Choose all domains where your business requires immediate modernization.</p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <div>
                      <span className="block text-[10px] uppercase font-mono tracking-wider text-zinc-450 font-bold mb-2">Company Stage</span>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {(['idea', 'launched', 'scaling', 'enterprise'] as const).map(stage => (
                          <button
                            key={stage}
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, stage }))}
                            className={`px-3 py-2 border rounded-xl text-xs font-mono capitalize transition-all ${
                              formData.stage === stage 
                                ? 'bg-violet-600 text-white border-violet-605 font-bold shadow-soft' 
                                : 'bg-transparent text-zinc-500 border-violet-100 hover:border-violet-300'
                            }`}
                          >
                            {stage}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2 pt-2">
                      <span className="block text-[10px] uppercase font-mono tracking-wider text-zinc-450 font-bold">Core Service Pillars Needed</span>
                      {errors.needs && <p className="text-xs text-red-500 mt-1">{errors.needs}</p>}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[160px] overflow-y-auto pr-1">
                        {AVAILABLE_NEEDS.map(need => {
                          const isSelected = formData.needs.includes(need);
                          return (
                            <button
                              key={need}
                              type="button"
                              onClick={() => toggleNeed(need)}
                              className={`flex items-start text-left p-2.5 rounded-2xl border transition-all text-xs font-sans ${
                                isSelected 
                                  ? 'bg-violet-50 border-violet-405 text-violet-700 font-bold' 
                                  : 'bg-white border-violet-100/80 text-zinc-650 hover:border-violet-250'
                              }`}
                            >
                              <span className="mr-2 mt-0.5 text-zinc-400">
                                {isSelected ? (
                                  <CheckSquare className="w-3.5 h-3.5 text-violet-600 shrink-0" />
                                ) : (
                                  <Square className="w-3.5 h-3.5 text-zinc-300 shrink-0" />
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
                <div className="space-y-4 animate-fade-in-up">
                  <div className="space-y-1">
                    <h3 className="font-sans text-xl sm:text-2xl text-zinc-900 font-extrabold tracking-tight">Tell us your vision</h3>
                    <p className="text-xs sm:text-sm text-zinc-550">Briefly state your current growth constraints, timing, or strategic goals.</p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <div>
                      <label className="block text-[10px] uppercase font-mono tracking-wider text-zinc-450 font-bold mb-1" htmlFor="message">Your Blueprint Ambitions / Context</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="e.g., We are ready to launch our second physical location and need modern positioning plus localized acquiring engines in the next 60 days."
                        className="w-full px-4 py-3 bg-violet-50/20 border border-violet-100 rounded-2xl text-zinc-800 font-sans text-xs sm:text-sm placeholder-zinc-450 focus:outline-none focus:border-violet-600 transition-all resize-none"
                      />
                    </div>

                    {/* Matched advisor card */}
                    <div className="p-4 bg-violet-50/60 border border-violet-100/70 rounded-2xl space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-[10px] font-mono uppercase tracking-wider text-violet-750 font-extrabold">Strategic Consultant MATCH</span>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-zinc-700 font-sans leading-relaxed">
                          Based on your custom track & answers, we have provisionally aligned your roadmap session with <strong className="text-violet-700">{advisorInfo.advisor}</strong> ({advisorInfo.role}), specializing in <span className="text-zinc-650">{advisorInfo.focus}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Form Navigation */}
              <div className="flex items-center justify-between pt-4 border-t border-violet-50">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex items-center space-x-1.5 px-4 py-2 text-xs font-mono text-zinc-500 hover:text-zinc-950 hover:bg-violet-50 rounded-full transition-all cursor-pointer font-bold"
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
                    className="flex items-center space-x-1.5 px-5 py-2.5 bg-violet-600 text-white hover:bg-violet-700 text-xs font-mono rounded-full font-bold tracking-widest uppercase transition-all shadow-md shadow-violet-200 cursor-pointer"
                  >
                    <span>CONTINUE</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center space-x-2 px-6 py-3 bg-violet-600 text-white hover:bg-violet-700 text-xs font-mono rounded-full font-bold tracking-widest uppercase transition-all shadow-md shadow-violet-200 cursor-pointer"
                  >
                    <span>{isSubmitting ? 'PROCESSING...' : 'LOCK CONSULTATION'}</span>
                    {!isSubmitting && <Check className="w-3.5 h-3.5 text-white" />}
                  </button>
                )}
              </div>
            </form>
          ) : (
            
            /* Success State */
            <div className="space-y-6 text-center py-6 animate-fade-in-up">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-violet-100 border border-violet-205 text-violet-700 shadow-md mb-2">
                <Calendar className="w-6 h-6 text-violet-600" />
              </div>

              <div className="space-y-2">
                <h3 className="font-sans text-2xl font-black text-zinc-900 leading-tight">Consultation Reserved</h3>
                <p className="text-xs sm:text-sm text-zinc-550 max-w-sm mx-auto">
                  Thank you, <span className="text-violet-700 font-extrabold">{formData.fullName}</span>. We have secured your discovery roadmap session for <span className="text-zinc-800 font-extrabold">{formData.companyName}</span>.
                </p>
              </div>

              <div className="max-w-md mx-auto p-4.5 bg-violet-50/60 border border-violet-100/70 rounded-2xl text-left space-y-3 shadow-soft">
                <div className="flex items-center justify-between border-b border-violet-100 pb-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-violet-700 font-extrabold">Assigned Executive</span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-green-600 font-bold">Match Live</span>
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-extrabold text-zinc-900">{advisorInfo.advisor}</h4>
                  <p className="text-xs text-zinc-500 font-mono mt-0.5">{advisorInfo.role}</p>
                  <p className="text-xs text-zinc-650 leading-relaxed pt-2">
                    Our team has reserved an exclusive space for you. They will send an email invitation containing details to <span className="text-violet-705 font-bold">{formData.email}</span> with pre-meeting guidelines.
                  </p>
                </div>
              </div>

              <button
                id="close-success-booking-modal-btn"
                onClick={onClose}
                className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-xs font-mono text-white rounded-full font-bold tracking-widest uppercase transition-all shadow-md cursor-pointer"
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
