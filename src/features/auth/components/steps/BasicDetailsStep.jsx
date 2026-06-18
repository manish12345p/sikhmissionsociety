import React from 'react';
import { Mail, CheckCircle2, Calendar } from 'lucide-react';
import { Input } from '@/shared/components/Input';
import { Select } from '@/shared/components/Select';
import { Button } from '@/shared/components/Button';
import { AUTH_STRINGS } from '@/core/strings';
import { GENDER_OPTIONS } from '../../models/authConstants';
import styles from '../../styles/steps/BasicDetailsStep.module.css';

export const BasicDetailsStep = ({ register, errors, nextStep, prevStep }) => {
  const s = AUTH_STRINGS.signup.step1;
  const n = AUTH_STRINGS.navigation;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>{s.title}</h2>
        <p className={styles.subtitle}>{s.subtitle}</p>
      </div>

      <div className={styles.formGrid}>
        <Input
          label={s.fields.name.label}
          placeholder={s.fields.name.placeholder}
          error={errors.fullName?.message}
          {...register('fullName')}
        />

        <div className={styles.inputGroup}>
          <label className={styles.label}>
            {s.fields.address.label}
          </label>
          <textarea
            className={styles.textarea}
            placeholder={s.fields.address.placeholder}
            {...register('location')}
          />
          {errors.location && <p className={styles.errorText}>{errors.location.message}</p>}
        </div>

        <div className={styles.twoCol}>
          <div>
            <Input
              label={s.fields.phone.label}
              placeholder={s.fields.phone.placeholder}
              error={errors.mobile?.message}
              icon={CheckCircle2}
              {...register('mobile')}
            />
          </div>
          <div>
            <Input
              label={s.fields.email.label}
              placeholder={s.fields.email.placeholder}
              type="email"
              error={errors.email?.message}
              icon={Mail}
              {...register('email')}
            />
          </div>
        </div>

        <div className={styles.twoCol}>
          <div>
            <Input
              label={s.fields.password.label}
              placeholder={s.fields.password.placeholder}
              type="password"
              error={errors.password?.message}
              {...register('password')}
            />
          </div>
          <div>
            <Input
              label={s.fields.confirmPassword.label}
              placeholder={s.fields.confirmPassword.placeholder}
              type="password"
              error={errors.confirmPassword?.message}
              {...register('confirmPassword')}
            />
          </div>
        </div>

        <div className={styles.twoCol}>
          <div>
            <Input
              label={s.fields.dob.label}
              placeholder={s.fields.dob.placeholder}
              type="date"
              error={errors.dob?.message}
              icon={Calendar}
              {...register('dob')}
            />
          </div>
          <div>
            <Select
              label={s.fields.gender.label}
              options={GENDER_OPTIONS}
              error={errors.gender?.message}
              {...register('gender')}
            />
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <button type="button" onClick={prevStep} className={styles.backBtn}>
          {n.back}
        </button>
        <Button type="button" onClick={nextStep} className={styles.submitBtn}>
          {n.saveAndContinue} →
        </Button>
      </div>
    </div>
  );
};
