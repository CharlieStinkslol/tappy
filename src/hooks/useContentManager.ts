import { useState, useEffect } from 'react';
import { useSupabaseData } from './useSupabaseData';

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
}

export interface ServicePage {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  sections: ServiceSection[];
  enabled: boolean;
  featured: boolean;
  display_order: number;
}

export interface ServiceSection {
  id: string;
  type: 'hero' | 'features' | 'benefits' | 'process' | 'testimonials' | 'cta' | 'stats' | 'comparison';
  title: string;
  content: any;
  enabled: boolean;
  display_order: number;
}

export interface HomePage {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    primaryButton: { text: string; link: string };
    secondaryButton: { text: string; link: string };
  };
  stats: Array<{
    number: string;
    label: string;
    icon: string;
  }>;
  services: {
    title: string;
    description: string;
    featured: string[];
  };
  testimonials: Array<{
    name: string;
    company: string;
    content: string;
    rating: number;
  }>;
  cta: {
    title: string;
    description: string;
    primaryButton: { text: string; link: string };
    secondaryButton: { text: string; link: string };
  };
  socialLinks: Array<{
    platform: string;
    url: string;
    enabled: boolean;
  }>;
}

export const useContentManager = () => {
  const { 
    portfolioProjects, 
    servicePages, 
    homePage,
    createPortfolioProject,
    updatePortfolioProject,
    deletePortfolioProject,
    createServicePage,
    updateServicePage,
    deleteServicePage,
    updateHomePage
  } = useSupabaseData();

  // Convert homePage to match the expected format
  const convertedHomePage: HomePage | null = homePage ? {
    hero: {
      title: homePage.hero_title,
      subtitle: homePage.hero_subtitle,
      description: homePage.hero_description,
      primaryButton: { 
        text: homePage.hero_primary_button_text, 
        link: homePage.hero_primary_button_link 
      },
      secondaryButton: { 
        text: homePage.hero_secondary_button_text, 
        link: homePage.hero_secondary_button_link 
      }
    },
    stats: homePage.stats || [],
    services: {
      title: homePage.services_title,
      description: homePage.services_description,
      featured: homePage.featured_services || []
    },
    testimonials: homePage.testimonials || [],
    cta: {
      title: homePage.cta_title,
      description: homePage.cta_description,
      primaryButton: { 
        text: homePage.cta_primary_button_text, 
        link: homePage.cta_primary_button_link 
      },
      secondaryButton: { 
        text: homePage.cta_secondary_button_text, 
        link: homePage.cta_secondary_button_link 
      }
    },
    socialLinks: homePage.social_links || []
  } : null;

  const saveHomePage = async (homepage: HomePage) => {
    await updateHomePage({
      hero_title: homepage.hero.title,
      hero_subtitle: homepage.hero.subtitle,
      hero_description: homepage.hero.description,
      hero_primary_button_text: homepage.hero.primaryButton.text,
      hero_primary_button_link: homepage.hero.primaryButton.link,
      hero_secondary_button_text: homepage.hero.secondaryButton.text,
      hero_secondary_button_link: homepage.hero.secondaryButton.link,
      stats: homepage.stats,
      services_title: homepage.services.title,
      services_description: homepage.services.description,
      featured_services: homepage.services.featured,
      testimonials: homepage.testimonials,
      cta_title: homepage.cta.title,
      cta_description: homepage.cta.description,
      cta_primary_button_text: homepage.cta.primaryButton.text,
      cta_primary_button_link: homepage.cta.primaryButton.link,
      cta_secondary_button_text: homepage.cta.secondaryButton.text,
      cta_secondary_button_link: homepage.cta.secondaryButton.link,
      social_links: homepage.socialLinks
    });
  };

  const addPortfolioProject = async (project: Omit<PortfolioProject, 'id'>) => {
    await createPortfolioProject(project);
  };

  const addServicePage = async (service: Omit<ServicePage, 'id'>) => {
    await createServicePage(service);
  };

  return {
    portfolioProjects: portfolioProjects.map(p => ({ ...p, order: p.display_order })),
    servicePages: servicePages.map(s => ({ ...s, order: s.display_order })),
    homePage: convertedHomePage,
    addPortfolioProject,
    updatePortfolioProject,
    deletePortfolioProject,
    addServicePage,
    updateServicePage,
    deleteServicePage,
    saveHomePage
  };
};

