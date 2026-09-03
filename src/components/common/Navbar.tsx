"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-white/80 backdrop-blur-xl border-b border-black/[0.05] shadow-[0_4px_25px_-4px_rgba(0,0,0,0.05)]"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] rounded-lg p-1"
            aria-label="Growlords - Home"
          >
            <div className="relative w-9 h-9 rounded-xl overflow-hidden bg-white border border-black/[0.08] shadow-sm flex items-center justify-center p-1.5 transition-transform duration-300 group-hover:scale-105 group-hover:border-[#16A34A]/40">
              <Image
                src="/logo.svg"
                alt="Growlords Logo"
                width={32}
                height={32}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-wider text-[#111111] uppercase transition-colors">
                GROWLORDS
              </span>
              <span className="text-[10px] tracking-widest text-[#5F6368] font-mono -mt-1 uppercase">
                Digital Agency
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/70 border border-black/[0.06] shadow-sm rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-1.5 text-sm font-medium transition-all duration-200 rounded-full ${
                    isActive
                      ? "text-[#16A34A] font-semibold bg-[#16A34A]/[0.08]"
                      : "text-[#5F6368] hover:text-[#111111]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="inline-block w-1.5 h-1.5 ml-1.5 rounded-full bg-[#16A34A] align-middle -mt-0.5" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide bg-[#16A34A] text-white shadow-sm hover:bg-[#15803D] hover:shadow transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Start Your Project</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl bg-white border border-black/[0.08] text-[#111111] hover:text-[#16A34A] hover:bg-zinc-50 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl md:hidden flex flex-col justify-between pt-24 pb-8 px-6 transition-all duration-300"
          role="dialog"
          aria-modal="true"
        >
          <nav className="flex flex-col gap-2">
            <p className="text-xs font-mono uppercase tracking-widest text-[#5F6368] mb-2">
              Navigation
            </p>
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-lg font-semibold transition-all ${
                    isActive
                      ? "bg-[#16A34A]/10 text-[#16A34A] border border-[#16A34A]/20"
                      : "text-[#111111] hover:bg-black/[0.03]"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex flex-col gap-4 mt-8 pt-6 border-t border-black/[0.06]">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold bg-[#16A34A] text-white shadow-sm hover:bg-[#15803D]"
            >
              <span>Start Your Project →</span>
            </Link>

            <div className="flex items-center justify-between text-xs text-[#5F6368] font-mono pt-2">
              <span>GROWLORDS AGENCY</span>
              <a
                href="https://instagram.com/growlords"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#16A34A] hover:underline"
              >
                @growlords
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
