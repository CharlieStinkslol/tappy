import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  CreditCard, 
  Package, 
  Users, 
  CheckCircle, 
  ArrowRight,
  TrendingUp,
  Shield,
  Globe,
  Smartphone,
  BarChart3,
  Settings,
  Zap,
  Award,
  Clock,
  Star,
  Target,
  Database,
  Lock
} from 'lucide-react';

const EcommerceDevelopment = () => {
  const ecommerceFeatures = [
    {
      icon: <ShoppingCart className="h-8 w-8 text-blue-500" />,
      title: 'Advanced Product Management',
      description: 'Sophisticated product catalogues with variations, bundles, and inventory management systems.',
      features: ['Product variations', 'Inventory tracking', 'Bundle products', 'Digital downloads']
    },
    {
      icon: <CreditCard className="h-8 w-8 text-green-500" />,
      title: 'Secure Payment Processing',
      description: 'Multiple payment gateways with PCI compliance and fraud protection for secure transactions.',
      features: ['Multiple payment methods', 'PCI compliance', 'Fraud protection', 'Subscription billing']
    },
    {
      icon: <Users className="h-8 w-8 text-purple-500" />,
      title: 'Customer Account Management',
      description: 'Comprehensive customer portals with order history, wishlists, and personalised experiences.',
      features: ['Customer accounts', 'Order tracking', 'Wishlist functionality', 'Personalisation']
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-orange-500" />,
      title: 'Analytics & Reporting',
      description: 'Detailed sales analytics, customer insights, and performance reporting for data-driven decisions.',
      features: ['Sales analytics', 'Customer insights', 'Performance reports', 'ROI tracking']
    },
    {
      icon: <Globe className="h-8 w-8 text-red-500" />,
      title: 'Multi-Currency & Shipping',
      description: 'International selling capabilities with multi-currency support and flexible shipping options.',
      features: ['Multi-currency', 'International shipping', 'Tax calculations', 'Regional pricing']
    },
    {
      icon: <Smartphone className="h-8 w-8 text-indigo-500" />,
      title: 'Mobile Commerce',
      description: 'Optimised mobile shopping experience with touch-friendly interfaces and mobile payments.',
      features: ['Mobile optimised', 'Touch interfaces', 'Mobile payments', 'App-like experience']
    }
  ];

  const platforms = [
    {
      name: 'WooCommerce',
      description: 'The most popular WordPress e-commerce solution',
      pros: ['Highly customisable', 'Large plugin ecosystem', 'SEO-friendly', 'Cost-effective'],
      cons: ['Requires hosting management', 'Can be complex for beginners'],
      bestFor: 'Businesses wanting full control and customisation'
    },
    {
      name: 'Shopify Plus',
      description: 'Enterprise e-commerce platform for high-volume stores',
      pros: ['Fully hosted', 'Excellent performance', 'Built-in features', 'Great support'],
      cons: ['Monthly fees', 'Limited customisation', 'Transaction fees'],
      bestFor: 'High-volume stores needing reliability'
    },
    {
      name: 'Magento Commerce',
      description: 'Enterprise-grade e-commerce for complex requirements',
      pros: ['Highly scalable', 'Advanced features', 'Multi-store management', 'B2B capabilities'],
      cons: ['Complex setup', 'Requires expertise', 'Higher costs'],
      bestFor: 'Large enterprises with complex needs'
    }
  ];

  const developmentProcess = [
    {
      step: '01',
      title: 'E-commerce Strategy',
      description: 'Define your online selling strategy, target audience, and business requirements.',
      tasks: ['Market research', 'Competitor analysis', 'Platform selection', 'Feature planning'],
      duration: '1-2 weeks'
    },
    {
      step: '02',
      title: 'Design & User Experience',
      description: 'Create engaging designs focused on conversion optimisation and user experience.',
      tasks: ['UX wireframes', 'Visual design', 'Mobile optimisation', 'Conversion optimisation'],
      duration: '2-3 weeks'
    },
    {
      step: '03',
      title: 'Development & Integration',
      description: 'Build your e-commerce platform with payment gateways, shipping, and third-party integrations.',
      tasks: ['Platform development', 'Payment integration', 'Shipping setup', 'Third-party APIs'],
      duration: '4-6 weeks'
    },
    {
      step: '04',
      title: 'Testing & Optimisation',
      description: 'Comprehensive testing of all functionality, security, and performance optimisation.',
      tasks: ['Functionality testing', 'Security testing', 'Performance optimisation', 'User testing'],
      duration: '1-2 weeks'
    },
    {
      step: '05',
      title: 'Launch & Support',
      description: 'Go live with monitoring, analytics setup, and ongoing support for your e-commerce success.',
      tasks: ['Launch preparation', 'Analytics setup', 'Staff training', 'Ongoing support'],
      duration: '1 week'
    }
  ];

  const caseStudies = [
    {
      client: 'Premium Fashion Retailer',
      industry: 'Fashion & Retail',
      challenge: 'Outdated e-commerce platform limiting growth and mobile sales',
      solution: 'Custom WooCommerce development with advanced product filtering and mobile optimisation',
      results: {
        mobileConversions: '+250% increase',
        averageOrderValue: '+45% increase',
        pageLoadSpeed: '70% faster',
        customerSatisfaction: '95% rating'
      },
      testimonial: 'The new e-commerce platform has transformed our business. Mobile sales now represent 60% of our revenue.',
      timeframe: '8 weeks'
    },
    {
      client: 'Artisan Food Producer',
      industry: 'Food & Beverage',
      challenge: 'Need for subscription-based sales and complex shipping requirements',
      solution: 'WooCommerce with subscription functionality and advanced shipping calculations',
      results: {
        subscriptionRevenue: '+400% increase',
        customerRetention: '+80% improvement',
        shippingAccuracy: '99.5% rate',
        operationalEfficiency: '+60% improvement'
      },
      testimonial: 'The subscription system has created a steady revenue stream and our customers love the convenience.',
      timeframe: '10 weeks'
    },
    {
      client: 'B2B Manufacturing Company',
      industry: 'Manufacturing',
      challenge: 'Complex B2B pricing and bulk ordering requirements',
      solution: 'Custom B2B e-commerce platform with tiered pricing and bulk order management',
      results: {
        b2bSales: '+180% increase',
        orderProcessing: '75% faster',
        customerPortal: '90% adoption',
        salesTeamEfficiency: '+50% improvement'
      },
      testimonial: 'Our B2B customers can now place orders 24/7, and our sales team can focus on relationship building.',
      timeframe: '12 weeks'
    }
  ];

  const ecommerceStats = [
    {
      stat: '£688bn',
      description: 'UK e-commerce market value in 2023',
      growth: '+15% year-on-year'
    },
    {
      stat: '87%',
      description: 'of UK consumers shop online regularly',
      growth: 'Growing mobile usage'
    },
    {
      stat: '3.2%',
      description: 'average e-commerce conversion rate',
      growth: 'Optimisation opportunity'
    },
    {
      stat: '53%',
      description: 'of mobile users abandon slow sites',
      growth: 'Speed is critical'
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
              <ShoppingCart className="h-10 w-10 text-green-400" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              E-commerce Development
              <span className="block gradient-text">That Drives Sales</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Professional e-commerce development services that create powerful online stores, 
              optimise conversions, and scale with your business growth in the competitive UK market.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 hover-glow flex items-center justify-center space-x-2"
              >
                <span>Start E-commerce Project</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-green-400 text-green-400 px-8 py-4 rounded-xl font-semibold hover:bg-green-400 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Free E-commerce Consultation</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* UK E-commerce Stats */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              UK E-commerce <span className="gradient-text">Opportunity</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The UK e-commerce market continues to grow rapidly, presenting enormous opportunities for businesses with the right online strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {ecommerceStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 text-center"
              >
                <div className="text-4xl font-bold gradient-text mb-4">{stat.stat}</div>
                <p className="text-gray-300 mb-4 text-sm">{stat.description}</p>
                <p className="text-green-400 text-xs font-medium">{stat.growth}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive <span className="gradient-text">E-commerce Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to create a successful online store that converts visitors into customers and scales with your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ecommerceFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
              >
                <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Comparison */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              E-commerce <span className="gradient-text">Platform Comparison</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with leading e-commerce platforms to find the perfect solution for your business needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  {platform.name}
                </h3>
                <p className="text-gray-300 mb-6">
                  {platform.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-green-400 mb-3">Advantages:</h4>
                  <ul className="space-y-2">
                    {platform.pros.map((pro, proIndex) => (
                      <li key={proIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-orange-400 mb-3">Considerations:</h4>
                  <ul className="space-y-2">
                    {platform.cons.map((con, conIndex) => (
                      <li key={conIndex} className="flex items-center space-x-2">
                        <Target className="h-4 w-4 text-orange-500 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-blue-900/20 border border-blue-500/50 rounded-lg p-4">
                  <h5 className="font-medium text-blue-400 mb-2">Best For:</h5>
                  <p className="text-blue-300 text-sm">{platform.bestFor}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our E-commerce <span className="gradient-text">Development Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures your e-commerce project delivers exceptional results and drives business growth.
            </p>
          </div>

          <div className="space-y-12">
            {developmentProcess.map((step, index) => (
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

      {/* Case Studies */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              E-commerce <span className="gradient-text">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from UK businesses that have transformed their online sales with our e-commerce development expertise.
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
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
              >
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">
                      {study.client}
                    </h3>
                    <span className="text-green-400 text-sm bg-green-400/10 px-3 py-1 rounded-full">
                      {study.industry}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">
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
                  <div className="space-y-3">
                    {Object.entries(study.results).map(([key, value], resultIndex) => (
                      <div key={resultIndex} className="flex items-center justify-between">
                        <span className="text-gray-300 text-sm capitalize">
                          {key.replace(/([A-Z])/g, ' $1')}:
                        </span>
                        <span className="text-green-400 font-bold text-sm">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-300">
                  "{study.testimonial}"
                </blockquote>
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
              Ready to Launch Your Online Store?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Join the thousands of UK businesses successfully selling online. Let's create an e-commerce platform that drives your business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-green-50 transition-all duration-300 hover-glow flex items-center justify-center space-x-2"
              >
                <span>Start E-commerce Project</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Get Platform Recommendation</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EcommerceDevelopment;