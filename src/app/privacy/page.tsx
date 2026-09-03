import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#FAFBF9]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 text-[#333333] leading-relaxed">
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono text-[#16A34A] mb-8 font-semibold">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
        </Link>
        <h1 className="text-3xl sm:text-5xl font-black text-[#111111] uppercase tracking-tight mb-6">
          PRIVACY POLICY
        </h1>
        <p className="text-sm font-mono text-[#5F6368] mb-8">Effective Date: January 1, 2026</p>
        <div className="space-y-6 text-sm sm:text-base">
          <p>
            At Growlords ("we", "our", or "us"), founded by Raman Kamboj and Jatin Kamboj, we respect your privacy and are committed to protecting any personal information you share with us through our website.
          </p>
          <h2 className="text-xl font-bold text-[#111111] pt-4">1. Information We Collect</h2>
          <p>
            When you submit an enquiry on our Contact page or request project consultation, we collect your name, email address, phone number, company name, service requirements, and project specifications.
          </p>
          <h2 className="text-xl font-bold text-[#111111] pt-4">2. How We Use Your Information</h2>
          <p>
            We use this data exclusively to evaluate your project requirements, communicate proposals, formulate digital marketing strategies, and deliver requested agency services. We never sell, rent, or trade your data to third parties.
          </p>
          <h2 className="text-xl font-bold text-[#111111] pt-4">3. Security &amp; Contact</h2>
          <p>
            All inquiries are transmitted via secure HTTPS protocols. For any inquiries regarding your data, contact us at:{" "}
            <a href="mailto:growlords@gmail.com" className="text-[#16A34A] underline font-medium">
              growlords@gmail.com
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}
