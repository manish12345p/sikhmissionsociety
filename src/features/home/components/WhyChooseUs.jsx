import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Users, Globe, HeadphonesIcon, Heart } from 'lucide-react';
import { FEATURES } from '../models/homeConstants';
import { HOME_STRINGS } from '@/core/strings';

const iconMap = {
  ShieldCheck, Lock, Users, Globe, HeadphonesIcon, Heart
};

export const WhyChooseUs = () => {
  return (
    <section className="bg-brand-black-soft py-24 relative overflow-hidden">
      {/* Decorative blurred blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-[60px] md:blur-[100px] pointer-events-none md:animate-blob" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-orange-dark/10 rounded-full blur-[60px] md:blur-[100px] pointer-events-none md:animate-blob animation-delay-2000" />
      
      <div className="container relative mx-auto px-4 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">{HOME_STRINGS.whyChooseUs.title}</h2>
          <p className="mx-auto max-w-2xl text-brand-white-muted text-lg">{HOME_STRINGS.whyChooseUs.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group rounded-3xl bg-brand-black-card/95 p-8 border border-white/5 hover:border-brand-orange/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(255,102,0,0.15)] relative overflow-hidden"
              >
                {/* Shimmer sweep effect on hover */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
                
                <div className="mb-6 relative inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-orange/10 text-brand-orange group-hover:scale-110 group-hover:bg-brand-orange group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                  {/* Outer glow rings */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-brand-orange/20 scale-100 group-hover:scale-125 group-hover:opacity-0 transition-all duration-700" />
                  <div className="absolute inset-0 rounded-2xl border-2 border-brand-orange/10 scale-100 group-hover:scale-150 group-hover:opacity-0 transition-all duration-1000 delay-100" />
                  
                  {IconComponent && <IconComponent className="h-8 w-8" />}
                </div>
                <h3 className="mb-3 text-2xl font-bold text-white group-hover:text-brand-orange transition-colors">{feature.title}</h3>
                <p className="text-brand-white-muted leading-relaxed group-hover:text-white/90 transition-colors">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
