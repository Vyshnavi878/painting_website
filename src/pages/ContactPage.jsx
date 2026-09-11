import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  ShieldCheck,
  Navigation,
} from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import Logo from '../components/common/Logo';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: '',
  });

  const [touched, setTouched] = useState({
    fullName: false,
    phone: false,
    email: false,
    message: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [generalError, setGeneralError] = useState('');

  // Validate fields
  const validateField = (name, value) => {
    switch (name) {
      case 'fullName':
        if (!value.trim()) return 'Full name is required.';
        if (value.trim().length < 2) return 'Name must be at least 2 characters.';
        return '';

      case 'phone': {
        if (!value.trim()) return 'Phone number is required.';
        // Allows digits, optional country code, spaces, dashes (minimum 10 digits)
        const digitsOnly = value.replace(/\D/g, '');
        if (digitsOnly.length < 10) return 'Please enter a valid 10-digit mobile number.';
        return '';
      }

      case 'email':
        if (value.trim()) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value.trim())) return 'Please enter a valid email address.';
        }
        return '';

      case 'message':
        if (!value.trim()) return 'Please describe your requirement or question.';
        if (value.trim().length < 10) return 'Message must be at least 10 characters.';
        return '';

      default:
        return '';
    }
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const errorMsg = validateField(field, formData[field]);
    setErrors((prev) => ({ ...prev, [field]: errorMsg }));
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const errorMsg = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: errorMsg }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setGeneralError('');

    // Mark all as touched
    const allTouched = {
      fullName: true,
      phone: true,
      email: true,
      message: true,
    };
    setTouched(allTouched);

    // Validate all
    const newErrors = {
      fullName: validateField('fullName', formData.fullName),
      phone: validateField('phone', formData.phone),
      email: validateField('email', formData.email),
      message: validateField('message', formData.message),
    };
    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((err) => err !== '');
    if (hasErrors) {
      setGeneralError('Please correct the highlighted errors before submitting.');
      return;
    }

    // Frontend UI only: simulate clean submission flow
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({ fullName: '', phone: '', email: '', message: '' });
    setTouched({ fullName: false, phone: false, email: false, message: false });
    setErrors({});
    setIsSubmitted(false);
    setGeneralError('');
  };

  const whatsappNumber = '919876543210';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Hello City Enterprises! I would like to enquire about paints, colours, and solutions.'
  )}`;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'City Enterprises, Shop No. 14, Commercial Market, Main Road, City Center, Vijayawada, Andhra Pradesh 520004'
  )}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    'City Enterprises, Shop No. 14, Commercial Market, Main Road, City Center, Vijayawada, Andhra Pradesh 520004'
  )}`;

  return (
    <div className="w-full">
      {/* =========================================================================
          INTRODUCTORY SECTION
          ========================================================================= */}
      <section className="bg-[#FBFBF9] border-b border-[#E8E8E1] py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#FEECEE] text-[#D9232E] border border-[#D9232E]/20 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D9232E]"></span>
            <span>Connect With Us</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] tracking-tight mb-2.5 sm:mb-3 leading-tight">
            Get in Touch
          </h1>

          <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed max-w-2xl mx-auto">
            Have a question about paints, colours, or painting solutions? Contact City Enterprises and our team will be happy to assist you.
          </p>
        </div>
      </section>

      {/* =========================================================================
          1. TWO-COLUMN DESKTOP LAYOUT (Mobile: Form first, business info second)
          ========================================================================= */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#FBFBF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Contact Form */}
            <div className="lg:col-span-7 order-1">
              <Card padding="lg" className="shadow-soft-md">
                <div className="mb-6">
                  <span className="text-xs font-bold text-[#D9232E] uppercase tracking-wider block mb-1">
                    Direct Inquiry
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#111827]">
                    Send Us an Enquiry
                  </h2>
                  <p className="text-xs sm:text-sm text-[#6B7280] mt-1">
                    Fill in your details below. We typically respond within business hours.
                  </p>
                </div>

                {/* General Validation Error Banner */}
                {generalError && (
                  <div
                    className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2.5"
                    role="alert"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0 text-[#D9232E]" />
                    <span>{generalError}</span>
                  </div>
                )}

                {/* Success State UI */}
                {isSubmitted ? (
                  <div
                    className="bg-[#FEECEE]/50 border border-[#D9232E]/30 rounded-2xl p-8 sm:p-10 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200"
                    role="status"
                  >
                    <div className="w-14 h-14 rounded-full bg-[#D9232E] text-white flex items-center justify-center mx-auto shadow-soft-md">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <h3 className="text-xl font-bold text-[#111827]">
                      Thank You, {formData.fullName}!
                    </h3>

                    <p className="text-sm text-[#4B5563] max-w-md mx-auto leading-relaxed">
                      Your enquiry has been received. Our store team will review your requirement and call you at{' '}
                      <strong className="text-[#111827]">{formData.phone}</strong> promptly.
                    </p>

                    <div className="pt-3">
                      <Button onClick={handleReset} variant="outline" size="sm">
                        Submit Another Enquiry
                      </Button>
                    </div>
                  </div>
                ) : (
                  /* Main Form */
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    {/* Full Name Field */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-xs font-semibold text-[#374151] mb-1.5"
                      >
                        Full Name <span className="text-[#D9232E]">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => handleChange('fullName', e.target.value)}
                        onBlur={() => handleBlur('fullName')}
                        placeholder="e.g. Ramesh Patel"
                        aria-invalid={touched.fullName && !!errors.fullName}
                        aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                        className={`w-full px-4 py-3 rounded-xl border text-sm bg-[#FBFBF9] focus:outline-none transition-all ${
                          touched.fullName && errors.fullName
                            ? 'border-red-500 bg-red-50/30 focus:ring-2 focus:ring-red-200'
                            : 'border-[#E8E8E1] focus:ring-2 focus:ring-[#D9232E] focus:border-transparent'
                        }`}
                      />
                      {touched.fullName && errors.fullName && (
                        <p id="fullName-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    {/* Phone Number Field */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-semibold text-[#374151] mb-1.5"
                      >
                        Phone Number <span className="text-[#D9232E]">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        onBlur={() => handleBlur('phone')}
                        placeholder="e.g. +91 98765 43210"
                        aria-invalid={touched.phone && !!errors.phone}
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                        className={`w-full px-4 py-3 rounded-xl border text-sm bg-[#FBFBF9] focus:outline-none transition-all ${
                          touched.phone && errors.phone
                            ? 'border-red-500 bg-red-50/30 focus:ring-2 focus:ring-red-200'
                            : 'border-[#E8E8E1] focus:ring-2 focus:ring-[#D9232E] focus:border-transparent'
                        }`}
                      />
                      {touched.phone && errors.phone && (
                        <p id="phone-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    {/* Email Address Field (Optional) */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold text-[#374151] mb-1.5"
                      >
                        Email Address <span className="text-gray-400 font-normal">(Optional)</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        onBlur={() => handleBlur('email')}
                        placeholder="e.g. ramesh@example.com"
                        aria-invalid={touched.email && !!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        className={`w-full px-4 py-3 rounded-xl border text-sm bg-[#FBFBF9] focus:outline-none transition-all ${
                          touched.email && errors.email
                            ? 'border-red-500 bg-red-50/30 focus:ring-2 focus:ring-red-200'
                            : 'border-[#E8E8E1] focus:ring-2 focus:ring-[#D9232E] focus:border-transparent'
                        }`}
                      />
                      {touched.email && errors.email && (
                        <p id="email-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* Message Field */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs font-semibold text-[#374151] mb-1.5"
                      >
                        Message <span className="text-[#D9232E]">*</span>
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        onBlur={() => handleBlur('message')}
                        placeholder="Tell us what you are looking for..."
                        aria-invalid={touched.message && !!errors.message}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                        className={`w-full px-4 py-3 rounded-xl border text-sm bg-[#FBFBF9] focus:outline-none transition-all resize-y ${
                          touched.message && errors.message
                            ? 'border-red-500 bg-red-50/30 focus:ring-2 focus:ring-red-200'
                            : 'border-[#E8E8E1] focus:ring-2 focus:ring-[#D9232E] focus:border-transparent'
                        }`}
                      />
                      {touched.message && errors.message && (
                        <p id="message-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      fullWidth
                      disabled={isSubmitting}
                      rightIcon={<Send className="w-4 h-4" />}
                    >
                      {isSubmitting ? 'Sending Enquiry...' : 'Send Enquiry'}
                    </Button>

                    <p className="text-[11px] text-center text-[#6B7280]">
                      Your inquiry will be sent directly to City Enterprises store personnel.
                    </p>
                  </form>
                )}
              </Card>
            </div>

            {/* Right Column: Business Information Card */}
            <div className="lg:col-span-5 order-2 space-y-6">
              <Card padding="lg" className="shadow-soft-md bg-white">
                <div className="mb-6">
                  <div className="mb-3">
                    <Logo variant="card" to={false} />
                  </div>
                  <span className="text-xs font-bold text-[#EAB308] uppercase tracking-wider block mb-1">
                    Store Showroom Details
                  </span>
                  <p className="text-xs text-[#6B7280]">
                    Official retail store for Asian Paints products, shade consultation, and project supplies.
                  </p>
                </div>

                {/* Contact Items List */}
                <div className="space-y-4 text-sm pb-6 border-b border-[#E8E8E1]">
                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#FEECEE] flex items-center justify-center text-[#D9232E] shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Phone</h3>
                      <a
                        href="tel:+919876543210"
                        className="text-sm font-bold text-[#111827] hover:text-[#D9232E] transition-colors mt-0.5 block"
                      >
                        +91 98765 43210
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#DCFCE7] flex items-center justify-center text-[#16A34A] shrink-0 mt-0.5">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">WhatsApp</h3>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold text-[#111827] hover:text-[#16A34A] transition-colors mt-0.5 block"
                      >
                        +91 98765 43210
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center text-gray-700 shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Email</h3>
                      <a
                        href="mailto:contact@cityenterprises.com"
                        className="text-sm font-bold text-[#111827] hover:text-[#D9232E] transition-colors mt-0.5 block"
                      >
                        contact@cityenterprises.com
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#FEF9C3] flex items-center justify-center text-[#854D0E] shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Store Address</h3>
                      <div className="text-xs sm:text-sm text-[#374151] mt-1 leading-relaxed">
                        <p className="font-semibold text-[#111827]">City Enterprises</p>
                        <p>Shop No. 14, Commercial Market,</p>
                        <p>Main Road, City Center,</p>
                        <p>Vijayawada, Andhra Pradesh – 520004</p>
                      </div>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-3 pt-2">
                    <div className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600 shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Business Hours</h3>
                      <div className="text-xs text-[#374151] mt-0.5 space-y-0.5">
                        <p><span className="font-semibold text-[#111827]">Mon – Sat:</span> 9:00 AM – 8:30 PM</p>
                        <p><span className="font-semibold text-[#111827]">Sunday:</span> 10:00 AM – 2:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Action Buttons */}
                <div className="pt-6 space-y-2.5">
                  <a
                    href="tel:+919876543210"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-white bg-[#D9232E] hover:bg-[#BF1B25] shadow-xs transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Now</span>
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-[#1F2937] bg-[#DCFCE7] hover:bg-[#BBF7D0] border border-[#86EFAC] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-[#16A34A]" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-[#374151] bg-[#F5F5F0] hover:bg-[#EBEBE3] border border-[#E8E8E1] transition-colors"
                  >
                    <Navigation className="w-4 h-4 text-[#D9232E]" />
                    <span>Get Directions</span>
                  </a>
                </div>

                {/* Dealer Verification Note */}
                <div className="mt-6 p-3.5 rounded-xl bg-[#FBFBF9] border border-[#E8E8E1] flex items-center gap-2.5 text-xs text-[#4B5563]">
                  <ShieldCheck className="w-5 h-5 text-[#D9232E] shrink-0" />
                  <span>Authorized Asian Paints Retail Store • In-Store Computerized Tinting</span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. MAP SECTION
          Responsive Google Maps placeholder container below main contact section
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white border-t border-[#E8E8E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-[#D9232E] uppercase tracking-wider block mb-1">
              Find Our Showroom
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827]">
              Visit City Enterprises in Person
            </h2>
            <p className="text-sm text-[#4B5563] mt-2 leading-relaxed">
              We are situated conveniently at Shop No. 14, Commercial Market, Main Road, City Center, Vijayawada with walk-in parking and full shade displays.
            </p>
          </div>

          {/* Map Container */}
          <div className="rounded-3xl border border-[#E8E8E1] shadow-soft-md overflow-hidden bg-[#F5F5F0] relative">
            {/* Embedded Stylized Map Frame */}
            <div className="relative w-full h-80 sm:h-96 flex items-center justify-center bg-stone-200 overflow-hidden">
              {/* Map Canvas Background Grid Pattern */}
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    'radial-gradient(#9ca3af 1px, transparent 1px), radial-gradient(#9ca3af 1px, #e5e7eb 1px)',
                  backgroundSize: '20px 20px',
                  backgroundPosition: '0 0, 10px 10px',
                }}
              />

              {/* Stylized Vector Roads / Lines */}
              <div className="absolute w-full h-1 bg-white/80 top-1/3 -rotate-3" />
              <div className="absolute w-full h-2 bg-white/90 top-1/2 rotate-1" />
              <div className="absolute h-full w-2 bg-white/90 left-1/2 -rotate-6" />
              <div className="absolute h-full w-1.5 bg-amber-200 left-1/3 rotate-12" />

              {/* Central Location Pin Card */}
              <div className="relative z-10 bg-white/95 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-[#E8E8E1] shadow-soft-xl max-w-sm mx-4 text-center">
                <div className="mb-3 bg-white p-2 rounded-xl border border-gray-100 shadow-2xs inline-block">
                  <Logo variant="card" to={false} />
                </div>
                <div className="text-xs text-[#4B5563] leading-relaxed mb-4">
                  <p className="font-semibold text-[#111827]">City Enterprises</p>
                  <p>Shop No. 14, Commercial Market,</p>
                  <p>Main Road, City Center,</p>
                  <p>Vijayawada, Andhra Pradesh – 520004</p>
                </div>

                <div className="flex items-center justify-center gap-2">
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#D9232E] hover:bg-[#BF1B25] transition-colors shadow-xs"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Map Bottom Information Strip */}
            <div className="bg-white p-4 sm:p-5 border-t border-[#E8E8E1] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#4B5563]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D9232E] shrink-0" />
                <span>Shop No. 14, Commercial Market, Main Road, City Center, Vijayawada, Andhra Pradesh – 520004</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <Clock className="w-4 h-4 text-[#EAB308] shrink-0" />
                <span>Open Today: 9:00 AM – 8:30 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
