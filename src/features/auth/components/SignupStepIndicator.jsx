import React from 'react';
import { KhandaIcon } from '@/shared/components/SikhMissionSocietyLogo';

export function SignupStepIndicator({ step, steps }) {
  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-display font-black text-white">Create Account</h1>
          <p className="text-brand-white-muted text-sm mt-1">Step {step} of {steps.length} — {steps[step - 1].label} Details</p>
        </div>
        <KhandaIcon className="w-10 h-10 opacity-50" />
      </div>

      {/* Progress bar */}
      <div className="flex gap-2">
        {steps.map((s, i) => (
          <div key={s.label} className="flex-1 h-1 rounded-full overflow-hidden bg-brand-black-border">
            <div
              className="h-full bg-brand-orange transition-all duration-500"
              style={{ width: step > i ? '100%' : step === i + 1 ? '50%' : '0%' }}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-2">
        {steps.map((s, i) => (
          <span key={s.label} className={`text-xs font-medium ${step > i ? 'text-brand-orange' : 'text-brand-white-muted'}`}>
            {s.label}
          </span>
        ))}
      </div>
    </div>
  );
}
