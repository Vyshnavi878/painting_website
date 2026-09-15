import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Reusable Button component — City Enterprises design system.
 * Supports: button element, external <a>, react-router Link.
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
  const base =
    'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.98]';

  const variants = {
    primary:
      'bg-[#D9232E] hover:bg-[#BF1B25] text-white focus-visible:ring-[#D9232E]',
    secondary:
      'bg-white hover:bg-[#F5F5F0] text-[#1F2937] border border-[#E8E8E1] hover:border-[#D9D9D2] focus-visible:ring-[#9CA3AF]',
    outline:
      'bg-transparent hover:bg-[#FEECEE] text-[#D9232E] border border-[#D9232E]/40 hover:border-[#D9232E] focus-visible:ring-[#D9232E]',
    ghost:
      'text-[#4B5563] hover:text-[#111827] hover:bg-[#F5F5F0] focus-visible:ring-[#9CA3AF]',
    dark:
      'bg-[#111827] hover:bg-[#1F2937] text-white focus-visible:ring-[#374151]',
    white:
      'bg-white hover:bg-gray-50 text-[#1F2937] border border-gray-200 focus-visible:ring-gray-300',
  };

  const sizes = {
    sm: 'text-xs px-3.5 py-2 gap-1.5 min-h-[36px]',
    md: 'text-sm px-5 py-2.5 gap-2 min-h-[42px]',
    lg: 'text-sm px-6 py-3 gap-2.5 min-h-[48px]',
  };

  const cls = `${base} ${variants[variant] ?? variants.primary} ${sizes[size] ?? sizes.md} ${fullWidth ? 'w-full' : ''} ${className}`;

  const inner = (
    <>
      {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
    </>
  );

  if (to) return <Link to={to} className={cls} {...props}>{inner}</Link>;
  if (href) return <a href={href} className={cls} {...props}>{inner}</a>;
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls} {...props}>
      {inner}
    </button>
  );
}
