import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Reusable Button component for City Enterprises design system.
 * Supports button, external link, or react-router Link.
 */
export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  leftIcon,
  rightIcon,
  disabled = false,
  fullWidth = false,
  type = 'button',
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.98]';

  const variants = {
    primary: 'bg-[#D9232E] hover:bg-[#BF1B25] text-white shadow-sm hover:shadow focus-visible:ring-[#D9232E]',
    secondary: 'bg-[#F5F5F0] hover:bg-[#EBEBE3] text-[#1F2937] border border-[#E8E8E1] hover:border-[#D9D9D2] focus-visible:ring-[#1F2937]',
    outline: 'bg-white hover:bg-[#FEECEE] text-[#D9232E] border border-[#D9232E]/30 hover:border-[#D9232E] focus-visible:ring-[#D9232E]',
    ghost: 'text-[#4B5563] hover:text-[#111827] hover:bg-[#F5F5F0] focus-visible:ring-[#9CA3AF]',
    yellow: 'bg-[#EAB308] hover:bg-[#CA8A04] text-[#111827] shadow-sm hover:shadow focus-visible:ring-[#EAB308]',
    white: 'bg-white hover:bg-gray-50 text-[#1F2937] border border-gray-200 shadow-sm focus-visible:ring-gray-300',
  };

  const sizes = {
    sm: 'text-xs px-3.5 py-2 gap-1.5 min-h-[36px]',
    md: 'text-sm px-5 py-2.5 gap-2 min-h-[44px]',
    lg: 'text-base px-6 py-3.5 gap-2.5 min-h-[50px]',
  };

  const widthStyle = fullWidth ? 'w-full' : '';
  const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${widthStyle} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
    </button>
  );
}
