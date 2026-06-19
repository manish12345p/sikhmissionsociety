"use client";

import React from 'react';
import { AuthProvider, useAuth } from '@/features/auth/contexts/AuthContext';
import GlobalLoader from '@/shared/components/GlobalLoader';

function AppContent({ children }) {
  const { loading } = useAuth();
  
  if (loading) {
    return <GlobalLoader />;
  }
  
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
