/*
  # Initial Database Schema for TapDev Website

  1. New Tables
    - `contact_forms` - Store contact form submissions
    - `newsletter_subscribers` - Store newsletter subscriptions  
    - `blog_posts` - Store blog content
    - `portfolio_projects` - Store portfolio items
    - `service_pages` - Store service page content
    - `homepage_content` - Store homepage configuration
    - `seo_settings` - Store SEO configuration per page

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated admin access
    - Public read access for published content
*/

-- Contact Forms Table
CREATE TABLE IF NOT EXISTS contact_forms (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text DEFAULT '',
  service text DEFAULT '',
  message text NOT NULL,
  budget text DEFAULT '',
  status text DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'completed')),
  notes text DEFAULT '',
  submitted_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE contact_forms ENABLE ROW LEVEL SECURITY;

-- Newsletter Subscribers Table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  status text DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed')),
  subscribed_at timestamptz DEFAULT now()
);

ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Blog Posts Table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  author text NOT NULL,
  category text NOT NULL,
  tags text[] DEFAULT '{}',
  featured_image text DEFAULT '',
  status text DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  seo_title text DEFAULT '',
  seo_description text DEFAULT '',
  seo_keywords text DEFAULT '',
  og_image text DEFAULT '',
  published_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Portfolio Projects Table
CREATE TABLE IF NOT EXISTS portfolio_projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  category text NOT NULL,
  client text NOT NULL,
  description text NOT NULL,
  image text DEFAULT '',
  technologies text[] DEFAULT '{}',
  results jsonb DEFAULT '{}',
  features text[] DEFAULT '{}',
  url text DEFAULT '',
  testimonial text DEFAULT '',
  timeline text DEFAULT '',
  enabled boolean DEFAULT true,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE portfolio_projects ENABLE ROW LEVEL SECURITY;

-- Service Pages Table
CREATE TABLE IF NOT EXISTS service_pages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  subtitle text DEFAULT '',
  description text DEFAULT '',
  hero_image text DEFAULT '',
  sections jsonb DEFAULT '[]',
  enabled boolean DEFAULT true,
  featured boolean DEFAULT false,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE service_pages ENABLE ROW LEVEL SECURITY;

