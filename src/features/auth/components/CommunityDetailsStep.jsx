import React from 'react';
import { Input } from '@/shared/components/Input';
import { Select } from '@/shared/components/Select';
import { RELIGION_OPTIONS, COUNTRY_OPTIONS } from '../models/authConstants';

export function CommunityDetailsStep({ register, errors }) {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Select label="Religion" {...register('religion')} error={errors.religion?.message} options={RELIGION_OPTIONS} />
        <Input label="Community / Caste" placeholder="e.g. Jat Sikh, Khatri..." {...register('caste')} error={errors.caste?.message} />
        <Select label="Country" {...register('country')} error={errors.country?.message} options={COUNTRY_OPTIONS} />
        <Input label="State / Province" placeholder="Punjab, Ontario..." {...register('state')} error={errors.state?.message} />
        <div className="sm:col-span-2">
          <Input label="City" placeholder="Amritsar, Brampton..." {...register('city')} error={errors.city?.message} />
        </div>
      </div>
    </div>
  );
}
