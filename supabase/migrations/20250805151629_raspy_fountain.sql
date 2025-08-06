/*
  # Seed Default Data

  1. Portfolio Projects
    - Add sample portfolio projects
  
  2. Service Pages
    - Add default service pages
    
  3. Blog Posts
    - Add sample blog posts
*/

-- Insert default portfolio projects
INSERT INTO portfolio_projects (
  title, category, client, description, image, technologies, results, features, url, testimonial, timeline, enabled, display_order
) VALUES 
(
  'Premium Fashion E-commerce Platform',
  'ecommerce',
  'Luxury Fashion Retailer',
  'Complete WooCommerce solution with advanced product filtering, wishlist functionality, and optimised checkout process for a premium fashion brand.',
  'fashion-ecommerce-platform',
  ARRAY['WordPress', 'WooCommerce', 'Custom PHP', 'React', 'Payment APIs'],
  '{"Sales Increase": "+250% within first month", "Page Load Speed": "70% faster loading times", "Mobile Conversions": "+180% mobile sales", "Cart Abandonment": "-45% reduction"}'::jsonb,
  ARRAY['Advanced Product Filtering', 'Wishlist & Favourites', 'Multi-Currency Support', 'Inventory Management', 'Customer Reviews', 'Social Media Integration'],
  '#',
  'The new e-commerce platform has completely transformed our online business. Sales have more than doubled and our customers love the seamless shopping experience.',
  '8 weeks',
  true,
  1
),
(
  'Professional Legal Services Portal',
  'business',
  'Leading UK Law Firm',
  'Comprehensive legal services website with secure client portal, document management system, and appointment booking functionality.',
  'legal-services-portal',
  ARRAY['WordPress', 'Custom Plugins', 'Member System', 'Payment Gateway', 'Document Management'],
  '{"Lead Generation": "+200% more enquiries", "Admin Efficiency": "80% time savings", "Client Satisfaction": "95% satisfaction rate", "Case Management": "60% faster processing"}'::jsonb,
  ARRAY['Secure Client Portal', 'Document Management', 'Appointment Booking', 'Case Tracking', 'Secure Communications', 'Billing Integration'],
  '#',
  'The client portal has revolutionised how we manage client relationships. Our efficiency has improved dramatically and clients love the convenience.',
  '10 weeks',
  true,
  2
),
(
  'Healthcare Provider Network',
  'healthcare',
  'Regional Medical Centre',
  'HIPAA-compliant healthcare platform with patient portal, telemedicine integration, and appointment management system.',
  'healthcare-network',
  ARRAY['WordPress', 'HIPAA Compliance', 'Telemedicine API', 'Patient Portal', 'Security Systems'],
  '{"Patient Satisfaction": "+85% improvement", "Online Appointments": "+200% bookings", "Admin Efficiency": "60% reduction in calls", "Telehealth Usage": "500+ monthly consultations"}'::jsonb,
  ARRAY['HIPAA-Compliant Portal', 'Telemedicine Integration', 'Appointment Booking', 'Medical Records Access', 'Prescription Management', 'Secure Messaging'],
  '#',
  'The platform has transformed how we deliver healthcare. Patients love the convenience and we have significantly improved our operational efficiency.',
  '12 weeks',
  true,
  3
),
(
  'Charity Fundraising Platform',
  'nonprofit',
  'Children''s Education Charity',
  'Engaging charity website with integrated donation platform, volunteer management, and impact tracking system.',
  'charity-platform',
  ARRAY['WordPress', 'Donation System', 'Event Management', 'Social Integration', 'Analytics'],
  '{"Donations": "+400% increase", "Volunteer Signups": "+250% growth", "Social Engagement": "+300% reach", "Event Attendance": "+260% increase"}'::jsonb,
  ARRAY['Donation System', 'Volunteer Portal', 'Event Management', 'Impact Dashboard', 'Social Integration', 'Newsletter Automation'],
  '#',
  'The impact has been extraordinary. We have raised more funds this year than in the previous three years combined.',
  '6 weeks',
  true,
  4
) ON CONFLICT DO NOTHING;

