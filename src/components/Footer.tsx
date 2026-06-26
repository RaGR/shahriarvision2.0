/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, Phone, MapPin, Award, CheckCircle2, ChevronLeft } from 'lucide-react';

interface FooterProps {
  onPageChange: (page: string) => void;
}

export default function Footer({ onPageChange }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (pageId: string) => {
    onPageChange(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0f1319] text-[#e2e8f0] border-t border-[#1d2430] pt-16 pb-8" id="footer-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-right">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="/assets/final/brand/brand-script-white.png"
                alt="لوگو سفید شهریار ویژن"
                className="h-10 w-auto object-contain bg-white/10 p-1.5 rounded-lg"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white tracking-widest">شهریار ویژن</span>
                <span className="text-[9px] text-[#7dd3fc] tracking-widest font-mono">SHAHRIAR VISION</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              مجموعه مشاوره و توسعه کسب‌وکار شهریار ویژن، همراه استراتژیک شما در طراحی چارت، برندینگ، تدوین بیزنس پلن، استقرار سیستم‌های مدیریت مدرن و ایجاد زیرساخت سودآوری ارگانیک در مراحل راه‌اندازی و توسعه کسب‌وکار.
            </p>
            <div className="flex items-center gap-2 p-3 bg-[#161d26] rounded-lg border border-[#232e3d]">
              <Award className="w-5 h-5 text-orange-400 flex-shrink-0" />
              <span className="text-xs text-gray-300 font-medium leading-normal">عضو رسمی انجمن مشاوران مدیریت ایران</span>
            </div>
          </div>

          {/* Column 2: Key Services */}
          <div>
            <h4 className="text-white font-bold text-base mb-6 border-r-4 border-[#7dd3fc] pr-3">خدمات عمیق و تخصصی</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <button onClick={() => handleLinkClick('branding')} className="hover:text-[#7dd3fc] transition-colors flex items-center gap-1.5 cursor-pointer">
                  <ChevronLeft className="w-3.5 h-3.5 text-orange-400/70" />
                  <span>مشاوره و فرآیندهای برندسازی</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('business_plan')} className="hover:text-[#7dd3fc] transition-colors flex items-center gap-1.5 cursor-pointer">
                  <ChevronLeft className="w-3.5 h-3.5 text-orange-400/70" />
                  <span>طراحی بیزنس پلن (طرح کسب‌وکار)</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('swot')} className="hover:text-[#7dd3fc] transition-colors flex items-center gap-1.5 cursor-pointer">
                  <ChevronLeft className="w-3.5 h-3.5 text-orange-400/70" />
                  <span>آنالیز استراتژیک SWOT</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('org_chart')} className="hover:text-[#7dd3fc] transition-colors flex items-center gap-1.5 cursor-pointer">
                  <ChevronLeft className="w-3.5 h-3.5 text-orange-400/70" />
                  <span>اصلاح و طراحی چارت سازمانی</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('crm')} className="hover:text-[#7dd3fc] transition-colors flex items-center gap-1.5 cursor-pointer">
                  <ChevronLeft className="w-3.5 h-3.5 text-orange-400/70" />
                  <span>پیکربندی و استقرار سیستم‌های CRM</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('erp')} className="hover:text-[#7dd3fc] transition-colors flex items-center gap-1.5 cursor-pointer">
                  <ChevronLeft className="w-3.5 h-3.5 text-orange-400/70" />
                  <span>یکپارچه‌سازی منابع سازمانی (ERP)</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('organizational_diagnosis')} className="hover:text-[#7dd3fc] transition-colors flex items-center gap-1.5 cursor-pointer">
                  <ChevronLeft className="w-3.5 h-3.5 text-orange-400/70" />
                  <span>عارضه‌یابی سازمانی</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('after_sales')} className="hover:text-[#7dd3fc] transition-colors flex items-center gap-1.5 cursor-pointer">
                  <ChevronLeft className="w-3.5 h-3.5 text-orange-400/70" />
                  <span>خدمات پس از فروش و رضایت مشتری</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('marketing_campaigns')} className="hover:text-[#7dd3fc] transition-colors flex items-center gap-1.5 cursor-pointer">
                  <ChevronLeft className="w-3.5 h-3.5 text-orange-400/70" />
                  <span>کمپین‌های بازاریابی</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4 className="text-white font-bold text-base mb-6 border-r-4 border-[#7dd3fc] pr-3">دسترسی سریع</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <button onClick={() => handleLinkClick('home')} className="hover:text-[#7dd3fc] transition-colors flex items-center gap-1.5 cursor-pointer">
                  <ChevronLeft className="w-3.5 h-3.5 text-orange-400/70" />
                  <span>صفحه اصلی</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('about')} className="hover:text-[#7dd3fc] transition-colors flex items-center gap-1.5 cursor-pointer">
                  <ChevronLeft className="w-3.5 h-3.5 text-orange-400/70" />
                  <span>درباره و داستان ما</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('services_overview')} className="hover:text-[#7dd3fc] transition-colors flex items-center gap-1.5 cursor-pointer">
                  <ChevronLeft className="w-3.5 h-3.5 text-orange-400/70" />
                  <span>مرکز خدمات مشاوره</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('blog_list')} className="hover:text-[#7dd3fc] transition-colors flex items-center gap-1.5 cursor-pointer">
                  <ChevronLeft className="w-3.5 h-3.5 text-orange-400/70" />
                  <span>مجله تخصصی کسب‌وکار</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('contact')} className="hover:text-[#7dd3fc] transition-colors flex items-center gap-1.5 cursor-pointer">
                  <ChevronLeft className="w-3.5 h-3.5 text-orange-400/70" />
                  <span>دیدار و تماس با ما</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('consultation_request')} className="text-orange-400 hover:text-orange-300 transition-colors flex items-center gap-1.5 font-bold cursor-pointer">
                  <ChevronLeft className="w-3.5 h-3.5 text-orange-400" />
                  <span>ثبت درخواست عارضه‌یابی رایگان</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Info */}
          <div>
            <h4 className="text-white font-bold text-base mb-6 border-r-4 border-[#7dd3fc] pr-3">ارتباط با شهریار ویژن</h4>
            <div className="space-y-4 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#7dd3fc] flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  تهران، ضلع شمال‌شرقی چهارراه پاسداران، ساختمان پزشکان پاسداران، پلاک ۱، طبقه ۳
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <div className="flex flex-col text-left items-end w-full">
                  <a href="tel:02122316766" className="hover:text-white font-mono tracking-wider text-right w-full">021 2231 6766</a>
                  <a href="tel:09122478376" className="hover:text-white font-mono tracking-wider text-right w-full mt-1">0912 247 8376</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#7dd3fc] flex-shrink-0" />
                <div className="flex flex-col text-xs text-left">
                  <a href="mailto:info@shahriarvision.com" className="hover:text-white font-mono">info@shahriarvision.com</a>
                  <a href="mailto:support@shahriarvision.com" className="hover:text-white font-mono mt-0.5">support@shahriarvision.com</a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="mt-12 pt-8 border-t border-[#1d2430] flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 text-center gap-4">
          <p className="leading-relaxed">
            تمامی حقوق این تارنما محفوظ و متعلق به شرکت مشاوره مدیریت همگامان ایده نوآفرین (شهریار ویژن) می‌باشد. © {currentYear}
          </p>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#7dd3fc]" />
            <span>طراحی شده با استانداردهای بین‌المللی با رنگ برندینگ آبی آسمانی و نارنجی استراتژیک</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
