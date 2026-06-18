import { useState, useCallback } from 'react';
import { useAuth } from '@/features/auth/contexts/AuthContext';
import { updateProfile } from '../services/profileService';

/**
 * Custom hook that owns all transient UI state for the profile editor.
 *
 * @param {string} [initialTab='personal'] — the section to show first.
 * @returns {{ activeTab, isEditing, toggleEdit, saveChanges, switchTab }}
 */
export function useProfileEdit(initialTab = 'personal') {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const { user } = useAuth();

  /** Toggle between view and edit modes. */
  const toggleEdit = useCallback(() => {
    setIsEditing((prev) => !prev);
  }, []);

  /**
   * Persist edits
   * Exits edit mode on success.
   */
  const saveChanges = useCallback(async (data) => {
    if (!user?.uid) return;
    
    setIsSaving(true);
    try {
      await updateProfile(user.uid, data);
      setIsEditing(false);
    } catch (error) {
      console.error('[useProfileEdit] save failed', error);
      throw error;
    } finally {
      setIsSaving(false);
    }
  }, [user]);

  /**
   * Switch the active sidebar tab.
   * Also exits edit mode to prevent unsaved-change confusion.
   */
  const switchTab = useCallback((tabId) => {
    setActiveTab(tabId);
    setIsEditing(false);
  }, []);

  return { activeTab, isEditing, isSaving, toggleEdit, saveChanges, switchTab };
}
