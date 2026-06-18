import React from 'react';
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
