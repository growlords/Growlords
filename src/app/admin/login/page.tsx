'use client';

import React, { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Lock, User, ArrowRight, Eye, EyeOff, ArrowLeft, ShieldCheck, AlertCircle } from 'lucide-react';

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/admin';

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        router.push(callbackUrl);
        router.refresh();
      } else {
        setErrorMessage(data.error || 'Invalid credentials. Please verify your login details.');
      }
    } catch (err: any) {
      setErrorMessage(err?.message || 'Network error during login attempt.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md bg-[#0A0A0C] border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-xl">
      {/* Top Brand & Badge */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-[#111114] mb-4">
          <ShieldCheck className="w-3.5 h-3.5 text-[#B7FF3C]" />
          <span className="text-[10px] font-mono tracking-widest uppercase text-white/80">
            GROWLORDS STUDIO
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight font-heading text-white">
          CMS <span className="text-[#B7FF3C]">AUTHENTICATION</span>
        </h1>

        <p className="text-xs text-white/60 font-light mt-1.5">
          Enter your administrative credentials to access the live content management console.
        </p>
      </div>

      {/* Error Banner */}
      {errorMessage && (
        <div className="mb-6 p-3.5 rounded-xl border border-red-500/40 bg-red-500/10 text-red-400 text-xs font-mono flex items-center gap-2.5 animate-in fade-in duration-200">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-[#B7FF3C] mb-1.5">
            Username / Identifier
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/40">
              <User className="w-4 h-4" />
            </div>
            <input
              type="text"
              required
              autoFocus
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="admin"
              className="w-full bg-[#111114] border border-white/10 focus:border-[#B7FF3C] text-white text-sm rounded-xl pl-10 pr-4 py-3 placeholder:text-white/20 focus:outline-none transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-[#B7FF3C] mb-1.5">
            Admin Security Key
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/40">
              <Lock className="w-4 h-4" />
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              required
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              className="w-full bg-[#111114] border border-white/10 focus:border-[#B7FF3C] text-white text-sm rounded-xl pl-10 pr-11 py-3 placeholder:text-white/20 focus:outline-none transition-colors"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-white/40 hover:text-white transition-colors"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        <div className="pt-3">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 rounded-xl bg-[#B7FF3C] hover:bg-[#D7FF7A] text-[#050505] font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_0_25px_rgba(183,255,60,0.3)] disabled:opacity-50"
          >
            <span>{isLoading ? 'Verifying Credentials...' : 'Authenticate & Enter Studio'}</span>
            {!isLoading && <ArrowRight className="w-4 h-4" />}
          </button>
        </div>
      </form>

      {/* Security Notice */}
      <div className="mt-8 pt-6 border-t border-white/10 text-center">
        <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
          PROTECTED BY END-TO-END CRYPTOGRAPHIC SESSION TOKENS
        </p>
      </div>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen w-full bg-[#050505] text-white flex flex-col justify-between selection:bg-[#B7FF3C] selection:text-[#050505] relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-[#B7FF3C]/5 blur-[180px] pointer-events-none rounded-full" />

      {/* Top Header */}
      <header className="p-6 sm:p-8 flex items-center justify-between relative z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-white/60 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Website</span>
        </Link>

        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#B7FF3C] animate-pulse" />
          <span className="text-[11px] font-mono text-white/40 uppercase tracking-widest">
            SECURE ACCESS GATEWAY
          </span>
        </div>
      </header>

      {/* Center Auth Card with Suspense */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 relative z-10">
        <Suspense fallback={
          <div className="p-8 rounded-2xl bg-[#0A0A0C] border border-white/10 text-center font-mono text-xs text-white/60">
            Loading Security Gateway...
          </div>
        }>
          <LoginForm />
        </Suspense>
      </main>

      {/* Footer */}
      <footer className="p-6 text-center text-xs font-mono text-white/30 relative z-10">
        © {new Date().getFullYear()} Growlords Administrative Infrastructure
      </footer>
    </div>
  );
}
