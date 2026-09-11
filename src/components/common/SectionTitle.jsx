import React from 'react';

/**
 * Reusable SectionTitle component for standard section headings.
 */
export default function SectionTitle({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
  titleClassName = '',
  subtitleClassName = '',
}) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-8 sm:mb-12 ${isCenter ? 'text-center mx-auto' : 'text-left'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-3 ${
          isCenter ? 'mx-auto' : ''
        } bg-[#FEECEE] text-[#D9232E] border border-[#D9232E]/15`}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#D9232E]"></span>
          <span>{badge}</span>
        </div>
      )}

      {title && (
        <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111827] leading-tight ${titleClassName}`}>
          {title}
        </h2>
      )}

      {subtitle && (
        <p className={`mt-3 text-sm sm:text-base text-[#4B5563] leading-relaxed ${
          isCenter ? 'max-w-2xl mx-auto' : 'max-w-2xl'
        } ${subtitleClassName}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
