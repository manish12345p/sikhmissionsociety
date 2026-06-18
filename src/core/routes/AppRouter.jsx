import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { DashboardLayout } from '@/shared/layouts/DashboardLayout';
import HomePage from '@/features/home/pages/HomePage';
import DashboardHomePage from '@/features/dashboard/pages/DashboardHomePage';
import { SignupPage } from '@/features/auth/pages/SignupPage';
import ProfileEditPage from '@/features/profile/pages/ProfileEditPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      }
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardHomePage />,
      },
      {
        path: 'profile',
        element: <ProfileEditPage />,
      }
    ]
  },
  {
    path: '/signup',
    element: <SignupPage />,
  }
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
