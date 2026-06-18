import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, ChevronDown } from 'lucide-react';
import { cn } from '@/core/utils';

export const Select = React.forwardRef(({ label, error, className, icon: Icon, id, options = [], ...props }, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasLocalValue, setHasLocalValue] = useState(false);
  const innerRef = useRef(null);
  
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');
  const hasValue = Boolean(props.value || props.defaultValue || hasLocalValue);

  // Handle browser autofill by polling the actual DOM node value briefly after mount
  useEffect(() => {
    let checks = 0;
    const intervalId = setInterval(() => {
      if (innerRef.current && innerRef.current.value) {
        setHasLocalValue(true);
        clearInterval(intervalId);
      }
      if (++checks > 10) clearInterval(intervalId);
    }, 100);
    return () => clearInterval(intervalId);
  }, []);

  // Merge the forwarded ref with our internal ref
  const setRefs = (node) => {
    innerRef.current = node;
    if (typeof ref === 'function') {
      ref(node);
    } else if (ref) {
      ref.current = node;
    }
  };

  return (
    <div className={cn('relative w-full group', className)}>
      {label && (
        <motion.label
          htmlFor={inputId}
          initial={false}
          animate={{
            y: isFocused || hasValue || props.placeholder ? -24 : 14,
            scale: isFocused || hasValue || props.placeholder ? 0.85 : 1,
            color: isFocused ? '#ff6600' : error ? '#ef4444' : '#a1a1aa'
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute left-4 origin-left pointer-events-none z-10 font-medium"
        >
          {label}
        </motion.label>
      )}

      <div className="relative">
        {/* Glow behind select on focus */}
        <AnimatePresence>
          {isFocused && !error && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute -inset-0.5 bg-gradient-to-r from-brand-orange to-[#cc5200] rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-500"
            />
          )}
        </AnimatePresence>

        <select
          ref={setRefs}
          id={inputId}
          onFocus={(e) => {
            setIsFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            props.onBlur?.(e);
          }}
          className={cn(
            'relative w-full appearance-none rounded-xl border bg-brand-black-card/80 py-3.5 text-white',
            'backdrop-blur-sm transition-all duration-300 outline-none cursor-pointer',
            Icon ? 'pl-4 pr-12' : 'px-4',
            error
              ? 'border-red-500/50 focus:border-red-500'
              : 'border-white/10 hover:border-white/20 focus:border-brand-orange/50',
            className
          )}
          {...props}
          onChange={(e) => {
            setHasLocalValue(Boolean(e.target.value));
            props.onChange?.(e);
          }}
        >
          <option value="" disabled hidden></option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-brand-black-card text-white">
              {opt.label}
            </option>
          ))}
        </select>
        
        {/* Optional Custom Icon */}
        {Icon && (
          <div className="absolute inset-y-0 right-10 flex items-center pointer-events-none text-brand-white-muted opacity-50">
            <Icon className="h-5 w-5" />
          </div>
        )}

        {/* Custom Chevron */}
        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-brand-white-muted">
          <ChevronDown className={cn("h-5 w-5 transition-transform duration-300", isFocused && "text-brand-orange rotate-180")} />
        </div>
      </div>

      {/* Error Message */}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="mt-1.5 flex items-center gap-1.5 text-sm text-red-400"
          >
            <AlertCircle className="h-4 w-4" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
});

Select.displayName = 'Select';
