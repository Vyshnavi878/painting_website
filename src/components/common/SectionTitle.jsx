import React from 'react';

/**
 * SectionTitle — City Enterprises design system.
 *
 * Eyebrow: small uppercase tracking text (no pill badge background).
 * Title: DM Serif Display, editorial weight.
 * Subtitle: Inter, subdued body copy.
 */
export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
  titleClassName = '',
  subtitleClassName = '',
  // Legacy prop support: treat badge as eyebrow
  badge,
}) {
  const label = eyebrow || badge;
  const isCenter = align === 'center';

  return (
    <div
      className={`mb-8 sm:mb-12 ${isCenter ? 'text-center mx-auto' : 'text-left'} ${className}`}
    >
      {label && (
        <p
          className={`text-[11px] font-semibold uppercase tracking-[0.15em] text-[#D9232E] mb-3 ${
            isCenter ? 'block' : ''
          }`}
        >
          {label}
        </p>
      )}

      {title && (
        <h2
          className={`font-display text-3xl sm:text-4xl text-[#111827] leading-tight ${titleClassName}`}
        >
          {title}
        </h2>
      )}

      {subtitle && (
        <p
          className={`mt-3 text-sm sm:text-base text-[#6B7280] leading-relaxed ${
            isCenter ? 'max-w-2xl mx-auto' : 'max-w-2xl'
          } ${subtitleClassName}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
