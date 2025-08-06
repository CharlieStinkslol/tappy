import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Home, 
  Globe, 
  Code, 
  Shield, 
  Zap, 
  Lock, 
  Mail, 
  FileText,
  ArrowRight,
  Search,
  Users,
  Settings
} from 'lucide-react';

const Sitemap = () => {
  const siteStructure = [
    {
      title: 'Main Pages',
      icon: <Home className="h-6 w-6" />,
      pages: [
        { name: 'Home', path: '/', description: 'Professional web development services homepage' },
        { name: 'Contact', path: '/contact', description: 'Get in touch for web development projects' },
        { name: 'Sitemap', path: '/sitemap', description: 'Complete website structure and navigation' },
        { name: 'XML Sitemap', path: '/xml-sitemap', description: 'XML sitemap for search engines' }
      ]
    },
    {
      title: 'Services',
      icon: <Settings className="h-6 w-6" />,
      pages: [
        { 
          name: 'Website Migrations', 
          path: '/services/website-migrations', 
          description: 'Seamless website transfers with zero downtime and preserved SEO rankings'
        },
        { 
          name: 'WordPress Development', 
          path: '/services/wordpress-development', 
          description: 'Custom WordPress solutions, themes, and e-commerce development'
        },
        { 
          name: 'Website Maintenance', 
          path: '/services/website-maintenance', 
          description: '24/7 monitoring, updates, and security maintenance services'
        },
        { 
          name: 'Speed Optimisation', 
          path: '/services/speed-optimization', 
          description: 'Website performance optimisation to boost loading speeds by 300%'
        },
        { 
          name: 'Security Services', 
          path: '/services/security-services', 
          description: 'Advanced website security, malware protection, and monitoring'
        },
        { 
          name: 'WordPress Hosting', 
          path: '/services/wordpress-hosting', 
          description: 'Managed WordPress hosting with UK servers and enterprise security'
        },
        { 
          name: 'Website Redesign', 
          path: '/services/website-redesign', 
          description: 'Professional website redesign services for modern, engaging websites'
        },
        { 
          name: 'E-commerce Development', 
          path: '/services/ecommerce-development', 
          description: 'Custom e-commerce solutions and online store development'
        },
        { 
          name: 'Local SEO', 
          path: '/services/local-seo', 
          description: 'Local search optimisation to dominate your local market'
        },
        { 
          name: 'Website Audits', 
          path: '/services/website-audits', 
          description: 'Comprehensive website analysis and improvement recommendations'
        },
        { 
          name: 'WordPress Consultancy', 
          path: '/services/wordpress-consultancy', 
          description: 'Strategic WordPress expertise and consulting for UK businesses'
        },
        { 
          name: 'WordPress Migration Services', 
          path: '/services/wordpress-migration-services', 
          description: 'Expert platform migration services from any CMS to WordPress'
        },
        { 
          name: 'WordPress Support', 
          path: '/services/wordpress-support', 
          description: 'Professional WordPress support and emergency assistance'
        },
        { 
          name: 'WordPress Training', 
          path: '/services/wordpress-training', 
          description: 'Professional WordPress training courses for UK teams'
        },
        { 
          name: 'Website Accessibility', 
          path: '/services/website-accessibility', 
          description: 'WCAG compliance and inclusive design services'
        },
        { 
          name: 'WordPress Backup Services', 
          path: '/services/wordpress-backup-services', 
          description: 'Automated backup and disaster recovery solutions'
        }
      ]
    },
    {
      title: 'Legal & Information',
      icon: <FileText className="h-6 w-6" />,
      pages: [
        { name: 'Privacy Policy', path: '/privacy', description: 'How we collect, use, and protect your personal data' },
        { name: 'Terms of Service', path: '/terms', description: 'Terms and conditions for using our services' },
        { name: 'Cookie Policy', path: '/cookies', description: 'Information about cookies used on our website' }
      ]
    }
  ];

  const serviceIcons = {
    '/services/website-migrations': <Globe className="h-5 w-5" />,
    '/services/wordpress-development': <Code className="h-5 w-5" />,
    '/services/website-maintenance': <Shield className="h-5 w-5" />,
    '/services/speed-optimization': <Zap className="h-5 w-5" />,
    '/services/security-services': <Lock className="h-5 w-5" />
  };

  const quickLinks = [
    { name: 'Free Consultation', path: '/contact', description: 'Book a free consultation call' },
    { name: 'Get Quote', path: '/contact', description: 'Request a project quote' },
    { name: 'Emergency Support', path: '/contact', description: 'Urgent website issues' }
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-2xl mb-8">
              <Search className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Website <span className="gradient-text">Sitemap</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Complete navigation guide to all pages and services on TapDev. Find exactly what you're looking for.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 hover-glow flex items-center justify-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Back to Home</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-800/50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Quick Actions
            </h2>
            <p className="text-gray-300">
              Popular pages and actions for new visitors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={link.path}
                  className="glass-effect rounded-xl p-6 block hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-white group-hover:gradient-text transition-all duration-300">
                      {link.name}
                    </h3>
                    <ArrowRight className="h-5 w-5 text-blue-400 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                  <p className="text-gray-400 text-sm">
                    {link.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Sitemap */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Complete Site Structure
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Browse all pages and services available on our website. Each page is optimised for search engines and user experience.
            </p>
          </div>

          <div className="space-y-12">
            {siteStructure.map((section, sectionIndex) => (
              <motion.div
                key={sectionIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.2 }}
                className="glass-effect rounded-2xl p-8"
              >
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400">
                    {section.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {section.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.pages.map((page, pageIndex) => (
                    <Link
                      key={pageIndex}
                      to={page.path}
                      className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300 group border border-gray-700 hover:border-blue-500/50"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          {serviceIcons[page.path] && (
                            <div className="text-blue-400">
                              {serviceIcons[page.path]}
                            </div>
                          )}
                          <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colours duration-300">
                            {page.name}
                          </h4>
                        </div>
                        <ArrowRight className="h-4 w-4 text-gray-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {page.description}
                      </p>
                      <div className="mt-4 text-xs text-blue-400 font-medium">
                        {page.path}
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Information */}
      <section className="section-padding bg-gray-800/50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              SEO & Technical Information
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our website is built with search engine optimisation and technical excellence in mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-effect rounded-xl p-6">
              <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center text-green-400 mb-4">
                <Search className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                SEO Optimised
              </h3>
              <p className="text-gray-400 text-sm">
                All pages include proper meta tags, structured data, and optimised content for search engines.
              </p>
            </div>

            <div className="glass-effect rounded-xl p-6">
              <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400 mb-4">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Fast Loading
              </h3>
              <p className="text-gray-400 text-sm">
                Optimised for speed with modern web technologies, image compression, and efficient code.
              </p>
            </div>

            <div className="glass-effect rounded-xl p-6">
              <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center text-purple-400 mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                User Friendly
              </h3>
              <p className="text-gray-400 text-sm">
                Designed with accessibility in mind, ensuring all users can navigate and use our website effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Now that you've explored our services, let's discuss how we can help transform your online presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 hover-glow flex items-center justify-center space-x-2"
              >
                <span>Get Started Today</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Back to Homepage</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Sitemap;