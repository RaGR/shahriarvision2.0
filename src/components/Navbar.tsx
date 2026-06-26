/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowLeft, Phone, ChevronDown } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export default function Navbar({ currentPage, onPageChange }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'home', label: 'صفحه اصلی' },
    { id: 'about', label: 'درباره ما' },
    { id: 'services_overview', label: 'خدمات تخصصی' },
    { id: 'blog_list', label: 'مجله کسب‌وکار' },
    { id: 'consultation_request', label: 'درخواست مشاوره' },
    { id: 'contact', label: 'تماس با ما' },
  ];

  const serviceQuickLinks = [
    { id: 'branding', label: 'برندسازی' },
    { id: 'business_plan', label: 'بیزنس پلن' },
    { id: 'swot', label: 'تحلیل SWOT' },
    { id: 'org_chart', label: 'چارت سازمانی' },
    { id: 'crm', label: 'سیستم CRM' },
    { id: 'erp', label: 'سیستم ERP' },
    { id: 'sales_growth', label: 'افزایش فروش' },
    { id: 'digital_marketing', label: 'بازاریابی دیجیتال' },
  ];

  const handleNavClick = (pageId: string) => {
    onPageChange(pageId);
    setIsOpen(false);
    setServicesDropdown(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isServicePage = [
    'branding', 'business_plan', 'swot', 'org_chart',
    'crm', 'erp', 'hr', 'sales_growth', 'digital_marketing',
    'business_startup_advice', 'business_development',
    'marketing_campaigns', 'sales_campaigns',
    'organizational_diagnosis', 'executive_management',
    'after_sales', 'sales_increase_system',
    'productivity_improvement', 'winning_strategy',
    'branding_process', 'video_lessons',
  ].includes(currentPage);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-500 ease-in-out animate-slide-down-startup">
      <nav
        className={`max-w-7xl mx-auto rounded-2xl sm:rounded-full border border-white/80
          backdrop-blur-2xl backdrop-saturate-150 text-slate-800 transition-all duration-300
          ${isScrolled
            ? 'bg-white/75 shadow-[0_16px_36px_rgba(0,0,0,0.06)]'
            : 'bg-white/70 shadow-lg shadow-black/5 hover:bg-white/80'}`}
      >
        <div className="px-5 sm:px-8">
          <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-14 sm:h-16' : 'h-16 sm:h-20'}`}>

            {/* Logo Section */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick('home')}>
              <img
                src="/assets/final/brand/logo-primary.png"
                alt="لوگوی شهریار ویژن"
                className="h-9 sm:h-12 w-auto object-contain transition-transform duration-500 hover:scale-105"
              />
              <div className="flex flex-col text-right">
                <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-800 hover:text-sky-500 transition-colors">
                  شهریار ویژن
                </span>
                <span className="text-[9px] text-slate-400 tracking-widest leading-none">
                  SHAHRIAR VISION
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-reverse space-x-6">
              {menuItems.map((item) => {
                const isActive = currentPage === item.id ||
                  (item.id === 'services_overview' && isServicePage);

                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`relative text-sm font-medium transition-colors duration-200 py-2 cursor-pointer ${
                      isActive
                        ? 'text-sky-500 font-semibold'
                        : 'text-slate-600 hover:text-sky-500'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 right-0 left-0 h-0.5 bg-sky-500 rounded-full" />
                    )}
                  </button>
                );
              })}

              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setServicesDropdown(!servicesDropdown)}
                  className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-sky-500 transition-colors py-2 cursor-pointer"
                >
                  <span>همه خدمات</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                {servicesDropdown && (
                  <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-sky-100 py-2 z-50 text-right">
                    {serviceQuickLinks.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => handleNavClick(s.id)}
                        className="block w-full text-right px-4 py-2 text-xs text-slate-600 hover:bg-sky-50 hover:text-sky-600 transition-colors cursor-pointer"
                      >
                        {s.label}
                      </button>
                    ))}
                    <div className="border-t border-slate-100 mt-1 pt-1">
                      <button
                        onClick={() => handleNavClick('services_overview')}
                        className="block w-full text-right px-4 py-2 text-xs font-bold text-sky-500 hover:bg-sky-50 transition-colors cursor-pointer"
                      >
                        مشاهده کاتالوگ کامل خدمات
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Desktop CTA / Contacts */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:09122478376"
                className="flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-sky-500 transition-colors"
              >
                <Phone className="w-4 h-4 text-sky-500" />
                <span>۰۹۱۲۲۴۷۸۳۷۶</span>
              </a>
              <button
                onClick={() => handleNavClick('consultation_request')}
                className="bg-sky-500 hover:bg-sky-600 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-sky-200 flex items-center gap-2 group cursor-pointer transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>درخواست مشاوره فوری</span>
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-orange-50/50 focus:outline-none cursor-pointer transition-colors"
                aria-label="تغییر منوی موبایل"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white/90 backdrop-blur-xl border-t border-slate-100 rounded-b-2xl space-y-1 px-4 pt-2 pb-6 animate-fade-in shadow-lg">
            {menuItems.filter(i => i.id !== 'consultation_request').map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-right px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-sky-50 text-sky-600 font-semibold'
                      : 'text-slate-700 hover:bg-orange-50/50 hover:text-slate-950'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="tel:09122478376"
                className="flex items-center gap-3 px-4 py-2 text-sm text-slate-600 font-mono"
              >
                <Phone className="w-4 h-4 text-sky-500" />
                <span>۰۹۱۲۲۴۷۸۳۷۶</span>
              </a>
              <button
                onClick={() => handleNavClick('consultation_request')}
                className="w-full bg-sky-500 hover:bg-sky-600 text-white px-4 py-3 rounded-xl text-center text-sm font-bold tracking-wide transition-colors"
              >
                درخواست مشاوره فوری
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
