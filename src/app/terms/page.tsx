import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#FAFBF9]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 text-[#333333] leading-relaxed">
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono text-[#16A34A] mb-8 font-semibold">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
        </Link>
        <h1 className="text-3xl sm:text-5xl font-black text-[#111111] uppercase tracking-tight mb-6">
          TERMS OF SERVICE
        </h1>
        <p className="text-sm font-mono text-[#5F6368] mb-8">Effective Date: January 1, 2026</p>
        <div className="space-y-6 text-sm sm:text-base">
          <p>
            Welcome to Growlords. By accessing our website or engaging our digital marketing, web engineering, and creative services, you agree to comply with and be bound by the following terms.
          </p>
          <h2 className="text-xl font-bold text-[#111111] pt-4">1. Scope of Services</h2>
          <p>
            Growlords delivers digital marketing, website development, SEO, advertising, and creative assets. Projects start from ₹15,000 as outlined in individual statements of work or project agreements.
          </p>
          <h2 className="text-xl font-bold text-[#111111] pt-4">2. Intellectual Property</h2>
          <p>
            Upon complete payment of agreed milestones, all bespoke website code, visual creative assets, and marketing materials engineered for the client become the intellectual property of the client, unless specified otherwise in custom software licensing.
          </p>
          <h2 className="text-xl font-bold text-[#111111] pt-4">3. Governing Law &amp; Inquiries</h2>
          <p>
            These terms are governed by the laws of India. For any questions, contact our executive team at:{" "}
            <a href="mailto:growlords2026@gmail.com" className="text-[#16A34A] underline font-medium">
              growlords2026@gmail.com
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}
