/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { servicesData } from '../data/servicesData';
import { 
  Award, FileText, BarChart3, GitFork, Users, Database, 
  UserCheck, TrendingUp, Globe, Sparkles, ChevronLeft, Search, HelpCircle, 
  ArrowLeft, ArrowRight, Server, ShieldCheck, Landmark 
} from 'lucide-react';

interface ServicesOverviewViewProps {
  onPageChange: (page: string) => void;
}

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

export default function ServicesOverviewView({ onPageChange }: ServicesOverviewViewProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'strategy' | 'system'>('all');

  const services = useMemo(() => {
    return Object.values(servicesData);
  }, []);

  // Filter services by category and search query
  const filteredServices = useMemo(() => {
    return services.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            service.subtitle.toLowerCase().includes(searchTerm.toLowerCase());
      
      if (activeTab === 'all') return matchesSearch;
      if (activeTab === 'strategy') {
        return matchesSearch && ['branding', 'business-plan', 'swot', 'human-resources', 'sales-growth'].includes(service.id);
      }
      if (activeTab === 'system') {
        return matchesSearch && ['org-chart', 'crm', 'erp', 'digital-marketing'].includes(service.id);
      }
      return matchesSearch;
    });
  }, [services, searchTerm, activeTab]);

  const handleServiceClick = (serviceId: string) => {
    // Navigate to the correct page key name format in the App router
    const pageKey = serviceId.replace(/-/g, '_');
    onPageChange(pageKey);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#fcfdfd] text-right" id="services-overview-page">
      
      {/* 1. Page Header Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-transparent pt-12 pb-16 border-b border-sky-100">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-sky-200/40 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-12 w-64 h-64 bg-orange-100/30 rounded-full blur-2xl -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs bg-[#0ea5e9]/10 text-[#0ea5e9] font-bold px-3 py-1.5 rounded-full inline-block">
            دپارتمان تخصصی مشاوره کسب‌وکار
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-slate-1000">کاتالوگ تخصصی خدمات شهریار ویژن</h1>
          <p className="text-xs sm:text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed">
            طراحی فرآیندها، مهندسی مجدد بالادستی و استقرار نرم‌افزارها و چارت‌های راندمان‌محور با بهترین متدولوژی‌های روز جهان
          </p>
        </div>
      </section>

      {/* 2. Filter tabs and search control */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            
            {/* Tabs */}
            <div className="flex items-center gap-2 p-1 bg-gray-150 rounded-xl">
              <button 
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'all' 
                    ? 'bg-[#0ea5e9] text-white shadow-sm' 
                    : 'text-gray-600 hover:text-slate-900'
                }`}
              >
                کلیه خدمات (۲۱)
              </button>
              <button 
                onClick={() => setActiveTab('strategy')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'strategy' 
                    ? 'bg-[#0ea5e9] text-white shadow-sm' 
                    : 'text-gray-600 hover:text-slate-900'
                }`}
              >
                برنامه‌ریزی و استراتژی رشد (۵)
              </button>
              <button 
                onClick={() => setActiveTab('system')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'system' 
                    ? 'bg-[#0ea5e9] text-white shadow-sm' 
                    : 'text-gray-600 hover:text-slate-900'
                }`}
              >
                معماری چارت و سیستمی‌سازی (۴)
              </button>
            </div>

            {/* Live Search bar */}
            <div className="relative w-full md:max-w-xs">
              <input 
                type="text" 
                placeholder="جستجوی سریع حوزه خدمت..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pr-10 pl-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] focus:bg-white text-right"
              />
              <Search className="w-4 h-4 text-gray-400 absolute right-3 top-3" />
            </div>

          </div>
        </div>
      </section>

      {/* 3. Services listings deck */}
      <section className="py-16 md:py-24 bg-[#fcfdfd]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div 
                key={service.id}
                className="bg-white border border-sky-100 hover:border-[#0ea5e9]/30 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group text-right flex flex-col justify-between"
                id={`overview-service-card-${service.id}`}
              >
                <div>
                  {/* Icon */}
                  <div className="w-14 h-14 bg-sky-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#0ea5e9] group-hover:text-white transition-all">
                    {getIcon(service.iconName)}
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-slate-1000 leading-tight mb-2 group-hover:text-orange-500 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-[#0ea5e9] font-bold mb-3">{service.subtitle}</p>

                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-6 line-clamp-3">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                  <button
                    onClick={() => handleServiceClick(service.id)}
                    className="text-xs font-bold text-[#0ea5e9] group-hover:text-orange-500 transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>جزئیات و مراحل استقرار</span>
                    <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                  </button>

                  <button
                    onClick={() => onPageChange('consultation_request')}
                    className="text-[10px] bg-orange-500 text-white font-bold py-1 px-3.5 rounded hover:bg-orange-600 transition-colors cursor-pointer"
                  >
                    جلسه معارفه
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Bottom Trust section */}
      <section className="bg-slate-900 text-white py-14 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <HelpCircle className="w-10 h-10 text-orange-400 mx-auto" />
          <h2 className="text-lg sm:text-xl font-bold">آیا درباره تناسب خدمات با بودجه سازمان مطمئن نیستید؟</h2>
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
            ما بر این باوریم که تحمیل ماژول‌های بیهوده به یک هولدینگ، گناه فرآیندی است. مشاور معمار شهریار ویژن پیش از هر عقد قرارداد، پایش مقدمات و تحلیل سازگاری سیستم شما را به صورت کاملاً مجانی انجام می‌دهد.
          </p>
          <div className="pt-3">
            <button
              onClick={() => onPageChange('consultation_request')}
              className="bg-[#0ea5e9] hover:bg-[#0c8cc7] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-lg transition-colors cursor-pointer"
            >
              کد ارزیابی رایگان بگیرید
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
