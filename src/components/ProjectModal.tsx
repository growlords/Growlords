'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, CheckCircle2, Sparkles, Send } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
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
        className="relative w-full max-w-2xl bg-[#0A0A0C] border border-white/15 rounded-3xl p-6 sm:p-10 z-10 shadow-2xl max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-6 right-6 p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/15 text-white transition-colors"
          aria-label="Close Project Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#B7FF3C] uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              START A PROJECT // GROWLORDS
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold uppercase font-heading text-white">
              LET'S BUILD YOUR GROWTH SYSTEM.
            </h3>

            <p className="mt-2 text-xs sm:text-sm text-white/60 font-light leading-relaxed">
              Tell us about your brand objectives. We will review your ecosystem and schedule an executive strategy session within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              {/* Service Selection */}
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-white/80 block mb-3">
                  01 // SELECT CAPABILITIES NEEDED
                </label>
                <div className="flex flex-wrap gap-2">
                  {servicesOptions.map((svc) => {
                    const isSelected = selectedServices.includes(svc);
                    return (
                      <button
                        type="button"
                        key={svc}
                        onClick={() => toggleService(svc)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-medium tracking-wide transition-all ${
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
                <label className="text-xs font-mono uppercase tracking-wider text-white/80 block mb-3">
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
                        className={`py-2 px-2 rounded-xl text-xs font-mono text-center transition-all ${
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
                <label className="text-xs font-mono uppercase tracking-wider text-white/80 block mb-3">
                  03 // YOUR DETAILS
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#B7FF3C]"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Work Email (e.g. alex@brand.com)"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#B7FF3C]"
                  />
                </div>

                <div className="mt-3">
                  <input
                    type="url"
                    required
                    placeholder="Brand Website / Store URL"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#B7FF3C]"
                  />
                </div>

                <div className="mt-3">
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your current primary bottleneck or growth goal..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#B7FF3C] resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-full bg-[#B7FF3C] text-[#050505] font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#D7FF7A] transition-all shadow-[0_0_25px_rgba(183,255,60,0.3)]"
              >
                <span>Submit Growth Inquiry</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        ) : (
          <div className="py-12 text-center">
            <div className="w-16 h-16 rounded-full bg-[#B7FF3C]/10 border border-[#B7FF3C]/30 text-[#B7FF3C] flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-3xl font-bold uppercase font-heading text-white">
              INQUIRY RECEIVED.
            </h3>

            <p className="mt-4 text-sm text-white/70 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-white font-semibold">{formData.name}</span>. Our growth partners are reviewing <span className="text-[#B7FF3C]">{formData.website}</span> and will reach out to <span className="text-white font-semibold">{formData.email}</span> within 24 hours with an initial audit.
            </p>

            <button
              onClick={handleResetAndClose}
              className="mt-8 px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-mono uppercase tracking-widest transition-colors"
            >
              Back to Experience
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
