/**
 * Assets Barrel Export
 * ─────────────────────────────────────────────────────────────────
 * Re-export all static assets from a single entry point so that
 * imports across the codebase stay clean and refactorable.
 *
 * ─── IMAGES ────────────────────────────────────────────────────
 * Add image imports here as you add files to src/assets/images/:
 *
 *   export { default as heroBanner }       from './images/hero-banner.webp';
 *   export { default as profilePlaceholder } from './images/profile-placeholder.png';
 *   export { default as logoFull }         from './images/logo-full.png';
 *   export { default as successCouple1 }   from './images/success-couple-1.webp';
 *
 * ─── USAGE ─────────────────────────────────────────────────────
 *   import { heroBanner, logoFull } from '@/assets';
 *   <img src={heroBanner} alt="Hero" />
 *
 * ─── ICONS ─────────────────────────────────────────────────────
 * SVG icon React components live in src/shared/components/icons/.
 * Raw .svg files sit in src/assets/icons/ as source references.
 * Do NOT import raw SVGs here — import the React wrappers directly:
 *
 *   import { KhandaIcon } from '@/shared/components/SikhMissionSocietyLogo';
 *
 * ─── FONTS ─────────────────────────────────────────────────────
 * Fonts are declared via @font-face in src/index.css.
 * No JS exports needed for fonts.
 */

// ─── Example image exports (uncomment when files are added) ────
// export { default as heroBanner }          from './images/hero-banner.webp';
// export { default as profilePlaceholder }  from './images/profile-placeholder.png';
// export { default as logoFull }            from './images/logo-full.png';