-- Homepage Content Table
CREATE TABLE IF NOT EXISTS homepage_content (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  hero_title text DEFAULT '',
  hero_subtitle text DEFAULT '',
  hero_description text DEFAULT '',
  hero_primary_button_text text DEFAULT '',
  hero_primary_button_link text DEFAULT '',
  hero_secondary_button_text text DEFAULT '',
  hero_secondary_button_link text DEFAULT '',
  stats jsonb DEFAULT '[]',
  services_title text DEFAULT '',
  services_description text DEFAULT '',
  featured_services text[] DEFAULT '{}',
  testimonials jsonb DEFAULT '[]',
  cta_title text DEFAULT '',
  cta_description text DEFAULT '',
  cta_primary_button_text text DEFAULT '',
  cta_primary_button_link text DEFAULT '',
  cta_secondary_button_text text DEFAULT '',
  cta_secondary_button_link text DEFAULT '',
  social_links jsonb DEFAULT '[]',
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE homepage_content ENABLE ROW LEVEL SECURITY;

-- SEO Settings Table
CREATE TABLE IF NOT EXISTS seo_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  page_path text UNIQUE NOT NULL,
  title text DEFAULT '',
  description text DEFAULT '',
  keywords text DEFAULT '',
  og_title text DEFAULT '',
  og_description text DEFAULT '',
  og_image text DEFAULT '',
  og_type text DEFAULT 'website',
  twitter_card text DEFAULT 'summary_large_image',
  twitter_title text DEFAULT '',
  twitter_description text DEFAULT '',
  twitter_image text DEFAULT '',
  canonical text DEFAULT '',
  robots text DEFAULT 'index, follow',
  author text DEFAULT '',
  custom_meta jsonb DEFAULT '[]',
  structured_data jsonb DEFAULT '{}',
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE seo_settings ENABLE ROW LEVEL SECURITY;

-- RLS Policies for Admin Access
CREATE POLICY "Admin can manage contact forms"
  ON contact_forms
  FOR ALL
  TO authenticated
  USING (true);

CREATE POLICY "Admin can manage newsletter subscribers"
  ON newsletter_subscribers
  FOR ALL
  TO authenticated
  USING (true);

CREATE POLICY "Admin can manage blog posts"
  ON blog_posts
  FOR ALL
  TO authenticated
  USING (true);

CREATE POLICY "Public can read published blog posts"
  ON blog_posts
  FOR SELECT
  TO anon
  USING (status = 'published');

CREATE POLICY "Admin can manage portfolio projects"
  ON portfolio_projects
  FOR ALL
  TO authenticated
  USING (true);

CREATE POLICY "Public can read enabled portfolio projects"
  ON portfolio_projects
  FOR SELECT
  TO anon
  USING (enabled = true);

CREATE POLICY "Admin can manage service pages"
  ON service_pages
  FOR ALL
  TO authenticated
  USING (true);

CREATE POLICY "Public can read enabled service pages"
  ON service_pages
  FOR SELECT
  TO anon
  USING (enabled = true);

CREATE POLICY "Admin can manage homepage content"
  ON homepage_content
  FOR ALL
  TO authenticated
  USING (true);

CREATE POLICY "Public can read homepage content"
  ON homepage_content
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Admin can manage SEO settings"
  ON seo_settings
  FOR ALL
  TO authenticated
  USING (true);

CREATE POLICY "Public can read SEO settings"
  ON seo_settings
  FOR SELECT
  TO anon
  USING (true);

-- Insert default homepage content
INSERT INTO homepage_content (
  hero_title,
  hero_subtitle,
  hero_description,
  hero_primary_button_text,
  hero_primary_button_link,
  hero_secondary_button_text,
  hero_secondary_button_link,
  stats,
  services_title,
  services_description,
  featured_services,
  testimonials,
  cta_title,
  cta_description,
  cta_primary_button_text,
  cta_primary_button_link,
  cta_secondary_button_text,
  cta_secondary_button_link,
  social_links
) VALUES (
  'Professional Web Development Services',
  'Transform Your Online Presence',
  'Expert WordPress development, seamless migrations, and comprehensive maintenance services trusted by 500+ businesses across the UK. We deliver solutions that drive real results.',
  'Start Your Project',
  '/contact',
  'View Our Work',
  '/portfolio',
  '[
    {"number": "500+", "label": "Websites Delivered", "icon": "Globe"},
    {"number": "10+", "label": "Years Experience", "icon": "Clock"},
    {"number": "100%", "label": "Client Satisfaction", "icon": "Star"},
    {"number": "300%", "label": "Average Speed Boost", "icon": "Zap"}
  ]'::jsonb,
  'Our Expert Services',
  'Comprehensive web development solutions designed to grow your business and exceed your expectations with proven results.',
  ARRAY['website-migrations', 'wordpress-development', 'website-maintenance', 'speed-optimization', 'security-services', 'wordpress-hosting'],
  '[]'::jsonb,
  'Ready to Transform Your Website?',
  'Join hundreds of satisfied clients who have transformed their online presence with our expert web development services. Get started with a free consultation today.',
  'Get Free Consultation',
  '/contact',
  'View Portfolio',
  '/portfolio',
  '[
    {"platform": "Facebook", "url": "https://facebook.com/tapdev", "enabled": true},
    {"platform": "Twitter", "url": "https://twitter.com/tapdev", "enabled": true},
    {"platform": "LinkedIn", "url": "https://linkedin.com/company/tapdev", "enabled": true},
    {"platform": "Instagram", "url": "https://instagram.com/tapdev", "enabled": true},
    {"platform": "YouTube", "url": "https://youtube.com/tapdev", "enabled": false}
  ]'::jsonb
) ON CONFLICT DO NOTHING;