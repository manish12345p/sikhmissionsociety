import { auth, db } from '@/core/config/firebase';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut,
  updateProfile,
  deleteUser
} from 'firebase/auth';
import { doc, setDoc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';

export async function registerUser(data) {
  // 1. Create user in Firebase Auth first so we have permissions to query Firestore
  const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
  const user = userCredential.user;

  try {
    // 2. Check if phone number is already registered to prevent data duplication
    if (data.mobile) {
      const q = query(collection(db, 'customer_profile'), where('mobile', '==', data.mobile));
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        throw new Error('This phone number is already registered to another account.');
      }
    }


    // 3. Update Auth Profile (display name)
    await updateProfile(user, { displayName: data.fullName });

    // 4. Store full profile data in Firestore
    const { password, confirmPassword, ...profileData } = data;
    
    await setDoc(doc(db, 'customer_profile', user.uid), {
      ...profileData,
      uid: user.uid,
      createdAt: new Date().toISOString()
    });

    // 5. Update localStorage cache
    const userData = { uid: user.uid, email: user.email, displayName: data.fullName, ...profileData };
    localStorage.setItem('currentUser', JSON.stringify(userData));

    return userData;
  } catch (error) {
    // If anything fails during setup (like duplicate mobile), delete the auth user
    await deleteUser(user).catch(console.error);
    throw error;
  }
}

export async function loginUser(email, password) {
  // 1. Sign in
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  // 2. Fetch profile from Firestore
  const docRef = doc(db, 'customer_profile', user.uid);
  const docSnap = await getDoc(docRef);

  let profileData = {};
  if (docSnap.exists()) {
    profileData = docSnap.data();
  }

  // 3. Update localStorage cache
  const userData = { uid: user.uid, email: user.email, displayName: user.displayName, ...profileData };
  localStorage.setItem('currentUser', JSON.stringify(userData));

  return userData;
}

export async function logoutUser() {
  await signOut(auth);
  localStorage.removeItem('currentUser');
}

export function getCurrentUser() {
  const userStr = localStorage.getItem('currentUser');
  if (userStr) {
    try {
      return JSON.parse(userStr);
    } catch (e) {
      return null;
    }
  }
  return null;
}