-- Insert default service pages
INSERT INTO service_pages (
  slug, title, subtitle, description, hero_image, sections, enabled, featured, display_order
) VALUES 
(
  'website-migrations',
  'Website Migrations',
  'Seamless website transfers with zero downtime guarantee',
  'Professional website migration services that preserve your SEO rankings, ensure zero data loss, and deliver improved performance on modern hosting platforms.',
  'migration-hero',
  '[{"id": "hero", "type": "hero", "title": "Website Migrations Done Right", "content": {"subtitle": "Zero downtime guaranteed", "description": "Professional website migration services that preserve your SEO rankings, ensure zero data loss, and deliver improved performance.", "features": ["Zero downtime guarantee", "SEO preservation", "Performance boost", "500+ successful migrations"]}, "enabled": true, "display_order": 1}]'::jsonb,
  true,
  true,
  1
),
(
  'wordpress-development',
  'WordPress Development',
  'Custom WordPress solutions that drive business growth',
  'Expert WordPress development services including custom themes, plugins, and e-commerce solutions built for performance and scalability.',
  'wordpress-development',
  '[{"id": "hero", "type": "hero", "title": "WordPress Development That Drives Growth", "content": {"subtitle": "Custom solutions for every business", "description": "From simple websites to complex applications, we deliver WordPress solutions that scale with your business.", "features": ["Custom themes & plugins", "E-commerce solutions", "API integrations", "Performance optimised"]}, "enabled": true, "display_order": 1}]'::jsonb,
  true,
  true,
  2
),
(
  'website-maintenance',
  'Website Maintenance',
  '24/7 monitoring and maintenance services',
  'Comprehensive WordPress maintenance services with security monitoring, performance optimisation, and regular updates to keep your website running smoothly.',
  'maintenance-services',
  '[{"id": "hero", "type": "hero", "title": "Website Maintenance That Protects Your Business", "content": {"subtitle": "24/7 monitoring and support", "description": "Professional maintenance services that keep your website secure, fast, and running smoothly.", "features": ["24/7 monitoring", "Security updates", "Performance optimisation", "Expert support"]}, "enabled": true, "display_order": 1}]'::jsonb,
  true,
  true,
  3
) ON CONFLICT (slug) DO NOTHING;

-- Insert sample blog posts
INSERT INTO blog_posts (
  title, slug, excerpt, content, author, category, tags, featured_image, status, published_at
) VALUES 
(
  'WordPress Security Best Practices for UK Businesses in 2024',
  'wordpress-security-best-practices-uk-businesses-2024',
  'Comprehensive guide to securing your WordPress website against cyber threats, with specific focus on UK GDPR compliance and data protection requirements.',
  'WordPress powers over 43% of all websites globally, making it a prime target for cybercriminals...',
  'James Mitchell',
  'Website Security',
  ARRAY['WordPress Security', 'GDPR', 'UK Business', 'Cyber Security', 'Data Protection'],
  'wordpress-security-guide',
  'published',
  '2024-01-15T10:00:00Z'
),
(
  'How to Improve Website Speed: Complete UK Business Guide',
  'improve-website-speed-complete-uk-business-guide',
  'Practical guide to boosting your website speed by 300% with proven techniques. Improve Google rankings, user experience, and conversions for UK businesses.',
  'Website speed directly impacts your business success. Studies show that 53% of mobile users abandon sites that take longer than 3 seconds to load...',
  'Sarah Thompson',
  'Performance Optimisation',
  ARRAY['Website Speed', 'Core Web Vitals', 'Performance', 'UK Business', 'SEO'],
  'website-speed-guide',
  'published',
  '2024-01-12T09:00:00Z'
) ON CONFLICT (slug) DO NOTHING;