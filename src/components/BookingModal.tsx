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
    // Simulate premium backend ingestion API
    await new Promise(resolve => setTimeout(resolve, 1400));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  // Personalized consultation advisory match-making text based on client inputs
  const getAdvisoryMatch = () => {
    if (formData.stage === 'idea') {
      return { advisor: 'Chloe Zhang', role: 'Partner, Brand Launch Division', focus: 'early-stage concept design and initial capital positioning.' };
    }
    if (formData.stage === 'launched' && formData.needs.includes('Staffing & Recruitment')) {
      return { advisor: 'Marcus Vance', role: 'Head of Talent Systems', focus: 'high-skill engineering placements and workflow optimization.' };
    }
    if (formData.stage === 'scaling' || formData.stage === 'enterprise') {
      return { advisor: 'Sebastian Mercer', role: 'Managing director, Scale Strategies', focus: 'advanced acquisition vectors, corporate structuring, and cross-border footprinting.' };
    }
    return { advisor: 'Sophia Sterling', role: 'Director of Growth', focus: 'integrating modern storytelling with full-funnel digital pipelines.' };
  };

  const advisorInfo = getAdvisoryMatch();

  return (
    <div id="booking-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fade-in">
      <div 
        id="booking-modal-container"
        className="relative w-full max-w-xl overflow-hidden glassmorphism border border-zinc-800 bg-zinc-950 rounded-2xl shadow-2xl transition-all duration-300"
      >
        {/* Decorative glass background light beam */}
        <div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-zinc-500 to-transparent" />
        <div className="absolute -top-12 -left-12 w-32 h-32 bg-zinc-800/10 rounded-full blur-3xl pointer-events-none" />

        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 align-middle text-zinc-400" />
              <span className="font-mono text-xs tracking-wider uppercase text-zinc-400">Consultation Bureau</span>
            </div>
            <button 
              id="close-booking-modal-btn"
              onClick={onClose}
              className="p-1 px-3 text-zinc-500 hover:text-white hover:bg-zinc-900 border border-transparent hover:border-zinc-800 rounded-md transition-all text-xs font-mono"
            >
              CLOSE
            </button>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Process indicator steps */}
              <div className="flex items-center space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="flex-1 flex items-center space-x-2">
                    <div className={`h-[2px] flex-1 rounded-full transition-all duration-300 ${step >= i ? 'bg-white' : 'bg-zinc-800'}`} />
                    <span className={`text-[10px] font-mono ${step === i ? 'text-white' : 'text-zinc-600'}`}>0{i}</span>
                  </div>
                ))}
              </div>

              {/* Step 1: Base & Corporate Identity */}
              {step === 1 && (
                <div className="space-y-4 animate-fade-in-up">
                  <div className="space-y-1">
                    <h3 className="font-serif text-2xl text-white tracking-wide">Tell us about yourself</h3>
                    <p className="text-sm text-zinc-400">Establish the foundation. Let us know who we are building with.</p>
                  </div>
                  
                  <div className="space-y-3 pt-2">
                    <div>
                      <label className="block text-[10px] uppercase font-mono tracking-wider text-zinc-400 mb-1" htmlFor="fullName">Your Full Name</label>
                      <input
                        id="fullName"
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g., Jonathan Mercer"
                        className={`w-full px-4 py-3 bg-zinc-900/50 border ${errors.fullName ? 'border-red-500/50' : 'border-zinc-800'} rounded-lg text-white font-sans text-sm placeholder-zinc-600 focus:outline-none focus:border-white transition-all`}
                        required
                      />
                      {errors.fullName && <p className="text-xs text-red-400 mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase font-mono tracking-wider text-zinc-400 mb-1" htmlFor="email">Professional Email</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g., jonathan@scribeai.com"
                        className={`w-full px-4 py-3 bg-zinc-900/50 border ${errors.email ? 'border-red-500/50' : 'border-zinc-800'} rounded-lg text-white font-sans text-sm placeholder-zinc-600 focus:outline-none focus:border-white transition-all`}
                        required
                      />
                      {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] uppercase font-mono tracking-wider text-zinc-400 mb-1" htmlFor="companyName">Company Name</label>
                        <input
                          id="companyName"
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          placeholder="e.g., ScribeAI"
                          className={`w-full px-4 py-3 bg-zinc-900/50 border ${errors.companyName ? 'border-red-500/50' : 'border-zinc-800'} rounded-lg text-white font-sans text-sm placeholder-zinc-600 focus:outline-none focus:border-white transition-all`}
                          required
                        />
                        {errors.companyName && <p className="text-xs text-red-400 mt-1">{errors.companyName}</p>}
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase font-mono tracking-wider text-zinc-400 mb-1" htmlFor="website">Website URL (Optional)</label>
                        <input
                          id="website"
                          type="text"
                          name="website"
                          value={formData.website}
                          onChange={handleInputChange}
                          placeholder="e.g., scribeai.com"
                          className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-lg text-white font-sans text-sm placeholder-zinc-600 focus:outline-none focus:border-white transition-all"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Growth Target Vectors */}
              {step === 2 && (
                <div className="space-y-4 animate-fade-in-up">
                  <div className="space-y-1">
                    <h3 className="font-serif text-2xl text-white tracking-wide">Select Scale Challenges</h3>
                    <p className="text-sm text-zinc-400">Choose all domains where your system requires immediate modernization.</p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <div>
                      <span className="block text-[10px] uppercase font-mono tracking-wider text-zinc-400 mb-2">Company Stage</span>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {(['idea', 'launched', 'scaling', 'enterprise'] as const).map(stage => (
                          <button
                            key={stage}
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, stage }))}
                            className={`px-3 py-2 border rounded-md text-xs font-mono capitalize transition-all ${
                              formData.stage === stage 
                                ? 'bg-white text-black border-white font-medium' 
                                : 'bg-transparent text-zinc-400 border-zinc-800 hover:border-zinc-600'
                            }`}
                          >
                            {stage}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2 pt-2">
                      <span className="block text-[10px] uppercase font-mono tracking-wider text-zinc-400">Core Service Pillars Needed</span>
                      {errors.needs && <p className="text-xs text-red-500 mt-1">{errors.needs}</p>}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[180px] overflow-y-auto pr-1">
                        {AVAILABLE_NEEDS.map(need => {
                          const isSelected = formData.needs.includes(need);
                          return (
                            <button
                              key={need}
                              type="button"
                              onClick={() => toggleNeed(need)}
                              className={`flex items-start text-left p-2.5 rounded-lg border transition-all text-xs font-sans ${
                                isSelected 
                                  ? 'bg-zinc-900 border-white text-white' 
                                  : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                              }`}
                            >
                              <span className="mr-2 mt-0.5 text-zinc-400">
                                {isSelected ? (
                                  <CheckSquare className="w-3.5 h-3.5 text-white" />
                                ) : (
                                  <Square className="w-3.5 h-3.5 text-zinc-700" />
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

              {/* Step 3: Scope Message Description */}
              {step === 3 && (
                <div className="space-y-4 animate-fade-in-up">
                  <div className="space-y-1">
                    <h3 className="font-serif text-2xl text-white tracking-wide">Tell us your vision</h3>
                    <p className="text-sm text-zinc-400">Briefly state your current growth constraints, timing, or strategic goals.</p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <div>
                      <label className="block text-[10px] uppercase font-mono tracking-wider text-zinc-400 mb-1" htmlFor="message">Your Blueprint Ambitions / Context</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="e.g., We are ready to launch our second physical location and need modern positioning plus localized acquiring engines in the next 60 days."
                        className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-lg text-white font-sans text-sm placeholder-zinc-600 focus:outline-none focus:border-white transition-all resize-none"
                      />
                    </div>

                    {/* Interactive matched consultant card */}
                    <div className="p-4 bg-zinc-900/30 border border-zinc-800/80 rounded-xl space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">Live Strategic MATCH</span>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                          Based on your stage & targets, we have provisionally aligned your meeting with <strong className="text-white">{advisorInfo.advisor}</strong> ({advisorInfo.role}), specializing in <span className="text-zinc-300">{advisorInfo.focus}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Form Navigation Controls */}
              <div className="flex items-center justify-between pt-4 border-t border-zinc-900">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex items-center space-x-1.5 px-4 py-2 text-xs font-mono text-zinc-400 hover:text-white transition-all"
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
                    className="flex items-center space-x-1.5 px-5 py-2.5 bg-white text-black hover:bg-zinc-200 text-xs font-mono rounded-md font-semibold tracking-wider transition-all"
                  >
                    <span>CONTINUE</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex items-center space-x-2 px-6 py-3 bg-white text-black hover:bg-zinc-200 text-xs font-mono rounded-md font-semibold tracking-wider transition-all shadow-md ${
                      isSubmitting ? 'opacity-40 cursor-not-allowed' : ''
                    }`}
                  >
                    <span>{isSubmitting ? 'PROCESSING...' : 'LOCK CONSULTATION'}</span>
                    {!isSubmitting && <Check className="w-3.5 h-3.5" />}
                  </button>
                )}
              </div>
            </form>
          ) : (
            /* Elegant glass-morphism SUCCESS STATE card */
            <div className="space-y-6 text-center py-6 animate-fade-in-up">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-zinc-900 border border-zinc-800 text-white shadow-inner mb-2">
                <Calendar className="w-6 h-6 text-zinc-300" />
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-3xl text-white tracking-wide">Consultation Booked</h3>
                <p className="text-sm text-zinc-400 max-w-sm mx-auto">
                  Thank you, <span className="text-white font-medium">{formData.fullName}</span>. We have finalized your discovery roadmap slot for <span className="text-white font-medium">{formData.companyName}</span>.
                </p>
              </div>

              {/* Luxury matched advisor receipt */}
              <div className="max-w-md mx-auto p-4 bg-zinc-900/40 border border-zinc-800/60 rounded-xl text-left space-y-3">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">Scheduled Partner</span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-green-400">Match active</span>
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold text-white">{advisorInfo.advisor}</h4>
                  <p className="text-xs text-zinc-400 font-mono">{advisorInfo.role}</p>
                  <p className="text-xs text-zinc-400 leading-relaxed pt-1.5">
                    Our partner has reserved an exclusive space for you. They will send an email details invitation line to <span className="text-white">{formData.email}</span> with pre-reading diagnostic steps.
                  </p>
                </div>
              </div>

              {/* Minimal exit */}
              <button
                id="close-success-booking-modal-btn"
                onClick={onClose}
                className="px-6 py-2.5 mt-2 bg-zinc-900 hover:bg-zinc-800 text-xs font-mono text-white rounded-md border border-zinc-800 hover:border-zinc-700 transition-all cursor-pointer"
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
