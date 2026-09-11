import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Reusable Horizontal Carousel component.
 * Features:
 * - Left/Right circular arrow controls with City Enterprises brand styling
 * - Disabled states when at the start or end of the track
 * - Smooth programmatic scrolling and native touch/trackpad swipe
 * - Scroll snap alignment
 * - Automatic reset to start on filter/data changes
 */
export default function Carousel({
  children,
  resetKey,
  ariaLabel = 'Content carousel',
  className = '',
}) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Update disabled states based on scroll position
  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    // 4px tolerance for subpixel rounding
    setCanScrollLeft(scrollLeft > 4);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 4);
  }, []);

  // Scroll by card width + gap smoothly
  const handleScroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector('[data-carousel-card]');
    const gap = window.innerWidth >= 640 ? 24 : 16;
    const scrollStep = card ? card.offsetWidth + gap : el.clientWidth * 0.8;

    el.scrollBy({
      left: direction === 'left' ? -scrollStep : scrollStep,
      behavior: 'smooth',
    });
  };

  // Reset scroll to beginning whenever resetKey changes (e.g. room category switch)
  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.scrollTo({ left: 0, behavior: 'instant' });
      // Short delay to let DOM paint new children before computing scrollWidth
      requestAnimationFrame(() => {
        updateScrollState();
      });
    }
  }, [resetKey, updateScrollState]);

  // Track resize & scroll events
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateScrollState();

    const resizeObserver = new ResizeObserver(() => {
      updateScrollState();
    });
    resizeObserver.observe(el);
    window.addEventListener('resize', updateScrollState);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateScrollState);
    };
  }, [updateScrollState]);

  return (
    <div
      className={`relative flex items-center gap-2 sm:gap-4 w-full ${className}`}
      role="region"
      aria-label={ariaLabel}
    >
      {/* Left Arrow Button */}
      <button
        type="button"
        onClick={() => handleScroll('left')}
        disabled={!canScrollLeft}
        aria-label="Scroll to previous cards"
        className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full shrink-0 flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-[#D9232E] ${
          canScrollLeft
            ? 'bg-white text-[#D9232E] border border-[#E8E8E1] hover:bg-[#FEECEE] hover:border-[#D9232E]/40 shadow-soft-sm cursor-pointer active:scale-95'
            : 'bg-[#F5F5F0] text-[#9CA3AF] border border-[#E8E8E1] cursor-not-allowed opacity-40 shadow-none'
        }`}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Scrollable Track */}
      <div
        ref={scrollRef}
        onScroll={updateScrollState}
        className="flex-1 overflow-x-auto no-scrollbar scroll-smooth flex gap-4 sm:gap-6 py-2 touch-pan-x"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {children}
      </div>

      {/* Right Arrow Button */}
      <button
        type="button"
        onClick={() => handleScroll('right')}
        disabled={!canScrollRight}
        aria-label="Scroll to next cards"
        className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full shrink-0 flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-[#D9232E] ${
          canScrollRight
            ? 'bg-white text-[#D9232E] border border-[#E8E8E1] hover:bg-[#FEECEE] hover:border-[#D9232E]/40 shadow-soft-sm cursor-pointer active:scale-95'
            : 'bg-[#F5F5F0] text-[#9CA3AF] border border-[#E8E8E1] cursor-not-allowed opacity-40 shadow-none'
        }`}
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}
