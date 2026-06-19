"use client";

import { ProtectedRoute } from '@/core/routes/ProtectedRoute';
import { DashboardLayout } from '@/shared/layouts/DashboardLayout';

export default function DashboardRootLayout({ children }) {
  return (
    <ProtectedRoute>
      <DashboardLayout>
        {children}
      </DashboardLayout>
    </ProtectedRoute>
  );
}
