import { useState } from 'react';

export const HOBBY_LIST = [
  { id: 'reading', label: 'Reading', icon: '📖' },
  { id: 'traveling', label: 'Traveling', icon: '✈️' },
  { id: 'gym', label: 'Gym', icon: '🏋️' },
  { id: 'cooking', label: 'Cooking', icon: '🍳' },
  { id: 'painting', label: 'Painting', icon: '🎨' },
  { id: 'meditation', label: 'Meditation', icon: '🧘' },
  { id: 'photography', label: 'Photography', icon: '📸' },
  { id: 'seva', label: 'Seva', icon: '🤲' },
  { id: 'gardening', label: 'Gardening', icon: '🪴' },
  { id: 'sports', label: 'Sports', icon: '🏃' },
];

export function useLifestyleInterests(watch, setValue) {
  const selectedHobbies = watch('hobbies') || [];

  const toggleHobby = (hobbyId) => {
    if (selectedHobbies.includes(hobbyId)) {
      setValue('hobbies', selectedHobbies.filter(id => id !== hobbyId), { shouldValidate: true });
    } else {
      setValue('hobbies', [...selectedHobbies, hobbyId], { shouldValidate: true });
    }
  };

  return {
    selectedHobbies,
    toggleHobby
  };
}
