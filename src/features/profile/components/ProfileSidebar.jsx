import React from 'react';
import { cn } from '@/core/utils';

/**
 * Sidebar tab navigation for the profile editor.
 *
 * @param {{
 *   sections: Array<{ id: string, title: string, icon: React.ElementType }>,
 *   activeTab: string,
 *   onTabChange: (id: string) => void,
 * }} props
 */
export function ProfileSidebar({ sections, activeTab, onTabChange }) {
  return (
    <nav className="space-y-1" aria-label="Profile sections">
      {sections.map(({ id, title, icon: Icon }) => {
        const isActive = id === activeTab;
        return (
          <button
            key={id}
            type="button"
            onClick={() => onTabChange(id)}
            className={cn(
              'flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors',
              isActive
                ? 'bg-brand-orange/10 text-brand-orange'
                : 'text-brand-white-muted hover:bg-brand-black-soft hover:text-white',
            )}
          >
            <Icon className={cn('h-5 w-5', isActive ? 'text-brand-orange' : 'text-brand-white-muted')} />
            {title}
          </button>
        );
      })}
    </nav>
  );
}
