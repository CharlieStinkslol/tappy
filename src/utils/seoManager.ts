import { useEffect } from 'react';

export interface SEOSettings {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonical?: string;
  robots?: string;
  author?: string;
  viewport?: string;
  themeColor?: string;
  customMeta?: Array<{
    name?: string;
    property?: string;
    content: string;
  }>;
  structuredData?: any;
}

export const defaultSEOSettings: SEOSettings = {
  title: 'TapDev - Professional Web Development Services',
  description: 'Professional WordPress development, website migrations, and comprehensive web services. Trusted by 500+ businesses across the UK.',
  keywords: 'wordpress development, website migration, web development, security services, speed optimisation',
  ogTitle: '',
  ogDescription: '',
  ogImage: '/og-image.jpg',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: '',
  twitterDescription: '',
  twitterImage: '',
  canonical: '',
  robots: 'index, follow',
  author: 'TapDev',
  viewport: 'width=device-width, initial-scale=1.0',
  themeColor: '#3b82f6',
  customMeta: [],
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TapDev",
    "description": "Professional web development services specializing in WordPress development, website migrations, and comprehensive web solutions.",
    "url": "https://tapdev.co.uk",
    "logo": "https://tapdev.co.uk/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+44-xxx-xxx-xxxx",
      "contactType": "customer service",
      "email": "hello@tapdev.co.uk"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "GB"
    },
    "sameAs": [
      "https://twitter.com/tapdev",
      "https://linkedin.com/company/tapdev"
    ]
  }
};

export const pageRoutes = [
  { path: '/', name: 'Home', component: 'HomePage' },
  { path: '/contact', name: 'Contact', component: 'ContactPage' },
  { path: '/about', name: 'About', component: 'About' },
  { path: '/portfolio', name: 'Portfolio', component: 'Portfolio' },
  { path: '/case-studies', name: 'Case Studies', component: 'CaseStudies' },
  { path: '/blog', name: 'Blog', component: 'Blog' },
  { path: '/services/website-migrations', name: 'Website Migrations', component: 'WebsiteMigrations' },
  { path: '/services/wordpress-development', name: 'WordPress Development', component: 'WordPressDevelopment' },
  { path: '/services/website-maintenance', name: 'Website Maintenance', component: 'WebsiteMaintenance' },
  { path: '/services/speed-optimization', name: 'Speed Optimisation', component: 'SpeedOptimization' },
  { path: '/services/security-services', name: 'Security Services', component: 'SecurityServices' },
  { path: '/services/wordpress-hosting', name: 'WordPress Hosting', component: 'WordPressHosting' },
  { path: '/services/website-redesign', name: 'Website Redesign', component: 'WebsiteRedesign' },
  { path: '/services/ecommerce-development', name: 'E-commerce Development', component: 'EcommerceDevelopment' },
  { path: '/services/local-seo', name: 'Local SEO', component: 'LocalSEO' },
  { path: '/services/website-audits', name: 'Website Audits', component: 'WebsiteAudits' },
  { path: '/services/wordpress-consultancy', name: 'WordPress Consultancy', component: 'WordPressConsultancy' },
  { path: '/services/wordpress-migration-services', name: 'WordPress Migration Services', component: 'WordPressMigrationServices' },
  { path: '/services/wordpress-support', name: 'WordPress Support', component: 'WordPressSupport' },
  { path: '/services/wordpress-training', name: 'WordPress Training', component: 'WordPressTraining' },
  { path: '/services/website-accessibility', name: 'Website Accessibility', component: 'WebsiteAccessibility' },
  { path: '/services/wordpress-backup-services', name: 'WordPress Backup Services', component: 'WordPressBackupServices' },
  { path: '/privacy', name: 'Privacy Policy', component: 'Privacy' },
  { path: '/terms', name: 'Terms of Service', component: 'Terms' },
  { path: '/cookies', name: 'Cookie Policy', component: 'Cookies' },
  { path: '/sitemap', name: 'Sitemap', component: 'Sitemap' },
  { path: '/xml-sitemap', name: 'XML Sitemap', component: 'XMLSitemap' },
  { path: '/blog-management', name: 'Blog Management', component: 'BlogManagement' }
];

