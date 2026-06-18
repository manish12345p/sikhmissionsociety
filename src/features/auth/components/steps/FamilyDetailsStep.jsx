import React from 'react';
import { ArrowLeft, ShieldCheck, Users, Lock } from 'lucide-react';
import { Input } from '@/shared/components/Input';
import { Select } from '@/shared/components/Select';
import { Button } from '@/shared/components/Button';
import { AUTH_STRINGS } from '@/core/strings';
import { FAMILY_VALUE_OPTIONS, FAMILY_TYPE_OPTIONS, FAMILY_STATUS_OPTIONS } from '../../models/authConstants';
import styles from '../../styles/steps/FamilyDetailsStep.module.css';

export const FamilyDetailsStep = ({ register, errors, nextStep, prevStep, skipStep }) => {
  const s = AUTH_STRINGS.signup.step4;
  const n = AUTH_STRINGS.navigation;
  const t = AUTH_STRINGS.trustBadges;

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{s.title}</h2>
          <p className={styles.subtitle}>{s.subtitle}</p>
        </div>

        <div className={styles.formGrid}>
          <div className={styles.twoCol}>
            <Select
              label={s.fields.familyValue.label}
              options={FAMILY_VALUE_OPTIONS}
              error={errors.familyValue?.message}
              {...register('familyValue')}
            />
            <Select
              label={s.fields.familyType.label}
              options={FAMILY_TYPE_OPTIONS}
              error={errors.familyType?.message}
              {...register('familyType')}
            />
          </div>

          <div className={styles.twoCol}>
            <Input
              label={s.fields.fatherOcc.label}
              placeholder={s.fields.fatherOcc.placeholder}
              {...register('fatherOccupation')}
            />
            <Input
              label={s.fields.motherOcc.label}
              placeholder={s.fields.motherOcc.placeholder}
              {...register('motherOccupation')}
            />
          </div>

          <div className={styles.twoCol}>
            <Select
              label={s.fields.familyStatus.label}
              options={FAMILY_STATUS_OPTIONS}
              error={errors.familyStatus?.message}
              {...register('familyStatus')}
            />
            <Input
              label={s.fields.siblings.label}
              placeholder={s.fields.siblings.placeholder}
              {...register('siblings')}
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>
              {s.fields.siblingOcc.label}
            </label>
            <textarea
              className={styles.textarea}
              placeholder={s.fields.siblingOcc.placeholder}
              {...register('siblingOccupation')}
            />
          </div>
        </div>

        <div className={styles.footer}>
          <button type="button" onClick={prevStep} className={styles.backBtn}>
            <ArrowLeft className={styles.backIcon} /> {n.back}
          </button>
          <div className={styles.actionGroup}>
            <button type="button" onClick={skipStep} className={styles.skipBtn}>
              {n.skip}
            </button>
            <Button type="button" onClick={nextStep} className={styles.submitBtn}>
              {n.saveAndContinue} →
            </Button>
          </div>
        </div>
      </div>

      <div className={styles.badgesContainer}>
        <div className={styles.badge}>
          <div className={styles.badgeIconBox}>
            <ShieldCheck className={styles.badgeIcon} />
          </div>
          <span className={styles.badgeText}>{t.privacy}</span>
        </div>
        <div className={styles.badge}>
          <div className={styles.badgeIconBox}>
            <Users className={styles.badgeIcon} />
          </div>
          <span className={styles.badgeText}>{t.verified}</span>
        </div>
        <div className={styles.badge}>
          <div className={styles.badgeIconBox}>
            <Lock className={styles.badgeIcon} />
          </div>
          <span className={styles.badgeText}>{t.secure}</span>
        </div>
      </div>
    </div>
  );
};
