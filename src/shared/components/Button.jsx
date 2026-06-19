import React, { forwardRef } from 'react';
import Link from 'next/link';
import { cn } from '@/core/utils';
import { Loader2 } from 'lucide-react';

const Button = forwardRef(({ 
  className, 
  variant = 'primary', 
  size = 'default', 
  isLoading = false, 
  disabled,
  href,
  children, 
  ...props 
}, ref) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black disabled:opacity-40 disabled:pointer-events-none tracking-wide';

  const variants = {
    primary: 'bg-brand-orange text-[#0a0a0a] hover:bg-[#ff8533] focus-visible:ring-brand-orange shadow-orange-glow-sm hover:shadow-orange-glow rounded-xl',
    secondary: 'bg-brand-black-card text-brand-white hover:bg-brand-black-border focus-visible:ring-brand-orange border border-brand-black-border rounded-xl',
    outline: 'border border-brand-orange text-brand-orange bg-transparent hover:bg-brand-orange hover:text-[#0a0a0a] focus-visible:ring-brand-orange rounded-xl',
    ghost: 'bg-transparent hover:bg-brand-black-card text-brand-white-muted hover:text-brand-white focus-visible:ring-brand-orange rounded-xl',
    link: 'underline-offset-4 hover:underline text-brand-orange focus-visible:ring-brand-orange',
  };

  const sizes = {
    default: 'h-11 py-2 px-5 text-sm',
    sm: 'h-9 px-4 text-xs rounded-lg',
    lg: 'h-14 px-8 text-base',
    icon: 'h-11 w-11',
  };

  return (
    <>
      {href ? (
        <Link 
          ref={ref}
          href={href} 
          className={cn(baseStyles, variants[variant], sizes[size], className)} 
          {...props}
        >
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {children}
        </Link>
      ) : (
        <button
          ref={ref}
          disabled={disabled || isLoading}
          className={cn(baseStyles, variants[variant], sizes[size], className)}
          {...props}
        >
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {children}
        </button>
      )}
    </>
  );
});

Button.displayName = 'Button';
export { Button };