export const getPageSEOSettings = (path: string): SEOSettings => {
  const stored = localStorage.getItem(`seo_${path}`);
  if (stored) {
    try {
      return { ...defaultSEOSettings, ...JSON.parse(stored) };
    } catch (e) {
      console.error('Error parsing SEO settings:', e);
    }
  }
  
  // Return page-specific defaults
  const pageDefaults = getPageSpecificDefaults(path);
  return { ...defaultSEOSettings, ...pageDefaults };
};

export const savePageSEOSettings = (path: string, settings: SEOSettings) => {
  localStorage.setItem(`seo_${path}`, JSON.stringify(settings));
  applyMetaTags(settings);
};

export const getPageSpecificDefaults = (path: string): Partial<SEOSettings> => {
  const defaults: Record<string, Partial<SEOSettings>> = {
    '/': {
      title: 'TapDev - Professional Web Development Services',
      description: 'Professional WordPress development, website migrations, and comprehensive web services. Trusted by 500+ businesses across the UK.',
      keywords: 'wordpress development, website migration, web development, professional web services'
    },
    '/contact': {
      title: 'Contact TapDev - Get Your Free Web Development Quote',
      description: 'Contact TapDev for professional web development services. Free consultations, competitive quotes, and expert WordPress solutions.',
      keywords: 'contact web developer, wordpress development quote, web development consultation'
    },
    '/about': {
      title: 'About TapDev - Expert Web Development Team',
      description: 'Learn about TapDev\'s experienced web development team. 10+ years of expertise in WordPress, migrations, and web solutions.',
      keywords: 'web development team, wordpress experts, professional web developers'
    },
    '/portfolio': {
      title: 'TapDev Portfolio - Web Development Success Stories',
      description: 'Explore TapDev\'s portfolio of successful web development projects. See how we\'ve helped 500+ businesses transform their online presence.',
      keywords: 'web development portfolio, wordpress projects, website examples'
    },
    '/case-studies': {
      title: 'Case Studies - Real Web Development Results',
      description: 'Detailed case studies showing real results from TapDev\'s web development projects. See measurable improvements in performance and conversions.',
      keywords: 'web development case studies, wordpress success stories, website performance results'
    },
    '/blog': {
      title: 'Web Development Blog - Expert Insights & Tutorials',
      description: 'Expert web development insights, WordPress tutorials, and industry updates from TapDev\'s experienced team.',
      keywords: 'web development blog, wordpress tutorials, web development tips'
    },
    '/services/website-migrations': {
      title: 'Website Migration Services - Zero Downtime Guaranteed',
      description: 'Professional website migration services with zero downtime guarantee. Preserve SEO rankings and improve performance.',
      keywords: 'website migration, wordpress migration, zero downtime migration, seo preservation'
    },
    '/services/wordpress-development': {
      title: 'WordPress Development Services - Custom Solutions',
      description: 'Custom WordPress development services including themes, plugins, and e-commerce solutions. Expert WordPress developers.',
      keywords: 'wordpress development, custom wordpress, wordpress themes, woocommerce development'
    },
    '/services/website-maintenance': {
      title: 'WordPress Maintenance Services - 24/7 Support',
      description: 'Professional WordPress maintenance services with 24/7 monitoring, security updates, and performance optimisation.',
      keywords: 'wordpress maintenance, website maintenance, wordpress support, security updates'
    },
    '/services/speed-optimization': {
      title: 'Website Speed Optimisation - 300% Performance Boost',
      description: 'Professional website speed optimisation services. Boost performance by up to 300% with advanced optimisation techniques.',
      keywords: 'website speed optimisation, performance optimisation, page speed improvement, core web vitals'
    },
    '/services/security-services': {
      title: 'WordPress Security Services - Advanced Protection',
      description: 'Comprehensive WordPress security services with malware protection, monitoring, and advanced threat prevention.',
      keywords: 'wordpress security, website security, malware protection, security monitoring'
    },
    '/services/wordpress-hosting': {
      title: 'Managed WordPress Hosting - UK-Based Servers',
      description: 'Lightning-fast managed WordPress hosting with UK servers, enterprise security, and expert support for British businesses.',
      keywords: 'wordpress hosting, managed hosting, uk servers, fast wordpress hosting'
    },
    '/services/website-redesign': {
      title: 'Website Redesign Services - Modern Web Design',
      description: 'Professional website redesign services that modernise your brand, improve user experience, and drive business results.',
      keywords: 'website redesign, web design, website makeover, modern web design'
    },
    '/services/ecommerce-development': {
      title: 'E-commerce Development - Online Store Solutions',
      description: 'Professional e-commerce development services creating powerful online stores that drive sales and scale with your business.',
      keywords: 'ecommerce development, online store, woocommerce, shopify development'
    },
    '/services/local-seo': {
      title: 'Local SEO Services - Dominate Local Search',
      description: 'Professional local SEO services that help UK businesses rank higher in local search results and attract more customers.',
      keywords: 'local seo, local search optimisation, google my business, local rankings'
    },
    '/services/website-audits': {
      title: 'Website Audit Services - Comprehensive Analysis',
      description: 'Professional website audits that identify issues, uncover opportunities, and provide actionable recommendations for improvement.',
      keywords: 'website audit, seo audit, performance audit, security audit'
    },
    '/services/wordpress-consultancy': {
      title: 'WordPress Consultancy Services - Strategic Expertise for UK Businesses',
      description: 'Expert WordPress consulting services that help UK businesses make strategic decisions and maximise their digital investment.',
      keywords: 'wordpress consultancy, wordpress consulting, strategic planning, technical architecture'
    },
    '/services/wordpress-migration-services': {
      title: 'WordPress Migration Services - Platform Migration Experts',
      description: 'Professional WordPress migration services from any platform with zero data loss and improved performance.',
      keywords: 'wordpress migration, platform migration, website migration, cms migration'
    },
    '/services/wordpress-support': {
      title: 'WordPress Support Services - Expert Help When You Need It',
      description: 'Professional WordPress support services for UK businesses with emergency response and ongoing maintenance.',
      keywords: 'wordpress support, technical support, emergency support, wordpress help'
    },
    '/services/wordpress-training': {
      title: 'WordPress Training - Expert Skills for UK Teams',
      description: 'Professional WordPress training courses for UK businesses from beginner basics to advanced development.',
      keywords: 'wordpress training, wordpress courses, team training, wordpress education'
    },
    '/services/website-accessibility': {
      title: 'Website Accessibility Services - Inclusive Design for All Users',
      description: 'Professional website accessibility services ensuring WCAG compliance and inclusive design for UK businesses.',
      keywords: 'website accessibility, wcag compliance, inclusive design, disability access'
    },
    '/services/wordpress-backup-services': {
      title: 'WordPress Backup Services - Protect Your Digital Assets',
      description: 'Professional WordPress backup services with automated backups, secure storage, and rapid restoration.',
      keywords: 'wordpress backups, website backup, data protection, disaster recovery'
    },
    '/services/website-development': {
      title: 'Professional Website Development Services - Custom Solutions',
      description: 'Expert website development services including WordPress, React, and bespoke solutions for UK businesses.',
      keywords: 'website development, custom websites, professional web development, uk web developers'
    },
    '/services/managed-website-hosting': {
      title: 'Managed Website Hosting - UK Servers with Expert Support',
      description: 'Fully managed website hosting with UK servers, enterprise security, and expert support for British businesses.',
      keywords: 'managed hosting, uk servers, website hosting, professional hosting'
    },
    '/services': {
      title: 'Professional Web Development Services - Complete Solutions',
      description: 'Comprehensive web development services for UK businesses. From websites to hosting, security to speed optimisation.',
      keywords: 'web development services, uk web development, professional web services'
    },
    '/xml-sitemap': {
      title: 'XML Sitemap - Search Engine Optimisation',
      description: 'Complete XML sitemap for search engine crawling and indexing optimisation. Download for Google Search Console submission.',
      keywords: 'xml sitemap, search console, seo, website crawling'
    },
    '/blog-management': {
      title: 'Blog Management System - Content Administration',
      description: 'Professional blog management system for creating, editing, and optimising blog content with full SEO control.',
      keywords: 'blog management, content management, blog admin, cms'
    }
  };

  return defaults[path] || {};
};

