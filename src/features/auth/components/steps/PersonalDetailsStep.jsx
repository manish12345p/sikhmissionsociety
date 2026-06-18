import React from 'react';
import { Camera, Paperclip } from 'lucide-react';
import { Input } from '@/shared/components/Input';
import { Select } from '@/shared/components/Select';
import { Button } from '@/shared/components/Button';
import { AUTH_STRINGS } from '@/core/strings';
import { 
  BODY_TYPE_OPTIONS, COMPLEXION_OPTIONS, PHYSICAL_STATUS_OPTIONS, 
  BLOOD_GROUP_OPTIONS, MARITAL_STATUS_OPTIONS, ZODIAC_OPTIONS 
} from '../../models/authConstants';
import styles from '../../styles/steps/PersonalDetailsStep.module.css';

export const PersonalDetailsStep = ({ register, errors, nextStep, prevStep, skipStep }) => {
  const s = AUTH_STRINGS.signup.step2;
  const n = AUTH_STRINGS.navigation;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>{s.title}</h2>
        <p className={styles.subtitle}>{s.subtitle}</p>
      </div>

      <div className={styles.formGrid}>
        <div className={styles.twoCol}>
          <Input
            label={s.fields.height.label}
            placeholder={s.fields.height.placeholder}
            error={errors.height?.message}
            {...register('height')}
          />
          <Input
            label={s.fields.weight.label}
            placeholder={s.fields.weight.placeholder}
            error={errors.weight?.message}
            {...register('weight')}
          />
        </div>

        <div className={styles.twoCol}>
          <Select
            label={s.fields.bodyType.label}
            options={BODY_TYPE_OPTIONS}
            error={errors.bodyType?.message}
            {...register('bodyType')}
          />
          <Select
            label={s.fields.complexion.label}
            options={COMPLEXION_OPTIONS}
            error={errors.complexion?.message}
            {...register('complexion')}
          />
        </div>

        <div className={styles.twoCol}>
          <div className="flex items-end gap-3 w-full">
            <div className="flex-1">
              <Select
                label={s.fields.physicalStatus.label}
                options={PHYSICAL_STATUS_OPTIONS}
                error={errors.physicalStatus?.message}
                {...register('physicalStatus')}
              />
            </div>
            <div className={styles.paperclipIcon}>
               <Paperclip className="w-5 h-5 text-brand-orange" />
            </div>
          </div>
          <Select
            label={s.fields.bloodGroup.label}
            options={BLOOD_GROUP_OPTIONS}
            error={errors.bloodGroup?.message}
            {...register('bloodGroup')}
          />
        </div>

        <div className={styles.twoCol}>
          <Select
            label={s.fields.maritalStatus.label}
            options={MARITAL_STATUS_OPTIONS}
            error={errors.maritalStatus?.message}
            {...register('maritalStatus')}
          />
          <Select
            label={s.fields.zodiac.label}
            options={ZODIAC_OPTIONS}
            error={errors.zodiacPersonal?.message}
            {...register('zodiacPersonal')}
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>
            {s.fields.profileImage.label}
          </label>
          <div className={`${styles.imageUploadBox} group`}>
             <Camera className={styles.uploadIcon} />
             <p className={styles.uploadText}>
               {s.clickToUpload}
             </p>
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>
            {s.fields.aboutMe.label}
          </label>
          <textarea
            className={styles.textarea}
            placeholder={s.fields.aboutMe.placeholder}
            {...register('aboutMe')}
          />
        </div>
      </div>

      <div className={styles.footer}>
        <button type="button" onClick={prevStep} className={styles.backBtn}>
          {n.back}
        </button>
        <div className={styles.actionGroup}>
          <button type="button" onClick={skipStep} className={styles.skipBtn}>
            {n.skip}
          </button>
          <Button type="button" onClick={nextStep} className={styles.submitBtn}>
            {n.saveAndContinue}
          </Button>
        </div>
      </div>
    </div>
  );
};
