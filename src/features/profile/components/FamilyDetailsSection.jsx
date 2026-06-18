import React from 'react';
import { Input } from '@/shared/components/Input';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/Card';
import { DEFAULT_PROFILE_DATA } from '../models/profileConstants';

import { useAuth } from '@/features/auth/contexts/AuthContext';

const fields = [
  { key: 'familyValue', label: 'Family Value' },
  { key: 'familyType', label: 'Family Type' },
  { key: 'fatherOccupation', label: "Father's Occupation" },
  { key: 'motherOccupation', label: "Mother's Occupation" },
  { key: 'familyStatus', label: 'Family Status' },
  { key: 'siblings', label: 'Siblings' },
  { key: 'siblingOccupation', label: "Sibling's Occupation" },
  { key: 'gotra', label: 'Gotra' },
];

/**
 * Family Details form section.
 *
 * @param {{ isEditing: boolean }} props
 */
export function FamilyDetailsSection({ isEditing }) {
  const { user } = useAuth();
  const data = user || DEFAULT_PROFILE_DATA.family;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Family Details</CardTitle>
      </CardHeader>
      <CardContent>
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
      </CardContent>
    </Card>
  );
}
