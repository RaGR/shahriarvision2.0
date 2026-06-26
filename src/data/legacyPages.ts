/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Legacy Content Registry
 * Maps all 29 exported Markdown files from the old website to structured records.
 * Source: shahriarvision-full-content(old-website)/*.md
 * Each record preserves the original legacy slug, title, category, and navigation status.
 */

export interface LegacyPage {
  id: string;
  legacySlug: string;
  title: string;
  category: 'service' | 'article' | 'archive' | 'support' | 'legacy-other';
  sourceFile: string;
  summary: string;
  showInNavigation: boolean;
  relatedServiceIds: string[];
}

export const legacyPages: LegacyPage[] = [
  // === HOME & CORE PAGES ===
  {
    id: 'home',
    legacySlug: '/',
    title: 'صفحه اصلی - شهریار ویژن',
    category: 'service',
    sourceFile: '01_home_intro_branding_digital_marketing.md',
    summary: 'صفحه اصلی با معرفی برندسازی، بازاریابی دیجیتال و خدمات فروش',
    showInNavigation: false,
    relatedServiceIds: ['branding', 'digital-marketing', 'sales-growth'],
  },
  {
    id: 'about',
    legacySlug: '/about/',
    title: 'درباره شهریار ویژن',
    category: 'support',
    sourceFile: '19_about_shahriar_vision.md',
    summary: 'معرفی جامع مجموعه شهریار ویژن و خدمات مشاوره‌ای',
    showInNavigation: false,
    relatedServiceIds: [],
  },
  {
    id: 'contact',
    legacySlug: '/contact/',
    title: 'تماس با ما',
    category: 'support',
    sourceFile: '13_contact_info.md',
    summary: 'اطلاعات تماس: آدرس، تلفن، ایمیل و ساعات کاری',
    showInNavigation: false,
    relatedServiceIds: [],
  },

  // === CORE SERVICE PAGES ===
  {
    id: 'branding',
    legacySlug: '/branding/',
    title: 'برندسازی یا برندینگ (Branding) چیست؟',
    category: 'service',
    sourceFile: '15_branding_comprehensive_guide.md',
    summary: 'راهنمای جامع برندسازی: برندسازی محصول، شرکتی، خدمات و آنلاین',
    showInNavigation: true,
    relatedServiceIds: ['branding', 'branding-process'],
  },
  {
    id: 'business-plan',
    legacySlug: '/business-plan-design/',
    title: 'طراحی بیزنس پلن',
    category: 'service',
    sourceFile: '11_business_plan_design.md',
    summary: 'طراحی و تدوین طرح کسب‌وکار (بیزنس پلن) استاندارد',
    showInNavigation: true,
    relatedServiceIds: ['business-plan'],
  },
  {
    id: 'swot',
    legacySlug: '/swot/',
    title: 'طراحی تحلیل استراتژیک SWOT',
    category: 'service',
    sourceFile: '21_SWOT_analysis_strategy.md',
    summary: 'تحلیل SWOT و طراحی استراتژی‌های تهاجمی، تدافعی و تنوع‌بخشی',
    showInNavigation: true,
    relatedServiceIds: ['swot', 'winning-strategy'],
  },
  {
    id: 'org-chart',
    legacySlug: '/organizational-chart-design/',
    title: 'طراحی چارت سازمانی',
    category: 'service',
    sourceFile: '18_organizational_chart_design.md',
    summary: 'طراحی و اصلاح ساختار و چارت سازمانی',
    showInNavigation: true,
    relatedServiceIds: ['org-chart'],
  },

  // === EXPANDED SERVICE PAGES ===
  {
    id: 'sales-profitability',
    legacySlug: '/consulting-to-increase-sales-and-profitability/',
    title: 'مشاوره افزایش فروش و سودآوری',
    category: 'service',
    sourceFile: '02_business_development_consulting.md',
    summary: 'مشاوره تخصصی برای افزایش فروش و سودآوری کسب‌وکار',
    showInNavigation: true,
    relatedServiceIds: ['sales-growth'],
  },
  {
    id: 'business-startup-advice',
    legacySlug: '/business-startup-advice/',
    title: 'مشاوره راه‌اندازی کسب‌وکار',
    category: 'service',
    sourceFile: '03_business_startup_advice.md',
    summary: 'راهنمایی تخصصی برای راه‌اندازی کسب‌وکار از صفر',
    showInNavigation: true,
    relatedServiceIds: ['business-startup-advice'],
  },
  {
    id: 'business-development',
    legacySlug: '/business-startup-advice-2/',
    title: 'مشاوره توسعه کسب‌وکار',
    category: 'service',
    sourceFile: '07_business_startup_consulting.md',
    summary: 'مشاوره توسعه و رشد کسب‌وکارهای فعال',
    showInNavigation: true,
    relatedServiceIds: ['business-development'],
  },
  {
    id: 'marketing-campaigns',
    legacySlug: '/design-and-implementation-of-marketing-campaigns/',
    title: 'طراحی و اجرای کمپین‌های بازاریابی',
    category: 'service',
    sourceFile: '04_marketing_campaigns.md',
    summary: 'طراحی و اجرای کمپین‌های تبلیغاتی ATL, TTL, BTL و Omni-channel',
    showInNavigation: true,
    relatedServiceIds: ['marketing-campaigns'],
  },
  {
    id: 'sales-campaigns',
    legacySlug: '/design-and-implementation-of-sales-campaigns/',
    title: 'طراحی و اجرای کمپین‌های فروش',
    category: 'service',
    sourceFile: '05_sales_campaigns.md',
    summary: 'طراحی کمپین‌های فروش با اهداف مشخص و پروموشن‌های هوشمند',
    showInNavigation: true,
    relatedServiceIds: ['sales-campaigns'],
  },
  {
    id: 'organizational-diagnosis',
    legacySlug: '/organizational-problem-solving/',
    title: 'عارضه‌یابی سازمانی',
    category: 'service',
    sourceFile: '06_organizational_diagnosis.md',
    summary: 'شناسایی مشکلات ساختاری و فرآیندی سازمان',
    showInNavigation: true,
    relatedServiceIds: ['organizational-diagnosis'],
  },
  {
    id: 'executive-management',
    legacySlug: '/establishment-of-executive-management-system/',
    title: 'استقرار نظام مدیریت اجرایی',
    category: 'service',
    sourceFile: '08_after_sales_service_customer_satisfaction.md',
    summary: 'پیاده‌سازی سیستم‌های مدیریتی مدرن برای هدایت سازمان',
    showInNavigation: true,
    relatedServiceIds: ['executive-management'],
  },
  {
    id: 'after-sales',
    legacySlug: '/establishing-an-after-sales-service-system-and-measuring-customer-satisfaction/',
    title: 'استقرار نظام خدمات پس از فروش و سنجش رضایت مشتری',
    category: 'service',
    sourceFile: '09_video_lessons_index.md',
    summary: 'ایجاد سیستم خدمات پس از فروش و اندازه‌گیری رضایت مشتری',
    showInNavigation: true,
    relatedServiceIds: ['after-sales'],
  },
  {
    id: 'branding-process',
    legacySlug: '/designing-and-establishing-branding-processes/',
    title: 'طراحی و استقرار فرآیندهای برندینگ',
    category: 'service',
    sourceFile: '20_branding_process_design.md',
    summary: 'پیاده‌سازی سیستمی فرآیندهای برندسازی درونی و بیرونی',
    showInNavigation: true,
    relatedServiceIds: ['branding-process'],
  },
  {
    id: 'winning-strategy',
    legacySlug: '/design-a-winning-strategy/',
    title: 'طراحی استراتژی برنده',
    category: 'service',
    sourceFile: '22_SWOT_matrix_tool.md',
    summary: 'تدوین استراتژی‌های کلان سازمانی برای پیشتازی در بازار',
    showInNavigation: true,
    relatedServiceIds: ['winning-strategy'],
  },
  {
    id: 'sales-increase-system',
    legacySlug: '/establishing-a-system-to-increase-sales/',
    title: 'استقرار نظام افزایش فروش',
    category: 'service',
    sourceFile: '14_sales_increase_system.md',
    summary: 'سیستماتیزه کردن فرآیند فروش برای رشد پایدار',
    showInNavigation: true,
    relatedServiceIds: ['sales-increase-system'],
  },
  {
    id: 'productivity-improvement',
    legacySlug: '/establishing-a-system-to-increase-productivity/',
    title: 'استقرار نظام افزایش بهره‌وری',
    category: 'service',
    sourceFile: '16_productivity_improvement_system.md',
    summary: 'بهینه‌سازی فرآیندها برای افزایش بهره‌وری سازمانی',
    showInNavigation: true,
    relatedServiceIds: ['productivity-improvement'],
  },
  {
    id: 'hr-training',
    legacySlug: '/human-resource-training-and-organization/',
    title: 'آموزش منابع انسانی و سازماندهی',
    category: 'service',
    sourceFile: '17_hr_training_organization.md',
    summary: 'آموزش و سازماندهی منابع انسانی سازمان',
    showInNavigation: true,
    relatedServiceIds: ['human-resources'],
  },
  {
    id: 'video-lessons',
    legacySlug: '/video-lessons/',
    title: 'دروس ویدئویی تخصصی',
    category: 'service',
    sourceFile: '10_comprehensive_sales_guide.md',
    summary: 'مجموعه دروس ویدئویی تخصصی کسب‌وکار و فروش',
    showInNavigation: true,
    relatedServiceIds: ['video-lessons'],
  },

  // === ARTICLES & ARCHIVES ===
  {
    id: 'blog-index',
    legacySlug: '/blog/',
    title: 'مجله کسب‌وکار - فهرست مقالات',
    category: 'archive',
    sourceFile: '25_blog_index.md',
    summary: 'فهرست کامل مقالات و مطالب مجله تخصصی کسب‌وکار',
    showInNavigation: false,
    relatedServiceIds: [],
  },
  {
    id: 'articles-archive',
    legacySlug: '/test/',
    title: 'آرشیو مقالات',
    category: 'archive',
    sourceFile: '29_articles_archive.md',
    summary: 'آرشیو مقالات و مطالب تخصصی کسب‌وکار',
    showInNavigation: false,
    relatedServiceIds: [],
  },
  {
    id: 'comprehensive-sales-guide',
    legacySlug: '/test/',
    title: 'راهنمای جامع فروش',
    category: 'article',
    sourceFile: '10_comprehensive_sales_guide.md',
    summary: 'مقاله جامع درباره اصول و تکنیک‌های فروش حرفه‌ای',
    showInNavigation: false,
    relatedServiceIds: ['sales-growth'],
  },
  {
    id: 'how-to-sell-more',
    legacySlug: '/test/',
    title: 'چگونه بیشتر بفروشیم؟',
    category: 'article',
    sourceFile: '11_business_plan_design.md',
    summary: 'مقاله آموزشی درباره روش‌های افزایش فروش',
    showInNavigation: false,
    relatedServiceIds: ['sales-growth'],
  },

  // === SUPPORT & FRAGMENTS ===
  {
    id: 'contact-footer',
    legacySlug: '/contact/',
    title: 'اطلاعات تماس و فوتر',
    category: 'support',
    sourceFile: '12_contact_footer.md',
    summary: 'اطلاعات تماس و فوتر سایت قدیمی',
    showInNavigation: false,
    relatedServiceIds: [],
  },

  // === LEGACY NON-CORE PAGES ===
  {
    id: 'music-video',
    legacySlug: '/music-video/',
    title: 'خدمات موزیک ویدیو',
    category: 'legacy-other',
    sourceFile: '26_music_video_services.md',
    summary: 'صفحه خدمات موزیک ویدیوی استودیو زئوس (صفحه قدیمی)',
    showInNavigation: false,
    relatedServiceIds: [],
  },
  {
    id: 'modeling-studio',
    legacySlug: '/modeling/',
    title: 'استودیو مدلینگ',
    category: 'legacy-other',
    sourceFile: '27_modeling_studio.md',
    summary: 'صفحه استودیو مدلینگ (صفحه قدیمی)',
    showInNavigation: false,
    relatedServiceIds: [],
  },

  // === TEST & DUPLICATE ===
  {
    id: 'test-page',
    legacySlug: '/test/',
    title: 'صفحه تست',
    category: 'legacy-other',
    sourceFile: '23_test_page_content.md',
    summary: 'محتوای تست/تکراری - عمومی منتشر نشود',
    showInNavigation: false,
    relatedServiceIds: [],
  },

  // === UNCATEGORIZED ===
  {
    id: 'uncategorized-posts',
    legacySlug: '/blog/',
    title: 'پست‌های دسته‌بندی‌نشده',
    category: 'archive',
    sourceFile: '28_uncategorized_posts.md',
    summary: 'آرشیو پست‌های بدون دسته‌بندی',
    showInNavigation: false,
    relatedServiceIds: [],
  },
];
