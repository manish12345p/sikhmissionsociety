import React from 'react';
import { Input } from '@/shared/components/Input';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/Card';
import { DEFAULT_PROFILE_DATA } from '../models/profileConstants';

import { useAuth } from '@/features/auth/contexts/AuthContext';

const fields = [
  { key: 'firstName', label: 'First Name' },
  { key: 'lastName', label: 'Last Name' },
  { key: 'dob', label: 'Date of Birth', type: 'date' },
  { key: 'gender', label: 'Gender' },
  { key: 'height', label: 'Height' },
  { key: 'maritalStatus', label: 'Marital Status' },
  { key: 'language', label: 'Mother Tongue' },
  { key: 'city', label: 'City' },
  { key: 'state', label: 'State' },
  { key: 'country', label: 'Country' },
];

/**
 * Personal Details form section.
 *
 * @param {{ isEditing: boolean }} props
 */
export function PersonalDetailsSection({ isEditing }) {
  const { user } = useAuth();
  const data = user || DEFAULT_PROFILE_DATA.personal;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Personal Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          {fields.map(({ key, label, type }) => (
            <div key={key}>
              <label className="mb-1 block text-sm font-medium text-brand-white-muted">
                {label}
              </label>
              <Input
                name={key}
                type={type ?? 'text'}
                defaultValue={
                  key === 'firstName' && data.fullName ? data.fullName.split(' ')[0] :
                  key === 'lastName' && data.fullName ? data.fullName.split(' ').slice(1).join(' ') :
                  data[key] || ''
                }
                disabled={!isEditing}
              />
            </div>
          ))}
        </div>

        {/* About Me — full width */}
        <div>
          <label className="mb-1 block text-sm font-medium text-brand-white-muted">
            About Me
          </label>
          <textarea
            name="aboutMe"
            className="w-full rounded-lg border border-brand-black-border p-3 text-sm focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange disabled:bg-brand-black-soft"
            rows={4}
            defaultValue={data.aboutMe}
            disabled={!isEditing}
          />
        </div>
      </CardContent>
    </Card>
  );
}
