import React from 'react';

export default function Logo({ size = 'medium', showTagline = true, className = '' }) {
  const sizeClasses = {
    small: 'w-28',
    medium: 'w-40',
    large: 'w-56',
    xl: 'w-72'
  };

  return (
    <div className={`inline-flex select-none ${className}`}>
      <img
        src="/WhatsApp Image 2026-09-05 at 3.39.35 PM.jpeg"
        alt="ScaleRooks - Strategic moves. Scalable growth."
        className={`${sizeClasses[size] || 'w-40'} h-auto object-contain ${showTagline ? '' : 'aspect-[3.5/1] object-cover object-center'}`}
      />
    </div>
  );
}
