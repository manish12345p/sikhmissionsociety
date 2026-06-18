import React from 'react';
import { Input } from '@/shared/components/Input';
import { Select } from '@/shared/components/Select';
import { GENDER_OPTIONS } from '../models/authConstants';

export function PersonalDetailsStep({ register, errors }) {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <Input label="Full Name" placeholder="Gurpreet Singh" {...register('fullName')} error={errors.fullName?.message} />
        </div>
        <Select label="Gender" {...register('gender')} error={errors.gender?.message} options={GENDER_OPTIONS} />
        <Input type="date" label="Date of Birth" {...register('dob')} error={errors.dob?.message} />
        <Input type="tel" label="Mobile Number" placeholder="+91 98765 43210" {...register('mobile')} error={errors.mobile?.message} />
        <Input type="email" label="Email Address" placeholder="you@email.com" {...register('email')} error={errors.email?.message} />
      </div>
    </div>
  );
}
