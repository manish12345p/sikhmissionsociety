import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/Card';
import { PRIVACY_SETTINGS, DEFAULT_PROFILE_DATA } from '../models/profileConstants';

import { useAuth } from '@/features/auth/contexts/AuthContext';

/**
 * Privacy & Security toggle section.
 *
 * @param {{ isEditing: boolean }} props
 */
export function PrivacySection({ isEditing }) {
  const { user } = useAuth();
  const data = user || DEFAULT_PROFILE_DATA.privacy;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Privacy &amp; Security</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="divide-y divide-brand-black-border">
          {PRIVACY_SETTINGS.map(({ id, label, description }) => (
            <li key={id} className="flex items-center justify-between py-4">
              <div>
                <p className="text-sm font-medium text-white">{label}</p>
                <p className="text-xs text-brand-white-muted">{description}</p>
              </div>
              <label className="relative inline-flex cursor-pointer items-center">
                <input
                  type="checkbox"
                  name={id}
                  className="peer sr-only"
                  defaultChecked={data[id]}
                  disabled={!isEditing}
                />
                <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-brand-black-border after:bg-brand-black-card after:transition-all after:content-[''] peer-checked:bg-brand-orange/100 peer-checked:after:translate-x-full peer-checked:after:border-white peer-disabled:opacity-50" />
              </label>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
