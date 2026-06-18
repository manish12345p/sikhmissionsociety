import React from 'react';
import { AppRouter } from '@/core/routes/AppRouter';
import { AuthProvider } from '@/features/auth/contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
