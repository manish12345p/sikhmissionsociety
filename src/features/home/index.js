/**
 * Home Feature — Barrel Export
 *
 * Single entry-point for everything the home module exposes.
 */

// Page
export { default as HomePage } from './pages/HomePage';

// Components
export { default as HeroSection } from './components/HeroSection';
export { default as SearchSection } from './components/SearchSection';
export { default as FeaturedProfiles } from './components/FeaturedProfiles';
export { default as WhyChooseUs } from './components/WhyChooseUs';
export { default as SuccessStories } from './components/SuccessStories';
export { default as FaqSection } from './components/FaqSection';
export { default as CtaSection } from './components/CtaSection';

// Hooks
export { useSearch } from './hooks/useSearch';

// Services
export {
  getFeaturedProfiles,
  getSuccessStories,
  searchProfiles,
} from './services/homeService';

// Models / Constants
export {
  STATS,
  FEATURES,
  SUCCESS_STORIES,
  FAQS,
  FEATURED_PROFILES,
} from './models/homeConstants';
