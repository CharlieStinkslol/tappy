import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Code, 
  Shield, 
  Zap, 
  Search, 
  ShoppingCart,
  Server,
  Palette,
  Users,
  Settings,
  Database,
  Monitor,
  Lock,
  ArrowRight,
  CheckCircle,
  Star,
  Filter,
  Eye,
  Target,
  Award,
  Clock,
  Smartphone,
  FileText,
  BarChart3,
  Headphones,
  GraduationCap,
  HardDrive,
  ArrowRightLeft,
  Briefcase
} from 'lucide-react';

const AllServices = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services', count: 20 },
    { id: 'development', name: 'Development', count: 5 },
    { id: 'maintenance', name: 'Maintenance & Support', count: 3 },
    { id: 'optimisation', name: 'Optimisation', count: 6 },
    { id: 'security', name: 'Security', count: 3 },
    { id: 'migration', name: 'Migration', count: 2 }
  ];

  const allServices = [
    // Development Services
    {
      id: 1,
      title: 'Website Development',
      category: 'development',
      description: 'Custom websites built with modern technologies including WordPress, React, and bespoke solutions.',
      icon: <Code className="h-8 w-8 text-blue-500" />,
      link: '/services/website-development',
      features: ['Custom development', 'Responsive design', 'Modern technologies', 'SEO optimised'],
      popular: true
    },
    {
      id: 2,
      title: 'WordPress Development',
      category: 'development',
      description: 'Bespoke WordPress solutions with custom themes, plugins, and advanced functionality.',
      icon: <Code className="h-8 w-8 text-indigo-500" />,
      link: '/services/wordpress-development',
      features: ['Custom themes', 'Plugin development', 'E-commerce integration', 'Performance optimised'],
      popular: true
    },
    {
      id: 3,
      title: 'E-commerce Development',
      category: 'development',
      description: 'Powerful online stores that convert visitors into customers and scale with your business.',
      icon: <ShoppingCart className="h-8 w-8 text-green-500" />,
      link: '/services/ecommerce-development',
      features: ['WooCommerce expertise', 'Payment integration', 'Inventory management', 'Mobile commerce'],
      popular: true
    },
    {
      id: 4,
      title: 'Website Redesign',
      category: 'development',
      description: 'Transform outdated websites into modern, engaging platforms that drive business results.',
      icon: <Palette className="h-8 w-8 text-purple-500" />,
      link: '/services/website-redesign',
      features: ['Modern design', 'UX improvements', 'Brand alignment', 'Conversion optimisation'],
      popular: false
    },
    {
      id: 5,
      title: 'API Development',
      category: 'development',
      description: 'Custom APIs and integrations to connect your website with third-party services.',
      icon: <Settings className="h-8 w-8 text-cyan-500" />,
      link: '/services/api-development',
      features: ['RESTful APIs', 'Third-party integrations', 'Data synchronisation', 'Secure endpoints'],
      popular: false
    },
    {
      id: 8,
      title: 'Landing Page Development',
      category: 'development',
      description: 'High-converting landing pages designed to maximise your marketing campaign results.',
      icon: <Target className="h-8 w-8 text-pink-500" />,
      link: '/services/landing-page-development',
      features: ['Conversion optimised', 'A/B testing ready', 'Fast loading', 'Analytics integration'],
      popular: false
    },

    // Maintenance & Support Services
    {
      id: 6,
      title: 'Website Maintenance',
      category: 'maintenance',
      description: 'Comprehensive maintenance services with 24/7 monitoring and expert support.',
      icon: <Shield className="h-8 w-8 text-green-500" />,
      link: '/services/website-maintenance',
      features: ['24/7 monitoring', 'Regular updates', 'Security protection', 'Performance optimisation'],
      popular: true
    },
    {
      id: 7,
      title: 'Managed Website Hosting',
      category: 'maintenance',
      description: 'Fully managed hosting with UK servers, enterprise security, and expert support.',
      icon: <Server className="h-8 w-8 text-blue-500" />,
      link: '/services/managed-website-hosting',
      features: ['UK data centres', 'Enterprise security', 'Expert support', 'GDPR compliant'],
      popular: true
    },
    {
      id: 8,
      title: 'WordPress Support',
      category: 'maintenance',
      description: 'Professional WordPress support services with emergency response and ongoing assistance.',
      icon: <Headphones className="h-8 w-8 text-purple-500" />,
      link: '/services/wordpress-support',
      features: ['Emergency support', 'Technical assistance', 'Plugin troubleshooting', 'Performance help'],
      popular: false
    },
    {
      id: 9,
      title: 'WordPress Backup Services',
      category: 'maintenance',
      description: 'Automated backup solutions with secure storage and rapid restoration capabilities.',
      icon: <HardDrive className="h-8 w-8 text-orange-500" />,
      link: '/services/wordpress-backup-services',
      features: ['Automated backups', 'Secure storage', 'Rapid restoration', 'Multiple locations'],
      popular: false
    },

    // Optimisation Services
    {
      id: 10,
      title: 'Speed Optimisation',
      category: 'optimisation',
      description: 'Boost website performance by up to 300% with advanced optimisation techniques.',
      icon: <Zap className="h-8 w-8 text-orange-500" />,
      link: '/services/speed-optimization',
      features: ['300% speed improvements', 'Core Web Vitals', 'Image optimisation', 'Performance guarantee'],
      popular: true
    },
    {
      id: 11,
      title: 'Local SEO',
      category: 'optimisation',
      description: 'Dominate your local market with targeted SEO strategies for UK businesses.',
      icon: <Search className="h-8 w-8 text-green-500" />,
      link: '/services/local-seo',
      features: ['Google My Business', 'Local citations', 'Review management', 'Local rankings'],
      popular: true
    },
    {
      id: 12,
      title: 'Website Audits',
      category: 'optimisation',
      description: 'Comprehensive website analysis with actionable improvement recommendations.',
      icon: <BarChart3 className="h-8 w-8 text-purple-500" />,
      link: '/services/website-audits',
      features: ['SEO audit', 'Performance analysis', 'Security assessment', 'UX evaluation'],
      popular: false
    },
    {
      id: 13,
      title: 'Comprehensive Website Audit',
      category: 'optimisation',
      description: 'Complete website analysis covering SEO, performance, security, and UX with detailed recommendations.',
      icon: <FileText className="h-8 w-8 text-blue-500" />,
      link: '/services/comprehensive-website-audit',
      features: ['Full site analysis', 'Detailed recommendations', 'Priority action plan', 'ROI projections'],
      popular: false
    },
    {
      id: 14,
      title: 'Conversion Rate Optimisation',
      category: 'optimisation',
      description: 'Improve your website\'s conversion rates with data-driven optimisation strategies.',
      icon: <Target className="h-8 w-8 text-pink-500" />,
      link: '/services/conversion-rate-optimisation',
      features: ['A/B testing', 'User behaviour analysis', 'Conversion tracking', 'ROI improvement'],
      popular: false
    },
    {
      id: 15,
      title: 'Website Accessibility',
      category: 'optimisation',
      description: 'Ensure your website is accessible to all users with WCAG compliance services.',
      icon: <Eye className="h-8 w-8 text-blue-500" />,
      link: '/services/website-accessibility',
      features: ['WCAG compliance', 'Accessibility audit', 'Inclusive design', 'Legal compliance'],
      popular: false
    },

    // Security Services
    {
      id: 16,
      title: 'Security Services',
      category: 'security',
      description: 'Advanced protection against cyber threats with 24/7 monitoring and rapid response.',
      icon: <Shield className="h-8 w-8 text-red-500" />,
      link: '/services/security-services',
      features: ['Malware protection', 'Security monitoring', 'Threat prevention', '24/7 response'],
      popular: true
    },
    {
      id: 17,
      title: 'SSL Certificate Management',
      category: 'security',
      description: 'Complete SSL certificate management with automatic renewal and security configuration.',
      icon: <Lock className="h-8 w-8 text-green-500" />,
      link: '/services/ssl-certificate-management',
      features: ['SSL installation', 'Auto-renewal', 'Security headers', 'Certificate monitoring'],
      popular: false
    },
    {
      id: 18,
      title: 'Website Security Audits',
      category: 'security',
      description: 'Comprehensive security assessments to identify vulnerabilities and improve protection.',
      icon: <Search className="h-8 w-8 text-orange-500" />,
      link: '/services/website-security-audits',
      features: ['Vulnerability scanning', 'Security assessment', 'Risk analysis', 'Protection recommendations'],
      popular: false
    },

    // Migration Services
    {
      id: 19,
      title: 'Website Migrations',
      category: 'migration',
      description: 'Seamless website transfers with zero downtime and preserved SEO rankings.',
      icon: <Globe className="h-8 w-8 text-blue-500" />,
      link: '/services/website-migrations',
      features: ['Zero downtime', 'SEO preservation', 'Performance boost', '500+ successful migrations'],
      popular: true
    },
    {
      id: 20,
      title: 'WordPress Migration Services',
      category: 'migration',
      description: 'Expert platform migration services from any CMS to WordPress with enhanced functionality.',
      icon: <ArrowRightLeft className="h-8 w-8 text-purple-500" />,
      link: '/services/wordpress-migration-services',
      features: ['Platform migration', 'Data preservation', 'Functionality enhancement', 'Performance improvement'],
      popular: false
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'development':
        return <Code className="h-5 w-5" />;
      case 'maintenance':
        return <Shield className="h-5 w-5" />;
      case 'optimisation':
        return <Zap className="h-5 w-5" />;
      case 'security':
        return <Lock className="h-5 w-5" />;
      case 'migration':
        return <ArrowRightLeft className="h-5 w-5" />;
      default:
        return <Settings className="h-5 w-5" />;
    }
  };

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-indigo-700/20"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Comprehensive web development and digital services designed to help UK businesses 
              thrive online with professional solutions that deliver measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gray-800/30">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                }`}
              >
                {getCategoryIcon(category.id)}
                <span>{category.name}</span>
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link
                  to={service.link}
                  className="block bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 h-full"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    {service.popular && (
                      <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                        <Star className="h-3 w-3" />
                        <span>Popular</span>
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-300 mb-6">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-blue-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center text-blue-400 group-hover:text-blue-300 font-medium">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Service <span className="gradient-text">Statistics</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The numbers behind our comprehensive service offerings and client success stories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">25+</div>
              <div className="text-gray-300">Professional Services</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">500+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">100%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">10+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Choose from our comprehensive range of services or let us create a custom solution tailored to your specific business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 hover-glow flex items-center justify-center space-x-2"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Free Consultation</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AllServices;