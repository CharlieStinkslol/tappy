import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Server, 
  Zap, 
  Shield, 
  Globe, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Database,
  Monitor,
  Award,
  Users,
  TrendingUp,
  Lock,
  Activity,
  HardDrive,
  Wifi,
  Settings,
  Star
} from 'lucide-react';

const ManagedWebsiteHosting = () => {
  const hostingFeatures = [
    {
      icon: <Zap className="h-8 w-8 text-orange-500" />,
      title: 'Lightning-Fast Performance',
      description: 'SSD storage, advanced caching, and optimised server configurations deliver exceptional loading speeds for UK businesses.',
      benefits: ['Sub-second load times', 'Global CDN included', 'Advanced caching layers', 'Performance monitoring']
    },
    {
      icon: <Shield className="h-8 w-8 text-green-500" />,
      title: 'Enterprise Security',
      description: 'Multi-layered security with real-time monitoring, malware protection, and automated security updates.',
      benefits: ['24/7 security monitoring', 'Malware scanning & removal', 'SSL certificates included', 'DDoS protection']
    },
    {
      icon: <Database className="h-8 w-8 text-blue-500" />,
      title: 'Fully Managed Service',
      description: 'Complete website management including updates, backups, monitoring, and technical support.',
      benefits: ['Automatic updates', 'Daily backups', 'Expert technical support', 'Proactive monitoring']
    },
    {
      icon: <Globe className="h-8 w-8 text-purple-500" />,
      title: 'UK-Based Infrastructure',
      description: 'Servers located in the UK for optimal performance and GDPR compliance for British businesses.',
      benefits: ['UK data centres', 'GDPR compliant', 'Low latency', 'Local support team']
    }
  ];

  const hostingPlans = [
    {
      name: 'Business Starter',
      description: 'Perfect for small business websites',
      features: [
        '1 website',
        '20GB SSD storage',
        '200GB bandwidth',
        'Free SSL certificate',
        'Daily backups',
        'Email support',
        'Website monitoring',
        'Basic security protection'
      ],
      popular: false
    },
    {
      name: 'Business Pro',
      description: 'Ideal for growing businesses',
      features: [
        '5 websites',
        '100GB SSD storage',
        '1TB bandwidth',
        'Free SSL certificates',
        'Daily backups with 60-day retention',
        'Priority support',
        'Staging environments',
        'Advanced security monitoring',
        'Performance optimisation',
        'Malware removal'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'For high-traffic websites',
      features: [
        'Unlimited websites',
        '500GB SSD storage',
        'Unlimited bandwidth',
        'Wildcard SSL certificates',
        'Hourly backups with 90-day retention',
        '24/7 phone support',
        'Multiple staging environments',
        'Enterprise security suite',
        'Dedicated account manager',
        'Custom configurations'
      ],
      popular: false
    }
  ];

  const managedServices = [
    {
      service: 'Website Updates',
      description: 'Automatic updates for CMS, plugins, and themes',
      frequency: 'Weekly'
    },
    {
      service: 'Security Monitoring',
      description: 'Real-time monitoring and threat detection',
      frequency: '24/7'
    },
    {
      service: 'Performance Monitoring',
      description: 'Speed and uptime monitoring with alerts',
      frequency: 'Continuous'
    },
    {
      service: 'Backup Management',
      description: 'Automated backups with secure storage',
      frequency: 'Daily'
    },
    {
      service: 'Technical Support',
      description: 'Expert support for all hosting-related issues',
      frequency: 'As needed'
    },
    {
      service: 'Malware Removal',
      description: 'Professional malware detection and removal',
      frequency: 'As needed'
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
              <Server className="h-10 w-10 text-blue-400" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Managed Website Hosting
              <span className="block gradient-text">Built for UK Businesses</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Professional managed hosting services with UK-based servers, enterprise security, 
              and expert support. Focus on your business whilst we handle the technical details.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover-glow flex items-center justify-center space-x-2"
              >
                <span>Get Hosting Quote</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-xl font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Free Migration</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose Our <span className="gradient-text">Managed Hosting</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive hosting solutions designed specifically for UK businesses with enterprise-grade infrastructure and support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {hostingFeatures.map((feature, index) => (
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
                    {feature.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 mb-6">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{benefit}</span>
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

      {/* Hosting Plans */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Hosting Plans for <span className="gradient-text">Every Business</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the hosting plan that fits your needs, with the flexibility to upgrade as your business grows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hostingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 relative ${
                  plan.popular ? 'ring-2 ring-blue-600 transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    plan.popular 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-blue-600/20 text-blue-400 hover:bg-blue-600 hover:text-white'
                  }`}
                >
                  Choose Plan
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Managed Services */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What's <span className="gradient-text">Included</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our managed hosting includes comprehensive services to keep your website running smoothly and securely.
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50">
            <div className="grid grid-cols-3 gap-0 bg-gray-800/70 p-4 font-semibold text-white text-sm">
              <div>Service</div>
              <div className="text-center">Description</div>
              <div className="text-center">Frequency</div>
            </div>
            
            {managedServices.map((service, index) => (
              <div key={index} className="grid grid-cols-3 gap-0 p-4 border-t border-gray-700">
                <div className="font-medium text-white">{service.service}</div>
                <div className="text-gray-300 text-sm">{service.description}</div>
                <div className="text-center text-green-400 font-bold text-sm">{service.frequency}</div>
              </div>
            ))}
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
              Ready for Better Website Hosting?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Experience the difference that managed hosting makes. Free migration, expert support, and guaranteed performance improvements.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 hover-glow flex items-center justify-center space-x-2"
              >
                <span>Start Free Migration</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Compare Plans</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ManagedWebsiteHosting;