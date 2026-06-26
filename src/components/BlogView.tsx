/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { blogData } from '../data/blogData';
import { BlogPost } from '../types';
import {
  Search, Calendar, Clock, ArrowLeft, ArrowRight,
  ChevronLeft, BookOpen, Share2, MessageSquare, AlertCircle, Sparkles
} from 'lucide-react';
import PremiumVisualFrame from './PremiumVisualFrame';

const getPresetForCategory = (category: string): 'branding' | 'org-chart' | 'crm' | 'erp' | 'business-plan' | 'swot' | 'human-resources' | 'sales-growth' | 'digital-marketing' | 'general' => {
  if (category.includes('برند')) return 'branding';
  if (category.includes('دیجیتال') || category.includes('مارکتینگ')) return 'digital-marketing';
  if (category.includes('سازمان') || category.includes('چارت') || category.includes('ساختار')) return 'org-chart';
  if (category.includes('فروش') || category.includes('مذاکره')) return 'sales-growth';
  if (category.includes('سیستم') || category.includes('CRM')) return 'crm';
  if (category.includes('برنامه‌ریزی') || category.includes('استراتژیک')) return 'swot';
  return 'general';
};

interface BlogViewProps {
  selectedPostId: string | null;
  onPostSelect: (postId: string | null) => void;
  onPageChange: (page: string) => void;
}

