/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  ArrowLeft, ArrowRight, ShieldCheck, Sparkles, TrendingUp, Users, 
  MapPin, Award, CheckCircle2, ChevronLeft, Laptop, Play, PhoneCall,
  Clock, CheckSquare, Layers, HelpCircle, Network, HeartHandshake, Eye
} from 'lucide-react';
import { blogData } from '../data/blogData';
import SkyBlueAbstractGraphic from './SkyBlueAbstractGraphic';
import PremiumVisualFrame from './PremiumVisualFrame';
import StrategicSimulator from './StrategicSimulator';
import { asset } from '../lib/paths';

interface HomeViewProps {
  onPageChange: (page: string) => void;
  onPostSelect: (postId: string | null) => void;
}

export default function HomeView({ onPageChange, onPostSelect }: HomeViewProps) {
  
  // High-end sky blue abstract vector visual or CEO portrait switcher system
  const [heroVisualType, setHeroVisualType] = useState<'vector' | 'portrait'>('portrait');

  // Interactive "Clock Metaphor" Widget State
  const [clockStep, setClockStep] = useState<'disjointed' | 'organized'>('disjointed');

  const stats = [
    { value: '۱۷+', label: 'سفر علمی و تجارب عملیاتی ممتد' },
    { value: '۱۵۰+', label: 'برند و هلدینگ مربی‌گری‌شده' },
    { value: '۳+', label: 'واحد تحقیق، طراحی و مانیتورینگ اختصاصی' },
    { value: '۲۵۰٪+', label: 'میانگین افزایش کارایی تیم پس از استقرار' },
  ];

  const quickServices = [
    { id: 'branding', title: 'برندسازی درونی و بیرونی', desc: 'ساخت هویت متمایز، ماندگار و فراتر از رقبا', detailPage: 'branding', icon: 'Award' },
    { id: 'business_plan', title: 'طراحی بیزنس پلن پویا', desc: 'نقشه راه هزینه‌ای سرمایه‌ای و پیش‌بینی سود ده سال آینده', detailPage: 'business_plan', icon: 'Layers' },
    { id: 'swot', title: 'آنالیز استراتژیک SWOT', desc: 'مجهز کردن شرکت در مقابل خطرات و روندهای اقتصادی کلان', detailPage: 'swot', icon: 'TrendingUp' },
    { id: 'org_chart', title: 'اصلاح چارت سازمانی', desc: 'پایان بوروکراسی کند سازمانی و تداخل وظیفه‌ای بین پرسنل', detailPage: 'org_chart', icon: 'Network' },
    { id: 'crm', title: 'پیکربندی سیستم‌های CRM', desc: 'سرعت بخشیدن به چرخه پیگیری و مهار ریزش سرنخ‌های گران‌قیمت', detailPage: 'crm', icon: 'Users' },
    { id: 'erp', title: 'یکپارچه‌سازی منابع ERP', desc: 'اتصال اتوماتیک موجودی انبار با سیستم مالی تجاری', detailPage: 'erp', icon: 'CheckCircle2' },
  ];

  const handleServiceClick = (pageId: string) => {
    onPageChange(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePostClick = (postId: string) => {
    onPostSelect(postId);
    onPageChange('blog_list');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#fcfdfd]" id="home-view-container">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-transparent pt-8 pb-20 lg:py-28 text-right border-b border-sky-100">
        
        {/* Sky blue background lighting blur objects */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-sky-200/40 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-orange-100/30 rounded-full blur-2xl -z-10" />
        
        {/* Grid layout decoration based on "Systems & Structure" art direction */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e904_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e904_1px,transparent_1px)] bg-[size:32px_32px] -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Right: Slogan, Copywriter text and CTAs */}
            <div className="lg:col-span-7 space-y-6 lg:space-y-8">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/90 border border-sky-150 rounded-full text-xs text-[#0ea5e9] font-bold shadow-sm">
                <Sparkles className="w-4 h-4 text-orange-400" />
                <span>برگ زرینی در توسعه اصولی کسب‌وکار شما</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 leading-tight md:leading-normal">
                ما برند <span className="text-orange-500 relative inline-block">شما را می‌سازیم
                  <span className="absolute bottom-1 right-0 left-0 h-1.5 bg-orange-400/20 rounded-full -z-10" />
                </span>
                <br />
                و ساختار سودآوری را مستقر می‌کنیم
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl leading-relaxed">
                مجموعه مشاوره‌ای و توسعه‌ای <strong className="text-slate-900">شهریار ویژن</strong>، به رهبری مستقیم مهندس علیرضا شهریار، همراه صاحبین صنایع و کارآفرینان بزرگ کشور در مراحل ساخت، سازماندهی مجدد ساختار پرسنل، افزایش فروش سازنده، و کاهش چشمگیر هدررفت منابع است.
              </p>

              {/* High-value quick trust values */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-gray-700">
                <div className="flex items-center gap-2 font-medium">
                  <ShieldCheck className="w-5 h-5 text-[#0ea5e9] flex-shrink-0" />
                  <span>طراحی ساختار، چرت و فلوچارت پاسخگو</span>
                </div>
                <div className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span>استقرار عملیاتی CRM و یکپارچه‌‌سازی سیستم‌های ERP</span>
                </div>
              </div>

              {/* Actions buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => handleServiceClick('consultation_request')}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl text-sm transition-all shadow-lg shadow-orange-500/10 hover:shadow-[#0ea5e9]/20 flex items-center gap-2 group cursor-pointer"
                  id="hero-free-consult-cta"
                >
                  <span>درخواست مربی‌گری و عارضه‌یابی رایگان</span>
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                </button>
                <button
                  onClick={() => handleServiceClick('services_overview')}
                  className="bg-[#1e2329] hover:bg-[#2d343f] text-white font-semibold px-6 py-4 rounded-xl text-sm transition-colors cursor-pointer"
                  id="hero-services-cta"
                >
                  مشاهده خدمات تخصصی
                </button>
              </div>

            </div>

            {/* Left: Premium Portrait / Sky Blue Abstract Graphic switcher */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-400/25 to-transparent blur-3xl pointer-events-none -z-10" />
              
              {/* Premium Visual Switcher Controls */}
              <div className="flex justify-center gap-2 mb-4 bg-white/80 backdrop-blur-sm p-1.5 rounded-xl border border-sky-200/60 max-w-[280px] mx-auto shadow-sm">
                <button
                  type="button"
                  onClick={() => setHeroVisualType('portrait')}
                  className={`flex-1 py-1.5 px-3 rounded-lg text-[10px] sm:text-xs font-bold transition-all cursor-pointer ${
                    heroVisualType === 'portrait'
                      ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                      : 'text-slate-700 hover:bg-orange-50'
                  }`}
                >
                  پرتره عکاسی
                </button>
                <button
                  type="button"
                  onClick={() => setHeroVisualType('vector')}
                  className={`flex-1 py-1.5 px-3 rounded-lg text-[10px] sm:text-xs font-bold transition-all cursor-pointer ${
                    heroVisualType === 'vector'
                      ? 'bg-[#0ea5e9] text-white shadow-md shadow-[#0ea5e9]/20'
                      : 'text-slate-700 hover:bg-sky-100/75'
                  }`}
                >
                  ساختار انتزاعی
                </button>
              </div>

              <div className="max-w-sm mx-auto">
                {heroVisualType === 'vector' ? (
                  <div className="relative border border-sky-150 rounded-3xl overflow-hidden shadow-2xl bg-white aspect-square min-h-[340px]">
                    <SkyBlueAbstractGraphic preset="general" className="w-full h-full border-none rounded-none bg-gradient-to-br from-white to-sky-50/50" />
                  </div>
                ) : (
                  <div className="relative border-2 border-sky-200/60 rounded-3xl overflow-hidden shadow-2xl bg-white aspect-[3/4] min-h-[420px] group">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-b from-sky-400/10 to-transparent pointer-events-none" />
                    <img
                      src={asset('/assets/final/people/founder-standing-cactus-dark-suit.webp')}
                      alt="مهندس علیرضا شهریار - بنیان‌گذار و مشاور ارشد استراتژیک"
                      className="w-full h-full object-cover object-[48%_28%] scale-100 group-hover:scale-105 transition-all duration-700 ease-out"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                      <span className="text-white font-bold text-sm block">مهندس علیرضا شهریار</span>
                      <span className="text-[#7dd3fc] text-xs block mt-1">بنیان‌گذار و مشاور ارشد استراتژیک</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Trust Badge overlay */}
              <div className="absolute -bottom-6 -right-2 sm:-right-6 bg-white border border-sky-100 rounded-2xl p-4 shadow-xl flex items-center gap-3 text-right max-w-[270px] z-10">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-500 flex-shrink-0 animate-pulse">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-black text-slate-900 block leading-tight">درمان بوروکراسی بومی</span>
                  <span className="text-[10px] text-gray-500 block leading-snug mt-1">
                    عارضه‌یابی و درمان ناهماهنگی بین پرسنل و شرکای تجاری به صورت تضمینی.
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 2. TRUST INDICATORS SEALS */}
      <section className="bg-slate-900 text-white py-12 relative overflow-hidden" id="trust-indicator-bar">
        {/* Subtle network connection graphic lines in the background of target design */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#7dd3fc_1px,transparent_1px)] [background-size:16px_16px] -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-r divide-slate-800 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2 px-4 border-r first:border-r-0 border-slate-800">
                <div className="text-3xl md:text-4xl font-extrabold text-[#7dd3fc] font-mono tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[11px] sm:text-xs text-gray-400 font-medium leading-relaxed">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES - THE HERO SERVICES CARDS */}
      <section className="py-20 md:py-28 bg-[#fcfdfd]" id="home-services-intro">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header block with Sky blue borders */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4 max-w-2xl text-right">
              <span className="text-xs bg-[#0ea5e9]/10 text-[#0ea5e9] font-bold px-3 py-1 bg-sky-100 rounded-full">
                خدمات استراتژیک و مهندسی
              </span>
              <h2 className="text-2xl sm:text-4.5xl font-black text-slate-950 border-r-4 border-orange-500 pr-3">
                چه گره‌هایی از سازمان شما باز می‌کنیم؟
              </h2>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                شهریار ویژن با تکیه بر اصول مدیریت مهندسی، از پی ریزی ایده آغازین (بیزنس پلن) تا مراحل برندسازی، چارت‌دهی و مکانیزاسیون مالی و ارتباط با مشتری همراه مطمئن شماست:
              </p>
            </div>
            <div>
              <button 
                onClick={() => handleServiceClick('services_overview')}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0ea5e9] hover:text-[#0c8cc7] transition-all cursor-pointer border-b border-sky-100 pb-1"
              >
                <span>مشاهده کلیه خدمات عمیق</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quickServices.map((service, index) => (
              <div 
                key={service.id} 
                className="bg-white border border-sky-100 hover:border-[#0ea5e9]/30 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group duration-300 relative text-right"
                id={`home-service-card-${service.id}`}
              >
                <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-[#0ea5e9] mb-6 group-hover:bg-[#0ea5e9] group-hover:text-white transition-colors">
                  {service.icon === 'Award' && <Award className="w-6 h-6" />}
                  {service.icon === 'Layers' && <Layers className="w-6 h-6" />}
                  {service.icon === 'TrendingUp' && <TrendingUp className="w-6 h-6" />}
                  {service.icon === 'Network' && <Network className="w-6 h-6" />}
                  {service.icon === 'Users' && <Users className="w-6 h-6" />}
                  {service.icon === 'CheckCircle2' && <CheckCircle2 className="w-6 h-6" />}
                </div>

                <h3 className="text-base sm:text-lg font-black text-slate-950 mb-3 group-hover:text-orange-500 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-6">
                  {service.desc}
                </p>

                <button
                  onClick={() => handleServiceClick(service.detailPage)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0ea5e9] group-hover:text-orange-500 transition-colors cursor-pointer"
                >
                  <span>جزئیات و خروجی‌های مکتوب این خدمت</span>
                  <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. ABOUT SHAHRIAR VISION SECTION (with standing CEO portrait) */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-sky-50/40 via-white to-transparent border-t border-sky-100 border-b relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Right: Portrait standing, cactus next to him */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-[#0ea5e9]/5 rounded-2xl rotate-2" />
              <div className="max-w-sm mx-auto">
                <PremiumVisualFrame
                  src="/assets/final/people/founder-standing-cactus-dark-suit.webp"
                  alt="مهندس علیرضا شهریار - دپارتمان استراتژی"
                  fallbackPreset="swot"
                  overlayLabel="عارضه‌یابی و تدوین مقتدر استراتژی"
                  aspectClass="aspect-3/4"
                />
              </div>

              {/* Small status widget */}
              <div className="absolute top-4 left-4 bg-slate-950/90 text-white rounded-lg p-3 text-xs border border-sky-500/30 font-medium">
                <span className="text-[#7dd3fc] font-bold block mb-0.5">کارآمد؛ مستقر؛ مقتدر</span>
                رویکرد ما رفع بوروکراسی بیمار سازمانی است.
              </div>
            </div>

            {/* Left: About Copy and quick values */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 border-r-4 border-orange-500 pr-3">
                <span className="text-orange-500 font-extrabold text-xs uppercase tracking-widest">تخصص ما تضمین پیشرفت شما</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-950">دیدگاه و تخصص همکاران شهریار ویژن</h2>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                بسیاری از آژانس‌های کارگاهی یا مشاوره‌ای تئوری‌پردازی می‌کنند. اما در شهریار ویژن، تمامی توصیه‌ها با خطوط مشخص، فلوچارت‌های با جزئیات و ساختارهای نرم‌افزاری به روی سیستم شما مستقر می‌شوند. ما بر این باوریم که مشاور واقعی در سوددهی نهایی شریک است.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                
                <div className="bg-white p-5 rounded-xl border border-sky-100 space-y-2">
                  <div className="text-orange-500 font-bold text-sm">مربی‌گری مراحل راه‌اندازی (Launch Stage)</div>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    تدوین بیزنس پلین استاندارد، برآورد مخارج CapEx و OpEx، مشخص کردن شرکای کلیدی و سناریوهای مهار خواب سرمایه.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl border border-sky-100 space-y-2">
                  <div className="text-[#0ea5e9] font-bold text-sm">مربی‌گری مراحل توسعه و بلوغ (Growth Stage)</div>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    اصلاح تخصصی فلوچارت چارت سازمانی، استقرار اتوماسیون‌های فروش CRM، تبیین KPI عملکرد پرسنلی و بهینه‌سازی جریان ناشی از ERP.
                  </p>
                </div>

              </div>

              <div className="pt-4">
                <button
                  onClick={() => handleServiceClick('about')}
                  className="bg-[#1e2329] hover:bg-[#2d343f] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-lg transition-colors cursor-pointer"
                >
                  مطالعه داستان ما و فلسفه مربی‌گری
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* INTERACTIVE STRATEGIC SIMULATOR AND DIAGNOSTIC MODULE */}
      <section className="py-20 bg-[#f8fafc] border-b border-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StrategicSimulator />
        </div>
      </section>

      {/* 5. ORGANIZATIONAL STRUCTURE EDUCATION SECTION (Clock Metaphor Interactive Widget) */}
      <section className="py-20 md:py-28 bg-white" id="home-clock-education">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs bg-orange-100 text-orange-500 font-extrabold px-3 py-1 rounded-full">
              آموزش کاربردی ساختاردهی
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-950">
              تشبیه ساعت سازمانی: اجزای جدا یا سیستم مقتدر؟
            </h2>
            <p className="text-[#1e2329] text-xs sm:text-sm leading-relaxed">
              اگر ساعت دیواری باارزش منزل خود را باز کنید و تمامی چرخ‌دنده‌ها، عقربه‌ها، باتری و شیشه را روی میز پهن کنید، آیا همچنان ثانیه‌ها را نشان می‌دهد؟ البته که نه! کسب‌وکار شما نیز بدون چارت سازمانی، انبوهی از اجزای باارزش بی‌ربط است.
            </p>
          </div>

          {/* Interactive Clock Metaphor Canvas Block */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-10 lg:p-14 relative overflow-hidden filter drop-shadow">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#0ea5e9]/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
              
              {/* Left Column: Selector controls */}
              <div className="lg:col-span-5 space-y-6 text-right">
                <div className="flex items-center gap-1.5 text-orange-400 text-xs font-bold">
                  <Award className="w-5 h-5" />
                  <span>شاهکار شایسته‌سالاری در چیدمان صندلی‌ها</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black">
                  چگونه ناهماهنگی پرسنل را برطرف کنیم؟
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  بر روی یکی از وضعیت‌های زیر ضربه بزنید تا ملموساً مشاهده فرمایید که بر هم خوردن پیوند اجزا در شرکت، چطور سودآوری شما را به صفر نزدیک می‌کند:
                </p>

                {/* State selector buttons */}
                <div className="space-y-3 pt-3">
                  <button 
                    type="button"
                    onClick={() => setClockStep('disjointed')}
                    className={`w-full p-4 rounded-xl border text-right transition-all flex items-center justify-between cursor-pointer ${
                      clockStep === 'disjointed' 
                        ? 'bg-rose-500/10 border-rose-500 text-rose-300 font-bold' 
                        : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    <span className="text-xs sm:text-sm">۱. وضعیت عدم ارتباط و بوروکراسی (قطعات باز شده)</span>
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  </button>

                  <button 
                    type="button"
                    onClick={() => setClockStep('organized')}
                    className={`w-full p-4 rounded-xl border text-right transition-all flex items-center justify-between cursor-pointer ${
                      clockStep === 'organized' 
                        ? 'bg-sky-500/10 border-[#0ea5e9] text-[#7dd3fc] font-bold ring-2 ring-[#0ea5e9]/30' 
                        : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    <span className="text-xs sm:text-sm">۲. وضعیت چارت سازمانی منظم (پیوند سیستماتیک سوئیسی)</span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </button>
                </div>

                <div className="pt-2 text-xs text-gray-400 leading-relaxed">
                  {clockStep === 'disjointed' ? (
                    <span className="text-rose-300 font-bold">⚠️ غرق شدگی در روزمرگی: به علت مبهم بودن وظایف، همواره مدیرعامل باید بر سر جزییات کوچک دخالت مستقیم کند.</span>
                  ) : (
                    <span className="text-[#7dd3fc] font-bold">✅ رهایی از تله کارهای خرد: پرسنل می‌دانند گزارش‌دهی به کیست و پاداش بر چه اساسی سنجیده می‌شود. مدیرعامل به کارهای استراتژیک می‌پردازد.</span>
                  )}
                </div>
              </div>

              {/* Right Column: Visual illustration representing watch parts vs connected gears */}
              <div className="lg:col-span-7 bg-slate-800/50 border border-slate-700/80 rounded-2xl p-8 h-96 flex flex-col justify-center items-center relative transition-all duration-500">
                
                {clockStep === 'disjointed' ? (
                  /* Render Disjointed heap of watch components with red flags */
                  <div className="w-full h-full flex flex-col justify-around items-center animate-fade-in text-center">
                    
                    <div className="grid grid-cols-3 gap-6 max-w-md w-full">
                      <div className="p-4 bg-slate-900 border border-rose-500/20 rounded-lg text-rose-300 space-y-1">
                        <span className="font-bold text-xs block">عقربه ثانیه</span>
                        <p className="text-[10px] text-gray-400">بدون چرخ دنده محرک</p>
                      </div>
                      <div className="p-4 bg-slate-900 border border-rose-500/20 rounded-lg text-rose-300 space-y-1">
                        <span className="font-bold text-xs block">باتری نو</span>
                        <p className="text-[10px] text-gray-400">خاک خوردن در جعبه</p>
                      </div>
                      <div className="p-4 bg-slate-900 border border-rose-500/20 rounded-lg text-rose-300 space-y-1">
                        <span className="font-bold text-xs block">پوسته محافظ</span>
                        <p className="text-[10px] text-gray-400">بدون اتصال به بدنه</p>
                      </div>
                    </div>

                    <div className="text-center max-w-sm mt-4 p-3 bg-rose-500/10 border border-rose-500/30 rounded-lg">
                      <p className="text-xs text-rose-200 leading-relaxed font-bold">
                        توده پراکنده قطعات ساعت کارایی چندانی ندارد. بدون پیوند استراتژیک، برترین پرسنل شما نیز سردرگم و کم‌راندمان خواهند بود.
                      </p>
                    </div>

                  </div>
                ) : (
                  /* Render Organized Connected Swiss Clock Metaphor Grid with Blue Lines */
                  <div className="w-full h-full flex flex-col justify-around items-center animate-fade-in">
                    
                    {/* Visual connected nodes representation mimicking org chart hierarchy */}
                    <div className="flex flex-col items-center gap-4 w-full">
                      
                      {/* Root node CEO */}
                      <div className="p-3.5 bg-orange-500 text-white rounded-lg text-xs font-bold shadow-md shadow-orange-500/20 z-10 whitespace-nowrap">
                        👑 مدیرعامل (رهبری استراتژی کلان)
                      </div>

                      {/* Connection lines */}
                      <div className="w-0.5 h-6 bg-[#0ea5e9]" />

                      {/* Department Level nodes */}
                      <div className="grid grid-cols-3 gap-4 w-full max-w-lg relative">
                        <div className="absolute inset-x-0 top-0 h-0.5 bg-[#0ea5e9] -z-10" />
                        
                        <div className="p-3 bg-slate-900 border-t-4 border-[#0ea5e9] rounded-lg text-[11px] text-center text-white font-bold leading-tight">
                          📈 معاونت بازاریابی و CRM
                        </div>
                        <div className="p-3 bg-slate-900 border-t-4 border-[#0ea5e9] rounded-lg text-[11px] text-center text-white font-bold leading-tight">
                          ⚙️ مدیر فنی کارگاهی و ERP
                        </div>
                        <div className="p-3 bg-slate-900 border-t-4 border-[#0ea5e9] rounded-lg text-[11px] text-center text-white font-bold leading-tight">
                          👥 منابع انسانی و کارانه (KPI)
                        </div>
                      </div>

                    </div>

                    <div className="text-center max-w-md mt-4 p-3 bg-[#0ea5e9]/10 border border-[#0ea5e9]/30 rounded-lg">
                      <p className="text-xs text-[#7dd3fc] leading-relaxed font-bold">
                        وقتی جریان اطلاعات و مسئولیت‌ها از بالا با کدهای مصلح RACI تبیین گردد، سازمان همچون یک ساعت مارک سوئیسی منظم و دقیق می‌چرخد.
                      </p>
                    </div>

                  </div>
                )}

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 6. RESULTS & ACHIEVEMENTS: BUSINESS TRANSFORMATION PROCESS */}
      <section className="py-20 md:py-28 bg-[#f8fafc] border-t border-b border-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-[#0ea5e9] text-xs font-bold px-3 py-1 bg-sky-100 rounded-full">برنامه تحول مقتدر</span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-950">
              نقشه راه عملیاتی ۴ فازه شهریار ویژن
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm">
              پرونده شما پس از ثبت، این مسیر مهندسی‌شده را برای مهار ریسک‌ها مواجه خواهد شد:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            
            {[
              { num: '۰۱', title: 'کالبدشکافی و عارضه‌یابی زیان', desc: 'پایش گره‌های بوروکراتیک و زیان‌های مکرر زنجیره تامین.' },
              { num: '۰۲', title: 'مهندسی مجدد بالادستی', desc: 'تدوین بیزنس پلین و سند تغییرات مقتدر RACI.' },
              { num: '۰۳', title: 'بومی‌سازی و استقرار ابزارها', desc: 'آموزش پرسنل فروش و کاستومایز کردن پنل‌های CRM.' },
              { num: '۰۴', title: 'مربی‌گری و هدایت سود ثابت', desc: 'کنترل شاخص‌های کلیدی عملکرد فردی و مانیتورینگ.' },
            ].map((step, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 rounded-2xl border border-sky-100 shadow-sm relative space-y-4 hover:border-orange-300 transition-all text-right group"
              >
                <div className="text-4xl font-extrabold font-mono text-[#0ea5e9]/20 group-hover:text-orange-400/30 transition-colors">
                  {step.num}
                </div>
                <h3 className="text-base font-bold text-slate-950">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {step.desc}
                </p>
                {idx < 3 && (
                  <div className="hidden md:block absolute left-[-20px] top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none">
                    ←
                  </div>
                )}
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* 7. CLIENT TESTIMONIALS (CEO Real Voice Quotes) */}
      <section className="py-20 bg-white" id="customer-opinions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-orange-500 text-xs font-bold px-3 py-1 bg-orange-50 rounded-full">شهادت مدیران موفق ایران</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950">صاحبین صنایع درباره ما چه می‌گویند؟</h2>
            <p className="text-gray-500 text-xs">
              پژواک صدای صنف کارآفرینانی که گام اصلاح ساختار را غیورانه و با هدایت شهریار ویژن برداشته‌اند:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Quote 1 */}
            <div className="bg-sky-50/50 p-8 rounded-2xl border border-sky-100 space-y-4 text-right hover:bg-white hover:shadow-lg transition-all">
              <p className="text-sm text-slate-800 leading-relaxed font-medium">
                "همواره دلمشغولی بزرگی پیرامون خروج کالاها از کارگاه و هم‌پوشانی گزارش‌‌های پرسنل داشتم. به کمک مهندسی چارت سازمانی و استقرار CRM توسط دپارتمان شهریار ویژن، اکنون فلوچارت تصمیم‌گیری ما به یک سیستم روتین بی‌نظیر تبدیل شده است."
              </p>
              <div className="flex items-center gap-3 pt-2">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center font-bold text-orange-500 text-sm">
                  م.ر
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 block">مهندس رضا مهدوی</span>
                  <span className="text-[10px] text-gray-500 block">رئیس هیئت‌مدیره صنایع قطعه‌سازی ماندگار</span>
                </div>
              </div>
            </div>

            {/* Quote 2 */}
            <div className="bg-sky-50/50 p-8 rounded-2xl border border-sky-100 space-y-4 text-right hover:bg-white hover:shadow-lg transition-all">
              <p className="text-sm text-slate-800 leading-relaxed font-medium">
                "ترس شدیدی از هزینه کردن روی تبلیغات داشتم چونکه دپارتمان فروش ما نرخ تبدیل بسیار پایینی داشت. تیم بازاریابی دیجیتال شهریار ویژن نه تنها کمپین سئو ما را بالا آورد، بلکه با برگزاری اتاقهای شبیه‌ساز، نرخ معاملات ما را سه برابر کردند."
              </p>
              <div className="flex items-center gap-3 pt-2">
                <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center font-bold text-[#0ea5e9] text-sm">
                  د.ح
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 block">دکتر سمیرا حسینی</span>
                  <span className="text-[10px] text-gray-500 block">موسس شتاب‌دهنده نوین فناوری البرز</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. KNOWLEDGE HUB - BLOG PREVIEWS */}
      <section className="py-20 md:py-28 bg-[#fcfdfd] border-t border-sky-100" id="home-knowledge-hub">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div className="text-right space-y-2">
              <span className="text-[#0ea5e9] text-xs font-bold">محتوای غنی و دانش‌محور</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-950">آخرین مقالات و راهبردهای بهینه‌سازی</h2>
            </div>
            <button
              onClick={() => {
                onPageChange('blog_list');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-[#0ea5e9] hover:text-orange-500 font-bold text-xs sm:text-sm transition-colors text-right cursor-pointer"
            >
              دیدن تمام مطالب مجله تخصصی ←
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogData.slice(0, 3).map((post) => (
              <div 
                key={post.id} 
                className="bg-white border border-sky-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="aspect-16/10 bg-slate-100 relative">
                  <PremiumVisualFrame 
                    src={post.image} 
                    alt={post.title} 
                    fallbackPreset="general"
                    aspectClass="aspect-16/10"
                    className="border-none rounded-none"
                  />
                </div>
                <div className="p-5 space-y-3">
                  <span className="text-[10px] bg-sky-50 text-[#0ea5e9] font-bold px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <h3 className="font-bold text-sm text-slate-950 leading-snug hover:text-orange-500 cursor-pointer" onClick={() => handlePostClick(post.id)}>
                    {post.title}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <button 
                    onClick={() => handlePostClick(post.id)}
                    className="text-xs text-[#0ea5e9] hover:text-[#0c8cc7] font-bold flex items-center gap-1 cursor-pointer pt-2"
                  >
                    مطالعه این مقاله علمی →
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. FINAL CTA CALLING INQUIRY BOX */}
      <section className="bg-gradient-to-r from-[#0ea5e9] to-[#0c8cc7] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-orange-400/20 rounded-full blur-2xl pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="bg-orange-500 text-white font-black text-xs py-1 px-3 rounded-full animate-pulse uppercase tracking-wider">
            ملاقات اول در دفتر پاسداران
          </span>
          <h2 className="text-2xl md:text-3.5xl lg:text-4.5xl font-black text-white leading-snug">
            آماده هم‌صحبتی با مشاور ارشد استراتژیِ شهریار ویژن هستید؟
          </h2>
          <p className="text-xs sm:text-sm text-sky-100 max-w-2xl mx-auto leading-relaxed">
            اجازه ندهید ناهماهنگی بین واحدها و زیان پنهان جریان نقدینگی، زحمات چندین ساله‌ی شما را بر باد دهد. عارضه‌یابی به واقع آغازگر حیات پویاست.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => handleServiceClick('consultation_request')}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl text-xs sm:text-sm transition-all shadow-lg hover:shadow-orange-500/20 cursor-pointer"
            >
              طراحی پرونده عارضه‌یابی رایگان
            </button>
            <button
              onClick={() => handleServiceClick('contact')}
              className="bg-white/15 hover:bg-white/20 border border-white/25 text-white font-semibold px-6 py-4 rounded-xl text-xs sm:text-sm transition-colors cursor-pointer"
            >
              دیدار حضوری و دریافت آدرس دفتر
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
