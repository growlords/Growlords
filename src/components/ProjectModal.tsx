'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, CheckCircle2, Sparkles, Send } from 'lucide-react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ isOpen, onClose }: ProjectModalProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string>('$25k - $50k / mo');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    notes: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const servicesOptions = [
    'Performance Marketing',
    'Social Media Growth',
    'Brand Strategy',
    'Creative & Video Studio',
    'Web & CRO Funnels',
    'End-to-End Growth Engine',
  ];

  const budgetOptions = [
    '< $15k / mo',
    '$15k - $30k / mo',
    '$30k - $60k / mo',
    '$60k+ / mo',
  ];

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setSelectedServices([]);
    setFormData({ name: '', email: '', website: '', notes: '' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleResetAndClose}
        className="fixed inset-0 bg-[#050505]/90 backdrop-blur-xl"
      />

      {/* Modal Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="relative w-full max-w-2xl bg-[#0A0A0C] border border-white/15 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 z-10 shadow-2xl max-h-[88vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 sm:top-6 sm:right-6 p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/15 text-white transition-colors"
          aria-label="Close Project Modal"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono tracking-widest text-[#B7FF3C] uppercase mb-2.5 sm:mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              START A PROJECT // GROWLORDS
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase font-heading text-white pr-8">
              LET'S BUILD YOUR GROWTH SYSTEM.
            </h3>

            <p className="mt-2 text-xs sm:text-sm text-white/60 font-light leading-relaxed">
              Tell us about your brand objectives. We will review your ecosystem and schedule an executive strategy session within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 sm:mt-8 space-y-5 sm:space-y-6">
              {/* Service Selection */}
              <div>
                <label className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-white/80 block mb-2.5 sm:mb-3">
                  01 // SELECT CAPABILITIES NEEDED
                </label>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {servicesOptions.map((svc) => {
                    const isSelected = selectedServices.includes(svc);
                    return (
                      <button
                        type="button"
                        key={svc}
                        onClick={() => toggleService(svc)}
                        className={`px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-medium tracking-wide transition-all ${
                          isSelected
                            ? 'bg-[#B7FF3C] text-[#050505] font-bold border border-[#B7FF3C]'
                            : 'bg-white/5 text-white/70 hover:text-white border border-white/10'
                        }`}
                      >
                        {svc}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Monthly Budget Scope */}
              <div>
                <label className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-white/80 block mb-2.5 sm:mb-3">
                  02 // ESTIMATED MONTHLY MEDIA / GROWTH BUDGET
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {budgetOptions.map((bgt) => {
                    const isSelected = selectedBudget === bgt;
                    return (
                      <button
                        type="button"
                        key={bgt}
                        onClick={() => setSelectedBudget(bgt)}
                        className={`py-2 px-2 rounded-xl text-[11px] sm:text-xs font-mono text-center transition-all ${
                          isSelected
                            ? 'bg-[#B7FF3C] text-[#050505] font-bold border border-[#B7FF3C]'
                            : 'bg-white/5 text-white/70 hover:text-white border border-white/10'
                        }`}
                      >
                        {bgt}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <label className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-white/80 block mb-2.5 sm:mb-3">
                  03 // YOUR DETAILS
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 text-xs sm:text-sm focus:outline-none focus:border-[#B7FF3C]"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Work Email (e.g. alex@brand.com)"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 text-xs sm:text-sm focus:outline-none focus:border-[#B7FF3C]"
                  />
                </div>

                <div className="mt-2.5 sm:mt-3">
                  <input
                    type="url"
                    required
                    placeholder="Brand Website / Store URL"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 text-xs sm:text-sm focus:outline-none focus:border-[#B7FF3C]"
                  />
                </div>

                <div className="mt-2.5 sm:mt-3">
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your current primary bottleneck or growth goal..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 text-xs sm:text-sm focus:outline-none focus:border-[#B7FF3C] resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 sm:py-4 rounded-full bg-[#B7FF3C] text-[#050505] font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#D7FF7A] transition-all shadow-[0_0_25px_rgba(183,255,60,0.3)]"
              >
                <span>Submit Growth Inquiry</span>
                <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </form>
          </div>
        ) : (
          <div className="py-8 sm:py-12 text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#B7FF3C]/10 border border-[#B7FF3C]/30 text-[#B7FF3C] flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold uppercase font-heading text-white">
              INQUIRY RECEIVED.
            </h3>

            <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-white/70 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-white font-semibold">{formData.name}</span>. Our growth partners are reviewing <span className="text-[#B7FF3C]">{formData.website}</span> and will reach out to <span className="text-white font-semibold">{formData.email}</span> within 24 hours with an initial audit.
            </p>

            <button
              onClick={handleResetAndClose}
              className="mt-6 sm:mt-8 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-mono uppercase tracking-widest transition-colors"
            >
              Back to Experience
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