export const applyMetaTags = (settings: SEOSettings) => {
  // Update document title
  if (settings.title) {
    document.title = settings.title;
  }

  // Helper function to update or create meta tags
  const updateMetaTag = (selector: string, content: string) => {
    let meta = document.querySelector(selector) as HTMLMetaElement;
    if (!meta) {
      meta = document.createElement('meta');
      if (selector.includes('name=')) {
        meta.name = selector.match(/name="([^"]*)"/)![1];
      } else if (selector.includes('property=')) {
        meta.property = selector.match(/property="([^"]*)"/)![1];
      }
      document.head.appendChild(meta);
    }
    meta.content = content;
  };

  // Update basic meta tags
  if (settings.description) {
    updateMetaTag('meta[name="description"]', settings.description);
  }
  
  if (settings.keywords) {
    updateMetaTag('meta[name="keywords"]', settings.keywords);
  }

  if (settings.author) {
    updateMetaTag('meta[name="author"]', settings.author);
  }

  if (settings.robots) {
    updateMetaTag('meta[name="robots"]', settings.robots);
  }

  if (settings.viewport) {
    updateMetaTag('meta[name="viewport"]', settings.viewport);
  }

  if (settings.themeColor) {
    updateMetaTag('meta[name="theme-color"]', settings.themeColor);
  }

  // Update Open Graph tags
  if (settings.ogTitle || settings.title) {
    updateMetaTag('meta[property="og:title"]', settings.ogTitle || settings.title || '');
  }

  if (settings.ogDescription || settings.description) {
    updateMetaTag('meta[property="og:description"]', settings.ogDescription || settings.description || '');
  }

  if (settings.ogImage) {
    updateMetaTag('meta[property="og:image"]', settings.ogImage);
  }

  if (settings.ogType) {
    updateMetaTag('meta[property="og:type"]', settings.ogType);
  }

  updateMetaTag('meta[property="og:url"]', window.location.href);

  // Update Twitter Card tags
  if (settings.twitterCard) {
    updateMetaTag('meta[name="twitter:card"]', settings.twitterCard);
  }

  if (settings.twitterTitle || settings.title) {
    updateMetaTag('meta[name="twitter:title"]', settings.twitterTitle || settings.title || '');
  }

  if (settings.twitterDescription || settings.description) {
    updateMetaTag('meta[name="twitter:description"]', settings.twitterDescription || settings.description || '');
  }

  if (settings.twitterImage || settings.ogImage) {
    updateMetaTag('meta[name="twitter:image"]', settings.twitterImage || settings.ogImage || '');
  }

  // Update canonical URL
  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = settings.canonical || window.location.href;

  // Update custom meta tags
  if (settings.customMeta) {
    settings.customMeta.forEach((meta, index) => {
      if (meta.name) {
        updateMetaTag(`meta[name="${meta.name}"]`, meta.content);
      } else if (meta.property) {
        updateMetaTag(`meta[property="${meta.property}"]`, meta.content);
      }
    });
  }

  // Update structured data
  if (settings.structuredData) {
    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(settings.structuredData);
  }
};

export const useSEO = (path: string) => {
  useEffect(() => {
    const settings = getPageSEOSettings(path);
    applyMetaTags(settings);
  }, [path]);
};