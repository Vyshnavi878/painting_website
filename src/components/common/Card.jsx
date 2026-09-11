import React from 'react';

/**
 * Reusable Card component for content boxes, products, features, and contact cards.
 */
export default function Card({
  children,
  className = '',
  hoverEffect = false,
  padding = 'md',
  as: Component = 'div',
  ...props
}) {
  const paddingStyles = {
    none: 'p-0',
    sm: 'p-4 sm:p-5',
    md: 'p-5 sm:p-6 lg:p-7',
    lg: 'p-6 sm:p-8 lg:p-10',
  };

  const hoverStyle = hoverEffect
    ? 'transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-[#D9232E]/30 cursor-pointer'
    : 'transition-shadow duration-200';

  return (
    <Component
      className={`bg-white rounded-2xl border border-[#E8E8E1] shadow-sm ${paddingStyles[padding] || paddingStyles.md} ${hoverStyle} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
