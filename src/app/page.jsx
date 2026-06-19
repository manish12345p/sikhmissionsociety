"use client";

import { MainLayout } from '@/shared/layouts/MainLayout';
import HomePage from '@/features/home/pages/HomePage';

export default function Page() {
  return (
    <MainLayout>
      <HomePage />
    </MainLayout>
  );
}
