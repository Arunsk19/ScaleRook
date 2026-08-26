import React, { useState } from 'react';

export default function Logo({ size = 'medium', showTagline = true, className = '' }) {
  const [imgError, setImgError] = useState(false);

  // Height configurations based on size prop
  const sizeClasses = {
    small: 'h-8',
    medium: 'h-11',
    large: 'h-16',
    xl: 'h-24'
  };

  return (
    <div className={`inline-flex flex-col items-start ${className}`}>
      {!imgError ? (
        <img
          src="/scalerook-logo.jpg"
          alt="ScaleRook Logo"
          className={`${sizeClasses[size] || 'h-11'} w-auto object-contain rounded filter brightness-105 contrast-105`}
          onError={() => setImgError(true)}
        />
      ) : (
        /* Vector SVG Fallback */
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-1.5 font-heading tracking-tight font-extrabold select-none">
            {/* Purple 'S' Graph Icon */}
            <svg viewBox="0 0 100 100" className={`${sizeClasses[size] || 'h-11'} w-auto text-purple-brand fill-current`}>
              <path d="M 20 80 L 30 80 L 30 65 L 20 65 Z" fill="#7E22CE" />
              <path d="M 35 80 L 45 80 L 45 50 L 35 50 Z" fill="#7E22CE" />
              <path d="M 15 65 C 15 45, 55 45, 55 35 C 55 25, 20 25, 20 35 L 10 35 C 10 15, 70 15, 70 35 C 70 55, 30 55, 30 65 Z" fill="#7E22CE" />
              {/* Arrow */}
              <path d="M 65 15 L 85 10 L 80 30 L 72 22 L 60 34 L 52 26 L 64 14 Z" fill="#5B13B9" />
            </svg>
            <span className="text-2xl md:text-3xl font-extrabold tracking-wider text-purple-brand font-heading">SCALE</span>
            <div className="relative flex items-center">
              {/* Crown over R */}
              <span className="text-2xl md:text-3xl font-extrabold tracking-wider text-gold-brand font-heading">ROOK</span>
            </div>
          </div>
          {showTagline && (
            <div className="flex items-center gap-2 w-full mt-0.5">
              <span className="h-[1px] bg-purple-brand flex-1"></span>
              <span className="text-[9px] md:text-[10px] font-mono tracking-widest text-slate-300 uppercase">
                STRATEGIC MOVES. SCALABLE GROWTH.
              </span>
              <span className="h-[1px] bg-gold-brand flex-1"></span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
