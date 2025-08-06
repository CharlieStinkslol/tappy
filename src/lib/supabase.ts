import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface ContactForm {
  id: string;
  name: string;
  email: string;
  company?: string;
  service?: string;
  message: string;
  budget?: string;
  status: 'new' | 'contacted' | 'completed';
  notes?: string;
  submitted_at: string;
  updated_at: string;
}

export interface NewsletterSubscriber {
  id: string;
  email: string;
  status: 'active' | 'unsubscribed';
  subscribed_at: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  tags: string[];
  featured_image: string;
  status: 'draft' | 'published';
  seo_title?: string;
  seo_description?: string;
  seo_keywords?: string;
  og_image?: string;
  published_at: string;
  created_at: string;
  updated_at: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  client: string;
  description: string;
  image: string;
  technologies: string[];
  results: Record<string, string>;
  features: string[];
  url: string;
  testimonial: string;
  timeline: string;
  enabled: boolean;
  display_order: number;
  created_at: string;
  updated_at: string;
}

export interface ServicePage {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  hero_image: string;
  sections: any[];
  enabled: boolean;
  featured: boolean;
  display_order: number;
  created_at: string;
  updated_at: string;
}

export interface HomepageContent {
  id: string;
  hero_title: string;
  hero_subtitle: string;
  hero_description: string;
  hero_primary_button_text: string;
  hero_primary_button_link: string;
  hero_secondary_button_text: string;
  hero_secondary_button_link: string;
  stats: any[];
  services_title: string;
  services_description: string;
  featured_services: string[];
  testimonials: any[];
  cta_title: string;
  cta_description: string;
  cta_primary_button_text: string;
  cta_primary_button_link: string;
  cta_secondary_button_text: string;
  cta_secondary_button_link: string;
  social_links: any[];
  updated_at: string;
}

export interface SEOSetting {
  id: string;
  page_path: string;
  title: string;
  description: string;
  keywords: string;
  og_title?: string;
  og_description?: string;
  og_image?: string;
  og_type: string;
  twitter_card: string;
  twitter_title?: string;
  twitter_description?: string;
  twitter_image?: string;
  canonical?: string;
  robots: string;
  author: string;
  custom_meta: any[];
  structured_data: any;
  updated_at: string;
}