import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Briefcase } from 'lucide-react';
import { Button } from '@/shared/components/Button';
import { FEATURED_PROFILES } from '../models/homeConstants';
import { HOME_STRINGS } from '@/core/strings';

export const FeaturedProfiles = () => {
  return (
    <section className="bg-brand-black py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">{HOME_STRINGS.featuredProfiles.title}</h2>
          <p className="mx-auto max-w-2xl text-brand-white-muted">{HOME_STRINGS.featuredProfiles.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_PROFILES.slice(0, 6).map((profile, i) => (
            <motion.div
              key={profile.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-2xl bg-brand-black-card border border-white/5 transition-all hover:border-brand-orange/30 hover:shadow-[0_10px_30px_rgba(255,102,0,0.1)]"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                <Image
                  src={profile.image}
                  alt={profile.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {profile.name}, {profile.age}
                  </h3>
                  <div className="flex flex-col gap-1.5 text-sm text-brand-white-muted">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-brand-orange" />
                      {profile.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-brand-orange" />
                      {profile.occupation}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <Button variant="outline" className="w-full border-white/10 hover:border-brand-orange group-hover:bg-brand-orange/10 transition-colors">
                  {HOME_STRINGS.featuredProfiles.viewProfile}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
