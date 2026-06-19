import React from 'react';
import { useRive } from '@rive-app/react-canvas';

export default function GlobalLoader() {
  const { RiveComponent } = useRive({
    src: '/26908-50574-cloner-scripted-path-effect.riv',
    autoplay: true,
    // Add stateMachines: "State Machine Name" if there is a specific one you want to run.
  });

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand-black/90 pointer-events-none backdrop-blur-sm">
      <div 
        className="w-64 h-64 md:w-80 md:h-80 pointer-events-none"
        style={{
          maskImage: 'radial-gradient(circle, black 40%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 70%)'
        }}
      >
        <RiveComponent className="w-full h-full scale-[1.2]" />
      </div>
    </div>
  );
}
