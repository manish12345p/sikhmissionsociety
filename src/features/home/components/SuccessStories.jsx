import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { SUCCESS_STORIES } from '../models/homeConstants';
import { HOME_STRINGS } from '@/core/strings';

export const SuccessStories = () => {
  return (
    <section className="bg-brand-black py-24 relative overflow-hidden">
      {/* Decorative blurred blob */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#cc5200]/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">{HOME_STRINGS.successStories.title}</h2>
          <p className="mx-auto max-w-2xl text-brand-white-muted">{HOME_STRINGS.successStories.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {SUCCESS_STORIES.map((story, i) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl bg-brand-black-card p-8 border border-white/5 hover:border-brand-orange/30 transition-colors"
            >
              <Quote className="absolute right-6 top-6 h-12 w-12 text-brand-orange/10" />
              <div className="mb-6 flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-brand-orange shadow-[0_0_15px_rgba(255,102,0,0.3)]">
                  <img
                    src={story.image?.src || story.image}
                    alt={story.names}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-white">{story.names}</h3>
                  <p className="text-sm text-brand-orange">{story.location}</p>
                </div>
              </div>
              <p className="italic text-brand-white-muted leading-relaxed">"{story.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