const getDefaultPortfolioProjects = (): PortfolioProject[] => [
  {
    id: 1,
    title: 'Premium Fashion E-commerce Platform',
    category: 'ecommerce',
    client: 'Luxury Fashion Retailer',
    description: 'Complete WooCommerce solution with advanced product filtering, wishlist functionality, and optimised checkout process for a premium fashion brand.',
    image: 'fashion-ecommerce-platform',
    technologies: ['WordPress', 'WooCommerce', 'Custom PHP', 'React', 'Payment APIs'],
    results: {
      'Sales Increase': '+250% within first month',
      'Page Load Speed': '70% faster loading times',
      'Mobile Conversions': '+180% mobile sales',
      'Cart Abandonment': '-45% reduction'
    },
    features: ['Advanced Product Filtering', 'Wishlist & Favourites', 'Multi-Currency Support', 'Inventory Management', 'Customer Reviews', 'Social Media Integration'],
    url: '#',
    testimonial: 'The new e-commerce platform has completely transformed our online business. Sales have more than doubled and our customers love the seamless shopping experience.',
    timeline: '8 weeks',
    enabled: true
  },
  {
    id: 2,
    title: 'Professional Legal Services Portal',
    category: 'business',
    client: 'Leading UK Law Firm',
    description: 'Comprehensive legal services website with secure client portal, document management system, and appointment booking functionality.',
    image: 'legal-services-portal',
    technologies: ['WordPress', 'Custom Plugins', 'Member System', 'Payment Gateway', 'Document Management'],
    results: {
      'Lead Generation': '+200% more enquiries',
      'Admin Efficiency': '80% time savings',
      'Client Satisfaction': '95% satisfaction rate',
      'Case Management': '60% faster processing'
    },
    features: ['Secure Client Portal', 'Document Management', 'Appointment Booking', 'Case Tracking', 'Secure Communications', 'Billing Integration'],
    url: '#',
    testimonial: 'The client portal has revolutionised how we manage client relationships. Our efficiency has improved dramatically and clients love the convenience.',
    timeline: '10 weeks',
    enabled: true
  },
  {
    id: 3,
    title: 'Healthcare Provider Network',
    category: 'healthcare',
    client: 'Regional Medical Centre',
    description: 'HIPAA-compliant healthcare platform with patient portal, telemedicine integration, and appointment management system.',
    image: 'healthcare-network',
    technologies: ['WordPress', 'HIPAA Compliance', 'Telemedicine API', 'Patient Portal', 'Security Systems'],
    results: {
      'Patient Satisfaction': '+85% improvement',
      'Online Appointments': '+200% bookings',
      'Admin Efficiency': '60% reduction in calls',
      'Telehealth Usage': '500+ monthly consultations'
    },
    features: ['HIPAA-Compliant Portal', 'Telemedicine Integration', 'Appointment Booking', 'Medical Records Access', 'Prescription Management', 'Secure Messaging'],
    url: '#',
    testimonial: 'The platform has transformed how we deliver healthcare. Patients love the convenience and we\'ve significantly improved our operational efficiency.',
    timeline: '12 weeks',
    enabled: true
  },
  {
    id: 4,
    title: 'Educational Learning Platform',
    category: 'education',
    client: 'Online Learning Provider',
    description: 'Comprehensive learning management system with course delivery, progress tracking, and certification management.',
    image: 'education-platform',
    technologies: ['WordPress', 'LearnDash', 'Custom Plugins', 'Progress Tracking', 'Certificate System'],
    results: {
      'Student Enrollment': '+300% increase',
      'Course Completion': '95% completion rate',
      'Student Satisfaction': '4.9/5 rating',
      'Revenue Growth': '+180% increase'
    },
    features: ['Course Management', 'Progress Tracking', 'Certificate Generation', 'Student Dashboard', 'Discussion Forums', 'Mobile Learning'],
    url: '#',
    testimonial: 'The learning platform exceeded our expectations. Our students are more engaged and our course completion rates have never been higher.',
    timeline: '14 weeks',
    enabled: true
  },
  {
    id: 5,
    title: 'Charity Fundraising Platform',
    category: 'nonprofit',
    client: 'Children\'s Education Charity',
    description: 'Engaging charity website with integrated donation platform, volunteer management, and impact tracking system.',
    image: 'charity-platform',
    technologies: ['WordPress', 'Donation System', 'Event Management', 'Social Integration', 'Analytics'],
    results: {
      'Donations': '+400% increase',
      'Volunteer Signups': '+250% growth',
      'Social Engagement': '+300% reach',
      'Event Attendance': '+260% increase'
    },
    features: ['Donation System', 'Volunteer Portal', 'Event Management', 'Impact Dashboard', 'Social Integration', 'Newsletter Automation'],
    url: '#',
    testimonial: 'The impact has been extraordinary. We\'ve raised more funds this year than in the previous three years combined.',
    timeline: '6 weeks',
    enabled: true
  }
];

