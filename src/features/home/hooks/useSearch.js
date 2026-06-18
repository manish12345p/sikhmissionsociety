import { useState, useCallback } from 'react';

/**
 * useSearch — manages the search-partner form state.
 *
 * @returns {{
 *   searchParams: { gender: string, ageFrom: string, ageTo: string, location: string },
 *   updateParam:  (key: string, value: string) => void,
 *   handleSearch: () => void,
 * }}
 */
const INITIAL_STATE = {
  gender: '',
  ageFrom: '',
  ageTo: '',
  location: '',
};

export const useSearch = () => {
  const [searchParams, setSearchParams] = useState(INITIAL_STATE);

  /** Update a single field in the search form. */
  const updateParam = useCallback((key, value) => {
    setSearchParams((prev) => ({ ...prev, [key]: value }));
  }, []);

  /** Execute the search — wire to homeService.searchProfiles later. */
  const handleSearch = useCallback(() => {
    // TODO: integrate with homeService.searchProfiles(searchParams)
    console.log('[useSearch] searching with params:', searchParams);
  }, [searchParams]);

  return { searchParams, updateParam, handleSearch };
};
