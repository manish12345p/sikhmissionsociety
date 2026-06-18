import React from 'react';
import { Input } from '@/shared/components/Input';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/Card';
import { DEFAULT_PROFILE_DATA } from '../models/profileConstants';

import { useAuth } from '@/features/auth/contexts/AuthContext';

const fields = [
  { key: 'highestQualification', label: 'Highest Qualification' },
  { key: 'college', label: 'University / College' },
  { key: 'profession', label: 'Occupation' },
  { key: 'employer', label: 'Employer' },
  { key: 'incomeRange', label: 'Annual Income' },
  { key: 'workLocation', label: 'Work Location' },
  { key: 'careerAspirations', label: 'Career Aspirations' },
];

/**
 * Education & Career form section.
 *
 * @param {{ isEditing: boolean }} props
 */
export function EducationCareerSection({ isEditing }) {
  const { user } = useAuth();
  const data = user || DEFAULT_PROFILE_DATA.education;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Education &amp; Career</CardTitle>
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
