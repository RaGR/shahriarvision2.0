/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Clock, Send, MessageSquare, 
  Map, ShieldAlert, CheckCircle, Info 
} from 'lucide-react';
import { ContactMessage } from '../types';

export default function ContactView() {
  const [formData, setFormData] = useState<Omit<ContactMessage, 'createdAt'>>({
    name: '',
    phone: '',
    email: '',
    subject: 'branding',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = 'نام و نام خانوادگی الزامی است.';
    if (!formData.phone.trim()) {
      tempErrors.phone = 'شماره تماس الزامی است.';
    } else if (!/^09\d{9}$|^021\d{8}$/.test(formData.phone.trim())) {
      tempErrors.phone = 'لطفاً یک شماره معتبر وارد کنید (مانند 09122478376 یا 02122316766).';
    }
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      tempErrors.email = 'فرمت ایمیل وارد شده معتبر نیست.';
    }
    if (!formData.message.trim()) tempErrors.message = 'لطفاً متن پیام خود را بنویسید.';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'خطایی در ارسال پیام به سرور رخ داده است.');
      }

      setSubmitSuccess(data.message || 'پیام شما با موفقیت به سیستم ارتباط با مشتریان شهریار ویژن ارسال شد. مشاوران ما ظرف ۲ ساعت آینده جهت هماهنگی جلسه حضوری یا تلفنی با شما تماس خواهند گرفت.');
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: 'branding',
        message: ''
      });
    } catch (err: any) {
      setErrors(prev => ({ ...prev, form: err.message || 'بروز خطا در اتصال به سرور و ثبت درخواست.' }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#fcfdfd] text-right" id="contact-us-page">
      
      {/* 1. Header Hero section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-transparent pt-12 pb-16 border-b border-sky-100">
        <div className="absolute top-0 right-10 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs bg-[#0ea5e9]/10 text-[#0ea5e9] font-bold px-3 py-1.5 rounded-full">ارتباط بیواسطه با مدیریت</span>
          <h1 className="text-3xl md:text-5xl font-black text-slate-950">دیدار و تماس با ما</h1>
          <p className="text-sm sm:text-base text-gray-500 max-w-xl mx-auto">
            جهت رزرو جلسه عارضه‌یابی به صورت حضوری در دفتر تهران یا هماهنگی تماس آنلاین، پذیرای شما هستیم.
          </p>
        </div>
      </section>

      {/* 2. Main content block - 2 columns */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Column A: Contact Info Card Layout */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="space-y-4">
                <h2 className="text-2xl font-extrabold text-slate-950 border-r-4 border-orange-500 pr-3">
                  دفتر مرکزی شهریار ویژن
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  ما در دفتر مرکزی پذیرای حضور گرم مدیران، بنیان‌گذاران و صاحبان صنایع محترم هستیم. لطفا پیش از حضور، هماهنگی‌های لازم را از طریق یکی از راه‌های ارتباطی زیر به عمل آورید.
                </p>
              </div>

              {/* Physical details list */}
              <div className="space-y-6">
                
                {/* MapPin */}
                <div className="bg-sky-50/50 border border-sky-100 p-5 rounded-xl flex gap-4 text-right">
                  <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-[#0ea5e9] flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">نشانی دفتر تهران:</h4>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                      تهران، ضلع شمال‌شرقی چهارراه پاسداران، ساختمان پزشکان پاسداران، پلاک ۱، طبقه ۳، واحد ۱۲
                    </p>
                  </div>
                </div>

                {/* Phone lines container */}
                <div className="bg-sky-50/50 border border-sky-100 p-5 rounded-xl flex gap-4 text-right">
                  <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-[#0ea5e9] flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-sm text-slate-900">شماره‌های تماس دبیرخانه:</h4>
                    <div className="flex flex-col text-left items-end">
                      <a href="tel:02122316766" className="text-slate-800 hover:text-orange-500 font-mono text-sm leading-none py-1 block w-full text-right">۰۲۱-۲۲۳۱۶۷۶۶</a>
                      <a href="tel:09122478376" className="text-slate-800 hover:text-orange-500 font-mono text-sm leading-none py-1 block w-full text-right">۰۹۱۲-۲۴۷۸۳۷۶</a>
                    </div>
                  </div>
                </div>

                {/* Emails list */}
                <div className="bg-sky-50/50 border border-sky-100 p-5 rounded-xl flex gap-4 text-right">
                  <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-[#0ea5e9] flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">پست الکترونیکی رسمی:</h4>
                    <div className="flex flex-col font-mono text-xs sm:text-sm mt-1 text-left items-start">
                      <a href="mailto:info@shahriarvision.com" className="text-slate-700 hover:text-orange-500">info@shahriarvision.com</a>
                      <a href="mailto:ceo@shahriarvision.com" className="text-slate-700 hover:text-orange-500 mt-1">ceo@shahriarvision.com</a>
                    </div>
                  </div>
                </div>

                {/* Operating hours */}
                <div className="bg-sky-50/50 border border-sky-100 p-5 rounded-xl flex gap-4 text-right">
                  <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-[#0ea5e9] flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">ساعات حضور و پاسخگویی:</h4>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                      شنبه تا چهارشنبه: ساعت ۹:۰۰ الی ۱۸:۰۰
                      <br />
                      پنجشنبه: ساعت ۹:۰۰ الی ۱۴:۰۰ (پذیرش حضوری فقط با وقت قبلی)
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* Column B: Professional Submission Form */}
            <div className="lg:col-span-7 bg-[#f8fafc] border border-sky-100 rounded-2xl p-6 sm:p-10 space-y-6 shadow-sm">
              
              <div className="space-y-2">
                <span className="text-xs font-bold text-orange-500">فرم تماس مستقیم</span>
                <h3 className="text-xl font-bold text-slate-950">ارسال نامه مشاوره و عارضه‌یابی</h3>
                <p className="text-xs text-gray-500">
                  اطلاعات شرکت تان را با خیال آسوده بنویسید؛ ما طبق پروتکل رازداری تجاری با شما تعامل می‌کنیم.
                </p>
              </div>

              {submitSuccess ? (
                <div className="bg-emerald-50 border border-emerald-250 rounded-xl p-6 text-center space-y-4">
                  <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto" />
                  <h4 className="text-base sm:text-lg font-bold text-emerald-900">ارسال موفق پیام</h4>
                  <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
                    {submitSuccess}
                  </p>
                  <button 
                    onClick={() => setSubmitSuccess(null)}
                    className="bg-emerald-600 text-white hover:bg-emerald-700 px-5 py-2 rounded text-xs transition-colors cursor-pointer"
                  >
                    ارسال پیام دگر
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-right">
                  
                  {/* Row 1: Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-800 block">نام و نام خانوادگی:</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="جناب آقای / سرکار خانم..."
                        className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]"
                      />
                      {errors.name && <p className="text-[10px] text-rose-600 mt-1">{errors.name}</p>}
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-800 block">تلفن تماس:</label>
                      <input 
                        type="text" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="مانند 09122478376 یا 02122316766"
                        className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-left font-mono text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]"
                      />
                      {errors.phone && <p className="text-[10px] text-rose-600 mt-1">{errors.phone}</p>}
                    </div>

                  </div>

                  {/* Row 2: Email and Subject */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-800 block">ایمیل (اختیاری):</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="example@domain.com"
                        className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-left font-mono text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]"
                      />
                      {errors.email && <p className="text-[10px] text-rose-600 mt-1">{errors.email}</p>}
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-800 block">موضوع مشاوره:</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] cursor-pointer"
                      >
                        <option value="branding">طراحی فرآیند برندینگ</option>
                        <option value="business_plan">تدوین طرح کسب‌وکار (بیزنس پلن)</option>
                        <option value="swot">تحلیل استراتژیک SWOT</option>
                        <option value="org_chart">مهندسی چارت سازمانی</option>
                        <option value="crm">استقرار اتوماسیون‌های فروش CRM</option>
                        <option value="erp">استقرار سیستم‌های برنامه‌ریزی ERP</option>
                        <option value="others">سایر عارضه‌ها و مشاوره مدیریت</option>
                      </select>
                    </div>

                  </div>

                  {/* Message body */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-800 block">شرح اجمالی مساله یا عارضه شرکت:</label>
                    <textarea 
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="لطفا بنویسید که کسب‌وکارتان در چه حوزه‌ای فعال است و با چه چالش‌های ساختاری، پرسنلی یا فروش روبرو هستید..."
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] resize-none"
                    />
                    {errors.message && <p className="text-[10px] text-rose-600 mt-1">{errors.message}</p>}
                  </div>

                  {errors.form && (
                    <div className="bg-rose-50 border border-rose-200 text-rose-900 rounded-lg p-3 text-xs leading-relaxed text-right">
                      {errors.form}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 text-white font-bold py-3.5 rounded-lg text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-orange-500/10"
                  >
                    <span>{isSubmitting ? 'در حال ارسال پیام...' : 'ارسال درخواست هماهنگی جلسه'}</span>
                    <Send className="w-4 h-4" />
                  </button>

                </form>
              )}

            </div>

          </div>
        </div>
      </section>

      {/* 3. Map Placeholder with graphical pins */}
      <section className="py-12 bg-[#2d343f]/10 border-t border-gray-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-slate-900 flex items-center justify-center gap-2">
              <Map className="w-5 h-5 text-[#0ea5e9]" />
              <span>موقعیت جغرافیایی ما روی نقشه تهران</span>
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              مجاورت به چهارراه پاسداران و دسترسی پارکینگ آسان برای مدیران و سروران عزیز.
            </p>
          </div>

          {/* Graphical Map representation as in top agencies */}
          <div className="bg-slate-900 rounded-2xl p-8 text-center text-white h-72 flex flex-col justify-center items-center relative overflow-hidden border border-slate-800 shadow">
            
            {/* Visual background Grid structure indicating streets and block mappings */}
            <div className="absolute inset-0 bg-[#0ea5e9]/5 bg-[linear-gradient(to_right,#0ea5e920_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e920_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="absolute top-1/2 left-1/2 w-48 h-1 bg-[#0ea5e9]/30 rounded rotate-12 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute top-1/2 left-1/3 w-1 h-36 bg-[#0ea5e9]/20 rounded -translate-y-1/2" />
            <div className="absolute top-1/3 left-1/2 w-1 h-44 bg-[#0ea5e9]/20 rounded -translate-y-1/2" />

            {/* Central glowing ping indicating office location */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-12 z-10 flex flex-col items-center gap-2">
              <span className="animate-ping block w-4 h-4 rounded-full bg-orange-400 absolute" />
              <MapPin className="w-10 h-10 text-orange-500 relative filter drop-shadow font-extrabold" />
              <div className="bg-[#1e2329] border border-[#2d343f] px-3.5 py-1.5 rounded-lg text-xs font-bold text-white shadow-xl whitespace-nowrap">
                واحد اداری شهریار ویژن 📍
              </div>
            </div>

            <div className="relative z-10 space-y-1 mt-20">
              <span className="text-[10px] text-gray-400 uppercase font-mono tracking-widest block">Pasداران Avenue, Tehran, Iran</span>
              <p className="text-xs text-gray-300">برای رفاه حال شما، هماهنگی حضور و اخذ ظرفیت پارکینگ الزامی است.</p>
            </div>
            
          </div>
        </div>
      </section>

    </div>
  );
}
