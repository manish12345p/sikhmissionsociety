/**
 * Home Feature — Service Layer (Placeholder)
 *
 * Each method will be wired to Firestore once the backend is ready.
 * For now they resolve with static data from homeConstants so the
 * UI can be developed and tested independently.
 */

import { FEATURED_PROFILES, SUCCESS_STORIES } from '../models/homeConstants';

/**
 * Fetch featured profiles from Firestore.
 * @returns {Promise<Array>}
 */
export const getFeaturedProfiles = async () => {
  // TODO: replace with Firestore query
  // const snap = await getDocs(collection(db, 'featuredProfiles'));
  return FEATURED_PROFILES;
};

/**
 * Fetch success stories from Firestore.
 * @returns {Promise<Array>}
 */
export const getSuccessStories = async () => {
  // TODO: replace with Firestore query
  // const snap = await getDocs(collection(db, 'successStories'));
  return SUCCESS_STORIES;
};

/**
 * Search profiles with the given params.
 * @param {{ gender: string, ageFrom: string, ageTo: string, location: string }} params
 * @returns {Promise<Array>}
 */
export const searchProfiles = async (params) => {
  // TODO: replace with Firestore query using params
  console.log('[homeService] searchProfiles called with:', params);
  return [];
};
