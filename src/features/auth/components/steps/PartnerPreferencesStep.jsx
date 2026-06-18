import React from 'react';
import { Info, UserSearch, CheckCircle2, AlertCircle } from 'lucide-react';
import { Input } from '@/shared/components/Input';
import { Select } from '@/shared/components/Select';
import { Button } from '@/shared/components/Button';
import { AUTH_STRINGS } from '@/core/strings';
import { 
  AGE_RANGE_OPTIONS, HEIGHT_RANGE_OPTIONS, RELIGION_OPTIONS, 
  EDUCATION_OPTIONS, LANGUAGE_OPTIONS, INCOME_OPTIONS 
} from '../../models/authConstants';
import styles from '../../styles/steps/PartnerPreferencesStep.module.css';

import woman1 from '@/assets/images/profiles/woman-1.png';
import woman2 from '@/assets/images/profiles/woman-2.png';

export const PartnerPreferencesStep = ({ register, errors, isSubmitting, getProgressPercentage, serverError, handleSubmit }) => {
  const s = AUTH_STRINGS.signup.step6;
  const n = AUTH_STRINGS.navigation;
  const progressPercent = getProgressPercentage ? getProgressPercentage() : 85;

  return (
    <div className={styles.container}>
      
      {/* Left Column: Form */}
      <div className={styles.leftColumn}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Partner <span className={styles.titleHighlight}>Preferences</span>
          </h2>
          <p className={styles.subtitle}>{s.subtitle}</p>
        </div>

        {/* Profile Completion Bar */}
        <div className={styles.progressContainer}>
          <div className={styles.progressHeader}>
            <span className={styles.progressLabel}>{s.profileCompletion}</span>
            <span className={styles.progressValue}>{progressPercent}%</span>
          </div>
          <div className={styles.progressBarBg}>
            <div className={styles.progressBarFill} style={{ width: `${progressPercent}%` }} />
          </div>
        </div>

        {/* Verification Warning Box */}
        <div className={styles.warningBox}>
          <Info className={styles.warningIcon} />
          <p className={styles.warningText}>
            <span className={styles.warningHighlight}>Verification Requirement:</span> {s.verificationReq}
          </p>
        </div>

        <div className={styles.formCard}>
          <div className={styles.gridRow}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>{s.fields.ageRange.label}</label>
              <div className={styles.flexRow}>
                <Select options={AGE_RANGE_OPTIONS} {...register('prefAgeMin')} className={styles.selectFull} />
                <Select options={AGE_RANGE_OPTIONS} {...register('prefAgeMax')} className={styles.selectFull} />
              </div>
            </div>
            <Select
              label={s.fields.height.label}
              options={HEIGHT_RANGE_OPTIONS}
              {...register('prefHeight')}
            />
          </div>

          <div className={styles.gridRow}>
            <Select
              label={s.fields.religion.label}
              options={RELIGION_OPTIONS}
              {...register('prefReligion')}
            />
            <Select
              label={s.fields.education.label}
              options={EDUCATION_OPTIONS}
              {...register('prefEducation')}
            />
          </div>

          <div className={styles.gridRow}>
            <Select
              label={s.fields.language.label}
              options={LANGUAGE_OPTIONS}
              {...register('prefLanguage')}
            />
            <Select
              label={s.fields.income.label}
              options={INCOME_OPTIONS}
              {...register('prefIncome')}
            />
          </div>

          <div className={styles.gridRow}>
            <Input
              label={s.fields.zodiac.label}
              placeholder={s.fields.zodiac.placeholder}
              {...register('prefZodiac')}
            />
            <Input
              label={s.fields.gotra.label}
              placeholder={s.fields.gotra.placeholder}
              {...register('prefGotra')}
            />
          </div>

          <div className={styles.formFooter}>
            <div className={styles.noticeBox}>
              <UserSearch className={styles.noticeIcon} />
              <p className={styles.noticeText}>{s.updateNotice}</p>
            </div>
            
            {serverError && (
              <div className="w-full p-4 mb-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
                <p className="text-red-500 text-sm font-medium">{serverError}</p>
              </div>
            )}
            
            <div className={styles.actionGroup}>
              <Button type="submit" isLoading={isSubmitting} className={styles.submitBtn}>
                {n.completeProfile}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Live Match Preview */}
      <div className={styles.rightColumn}>
        <div className={styles.previewHeader}>
          <h3 className={styles.previewTitle}>{s.previewTitle}</h3>
          <div className={styles.previewBadge}>{s.matchQuality}</div>
        </div>

        <div className={styles.matchList}>
          {/* Mock Profile Card 1 */}
          <div className={styles.matchCard}>
            <img src={woman1} alt="Amandeep" className={styles.matchAvatar} />
            <div className={styles.matchInfo}>
              <div className={styles.matchNameRow}>
                <h4 className={styles.matchName}>Amandeep Kaur</h4>
                <CheckCircle2 className={styles.checkIcon} />
              </div>
              <p className={styles.matchDetails}>26 yrs • 5'7" • London</p>
              <div className={styles.tagContainer}>
                <span className={styles.tag}>MASTERS</span>
                <span className={styles.tag}>ENGINEER</span>
              </div>
            </div>
          </div>

          {/* Mock Profile Card 2 */}
          <div className={styles.matchCard}>
            <img src={woman2} alt="Jaspreet" className={styles.matchAvatar} />
            <div className={styles.matchInfo}>
              <div className={styles.matchNameRow}>
                <h4 className={styles.matchName}>Jaspreet B.</h4>
                <CheckCircle2 className={styles.checkIcon} />
              </div>
              <p className={styles.matchDetails}>28 yrs • 5'4" • Birmingham</p>
              <div className={styles.tagContainer}>
                <span className={styles.tag}>PHD</span>
                <span className={styles.tag}>RESEARCHER</span>
              </div>
            </div>
          </div>

          {/* Empty Placeholder */}
          <div className={styles.emptyState}>
            <UserSearch className={styles.emptyIcon} />
            <p className={styles.emptyText}>{s.emptyPreview}</p>
          </div>
        </div>

        <div className={styles.quoteFooter}>
          <p className={styles.quoteText}>{s.quote}</p>
        </div>
      </div>
    </div>
  );
};
