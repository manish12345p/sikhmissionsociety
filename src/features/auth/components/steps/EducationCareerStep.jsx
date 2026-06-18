import React from 'react';
import { GraduationCap, Briefcase, Banknote, ArrowLeft } from 'lucide-react';
import { Input } from '@/shared/components/Input';
import { Select } from '@/shared/components/Select';
import { Button } from '@/shared/components/Button';
import { AUTH_STRINGS } from '@/core/strings';
import { EDUCATION_OPTIONS, INCOME_OPTIONS } from '../../models/authConstants';
import styles from '../../styles/steps/EducationCareerStep.module.css';

export const EducationCareerStep = ({ register, errors, nextStep, prevStep, skipStep }) => {
  const s = AUTH_STRINGS.signup.step3;
  const n = AUTH_STRINGS.navigation;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.stepTag}>REGISTRATION</h3>
        <h2 className={styles.title}>{s.title}</h2>
      </div>

      <div className={styles.content}>
        
        {/* Academic Background Section */}
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <GraduationCap className={styles.sectionIcon} />
            <h4 className={styles.sectionTitle}>
              {s.academic}
            </h4>
          </div>
          
          <div className={styles.twoCol}>
            <Select
              label={s.fields.qualification.label}
              options={EDUCATION_OPTIONS}
              error={errors.highestQualification?.message}
              {...register('highestQualification')}
            />
            <Input
              label={s.fields.college.label}
              placeholder={s.fields.college.placeholder}
              error={errors.college?.message}
              {...register('college')}
            />
          </div>
        </div>

        <div className={styles.divider} />

        {/* Professional Details Section */}
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <Briefcase className={styles.sectionIcon} />
            <h4 className={styles.sectionTitle}>
              {s.professional}
            </h4>
          </div>

          <div className={styles.twoCol}>
            <Input
              label={s.fields.profession.label}
              placeholder={s.fields.profession.placeholder}
              error={errors.profession?.message}
              {...register('profession')}
            />
            <Input
              label={s.fields.employer.label}
              placeholder={s.fields.employer.placeholder}
              error={errors.employer?.message}
              {...register('employer')}
            />
          </div>

          <div className={styles.twoCol}>
            <div>
              <Select
                label={s.fields.income.label}
                options={INCOME_OPTIONS}
                error={errors.incomeRange?.message}
                icon={Banknote}
                {...register('incomeRange')}
              />
            </div>
            <Input
              label={s.fields.location.label}
              placeholder={s.fields.location.placeholder}
              error={errors.workLocation?.message}
              {...register('workLocation')}
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>
              {s.fields.aspirations.label}
            </label>
            <textarea
              className={styles.textarea}
              placeholder={s.fields.aspirations.placeholder}
              {...register('careerAspirations')}
            />
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <button type="button" onClick={prevStep} className={styles.backBtn}>
          <ArrowLeft className={styles.backIcon} /> {n.back}
        </button>
        <div className={styles.actionGroup}>
          <button type="button" onClick={skipStep} className={styles.skipBtn}>
            {n.skipForNow}
          </button>
          <Button type="button" onClick={nextStep} className={styles.submitBtn}>
            {n.continue}
          </Button>
        </div>
      </div>
    </div>
  );
};
