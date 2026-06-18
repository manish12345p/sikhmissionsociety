import React, { useState, useEffect } from 'react';
import GlobalLoader from '@/shared/components/GlobalLoader';
import HeroSection from '../components/HeroSection';
import { SearchSection } from "../components/SearchSection";
import { FeaturedProfiles } from "../components/FeaturedProfiles";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { SuccessStories } from "../components/SuccessStories";
import { FaqSection } from "../components/FaqSection";
import { CtaSection } from "../components/CtaSection";

/**
 * HomePage — Slim composition root.
 *
 * All logic, data, and markup live in the individual section
 * components. This file only orchestrates their layout order.
 */
const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Artificial delay to show the loader on home page
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <GlobalLoader />;
  }

  return (
    <main>
      <HeroSection />
      <SearchSection />
      <FeaturedProfiles />
      <WhyChooseUs />
      <SuccessStories />
      <FaqSection />
      <CtaSection />
    </main>
  );
};

export default HomePage;
