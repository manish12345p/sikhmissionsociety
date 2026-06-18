import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';
import { auth, db } from '@/core/config/firebase';

const AuthContext = createContext({
  user: null,
  loading: true,
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Initial synchronous load from Shared Preferences equivalent (localStorage)
    const cachedUser = localStorage.getItem('currentUser');
    if (cachedUser) {
      try {
        setUser(JSON.parse(cachedUser));
      } catch (e) {
        console.error("Failed to parse cached user", e);
      }
    }

    let unsubscribeProfile = null;

    // 2. Listen to Firebase Auth state
    const unsubscribeAuth = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        // Subscribe to Firestore profile changes
        const docRef = doc(db, 'customer_profile', firebaseUser.uid);
        unsubscribeProfile = onSnapshot(docRef, (docSnap) => {
          let profileData = {};
          if (docSnap.exists()) {
            profileData = docSnap.data();
          }

          const userData = {
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            displayName: firebaseUser.displayName || profileData.fullName || profileData.name,
            ...profileData
          };

          setUser(userData);
          // Sync with our shared preference
          localStorage.setItem('currentUser', JSON.stringify(userData));
          setLoading(false);
        }, (error) => {
          console.error("Error fetching user data:", error);
          setLoading(false);
        });
      } else {
        if (unsubscribeProfile) {
          unsubscribeProfile();
        }
        setUser(null);
        localStorage.removeItem('currentUser');
        setLoading(false);
      }
    });

    return () => {
      unsubscribeAuth();
      if (unsubscribeProfile) {
        unsubscribeProfile();
      }
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
