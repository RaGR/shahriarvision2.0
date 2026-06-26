/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Compass, Eye, Heart, Target, Star, Shield, 
  Users2, Award, ArrowLeft, MessageSquareQuote, CheckCircle 
} from 'lucide-react';
import SkyBlueAbstractGraphic from './SkyBlueAbstractGraphic';
import PremiumVisualFrame from './PremiumVisualFrame';

interface AboutViewProps {
  onPageChange: (page: string) => void;
}

export default function AboutView({ onPageChange }: AboutViewProps) {
  // Custom abstract visual system vs portrait switcher state (default to vector)
  const [visualType, setVisualType] = useState<'vector' | 'portrait'>('vector');
  return (
    <div className="bg-[#fcfdfd] text-right" id="about-us-section">
      
      {/* 1. Page Header Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-transparent pt-12 pb-20 border-b border-sky-150">
        <div className="absolute top-0 right-10 w-80 h-80 bg-sky-200/50 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-4 left-1/3 w-72 h-72 bg-orange-100/40 rounded-full blur-2xl -z-10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e903_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e903_1px,transparent_1px)] bg-[size:24px_24px] -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs bg-[#0ea5e9]/10 text-[#0ea5e9] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
              داستان ما و آرمان‌های ما
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-slate-950 leading-tight">
              شرکت توسعه کسب‌وکار شهریار ویژن
            </h1>
            <p className="text-lg text-gray-600 font-medium leading-relaxed">
              مهندسی سیستم‌های مقتدر تجاری، از آغاز ایده تا قله سودآوری پایدار.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Brand Story Section (with Image) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Story Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 border-r-4 border-orange-500 pr-3">
                <span className="text-orange-500 font-extrabold text-xs uppercase tracking-widest">چگونه آغاز شد</span>
                <h2 className="text-2xl md:text-3xl font-black text-slate-950">داستان شکل‌گیری شهریار ویژن</h2>
              </div>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                در بازار پرتلاطم و پویای امروز ایران، تفاوت بین شرکت‌های پیشتاز سودآور با بنگاه‌های ورشکسته، نه در میزان سرمایه مادی اولیه، بلکه در داشتن «ساختار اصولی»، «استراتژی متقاعدسازی» و «سیستم‌های پایش پویا» نفهته است.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                مجموعه شهریار ویژن با سرپرستی مستقیم مهندس شهریار، به عنوان کارآفرین و مشاور امین ده‌ها هلدینگ برتر صنعتی و تجاری، پس از سال‌ها تجربه میدانی و مواجهه با بیش از صدها عارضه حاد سازمانی پایه‌گذاری شد. ماموریت ما درمان ریشه‌ای ناهماهنگی پرسنل، نابودی ساختارهای بوروکراتیک جزیره‌ای سنتی و مجهز کردن کسب‌وکارها با ابزارهای خودکار و مدرن مدیریت (مانند چارت مقتدر، CRM, SWOT و س��ستم‌های ERP) است.
              </p>
              
              {/* Quote container */}
              <div className="p-6 bg-sky-50 border border-sky-150 rounded-xl relative">
                <MessageSquareQuote className="w-8 h-8 text-sky-200 absolute left-4 top-4" />
                <p className="text-sm font-bold text-slate-800 leading-relaxed pr-2">
                  "اصلاح ساختار یک شرکت، باز کردن چرخ‌دنده‌های یک ساعت دقیق سوئیسی است؛ هدف تایید مجدد تمام اتصالات مقتدر است تا پالس‌های مکرر حرکتی به یک ریتم سودآور منظم تبدیل گردد."
                </p>
                <span className="text-xs text-orange-500 font-bold block mt-2 mr-2">
                  — مهندس علیرضا شهریار، موسس شهریار ویژن
                </span>
              </div>
            </div>

            {/* Standing image */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-sky-500/10 rounded-2xl -rotate-2" />
              
              {/* Premium Controls */}
              <div className="flex justify-center gap-2 mb-4 bg-sky-100/50 p-1.5 rounded-xl border border-sky-200/60 max-w-[280px] mx-auto shadow-sm">
                <button
                  type="button"
                  onClick={() => setVisualType('vector')}
                  className={`flex-1 py-1.5 px-3 rounded-lg text-[10px] sm:text-xs font-bold transition-all cursor-pointer ${
                    visualType === 'vector'
                      ? 'bg-[#0ea5e9] text-white shadow-md'
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
                      ? 'bg-[#0ea5e9] text-white shadow-md'
                      : 'text-slate-700 hover:bg-sky-100/75'
                  }`}
                >
                  🖼️ پرتره عکاسی
                </button>
              </div>

              <div className="max-w-sm mx-auto">
                {visualType === 'vector' ? (
                  <div className="relative border-2 border-sky-200/90 rounded-3xl overflow-hidden shadow-xl bg-white aspect-3/4 min-h-[320px]">
                    <SkyBlueAbstractGraphic preset="general" className="w-full h-full border-none rounded-none bg-gradient-to-br from-white to-sky-50/50" />
                  </div>
                ) : (
                  <PremiumVisualFrame
                    src="/assets/final/people/founder-desk-consultation.webp"
                    alt="موسس شهریار ویژن"
                    fallbackPreset="general"
                    overlayLabel="مهندس علیرضا شهریار - بنیان‌گذار"
                    aspectClass="aspect-3/4"
                    className="min-h-[320px]"
                  />
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Mission, Vision, Values (Bento-style Cards) */}
      <section className="py-16 bg-gradient-to-b from-white to-sky-50/50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 border-r-4 border-orange-500 pr-3 inline-block">
              آرمان‌ها و جهت‌گیری‌های راهبردی ما
            </h2>
            <p className="text-gray-500 text-sm mt-3">
              جهت‌گیری درازمدت شهریار ویژن بر پایه‌ی ایجاد بالاترین ارزش و مربی‌گری صادقانه کسب‌وکارهاست:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Mission */}
            <div className="bg-white p-8 rounded-xl border border-sky-100 shadow-sm space-y-4 hover:border-[#0ea5e9] transition-all">
              <div className="w-12 h-12 rounded-lg bg-sky-100 flex items-center justify-center text-[#0ea5e9]">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-950">بیانیه ماموریت (Mission)</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                ماموریت ما تجهیز همه‌جانبه‌ی علمی و فنی صنف کارآفرینان در مراحل راه‌اندازی و توسعه کسب‌وکار با ارائه‌ی متدولوژی‌های استراتژیک مدرن، از طراحی چارت مقتدر تا استقرار اتوماسیون‌های نوین فروش جهت افزایش بازده و مهار هزینه‌ها است.
              </p>
            </div>

            {/* Card 2: Vision */}
            <div className="bg-white p-8 rounded-xl border border-sky-100 shadow-sm space-y-4 hover:border-[#0ea5e9] transition-all">
              <div className="w-12 h-12 rounded-lg bg-sky-100 flex items-center justify-center text-[#0ea5e9]">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-950">بیانیه‌ی چشم‌انداز (Vision)</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                چشم‌انداز ما تبدیل شدن به مقتدرترین قطب طراحان سیستم‌های هم‌راستا در کشور و تکیه‌گاهی مطمئن تراز اول برای ارتقای بازده هلدینگ‌های تجاری و تولیدکننده در خاورمیانه تا پایان دهه‌ جاری است.
              </p>
            </div>

            {/* Card 3: Values */}
            <div className="bg-white p-8 rounded-xl border border-sky-100 shadow-sm space-y-4 hover:border-[#0ea5e9] transition-all">
              <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center text-orange-500">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-950">ارزش‌های محوری (Values)</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                پایبندی بی‌قید‌وشرط به حقیقت آماری، رازداری کامل دیتای تجاری مشتریان غیور، ارائه م��تندات کاملاً بومی و کاربردی برپایه‌ی شرایط اقتصادی ایران، و ترویج شایسته‌سالاری در ساختار پرسنلی برای مهار فساد فرآیندی.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Why Clients Trust Us (with Sitting Image 5) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Sitting image Left */}
            <div className="lg:col-span-5 relative order-last lg:order-first">
              <div className="absolute inset-0 bg-orange-100/50 rounded-2xl rotate-2" />
              <div className="max-w-sm mx-auto">
                <PremiumVisualFrame
                  src="/assets/final/people/founder-lounge-strategy.webp"
                  alt="مشاور ارشد استراتژیک شهریار ویژن"
                  fallbackPreset="business-plan"
                  overlayLabel="مشاوره تراز اول توسعه کسب‌وکار"
                  aspectClass="aspect-3/4"
                />
              </div>
            </div>

            {/* Why text Right */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 border-r-4 border-[#0ea5e9] pr-3">
                <span className="text-[#0ea5e9] font-bold text-xs uppercase tracking-wider">مزیت‌های رقابتی ما</span>
                <h2 className="text-2xl md:text-3xl font-black text-slate-950">چرا کارآفرینان به شهریار ویژن اعتماد دارند؟</h2>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                بسیاری از آژانس‌های بازاریابی صرفاً پمپاژ تبلیغاتی می‌کنند؛ اما کارفرما متوجه می‌شود زیرساخت لازم برای پاسخگویی به این تقاضا در هتل، کارگاه یا شرکتش وجود ندارد. ما تفاوت جدی با رقبا داریم:
              </p>

              <div className="space-y-4">
                {[
                  { title: 'مشاوره متمرکز بر سیستم، نه سلیقه', desc: 'تمامی پروتکل‌ها و خروجی‌های ساختاری بر اساس واقعیت‌های فرآیندی سازمان مهندسی و مستقر می‌شود.' },
                  { title: 'همراهی گام‌به‌گام تا استقرار ملموس', desc: 'ما فقط مکتوب نمی‌نویسیم و شرکت را رها نمی‌کنیم؛ بلکه در مراحل استخدام، توجیه پرسنل و آموزش CRM شانه‌به‌شانه با شما حضور فعال داریم.' },
                  { title: 'سندهای بومی‌سازی‌شده با شرایط اقتصادی ایران', desc: 'سندها انتزاعی یا فانتزی نیستند؛ بلکه بحران‌های تورمی، نقدینگی و مشکلات گمرکی بازار فعلی ایران را مهار و برطرف می‌نمایند.' },
                  { title: 'رازداری مطلق داده‌های سازمانی', desc: 'تعهد به برقراری بالاترین سطوح محرمانگی و حفظ اسرار فرمول‌های تولید، آمار پرسنلی و دیتابیس CRM مشتریان گرانقدر.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 text-right">
                    <CheckCircle className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-sm sm:text-base text-slate-900">{item.title}</h4>
                      <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onPageChange('consultation_request')}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm px-6 py-3.5 rounded-lg transition-all shadow-md hover:shadow-orange-500/20 cursor-pointer"
                >
                  درخواست ارزیابی عملکرد سازمان شما
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
