import React from 'react';
import { CheckCircle } from 'lucide-react';
import { KhandaIcon } from '@/shared/components/SikhMissionSocietyLogo';

export function SignupSidebar() {
  return (
    <div className="hidden lg:flex lg:w-5/12 relative flex-col justify-center items-center p-12 overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at center, #1A0A00 0%, #0A0A0A 100%)' }}
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <KhandaIcon className="w-[400px] h-[400px] opacity-10 animate-float" />
      </div>
      <div className="relative z-10 text-center">
        <KhandaIcon className="w-24 h-24 mx-auto mb-8 animate-float" />
        <h2 className="text-4xl font-display font-black text-white mb-4 leading-tight">
          Begin Your<br /><span className="text-gradient-orange">Sacred Journey</span>
        </h2>
        <p className="text-brand-white-muted leading-relaxed max-w-xs mx-auto">
          Join 50,000+ Sikh singles from across the world finding meaningful, faith-driven partnerships.
        </p>

        <div className="mt-10 space-y-4 text-left inline-block">
          {[
            '100% Verified Profiles',
            'Privacy-First Approach',
            'Community-Aligned Matching',
            'Global Reach, Local Roots',
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-brand-orange/20 border border-brand-orange/40 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-3 h-3 text-brand-orange" />
              </div>
              <span className="text-sm text-brand-white-muted">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
