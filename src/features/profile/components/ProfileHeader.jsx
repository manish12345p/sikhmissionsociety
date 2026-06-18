import React from 'react';
import { Camera, Star } from 'lucide-react';
import { Button } from '@/shared/components/Button';
import { KhandaIcon } from '@/shared/components/SikhMissionSocietyLogo';
import { cn } from '@/core/utils';
import { DEFAULT_PROFILE_DATA } from '../models/profileConstants';
import { useAuth } from '@/features/auth/contexts/AuthContext';

const getAge = (dob) => {
  if (!dob) return null;
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

const getMemberSince = (createdAt) => {
  if (!createdAt) return null;
  const date = new Date(createdAt);
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
};

/**
 * Profile banner — avatar, name, badges, and completion progress bar.
 *
 * @param {{ user?: object, onUpgrade?: () => void }} props
 */
export function ProfileHeader({ user: propUser, onUpgrade }) {
  const { user: authUser } = useAuth();
  const currentUser = authUser || {};
  
  const user = { 
    ...DEFAULT_PROFILE_DATA, 
    ...propUser, 
    displayName: currentUser.displayName || DEFAULT_PROFILE_DATA.displayName, 
    age: getAge(currentUser.dob) || DEFAULT_PROFILE_DATA.age,
    location: currentUser.location || DEFAULT_PROFILE_DATA.location,
    memberSince: getMemberSince(currentUser.createdAt) || DEFAULT_PROFILE_DATA.memberSince
  };
  const completionPercent = user.profileCompletion ?? 0;

  return (
    <div className="relative rounded-2xl bg-gradient-to-r from-brand-orange to-[#cc5200] p-6 text-white shadow-lg">
      {/* ── Avatar ── */}
      <div className="flex items-center gap-6">
        <div className="relative">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-brand-black-card/20 ring-4 ring-white/40">
            <KhandaIcon className="h-12 w-12 text-white" />
          </div>
          <button
            type="button"
            className="absolute bottom-0 right-0 rounded-full bg-brand-black-card p-1.5 text-brand-orange shadow-md hover:bg-brand-orange/10"
            aria-label="Change profile photo"
          >
            <Camera className="h-4 w-4" />
          </button>
        </div>

        {/* ── Name & meta ── */}
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold">{user.displayName}</h1>
            {user.badge && (
              <span className="flex items-center gap-1 rounded-full bg-brand-black-card/20 px-3 py-1 text-xs font-semibold">
                <Star className="h-3 w-3" /> {user.badge}
              </span>
            )}
          </div>
          <p className="mt-1 text-sm text-white/80">
            {user.age} yrs • {user.location} • Member since {user.memberSince}
          </p>
        </div>

        {/* ── Upgrade CTA ── */}
        {onUpgrade && (
          <Button
            variant="secondary"
            className="hidden sm:inline-flex"
            onClick={onUpgrade}
          >
            Upgrade Plan
          </Button>
        )}
      </div>

      {/* ── Completion bar ── */}
      <div className="mt-5">
        <div className="mb-1 flex items-center justify-between text-xs text-white/80">
          <span>Profile Completion</span>
          <span>{completionPercent}%</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-brand-black-card/20">
          <div
            className={cn(
              'h-full rounded-full bg-brand-black-card transition-all duration-500',
            )}
            style={{ width: `${completionPercent}%` }}
          />
        </div>
      </div>
    </div>
  );
}
