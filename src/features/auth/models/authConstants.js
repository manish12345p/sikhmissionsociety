// ─── Shared Options ──────────────────────────────────────────────
export const GENDER_OPTIONS = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' }
];

export const RELIGION_OPTIONS = [
  { value: 'sikh', label: 'Sikh' },
  { value: 'sikh-jatt', label: 'Sikh - Jatt' },
  { value: 'sikh-khatri', label: 'Sikh - Khatri' },
  { value: 'sikh-ramgarhia', label: 'Sikh - Ramgarhia' },
  { value: 'other', label: 'Other' }
];

export const DIET_OPTIONS = [
  { value: 'vegetarian', label: 'Vegetarian' },
  { value: 'non-vegetarian', label: 'Non-Vegetarian' },
  { value: 'eggetarian', label: 'Eggetarian' }
];

// ─── Step 2: Personal Details ────────────────────────────────────
export const BODY_TYPE_OPTIONS = [
  { value: 'athletic', label: 'Athletic' },
  { value: 'average', label: 'Average' },
  { value: 'slim', label: 'Slim' },
  { value: 'heavy', label: 'Heavy' }
];

export const COMPLEXION_OPTIONS = [
  { value: 'very-fair', label: 'Very Fair' },
  { value: 'fair', label: 'Fair' },
  { value: 'wheatish', label: 'Wheatish' },
  { value: 'dark', label: 'Dark' }
];

export const PHYSICAL_STATUS_OPTIONS = [
  { value: 'normal', label: 'Normal' },
  { value: 'physically-challenged', label: 'Physically Challenged' }
];

export const BLOOD_GROUP_OPTIONS = [
  { value: 'a+', label: 'A+' }, { value: 'a-', label: 'A-' },
  { value: 'b+', label: 'B+' }, { value: 'b-', label: 'B-' },
  { value: 'o+', label: 'O+' }, { value: 'o-', label: 'O-' },
  { value: 'ab+', label: 'AB+' }, { value: 'ab-', label: 'AB-' }
];

export const MARITAL_STATUS_OPTIONS = [
  { value: 'never-married', label: 'Never Married' },
  { value: 'divorced', label: 'Divorced' },
  { value: 'widowed', label: 'Widowed' },
  { value: 'awaiting-divorce', label: 'Awaiting Divorce' }
];

export const ZODIAC_OPTIONS = [
  { value: 'aries', label: 'Aries' }, { value: 'taurus', label: 'Taurus' },
  { value: 'gemini', label: 'Gemini' }, { value: 'cancer', label: 'Cancer' },
  { value: 'leo', label: 'Leo' }, { value: 'virgo', label: 'Virgo' },
  { value: 'libra', label: 'Libra' }, { value: 'scorpio', label: 'Scorpio' },
  { value: 'sagittarius', label: 'Sagittarius' }, { value: 'capricorn', label: 'Capricorn' },
  { value: 'aquarius', label: 'Aquarius' }, { value: 'pisces', label: 'Pisces' }
];

// ─── Step 3: Education & Career ──────────────────────────────────
export const EDUCATION_OPTIONS = [
  { value: 'bachelors', label: 'Bachelors' },
  { value: 'masters', label: 'Masters / Post-Grad' },
  { value: 'doctorate', label: 'Doctorate / PhD' },
  { value: 'diploma', label: 'Diploma' },
  { value: 'highschool', label: 'High School' }
];

export const INCOME_OPTIONS = [
  { value: 'prefer-not', label: 'Prefer not to say' },
  { value: '0-10k', label: 'Under £10k' },
  { value: '10k-30k', label: '£10k - £30k' },
  { value: '30k-60k', label: '£30k - £60k' },
  { value: '60k-100k', label: '£60k - £100k' },
  { value: '100k+', label: '£100k+' }
];

// ─── Step 4: Family Details ──────────────────────────────────────
export const FAMILY_VALUE_OPTIONS = [
  { value: 'orthodox', label: 'Orthodox' },
  { value: 'traditional', label: 'Traditional' },
  { value: 'moderate', label: 'Moderate' },
  { value: 'liberal', label: 'Liberal' }
];

export const FAMILY_TYPE_OPTIONS = [
  { value: 'joint', label: 'Joint Family' },
  { value: 'nuclear', label: 'Nuclear Family' },
  { value: 'other', label: 'Other' }
];

export const FAMILY_STATUS_OPTIONS = [
  { value: 'middle-class', label: 'Middle Class' },
  { value: 'upper-middle', label: 'Upper Middle Class' },
  { value: 'rich', label: 'Rich / Affluent' }
];

// ─── Step 5: Lifestyle & Interests ───────────────────────────────
export const HABIT_OPTIONS = [
  { value: 'yes', label: 'Yes' },
  { value: 'no', label: 'No' },
  { value: 'occasionally', label: 'Occasionally' }
];

export const DRINKING_OPTIONS = [
  { value: 'teetotaler', label: 'Teetotaler' },
  { value: 'occasionally', label: 'Occasionally' },
  { value: 'yes', label: 'Yes' }
];

export const PETS_OPTIONS = [
  { value: 'no-pets', label: 'No Pets' },
  { value: 'dog', label: 'Dog(s)' },
  { value: 'cat', label: 'Cat(s)' },
  { value: 'other', label: 'Other Pets' }
];

export const LANGUAGE_OPTIONS = [
  { value: 'punjabi', label: 'Punjabi' },
  { value: 'english', label: 'English' },
  { value: 'hindi', label: 'Hindi' },
  { value: 'english-punjabi', label: 'English & Punjabi' }
];

// ─── Step 6: Partner Preferences ─────────────────────────────────
export const AGE_RANGE_OPTIONS = Array.from({ length: 42 }, (_, i) => ({
  value: String(i + 18),
  label: `${i + 18} Years`
}));

export const HEIGHT_RANGE_OPTIONS = [
  { value: '4_10_5_2', label: '4\' 10" to 5\' 2"' },
  { value: '5_2_5_6', label: '5\' 2" to 5\' 6"' },
  { value: '5_6_6_0', label: '5\' 6" to 6\' 0"' },
  { value: '6_0_plus', label: '6\' 0"+' }
];

// ─── Form Steps Config ───────────────────────────────────────────
export const SIGNUP_STEPS = [
  { id: 'basic', label: 'Basic Details', title: 'Basic Sign Up Form' },
  { id: 'personal', label: 'Personal Details (Skippable)', title: 'Build Your Identity' },
  { id: 'career', label: 'Education & Career', title: 'Education & Career' },
  { id: 'family', label: 'Family Details', title: 'Family Details' },
  { id: 'lifestyle', label: 'Lifestyle & Interests', title: 'Lifestyle & Interests' },
  { id: 'preferences', label: 'Partner Preferences', title: 'Partner Preferences' }
];
