import React from 'react';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/shared/components/Button';
import { Select } from '@/shared/components/Select';
import { HOME_STRINGS } from '@/core/strings';

export const SearchSection = () => {
  return (
    <section className="relative -mt-16 z-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-brand-black-card/80 p-6 md:p-8 shadow-2xl backdrop-blur-xl border border-white/10 relative overflow-hidden"
        >
          {/* Subtle glow border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/20 to-transparent opacity-50" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-end gap-4 md:gap-6">
            <div className="w-full md:w-1/4">
              <Select
                label={HOME_STRINGS.search.lookingFor}
                options={[
                  { value: 'bride', label: 'Bride (Female)' },
                  { value: 'groom', label: 'Groom (Male)' },
                ]}
                defaultValue="bride"
              />
            </div>

            <div className="w-full md:w-1/3 flex items-end gap-2">
              <div className="w-full">
                <Select
                  label={HOME_STRINGS.search.ageRange}
                  options={Array.from({ length: 42 }, (_, i) => ({
                    value: String(i + 18),
                    label: String(i + 18),
                  }))}
                  defaultValue="21"
                />
              </div>
              <span className="pb-3 text-brand-white-muted font-medium">{HOME_STRINGS.search.to}</span>
              <div className="w-full">
                <Select
                  options={Array.from({ length: 42 }, (_, i) => ({
                    value: String(i + 18),
                    label: String(i + 18),
                  }))}
                  defaultValue="28"
                />
              </div>
            </div>

            <div className="w-full md:w-1/4">
              <Select
                label={HOME_STRINGS.search.religion}
                options={[
                  { value: 'sikh', label: 'Sikh' },
                  { value: 'sikh-jatt', label: 'Sikh - Jatt' },
                  { value: 'sikh-khatri', label: 'Sikh - Khatri' },
                  { value: 'sikh-ramgarhia', label: 'Sikh - Ramgarhia' },
                ]}
                defaultValue="sikh"
              />
            </div>

            <div className="w-full md:w-auto">
              <Button size="lg" className="w-full md:w-auto h-14 px-8 shadow-[0_4px_10px_rgba(255,102,0,0.15)] hover:shadow-[0_4px_15px_rgba(255,102,0,0.3)] transition-shadow">
                <Search className="mr-2 h-5 w-5" />
                {HOME_STRINGS.search.button}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
