import React from 'react';
import { Link } from 'react-router-dom';
import logoAsset from '../../assets/city-enterprises-logo.png';

/**
 * Reusable official Logo component for City Enterprises.
 * Preserves the exact proportions, colors, and appearance of the provided logo asset.
 */
export default function Logo({
  variant = 'navbar',
  className = '',
  to = '/',
  alt = 'City Enterprises - Authorized Asian Paints Dealer',
}) {
  // Preset heights that keep the logo clear, readable, and perfectly proportioned
  const variants = {
    navbar: 'h-10 sm:h-12 lg:h-13 w-auto object-contain',
    footer: 'h-10 sm:h-11 w-auto object-contain',
    hero: 'h-12 sm:h-14 lg:h-16 w-auto object-contain',
    card: 'h-10 sm:h-12 w-auto object-contain',
    badge: 'h-8 sm:h-9 w-auto object-contain',
  };

  const imageElement = (
    <img
      src={logoAsset}
      alt={alt}
      className={`${variants[variant] || variants.navbar} select-none transition-transform duration-200 ${className}`}
      loading="eager"
    />
  );

  if (to) {
    return (
      <Link
        to={to}
        className="inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9232E] rounded-xl p-0.5"
        aria-label="City Enterprises Home"
      >
        {imageElement}
      </Link>
    );
  }

  return imageElement;
}
