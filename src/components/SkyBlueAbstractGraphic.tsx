/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, Award, Network, ChevronLeft, 
  BarChart3, Users, TrendingUp, Layers, CheckCircle2, UserCheck, Globe 
} from 'lucide-react';

interface SkyBlueAbstractGraphicProps {
  preset: 'branding' | 'org-chart' | 'crm' | 'erp' | 'business-plan' | 'swot' | 'human-resources' | 'sales-growth' | 'digital-marketing' | 'general';
  className?: string;
  interactive?: boolean;
}

export default function SkyBlueAbstractGraphic({ 
  preset, 
  className = '', 
  interactive = true 
}: SkyBlueAbstractGraphicProps) {

  // Floating variants for secondary graphic components
  const floatAnimation = {
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const slowPulse = {
    animate: {
      opacity: [0.7, 1, 0.7],
      scale: [0.98, 1.02, 0.98],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const rotateAnimation = {
    animate: {
      rotate: [0, 360],
      transition: {
        duration: 25,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  // Render specific content depending on graphic presets
  const renderGraphicContent = () => {
    switch (preset) {
      case 'branding':
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e905_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e905_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="absolute w-44 h-44 bg-sky-200/20 rounded-full blur-2xl" />
            
            {/* Modern Animated Diamond Prism */}
            <motion.div 
              variants={floatAnimation} 
              animate="animate"
              className="relative z-10 w-48 h-48 flex items-center justify-center p-4"
            >
              <svg viewBox="0 0 200 200" className="w-full h-full text-[#0ea5e9]">
                <defs>
                  <linearGradient id="brandGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#0369a1" stopOpacity="0.05" />
                  </linearGradient>
                  <linearGradient id="brandGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#0284c7" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#a7f3d0" stopOpacity="0.3" />
                  </linearGradient>
                </defs>

                {/* Concentric Orbit Circles */}
                <circle cx="100" cy="100" r="80" fill="none" stroke="#e0f2fe" strokeWidth="1" strokeDasharray="4,4" />
                <circle cx="100" cy="100" r="60" fill="none" stroke="#bae6fd" strokeWidth="0.8" />

                {/* Polyline Prism structure */}
                <polygon points="100,30 160,80 135,150 65,150 40,80" fill="url(#brandGrad1)" stroke="#0ea5e9" strokeWidth="1.5" />
                <polygon points="100,50 145,90 125,140 75,140 55,90" fill="none" stroke="#7dd3fc" strokeWidth="1" strokeDasharray="3,1" />
                
                {/* Connecting Rays */}
                <line x1="100" y1="30" x2="100" y2="100" stroke="#0ea5e9" strokeWidth="1.5" />
                <line x1="160" y1="80" x2="100" y2="100" stroke="#0ea5e9" strokeWidth="1" />
                <line x1="135" y1="150" x2="100" y2="100" stroke="#0ea5e9" strokeWidth="1" />
                <line x1="65" y1="150" x2="100" y2="100" stroke="#0ea5e9" strokeWidth="1" />
                <line x1="40" y1="80" x2="100" y2="100" stroke="#0ea5e9" strokeWidth="1" />

                {/* Glowing Nodes */}
                <circle cx="100" cy="30" r="5" fill="#0ea5e9" className="animate-pulse" />
                <circle cx="160" cy="80" r="4" fill="#38bdf8" />
                <circle cx="135" cy="150" r="4" fill="#0284c7" />
                <circle cx="65" cy="150" r="4" fill="#0ea5e9" />
                <circle cx="40" cy="80" r="4" fill="#38bdf8" />
                <circle cx="100" cy="100" r="6" fill="#f97316" />
              </svg>
            </motion.div>

            {/* Overlapping Info pill badge */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur border border-sky-100 rounded-lg p-2 shadow-md text-right text-[10px]">
              <span className="font-bold text-[#0ea5e9] block">معماری هویت برند (Core Slogan)</span>
              <span className="text-gray-500">تمایز بصری عمیق در نگاه اول مخاطب</span>
            </div>
            
            <div className="absolute bottom-4 right-4 bg-sky-950 text-white rounded-lg p-2.5 shadow-md text-right text-[10px] max-w-[170px] border border-sky-400/30">
              <div className="flex items-center gap-1 text-orange-400 font-bold mb-1">
                <Sparkles className="w-3 h-3" />
                <span>برند مستحکم</span>
              </div>
              <p className="text-gray-300 leading-snug">ثبت اصولی در تمام مراجع مالکیت معنوی</p>
            </div>
          </div>
        );

      case 'org-chart':
        return (
          <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-right">
            <div className="absolute inset-0 bg-[#0ea5e9]/[0.01] bg-[radial-gradient(#0ea5e910_1px,transparent_1px)] bg-[size:16px_16px]" />
            
            {/* Hierarchy Tree Visualizer */}
            <motion.div 
              variants={slowPulse} 
              animate="animate" 
              className="w-full space-y-4"
            >
              {/* Leader Node */}
              <div className="flex justify-center">
                <div className="bg-sky-500 text-white border border-sky-400 rounded-lg py-2 px-4 shadow text-xs font-bold flex items-center gap-1.5 whitespace-nowrap">
                  <Network className="w-3.5 h-3.5 text-white" />
                  <span>هدایت عالی و استراتژی (CEO)</span>
                </div>
              </div>

              {/* Connecting Tree Lines SVG */}
              <svg viewBox="0 0 300 40" className="w-full h-8 text-[#0ea5e9]">
                <line x1="150" y1="0" x2="150" y2="20" stroke="currentColor" strokeWidth="1.5" />
                <line x1="50" y1="20" x2="250" y2="20" stroke="currentColor" strokeWidth="1.5" />
                <line x1="50" y1="20" x2="50" y2="40" stroke="currentColor" strokeWidth="1.5" />
                <line x1="150" y1="20" x2="150" y2="40" stroke="currentColor" strokeWidth="1.5" />
                <line x1="250" y1="20" x2="250" y2="40" stroke="currentColor" strokeWidth="1.5" />
              </svg>

              {/* Department level */}
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-white border-t-2 border-orange-400 rounded p-2 shadow-sm text-center text-[10px]">
                  <span className="font-bold text-slate-900 block truncate">فروش و CRM</span>
                  <span className="text-gray-400 block mt-0.5 font-mono">KPI: 120%</span>
                </div>
                <div className="bg-white border-t-2 border-[#0ea5e9] rounded p-2 shadow-sm text-center text-[10px]">
                  <span className="font-bold text-slate-900 block truncate">عملیات و ERP</span>
                  <span className="text-gray-400 block mt-0.5 font-mono">Waste: -40%</span>
                </div>
                <div className="bg-white border-t-2 border-slate-700 rounded p-2 shadow-sm text-center text-[10px]">
                  <span className="font-bold text-slate-900 block truncate">منابع انسانی</span>
                  <span className="text-gray-400 block mt-0.5 font-mono">RACI Model</span>
                </div>
              </div>

              {/* Connected Dots */}
              <div className="bg-slate-900 text-white rounded-lg p-3 text-xs leading-normal border border-sky-400/20">
                <span className="text-[#7dd3fc] font-bold block mb-1">سیستم ساختاردهی مقتدر</span>
                پرسنل با شرح وظایف کتبی مدون، فرآیند را تکرار می‌کنند، بی‌آنکه نیاز به نظارت مستقیم و فرساینده مدیرعامل باشد.
              </div>
            </motion.div>
          </div>
        );

      case 'crm':
        return (
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-[#0ea5e9]/[0.02]" />
            
            {/* CRM Funnel Structure */}
            <div className="relative w-full max-w-[260px] space-y-3">
              <span className="text-[10px] text-gray-400 font-mono block text-center">CRM LEADS & CUSTOMER FUNNEL</span>
              
              {/* Funnel Step 1 */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-sky-500/10 border border-[#0ea5e9]/30 rounded-lg p-2.5 text-right flex items-center justify-between"
              >
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 bg-[#0ea5e9] rounded-full animate-pulse" />
                  <span className="text-[11px] font-bold text-slate-900">۱. لیدهای ورودی (سرنخ‌ها)</span>
                </div>
                <span className="text-[10px] font-mono font-bold text-sky-600 bg-sky-100 px-2 py-0.5 rounded">۱۰۰٪ ورود</span>
              </motion.div>
              
              <div className="text-center text-sky-300 leading-none">↓</div>

              {/* Funnel Step 2 */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-sky-600/15 border border-[#0ea5e9]/50 rounded-lg p-2.5 text-right flex items-center justify-between"
              >
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 bg-sky-600 rounded-full" />
                  <span className="text-[11px] font-bold text-slate-900 font-medium">۲. اتاق مذاکره و پروپوزال</span>
                </div>
                <span className="text-[10px] font-mono font-bold text-blue-800 bg-blue-100 px-2 py-0.5 rounded">۴۵٪ تبدیل</span>
              </motion.div>

              <div className="text-center text-orange-400 leading-none">↓</div>

              {/* Funnel Step 3 */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-orange-500/10 border border-orange-400/30 rounded-lg p-2.5 text-right flex items-center justify-between"
              >
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 bg-orange-500 rounded-full" />
                  <span className="text-[11px] font-bold text-[#ea580c]">۳. قرارداد نهایی (وفاداری)</span>
                </div>
                <span className="text-[10px] font-mono font-bold text-orange-700 bg-orange-100 px-2 py-0.5 rounded">۳ برابر سود</span>
              </motion.div>

              <div className="p-2 bg-white border border-sky-100 rounded-md text-[10px] text-gray-500 leading-relaxed text-right">
                <strong>تکنولوژی مستقر:</strong> پپیگیری خودکار پیامکی، همگام‌سازی تلفنی، مانیتورینگ عملکرد بازاریابان.
              </div>
            </div>
          </div>
        );

      case 'erp':
        return (
          <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-right">
            <div className="absolute inset-0 bg-[#0ea5e9]/[0.01]" />
            
            {/* revolving circular databases */}
            <div className="relative w-44 h-44 flex items-center justify-center">
              <motion.div 
                variants={rotateAnimation} 
                animate="animate"
                className="absolute w-36 h-36 border border-dashed border-[#0ea5e9]/40 rounded-full"
              />
              
              {/* Central ERP Brain */}
              <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-indigo-900 to-slate-950 rounded-2xl flex items-center justify-center border border-indigo-500 shadow-md">
                <Layers className="w-7 h-7 text-[#7dd3fc] animate-pulse" />
              </div>

              {/* Satellite node databases */}
              <motion.div 
                variants={floatAnimation}
                animate="animate" 
                className="absolute -top-2 right-12 w-10 h-10 bg-white border border-sky-100 rounded-xl shadow-sm flex items-center justify-center text-[10px] font-bold"
              >
                مالی
              </motion.div>
              <div className="absolute bottom-4 -right-2 w-10 h-10 bg-white border border-sky-100 rounded-xl shadow-sm flex items-center justify-center text-[10px] font-bold">
                انبار
              </div>
              <div className="absolute bottom-4 -left-2 w-10 h-10 bg-white border border-sky-100 rounded-xl shadow-sm flex items-center justify-center text-[10px] font-bold">
                خرید
              </div>
            </div>

            <div className="mt-4 p-2 bg-slate-900 text-white rounded-lg text-[10px] leading-relaxed w-full max-w-[240px]">
              <span className="text-orange-400 font-bold block mb-0.5">سیستم یکپارچه منابع ERP</span>
              پایان کسر موجودی انبار و مغایرت مالی پرسنل فروش به کمک استقرار سامانه‌های فرآیند-محور.
            </div>
          </div>
        );

      case 'business-plan':
      case 'swot':
        return (
          <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-right space-y-4">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e904_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e904_1px,transparent_1px)] bg-[size:16px_16px]" />
            
            {/* Chart upward curve with dots */}
            <motion.div 
              variants={slowPulse}
              animate="animate"
              className="w-full h-32 relative bg-sky-50/50 border border-sky-100 rounded-xl p-4 overflow-hidden flex items-end justify-between"
            >
              {/* Background coordinates text overlay */}
              <span className="absolute top-2 right-2 text-[9px] font-mono text-gray-400">10-YEAR FORECAST SYSTEM [PRO]</span>
              
              {/* Bars representing successive growth years */}
              <div className="w-5 bg-sky-100 h-[25%] rounded-t" />
              <div className="w-5 bg-sky-200 h-[35%] rounded-t" />
              <div className="w-5 bg-sky-300 h-[55%] rounded-t" />
              <div className="w-5 bg-[#0ea5e9]/60 h-[70%] rounded-t relative">
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[8px] font-mono font-bold text-sky-700">Yr4</span>
              </div>
              <div className="w-5 bg-orange-400 h-[95%] rounded-t relative">
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[8px] font-mono font-bold text-orange-600">Yr5</span>
              </div>

              {/* Glowing Arrow Line */}
              <svg viewBox="0 0 200 100" className="absolute inset-0 w-full h-full text-orange-500" preserveAspectRatio="none">
                <path d="M 10 90 Q 70 60, 130 40 T 190 10" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3,3" />
                <circle cx="190" cy="10" r="4" fill="#f97316" />
              </svg>
            </motion.div>

            <div className="bg-slate-900 border border-sky-400/20 text-white rounded-lg p-3 text-[11px] leading-relaxed w-full max-w-[240px]">
              <div className="flex items-center gap-1 text-orange-400 font-bold mb-1">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>برآورد پیش‌بینی سود ده ساله</span>
              </div>
              برآورد دقیق بهای تمام‌شده کالاها و مخارج عملیاتی و سرمایه‌ای شرکت مطابق تراز اقتصادی کشور.
            </div>
          </div>
        );

      case 'human-resources':
        return (
          <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-right">
            <div className="absolute inset-0 bg-[#0ea5e9]/[0.01]" />
            
            {/* Team Network Nodes */}
            <div className="relative w-48 h-44 flex items-center justify-center">
              {/* Central Circle */}
              <div className="absolute w-20 h-20 bg-sky-150 border border-[#0ea5e9]/40 rounded-full flex items-center justify-center animate-pulse">
                <UserCheck className="w-8 h-8 text-[#0ea5e9]" />
              </div>
              
              {/* Surrounding connected members */}
              <motion.div 
                variants={floatAnimation}
                animate="animate"
                className="absolute -top-1 -right-1 w-12 h-12 bg-white border border-sky-100 rounded-xl shadow-sm p-1.5 text-center flex flex-col justify-center items-center"
              >
                <span className="text-[9px] font-black text-slate-800">مربی ارشد</span>
                <span className="text-[7px] text-[#0ea5e9] font-mono">KPI: 98%</span>
              </motion.div>

              <div className="absolute -bottom-1 -left-1 w-12 h-12 bg-white border border-sky-100 rounded-xl shadow-sm p-1.5 text-center flex flex-col justify-center items-center">
                <span className="text-[9px] font-black text-slate-800">تیم فنی</span>
                <span className="text-[7px] text-orange-500 font-mono">POR: 92%</span>
              </div>

              <div className="absolute -bottom-1 -right-1 w-12 h-12 bg-white border border-sky-100 rounded-xl shadow-sm p-1.5 text-center flex flex-col justify-center items-center">
                <span className="text-[9px] font-black text-slate-800">فروش</span>
                <span className="text-[7px] text-emerald-500 font-mono">CVR: 3x</span>
              </div>

              {/* Connecting lines */}
              <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full text-sky-300 pointer-events-none">
                <line x1="100" y1="100" x2="160" y2="40" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" />
                <line x1="100" y1="100" x2="40" y2="160" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" />
                <line x1="100" y1="100" x2="160" y2="160" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" />
              </svg>
            </div>

            <div className="bg-slate-900 border border-sky-400/20 text-white rounded-lg p-2.5 text-[10px] leading-relaxed w-full max-w-[240px] mt-2">
              <span className="text-orange-400 font-bold block mb-0.5">سیستم پاداش شایسته‌سالار KPI</span>
              فرمول‌نویسی علمی پورسانت‌ها به همراه تدوین RACI دقیق شناسنامه‌ی مشاغل.
            </div>
          </div>
        );

      case 'sales-growth':
        return (
          <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-right">
            <div className="absolute inset-0 bg-[#0ea5e9]/[0.01]" />
            
            {/* Sales pipeline charts */}
            <div className="w-full max-w-[240px] bg-sky-50/60 border border-sky-100 rounded-xl p-4 space-y-3 relative overflow-hidden">
              <span className="text-[8px] font-mono text-sky-600 font-bold block">SALES PIPELINE ACCELERATOR</span>
              
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-[9px]">
                  <span className="text-slate-500">حجم لیدها</span>
                  <span className="font-bold text-slate-800 font-mono">100% Leads</span>
                </div>
                <div className="w-full bg-sky-100 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#0ea5e9] h-full w-[100%]" />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-[9px]">
                  <span className="text-slate-500">نرخ بستن معاملات</span>
                  <span className="font-bold text-orange-600 font-mono">+250% Growth</span>
                </div>
                <div className="w-full bg-sky-100 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-orange-500 h-full w-[70%]" />
                </div>
              </div>

              <div className="bg-slate-950 text-white p-2.5 rounded-md text-[9px] leading-relaxed">
                <span className="text-orange-400 font-bold block">متدولوژی متقاعدسازی (Sales Playbook)</span>
                آموزش عملی مذاکره اثربخش، خروج تام از جنگ قیمت و مهار تخفیف‌دهی بی‌ضابطه.
              </div>
            </div>
          </div>
        );

      case 'digital-marketing':
        return (
          <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-right">
            <div className="absolute inset-0 bg-sky-50/10" />
            
            {/* Cybernetic Omni-channel Hub */}
            <div className="relative w-44 h-44 flex items-center justify-center">
              <motion.div 
                variants={rotateAnimation}
                animate="animate"
                className="absolute w-36 h-36 border border-sky-300/30 rounded-full border-dashed"
              />
              <div className="absolute w-24 h-24 bg-gradient-to-br from-[#0ea5e9]/10 to-[#0ea5e9]/0 rounded-full flex items-center justify-center">
                <Globe className="w-10 h-10 text-[#0ea5e9] animate-pulse" />
              </div>

              {/* Channel badging */}
              <div className="absolute top-0 left-4 bg-sky-500 text-white font-extrabold text-[8px] px-2 py-0.5 rounded shadow">سئو گوگل</div>
              <div className="absolute bottom-6 right-0 bg-orange-500 text-white font-extrabold text-[8px] px-2 py-0.5 rounded shadow">تبلیغات همسان</div>
              <div className="absolute bottom-6 left-0 bg-slate-900 text-white font-extrabold text-[8px] px-2 py-0.5 rounded shadow">بازگشت سرمایه ROAS</div>
            </div>

            <div className="bg-white border border-sky-100 rounded-lg p-2.5 text-[10px] text-gray-600 text-center leading-normal w-full max-w-[240px] shadow-sm">
              رصد نرخ تبدیل صفحات فرود، گوگل آنالیتیکس ۴ و بهینه‌سازی مداوم قیف جذب آنلاین.
            </div>
          </div>
        );

      case 'general':
      default:
        return (
          <div className="relative w-full h-full flex flex-col items-center justify-center p-4 text-right">
            {/* Futuristic Tech Circle */}
            <div className="absolute inset-0 bg-[#0ea5e9]/[0.02]" />
            
            <motion.div 
              variants={floatAnimation} 
              animate="animate"
              className="relative w-44 h-44 flex items-center justify-center border-2 border-sky-100/50 rounded-full"
            >
              {/* Circle Orbit line */}
              <div className="absolute w-36 h-36 border border-dashed border-sky-200 rounded-full animate-spin [animation-duration:40s]" />
              
              <div className="relative z-10 w-28 h-28 bg-white/95 backdrop-blur shadow-lg rounded-2xl border border-sky-100 p-3.5 flex flex-col justify-around text-center">
                <Award className="w-8 h-8 text-orange-500 mx-auto" />
                <div>
                  <span className="text-xs font-black text-slate-950 block">رشد اصولی علمی</span>
                  <span className="text-[9px] text-[#0ea5e9] font-mono block mt-0.5">SHAHRIAR VISION</span>
                </div>
              </div>

              {/* Glowing decorative coordinates */}
              <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#0ea5e9]" />
              <div className="absolute bottom-2 left-6 w-1.5 h-1.5 rounded-full bg-orange-400" />
            </motion.div>

            {/* Float badge overlays */}
            <div className="absolute -bottom-1 right-2 bg-slate-950/90 text-white p-2.5 rounded-lg border border-sky-500/20 shadow text-right text-[10px]">
              <span className="font-bold text-sky-300 block mb-0.5">عارضه‌یابی ۳۶۰ درجه</span>
              جهش درآمدی پس از اصلاح فرآیند سازمان
            </div>
          </div>
        );
    }
  };

  return (
    <div className={`relative flex items-center justify-center w-full h-full min-h-[280px] bg-sky-50/20 border border-sky-150/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group ${className}`} id={`abstract-graphic-${preset}`}>
      {/* Absolute Gradient accents */}
      <div className="absolute -top-12 -left-12 w-40 h-40 bg-sky-100/40 rounded-full blur-2xl" />
      <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-orange-100/30 rounded-full blur-2xl" />
      
      {/* Corner indicators for architectonic modern look */}
      <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-sky-300 pointer-events-none" />
      <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-sky-300 pointer-events-none" />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-sky-300 pointer-events-none" />
      <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-sky-300 pointer-events-none" />

      {/* Render selected preset */}
      {renderGraphicContent()}
    </div>
  );
}
