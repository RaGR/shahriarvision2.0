/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { servicesData } from '../data/servicesData';
import { 
  Award, FileText, BarChart3, GitFork, Users, Database, 
  UserCheck, TrendingUp, Globe, AlertCircle, Sparkles, CheckCircle, 
  HelpCircle, ArrowLeft, ArrowRight, ShieldCheck, ChevronDown, ChevronUp 
} from 'lucide-react';
import SkyBlueAbstractGraphic from './SkyBlueAbstractGraphic';
import PremiumVisualFrame from './PremiumVisualFrame';

interface ServiceDetailViewProps {
  serviceId: string; // e.g. 'branding' or 'business-plan'
  onPageChange: (page: string) => void;
}

// Map icon names in servicesData to Lucide icons
const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Award': return <Award className="w-8 h-8 text-[#0ea5e9]" />;
    case 'FileText': return <FileText className="w-8 h-8 text-[#0ea5e9]" />;
    case 'BarChart3': return <BarChart3 className="w-8 h-8 text-[#0ea5e9]" />;
    case 'GitFork': return <GitFork className="w-8 h-8 text-[#0ea5e9]" />;
    case 'Users': return <Users className="w-8 h-8 text-[#0ea5e9]" />;
    case 'Database': return <Database className="w-8 h-8 text-[#0ea5e9]" />;
    case 'UserCheck': return <UserCheck className="w-8 h-8 text-[#0ea5e9]" />;
    case 'TrendingUp': return <TrendingUp className="w-8 h-8 text-[#0ea5e9]" />;
    case 'Globe': return <Globe className="w-8 h-8 text-[#0ea5e9]" />;
    default: return <Sparkles className="w-8 h-8 text-[#0ea5e9]" />;
  }
};

