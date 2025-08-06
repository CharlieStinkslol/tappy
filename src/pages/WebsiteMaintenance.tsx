import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Clock, 
  Zap, 
  Users, 
  CheckCircle, 
  AlertTriangle, 
  TrendingUp, 
  Settings,
  ArrowRight,
  Database,
  Monitor,
  FileText,
  Search,
  Globe,
  Lock,
  Activity,
  Target,
  Award,
  Star
} from 'lucide-react';

const WebsiteMaintenance = () => {
  const maintenancePlans = [
    {
      name: 'Basic',
      price: '£45',
      period: 'Per Month + VAT',
      description: 'Small websites that need basic WordPress security',
      features: [
        'Plugin Updates',
        'Theme Updates',
        '2FA Setup',
        'Premium Security Plugins',
        'Weekly Backups',
        'Ticketed Support (via Portal)',
        'Onboarding Call'
      ],
      popular: false,
    },
    {
      name: 'Enhanced',
      price: '£75',
      period: 'Per Month + VAT',
      description: 'Websites requiring top-tier protection against current and emerging threats, with the occasional content update',
      features: [
        'Plugin Updates',
        'Theme Updates',
        '2FA Setup',
        'Premium Security Plugins',
        'Daily Backups',
        'Speed Optimisation',
        'Up to 2 content uploads',
        'Up to 1hr development support',
        'Account Manager',
        'Priority Ticketed Support (via Portal)',
        'Onboarding Call'
      ],
      popular: true,
    },
    {
      name: 'Complete',
      price: '£145',
      period: 'Per Month + VAT',
      description: 'Busy business owners seeking hands-on support from a dedicated team',
      features: [
        'Plugin Updates',
        'Theme Updates',
        '2FA Setup',
        'Premium Security Plugins',
        'Daily Backups',
        'Speed Optimisation',
        'WooCommerce Support',
        'Up to 4 content uploads',
        'Up to 2hrs development support',
        'Dedicated Account Manager',
        'Ticketed Support (via Portal)',
        'WhatsApp & Email Support',
        'Onboarding Call'
      ],
      popular: false,
    }
  ];

  const services = [
    {
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      title: 'Security Monitoring & Protection',
      description: 'Continuous monitoring for malware, vulnerabilities, and suspicious activities with immediate response protocols.',
      features: ['Real-time threat detection', 'Malware removal', 'Firewall management', 'Security hardening'],
      stats: '99.9% threat prevention rate'
    },
    {
      icon: <Zap className="h-8 w-8 text-orange-500" />,
      title: 'Performance Optimisation',
      description: 'Regular speed audits, image optimisation, and caching improvements to maintain peak website performance.',
      features: ['Speed optimisation', 'Image compression', 'Cache management', 'Database cleanup'],
      stats: 'Average 40% speed improvement'
    },
    {
      icon: <Settings className="h-8 w-8 text-purple-500" />,
      title: 'Updates & Maintenance',
      description: 'Timely WordPress core, plugin, and theme updates with compatibility testing before implementation.',
      features: ['Core updates', 'Plugin updates', 'Theme updates', 'Compatibility testing'],
      stats: '100% update success rate'
    },
    {
      icon: <Database className="h-8 w-8 text-green-500" />,
      title: 'Backup Management',
      description: 'Automated daily backups with secure offsite storage and quick restore capabilities when needed.',
      features: ['Automated backups', 'Offsite storage', 'One-click restore', 'Version control'],
      stats: '30-day backup retention'
    },
    {
      icon: <Monitor className="h-8 w-8 text-red-500" />,
      title: 'Uptime Monitoring',
      description: '24/7 monitoring with instant alerts and immediate response to ensure your website stays online.',
      features: ['24/7 monitoring', 'Instant alerts', 'Downtime response', 'Performance tracking'],
      stats: '99.9% uptime guarantee'
    },
    {
      icon: <Search className="h-8 w-8 text-indigo-500" />,
      title: 'SEO Maintenance',
      description: 'Ongoing SEO monitoring, broken link fixes, and search engine optimisation to maintain rankings.',
      features: ['SEO monitoring', 'Broken link fixes', 'Meta optimisation', 'Search console management'],
      stats: 'Average 25% ranking improvement'
    }
  ];

  const whyMaintenance = [
    {
      icon: <AlertTriangle className="h-8 w-8 text-red-500" />,
      stat: '43%',
      description: 'of small business websites are attacked by hackers annually',
      impact: 'Without maintenance, your site is vulnerable'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-500" />,
      stat: '73%',
      description: 'of users abandon sites that take longer than 3 seconds to load',
      impact: 'Poor performance costs you customers'
    },
    {
      icon: <Shield className="h-8 w-8 text-green-500" />,
      stat: '90%',
      description: 'of WordPress vulnerabilities come from outdated plugins',
      impact: 'Regular updates are critical for security'
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-500" />,
      stat: '60%',
      description: 'of small companies go out of business within 6 months of a cyber attack',
      impact: 'Prevention is better than recovery'
    }
  ];

  const maintenanceProcess = [
    {
      step: '01',
      title: 'Initial Site Audit',
      description: 'Comprehensive analysis of your website\'s current security, performance, and maintenance needs.',
      tasks: ['Security assessment', 'Performance analysis', 'Plugin audit', 'Backup verification'],
      duration: '1-2 days'
    },
    {
      step: '02',
      title: 'Monitoring Setup',
      description: 'Installation of monitoring tools and security systems to watch your site 24/7.',
      tasks: ['Security tools installation', 'Uptime monitoring setup', 'Performance tracking', 'Alert configuration'],
      duration: '1 day'
    },
    {
      step: '03',
      title: 'Regular Maintenance',
      description: 'Scheduled updates, backups, and optimisations performed by our expert team.',
      tasks: ['Weekly/daily backups', 'Security scans', 'Performance optimisation', 'Content updates'],
      duration: 'Ongoing'
    },
    {
      step: '04',
      title: 'Monitoring & Reporting',
      description: 'Continuous monitoring with detailed monthly reports showing your site\'s health and performance.',
      tasks: ['24/7 monitoring', 'Monthly reports', 'Performance metrics', 'Security updates'],
      duration: 'Ongoing'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'E-commerce Store Owner',
      content: 'Since starting the maintenance plan, our website has been rock solid. No more worrying about security or updates - the team handles everything professionally.',
      rating: 5,
      plan: 'Enhanced'
    },
    {
      name: 'Michael Chen',
      company: 'Digital Marketing Agency',
      content: 'The maintenance service has saved us countless hours. Our sites are faster, more secure, and we can focus on growing our business instead of technical issues.',
      rating: 5,
      plan: 'Complete'
    },
    {
      name: 'Emma Williams',
      company: 'Small Business Owner',
      content: 'Best investment I\'ve made for my website. The peace of mind knowing experts are monitoring and maintaining my site 24/7 is invaluable.',
      rating: 5,
      plan: 'Basic'
    }
  ];

  const addOnServices = [
    {
      name: 'Content Updates',
      description: 'Additional content updates beyond plan limits',
    },
    {
      name: 'Emergency Support',
      description: 'Priority support for urgent issues outside business hours',
    },
    {
      name: 'Performance Audit',
      description: 'Comprehensive performance analysis and optimisation recommendations',
    },
    {
      name: 'Security Audit',
      description: 'In-depth security assessment with detailed recommendations',
    },
    {
      name: 'SEO Audit',
      description: 'Complete SEO analysis with actionable improvement plan',
    },
    {
      name: 'Conversion Optimisation',
      description: 'A/B testing and conversion rate optimisation setup',
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
              <Shield className="h-10 w-10 text-green-400" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              WordPress Maintenance
              <span className="block gradient-text">That Protects Your Business</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Professional WordPress maintenance services that keep your website secure, fast, and running smoothly. 
              24/7 monitoring, regular updates, and expert support so you can focus on growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 hover-glow flex items-center justify-center space-x-2"
              >
                <span>Choose Your Plan</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-green-400 text-green-400 px-8 py-4 rounded-xl font-semibold hover:bg-green-400 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Free Site Audit</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Maintenance Matters */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          {/* Maintenance Impact Chart */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Impact of Regular Website Maintenance
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="relative h-32 mb-4">
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 bg-gradient-to-t from-red-600 to-red-400 rounded-t-lg" style={{height: '80%'}}>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-red-400 font-bold">
                      High Risk
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-1/2 transform translate-x-4 w-16 bg-gradient-to-t from-green-600 to-green-400 rounded-t-lg" style={{height: '20%'}}>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-green-400 font-bold">
                      Protected
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 font-medium">Security Vulnerabilities</p>
                <p className="text-gray-400 text-sm">Without vs With Maintenance</p>
              </div>
              <div className="text-center">
                <div className="relative h-32 mb-4">
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 bg-gradient-to-t from-orange-600 to-orange-400 rounded-t-lg" style={{height: '70%'}}>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-orange-400 font-bold">
                      Slow
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-1/2 transform translate-x-4 w-16 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg" style={{height: '95%'}}>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-blue-400 font-bold">
                      Fast
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 font-medium">Website Performance</p>
                <p className="text-gray-400 text-sm">Unmaintained vs Maintained</p>
              </div>
              <div className="text-center">
                <div className="relative h-32 mb-4">
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 bg-gradient-to-t from-red-600 to-red-400 rounded-t-lg" style={{height: '60%'}}>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-red-400 font-bold">
                      Poor
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-1/2 transform translate-x-4 w-16 bg-gradient-to-t from-purple-600 to-purple-400 rounded-t-lg" style={{height: '90%'}}>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-purple-400 font-bold">
                      Excellent
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 font-medium">User Experience</p>
                <p className="text-gray-400 text-sm">Without vs With Care</p>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Website Maintenance is <span className="gradient-text">Critical</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your website is your digital storefront. Without proper maintenance, you risk security breaches, poor performance, and lost business opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyMaintenance.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-800 rounded-xl mb-6">
                  {item.icon}
                </div>
                <div className="text-4xl font-bold gradient-text mb-4">{item.stat}</div>
                <p className="text-gray-300 mb-4 text-sm">{item.description}</p>
                <p className="text-red-400 text-xs font-medium">{item.impact}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-300 font-medium">
              Don't become a statistic. Protect your website with professional maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive <span className="gradient-text">Maintenance Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our maintenance services cover every aspect of your website's health, from security to performance optimisation and everything in between.
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
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center">
                    {service.icon}
                  </div>
                  <span className="text-green-400 font-bold text-sm bg-green-400/10 px-3 py-1 rounded-full">
                    {service.stats}
                  </span>
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

      {/* Pricing Plans */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Maintenance Plans for <span className="gradient-text">Every Business</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the maintenance plan that fits your website's needs and budget. All plans include our core security and performance features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {maintenancePlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 relative ${
                  plan.popular ? 'ring-2 ring-purple-600 transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2">
                      <span>Best Value</span>
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-white">{plan.price}</div>
                    <div className="text-gray-400">{plan.period}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Best for: {plan.description}
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
                      ? 'bg-purple-600 text-white hover:bg-purple-700' 
                      : 'bg-blue-600/20 text-blue-400 hover:bg-blue-600 hover:text-white'
                  }`}
                >
                  Sign Up
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How Our <span className="gradient-text">Maintenance Works</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proactive approach to website maintenance that prevents problems before they occur and keeps your site running at peak performance.
            </p>
          </div>

          <div className="space-y-12">
            {maintenanceProcess.map((step, index) => (
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

      {/* Testimonials */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about our maintenance services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {testimonial.company}
                    </div>
                  </div>
                  <div className="text-green-400 text-sm font-medium bg-green-400/10 px-3 py-1 rounded-full">
                    {testimonial.plan}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-on Services */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Additional <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enhance your maintenance plan with additional services tailored to your specific needs and requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {addOnServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">
                    {service.name}
                  </h3>
                </div>
                <p className="text-gray-300">
                  {service.description}
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
              Protect Your Website Today
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Don't wait for a security breach or performance issue. Start protecting your website with professional maintenance today and focus on growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-green-50 transition-all duration-300 hover-glow flex items-center justify-center space-x-2"
              >
                <span>Start Maintenance Plan</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Get Free Site Audit</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WebsiteMaintenance;