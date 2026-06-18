/**
 * Profile service — all Firestore / Firebase Storage I/O for the profile
 * feature lives here.  Currently returns placeholder data; swap the
 * implementations once Firebase is wired up.
 */

import { doc, getDoc, updateDoc } from 'firebase/firestore';
// import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db } from '@/core/config/firebase';

/**
 * Fetch a user's full profile document from Firestore.
 *
 * @param {string} userId
 * @returns {Promise<Object>} profile data
 */
export async function getProfile(userId) {
  // TODO: replace with real Firestore call
  // const snap = await getDoc(doc(db, 'profiles', userId));
  // return snap.exists() ? snap.data() : null;
  console.log(`[profileService] getProfile(${userId})`);
  return null;
}

/**
 * Update the user's profile with merged flat data.
 *
 * @param {string} userId
 * @param {Object}  data   — extracted flat form data
 * @returns {Promise<void>}
 */
export async function updateProfile(userId, data) {
  await updateDoc(doc(db, 'customer_profile', userId), data);
}

/**
 * Upload a profile photo to Firebase Storage and return its download URL.
 *
 * @param {string} userId
 * @param {File}   file
 * @returns {Promise<string>} download URL
 */
export async function uploadProfilePhoto(userId, file) {
  // TODO: replace with real Firebase Storage call
  // const storageRef = ref(storage, `profiles/${userId}/avatar`);
  // await uploadBytes(storageRef, file);
  // return getDownloadURL(storageRef);
  console.log(`[profileService] uploadProfilePhoto(${userId}, ${file.name})`);
  return '';
}
