import React from 'react';
import { AppRouter } from '@/core/routes/AppRouter';
import { AuthProvider, useAuth } from '@/features/auth/contexts/AuthContext';
import GlobalLoader from '@/shared/components/GlobalLoader';

function AppContent() {
  const { loading } = useAuth();
  
  if (loading) {
    return <GlobalLoader />;
  }
  
  return <AppRouter />;
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
