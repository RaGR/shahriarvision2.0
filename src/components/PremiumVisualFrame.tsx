/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import SkyBlueAbstractGraphic from './SkyBlueAbstractGraphic';
import { asset } from '../lib/paths';

interface PremiumVisualFrameProps {
  src: string;
  alt: string;
  fallbackPreset: 'branding' | 'org-chart' | 'crm' | 'erp' | 'business-plan' | 'swot' | 'human-resources' | 'sales-growth' | 'digital-marketing' | 'general';
  className?: string;
  overlayLabel?: string;
  aspectClass?: string;
}

const STOCK_IMAGES_FALLBACK: Record<string, string> = {
  '/input_file_0.png': asset('/assets/final/hero/home-hero-shahriar-vision.webp'),
  '/input_file_1.png': asset('/assets/final/brand/logo-primary.png'),
  '/input_file_2.png': asset('/assets/final/people/founder-desk-consultation.webp'),
  '/input_file_3.png': asset('/assets/final/people/founder-desk-consultation.webp'),
  '/input_file_4.png': asset('/assets/final/people/founder-standing-cactus-dark-suit.webp'),
  '/input_file_5.png': asset('/assets/final/people/founder-lounge-strategy.webp'),
  '/input_file_6.png': asset('/assets/final/backgrounds/footer-contact-background.webp'),
};

export default function PremiumVisualFrame({
  src,
  alt,
  fallbackPreset,
  className = '',
  overlayLabel,
  aspectClass = 'aspect-3/4'
}: PremiumVisualFrameProps) {
  const [hasError, setHasError] = useState(false);
  const [displaySrc, setDisplaySrc] = useState(() => asset(src));

  const handleImageError = () => {
    const fallback = STOCK_IMAGES_FALLBACK[src];
    if (fallback && displaySrc !== fallback) {
      setDisplaySrc(fallback);
    } else {
      setHasError(true);
    }
  };

  return (
    <div className={`relative border border-sky-100 rounded-3xl overflow-hidden shadow-xl bg-white transition-all duration-300 group ${aspectClass} ${className}`}>
      {hasError ? (
        <div className="w-full h-full min-h-[280px]">
          <SkyBlueAbstractGraphic 
            preset={fallbackPreset} 
            className="w-full h-full border-none rounded-none bg-gradient-to-br from-white to-sky-50/50" 
          />
        </div>
      ) : (
        <div className="relative w-full h-full overflow-hidden">
          {/* Subtle premium glass glow background */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0ea5e9]/10 to-transparent pointer-events-none" />
          
          <img 
            src={displaySrc} 
            alt={alt} 
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-700 ease-out"
            referrerPolicy="no-referrer"
            onError={handleImageError}
          />
          
          {/* Dynamic sky-blue/orange subtle accent gradient mask */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          
          {overlayLabel && (
            <div className="absolute bottom-4 left-4 right-4 bg-slate-950/85 backdrop-blur-md text-white px-3 py-2 border border-sky-500/10 rounded-xl text-center shadow-lg pointer-events-none">
              <span className="text-[#7dd3fc] font-bold block text-[11px] mb-0.5">{overlayLabel}</span>
              <span className="text-[9px] text-gray-400 block font-light">مجموعه هدایت توسعه شهریار ویژن</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
