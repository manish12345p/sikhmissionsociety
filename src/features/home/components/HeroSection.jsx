import React from 'react';
import Link from 'next/link';

import { KhandaIcon } from '@/shared/components/SikhMissionSocietyLogo';
import { Button } from '@/shared/components/Button';
import { STATS } from '../models/homeConstants';
import { HOME_STRINGS } from '@/core/strings';



export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-brand-black py-20 lg:py-32 perspective-1000">
      {/* Animated Blob Backgrounds */}
      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
        <div className="hidden md:block absolute top-0 -left-4 w-72 h-72 bg-brand-orange/20 rounded-full filter mix-blend-multiply blur-[100px] animate-blob" />
        <div className="hidden md:block absolute top-0 -right-4 w-72 h-72 bg-[#cc5200]/20 rounded-full filter mix-blend-multiply blur-[100px] animate-blob animation-delay-2000" />
        <div className="hidden md:block absolute -bottom-8 left-20 w-72 h-72 bg-brand-orange-light/20 rounded-full filter mix-blend-multiply blur-[100px] animate-blob animation-delay-4000" />
      </div>

      {/* Fixed Khanda Watermark (Animation removed for LCP) */}
      <div 
        className="hidden md:flex pointer-events-none absolute inset-0 z-0 items-center justify-center opacity-[0.03]"
      >
        <KhandaIcon className="h-[700px] w-[700px] text-white" />
      </div>

      <div 
        className="container relative z-10 mx-auto px-4 animate-fade-in-up"
      >
        <div className="mx-auto max-w-4xl text-center">
          {/* H1 animation removed for LCP */}
          <h1 className="mb-6 text-5xl font-black font-display leading-tight text-white md:text-6xl lg:text-7xl">
            {HOME_STRINGS.hero.headlinePrefix}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-[#ffcc00] to-[#cc5200] animate-gradient-x">
              {HOME_STRINGS.hero.headlineHighlight}
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-brand-white-muted md:text-xl">
            {HOME_STRINGS.hero.description}
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row group">
            <Button href="/signup" size="lg" className="relative overflow-hidden group-hover:-translate-y-1 h-14 px-8 text-lg font-semibold shadow-[0_4px_15px_rgba(255,102,0,0.2)] hover:shadow-[0_6px_20px_rgba(255,102,0,0.4)] transition-all duration-300">
              <span className="relative z-10">{HOME_STRINGS.hero.ctaPrimary}</span>
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] animate-shimmer" />
            </Button>
            <Button href="/search" variant="outline" size="lg" className="h-14 px-8 text-lg font-semibold border-white/20 hover:border-brand-orange hover:bg-brand-orange/10 hover:shadow-orange-glow transition-all duration-300">
              {HOME_STRINGS.hero.ctaSecondary}
            </Button>
          </div>
        </div>

        {/* Floating Glass Orbs */}
        <div className="pointer-events-none absolute -left-10 top-1/4 hidden lg:block animate-float-fast">
          <div className="h-20 w-20 rounded-full bg-gradient-to-br from-brand-orange/40 to-transparent backdrop-blur-md shadow-[0_0_30px_rgba(255,102,0,0.3)] border border-white/20" />
        </div>
        
        <div className="pointer-events-none absolute -right-10 top-1/3 hidden lg:block animate-float animation-delay-2000">
          <div className="h-28 w-28 rounded-full bg-gradient-to-tl from-[#cc5200]/40 to-transparent backdrop-blur-xl shadow-[0_0_40px_rgba(204,82,0,0.3)] border border-white/10" />
        </div>

        {/* Stats row with hover tilt and glow */}
        <div className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4 relative">
          <div className="absolute inset-0 bg-brand-black-card/30 backdrop-blur-lg rounded-3xl border border-white/5 -m-6" />
          {STATS.map((stat) => (
            <div key={stat.id} className="text-center relative z-10 group cursor-default transition-transform duration-300 hover:-translate-y-2 hover:scale-105">
              <div className="absolute inset-0 bg-brand-orange/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              <p className="text-4xl font-black font-display text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-[#ffaa00] drop-shadow-[0_0_15px_rgba(255,102,0,0.5)] group-hover:animate-pulse-orange">{stat.value}</p>
              <p className="mt-2 text-sm font-medium tracking-wide uppercase text-brand-white-muted group-hover:text-white transition-colors">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
