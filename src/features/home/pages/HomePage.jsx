import React, { useState, useEffect, Suspense } from 'react';
import GlobalLoader from '@/shared/components/GlobalLoader';
import HeroSection from '../components/HeroSection';
import { SearchSection } from "../components/SearchSection";
import dynamic from 'next/dynamic';

const FeaturedProfiles = dynamic(() => import('../components/FeaturedProfiles').then(mod => mod.FeaturedProfiles), { ssr: true });
const WhyChooseUs = dynamic(() => import('../components/WhyChooseUs').then(mod => mod.WhyChooseUs), { ssr: true });
const SuccessStories = dynamic(() => import('../components/SuccessStories').then(mod => mod.SuccessStories), { ssr: true });
const FaqSection = dynamic(() => import('../components/FaqSection').then(mod => mod.FaqSection), { ssr: true });
const CtaSection = dynamic(() => import('../components/CtaSection').then(mod => mod.CtaSection), { ssr: true });

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
      <Suspense fallback={<div className="h-96" />}>
        <FeaturedProfiles />
        <WhyChooseUs />
        <SuccessStories />
        <FaqSection />
        <CtaSection />
      </Suspense>
    </main>
  );
};

export default HomePage;
