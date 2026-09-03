"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Sparkles,
  Send,
  Mail,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";
import InstagramIcon from "@/components/common/InstagramIcon";
import WhatsAppIcon from "@/components/common/WhatsAppIcon";
import confetti from "canvas-confetti";

function ContactFormInner() {
  const searchParams = useSearchParams();

  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "Web Design & Development",
    budget: "₹15,000 – ₹30,000 (Starter)",
    details: "",
    website_hp: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  const whatsappNumber = "919460740836";
  const whatsappPreFilled =
    "Hi Growlords, I'm interested in your digital marketing services. I'd like to discuss my project.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappPreFilled
  )}`;

  useEffect(() => {
    const serviceParam = searchParams.get("service");
    const packageParam = searchParams.get("package");

    if (serviceParam) {
      setFormData((prev) => ({ ...prev, service: serviceParam }));
    } else if (packageParam === "starter") {
      setFormData((prev) => ({
        ...prev,
        budget: "₹15,000 – ₹30,000 (Starter)",
        service: "Web Design & Development",
      }));
    } else if (packageParam === "growth") {
      setFormData((prev) => ({
        ...prev,
        budget: "₹30,000 – ₹75,000 (Growth)",
      }));
    } else if (packageParam === "scale") {
      setFormData((prev) => ({
        ...prev,
        budget: "₹75,000+ (Scale Enterprise)",
      }));
    }
  }, [searchParams]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        // Clear/reset form fields ONLY after successful submission
        setFormData(initialFormData);
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
            colors: ["#16A34A", "#22C55E", "#111111"],
          });
        } catch {
          // Ignore
        }
      } else {
        setStatus("error");
        setErrorMessage(
          data.message ||
            "Something went wrong while sending your enquiry. Please try again or contact us on WhatsApp."
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "Something went wrong while sending your enquiry. Please try again or contact us on WhatsApp."
      );
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
      {/* Left Column: Contact Philosophy & Social/Direct Links */}
      <div className="lg:col-span-5 flex flex-col gap-8">
        <div className="flex flex-col gap-3.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#16A34A]/30 text-xs font-mono uppercase tracking-widest text-[#16A34A] w-fit shadow-2xs">
            <Sparkles className="w-3 h-3" />
            <span>Direct Access</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-[#111111] uppercase tracking-tight leading-tight">
            SEND AN ENQUIRY <br />
            <span className="text-[#16A34A]">OR CHAT DIRECTLY</span>
          </h2>

          <p className="text-sm sm:text-base text-[#5F6368] leading-relaxed">
            Every project enquiry is personally reviewed by CEOs Raman Kamboj &amp; Jatin Kamboj.
            Reach out via form or start an instant conversation on WhatsApp.
          </p>
        </div>

        {/* Contact Points (Email, WhatsApp, Instagram) */}
        <div className="flex flex-col gap-4">
          {/* WhatsApp Direct */}
          <div className="p-5 rounded-2xl bg-white border border-black/[0.08] shadow-2xs flex flex-col gap-3 hover:border-[#25D366]/40 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center text-[#25D366] shrink-0">
                <WhatsAppIcon className="w-5 h-5" />
              </div>
              <div className="flex flex-col gap-0.5 min-w-0">
                <span className="text-xs font-mono uppercase tracking-wider text-[#5F6368]">
                  WhatsApp Direct Line
                </span>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#111111] hover:text-[#25D366] text-base font-bold transition-colors"
                >
                  +91 9460740836
                </a>
                <span className="text-xs text-[#5F6368] font-mono">
                  Instant response • Available 24/7
                </span>
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 w-full py-2.5 px-4 rounded-xl font-bold text-xs bg-[#25D366] text-white hover:bg-[#20bd5a] transition-all flex items-center justify-center gap-2 shadow-xs"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Email */}
          <div className="p-5 rounded-2xl bg-white border border-black/[0.08] shadow-2xs flex items-start gap-4 hover:border-[#16A34A]/30 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#F4F7F4] border border-[#16A34A]/20 flex items-center justify-center text-[#16A34A] shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div className="flex flex-col gap-1 min-w-0">
              <span className="text-xs font-mono uppercase tracking-wider text-[#5F6368]">
                Official Agency Email
              </span>
              <a
                href="mailto:growlords@gmail.com"
                className="text-[#111111] hover:text-[#16A34A] text-sm sm:text-base font-bold transition-colors break-all"
              >
                growlords@gmail.com
              </a>
              <span className="text-xs text-[#5F6368] font-mono">
                Direct inbox monitored 24/7
              </span>
            </div>
          </div>

          {/* Instagram */}
          <div className="p-5 rounded-2xl bg-white border border-black/[0.08] shadow-2xs flex items-start gap-4 hover:border-[#16A34A]/30 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#F4F7F4] border border-[#16A34A]/20 flex items-center justify-center text-[#16A34A] shrink-0">
              <InstagramIcon className="w-5 h-5" />
            </div>
            <div className="flex flex-col gap-1 min-w-0">
              <span className="text-xs font-mono uppercase tracking-wider text-[#5F6368]">
                Official Instagram
              </span>
              <a
                href="https://instagram.com/growlords"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#111111] hover:text-[#16A34A] text-sm sm:text-base font-bold transition-colors flex items-center gap-1 group"
              >
                <span>@growlords</span>
                <ArrowUpRight className="w-4 h-4 text-[#16A34A] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <span className="text-xs text-[#5F6368] font-mono">
                Click to open official agency profile
              </span>
            </div>
          </div>
        </div>

        {/* Commitment Badges */}
        <div className="p-6 rounded-2xl bg-white border border-black/[0.06] shadow-2xs flex flex-col gap-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#111111] font-semibold">
            Growlords Service Guarantees
          </span>
          <div className="flex items-center gap-2.5 text-xs text-[#5F6368]">
            <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
            <span>Projects starting at ₹15,000 with clear milestone deliverables</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs text-[#5F6368]">
            <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
            <span>No generic themes — 100% custom responsive architecture</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs text-[#5F6368]">
            <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
            <span>Strict NDA &amp; IP ownership protection</span>
          </div>
        </div>
      </div>

      {/* Right Column: Clean White Contact Form Card */}
      <div className="lg:col-span-7">
        <div className="p-6 sm:p-10 rounded-3xl bg-white border border-black/[0.08] shadow-[0_4px_25px_-2px_rgba(0,0,0,0.05)] relative overflow-hidden">
          {status === "success" ? (
            <div className="py-12 px-4 flex flex-col items-center justify-center text-center gap-5">
              <div className="w-16 h-16 rounded-full bg-[#16A34A]/10 border-2 border-[#16A34A] flex items-center justify-center text-[#16A34A] shadow-xs animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-[#111111] uppercase tracking-tight">
                Enquiry Sent Successfully
              </h3>

              <div className="p-4 rounded-xl bg-[#F4F7F4] border border-[#16A34A]/20 max-w-md">
                <p className="text-sm sm:text-base text-[#16A34A] font-semibold leading-relaxed">
                  Your enquiry has been sent successfully. We&apos;ll get back to you soon.
                </p>
              </div>

              <p className="text-xs text-[#5F6368] max-w-sm">
                A copy has been routed directly to{" "}
                <span className="text-[#111111] font-mono font-medium">growlords@gmail.com</span>.
                You can also connect with us immediately on WhatsApp:
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white text-xs font-bold shadow-xs hover:bg-[#20bd5a] transition-all"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Chat on WhatsApp (+91 9460740836)</span>
              </a>

              <button
                onClick={() => setStatus("idle")}
                className="mt-2 text-xs font-semibold text-[#5F6368] hover:text-[#111111] underline transition-colors"
              >
                Send Another Enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4.5 relative z-10">
              {/* Honeypot trap */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website_hp">Leave this blank</label>
                <input
                  type="text"
                  id="website_hp"
                  name="website_hp"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.website_hp}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col gap-1 mb-2">
                <h3 className="text-xl sm:text-2xl font-black text-[#111111] uppercase tracking-tight">
                  Project Brief
                </h3>
                <p className="text-xs sm:text-sm text-[#5F6368]">
                  Tell us about your brand, goals, and desired launch timeline.
                </p>
              </div>

              {status === "error" && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 flex flex-col gap-2 text-red-700 text-xs sm:text-sm">
                  <div className="flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
                    <span>{errorMessage}</span>
                  </div>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-bold text-[#25D366] hover:underline mt-1 w-fit"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" />
                    <span>Click here to send enquiry via WhatsApp instead →</span>
                  </a>
                </div>
              )}

              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-mono uppercase tracking-wider text-[#111111] font-semibold">
                    Your Name <span className="text-[#16A34A]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Raman Kamboj"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAFBF9] border border-black/[0.1] text-sm text-[#111111] placeholder-zinc-400 focus:outline-none focus:border-[#16A34A] focus:ring-2 focus:ring-[#16A34A]/20 transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-mono uppercase tracking-wider text-[#111111] font-semibold">
                    Your Email <span className="text-[#16A34A]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="client@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAFBF9] border border-black/[0.1] text-sm text-[#111111] placeholder-zinc-400 focus:outline-none focus:border-[#16A34A] focus:ring-2 focus:ring-[#16A34A]/20 transition-all"
                  />
                </div>
              </div>

              {/* Row 2: Phone & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-xs font-mono uppercase tracking-wider text-[#111111] font-semibold">
                    Phone / WhatsApp <span className="text-[#16A34A]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="+91 94607 40836"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAFBF9] border border-black/[0.1] text-sm text-[#111111] placeholder-zinc-400 focus:outline-none focus:border-[#16A34A] focus:ring-2 focus:ring-[#16A34A]/20 transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="company" className="text-xs font-mono uppercase tracking-wider text-[#111111] font-semibold">
                    Company / Brand Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Your Brand Pvt Ltd"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAFBF9] border border-black/[0.1] text-sm text-[#111111] placeholder-zinc-400 focus:outline-none focus:border-[#16A34A] focus:ring-2 focus:ring-[#16A34A]/20 transition-all"
                  />
                </div>
              </div>

              {/* Row 3: Service Required & Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="service" className="text-xs font-mono uppercase tracking-wider text-[#111111] font-semibold">
                    Service Required <span className="text-[#16A34A]">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAFBF9] border border-black/[0.1] text-sm text-[#111111] focus:outline-none focus:border-[#16A34A] focus:ring-2 focus:ring-[#16A34A]/20 transition-all"
                  >
                    <option value="Web Design & Development">Web Design &amp; Development</option>
                    <option value="E-Commerce Development">E-Commerce Development</option>
                    <option value="Portfolio Websites">Portfolio Websites</option>
                    <option value="SEO (Search Engine Optimization)">SEO Services</option>
                    <option value="Social Media Management">Social Media Management</option>
                    <option value="AI Video Creation">AI Video Creation</option>
                    <option value="Content Creation">Content Creation</option>
                    <option value="Graphic Designing">Graphic Designing</option>
                    <option value="Meta Ads (FB & IG)">Meta Ads (Facebook &amp; Instagram)</option>
                    <option value="Google Ads">Google Ads</option>
                    <option value="Branding & Identity">Branding &amp; Identity</option>
                    <option value="Complete Growth Ecosystem">Complete 360° Growth Ecosystem</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="budget" className="text-xs font-mono uppercase tracking-wider text-[#111111] font-semibold">
                    Budget Range <span className="text-[#16A34A]">*</span>
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAFBF9] border border-black/[0.1] text-sm text-[#111111] focus:outline-none focus:border-[#16A34A] focus:ring-2 focus:ring-[#16A34A]/20 transition-all"
                  >
                    <option value="₹15,000 – ₹30,000 (Starter)">₹15,000 – ₹30,000 (Starter Website)</option>
                    <option value="₹30,000 – ₹75,000 (Growth)">₹30,000 – ₹75,000 (Growth Package)</option>
                    <option value="₹75,000 – ₹1,50,000 (Advanced)">₹75,000 – ₹1,50,000 (Advanced E-Com)</option>
                    <option value="₹1,50,000+ (Scale Enterprise)">₹1,50,000+ (Scale Enterprise &amp; Ads)</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Project Details */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="details" className="text-xs font-mono uppercase tracking-wider text-[#111111] font-semibold">
                  Project Details &amp; Objectives <span className="text-[#16A34A]">*</span>
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={4}
                  required
                  placeholder="Tell us about your business, reference sites, required features, and timeline..."
                  value={formData.details}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAFBF9] border border-black/[0.1] text-sm text-[#111111] placeholder-zinc-400 focus:outline-none focus:border-[#16A34A] focus:ring-2 focus:ring-[#16A34A]/20 transition-all resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full mt-2 py-4 px-6 rounded-xl font-bold text-sm sm:text-base tracking-wide bg-[#16A34A] text-white hover:bg-[#15803D] transition-all duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <span>Processing Secure Transmission...</span>
                ) : (
                  <>
                    <span>Send Project Enquiry</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              <p className="text-[11px] text-[#5F6368] text-center font-mono mt-1">
                Dispatched directly to growlords@gmail.com • Spam Protected
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="relative w-full overflow-hidden pt-28 bg-[#FAFBF9]">
      {/* Background illumination */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-[#16A34A]/5 blur-[160px] pointer-events-none" />

      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-16 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#16A34A]/30 text-xs font-mono uppercase tracking-widest text-[#16A34A] mb-6 shadow-xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Projects Starting From ₹15,000</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#111111] uppercase leading-[1.08] mb-6 max-w-4xl mx-auto">
          LET&apos;S BUILD SOMETHING <br />
          <span className="text-[#16A34A]">THAT GROWS.</span>
        </h1>

        <p className="text-base sm:text-lg text-[#5F6368] max-w-2xl mx-auto leading-relaxed">
          Ready to turn your vision into a scalable digital revenue engine?
          Fill out the briefing form below or connect directly with our co-founders on WhatsApp.
        </p>
      </section>

      {/* Form Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-24">
        <Suspense fallback={<div className="text-center py-12 text-[#5F6368]">Loading form...</div>}>
          <ContactFormInner />
        </Suspense>
      </section>
    </div>
  );
}
