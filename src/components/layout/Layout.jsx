import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingWhatsApp from './FloatingWhatsApp';

/**
 * ScrollToTop helper to ensure each navigation starts at the top of the page.
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, [pathname]);

  return null;
}

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBF9] text-[#1F2937]">
      <ScrollToTop />
      {/* Sticky Responsive Header */}
      <Navbar />

      {/* Main Page Body */}
      <main className="flex-1 w-full flex flex-col">
        <Outlet />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
