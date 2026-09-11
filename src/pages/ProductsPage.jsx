import React, { useState, useEffect } from 'react';
import {
  Search,
  SlidersHorizontal,
  CheckCircle2,
  X,
  Phone,
  MessageCircle,
  MapPin,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Package,
  Layers,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import Logo from '../components/common/Logo';
import { CATEGORIES, PRODUCTS } from '../data/productsData';

const ITEMS_PER_PAGE = 6;

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [activeProduct, setActiveProduct] = useState(null);
  const [enquiryProduct, setEnquiryProduct] = useState(null);
  const [enquirySuccess, setEnquirySuccess] = useState(false);
  const [enquiryForm, setEnquiryForm] = useState({
    name: '',
    phone: '',
    message: '',
  });

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === 'All'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  // Reset pagination to page 1 whenever category filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  // Calculate pagination values
  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / ITEMS_PER_PAGE));
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Handle page navigation with smooth scroll to products section
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    setCurrentPage(page);
    const section = document.getElementById('products-grid');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Prevent body scroll when detail modal or enquiry modal is open
  useEffect(() => {
    if (activeProduct || enquiryProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeProduct, enquiryProduct]);

  // Handle inquiry submission
  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    if (!enquiryForm.name || !enquiryForm.phone) return;
    setEnquirySuccess(true);
  };

  const getWhatsappUrl = (productName) => {
    const text = `Hello City Enterprises! I would like to enquire about ${productName} (availability, finishes, and recommended usage).`;
    return `https://wa.me/919876543210?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="w-full">
      {/* =========================================================================
          INTRODUCTORY SECTION
          ========================================================================= */}
      <section className="bg-[#FBFBF9] border-b border-[#E8E8E1] py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#FEECEE] text-[#D9232E] border border-[#D9232E]/20 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D9232E]"></span>
            <span>Asian Paints Catalogue</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] tracking-tight mb-2.5 sm:mb-3 leading-tight">
            Paints & Products
          </h1>

          <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed max-w-2xl mx-auto">
            Explore a wide range of Asian Paints products for interior walls, exterior surfaces, waterproofing, wood, metal, and other painting needs.
          </p>
        </div>
      </section>

      {/* =========================================================================
          1. PRODUCT CATEGORY FILTER UI (Horizontally scrollable on mobile)
          ========================================================================= */}
      <section className="sticky top-[72px] sm:top-20 z-30 bg-white/95 backdrop-blur-md border-b border-[#E8E8E1] py-3.5 sm:py-4 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Scrollable category list */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 w-full sm:w-auto scroll-smooth">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`whitespace-nowrap px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 focus:outline-none focus:ring-2 focus:ring-[#D9232E] min-h-[40px] flex items-center ${
                      isActive
                        ? 'bg-[#D9232E] text-white shadow-sm'
                        : 'bg-[#F5F5F0] text-[#4B5563] hover:text-[#111827] hover:bg-[#EBEBE3] border border-[#E8E8E1]'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Total Count Badge */}
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-[#6B7280] shrink-0 font-medium">
              <span>Showing</span>
              <span className="font-bold text-[#111827]">{filteredProducts.length}</span>
              <span>products</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. PRODUCT GRID
          Reusable Product Cards (NO price, NO add to cart, professional catalogue feel)
          ========================================================================= */}
      <section id="products-grid" className="py-12 sm:py-16 lg:py-20 bg-[#FBFBF9] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-[#E8E8E1] p-8">
              <Package className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-[#111827] mb-1">No products found</h3>
              <p className="text-sm text-[#6B7280] mb-4">Try selecting a different category filter above.</p>
              <Button onClick={() => setSelectedCategory('All')} variant="secondary" size="md">
                Show All Products
              </Button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentProducts.map((prod) => (
                  <div
                    key={prod.id}
                    className="bg-white rounded-2xl border border-[#E8E8E1] shadow-soft-sm overflow-hidden flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-soft-md hover:border-[#D9232E]/30 group"
                  >
                    {/* Top Image & Brand Badge */}
                    <div>
                      <div className="relative bg-[#F5F5F0] aspect-[4/3] overflow-hidden flex items-center justify-center p-6 border-b border-[#E8E8E1]">
                        <img
                          src={prod.image}
                          alt={prod.name}
                          className="h-full max-h-48 w-auto object-contain transform group-hover:scale-105 transition-transform duration-300 drop-shadow-sm"
                          loading="lazy"
                        />
                        {/* Brand Tag */}
                        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-[#E8E8E1] text-[10px] font-bold tracking-wider uppercase text-[#D9232E]">
                          {prod.brand}
                        </div>
                        {/* Category Pill */}
                        <div className="absolute top-3 right-3 bg-[#1F2937]/90 text-white px-2.5 py-1 rounded-lg text-[10px] font-semibold tracking-wide">
                          {prod.category}
                        </div>
                      </div>

                      {/* Content Body */}
                      <div className="p-5 sm:p-6">
                        <h3 className="text-base sm:text-lg font-bold text-[#111827] mb-2 leading-snug group-hover:text-[#D9232E] transition-colors">
                          {prod.name}
                        </h3>

                        <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed line-clamp-2 mb-4">
                          {prod.shortDesc}
                        </p>

                        {/* Feature Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-2">
                          {prod.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center text-[11px] font-medium px-2.5 py-1 rounded-md bg-[#F5F5F0] text-[#4B5563] border border-[#E8E8E1]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Bottom Actions */}
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-3 border-t border-[#F0F0EA] flex items-center justify-between gap-3">
                      <Button
                        onClick={() => setActiveProduct(prod)}
                        variant="primary"
                        size="md"
                        className="flex-1 min-h-[44px]"
                      >
                        View Details
                      </Button>
                      <button
                        type="button"
                        onClick={() => setEnquiryProduct(prod)}
                        className="text-xs font-semibold text-[#4B5563] hover:text-[#D9232E] transition-colors px-3 py-2 min-h-[44px] inline-flex items-center justify-center focus:outline-none"
                      >
                        Enquire
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* =========================================================================
                  PAGINATION CONTROLS
                  ========================================================================= */}
              <nav
                aria-label="Product pagination"
                className="mt-12 sm:mt-16 pt-8 border-t border-[#E8E8E1] flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <div className="flex items-center gap-1.5 sm:gap-2">
                  {/* Previous Button */}
                  <button
                    type="button"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    aria-label="Previous page"
                    className={`inline-flex items-center justify-center gap-1 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors min-h-[40px] focus:outline-none focus:ring-2 focus:ring-[#D9232E] ${
                      currentPage === 1
                        ? 'bg-[#F5F5F0] text-[#9CA3AF] border border-[#E8E8E1] cursor-not-allowed opacity-60'
                        : 'bg-white text-[#374151] hover:text-[#111827] hover:bg-[#F5F5F0] border border-[#E8E8E1] cursor-pointer shadow-2xs'
                    }`}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Previous</span>
                  </button>

                  {/* Page Numbers */}
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                    const isActive = pageNum === currentPage;
                    return (
                      <button
                        key={pageNum}
                        type="button"
                        onClick={() => handlePageChange(pageNum)}
                        aria-current={isActive ? 'page' : undefined}
                        aria-label={`Page ${pageNum}`}
                        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#D9232E] ${
                          isActive
                            ? 'bg-[#D9232E] text-white shadow-xs border border-[#D9232E]'
                            : 'bg-white text-[#4B5563] hover:text-[#111827] hover:bg-[#F5F5F0] border border-[#E8E8E1] shadow-2xs cursor-pointer'
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}

                  {/* Next Button */}
                  <button
                    type="button"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    aria-label="Next page"
                    className={`inline-flex items-center justify-center gap-1 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors min-h-[40px] focus:outline-none focus:ring-2 focus:ring-[#D9232E] ${
                      currentPage === totalPages
                        ? 'bg-[#F5F5F0] text-[#9CA3AF] border border-[#E8E8E1] cursor-not-allowed opacity-60'
                        : 'bg-white text-[#374151] hover:text-[#111827] hover:bg-[#F5F5F0] border border-[#E8E8E1] cursor-pointer shadow-2xs'
                    }`}
                  >
                    <span>Next</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </nav>
            </>
          )}
        </div>
      </section>

      {/* =========================================================================
          4. PRODUCT DETAIL MODAL
          Clean, non-e-commerce detail view with full specifications & store enquiry
          ========================================================================= */}
      {activeProduct && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-product-title"
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setActiveProduct(null)}
          />

          {/* Modal Container */}
          <div className="relative bg-white rounded-3xl border border-[#E8E8E1] shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto z-10 p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveProduct(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors focus:outline-none"
              aria-label="Close product details"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Product Header Row */}
            <div className="flex flex-col sm:flex-row gap-6 mb-6">
              {/* Product Visual Container */}
              <div className="w-full sm:w-48 aspect-square bg-[#F5F5F0] rounded-2xl border border-[#E8E8E1] p-4 flex items-center justify-center shrink-0">
                <img
                  src={activeProduct.image}
                  alt={activeProduct.name}
                  className="max-h-full max-w-full object-contain drop-shadow-sm"
                />
              </div>

              {/* Header Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-[#D9232E] bg-[#FEECEE] px-2.5 py-0.5 rounded-full border border-[#D9232E]/20">
                    {activeProduct.brand}
                  </span>
                  <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2.5 py-0.5 rounded-full">
                    {activeProduct.category}
                  </span>
                </div>

                <h2 id="modal-product-title" className="text-xl sm:text-2xl font-bold text-[#111827] leading-tight mb-2">
                  {activeProduct.name}
                </h2>

                <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed mb-4">
                  {activeProduct.shortDesc}
                </p>

                <div className="flex items-center gap-2 text-xs text-[#16A34A] font-semibold bg-[#DCFCE7]/70 p-2 rounded-xl">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>100% Genuine Sealed Pack Available in Store</span>
                </div>
              </div>
            </div>

            {/* Detail Tabs / Sections */}
            <div className="space-y-6 text-sm">
              {/* Overview */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                  Overview
                </h4>
                <p className="text-[#374151] leading-relaxed bg-[#FBFBF9] p-4 rounded-xl border border-[#E8E8E1]">
                  {activeProduct.overview}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                  Key Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeProduct.keyFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 p-2.5 rounded-xl bg-white border border-[#E8E8E1] text-xs text-[#1F2937]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#D9232E] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Suitable For & Finishes Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Suitable For */}
                <div className="bg-[#FBFBF9] p-4 rounded-xl border border-[#E8E8E1]">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                    Suitable For
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeProduct.suitableFor.map((item, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-medium px-2.5 py-1 rounded-lg bg-white border border-[#E8E8E1] text-[#374151]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Available Finishes & Sizes */}
                <div className="bg-[#FBFBF9] p-4 rounded-xl border border-[#E8E8E1]">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                    Available Finishes & Sizes
                  </h4>
                  <p className="text-xs text-[#1F2937] font-semibold mb-1">
                    Finishes: <span className="font-normal text-[#4B5563]">{activeProduct.finishes}</span>
                  </p>
                  <p className="text-xs text-[#1F2937] font-semibold">
                    Sizes: <span className="font-normal text-[#4B5563]">{activeProduct.packSizes}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Bottom CTA */}
            <div className="mt-8 pt-5 border-t border-[#E8E8E1] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-gray-500 text-center sm:text-left">
                Available at City Enterprises store counter. Custom tints prepared in minutes.
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <a
                  href={getWhatsappUrl(activeProduct.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-[#1F2937] bg-[#DCFCE7] hover:bg-[#BBF7D0] border border-[#86EFAC] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#16A34A]" />
                  <span>WhatsApp Inquiry</span>
                </a>

                <Button
                  onClick={() => {
                    const prod = activeProduct;
                    setActiveProduct(null);
                    setEnquiryProduct(prod);
                  }}
                  variant="primary"
                  size="md"
                  className="flex-1 sm:flex-initial"
                >
                  Enquire About This Product
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          4B. QUICK ENQUIRY MODAL (Triggered by "Enquire" or "Enquire About This Product")
          ========================================================================= */}
      {enquiryProduct && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => {
              setEnquiryProduct(null);
              setEnquirySuccess(false);
            }}
          />

          {/* Modal Container */}
          <div className="relative bg-white rounded-3xl border border-[#E8E8E1] shadow-2xl max-w-lg w-full z-10 p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
            <button
              type="button"
              onClick={() => {
                setEnquiryProduct(null);
                setEnquirySuccess(false);
              }}
              className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors focus:outline-none"
              aria-label="Close enquiry form"
            >
              <X className="w-5 h-5" />
            </button>

            {enquirySuccess ? (
              <div className="text-center py-6 space-y-3">
                <CheckCircle2 className="w-14 h-14 text-[#D9232E] mx-auto" />
                <h3 className="text-xl font-bold text-[#111827]">Inquiry Received!</h3>
                <p className="text-sm text-[#4B5563] max-w-sm mx-auto">
                  Thank you, <strong>{enquiryForm.name}</strong>. Our store team will call you at{' '}
                  <strong>{enquiryForm.phone}</strong> regarding <strong>{enquiryProduct.name}</strong>.
                </p>
                <div className="pt-4">
                  <Button
                    onClick={() => {
                      setEnquiryProduct(null);
                      setEnquirySuccess(false);
                      setEnquiryForm({ name: '', phone: '', message: '' });
                    }}
                    variant="secondary"
                    size="sm"
                  >
                    Close
                  </Button>
                </div>
              </div>
            ) : (
              <div>
                <span className="text-xs font-bold text-[#D9232E] uppercase tracking-wider block mb-1">
                  Product Inquiry
                </span>
                <h3 className="text-xl font-bold text-[#111827] mb-1">
                  Enquire About {enquiryProduct.name}
                </h3>
                <p className="text-xs text-[#6B7280] mb-6">
                  Leave your details and our store manager will provide current stock status, shade tinting options, and recommendations.
                </p>

                <form onSubmit={handleEnquirySubmit} className="space-y-4 text-left">
                  <div>
                    <label className="block text-xs font-semibold text-[#374151] mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={enquiryForm.name}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, name: e.target.value })}
                      placeholder="e.g. Amit Verma"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E8E1] focus:outline-none focus:ring-2 focus:ring-[#D9232E] text-sm bg-[#FBFBF9]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#374151] mb-1">
                      Contact Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={enquiryForm.phone}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E8E1] focus:outline-none focus:ring-2 focus:ring-[#D9232E] text-sm bg-[#FBFBF9]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#374151] mb-1">
                      Questions / Approx Litres (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={enquiryForm.message}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, message: e.target.value })}
                      placeholder="e.g. Looking for shade 0765 in 10 litres for a 3BHK flat..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E8E1] focus:outline-none focus:ring-2 focus:ring-[#D9232E] text-sm bg-[#FBFBF9]"
                    />
                  </div>

                  <Button type="submit" variant="primary" size="md" fullWidth>
                    Submit Product Inquiry
                  </Button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* =========================================================================
          5. BOTTOM CTA
          "Not sure which product you need?"
          "Talk to us and we'll help you choose."
          Button: "Contact City Enterprises"
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white border-t border-[#E8E8E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1F2937] text-white rounded-3xl p-8 sm:p-12 lg:p-14 text-center max-w-4xl mx-auto shadow-soft-lg">
            <div className="bg-white p-2 sm:p-2.5 rounded-2xl inline-block shadow-sm border border-gray-100 mb-6">
              <Logo variant="footer" to={false} />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3">
              Not sure which product you need?
            </h2>

            <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
              Talk to us and we'll help you choose. Every wall is different, and our team is ready to recommend the ideal paint, primer, or waterproofing system for your space.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <Button to="/contact" variant="primary" size="lg" className="w-full sm:w-auto px-8">
                Contact City Enterprises
              </Button>
              <Button
                href="tel:+919876543210"
                variant="secondary"
                size="lg"
                leftIcon={<Phone className="w-4 h-4 text-[#D9232E]" />}
                className="w-full sm:w-auto px-8"
              >
                Call Store Directly
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
