import React from 'react';

export default function DashboardHomePage() {
  return (
    <div className="h-full w-full flex items-center justify-center p-8">
      <div className="text-center space-y-4 max-w-md">
        <h2 className="text-2xl font-bold text-brand-white">Welcome to your Dashboard</h2>
        <p className="text-brand-white-muted">
          Your dashboard is currently empty. Click the profile icon in the top right corner to edit your profile and complete your setup.
        </p>
      </div>
    </div>
  );
}
