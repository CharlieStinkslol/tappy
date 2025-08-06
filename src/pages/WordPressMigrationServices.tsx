import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRightLeft, 
  Shield, 
  Clock, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Globe,
  Database,
  Search,
  Zap,
  Users,
  Award,
  Target,
  Settings,
  Monitor,
  FileText
} from 'lucide-react';

const WordPressMigrationServices = () => {
  const migrationTypes = [
    {
      from: 'Wix to WordPress',
      description: 'Complete platform migration with design recreation and functionality enhancement',
      complexity: 'Moderate',
      timeframe: '3-5 days',
      benefits: ['Better SEO capabilities', 'More customisation options', 'Lower long-term costs', 'Better performance']
    },
    {
      from: 'Squarespace to WordPress',
      description: 'Platform migration with enhanced functionality and improved flexibility',
      complexity: 'Moderate',
      timeframe: '3-5 days',
      benefits: ['Greater design flexibility', 'Plugin ecosystem access', 'Better e-commerce options', 'Improved SEO']
    },
    {
      from: 'Shopify to WooCommerce',
      description: 'E-commerce migration with product data transfer and payment integration',
      complexity: 'Complex',
      timeframe: '5-7 days',
      benefits: ['Lower transaction fees', 'More customisation', 'Better content marketing', 'Integrated blogging']
    },
    {
      from: 'Drupal to WordPress',
      description: 'CMS migration with content restructuring and user-friendly interface',
      complexity: 'Complex',
      timeframe: '7-10 days',
      benefits: ['Easier content management', 'Better user experience', 'More themes and plugins', 'Lower maintenance']
    },
    {
      from: 'Joomla to WordPress',
      description: 'Platform migration with improved usability and modern features',
      complexity: 'Moderate',
      timeframe: '4-6 days',
      benefits: ['Simpler administration', 'Better security', 'More support options', 'Modern interface']
    },
    {
      from: 'Custom CMS to WordPress',
      description: 'Legacy system migration with modern features and improved maintainability',
      complexity: 'Complex',
      timeframe: '10-14 days',
      benefits: ['Reduced maintenance costs', 'Better security', 'Modern features', 'Community support']
    }
  ];

  const migrationProcess = [
    {
      step: '01',
      title: 'Pre-Migration Analysis',
      description: 'Comprehensive audit of your current website including content, functionality, and technical requirements.',
      tasks: ['Content inventory and analysis', 'Functionality assessment', 'SEO audit and planning', 'Technical requirements review'],
      duration: '1-2 days'
    },
    {
      step: '02',
      title: 'Migration Strategy',
      description: 'Develop a detailed migration plan that minimises risk and ensures all requirements are met.',
      tasks: ['Migration roadmap creation', 'Risk assessment and mitigation', 'Timeline development', 'Resource allocation'],
      duration: '1 day'
    },
    {
      step: '03',
      title: 'Environment Preparation',
      description: 'Set up staging environment and prepare the new WordPress installation with optimal configuration.',
      tasks: ['Staging environment setup', 'WordPress installation', 'Theme and plugin selection', 'Security configuration'],
      duration: '1 day'
    },
    {
      step: '04',
      title: 'Content Migration',
      description: 'Systematic transfer of all content, maintaining structure and improving organisation where possible.',
      tasks: ['Content transfer and formatting', 'Media migration and optimisation', 'URL structure planning', 'Metadata preservation'],
      duration: '2-5 days'
    },
    {
      step: '05',
      title: 'Testing & Optimisation',
      description: 'Comprehensive testing and optimisation to ensure everything works perfectly before going live.',
      tasks: ['Functionality testing', 'Performance optimisation', 'SEO verification', 'Cross-browser testing'],
      duration: '1-2 days'
    },
    {
      step: '06',
      title: 'Go Live & Support',
      description: 'Seamless launch with DNS management and immediate post-migration support and monitoring.',
      tasks: ['DNS configuration', 'SSL setup', 'Search engine updates', '30-day monitoring'],
      duration: '1 day + 30 days support'
    }
  ];

  const migrationBenefits = [
    {
      icon: <TrendingUp className="h-8 w-8 text-green-500" />,
      title: 'Improved Performance',
      description: 'WordPress typically offers better performance than other platforms with proper optimisation.',
      stats: 'Average 200% speed improvement'
    },
    {
      icon: <Search className="h-8 w-8 text-blue-500" />,
      title: 'Better SEO Capabilities',
      description: 'WordPress provides superior SEO tools and flexibility for ranking higher in search results.',
      stats: 'Average 40% SEO improvement'
    },
    {
      icon: <Settings className="h-8 w-8 text-purple-500" />,
      title: 'Greater Flexibility',
      description: 'Access to thousands of themes and plugins for unlimited customisation possibilities.',
      stats: '60,000+ plugins available'
    },
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      title: 'Easier Management',
      description: 'User-friendly interface that makes content management simple for non-technical users.',
      stats: '43% of web uses WordPress'
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
      title: 'Minimal Downtime',
      description: 'Staging environment ensures minimal disruption to your business'
    },
    {
      icon: <Search className="h-6 w-6 text-purple-500" />,
      title: 'SEO Preservation',
      description: 'Maintain and improve search engine rankings through proper redirects'
    },
    {
      icon: <Award className="h-6 w-6 text-orange-500" />,
      title: '30-Day Support',
      description: 'Free post-migration support and issue resolution'
    }
  ];

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 via-blue-600/20 to-purple-700/20"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-600/20 rounded-2xl mb-8">
              <ArrowRightLeft className="h-10 w-10 text-green-400" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              WordPress Migration Services
              <span className="block gradient-text">Seamless Platform Transitions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Expert WordPress migration services that move your website from any platform to WordPress 
              with zero data loss, improved performance, and enhanced functionality for UK businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 hover-glow flex items-center justify-center space-x-2"
              >
                <span>Start Migration</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-green-400 text-green-400 px-8 py-4 rounded-xl font-semibold hover:bg-green-400 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Free Migration Assessment</span>
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
              Platform <span className="gradient-text">Migration Expertise</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We specialise in migrating from all major platforms to WordPress, ensuring a smooth transition with improved functionality.
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
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
              >
                <div className="flex items-center justify-between mb-6">
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
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-400 text-sm">Timeframe:</span>
                    <span className="text-blue-400 font-medium text-sm">{migration.timeframe}</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-green-400 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {migration.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Benefits */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Migrate to <span className="gradient-text">WordPress</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              WordPress offers superior flexibility, performance, and growth potential compared to other platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {migrationBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white">
                        {benefit.title}
                      </h3>
                      <span className="text-green-400 font-bold text-sm bg-green-400/10 px-3 py-1 rounded-full">
                        {benefit.stats}
                      </span>
                    </div>
                    <p className="text-gray-300">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Process */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Migration Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A systematic approach that ensures your migration is completed successfully with minimal risk and maximum benefit.
            </p>
          </div>

          <div className="space-y-12">
            {migrationProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col lg:flex-row items-start gap-8"
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold">
                    {step.step}
                  </div>
                </div>
                <div className="flex-grow bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {step.title}
                      </h3>
                      <p className="text-gray-300 mb-6">
                        {step.description}
                      </p>
                    </div>
                    <div className="flex-shrink-0 lg:ml-8">
                      <span className="inline-flex items-center px-4 py-2 bg-green-600/20 text-green-400 rounded-full text-sm font-medium">
                        <Clock className="h-4 w-4 mr-2" />
                        {step.duration}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {step.tasks.map((task, taskIndex) => (
                      <div key={taskIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
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

      {/* Guarantees */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Migration Guarantees</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We stand behind our migration services with comprehensive guarantees that protect your investment.
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

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Migrate to WordPress?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Join thousands of UK businesses that have successfully migrated to WordPress. Get a free migration assessment and quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-green-50 transition-all duration-300 hover-glow flex items-center justify-center space-x-2"
              >
                <span>Get Migration Quote</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Free Assessment</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WordPressMigrationServices;