import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSignup } from '../hooks/useSignup';
import { SIGNUP_STEPS } from '../models/authConstants';
import { KhandaIcon } from '@/shared/components/SikhMissionSocietyLogo';

// Steps
import { BasicDetailsStep } from '../components/steps/BasicDetailsStep';
import { PersonalDetailsStep } from '../components/steps/PersonalDetailsStep';
import { EducationCareerStep } from '../components/steps/EducationCareerStep';
import { FamilyDetailsStep } from '../components/steps/FamilyDetailsStep';
import { LifestyleInterestsStep } from '../components/steps/LifestyleInterestsStep';
import { PartnerPreferencesStep } from '../components/steps/PartnerPreferencesStep';

import styles from '../styles/SignupPage.module.css';

const StepIndicator = ({ step, getProgressPercentage }) => {
  const currentStepInfo = SIGNUP_STEPS[step - 1];
  const progressPercent = getProgressPercentage();

  return (
    <div className={styles.stepIndicatorContainer}>
      <div className={styles.stepIndicatorHeader}>
        <span className={styles.stepIndicatorLabel}>
          STEP {step} OF {SIGNUP_STEPS.length}
        </span>
        <span className={styles.stepIndicatorTitle}>
          {currentStepInfo.label}
        </span>
      </div>
      <div className={styles.stepIndicatorBarBg}>
        <motion.div
          className={styles.stepIndicatorBarFill}
          initial={{ width: 0 }}
          animate={{ width: `${progressPercent}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export function SignupPage() {
  const formProps = useSignup();
  const { step, handleSubmit } = formProps;

  return (
    <div className={styles.pageContainer}>
      {/* Abstract blurred background glow */}
      <div className={styles.abstractGlow} />
      
      {/* Massive Faded Background Logo */}
      <div className={styles.watermarkContainer}>
        <div className={styles.watermarkLogo}>
          <KhandaIcon />
        </div>
      </div>

      <main className={styles.mainContent}>
        <StepIndicator step={step} getProgressPercentage={formProps.getProgressPercentage} />
        
        <form onSubmit={handleSubmit} className="w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className={styles.formContainer}
            >
              {step === 1 && <BasicDetailsStep {...formProps} />}
              {step === 2 && <PersonalDetailsStep {...formProps} />}
              {step === 3 && <EducationCareerStep {...formProps} />}
              {step === 4 && <FamilyDetailsStep {...formProps} />}
              {step === 5 && <LifestyleInterestsStep {...formProps} />}
              {step === 6 && <PartnerPreferencesStep {...formProps} />}
            </motion.div>
          </AnimatePresence>
        </form>
      </main>
    </div>
  );
}
