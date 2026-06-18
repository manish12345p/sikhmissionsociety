/**
 * Sikh Mission Society Logo Component
 * Uses the exact client-provided logo image — no modifications.
 */
import React from 'react';
import { cn } from '@/core/utils';
import logoImage from '@/assets/images/logo.png';

/**
 * Renders the official Sikh Mission Society logo.
 * 
 * @param {'sm' | 'default' | 'lg' | 'xl'} size - Logo size preset
 * @param {string} className - Additional CSS classes
 */
export function SikhMissionSocietyLogo({ size = 'default', className, ...props }) {
  const sizes = {
    sm: 'h-8',
    default: 'h-10',
    lg: 'h-14',
    xl: 'h-20',
  };

  return (
    <img
      src={logoImage}
      alt="Sikh Mission Society"
      className={cn(sizes[size], 'w-auto object-contain mix-blend-screen', className)}
      {...props}
    />
  );
}

/**
 * Renders just the Khanda icon portion.
 * Since the client logo is a single composite image, this still
 * renders the full logo but at a smaller, icon-appropriate size.
 * 
 * If the client provides a separate Khanda-only asset later,
 * swap the import here.
 */
export function KhandaIcon({ className = 'w-10 h-10', ...props }) {
  return (
    <img
      src={logoImage}
      alt="Sikh Mission Society"
      className={cn('object-contain mix-blend-screen', className)}
      {...props}
    />
  );
}
