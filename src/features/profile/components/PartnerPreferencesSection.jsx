import React from 'react';
import { Input } from '@/shared/components/Input';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/Card';
import { DEFAULT_PROFILE_DATA } from '../models/profileConstants';

import { useAuth } from '@/features/auth/contexts/AuthContext';

const fields = [
  { key: 'prefAgeMin', label: 'Minimum Age' },
  { key: 'prefAgeMax', label: 'Maximum Age' },
  { key: 'prefHeight', label: 'Preferred Height' },
  { key: 'prefReligion', label: 'Preferred Religion' },
  { key: 'prefEducation', label: 'Preferred Education' },
  { key: 'prefLanguage', label: 'Preferred Language' },
  { key: 'prefIncome', label: 'Preferred Income' },
  { key: 'prefZodiac', label: 'Preferred Zodiac' },
  { key: 'prefGotra', label: 'Preferred Gotra' },
];

/**
 * Partner Preferences form section.
 *
 * @param {{ isEditing: boolean }} props
 */
export function PartnerPreferencesSection({ isEditing }) {
  const { user } = useAuth();
  const data = user || DEFAULT_PROFILE_DATA.partner;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Partner Preferences</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          {fields.map(({ key, label }) => (
            <div key={key}>
              <label className="mb-1 block text-sm font-medium text-brand-white-muted">
                {label}
              </label>
              <Input name={key} defaultValue={data[key]} disabled={!isEditing} />
            </div>
          ))}
        </div>

        {/* Expectations — full width */}
        <div>
          <label className="mb-1 block text-sm font-medium text-brand-white-muted">
            Partner Expectations
          </label>
          <textarea
            className="w-full rounded-lg border border-brand-black-border p-3 text-sm focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange disabled:bg-brand-black-soft"
            rows={4}
            defaultValue={data.partnerExpectations}
            disabled={!isEditing}
          />
        </div>
      </CardContent>
    </Card>
  );
}
