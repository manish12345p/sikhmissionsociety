import {
  User,
  GraduationCap,
  Users,
  Heart,
  Shield,
} from 'lucide-react';

/**
 * Sidebar navigation sections for the profile editor.
 * Each entry drives a tab in ProfileSidebar.
 */
export const PROFILE_SECTIONS = [
  { id: 'personal', title: 'Personal Details', icon: User },
  { id: 'education', title: 'Education & Career', icon: GraduationCap },
  { id: 'family', title: 'Family Details', icon: Users },
  { id: 'partner', title: 'Partner Preferences', icon: Heart },
  { id: 'privacy', title: 'Privacy & Security', icon: Shield },
];

/**
 * Privacy toggle settings displayed in the Privacy section.
 */
export const PRIVACY_SETTINGS = [
  {
    id: 'showPhone',
    label: 'Show phone number to matches',
    description: 'Allow matched profiles to see your contact number.',
  },
  {
    id: 'showEmail',
    label: 'Show email to matches',
    description: 'Allow matched profiles to see your email address.',
  },
  {
    id: 'showLastSeen',
    label: 'Show last seen',
    description: 'Let others know when you were last online.',
  },
  {
    id: 'profileVisibility',
    label: 'Profile visible to all',
    description: 'When off, only shortlisted members can view your profile.',
  },
];

/**
 * Default / mock profile data used for initial render and placeholder values.
 * Height strings are regular JS strings — no template-literal escaping needed.
 */
export const DEFAULT_PROFILE_DATA = {
  // ── header ──
  displayName: 'Harpreet Singh',
  age: 28,
  location: 'Amritsar, Punjab',
  profileCompletion: 75,
  memberSince: 'Jan 2024',
  badge: 'Premium',

  // ── personal ──
  personal: {
    firstName: 'Harpreet',
    lastName: 'Singh',
    dateOfBirth: '1997-03-15',
    gender: 'Male',
    height: '5\' 11" (181 cm)',
    maritalStatus: 'Never Married',
    motherTongue: 'Punjabi',
    city: 'Amritsar',
    state: 'Punjab',
    country: 'India',
    aboutMe:
      'Devoted Sikh with a passion for technology and community service. Amritdhari and proud of my heritage.',
  },

  // ── education & career ──
  education: {
    highestQualification: 'B.Tech Computer Science',
    university: 'Guru Nanak Dev University',
    occupation: 'Software Engineer',
    employer: 'Tech Corp Pvt Ltd',
    annualIncome: '₹12–15 LPA',
    workLocation: 'Chandigarh',
  },

  // ── family ──
  family: {
    fatherName: 'S. Gurpreet Singh',
    fatherOccupation: 'Retired Government Officer',
    motherName: 'Smt. Manpreet Kaur',
    motherOccupation: 'Homemaker',
    siblings: '1 Brother, 1 Sister',
    familyType: 'Joint Family',
    familyStatus: 'Middle Class',
    gotra: 'Sandhu',
  },

  // ── partner preferences ──
  partner: {
    preferredAge: '24–28',
    preferredHeight: '5\'2" – 5\'8"',
    preferredMaritalStatus: 'Never Married',
    preferredEducation: 'Graduate or above',
    preferredOccupation: 'Any',
    preferredLocation: 'Punjab / Chandigarh',
    partnerExpectations:
      'Looking for a family-oriented partner who values Sikhi and education.',
  },

  // ── privacy ──
  privacy: {
    showPhone: true,
    showEmail: false,
    showLastSeen: true,
    profileVisibility: true,
  },
};