export default function ServiceDetailView({ serviceId, onPageChange }: ServiceDetailViewProps) {
  // Translate underscore keys to hyphens as needed for servicesData matching
  let queryId = serviceId.replace(/_/g, '-');
  if (queryId === 'hr') {
    queryId = 'human-resources';
  }
  // Map legacy route IDs to their canonical service IDs
  const legacyIdMap: Record<string, string> = {
    'business-startup-advice': 'business-startup-advice',
    'business-startup-advice-2': 'business-startup-advice',
    'consulting-to-increase-sales-and-profitability': 'sales-growth',
    'design-and-implementation-of-marketing-campaigns': 'marketing-campaigns',
    'design-and-implementation-of-sales-campaigns': 'sales-campaigns',
    'organizational-problem-solving': 'organizational-diagnosis',
    'establishment-of-executive-management-system': 'executive-management',
    'establishing-an-after-sales-service-system-and-measuring-customer-satisfaction': 'after-sales',
    'establishing-a-system-to-increase-sales': 'sales-increase-system',
    'establishing-a-system-to-increase-productivity': 'productivity-improvement',
    'human-resource-training-and-organization': 'human-resources',
    'organizational-chart-design': 'org-chart',
    'designing-and-establishing-branding-processes': 'branding-process',
    'design-a-winning-strategy': 'winning-strategy',
    'video-lessons': 'video-lessons',
  };
  if (legacyIdMap[queryId]) {
    queryId = legacyIdMap[queryId];
  }
  const service = servicesData[queryId];
  
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  // Custom interactive abstract vector/photography switcher state
  const [visualType, setVisualType] = useState<'vector' | 'portrait'>('vector');

  // Map service ID to interactive vector preset
  const getPresetForService = (id: string): 'branding' | 'org-chart' | 'crm' | 'erp' | 'business-plan' | 'swot' | 'human-resources' | 'sales-growth' | 'digital-marketing' | 'general' => {
    switch (id) {
      case 'branding': return 'branding';
      case 'org-chart': return 'org-chart';
      case 'crm': return 'crm';
      case 'erp': return 'erp';
      case 'business-plan': return 'business-plan';
      case 'swot': return 'swot';
      case 'human-resources': return 'human-resources';
      case 'sales-growth': return 'sales-growth';
      case 'digital-marketing': return 'digital-marketing';
      default: return 'general';
    }
  };

  if (!service) {
    return (
      <div className="py-20 text-center max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">خدمت یافت نشد</h2>
        <button 
          onClick={() => onPageChange('services_overview')} 
          className="bg-[#0ea5e9] text-white px-6 py-2 rounded-lg"
        >
          بازگشت به خدمات تخصصی
        </button>
      </div>
    );
  }

  // Get matching images or backgrounds for each service page to fit the art direction
  const getServiceAsset = (id: string) => {
    switch (id) {
      case 'branding':
        return '/assets/final/hero/home-hero-shahriar-vision.webp';
      case 'org-chart':
        return '/assets/final/people/founder-standing-cactus-dark-suit.webp';
      case 'crm':
        return '/assets/final/people/founder-desk-consultation.webp';
      case 'business-plan':
      case 'swot':
        return '/assets/final/people/founder-lounge-strategy.webp';
      default:
        return '/assets/final/people/founder-standing-cactus-light-shirt.webp';
    }
  };

  return (
    <div className="bg-[#fcfdfd]" id={`service-detail-${service.id}`}>
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-transparent pt-12 pb-20 md:py-28 border-b border-sky-100">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-12 left-1/4 w-80 h-80 bg-orange-100/30 rounded-full blur-2xl -z-10" />
        
        {/* Visual system Grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e905_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e905_1px,transparent_1px)] bg-[size:32px_32px] -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero text block */}
            <div className="lg:col-span-7 space-y-6 text-right">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-100/80 rounded-full border border-sky-200 text-sm text-[#0ea5e9] font-medium">
                {getIcon(service.iconName)}
                <span>خدمات ممتاز مشاوره مدیریت</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-950 leading-tight md:leading-normal">
                {service.title}
              </h1>
              <p className="text-lg md:text-xl font-bold text-slate-700">
                {service.subtitle}
              </p>
              <p className="text-base text-gray-600 leading-relaxed max-w-2xl">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={() => onPageChange('consultation_request')}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-lg text-sm transition-all shadow-md shadow-orange-500/10 hover:shadow-orange-500/20 cursor-pointer"
                >
                  رزرو جلسه عارضه‌یابی این خدمت
                </button>
                <button
                  onClick={() => onPageChange('services_overview')}
                  className="border border-[#0ea5e9] text-[#0ea5e9] hover:bg-sky-50 font-medium px-6 py-3.5 rounded-lg text-sm transition-colors cursor-pointer flex items-center gap-2"
                >
                  <span>سایر خدمات تخصصی</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Hero Image / Art Block */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-x-0 -bottom-8 h-1/2 bg-sky-200/20 blur-2xl rounded-full" />
              
              {/* Premium High-Fidelity Selector Controls */}
              <div className="flex justify-center gap-2 mb-4 bg-sky-100/50 p-1.5 rounded-xl border border-sky-200/60 max-w-[280px] mx-auto shadow-sm">
                <button
                  type="button"
                  onClick={() => setVisualType('vector')}
                  className={`flex-1 py-1.5 px-3 rounded-lg text-[10px] sm:text-xs font-bold transition-all cursor-pointer ${
                    visualType === 'vector'
                      ? 'bg-[#0ea5e9] text-white shadow-md shadow-[#0ea5e9]/20'
                      : 'text-slate-700 hover:bg-sky-100/75'
                  }`}
                >
                  🌀 ساختار انتزاعی
                </button>
                <button
                  type="button"
                  onClick={() => setVisualType('portrait')}
                  className={`flex-1 py-1.5 px-3 rounded-lg text-[10px] sm:text-xs font-bold transition-all cursor-pointer ${
                    visualType === 'portrait'
                      ? 'bg-[#0ea5e9] text-white shadow-md shadow-[#0ea5e9]/20'
                      : 'text-slate-700 hover:bg-sky-100/75'
                  }`}
                >
                  🖼️ سند عکاسی
                </button>
              </div>

              <div className="max-w-md mx-auto">
                {visualType === 'vector' ? (
                  <div className="relative border border-sky-150 rounded-3xl overflow-hidden shadow-xl bg-white aspect-4/3 md:aspect-square min-h-[320px]">
                    <SkyBlueAbstractGraphic preset={getPresetForService(service.id)} className="w-full h-full border-none rounded-none bg-gradient-to-br from-white to-sky-50/50" />
                  </div>
                ) : (
                  <PremiumVisualFrame 
                    src={getServiceAsset(service.id)}
                    alt={service.title}
                    fallbackPreset={getPresetForService(service.id)}
                    overlayLabel={service.subtitle}
                    aspectClass="aspect-4/3 md:aspect-square"
                    className="min-h-[320px]"
                  />
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Problem Statement & Why It Matters (Side by Side Grid) */}
      <section className="py-16 md:py-24 border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Box A: Problem Statement */}
            <div className="bg-rose-50/50 border border-rose-100 rounded-2xl p-8 text-right space-y-4">
              <div className="flex items-center gap-3 text-rose-700">
                <AlertCircle className="w-6 h-6 flex-shrink-0" />
                <h3 className="text-xl font-bold">چالش متداول کسب‌وکارها چیست؟</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm">
                {service.problemStatement}
              </p>
              <div className="p-3 bg-white/70 border border-rose-100 rounded-lg text-xs text-rose-800">
                <strong>ریشه بروز خطا:</strong> خلاء تخصص علمی موازی با اصرار بر تداوم فرآیندهای تجربی قدیمی.
              </div>
            </div>

            {/* Box B: Why It Matters */}
            <div className="bg-sky-50/60 border border-sky-100 rounded-2xl p-8 text-right space-y-4">
              <div className="flex items-center gap-3 text-sky-800">
                <ShieldCheck className="w-6 h-6 flex-shrink-0" />
                <h3 className="text-xl font-bold">چرا حل اساسی این موضوع حیاتی است؟</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm">
                {service.whyItMatters}
              </p>
              <div className="p-3 bg-white/80 border border-sky-100 rounded-lg text-xs text-sky-800">
                <strong>نتیجه استقرار ممتد:</strong> کاهش قیمت بهای‌تمام‌شده، ارتقای ملموس سود خالص و ایجاد انعطاف پذیری در مقابل تلاطم بازار.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Key Benefits Section */}
      <section className="py-16 bg-gradient-to-b from-white to-sky-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 border-r-4 border-orange-400 pr-3 inline-block">
              مزایای استقرار این فرآیند در شرکت شما
            </h2>
            <p className="text-gray-600 mt-3 text-sm">
              پس از اجرای فاز به فاز این ساختار، شاخص‌های کلیدی کار مکرر شرکت شما به صورت علمی بهبود خواهند یافت:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((benefit, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 rounded-xl border border-sky-100 shadow-sm hover:shadow-md hover:border-[#0ea5e9]/30 transition-all text-right flex gap-3 items-start"
              >
                <div className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center text-[#0ea5e9] font-bold text-xs flex-shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <div>
                  <p className="text-sm text-slate-800 font-bold leading-normal mb-1">
                    دستاورد عملیاتی شماره {idx + 1}
                  </p>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {benefit}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Professional Implementation Process (Timeline) */}
      <section className="py-16 md:py-24 bg-white border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-orange-500 tracking-wider">نقشه پیاده‌سازی گام به گام</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-2">
              مراحل ارزیابی، مهندسی و استقرار خدمت
            </h2>
            <p className="text-gray-500 mt-3 text-sm">
              از اولین مشاوره تخصصی تا تحویل کامل به سازمان شما، این مراحل را به صورت یکپارچه طی می‌کنیم:
            </p>
          </div>

          {/* Graphical timeline */}
          <div className="relative border-r border-[#0ea5e9]/30 mr-4 sm:mr-8 md:mr-16 space-y-12 max-w-5xl md:mx-auto">
            {service.process.map((step, idx) => (
              <div key={idx} className="relative pr-8 md:pr-12 text-right group">
                {/* Dot */}
                <div className="absolute -right-[13px] top-1.5 w-6 h-6 rounded-full bg-white border-4 border-[#0ea5e9] group-hover:bg-[#0ea5e9] group-hover:scale-110 transition-all flex items-center justify-center" />
                
                {/* Step contents */}
                <div className="bg-sky-50/40 border border-sky-100 p-6 rounded-xl hover:bg-white hover:shadow-lg hover:border-orange-200 transition-all">
                  <div className="flex flex-row-reverse justify-between items-center mb-2">
                    <span className="text-xs font-mono font-bold text-orange-500 bg-orange-100 px-3 py-1 rounded">
                      فاز {step.step}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Clean Deliverables Checklist */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-4 text-right space-y-4">
              <span className="text-xs font-bold text-orange-400">برون‌داد فیزیکی و مکتوب</span>
              <h2 className="text-2xl md:text-3xl font-black text-white">
                خروجی‌ها و اسناد تحویلی پروژه
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                در انتهای این فرآیند، دپارتمان تخصصی شهریار ویژن دفترچه‌های مدون و نقشه‌های راهنمای فوق را به مدیران مالی و اجرایی سازمان تحویل می‌دهد.
              </p>
              <div className="h-0.5 w-20 bg-orange-500 rounded" />
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.deliverables.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="bg-slate-800/80 border border-slate-700 p-5 rounded-lg text-right flex items-start gap-3 hover:border-sky-400 transition-all"
                  >
                    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-sm font-bold text-[#7dd3fc]">سند اجرایی شماره {idx + 1}</span>
                      <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. FAQ Accordion Section */}
      <section className="py-16 md:py-24 bg-[#fcfdfd]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <HelpCircle className="w-8 h-8 text-[#0ea5e9] mx-auto mb-2" />
            <h2 className="text-2xl font-bold text-slate-900">
              سوالات متداول متقاضیان این خدمت
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm mt-1">
              پاسخ صریح دپارتمان حقوقی و فنی شهریار ویژن به چند سوال اساسی کارفرمایان ارجمند:
            </p>
          </div>

          <div className="space-y-4 text-right">
            {service.faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index} 
                  className="bg-white border rounded-xl overflow-hidden transition-all duration-300"
                  style={{ borderColor: isOpen ? '#93c5fd' : '#e2e8f0' }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-right font-medium text-slate-950 focus:outline-none hover:bg-sky-50/50 cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-bold pr-2">{faq.question}</span>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-[#0ea5e9]" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-3 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-sky-50 bg-sky-50/30">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. Conversion CTA Bottom section */}
      <section className="bg-gradient-to-r from-sky-600 to-sky-700 py-16 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-2xl -z-10" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-orange-400/20 rounded-full blur-2xl -z-10" />
        
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <span className="bg-orange-500 text-white font-bold text-xs py-1.5 px-3 rounded-full">فرم دعوت به جلسه معارفه رایگان</span>
          <h2 className="text-2xl md:text-3xl font-black">
            تصمیم با شماست؛ ادامه جنگِ قیمتی فرساینده یا طراحی سیستم مقتدر سود؟
          </h2>
          <p className="text-sm text-sky-100 leading-relaxed max-w-2xl mx-auto">
            مدیران شایسته برای مهار تلاطم بازار منتظر معجزه نمی‌مانند؛ بلکه با تکیه بر اطلاعات پویا و اصلاح فرآیندهای سنتی، سیستم خود را از نو جهت‌دهی می‌کنند. ۳۰ دقیقه جلسه معارفه رایگان با دپارتمان شهریار ویژن، آغازگر این جهش است.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onPageChange('consultation_request')}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-lg text-sm transition-all shadow-lg hover:shadow-orange-500/20 cursor-pointer"
            >
              هم‌اکنون درخواست بدهید
            </button>
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                onPageChange('services_overview');
              }}
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-6 py-4 rounded-lg text-sm transition-colors cursor-pointer"
            >
              دیدن لیست تمام خدمات
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
