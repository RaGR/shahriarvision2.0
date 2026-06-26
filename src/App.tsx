/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import ServicesOverviewView from './components/ServicesOverviewView';
import ServiceDetailView from './components/ServiceDetailView';
import BlogView from './components/BlogView';
import ContactView from './components/ContactView';
import ConsultationRequestView from './components/ConsultationRequestView';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  // Auto-scroll to top whenever page shifts to provide excellent UX
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [currentPage]);

  const handlePageChange = (pageId: string) => {
    // If navigating to service general list, reset blog post
    if (pageId !== 'blog_list') {
      setSelectedPostId(null);
    }
    setCurrentPage(pageId);
  };

  const handlePostSelect = (postId: string | null) => {
    setSelectedPostId(postId);
    if (postId) {
      setCurrentPage('blog_list');
    }
  };

  // Render the active view based on state
  const renderActiveView = () => {
    switch (currentPage) {
      case 'home':
        return <HomeView onPageChange={handlePageChange} onPostSelect={handlePostSelect} />;
      case 'about':
        return <AboutView onPageChange={handlePageChange} />;
      case 'services_overview':
        return <ServicesOverviewView onPageChange={handlePageChange} />;

      // === ORIGINAL 9 SERVICES ===
      case 'branding':
      case 'business_plan':
      case 'swot':
      case 'org_chart':
      case 'crm':
      case 'erp':
      case 'hr':
      case 'sales_growth':
      case 'digital_marketing':
      // === NEW LEGACY SERVICES ===
      case 'business_startup_advice':
      case 'business_development':
      case 'marketing_campaigns':
      case 'sales_campaigns':
      case 'organizational_diagnosis':
      case 'executive_management':
      case 'after_sales':
      case 'sales_increase_system':
      case 'productivity_improvement':
      case 'winning_strategy':
      case 'branding_process':
      case 'video_lessons':
        return <ServiceDetailView serviceId={currentPage} onPageChange={handlePageChange} />;

      case 'blog_list':
      case 'blog_single':
        return (
          <BlogView
            selectedPostId={selectedPostId}
            onPostSelect={handlePostSelect}
            onPageChange={handlePageChange}
          />
        );
      case 'contact':
        return <ContactView />;
      case 'consultation_request':
        return <ConsultationRequestView />;
      default:
        return <HomeView onPageChange={handlePageChange} onPostSelect={handlePostSelect} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfdfd] text-slate-900 select-none">

      {/* 1. Global Navigation Bar */}
      <Navbar currentPage={currentPage} onPageChange={handlePageChange} />

      {/* 2. Main Page Content (Faded transition helper classes) with elegant top offset spacer */}
      <main className="flex-grow pt-24 sm:pt-28 lg:pt-32 animate-fade-in relative">
        {renderActiveView()}
      </main>

      {/* 3. Global Elegant Footer */}
      <Footer onPageChange={handlePageChange} />

    </div>
  );
}
