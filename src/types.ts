/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  problemStatement: string;
  whyItMatters: string;
  benefits: string[];
  process: { step: number; title: string; description: string }[];
  deliverables: string[];
  faqs: { question: string; answer: string }[];
  iconName: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  author: string;
  seoTitle: string;
  seoDescription: string;
}

export interface ConsultationRequest {
  id?: string;
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  businessStage: 'launch' | 'growth';
  businessSize: string;
  primaryChallenge: string;
  servicesNeeded: string[];
  description: string;
  createdAt: string;
}

export interface ContactMessage {
  id?: string;
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
}