const getDefaultServicePages = (): ServicePage[] => [
  {
    id: 1,
    slug: 'website-migrations',
    title: 'Website Migrations',
    subtitle: 'Seamless website transfers with zero downtime guarantee',
    description: 'Professional website migration services that preserve your SEO rankings, ensure zero data loss, and deliver improved performance on modern hosting platforms.',
    heroImage: 'migration-hero',
    sections: [
      {
        id: 'hero',
        type: 'hero',
        title: 'Website Migrations Done Right',
        content: {
          subtitle: 'Zero downtime guaranteed',
          description: 'Professional website migration services that preserve your SEO rankings, ensure zero data loss, and deliver improved performance.',
          features: ['Zero downtime guarantee', 'SEO preservation', 'Performance boost', '500+ successful migrations']
        },
        enabled: true,
        order: 1
      }
    ],
    enabled: true,
    featured: true,
    order: 1
  },
  {
    id: 2,
    slug: 'wordpress-development',
    title: 'WordPress Development',
    subtitle: 'Custom WordPress solutions that drive business growth',
    description: 'Expert WordPress development services including custom themes, plugins, and e-commerce solutions built for performance and scalability.',
    heroImage: 'wordpress-development',
    sections: [
      {
        id: 'hero',
        type: 'hero',
        title: 'WordPress Development That Drives Growth',
        content: {
          subtitle: 'Custom solutions for every business',
          description: 'From simple websites to complex applications, we deliver WordPress solutions that scale with your business.',
          features: ['Custom themes & plugins', 'E-commerce solutions', 'API integrations', 'Performance optimised']
        },
        enabled: true,
        order: 1
      }
    ],
    enabled: true,
    featured: true,
    order: 2
  },
  {
    id: 3,
    slug: 'website-maintenance',
    title: 'Website Maintenance',
    subtitle: '24/7 monitoring and maintenance services',
    description: 'Comprehensive WordPress maintenance services with security monitoring, performance optimisation, and regular updates to keep your website running smoothly.',
    heroImage: 'maintenance-services',
    sections: [
      {
        id: 'hero',
        type: 'hero',
        title: 'Website Maintenance That Protects Your Business',
        content: {
          subtitle: '24/7 monitoring and support',
          description: 'Professional maintenance services that keep your website secure, fast, and running smoothly.',
          features: ['24/7 monitoring', 'Security updates', 'Performance optimisation', 'Expert support']
        },
        enabled: true,
        order: 1
      }
    ],
    enabled: true,
    featured: true,
    order: 3
  },
  {
    id: 4,
    slug: 'speed-optimization',
    title: 'Speed Optimisation',
    subtitle: 'Boost website performance by up to 300%',
    description: 'Professional website speed optimisation services that dramatically improve loading times, search rankings, and user experience.',
    heroImage: 'speed-optimization',
    sections: [
      {
        id: 'hero',
        type: 'hero',
        title: 'Website Speed Optimisation',
        content: {
          subtitle: 'Boost conversions by 300%',
          description: 'Dramatically improve your website performance with our proven optimisation techniques.',
          features: ['300% speed improvements', 'Core Web Vitals', 'Image optimisation', 'Performance guarantee']
        },
        enabled: true,
        order: 1
      }
    ],
    enabled: true,
    featured: true,
    order: 4
  },
  {
    id: 5,
    slug: 'security-services',
    title: 'Security Services',
    subtitle: 'Advanced protection against cyber threats',
    description: 'Comprehensive WordPress security services with malware protection, monitoring, and advanced threat prevention for complete peace of mind.',
    heroImage: 'security-services',
    sections: [
      {
        id: 'hero',
        type: 'hero',
        title: 'WordPress Security Services',
        content: {
          subtitle: 'Protect your business',
          description: 'Advanced security services that protect your website from malware, hackers, and cyber threats.',
          features: ['Malware protection', 'Security monitoring', 'Threat prevention', '24/7 response']
        },
        enabled: true,
        order: 1
      }
    ],
    enabled: true,
    featured: true,
    order: 5
  },
  {
    id: 6,
    slug: 'wordpress-hosting',
    title: 'WordPress Hosting',
    subtitle: 'Lightning-fast managed hosting with UK servers',
    description: 'Managed WordPress hosting with UK-based servers, enterprise security, and expert support designed for British businesses.',
    heroImage: 'wordpress-hosting',
    sections: [
      {
        id: 'hero',
        type: 'hero',
        title: 'Managed WordPress Hosting',
        content: {
          subtitle: 'Built for UK businesses',
          description: 'Lightning-fast, secure hosting with UK servers and expert support.',
          features: ['UK data centres', 'Enterprise security', 'Expert support', 'GDPR compliant']
        },
        enabled: true,
        order: 1
      }
    ],
    enabled: true,
    featured: false,
    order: 6
  },
  {
    id: 7,
    slug: 'website-redesign',
    title: 'Website Redesign',
    subtitle: 'Transform your online presence with modern design',
    description: 'Professional website redesign services that modernise your brand, improve user experience, and drive measurable business results.',
    heroImage: 'website-redesign',
    sections: [
      {
        id: 'hero',
        type: 'hero',
        title: 'Website Redesign Services',
        content: {
          subtitle: 'Transform your online presence',
          description: 'Modern redesigns that improve user experience and drive business results.',
          features: ['Modern design', 'Mobile-first approach', 'Conversion optimisation', 'Brand alignment']
        },
        enabled: true,
        order: 1
      }
    ],
    enabled: true,
    featured: false,
    order: 7
  },
  {
    id: 8,
    slug: 'ecommerce-development',
    title: 'E-commerce Development',
    subtitle: 'Powerful online stores that drive sales',
    description: 'Professional e-commerce development services creating powerful online stores that convert visitors into customers and scale with your business.',
    heroImage: 'ecommerce-development',
    sections: [
      {
        id: 'hero',
        type: 'hero',
        title: 'E-commerce Development',
        content: {
          subtitle: 'That drives sales',
          description: 'Powerful online stores that convert visitors into customers and scale with your business.',
          features: ['WooCommerce expertise', 'Payment integration', 'Inventory management', 'Mobile commerce']
        },
        enabled: true,
        order: 1
      }
    ],
    enabled: true,
    featured: false,
    order: 8
  },
  {
    id: 9,
    slug: 'local-seo',
    title: 'Local SEO',
    subtitle: 'Dominate your local market with targeted SEO',
    description: 'Professional local SEO services that help UK businesses rank higher in local search results and attract more customers from their area.',
    heroImage: 'local-seo',
    sections: [
      {
        id: 'hero',
        type: 'hero',
        title: 'Local SEO Services',
        content: {
          subtitle: 'Dominate your local market',
          description: 'Rank higher in local search results and attract more customers from your area.',
          features: ['Google My Business', 'Local citations', 'Review management', 'Local rankings']
        },
        enabled: true,
        order: 1
      }
    ],
    enabled: true,
    featured: false,
    order: 9
  },
  {
    id: 10,
    slug: 'website-audits',
    title: 'Website Audits',
    subtitle: 'Comprehensive analysis and improvement recommendations',
    description: 'Professional website audits that identify issues, uncover opportunities, and provide actionable recommendations for improvement.',
    heroImage: 'website-audits',
    sections: [
      {
        id: 'hero',
        type: 'hero',
        title: 'Professional Website Audits',
        content: {
          subtitle: 'Uncover hidden opportunities',
          description: 'Comprehensive audits that identify issues and provide actionable improvement recommendations.',
          features: ['SEO audit', 'Performance analysis', 'Security assessment', 'UX evaluation']
        },
        enabled: true,
        order: 1
      }
    ],
    enabled: true,
    featured: false,
    order: 10
  }
];

