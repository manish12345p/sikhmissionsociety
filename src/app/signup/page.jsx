"use client";

import { GuestRoute } from '@/core/routes/GuestRoute';
import { SignupPage } from '@/features/auth/pages/SignupPage';

export default function Signup() {
  return (
    <GuestRoute>
      <SignupPage />
    </GuestRoute>
  );
}
