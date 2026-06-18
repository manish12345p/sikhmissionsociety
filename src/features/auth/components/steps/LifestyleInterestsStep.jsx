import React from 'react';
import { Utensils, ScrollText, Heart } from 'lucide-react';
import { Input } from '@/shared/components/Input';
import { Select } from '@/shared/components/Select';
import { Button } from '@/shared/components/Button';
import { AUTH_STRINGS } from '@/core/strings';
import { 
  RELIGION_OPTIONS, DIET_OPTIONS, HABIT_OPTIONS, DRINKING_OPTIONS, 
  PETS_OPTIONS, LANGUAGE_OPTIONS, ZODIAC_OPTIONS 
} from '../../models/authConstants';
import { useLifestyleInterests, HOBBY_LIST } from '../../hooks/useLifestyleInterests';
import styles from '../../styles/steps/LifestyleInterestsStep.module.css';
import { cn } from '@/core/utils';

export const LifestyleInterestsStep = ({ register, errors, nextStep, prevStep, skipStep, watch, setValue }) => {
  const s = AUTH_STRINGS.signup.step5;
  const n = AUTH_STRINGS.navigation;
  const { selectedHobbies, toggleHobby } = useLifestyleInterests(watch, setValue);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>{s.title}</h2>
        <p className={styles.subtitle}>{s.subtitle}</p>
      </div>

      <div className={styles.cardsGrid}>
        {/* Lifestyle Basics Card */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <Utensils className={styles.cardIcon} />
            <h3 className={styles.cardTitle}>{s.basics}</h3>
          </div>
          
          <div className={styles.cardContent}>
            <Select
              label={s.fields.religion.label}
              options={RELIGION_OPTIONS}
              error={errors.religion?.message}
              {...register('religion')}
            />
            <Select
              label={s.fields.diet.label}
              options={DIET_OPTIONS}
              error={errors.diet?.message}
              {...register('diet')}
            />
            <div className={styles.twoCol}>
              <Select
                label={s.fields.smoking.label}
                options={HABIT_OPTIONS}
                error={errors.smoking?.message}
                {...register('smoking')}
              />
              <Select
                label={s.fields.drinking.label}
                options={DRINKING_OPTIONS}
                error={errors.drinking?.message}
                {...register('drinking')}
              />
            </div>
          </div>
        </div>

        {/* Heritage & Others Card */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <ScrollText className={styles.cardIcon} />
            <h3 className={styles.cardTitle}>{s.heritage}</h3>
          </div>
          
          <div className={styles.cardContent}>
            <Select
              label={s.fields.pets.label}
              options={PETS_OPTIONS}
              error={errors.pets?.message}
              {...register('pets')}
            />
            <Select
              label={s.fields.language.label}
              options={LANGUAGE_OPTIONS}
              error={errors.language?.message}
              {...register('language')}
            />
            <div className={styles.twoCol}>
              <Select
                label={s.fields.zodiac.label}
                options={ZODIAC_OPTIONS}
                {...register('zodiacPersonal')}
              />
              <Input
                label={s.fields.gotra.label}
                placeholder={s.fields.gotra.placeholder}
                {...register('gotra')}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Hobbies & Interests Card */}
      <div className={styles.hobbiesCard}>
        <div className={styles.hobbiesHeader}>
          <div className={styles.hobbiesHeaderLeft}>
            <Heart className={styles.cardIcon} />
            <h3 className={styles.cardTitle}>{s.hobbies}</h3>
          </div>
          <div className={styles.hobbiesCount}>
            {selectedHobbies.length} {s.selected}
          </div>
        </div>
        
        <p className={styles.hobbiesSubtext}>{s.selectThings}</p>
        
        <div className={styles.pillsContainer}>
          {HOBBY_LIST.map((hobby) => {
            const isSelected = selectedHobbies.includes(hobby.id);
            return (
              <button
                key={hobby.id}
                type="button"
                onClick={() => toggleHobby(hobby.id)}
                className={cn(styles.pillBase, isSelected ? styles.pillSelected : styles.pillUnselected)}
              >
                <span>{hobby.icon}</span> {hobby.label}
              </button>
            );
          })}
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
