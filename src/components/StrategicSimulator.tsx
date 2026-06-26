/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, TrendingUp, AlertTriangle, CheckSquare, 
  Settings, Play, RefreshCw, BarChart3, HelpCircle 
} from 'lucide-react';

interface DiagnosticMetric {
  name: string;
  value: number; // 0 to 100
  label: string;
}

export default function StrategicSimulator() {
  const [brandStrength, setBrandStrength] = useState<number>(45);
  const [orgEfficiency, setOrgEfficiency] = useState<number>(30);
  const [salesAutomation, setSalesAutomation] = useState<number>(40);
  const [processOptim, setProcessOptim] = useState<number>(35);

  const [activeChallenge, setActiveChallenge] = useState<string>('growth');

  const handleReset = () => {
    setBrandStrength(45);
    setOrgEfficiency(30);
    setSalesAutomation(40);
    setProcessOptim(35);
  };

  // Advanced calculation engine for executive diagnostics
  const diagnostics = useMemo(() => {
    // 1. Overall System Efficiency Score
    const systemScore = Math.round(
      (brandStrength * 0.25) + 
      (orgEfficiency * 0.30) + 
      (salesAutomation * 0.25) + 
      (processOptim * 0.20)
    );

    // 2. Operational Waste factor (mostly bad when org and processes are low)
    const rawWaste = 100 - Math.round((orgEfficiency * 0.5) + (processOptim * 0.5));
    const wasteFactor = Math.max(10, Math.min(95, rawWaste));

    // 3. Calculated Growth potential index (driven by brand and sales, limited by organization)
    const demandPower = (brandStrength * 0.6) + (salesAutomation * 0.4);
    const executionConstraint = (orgEfficiency * 0.7) + (processOptim * 0.3);
    const growthPotential = Math.round(Math.min(demandPower * 1.5, executionConstraint * 0.8 + demandPower * 0.4));

    // 4. Monthly Lead Leakage (mainly affected by sales automation)
    const leakageRate = Math.max(5, 90 - Math.round(salesAutomation * 0.95));

    // Determine target color based on system health
    let healthColor = 'text-rose-500';
    let gradientHealth = 'from-rose-500 to-red-600';
    let healthTxt = 'بحرانی (نیازمند اورهال ساختاری)';

    if (systemScore >= 70) {
      healthColor = 'text-emerald-500';
      gradientHealth = 'from-emerald-400 to-teal-600';
      healthTxt = 'رقابتی و پویا (بهینه‌سازی تکمیلی)';
    } else if (systemScore >= 45) {
      healthColor = 'text-amber-500';
      gradientHealth = 'from-amber-400 to-orange-500';
      healthTxt = 'شکننده و مستهلک (نیازمند مداخله استراتژیک)';
    }

    return {
      systemScore,
      wasteFactor,
      growthPotential,
      leakageRate,
      healthColor,
      gradientHealth,
      healthTxt
    };
  }, [brandStrength, orgEfficiency, salesAutomation, processOptim]);

  // Persian targeted recommendations based on adjusted metrics
  const recommendations = useMemo(() => {
    const list = [];
    
    if (brandStrength < 50) {
      list.push({
        title: 'فرمولاسیون هویت و سند جامع برند (Brand Blueprint)',
        desc: 'قدرت تمایز برند شما پایین است؛ شرکت ناچار به تخفیف‌دهی مکرر در بازاریابی است. نیاز فوری به خلق وعده مقتدر برند و یکپارچه‌‌سازی هویت بصری.',
        serviceId: 'branding'
      });
    }
    
    if (orgEfficiency < 50) {
      list.push({
        title: 'مهندسی مجدد چارت و رفع همپوشانی‌های پرسنل',
        desc: 'ناهماهنگی شدیدی بین لایه‌های مدیریتی و اجرایی مشهود است؛ مدیرعامل در تله روزمرگی غرق شده است. تدوین ماتریس استراتژیک RACI و بازنویسی شناسنامه مشاغل ضروری است.',
        serviceId: 'org_chart'
      });
    }

    if (salesAutomation < 50) {
      list.push({
        title: 'پیکربندی هوشمند و یکپارچه‌سازی سیستم CRM',
        desc: 'نشت لیدهای تبلیغاتی و عدم پیگیری پیوسته مشتریان باعث اتلاف شدید بودجه شده است. استقرار مکانیزه قیف فروش به موازات ارتقای مهارت پیگیری تیم.',
        serviceId: 'crm'
      });
    }

    if (processOptim < 50) {
      list.push({
        title: 'یکپارچه‌سازی کانال‌های مالی و انبار با ERP',
        desc: 'سازمان به صورت جزیره‌ای مدیریت می‌شود. مغایرت شدید آماری حسابداری و خطاهای مکرر انبارداری کارگاهی با اتصال فرآیندهای بهینه برطرف می‌گردد.',
        serviceId: 'erp'
      });
    }

    if (list.length === 0) {
      list.push({
        title: 'افزایش وفاداری پایدار و استقرار شاخص‌های فوق‌پیشرفته ارزیابی (KPI)',
        desc: 'کسب‌وکار شما در سطح بالایی از پویایی قرار دارد. زمان افزایش تارگت‌های فروش و اتصال کامل پاداش و پورسانت تیمی به شاخص‌های استراتژیک ده‌ساله فرا رسیده است.',
        serviceId: 'human-resources'
      });
    }

    return list;
  }, [brandStrength, orgEfficiency, salesAutomation, processOptim]);

  return (
    <div className="bg-white border border-sky-100 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden text-right" id="strategic-simulator-widget">
      
      {/* Background glass lighting circles */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#0ea5e9]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-100/20 rounded-full blur-3xl pointer-events-none" />
      
      {/* Heading Block */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-sky-50 pb-6 mb-8 gap-4">
        <div className="space-y-2">
          <span className="text-[11px] bg-orange-100 text-orange-600 font-extrabold px-3 py-1.5 rounded-full inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            داشبورد شبیه‌ساز استراتژیک رشد
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-slate-1000">کامپیوتر عارضه‌یابی و سلامت کسب‌وکار</h3>
          <p className="text-xs text-gray-500 max-w-2xl leading-relaxed">
            با حرکت دادن اسلایدرها، فرضیات فرآیندی سازمان خود را تغییر دهید و به صورت آنی ضرباهنگ کارایی، نشتِ منابع مالی و توصیه‌های مکتوب دپارتمان استراتژی را مشاهده فرمایید.
          </p>
        </div>
        
        <button
          onClick={handleReset}
          className="bg-sky-50 hover:bg-sky-100 text-sky-600 font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 self-start md:self-center transition-colors cursor-pointer"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>ریست فرضیات</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* RIGHT COLUMN: Interactive Control Knobs & Sliders */}
        <div className="lg:col-span-6 space-y-6 bg-slate-50/50 p-6 rounded-2xl border border-sky-100/50">
          <h4 className="text-xs font-black text-slate-900 border-r-2 border-orange-500 pr-2 mb-4">
            تنظیم پارامترهای اصلی شرکت شما:
          </h4>

          {/* Slider 1: Brand */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-slate-800">۱. قدرت ادراکی و تمایز برند (ثبت، پالت، جایگاه)</span>
              <span className="font-mono font-black text-[#0ea5e9] bg-sky-100/60 px-2 py-0.5 rounded text-[11px]">
                {brandStrength}%
              </span>
            </div>
            <input 
              type="range" 
              min="10" 
              max="100" 
              step="5"
              value={brandStrength}
              onChange={(e) => setBrandStrength(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#0ea5e9]"
            />
            <p className="text-[10px] text-gray-400">میزان تمایز از رقبا و تمایل مشتریان برای پرداخت فراتر از قیمت بازار.</p>
          </div>

          {/* Slider 2: Org chart */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-slate-800">۲. ساختار و کارایی چارت سازمانی (وظایف، RACI)</span>
              <span className="font-mono font-black text-orange-600 bg-orange-100/60 px-2 py-0.5 rounded text-[11px]">
                {orgEfficiency}%
              </span>
            </div>
            <input 
              type="range" 
              min="10" 
              max="100" 
              step="5"
              value={orgEfficiency}
              onChange={(e) => setOrgEfficiency(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
            />
            <p className="text-[10px] text-gray-400">میزان رهایی مدیرعامل از روزمرگی و تفویض شفاف اختیارات برای مهار بوروکراسی.</p>
          </div>

          {/* Slider 3: CRM */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-slate-800">۳. اتوماسیون فروش و پیگیری مشتریان CRM</span>
              <span className="font-mono font-black text-[#0ea5e9] bg-sky-100/60 px-2 py-0.5 rounded text-[11px]">
                {salesAutomation}%
              </span>
            </div>
            <input 
              type="range" 
              min="10" 
              max="100" 
              step="5"
              value={salesAutomation}
              onChange={(e) => setSalesAutomation(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#0ea5e9]"
            />
            <p className="text-[10px] text-gray-400">میزان سرعت چرخه پیگیری و جلوگیری از فرسودگی و ریزش سرنخ‌های گران‌قیمت.</p>
          </div>

          {/* Slider 4: Process Optim (ERP) */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-slate-800">۴. بهینه‌سازی جریان کالا، مالی و سیستم‌های ERP</span>
              <span className="font-mono font-black text-rose-600 bg-rose-100/60 px-2 py-0.5 rounded text-[11px]">
                {processOptim}%
              </span>
            </div>
            <input 
              type="range" 
              min="10" 
              max="100" 
              step="5"
              value={processOptim}
              onChange={(e) => setProcessOptim(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
            />
            <p className="text-[10px] text-gray-400">یکپارچه‌‌سازی آمار انبارداری واقعی با ترازهای دریافتی حسابداری.</p>
          </div>

        </div>

        {/* LEFT COLUMN: Highly Polished Calculated Analytical Dashboard */}
        <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
          
          {/* Main calculated gauges container */}
          <div className="bg-[#1e2329] text-white rounded-2xl p-6 border border-[#2d343f] shadow-lg flex-grow flex flex-col justify-between space-y-6">
            
            {/* Header score text */}
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-400 font-bold block">شاخص نهایی پایداری سیستم:</span>
              <div className="bg-[#2d343f] px-2.5 py-1 rounded text-[10px] text-[#7dd3fc] font-mono leading-none">
                VER-3.1 LIVE
              </div>
            </div>

            {/* Score circle layout */}
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-around">
              
              <div className="relative w-32 h-32 flex items-center justify-center">
                {/* SVG Progress Circle Background */}
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="64" cy="64" r="50" fill="transparent" stroke="#2d343f" strokeWidth="8" />
                  <circle 
                    cx="64" 
                    cy="64" 
                    r="50" 
                    fill="transparent" 
                    stroke="#0ea5e9" 
                    strokeWidth="8" 
                    strokeDasharray={`${2 * Math.PI * 50}`}
                    strokeDashoffset={`${2 * Math.PI * 50 * (1 - diagnostics.systemScore / 100)}`}
                    className="transition-all duration-500 ease-out"
                  />
                </svg>
                {/* Inner text score */}
                <div className="absolute flex flex-col items-center">
                  <span className="text-3xl font-black font-mono tracking-tight text-white">{diagnostics.systemScore}%</span>
                  <span className="text-[9px] text-[#7dd3fc] font-bold">امتیاز سازمانی</span>
                </div>
              </div>

              {/* Status details indicators */}
              <div className="space-y-3 flex-grow max-w-[200px] w-full">
                <div>
                  <span className="text-[10px] text-gray-400 block mb-0.5">وضعیت ارزیابی بالادستی:</span>
                  <span className={`text-xs font-black ${diagnostics.healthColor}`}>{diagnostics.healthTxt}</span>
                </div>
                
                {/* Linear indicators for leakage and waste */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] text-gray-400 font-semibold">
                    <span>نرخ ریزش سرنخ هدررفته:</span>
                    <span className="font-mono text-rose-400">{diagnostics.leakageRate}%</span>
                  </div>
                  <div className="w-full bg-[#2d343f] h-1.5 rounded-full overflow-hidden">
                    <div 
                      className="bg-rose-500 h-full transition-all duration-500" 
                      style={{ width: `${diagnostics.leakageRate}%` }} 
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] text-gray-400 font-semibold">
                    <span>میزان اتلاف بهره‌وری پرسنل:</span>
                    <span className="font-mono text-orange-400">{diagnostics.wasteFactor}%</span>
                  </div>
                  <div className="w-full bg-[#2d343f] h-1.5 rounded-full overflow-hidden">
                    <div 
                      className="bg-orange-500 h-full transition-all duration-500" 
                      style={{ width: `${diagnostics.wasteFactor}%` }} 
                    />
                  </div>
                </div>

              </div>

            </div>

            {/* Custom high level forecast description */}
            <div className="bg-[#2d343f]/60 p-4 rounded-xl text-xs space-y-1 text-right text-gray-300 leading-relaxed border border-slate-700">
              <div className="flex items-center gap-1 text-[#7dd3fc] font-bold mb-1">
                <BarChart3 className="w-4 h-4" />
                <span>برآورد ظرفیت توسعه و مقیاس‌پذیری:</span>
              </div>
              <span>کسب‌وکار شما با وضعیت فعلی ظرفیت رشد آزاد تا مرز <strong className="text-orange-400 font-black">{diagnostics.growthPotential}%</strong> را داراست. عبور از این مرز بی‌استقرار فرآیندها، شرکت را به تله بحران نقدی بزرگ مواجه می‌گرداند.</span>
            </div>

          </div>

          {/* Recommended immediate roadmap points */}
          <div className="space-y-3 pt-4">
            <h5 className="text-xs font-extrabold text-slate-900 flex items-center gap-1">
              <AlertTriangle className="w-4 h-4 text-orange-500" />
              <span>اولین گام‌های عملیاتی اصلاحی پیشنهادی:</span>
            </h5>
            
            <div className="space-y-2">
              {recommendations.slice(0, 2).map((rec, index) => (
                <div key={index} className="p-4 bg-sky-50/50 border border-sky-100 rounded-xl space-y-1 text-right">
                  <span className="text-xs font-bold text-slate-1000 block">{rec.title}</span>
                  <p className="text-[11px] text-gray-500 leading-relaxed">{rec.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
