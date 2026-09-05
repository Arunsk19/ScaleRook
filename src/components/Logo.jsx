import React, { useState } from 'react';

export default function Logo({ size = 'medium', showTagline = true, className = '' }) {
  // Height configurations based on size prop
  const sizeClasses = {
    small: 'h-6',
    medium: 'h-8',
    large: 'h-11',
    xl: 'h-16'
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Minimal Architectural Chess Rook SVG */}
      <div className="relative flex items-center justify-center flex-shrink-0">
        <svg
          viewBox="0 0 40 40"
          className={`${sizeClasses[size] || 'h-8'} w-auto text-[#D7A62A] fill-current drop-shadow-[0_0_8px_rgba(215,166,42,0.4)]`}
        >
          {/* Rook Battlement Tops */}
          <path d="M 8 10 L 13 10 L 13 14 L 17 14 L 17 10 L 23 10 L 23 14 L 27 14 L 27 10 L 32 10 L 32 16 L 29 18 L 29 28 L 32 30 L 32 34 L 8 34 L 8 30 L 11 28 L 11 18 L 8 16 Z" fill="#D7A62A" />
          {/* Inner Purple Core Detail */}
          <rect x="18" y="19" width="4" height="7" rx="1" fill="#7B00FF" />
          {/* Base Trim */}
          <rect x="6" y="32" width="28" height="2" fill="#E5B93F" />
        </svg>
      </div>

      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1 font-serif text-white font-bold tracking-wider leading-none" style={{ fontSize: size === 'small' ? '1rem' : size === 'large' ? '1.5rem' : '1.2rem' }}>
          <span className="text-[#F4F0E8] font-semibold">SCALE</span>
          <span className="text-[#D7A62A] font-bold">ROOK</span>
        </div>
        {showTagline && (
          <span className="text-[9px] md:text-[10px] font-mono tracking-[0.2em] text-[#B8B3AE] uppercase mt-0.5">
            STRATEGIC MOVES • SCALABLE GROWTH
          </span>
        )}
      </div>
    </div>
  );
}
