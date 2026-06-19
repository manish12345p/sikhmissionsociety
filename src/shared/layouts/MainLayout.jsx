import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/shared/components/Button';
import { SikhMissionSocietyLogo } from '@/shared/components/SikhMissionSocietyLogo';
import { cn } from '@/core/utils';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Find Match', href: '/search' },
  { label: 'Success Stories', href: '/stories' },
  { label: 'About', href: '/about' },
];

export function MainLayout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex flex-col bg-brand-black">
      
      {/* ──── HEADER ──── */}
      <header className="sticky top-0 z-50 border-b border-brand-black-border"
        style={{ background: 'rgba(10,10,10,0.95)', backdropFilter: 'blur(20px)' }}
      >
        {/* Orange top accent line */}
        <div className="h-0.5 w-full bg-brand-gradient" />

        <div className="container-custom h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <SikhMissionSocietyLogo size="default" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "text-brand-orange bg-brand-orange/10"
                    : "text-brand-white-muted hover:text-brand-white hover:bg-brand-black-card"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm font-medium text-brand-white-muted hover:text-brand-white transition-colors px-4 py-2"
            >
              Log in
            </Link>
            <Link href="/signup">
              <Button size="sm" className="px-6">
                Join Free
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-brand-white-muted hover:text-brand-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-brand-black-border bg-brand-black-soft px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "block px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "text-brand-orange bg-brand-orange/10"
                    : "text-brand-white-muted hover:text-brand-white hover:bg-brand-black-card"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 flex gap-3">
              <Link href="/login" className="flex-1">
                <Button variant="secondary" className="w-full">Log in</Button>
              </Link>
              <Link href="/signup" className="flex-1">
                <Button className="w-full">Join Free</Button>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* ──── MAIN ──── */}
      <main className="flex-1 flex flex-col">
        {children}
      </main>

      {/* ──── FOOTER ──── */}
      <footer className="bg-brand-black-soft border-t border-brand-black-border">
        <div className="container-custom py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
          
          <div className="md:col-span-2">
            <SikhMissionSocietyLogo size="lg" />
            <p className="mt-4 text-brand-white-muted text-sm leading-relaxed max-w-xs">
              A faith-driven matrimonial platform for the Sikh community — connecting hearts, honouring traditions.
            </p>
            <div className="mt-6 flex gap-3">
              {['FB', 'TW', 'IG', 'YT'].map((s) => (
                <div key={s}
                  className="w-10 h-10 rounded-full border border-brand-black-border bg-brand-black-card flex items-center justify-center text-xs font-bold text-brand-white-muted hover:border-brand-orange hover:text-brand-orange cursor-pointer transition-colors"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-brand-white mb-5 text-sm uppercase tracking-widest">Platform</h4>
            <ul className="space-y-3 text-sm text-brand-white-muted">
              {['Find a Match', 'Success Stories', 'Premium Plans', 'How it Works'].map(l => (
                <li key={l}><a href="#" className="hover:text-brand-orange transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-brand-white mb-5 text-sm uppercase tracking-widest">Legal</h4>
            <ul className="space-y-3 text-sm text-brand-white-muted">
              {['Privacy Policy', 'Terms of Service', 'Safety Tips', 'Contact Us'].map(l => (
                <li key={l}><a href="#" className="hover:text-brand-orange transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-black-border py-6">
          <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-brand-white-muted text-xs">
              © {new Date().getFullYear()} Sikh Mission Society. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
              <span className="text-brand-white-muted text-xs">Active & Secure Platform</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
