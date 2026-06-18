import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/core/utils';
import { FAQS } from '../models/homeConstants';
import { HOME_STRINGS } from '@/core/strings';

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-brand-black-soft py-24 relative z-10">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">{HOME_STRINGS.faq.title}</h2>
          <p className="text-brand-white-muted">{HOME_STRINGS.faq.subtitle}</p>
        </motion.div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={cn(
                  "overflow-hidden rounded-2xl border transition-colors duration-300",
                  isOpen ? "bg-brand-black-card border-brand-orange/30 shadow-[0_5px_20px_rgba(255,102,0,0.05)]" : "bg-brand-black border-white/5 hover:border-white/10"
                )}
              >
                <button
                  className="flex w-full items-center justify-between p-6 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className={cn("font-bold text-lg transition-colors", isOpen ? "text-brand-orange" : "text-white")}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      'h-5 w-5 shrink-0 transition-transform duration-300',
                      isOpen ? 'rotate-180 text-brand-orange' : 'text-brand-white-muted'
                    )}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-brand-white-muted leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
