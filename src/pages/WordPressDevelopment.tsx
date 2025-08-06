import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Palette, 
  Smartphone, 
  Search, 
  ShoppingCart, 
  Users, 
  CheckCircle, 
  Zap, 
  ArrowRight,
  Database,
  Shield,
  Settings,
  Globe,
  Layers,
  Target,
  TrendingUp,
  Award,
  Clock,
  Star
} from 'lucide-react';

const WordPressDevelopment = () => {
  const services = [
    {
      icon: <Code2 className="h-8 w-8 text-blue-500" />,
      title: 'Custom WordPress Development',
      description: 'Bespoke WordPress solutions tailored to your unique business requirements and brand identity.',
      features: ['Custom post types', 'Advanced custom fields', 'Custom taxonomies', 'API integrations'],
    },
    {
      icon: <Palette className="h-8 w-8 text-purple-500" />,
      title: 'Theme Development & Customisation',
      description: 'Custom themes and extensive theme modifications to match your exact design specifications.',
      features: ['Responsive design', 'Custom layouts', 'Brand integration', 'Performance optimised'],
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-green-500" />,
      title: 'WooCommerce Development',
      description: 'Complete e-commerce solutions with custom functionality and payment gateway integrations.',
      features: ['Custom checkout', 'Payment gateways', 'Inventory management', 'Multi-currency support'],
    },
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      title: 'Membership Sites',
      description: 'User registration, login systems, and membership-based content management solutions.',
      features: ['User roles', 'Content restrictions', 'Subscription management', 'Member dashboards'],
    },
    {
      icon: <Database className="h-8 w-8 text-red-500" />,
      title: 'Plugin Development',
      description: 'Custom WordPress plugins to extend functionality and integrate with third-party services.',
      features: ['Custom functionality', 'Third-party integrations', 'Admin interfaces', 'Update mechanisms'],
    },
    {
      icon: <Globe className="h-8 w-8 text-indigo-500" />,
      title: 'Multisite Development',
      description: 'WordPress multisite networks for managing multiple websites from a single installation.',
      features: ['Network management', 'Shared resources', 'Centralised updates', 'Custom configurations'],
    }
  ];

  const technologies = [
    {
      name: 'WordPress Core',
      description: 'Latest WordPress version with custom modifications',
      icon: <Code2 className="h-6 w-6" />
    },
    {
      name: 'Advanced Custom Fields',
      description: 'Flexible content management solutions',
      icon: <Settings className="h-6 w-6" />
    },
    {
      name: 'WooCommerce',
      description: 'E-commerce functionality and extensions',
      icon: <ShoppingCart className="h-6 w-6" />
    },
    {
      name: 'REST API',
      description: 'Custom endpoints and integrations',
      icon: <Database className="h-6 w-6" />
    },
    {
      name: 'React/Vue.js',
      description: 'Modern frontend frameworks integration',
      icon: <Layers className="h-6 w-6" />
    },
    {
      name: 'PHP 8+',
      description: 'Modern PHP development practices',
      icon: <Code2 className="h-6 w-6" />
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      description: 'Comprehensive analysis of your business requirements, target audience, and technical specifications.',
      deliverables: ['Requirements document', 'Technical specification', 'Project timeline', 'Cost breakdown'],
      duration: '3-5 days'
    },
    {
      step: '02',
      title: 'Design & Planning',
      description: 'Creating detailed wireframes, mockups, and technical architecture for your WordPress solution.',
      deliverables: ['Wireframes', 'Design mockups', 'Database schema', 'Architecture plan'],
      duration: '5-7 days'
    },
    {
      step: '03',
      title: 'Development & Integration',
      description: 'Building your custom WordPress solution with clean, efficient code and thorough testing.',
      deliverables: ['Custom theme/plugin', 'Functionality implementation', 'Third-party integrations', 'Testing reports'],
      duration: '10-20 days'
    },
    {
      step: '04',
      title: 'Testing & Optimisation',
      description: 'Comprehensive testing across devices and browsers with performance and security optimisation.',
      deliverables: ['Testing documentation', 'Performance report', 'Security audit', 'Optimisation recommendations'],
      duration: '3-5 days'
    },
    {
      step: '05',
      title: 'Launch & Support',
      description: 'Smooth deployment with training, documentation, and ongoing support for your team.',
      deliverables: ['Live website', 'Training materials', 'Documentation', '30-day support'],
      duration: '2-3 days'
    }
  ];

  const features = [
    {
      icon: <Smartphone className="h-6 w-6 text-blue-500" />,
      title: 'Mobile-First Design',
      description: 'Responsive websites that look perfect on all devices and screen sizes'
    },
    {
      icon: <Search className="h-6 w-6 text-green-500" />,
      title: 'SEO Optimised',
      description: 'Built-in SEO best practices with clean code and optimised structure'
    },
    {
      icon: <Zap className="h-6 w-6 text-orange-500" />,
      title: 'Performance Focused',
      description: 'Optimised for speed with advanced caching and compression techniques'
    },
    {
      icon: <Shield className="h-6 w-6 text-red-500" />,
      title: 'Security Hardened',
      description: 'Advanced security measures and regular monitoring for protection'
    },
    {
      icon: <Users className="h-6 w-6 text-purple-500" />,
      title: 'User-Friendly Admin',
      description: 'Intuitive admin interface for easy content management'
    },
    {
      icon: <Globe className="h-6 w-6 text-indigo-500" />,
      title: 'Scalable Architecture',
      description: 'Built to grow with your business and handle increased traffic'
    }
  ];

  const caseStudies = [
    {
      title: 'E-commerce Fashion Platform',
      client: 'Premium Fashion Retailer',
      challenge: 'Complex product variations and international shipping',
      solution: 'Custom WooCommerce with advanced product management',
      results: ['300% increase in online sales', '50% reduction in cart abandonment', '40% faster checkout process'],
      technologies: ['WooCommerce', 'Custom PHP', 'Payment APIs', 'Shipping integrations'],
      testimonial: 'The custom e-commerce solution transformed our online business completely.',
      image: 'fashion-ecommerce'
    },
    {
      title: 'Professional Services Portal',
      client: 'Legal Services Firm',
      challenge: 'Client portal with document management and billing',
      solution: 'Custom WordPress with membership functionality',
      results: ['80% reduction in admin time', '200% increase in client satisfaction', 'Streamlined billing process'],
      technologies: ['WordPress Multisite', 'Custom Post Types', 'User Roles', 'Payment Integration'],
      testimonial: 'Our client portal has revolutionised how we manage client relationships.',
      image: 'legal-portal'
    },
    {
      title: 'Educational Platform',
      client: 'Online Learning Provider',
      challenge: 'Course management with progress tracking and certificates',
      solution: 'Custom learning management system on WordPress',
      results: ['500+ active students', '95% course completion rate', 'Automated certificate generation'],
      technologies: ['LearnDash', 'Custom Plugins', 'Progress Tracking', 'Certificate System'],
      testimonial: 'The platform exceeded our expectations and our students love the experience.',
      image: 'education-platform'
    }
  ];

  const packages = [
    {
      name: 'Starter Website',
      description: 'Perfect for small businesses and startups',
      features: [
        'Custom WordPress theme',
        'Up to 10 pages',
        'Contact form integration',
        'SEO optimisation',
        'Mobile responsive design',
        'Basic security setup',
        '30 days support'
      ],
      popular: false
    },
    {
      name: 'Business Website',
      description: 'Ideal for growing businesses',
      features: [
        'Custom WordPress development',
        'Unlimited pages',
        'Advanced contact forms',
        'Blog functionality',
        'Social media integration',
        'Advanced SEO setup',
        'Performance optimisation',
        '60 days support'
      ],
      popular: true
    },
    {
      name: 'E-commerce Solution',
      description: 'Complete online store solution',
      features: [
        'Custom WooCommerce development',
        'Product catalogue management',
        'Payment gateway integration',
        'Inventory management',
        'Order management system',
        'Customer accounts',
        'Advanced analytics',
        '90 days support'
      ],
      popular: false
    }
  ];

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-blue-700/20"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-indigo-600/20 rounded-2xl mb-8">
              <Code2 className="h-10 w-10 text-indigo-400" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              WordPress Development
              <span className="block gradient-text">That Drives Growth</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Custom WordPress solutions, theme development, and e-commerce platforms that deliver exceptional 
              user experiences and drive business growth. Built for performance, security, and scalability.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover-glow flex items-center justify-center space-x-2"
              >
                <span>Start Your Project</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-indigo-400 text-indigo-400 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-400 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>View Portfolio</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive WordPress <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From simple websites to complex e-commerce platforms, we deliver WordPress solutions that scale with your business and exceed your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Technologies</span> We Master
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We use cutting-edge technologies and proven frameworks to build robust, scalable WordPress solutions that perform exceptionally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600/20 rounded-xl mb-6 text-indigo-400">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {tech.name}
                </h3>
                <p className="text-gray-300">
                  {tech.description}
                </p>
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
              Our <span className="gradient-text">Development Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A structured approach that ensures your WordPress project is delivered on time, within budget, and exceeds your expectations.
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
                  <div className="w-20 h-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold">
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
                      <span className="inline-flex items-center px-4 py-2 bg-indigo-600/20 text-indigo-400 rounded-full text-sm font-medium">
                        <Clock className="h-4 w-4 mr-2" />
                        {step.duration}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Deliverables:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {step.deliverables.map((deliverable, deliverableIndex) => (
                        <div key={deliverableIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                What Makes Our WordPress <span className="gradient-text">Development Different</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We combine technical expertise with business acumen to deliver WordPress solutions that not only look great but drive real results for your business.
              </p>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold mb-6">Why Choose WordPress?</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <Zap className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-white">Flexible & Scalable:</strong> 
                    <span className="text-gray-300 ml-2">Grows with your business from simple blogs to complex applications</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Search className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-white">SEO-Friendly:</strong> 
                    <span className="text-gray-300 ml-2">Built-in SEO capabilities help improve search engine rankings</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-white">User-Friendly:</strong> 
                    <span className="text-gray-300 ml-2">Easy content management for non-technical users</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-red-400 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-white">Secure & Reliable:</strong> 
                    <span className="text-gray-300 ml-2">Regular updates and security patches keep your site protected</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Recent WordPress <span className="gradient-text">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how we've helped businesses transform their online presence with custom WordPress solutions that drive real results.
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
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50"
              >
                <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-white/20 mb-2">{index + 1}</div>
                    <div className="text-white font-semibold">{study.image}</div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {study.title}
                    </h3>
                    <p className="text-indigo-400 text-sm font-medium mb-4">
                      {study.client}
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
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-purple-400 mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <blockquote className="border-l-4 border-indigo-500 pl-4 italic text-gray-300">
                    "{study.testimonial}"
                  </blockquote>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              WordPress Development <span className="gradient-text">Packages</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the package that best fits your needs, or let us create a custom solution tailored specifically for your business requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 relative ${
                  pkg.popular ? 'ring-2 ring-purple-600 transform scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2">
                      <Star className="h-4 w-4" />
                      <span>Most Popular</span>
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-300">
                    {pkg.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    pkg.popular 
                      ? 'bg-purple-600 text-white hover:bg-purple-700' 
                      : 'bg-blue-600/20 text-blue-400 hover:bg-blue-600 hover:text-white'
                  }`}
                >
                  Choose Package
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-700">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Build Your WordPress Site?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              Let's discuss your project requirements and create a WordPress solution that drives your business forward and exceeds your expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-all duration-300 hover-glow flex items-center justify-center space-x-2"
              >
                <span>Get Project Quote</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 flex items-center justify-center space-x-2"
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

export default WordPressDevelopment;