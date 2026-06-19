import React from 'react';
import { cn } from '@/core/utils';

export function Card({ className, children, ...props }) {
  return (
    <div className={cn("card-dark overflow-hidden", className)} {...props}>
      {children}
    </div>
  );
}

export function CardHeader({ className, children, hover, ...props }) {
  return (
    <div 
      className={cn(
        "relative rounded-2xl border border-white/10 bg-brand-black-card/95 p-6 transition-all duration-300",
        hover && "hover:-translate-y-1 hover:border-brand-orange/50 hover:shadow-orange-glow",
        className
      )} 
      {...props}
    >
      {children}
    </div>
  );
}

export function CardTitle({ className, children, ...props }) {
  return (
    <h3 className={cn("text-xl font-semibold leading-none tracking-tight text-brand-white", className)} {...props}>
      {children}
    </h3>
  );
}

export function CardContent({ className, children, ...props }) {
  return (
    <div className={cn("p-6", className)} {...props}>
      {children}
    </div>
  );
}
