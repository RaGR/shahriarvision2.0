/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  ClipboardCheck, Building2, User, PhoneCall, HelpCircle, 
  Send, Sparkles, Check, ChevronLeft, ChevronRight, CheckSquare, 
  Square, RefreshCw, Calendar, FileCheck 
} from 'lucide-react';
import { ConsultationRequest } from '../types';

export default function ConsultationRequestView() {
  const [formData, setFormData] = useState<Omit<ConsultationRequest, 'createdAt'>>({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    businessStage: 'growth',
    businessSize: 'small-team',
    primaryChallenge: '',
    servicesNeeded: [],
    description: ''
  });

  const [formStep, setFormStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [trackingCode, setTrackingCode] = useState('');
  const [showTracker, setShowTracker] = useState(false);
  const [trackerResult, setTrackerResult] = useState<any>(null);
  const [trackerError, setTrackerError] = useState<string | null>(null);
  const [trackerLoading, setTrackerLoading] = useState(false);

  const handleTrackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingCode.trim()) return;
    setTrackerLoading(true);
    setTrackerError(null);
    setTrackerResult(null);

    try {
      const response = await fetch(`/api/consultation/${trackingCode.trim().toUpperCase()}`);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'پرونده‌ای با این مشخصات روی دیتابیس سرور یافت نگردید.');
      }
      
      setTrackerResult(data);
    } catch (err: any) {
      setTrackerError(err.message || 'خطا در بازیابی پرونده از سرور.');
    } finally {
      setTrackerLoading(false);
    }
  };

  const availableServices = [
    { id: 'branding', label: 'طراحی استراتژی و هویت برند' },
    { id: 'business_plan', label: 'نگارش طرح جامع کسب‌وکار (بیزنس پلن)' },
    { id: 'swot', label: 'عارضه‌یابی و آنالیز مقتدر SWOT' },
    { id: 'org_chart', label: 'ساختاردهی و مهندسی چارت سازمانی' },
    { id: 'crm', label: 'اصلاح و پیاده‌سازی اتوماسیون فروش CRM' },
    { id: 'erp', label: 'یکپارچه‌سازی کانال‌های مالی و تامین با ERP' },
    { id: 'hr', label: 'توسعه پرسنلی و سیستم‌های کارانه (KPI)' },
    { id: 'sales_growth', label: 'آموزش پرسنل و افزایش نرخ معاملات فروش' },
    { id: 'digital_marketing', label: 'استراتژی جامع بازاریابی آنلاین و سئو' }
  ];

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const toggleService = (serviceId: string) => {
    setFormData(prev => {
      const current = prev.servicesNeeded;
      if (current.includes(serviceId)) {
        return { ...prev, servicesNeeded: current.filter(id => id !== serviceId) };
      } else {
        return { ...prev, servicesNeeded: [...current, serviceId] };
      }
    });
  };

  const nextStep = () => {
    const tempErrors: Record<string, string> = {};
    
    if (formStep === 1) {
      if (!formData.fullName.trim()) tempErrors.fullName = 'وارد کردن نام کامل الزامی است.';
      if (!formData.companyName.trim()) tempErrors.companyName = 'وارد کردن نام شرکت یا ایده الزامی است.';
      if (!formData.phone.trim()) {
        tempErrors.phone = 'وارد کردن شماره تماس الزامی است.';
      } else if (!/^09\d{9}$|^021\d{8}$/.test(formData.phone.trim())) {
        tempErrors.phone = 'یک شماره معتبر وارد کنید (مثال: 09122478376 یا 02122316766).';
      }
      
      if (Object.keys(tempErrors).length > 0) {
        setErrors(tempErrors);
        return;
      }
    }

    if (formStep === 2) {
      if (formData.servicesNeeded.length === 0) {
        tempErrors.services = 'لطفاً دست‌کم یک خدمت مورد نیاز خود را علامت بزنید.';
        setErrors(tempErrors);
        return;
      }
    }

    setErrors({});
    setFormStep(prev => prev + 1);
  };

  const prevStep = () => {
    setErrors({});
    setFormStep(prev => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'خطایی در ثبت پرونده عارضه‌یابی به وجود آمد.');
      }

      setSubmitResult(data.bookingCode);
    } catch (err: any) {
      setErrors(prev => ({ ...prev, apiError: err.message || 'بروز خطا در ثبت اطلاعات پرونده در سرور. مجدداً تلاش نمایید.' }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#fcfdfd] text-right min-h-screen py-10 md:py-16" id="consultation-wizard-container">
      <div className="max-w-3xl mx-auto px-4">
        
        {/* Progress Bar Container */}
        {!submitResult && (
          <div className="mb-10 text-center space-y-4">
            <span className="text-xs bg-[#0ea5e9]/10 text-[#0ea5e9] font-bold px-3 py-1.5 rounded-full inline-block">
              پرسشنامه هوشمند عارضه‌یابی
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
              درخواست مشاوره و مربی‌گری تخصصی
            </h1>
            <p className="text-xs sm:text-sm text-gray-500">
              پاسخ به سوالات ذیل، شرایط کسب‌وکار شما را برای اتاق ارزیابی شهریار ویژن شفاف‌تر می‌کند تا پیش از اولین تماس، راهکارهای اولیه‌ای بیابیم.
            </p>

            {/* REAL-TIME BACKEND FILE TRACKING WIDGET */}
            <div className="pt-2 max-w-lg mx-auto">
              <button
                type="button"
                onClick={() => {
                  setShowTracker(!showTracker);
                  setTrackerError(null);
                  setTrackerResult(null);
                  setTrackingCode('');
                }}
                className="text-xs text-sky-600 hover:text-sky-700 bg-sky-50 hover:bg-sky-100 font-bold px-4 py-2.5 rounded-full inline-flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
              >
                <span>🔍 پیگیری وضعیت و استعلام پرونده‌های ثبت‌شده قبلی</span>
              </button>

              {showTracker && (
                <div className="mt-4 bg-slate-900 border border-slate-800 text-slate-100 p-5 rounded-2xl text-right space-y-4 shadow-xl animate-fade-in">
                  <div className="space-y-1">
                    <h4 className="text-sm font-black text-white">سامانه هوشمند رهگیری فدرال پرونده</h4>
                    <p className="text-[10px] text-gray-400">کد رهگیری انحصاری درخواستی خود را (مثال: SV-384729) وارد نمایید:</p>
                  </div>

                  <form onSubmit={handleTrackSubmit} className="flex gap-2">
                    <input
                      type="text"
                      required
                      placeholder="SV-XXXXXX"
                      value={trackingCode}
                      onChange={(e) => setTrackingCode(e.target.value)}
                      className="flex-grow bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-center font-mono font-bold text-sky-400 text-sm focus:outline-none focus:ring-1 focus:ring-sky-500 uppercase"
                    />
                    <button
                      type="submit"
                      disabled={trackerLoading}
                      className="bg-sky-500 hover:bg-sky-600 disabled:bg-gray-700 text-white font-bold px-4 py-2 rounded-lg text-xs transition-colors flex items-center gap-1.5 cursor-pointer flex-shrink-0"
                    >
                      <span>{trackerLoading ? 'دریافت...' : 'استعلام'}</span>
                    </button>
                  </form>

                  {trackerError && (
                    <p className="text-[11px] text-rose-400 font-bold bg-rose-950/40 p-2.5 border border-rose-900/30 rounded-lg">
                      ⚠️ {trackerError}
                    </p>
                  )}

                  {trackerResult && (
                    <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 text-xs space-y-3 leading-relaxed text-slate-300">
                      <div className="border-b border-slate-800 pb-2 flex justify-between items-center text-white">
                        <span className="font-bold">مشخصات پرونده یافت‌شده:</span>
                        <span className="font-mono text-[10px] bg-sky-950/60 px-2 py-0.5 border border-sky-800/40 rounded text-sky-400 font-bold">{trackerResult.bookingCode}</span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                        <div>
                          <span className="text-gray-400 text-[10px] block">درخواست‌دهنده:</span>
                          <span className="font-bold text-white text-xs">{trackerResult.fullName}</span>
                        </div>
                        <div>
                          <span className="text-gray-400 text-[10px] block">نام برند / شرکت:</span>
                          <span className="font-bold text-white text-xs">{trackerResult.companyName}</span>
                        </div>
                        <div className="col-span-2 pt-1">
                          <span className="text-gray-400 text-[10px] block">وضعیت فعلی پرونده:</span>
                          <span className="inline-block bg-orange-500/10 text-orange-400 font-bold text-[11px] px-2.5 py-1 border border-orange-500/20 rounded-full mt-0.5">
                            ● {trackerResult.status}
                          </span>
                        </div>
                        <div className="col-span-2 pt-1 font-mono text-[10px] text-gray-500">
                          ثبت‌شده دیتابیس در: {new Date(trackerResult.createdAt).toLocaleString('fa-IR')}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Visual steps progress circle pipeline */}
            <div className="flex items-center justify-center gap-2 pt-4">
              {[1, 2, 3].map((num) => (
                <React.Fragment key={num}>
                  <div 
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-mono transition-all border ${
                      formStep === num 
                        ? 'bg-[#0ea5e9] border-[#0ea5e9] text-white ring-4 ring-sky-100' 
                        : formStep > num 
                          ? 'bg-orange-500 border-orange-500 text-white' 
                          : 'bg-white border-gray-200 text-gray-400'
                    }`}
                  >
                    {formStep > num ? <Check className="w-4 h-4" /> : num}
                  </div>
                  {num < 3 && (
                    <div 
                      className={`h-0.5 w-12 sm:w-20 transition-all rounded ${
                        formStep > num ? 'bg-orange-500' : 'bg-gray-200'
                      }`} 
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

        {submitResult ? (
          
          /* Success Screen on Submission */
          <div className="bg-white border border-sky-100 rounded-2xl p-8 sm:p-12 text-center space-y-6 shadow-md shadow-sky-100/50">
            <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-500 mx-auto">
              <ClipboardCheck className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                درخواست شما با موفقیت ثبت گردید
              </h2>
              <p className="text-xs sm:text-sm text-gray-500">
                مکاتبه شما هم‌اکنون به عنوان پرونده عارضه‌یابی در کلاس رشدِ شرکت شهریار ویژن ارجاع شده است.
              </p>
            </div>

            {/* Unique code box representation */}
            <div className="bg-sky-50 border border-sky-100 p-5 rounded-xl max-w-sm mx-auto space-y-2">
              <span className="text-[10px] text-gray-400 font-bold block uppercase tracking-widest">کد پیگیری انحصاری پرونده:</span>
              <span className="text-xl sm:text-2xl font-mono font-black text-[#0ea5e9] tracking-widest block">{submitResult}</span>
            </div>

            <div className="text-right text-xs text-gray-600 bg-gray-50 border p-5 rounded-lg space-y-2 leading-relaxed max-w-xl mx-auto">
              <div className="flex gap-2 items-center text-slate-900 font-bold border-b pb-2 mb-2">
                <FileCheck className="w-4 h-4 text-orange-500" />
                <span>گام‌های بعدی پس از تخصیص کد پرونده:</span>
              </div>
              <p>۱. **تماس اولیه مشاور:** ظرف کمتر از ۲ ساعت، دبیرخانه ارزیابی شاهکار جهت تدقیق چند فرض��ه اولیه با شما تماس تلفنی برقرار خواهد ساخت.</p>
              <p>۲. **هماهنگی زمان زوم/حضوری:** یک تایم ۳۰ دقیقه‌ای رایگانِ زوم یا حضور در دفتر چهارراه پاسداران اختصاص خواهد یافت.</p>
              <p>۳. **ارائه پیش‌نویس راهکار:** در انتهای جلسه، فلوچارت مقدماتی رفع گره‌های سازمانی شما مکتوب می‌گردد.</p>
            </div>

            <button 
              onClick={() => {
                setSubmitResult(null);
                setFormStep(1);
                setFormData({
                  fullName: '',
                  companyName: '',
                  phone: '',
                  email: '',
                  businessStage: 'growth',
                  businessSize: 'small-team',
                  primaryChallenge: '',
                  servicesNeeded: [],
                  description: ''
                });
              }}
              className="bg-[#0ea5e9] hover:bg-[#0c8cc7] text-white text-xs px-6 py-3 rounded-lg font-bold transition-colors cursor-pointer"
            >
              ثبت پرونده عارضه‌یابی جدید
            </button>
          </div>

        ) : (

          /* Active Intakes Form Steps */
          <form onSubmit={handleSubmit} className="bg-white border border-sky-100 rounded-2xl p-6 sm:p-10 shadow-sm space-y-6">
            
            {/* STEP 1: Basic Bio and Company Information */}
            {formStep === 1 && (
              <div className="space-y-4">
                <div className="border-r-4 border-orange-500 pr-3">
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900">گام اول: مشخصات هویتی و ثبتی</h2>
                  <p className="text-[11px] text-gray-400">اطلاعات پایه تماس بابت هماهنگی سریع</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-800">نام و نام خانوادگی:</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleTextChange}
                        placeholder="مانند: علیرضا محمدی"
                        className="w-full pr-10 pl-3 py-2.5 border border-gray-200 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]"
                      />
                      <User className="w-4 h-4 text-gray-400 absolute right-3.5 top-3.5" />
                    </div>
                    {errors.fullName && <p className="text-[10px] text-rose-500 mt-1">{errors.fullName}</p>}
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-800">نام شرکت، برند یا عنوان ایده:</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleTextChange}
                        placeholder="مثال: قطعات خودروی البرز"
                        className="w-full pr-10 pl-3 py-2.5 border border-gray-200 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]"
                      />
                      <Building2 className="w-4 h-4 text-gray-400 absolute right-3.5 top-3.5" />
                    </div>
                    {errors.companyName && <p className="text-[10px] text-rose-500 mt-1">{errors.companyName}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-800">شماره موبایل مستقیم جهت پیگیری:</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleTextChange}
                        placeholder="مثال: 09122478376"
                        className="w-full pr-10 pl-3 py-2.5 border border-gray-200 rounded-lg text-xs sm:text-sm font-mono text-left focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]"
                      />
                      <PhoneCall className="w-4 h-4 text-gray-400 absolute right-3.5 top-3.5" />
                    </div>
                    {errors.phone && <p className="text-[10px] text-rose-500 mt-1">{errors.phone}</p>}
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-800">آدرس ایمیل (اختیاری):</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleTextChange}
                      placeholder="ceo@ltd.com"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-xs sm:text-sm font-mono text-left focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-800 block">مرحله کسب‌وکار فعلی:</label>
                    <select
                      name="businessStage"
                      value={formData.businessStage}
                      onChange={handleTextChange}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] cursor-pointer"
                    >
                      <option value="launch">در مرحله راه‌اندازی و تامین فرضیات اولیه ایده</option>
                      <option value="growth">در فاز توسعه، افزایش بهره‌وری، سودآوری و کاهش هزینه</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-800 block">اندازه تقریبی پرسنل سازمان:</label>
                    <select
                      name="businessSize"
                      value={formData.businessSize}
                      onChange={handleTextChange}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] cursor-pointer"
                    >
                      <option value="just-me">تک نفره / استارتاپ دونفره</option>
                      <option value="small-team">بین ۳ الی ۱۵ نفر (کسب‌وکار خرد)</option>
                      <option value="medium-size">بین ۱۶ الی ۱۰۰ نفر (شرکت‌های متوسط)</option>
                      <option value="enterprise">بیش از ۱۰۰ نفر پرسنل (هلدینگ / تولیدی بزرگ)</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: Required consulting fields selections */}
            {formStep === 2 && (
              <div className="space-y-4">
                <div className="border-r-4 border-orange-500 pr-3">
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900">گام دوم: حوزه‌های مورد نیاز مشاوره</h2>
                  <p className="text-[11px] text-gray-400">یک یا چند گزینه‌ای که به ��پارتمان ما اجازه آماده‌سازی تحلیل می‌دهد را علامت بزنید:</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                  {availableServices.map((service) => {
                    const isChecked = formData.servicesNeeded.includes(service.id);
                    return (
                      <button
                        type="button"
                        key={service.id}
                        onClick={() => toggleService(service.id)}
                        className={`p-3.5 border rounded-xl text-right text-xs sm:text-sm transition-all focus:outline-none flex items-center gap-3 cursor-pointer ${
                          isChecked 
                            ? 'bg-sky-50 border-[#0ea5e9] text-sky-950 font-bold' 
                            : 'bg-white border-gray-100 text-gray-700 hover:bg-gray-50/50'
                        }`}
                      >
                        {isChecked ? (
                          <div className="w-5 h-5 rounded bg-[#0ea5e9] text-white flex items-center justify-center flex-shrink-0">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded border border-gray-300 flex-shrink-0" />
                        )}
                        <span>{service.label}</span>
                      </button>
                    );
                  })}
                </div>
                {errors.services && <p className="text-xs text-rose-500 text-center font-bold">{errors.services}</p>}
              </div>
            )}

            {/* STEP 3: Pain Points details and Submit */}
            {formStep === 3 && (
              <div className="space-y-4">
                <div className="border-r-4 border-orange-500 pr-3">
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900">گام سوم: شرح چالش و دلمشغولی‌ها</h2>
                  <p className="text-[11px] text-gray-400">این دیتابیس کاملاً محرمانه مانده و در صورت لزوم عدم افشای دوطرفه (NDA) امضا خواهد گردید.</p>
                </div>

                <div className="space-y-4 pt-3">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-800">بزرگترین چالش یا گلوگاه کار تان که هم اکنون مانع رشد شده چیست؟</label>
                    <input 
                      type="text" 
                      name="primaryChallenge"
                      value={formData.primaryChallenge}
                      onChange={handleTextChange}
                      placeholder="مثال: ریزش نیروهای فنی شایسته، عدم کارایی پرسنل فروش یا ابهام در انبار"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-800">توضیحات تکمیلی یا انتظارتان از جلسه‌ی مشاوره:</label>
                    <textarea 
                      name="description"
                      rows={6}
                      value={formData.description}
                      onChange={handleTextChange}
                      placeholder="اگر قصد دارید نکته‌ی خاصی درباره تعارضات خانوادگی در شرکت فامیلی، تاریخچه‌ی تاسیس و چگونگی جریان نقدینگی تان ذکر گردانید، در این فضا مرقوم بفرمایید..."
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] resize-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {errors.apiError && (
              <div className="bg-rose-50 border border-rose-250 text-rose-900 rounded-xl p-4 text-xs font-bold text-right leading-relaxed animate-fade-in mb-4">
                ⚠️ {errors.apiError}
              </div>
            )}

            {/* Dynamic Buttons Logic */}
            <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
              
              {formStep > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="border border-gray-200 text-gray-600 hover:bg-gray-50 text-xs sm:text-sm px-5 py-2.5 rounded-lg flex items-center gap-1 cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                  <span>مرحله قبل</span>
                </button>
              ) : (
                <div />
              )}

              {formStep < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-[#0ea5e9] hover:bg-[#0c8cc7] text-white text-xs sm:text-sm px-6 py-2.5 rounded-lg font-bold flex items-center gap-1 cursor-pointer"
                >
                  <span>مرحله بعد</span>
                  <ChevronLeft className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-orange-500 hover:bg-orange-600 disabled:bg-gray-300 text-white text-xs sm:text-sm px-8 py-3.5 rounded-lg font-bold flex items-center gap-2 cursor-pointer shadow-lg shadow-orange-500/10"
                >
                  <span>{isSubmitting ? 'در حال پردازش نهایی...' : 'ثبت پرونده و تبیین فوری کد'}</span>
                  <Send className="w-4 h-4" />
                </button>
              )}

            </div>

          </form>
        )}

      </div>
    </div>
  );
}
