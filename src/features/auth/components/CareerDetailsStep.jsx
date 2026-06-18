import React from 'react';
import { Input } from '@/shared/components/Input';
import { Select } from '@/shared/components/Select';
import { EDUCATION_OPTIONS, INCOME_OPTIONS } from '../models/authConstants';

export function CareerDetailsStep({ register, errors }) {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Select label="Highest Education" {...register('education')} error={errors.education?.message} options={EDUCATION_OPTIONS} />
        <Input label="Occupation" placeholder="e.g. Software Engineer" {...register('occupation')} error={errors.occupation?.message} />
        <div className="sm:col-span-2">
          <Select label="Annual Income" {...register('income')} error={errors.income?.message} options={INCOME_OPTIONS} />
        </div>
        <Input type="password" label="Password" placeholder="Min. 8 characters" {...register('password')} error={errors.password?.message} />
        <Input type="password" label="Confirm Password" placeholder="Re-enter password" {...register('confirmPassword')} error={errors.confirmPassword?.message} />
      </div>
    </div>
  );
}
