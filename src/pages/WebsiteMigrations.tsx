import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Globe, 
  ArrowRight, 
  Clock, 
  Shield, 
  Zap, 
  CheckCircle, 
  Download, 
  Upload,
  Database,
  Search,
  TrendingUp,
  Users,
  Award,
  Target,
  Settings,
  Monitor,
  FileText,
  AlertTriangle
} from 'lucide-react';

const WebsiteMigrations = () => {
  const migrationTypes = [
    {
      from: 'WordPress to WordPress',
      description: 'Host-to-host migrations with performance improvements',
      complexity: 'Simple',
      timeframe: '24-48 hours'
    },
    {
      from: 'Wix to WordPress',
      description: 'Complete platform migration with design recreation',
      complexity: 'Moderate',
      timeframe: '3-5 days'
    },
    {
      from: 'Squarespace to WordPress',
      description: 'Platform migration with enhanced functionality',
      complexity: 'Moderate',
      timeframe: '3-5 days'
    },
    {
      from: 'Shopify to WooCommerce',
      description: 'E-commerce migration with product data transfer',
      complexity: 'Complex',
      timeframe: '5-7 days'
    },
    {
      from: 'Custom CMS to WordPress',
      description: 'Legacy system migration with modern features',
      complexity: 'Complex',
      timeframe: '7-14 days'
    },
    {
      from: 'HTML Sites to WordPress',
      description: 'Static to dynamic conversion with CMS integration',
      complexity: 'Moderate',
      timeframe: '4-6 days'
    }
  ];

  const benefits = [
    {
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      title: 'Zero Downtime Guarantee',
      description: 'Your website remains fully operational throughout the entire migration process using our staging environment approach.',
      features: ['Staging environment setup', 'DNS management', 'Real-time monitoring', 'Instant rollback capability']
    },
    {
      icon: <Search className="h-8 w-8 text-green-500" />,
      title: 'SEO Preservation',
      description: 'Maintain and improve your search engine rankings with proper redirects and SEO optimisation.',
      features: ['301 redirects setup', 'Meta data transfer', 'URL structure optimisation', 'Search console updates']
    },
    {
      icon: <Zap className="h-8 w-8 text-orange-500" />,
      title: 'Performance Enhancement',
      description: 'Experience dramatically improved loading speeds and better user experience on modern infrastructure.',
      features: ['Image optimisation', 'Code minification', 'Caching implementation', 'CDN integration']
    },
    {
      icon: <Database className="h-8 w-8 text-purple-500" />,
      title: 'Complete Data Transfer',
      description: 'Every piece of content, media file, and database entry is carefully migrated without any data loss.',
      features: ['Content migration', 'Media library transfer', 'User data preservation', 'Custom fields mapping']
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'Comprehensive audit of your current website including content, functionality, and technical requirements.',
      tasks: ['Site architecture analysis', 'Content inventory', 'Technical requirements assessment', 'Migration strategy planning']
    },
    {
      step: '02',
      title: 'Environment Setup',
      description: 'Preparation of staging environment and new hosting infrastructure with optimal configurations.',
      tasks: ['Staging environment creation', 'Hosting optimisation', 'Security configuration', 'Backup systems setup']
    },
    {
      step: '03',
      title: 'Content Migration',
      description: 'Systematic transfer of all website content, maintaining structure and improving organisation.',
      tasks: ['Database migration', 'Media file transfer', 'Content restructuring', 'URL mapping creation']
    },
    {
      step: '04',
      title: 'Testing & Optimisation',
      description: 'Rigorous testing across all devices and browsers with performance and SEO optimisation.',
      tasks: ['Functionality testing', 'Cross-browser compatibility', 'Mobile responsiveness', 'Performance optimisation']
    },
    {
      step: '05',
      title: 'Go Live & Support',
      description: 'Seamless launch with DNS management and immediate post-migration support and monitoring.',
      tasks: ['DNS configuration', 'SSL certificate setup', 'Search engine updates', '30-day monitoring']
    }
  ];

  const caseStudies = [
    {
      client: 'E-commerce Fashion Retailer',
      challenge: 'Slow Shopify store affecting conversions',
      solution: 'Migration to optimised WooCommerce',
      results: ['300% faster loading', '45% increase in conversions', '60% better mobile performance'],
      timeframe: '6 days',
      testimonial: 'The migration transformed our online store. Sales increased immediately after launch.'
    },
    {
      client: 'Professional Services Firm',
      challenge: 'Limited Wix functionality for lead generation',
      solution: 'Custom WordPress with advanced forms',
      results: ['200% more leads', 'Better SEO rankings', 'Enhanced user experience'],
      timeframe: '4 days',
      testimonial: 'Our new WordPress site generates twice as many enquiries as before.'
    },
    {
      client: 'Technology Startup',
      challenge: 'Outdated custom CMS limiting growth',
      solution: 'Modern WordPress with API integrations',
      results: ['90% easier content management', 'Improved team collaboration', 'Better scalability'],
      timeframe: '10 days',
      testimonial: 'The migration gave us the flexibility we needed to scale our content operations.'
    }
  ];

  const guarantees = [
    {
      icon: <Shield className="h-6 w-6 text-green-500" />,
      title: 'Zero Data Loss',
      description: 'Complete data integrity guarantee with comprehensive backups'
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-500" />,
      title: 'On-Time Delivery',
      description: 'Project completion within agreed timeframe or compensation'
    },
    {
      icon: <Target className="h-6 w-6 text-purple-500" />,
      title: '30-Day Support',
      description: 'Free post-migration support and issue resolution'
    },
    {
      icon: <Award className="h-6 w-6 text-orange-500" />,
      title: 'Satisfaction Promise',
      description: 'Money-back guarantee if not completely satisfied'
    }
  ];

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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600/20 rounded-2xl mb-8">
              <Globe className="h-10 w-10 text-blue-400" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Website Migrations
              <span className="block gradient-text">Done Right</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Professional website migration services that preserve your SEO rankings, ensure zero data loss, 
              and deliver improved performance on modern hosting platforms. Zero downtime guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover-glow flex items-center justify-center space-x-2"
              >
                <span>Get Migration Quote</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-xl font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Free Migration Audit</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Migration Types */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Migration Types We <span className="gradient-text">Specialise In</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From simple host transfers to complex platform migrations, we handle every type of website migration with expertise and precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {migrationTypes.map((migration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">
                    {migration.from}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    migration.complexity === 'Simple' ? 'bg-green-900/30 text-green-400' :
                    migration.complexity === 'Moderate' ? 'bg-yellow-900/30 text-yellow-400' :
                    'bg-red-900/30 text-red-400'
                  }`}>
                    {migration.complexity}
                  </span>
                </div>
                <p className="text-gray-300 mb-6">
                  {migration.description}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Timeframe:</span>
                    <span className="text-blue-400 font-medium">{migration.timeframe}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose Our <span className="gradient-text">Migration Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our proven migration process ensures your website transition is smooth, secure, and optimised for better performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300 mb-6">
                      {benefit.description}
                    </p>
                    <ul className="space-y-2">
                      {benefit.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">5-Step Migration Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A systematic approach that ensures every aspect of your website is carefully migrated with minimal risk and maximum efficiency.
            </p>
          </div>

          <div className="space-y-12">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col lg:flex-row items-start gap-8"
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold">
                    {step.step}
                  </div>
                </div>
                <div className="flex-grow bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {step.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {step.tasks.map((task, taskIndex) => (
                      <div key={taskIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-blue-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{task}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Real <span className="gradient-text">Migration Success Stories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how we've helped businesses successfully migrate their websites with improved performance and zero downtime.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
              >
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {study.client}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Completed in {study.timeframe}
                  </p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-red-400 mb-2">Challenge:</h4>
                  <p className="text-gray-300 text-sm mb-4">{study.challenge}</p>
                  
                  <h4 className="text-lg font-semibold text-blue-400 mb-2">Solution:</h4>
                  <p className="text-gray-300 text-sm mb-4">{study.solution}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-green-400 mb-3">Results:</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center space-x-2">
                        <TrendingUp className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-300">
                  "{study.testimonial}"
                </blockquote>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Migration Guarantees</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We stand behind our work with industry-leading guarantees that protect your investment and ensure your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-800 rounded-xl mb-6">
                  {guarantee.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {guarantee.title}
                </h3>
                <p className="text-gray-300">
                  {guarantee.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl p-12 border border-blue-500/20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Migration Success by the Numbers
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">500+</div>
                <div className="text-gray-300">Sites Migrated</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Maintained</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">48hrs</div>
                <div className="text-gray-300">Average Migration Time</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">100%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
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
              Ready to Migrate Your Website?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Get a free migration consultation and detailed quote. Our experts will analyse your current site and provide a comprehensive migration plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 hover-glow flex items-center justify-center space-x-2"
              >
                <span>Get Free Migration Quote</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Schedule Consultation</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WebsiteMigrations;