const getDefaultHomePage = (): HomePage => ({
  hero: {
    title: 'Professional Web Development Services',
    subtitle: 'Transform Your Online Presence',
    description: 'Expert WordPress development, seamless migrations, and comprehensive maintenance services trusted by 500+ businesses across the UK. We deliver solutions that drive real results.',
    primaryButton: { text: 'Start Your Project', link: '/contact' },
    secondaryButton: { text: 'View Our Work', link: '/portfolio' }
  },
  stats: [
    { number: '500+', label: 'Websites Delivered', icon: 'Globe' },
    { number: '10+', label: 'Years Experience', icon: 'Clock' },
    { number: '100%', label: 'Client Satisfaction', icon: 'Star' },
    { number: '300%', label: 'Average Speed Boost', icon: 'Zap' }
  ],
  services: {
    title: 'Our Expert Services',
    description: 'Comprehensive web development solutions designed to grow your business and exceed your expectations with proven results.',
    featured: ['website-migrations', 'wordpress-development', 'website-maintenance', 'speed-optimization', 'security-services', 'wordpress-hosting']
  },
  testimonials: [
    {
      name: 'Sarah Mitchell',
      company: 'E-commerce Director',
      content: 'TapDev transformed our online store completely. Sales increased by 250% within the first month after the migration. The team\'s expertise is unmatched.',
      rating: 5
    },
    {
      name: 'James Richardson', 
      company: 'Managing Partner, Richardson & Associates Law',
      content: 'The new website and client portal have revolutionised our practice. We\'re attracting higher-quality leads and our clients love the convenience of online case tracking.',
      rating: 5
    },
    {
      name: 'Dr. Emily Watson',
      company: 'Chief Medical Officer, Regional Health Network', 
      content: 'The HIPAA-compliant patient portal has transformed how we deliver healthcare. Patients love the convenience and we\'ve significantly improved our operational efficiency.',
      rating: 5
    },
    {
      name: 'Michael Thompson',
      company: 'E-commerce Director, Fashion Forward Ltd',
      content: 'Our online store transformation was incredible. Sales increased by 280% in the first quarter and our mobile conversion rate has tripled.',
      rating: 5
    },
    {
      name: 'David Wilson',
      company: 'Operations Director, Wilson Manufacturing',
      content: 'The website migration was seamless with zero downtime. Our new site loads 400% faster and we\'ve seen a 150% increase in online enquiries.',
      rating: 5
    },
    {
      name: 'Lisa Parker',
      company: 'Marketing Director, TechStart Solutions',
      content: 'The custom WordPress development exceeded our expectations. Our user engagement increased by 200% and the platform scales beautifully with our growth.',
      rating: 5
    },
    {
      name: 'Robert Clarke',
      company: 'CEO, Clarke Financial Services',
      content: 'The security implementation gives us complete confidence. Our client data is fully protected and we\'ve maintained 100% compliance with financial regulations.',
      rating: 5
    },
    {
      name: 'Emma Foster',
      company: 'Executive Director, Children\'s Future Charity',
      content: 'Our fundraising platform has been transformational. We\'ve raised 350% more donations this year and volunteer engagement has never been higher.',
      rating: 5
    },
    {
      name: 'Andrew Martinez',
      company: 'Head of Digital, Martinez & Partners Legal',
      content: 'The website redesign and SEO optimisation have transformed our online presence. We\'re now ranking #1 for key terms and leads have increased by 220%.',
      rating: 5
    },
    {
      name: 'Catherine Hughes',
      company: 'Operations Manager, Hughes Consulting Group',
      content: 'The maintenance service has been exceptional. Our website runs flawlessly 24/7 and we can focus entirely on serving our clients instead of technical issues.',
      rating: 5
    }
  ],
  cta: {
    title: 'Ready to Transform Your Website?',
    description: 'Join hundreds of satisfied clients who have transformed their online presence with our expert web development services. Get started with a free consultation today.',
    primaryButton: { text: 'Get Free Consultation', link: '/contact' },
    secondaryButton: { text: 'View Portfolio', link: '/portfolio' }
  },
  socialLinks: [
    { platform: 'Facebook', url: 'https://facebook.com/tapdev', enabled: true },
    { platform: 'Twitter', url: 'https://twitter.com/tapdev', enabled: true },
    { platform: 'LinkedIn', url: 'https://linkedin.com/company/tapdev', enabled: true },
    { platform: 'Instagram', url: 'https://instagram.com/tapdev', enabled: true },
    { platform: 'YouTube', url: 'https://youtube.com/tapdev', enabled: false }
  ]
});