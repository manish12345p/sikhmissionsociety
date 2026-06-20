/**
 * Home Feature — Static Data Constants
 *
 * All data arrays consumed by home section components live here.
 * When these are eventually fetched from Firestore, swap to the
 * service layer and remove the corresponding constant.
 */
import couple1 from '@/assets/images/stories/couple-1.png';
import couple2 from '@/assets/images/stories/couple-2.png';
import couple3 from '@/assets/images/stories/couple-3.png';

import woman1 from '@/assets/images/profiles/woman-1-new.jpg';
import man1 from '@/assets/images/profiles/man-1.png';
import woman2 from '@/assets/images/profiles/woman-2-new.png';
import man2 from '@/assets/images/profiles/man-2.png';
import woman3 from '@/assets/images/profiles/woman-3-new.jpg';
import man3 from '@/assets/images/profiles/man-3.png';

// ─── Hero Stats Row ────────────────────────────────────────────
export const STATS = [
  { id: 'members', value: '10,000+', label: 'Registered Members' },
  { id: 'matches', value: '2,500+', label: 'Successful Matches' },
  { id: 'cities', value: '150+', label: 'Cities Worldwide' },
  { id: 'years', value: '15+', label: 'Years of Trust' },
];

// ─── Why Choose Us Features ────────────────────────────────────
export const FEATURES = [
  {
    id: 'verified',
    icon: 'ShieldCheck',
    title: 'Verified Profiles',
    description:
      'Every profile is manually verified by our team to ensure authenticity and trust within the Sikh community.',
  },
  {
    id: 'privacy',
    icon: 'Lock',
    title: 'Privacy First',
    description:
      'Your personal information is protected with enterprise-grade security. Share details only when you are ready.',
  },
  {
    id: 'community',
    icon: 'Users',
    title: 'Community Driven',
    description:
      'Built by the Sikh community, for the Sikh community. We understand your values and traditions.',
  },
  {
    id: 'global',
    icon: 'Globe',
    title: 'Global Reach',
    description:
      'Connect with Sikh singles across the world — from Punjab to London, Toronto to Melbourne.',
  },
  {
    id: 'support',
    icon: 'HeadphonesIcon',
    title: 'Dedicated Support',
    description:
      'Our support team is available around the clock to help you on your journey to finding your life partner.',
  },
  {
    id: 'success',
    icon: 'Heart',
    title: 'Proven Success',
    description:
      'Thousands of happy couples found each other through our platform. Your success story could be next.',
  },
];

// ─── Success Stories ───────────────────────────────────────────
export const SUCCESS_STORIES = [
  {
    id: 'story-1',
    names: 'Harpreet & Jasmine',
    location: 'London, UK',
    image: couple1,
    quote:
      'We connected on the platform and immediately felt a bond over our shared Sikh values. Within six months we were engaged!',
  },
  {
    id: 'story-2',
    names: 'Gurdeep & Manpreet',
    location: 'Toronto, Canada',
    image: couple2,
    quote:
      'The detailed profiles made it easy to find someone who truly matched our family\'s expectations and my personal aspirations.',
  },
  {
    id: 'story-3',
    names: 'Amrit & Navneet',
    location: 'Melbourne, Australia',
    image: couple3,
    quote:
      'Despite living on different continents, this platform brought us together. Our Anand Karaj was the happiest day of our lives.',
  },
];

// ─── FAQs ──────────────────────────────────────────────────────
export const FAQS = [
  {
    id: 'faq-1',
    question: 'Is this platform only for Sikhs?',
    answer:
      'Yes. Sikh Mission Society Matrimony is exclusively designed for the Sikh community to find life partners who share the same faith, values, and cultural traditions.',
  },
  {
    id: 'faq-2',
    question: 'How are profiles verified?',
    answer:
      'Each profile goes through a manual verification process. We verify identity documents, photographs, and contact information to keep the platform trustworthy.',
  },
  {
    id: 'faq-3',
    question: 'Is registration free?',
    answer:
      'Basic registration and profile creation are completely free. Premium features such as advanced search filters and direct messaging require a subscription.',
  },
  {
    id: 'faq-4',
    question: 'How do I contact a match?',
    answer:
      'Once both parties express mutual interest, you can connect through our secure in-app messaging system. Personal details are shared only with your consent.',
  },
  {
    id: 'faq-5',
    question: 'Can my family help manage my profile?',
    answer:
      'Absolutely. We support family-assisted profiles where parents or guardians can create and manage profiles on behalf of their children.',
  },
];

// ─── Featured Profiles ─────────────────────────────────────────
export const FEATURED_PROFILES = [
  {
    id: 'fp-1',
    name: 'Simran K.',
    age: 27,
    location: 'Amritsar, India',
    occupation: 'Software Engineer',
    image: woman1,
  },
  {
    id: 'fp-2',
    name: 'Rajveer S.',
    age: 30,
    location: 'London, UK',
    occupation: 'Doctor',
    image: man1,
  },
  {
    id: 'fp-3',
    name: 'Harleen K.',
    age: 25,
    location: 'Toronto, Canada',
    occupation: 'Chartered Accountant',
    image: woman2,
  },
  {
    id: 'fp-4',
    name: 'Mandeep S.',
    age: 29,
    location: 'Melbourne, Australia',
    occupation: 'Business Analyst',
    image: man2,
  },
  {
    id: 'fp-5',
    name: 'Gurpreet K.',
    age: 26,
    location: 'New York, USA',
    occupation: 'UX Designer',
    image: woman3,
  },
  {
    id: 'fp-6',
    name: 'Arjun S.',
    age: 31,
    location: 'Birmingham, UK',
    occupation: 'Civil Engineer',
    image: man3,
  },
];
