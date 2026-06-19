import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/shared/components/Button';
import { HOME_STRINGS } from '@/core/strings';

export const CtaSection = () => {
  return (
    <section className="relative overflow-hidden bg-brand-orange py-24">
      {/* Abstract Background Elements */}
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div className="absolute -left-10 -top-10 h-64 w-64 rounded-full bg-white blur-3xl" />
        <div className="absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-black blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-4xl font-black font-display text-white md:text-5xl drop-shadow-md">
            {HOME_STRINGS.cta.title}
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/90 md:text-xl font-medium">
            {HOME_STRINGS.cta.subtitle}
          </p>
          <Link href="/signup">
            <Button size="lg" className="h-14 px-8 bg-brand-black text-white hover:bg-black shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              {HOME_STRINGS.cta.button}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
