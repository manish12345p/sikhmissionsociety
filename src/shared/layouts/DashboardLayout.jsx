import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, User, Settings, LogOut, ChevronDown } from 'lucide-react';
import { SikhMissionSocietyLogo, KhandaIcon } from '@/shared/components/SikhMissionSocietyLogo';
import { cn } from '@/core/utils';
import { useAuth } from '@/features/auth/contexts/AuthContext';

export function DashboardLayout({ children }) {
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { user } = useAuth();

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfileDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-brand-black">
      
      {/* ──── HEADER ──── */}
      <header className="sticky top-0 z-50 border-b border-brand-black-border bg-brand-black shadow-sm">
        {/* Orange top accent line */}
        <div className="h-0.5 w-full bg-brand-gradient" />

        <div className="px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          <div className="flex items-center gap-4">
            {/* Logo */}
            <Link href="/dashboard" className="flex-shrink-0">
              <SikhMissionSocietyLogo size="sm" />
            </Link>
          </div>

          <div className="flex items-center gap-4">
            
            {/* Profile Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                className="flex items-center gap-2 rounded-full p-1 hover:bg-brand-black-card transition-colors focus:outline-none"
              >
                <div className="w-9 h-9 rounded-full bg-brand-black-card border border-brand-black-border flex items-center justify-center overflow-hidden">
                   <KhandaIcon className="w-5 h-5 text-brand-orange" />
                </div>
                <ChevronDown className="w-4 h-4 text-brand-white-muted" />
              </button>

              {profileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-xl bg-brand-black border border-brand-black-border shadow-xl py-1 z-50 overflow-hidden">
                  <div className="px-4 py-3 border-b border-brand-black-border">
                    <p className="text-sm font-medium text-brand-white">{user?.displayName || 'User'}</p>
                    <p className="text-xs text-brand-white-muted truncate">{user?.email || 'user@example.com'}</p>
                  </div>
                  
                  <div className="py-1">
                    <Link 
                      href="/dashboard/profile" 
                      onClick={() => setProfileDropdownOpen(false)}
                      className="flex items-center gap-2 px-4 py-2 text-sm text-brand-white-muted hover:bg-brand-black-card hover:text-brand-white transition-colors"
                    >
                      <User className="w-4 h-4" />
                      Edit Profile
                    </Link>
                    <Link 
                      href="/dashboard" 
                      onClick={() => setProfileDropdownOpen(false)}
                      className="flex items-center gap-2 px-4 py-2 text-sm text-brand-white-muted hover:bg-brand-black-card hover:text-brand-white transition-colors"
                    >
                      <Settings className="w-4 h-4" />
                      Account Settings
                    </Link>
                  </div>
                  
                  <div className="py-1 border-t border-brand-black-border">
                    <button 
                      onClick={() => {
                        import('@/features/auth/services/authService').then(({ logoutUser }) => {
                          logoutUser().then(() => window.location.href = '/');
                        });
                      }}
                      className="flex w-full items-center gap-2 px-4 py-2 text-sm text-red-500 hover:bg-brand-black-card transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      Sign out
                    </button>
                  </div>
                </div>
              )}
            </div>
            
          </div>
        </div>
      </header>

      {/* ──── MAIN CONTENT ──── */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
      
    </div>
  );
}
