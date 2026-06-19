"use client";

import React from 'react';
import { AuthProvider, useAuth } from '@/features/auth/contexts/AuthContext';
function AppContent({ children }) {
  // Let the app render immediately for SSR performance.
  // Individual components can use useAuth().loading if they need it.
  return <>{children}</>;
}

export default function AppWrapper({ children }) {
  return (
    <AuthProvider>
      <AppContent>
        {children}
      </AppContent>
    </AuthProvider>
  );
}