export default function BlogView({ selectedPostId, onPostSelect, onPageChange }: BlogViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('همه');

  const categories = useMemo(() => {
    const list = new Set(blogData.map(post => post.category));
    return ['همه', ...Array.from(list)];
  }, []);

  const filteredPosts = useMemo(() => {
    return blogData.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'همه' || post.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const activePost = useMemo(() => {
    if (!selectedPostId) return null;
    return blogData.find(post => post.id === selectedPostId) || null;
  }, [selectedPostId]);

  // Handle sharing of post (mock)
  const [showShareAlert, setShowShareAlert] = useState(false);
  const triggerShare = () => {
    setShowShareAlert(true);
    setTimeout(() => setShowShareAlert(false), 2500);
  };

  // Render Single Blog post
  if (activePost) {
    return (
      <div className="bg-[#fcfdfd] text-right" id={`single-article-${activePost.id}`}>

        {/* Header Breadcrumbs & Actions */}
        <div className="bg-sky-50/50 py-4 border-b border-sky-100">
          <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">

            {/* Back button */}
            <button
              onClick={() => onPostSelect(null)}
              className="flex items-center gap-1.5 text-sm font-bold text-[#0ea5e9] hover:text-[#08cc7] cursor-pointer"
            >
              <ArrowRight className="w-4 h-4 ml-1" />
              <span>برگشت به مجله کسب‌وکار</span>
            </button>

            {/* Breadcrumb info - NOW CLICKABLE */}
            <div className="hidden sm:flex items-center gap-2 text-xs text-gray-500">
              <a href="/" className="text-gray-500 hover:text-sky-500 transition-colors">
                شهریار vision
              </a>
              <ChevronLeft className="w-3 h-3 text-gray-400" />
              <a href="/blog" className="text-gray-500 hover:text-sky-500 transition-colors">
                مجله تخصصی
              </a>
              <ChevronLeft className="w-3 h-3 text-gray-400" />
              <span className="text-[#0ea5e9] font-medium">{activePost.category}</span>
            </div>

          </div>
        </div>

        {/* Main Article Canvas */}
        <article className="max-w-4xl mx-auto px-4 py-12 md:py-16 space-y-8">

          {/* Post metadata header */}
          <div className="space-y-4">
            <span className="inline-block bg-orange-100 text-orange-500 font-extrabold text-xs px-3 py-1.5 rounded-full">
              {activePost.category}
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-950 leading-snug md:leading-snug">
              {activePost.title}
            </h1>

            {/* Author card & stats info */}
            <div className="flex flex-wrap items-center gap-6 pt-2 pb-6 border-b border-gray-100 text-xs sm:text-sm text-gray-500">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-sky-200 overflow-hidden bg-sky-50">
                  <img
                    src="/assets/final/people/founder-standing-cactus-light-shirt.webp"
                    alt="مهندس علیرضا شهریار"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <span className="font-extrabold text-slate-900 block">مهندس علیرضا شهریار</span>
                  <span className="text-[10px] text-gray-400 block mt-0.5">مشاور ارشد استراتژیک</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-sky-500" />
                <span>نگارش شده در {activePost.date}</span>
              </div>

              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-sky-500" />
                <span>زمان مطالعه: {activePost.readTime}</span>
              </div>

              {/* Action: Share */}
              <button
                onClick={triggerShare}
                className="mr-auto text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-1.5 p-1.5 hover:bg-gray-50 rounded cursor-pointer"
                title="اشتراک‌گذاری لینک مطلب"
              >
                <Share2 className="w-4 h-4" />
                <span className="text-xs">اشتراک‌گذاری</span>
              </button>
            </div>
          </div>

          {/* Social alarm alert */}
          {showShareAlert && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-800 text-xs text-center">
              لینک این مقاله راهبردی با موفقیت در حافظه موقت شما کپی گردید. هم‌اکنون می‌توانید آن را با همکاران خود به اشتراک بگذارید.
            </div>
          )}

          {/* Featured Image */}
          <div className="max-w-3xl mx-auto">
            <PremiumVisualFrame
              src={activePost.image}
              alt={activePost.title}
              fallbackPreset={getPresetForCategory(activePost.category)}
              overlayLabel={`مطالعه مقاله راهبردی ${activePost.category}`}
              aspectClass="aspect-16/9"
            />
          </div>

          {/* Article Main Text Markup - NOW USING NATIVE HTML */}
          <div className="max-w-3xl mx-auto text-slate-800 text-sm sm:text-base leading-relaxed space-y-6 whitespace-pre-wrap">
            {/* Content will be rendered as HTML by the frontend */}
            <div dangerouslySetInnerHTML={{ __html: activePost.content }} />
          </div>

          {/* CTA Box inside blog */}
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-2xl p-8 relative overflow-hidden text-right border-r-4 border-orange-500">
            <div className="absolute top-0 left-0 w-44 h-44 bg-sky-400/10 rounded-full blur-2xl pointer-events-none" />
            <div className="space-y-4 relative z-10">
              <span className="text-xs font-bold text-[#7dd3fc]">همراهی تخصصی شهریار ویژن</span>
              <h3 className="text-lg sm:text-xl font-bold">آیا به دنبال استقرار این تغییرات در شرکت خود هستید؟</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                نگارش اسناد و مقالات اولین گامی خودآگاهی است؛ اما تغییر الگوهای رفتاری پرسنل نیاز به تخصص و صبوری مداوم دارد. ما تمام این ساختار را متناسب با اندازه و بودجه شرکت شما، مستقر و مانیتور می‌کنیم.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => onPageChange('consultation_request')}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs px-5 py-3 rounded-lg transition-colors cursor-pointer"
                >
                  ثبت درخواست جلسه معارفه رایگان
                </button>
                <button
                  onClick={() => onPostSelect(null)}
                  className="bg-white/10 hover:bg-white/20 text-white text-xs px-4 py-3 rounded-lg transition-colors cursor-pointer"
                >
                  مطالعه سایر مقالات راهبردی
                </button>
              </div>
            </div>
          </div>

        </article>
      </div>
    );
  }

  // Render blog listings
  return (
    <div className="bg-[#fcfdfd] text-right" id="blog-listing-section">

      {/* Search and Category Filter Section */}
      <section className="bg-gradient-to-b from-sky-50 to-transparent py-14 border-b border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[#0ea5e9] text-xs font-bold px-3 py-1 bg-sky-100 rounded-full">دانشگاه کوچکی برای کارآفرینان</span>
            <h1 className="text-2xl sm:text-3.5xl md:text-4.5xl font-black text-slate-950">مجله استراتژی و دانش کسب‌وکار</h1>
            <p className="text-xs sm:text-sm text-gray-500">
              تحلیل‌های تخصصی، مدل‌سازی‌ها و مقالات آموزشی مهندس شهریار پیرامون چارت، برندینگ و مکانیزاسیون سازمان.
            </p>
          </div>

          {/* Search Inputs and Categories Grid */}
          <div className="max-w-3xl mx-auto space-y-5 bg-white p-5 rounded-xl border border-sky-100 shadow-sm">

            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                placeholder="جستجو در مقالات راهبردی و عارضه‌یابی..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pr-12 pl-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] focus:bg-white transition-all text-right"
              />
              <Search className="w-5 h-5 text-gray-400 absolute right-4 top-3.5" />
            </div>

            {/* Category selection */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs font-bold text-gray-400 ml-2">دسته‌بندی‌ها:</span>
              {categories.map((cat, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition-all cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-[#0ea5e9] text-white shadow-sm'
                      : 'bg-gray-150 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* Blogs output grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {filteredPosts.length === 0 ? (
            <div className="text-center py-12 bg-white border border-gray-100 rounded-xl max-w-md mx-auto space-y-3">
              <AlertCircle className="w-10 h-10 text-orange-400 mx-auto" />
              <p className="font-bold text-slate-800 text-sm">هیچ مقاله‌ای منطبق با جستجوی شما یافت نشد.</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('همه'); }}
                className="text-xs text-[#0ea5e9] underline cursor-pointer"
              >
                پاک کردن فیلترها
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white border border-sky-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col hover:-translate-y-1 relative duration-300"
                  id={`article-card-${post.id}`}
                >

                  {/* Thumbnail */}
                  <div className="relative overflow-hidden aspect-16/10">
                    <PremiumVisualFrame
                      src={post.image}
                      alt={post.title}
                      fallbackPreset={getPresetForCategory(post.category)}
                      overlayLabel={`مشاهده مقاله ${post.category}`}
                      aspectClass="aspect-16/10"
                      className="border-none rounded-none"
                    />

                    {/* Badge Category */}
                    <span className="absolute top-3 right-3 bg-sky-500 text-white font-bold text-[10px] px-2.5 py-1 rounded z-10 shadow-sm">
                      {post.category}
                    </span>
                  </div>

                  {/* Body Text */}
                  <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">

                    <div>
                      {/* Meta */}
                      <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{post.date}</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{post.readTime}</span>
                        </span>
                      </div>

                      <h3 className="font-black text-sm sm:text-base text-slate-950 leading-snug line-clamp-2 hover:text-[#0ea5e9] transition-colors">
                        <button onClick={() => onPostSelect(post.id)} className="text-right cursor-pointer">
                          {post.title}
                        </button>
                      </h3>

                      <p className="text-xs text-gray-500 mt-2 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-50 flex items-center justify-between mt-4">
                      <button
                        onClick={() => onPostSelect(post.id)}
                        className="text-xs font-bold text-[#0ea5e9] hover:text-[#08cc7] flex items-center gap-1 cursor-pointer"
                      >
                        <span>مطالعه کامل مقاله</span>
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <BookOpen className="w-4 h-4 text-gray-300" />
                    </div>

                  </div>

                </article>
              ))}
            </div>
          )}

        </div>
      </section>

    </div>
  );
}