import React from 'react';
import { Edit3, Save, X } from 'lucide-react';
import { Button } from '@/shared/components/Button';

import { ProfileHeader } from '../components/ProfileHeader';
import { ProfileSidebar } from '../components/ProfileSidebar';
import { PersonalDetailsSection } from '../components/PersonalDetailsSection';
import { EducationCareerSection } from '../components/EducationCareerSection';
import { FamilyDetailsSection } from '../components/FamilyDetailsSection';
import { PartnerPreferencesSection } from '../components/PartnerPreferencesSection';
import { PrivacySection } from '../components/PrivacySection';
import { useProfileEdit } from '../hooks/useProfileEdit';
import { PROFILE_SECTIONS } from '../models/profileConstants';

/** Map section id → component. */
const SECTION_COMPONENTS = {
  personal: PersonalDetailsSection,
  education: EducationCareerSection,
  family: FamilyDetailsSection,
  partner: PartnerPreferencesSection,
  privacy: PrivacySection,
};

/**
 * Profile Edit page — thin orchestrator that composes the header,
 * sidebar, and whichever section tab is active.
 */
export default function ProfileEditPage() {
  const { activeTab, isEditing, isSaving, toggleEdit, saveChanges, switchTab } =
    useProfileEdit();

  const ActiveSection = SECTION_COMPONENTS[activeTab];

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    // For checkboxes, FormData only includes them if they are checked.
    // We might need to manually handle unchecked checkboxes if they are present in the form, 
    // but a simple trick is just to let the section define what was checked vs unchecked.
    // However, since privacy settings are exactly checkboxes, we need to ensure unchecked means false.
    if (activeTab === 'privacy') {
      const allSettings = ['showPhone', 'showEmail', 'showLastSeen', 'profileVisible'];
      allSettings.forEach(setting => {
        data[setting] = formData.has(setting);
      });
    }

    saveChanges(data);
  };

  return (
    <div className="mx-auto max-w-6xl space-y-6 p-4 sm:p-6">
      {/* ── Banner ── */}
      <ProfileHeader onUpgrade={() => console.log('upgrade')} />

      {/* ── Body: sidebar + content ── */}
      <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
        {/* Sidebar */}
        <aside className="rounded-xl border bg-brand-black-card p-4 shadow-sm">
          <ProfileSidebar
            sections={PROFILE_SECTIONS}
            activeTab={activeTab}
            onTabChange={switchTab}
          />
        </aside>

        {/* Content */}
        <section className="space-y-4">
          {/* Edit / Save toolbar */}
          <div className="flex justify-end gap-2">
            {isEditing ? (
              <>
                <Button variant="outline" size="sm" onClick={toggleEdit} disabled={isSaving}>
                  <X className="mr-1 h-4 w-4" /> Cancel
                </Button>
                <Button size="sm" type="submit" form="profile-edit-form" disabled={isSaving}>
                  <Save className="mr-1 h-4 w-4" /> {isSaving ? 'Saving...' : 'Save Changes'}
                </Button>
              </>
            ) : (
              <Button variant="outline" size="sm" onClick={toggleEdit}>
                <Edit3 className="mr-1 h-4 w-4" /> Edit
              </Button>
            )}
          </div>

          {/* Active section inside form */}
          <form id="profile-edit-form" onSubmit={handleSubmit}>
            {ActiveSection && <ActiveSection isEditing={isEditing} />}
          </form>
        </section>
      </div>
    </div>
  );
}
