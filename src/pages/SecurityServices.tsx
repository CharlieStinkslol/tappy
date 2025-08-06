import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  AlertTriangle, 
  Users, 
  CheckCircle, 
  Eye, 
  FileText, 
  Zap, 
  ArrowRight,
  Database,
  Globe,
  Monitor,
  Activity,
  Target,
  Award,
  Clock,
  Star,
  Server,
  Search
} from 'lucide-react';

const SecurityServices = () => {
  const securityThreats = [
    {
      icon: <AlertTriangle className="h-8 w-8 text-red-500" />,
      title: 'Malware Attacks',
      description: 'Malicious software that can steal data, redirect traffic, or completely compromise your website and business operations.',
      frequency: 'Every 39 seconds',
      impact: 'Complete site compromise',
      prevention: 'Real-time scanning & removal'
    },
    {
      icon: <Lock className="h-8 w-8 text-orange-500" />,
      title: 'Brute Force Attacks',
      description: 'Automated attempts to guess passwords and gain unauthorised access to your admin area and sensitive data.',
      frequency: '30,000+ attempts daily',
      impact: 'Unauthorised access',
      prevention: 'Login protection & monitoring'
    },
    {
      icon: <Eye className="h-8 w-8 text-purple-500" />,
      title: 'SQL Injection',
      description: 'Database attacks that can expose sensitive customer and business information, leading to data breaches.',
      frequency: '65% of web attacks',
      impact: 'Data theft & privacy breach',
      prevention: 'Code hardening & firewalls'
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-500" />,
      title: 'DDoS Attacks',
      description: 'Distributed denial of service attacks that overwhelm your server and make your website inaccessible.',
      frequency: 'Increasing 20% yearly',
      impact: 'Website downtime',
      prevention: 'Traffic filtering & CDN'
    }
  ];

  const securityServices = [
    {
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      title: 'Malware Scanning & Removal',
      description: 'Advanced malware detection with immediate removal and infected file cleanup to protect your website and visitors.',
      features: ['Real-time scanning', 'Automatic removal', 'File quarantine', 'Clean-up reports', 'Visitor protection'],
      stats: '99.9% detection rate'
    },
    {
      icon: <Lock className="h-8 w-8 text-green-500" />,
      title: 'Firewall Protection',
      description: 'Advanced web application firewall to block malicious traffic before it reaches your site.',
      features: ['IP blocking', 'Country filtering', 'Bot protection', 'Rate limiting', 'Attack prevention'],
      stats: '10M+ threats blocked daily'
    },
    {
      icon: <Users className="h-8 w-8 text-purple-500" />,
      title: 'Access Control & Authentication',
      description: 'Multi-factor authentication and user management to secure admin access and prevent unauthorised entry.',
      features: ['2FA setup', 'Login monitoring', 'Session management', 'Role-based access', 'Failed login alerts'],
      stats: '95% reduction in breaches'
    },
    {
      icon: <Monitor className="h-8 w-8 text-orange-500" />,
      title: 'Security Monitoring',
      description: '24/7 monitoring with instant alerts for suspicious activities and security events.',
      features: ['Real-time alerts', 'Activity logging', 'Intrusion detection', 'Incident response', 'Threat analysis'],
      stats: '24/7 monitoring coverage'
    },
    {
      icon: <Search className="h-8 w-8 text-red-500" />,
      title: 'Vulnerability Scanning',
      description: 'Regular security audits to identify and patch vulnerabilities before they\'re exploited.',
      features: ['Plugin scanning', 'Core updates', 'Security patches', 'Vulnerability reports', 'Risk assessment'],
      stats: 'Weekly security scans'
    },
    {
      icon: <Server className="h-8 w-8 text-indigo-500" />,
      title: 'SSL & HTTPS Management',
      description: 'SSL certificate management and HTTPS enforcement for secure data transmission.',
      features: ['SSL installation', 'Auto-renewal', 'Mixed content fixes', 'Security headers', 'Certificate monitoring'],
      stats: '100% secure connections'
    }
  ];

  const securityPlans = [
    {
      name: 'Basic Security',
      description: 'Essential protection for small websites',
      features: [
        'Daily malware scanning',
        'Basic firewall protection',
        'SSL certificate management',
        'Login security (2FA)',
        'Weekly security reports',
        'Email support',
        'Malware removal (up to 2/month)',
        'Security monitoring'
      ],
      popular: false,
    },
    {
      name: 'Advanced Security',
      description: 'Comprehensive protection for business websites',
      features: [
        'Real-time malware scanning',
        'Advanced firewall with geo-blocking',
        'Vulnerability scanning',
        'DDoS protection',
        'Security monitoring & alerts',
        'Priority support',
        'Monthly security audits',
        'Unlimited malware removal',
        'Blacklist monitoring',
        'Security hardening'
      ],
      popular: true,
    },
    {
      name: 'Enterprise Security',
      description: 'Maximum protection for high-value websites',
      features: [
        'Everything in Advanced',
        'Dedicated security specialist',
        'Custom security rules',
        'Incident response team',
        'Compliance reporting',
        'Phone support',
        'Security consultation calls',
        'Penetration testing',
        'Custom security policies',
        'Advanced threat intelligence',
        'Security training for staff',
        'Emergency response hotline'
      ],
      popular: false,
    }
  ];

  const securityStats = [
    { 
      number: '43%', 
      description: 'of cyber attacks target small businesses',
      impact: 'SMBs are prime targets'
    },
    { 
      number: '60%', 
      description: 'of small companies go out of business within 6 months of a cyber attack',
      impact: 'Security is business-critical'
    },
    { 
      number: '18,000+', 
      description: 'WordPress sites are hacked every day',
      impact: 'WordPress needs protection'
    },
    { 
      number: '£3.86M', 
      description: 'average cost of a data breach in 2023',
      impact: 'Prevention is cheaper than recovery'
    }
  ];

  const securityProcess = [
    {
      step: '01',
      title: 'Security Assessment',
      description: 'Comprehensive security audit of your website to identify vulnerabilities and security gaps.',
      tasks: ['Vulnerability scan', 'Security audit', 'Risk assessment', 'Compliance check'],
      duration: '1-2 days'
    },
    {
      step: '02',
      title: 'Security Implementation',
      description: 'Installation and configuration of security tools, firewalls, and monitoring systems.',
      tasks: ['Firewall setup', 'Malware scanner installation', 'SSL configuration', 'Access controls'],
      duration: '1 day'
    },
    {
      step: '03',
      title: 'Monitoring & Alerts',
      description: '24/7 monitoring with real-time alerts and automated response to security incidents.',
      tasks: ['24/7 monitoring setup', 'Alert configuration', 'Response protocols', 'Incident tracking'],
      duration: 'Ongoing'
    },
    {
      step: '04',
      title: 'Maintenance & Updates',
      description: 'Regular security updates, patches, and improvements to stay ahead of emerging threats.',
      tasks: ['Security updates', 'Patch management', 'Threat intelligence', 'Policy updates'],
      duration: 'Ongoing'
    }
  ];

  const caseStudies = [
    {
      client: 'E-commerce Fashion Store',
      industry: 'Retail',
      challenge: 'Multiple malware infections affecting customer trust and sales',
      solution: 'Complete security overhaul with advanced monitoring and protection',
      results: {
        malwareRemoved: '15+ infections',
        securityScore: '32 → 98',
        customerTrust: '+85%',
        salesRecovery: '+120%'
      },
      testimonial: 'The security service saved our business. Customer confidence is fully restored.',
      timeframe: '3 days'
    },
    {
      client: 'Professional Services Firm',
      industry: 'Legal',
      challenge: 'Sensitive client data at risk from security vulnerabilities',
      solution: 'Enterprise security implementation with compliance reporting',
      results: {
        vulnerabilities: '23 → 0',
        complianceScore: '100%',
        clientConfidence: '+95%',
        securityIncidents: '0 in 12 months'
      },
      testimonial: 'Our clients trust us with their most sensitive information, and now we can guarantee its security.',
      timeframe: '5 days'
    },
    {
      client: 'Healthcare Provider',
      industry: 'Healthcare',
      challenge: 'HIPAA compliance requirements and patient data protection',
      solution: 'Healthcare-specific security implementation with audit trails',
      results: {
        hipaaCompliance: '100%',
        dataBreaches: '0',
        auditScore: 'Perfect',
        patientTrust: '+90%'
      },
      testimonial: 'Patient data security is paramount, and this service gives us complete peace of mind.',
      timeframe: '7 days'
    }
  ];

  const guarantees = [
    {
      icon: <Shield className="h-6 w-6 text-green-500" />,
      title: 'Malware-Free Guarantee',
      description: 'We guarantee your site stays clean or we fix it for free'
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-500" />,
      title: '24/7 Response',
      description: 'Immediate response to security incidents any time, any day'
    },
    {
      icon: <Target className="h-6 w-6 text-purple-500" />,
      title: 'No Hidden Fees',
      description: 'Transparent pricing with no surprise charges for security fixes'
    },
    {
      icon: <Award className="h-6 w-6 text-orange-500" />,
      title: 'Satisfaction Promise',
      description: 'Money-back guarantee if not completely satisfied with our service'
    }
  ];

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-purple-600/20 to-indigo-700/20"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600/20 rounded-2xl mb-8">
              <Shield className="h-10 w-10 text-red-400" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              WordPress Security Services
              <span className="block gradient-text">Protect Your Business</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Professional WordPress security services that protect your website from malware, hackers, and cyber threats 
              with 24/7 monitoring, rapid response, and comprehensive protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-red-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-red-700 hover:to-purple-700 transition-all duration-300 hover-glow flex items-center justify-center space-x-2"
              >
                <span>Secure My Website</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-red-400 text-red-400 px-8 py-4 rounded-xl font-semibold hover:bg-red-400 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Free Security Scan</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security Stats */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          {/* Threat Statistics Visualization */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Cyber Threat Landscape
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <div className="absolute inset-0 bg-red-500/20 rounded-full animate-ping"></div>
                  <div className="relative w-24 h-24 bg-gradient-to-r from-red-600 to-orange-600 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-white">43%</span>
                  </div>
                </div>
                <p className="text-gray-300 font-medium">SMBs Targeted</p>
                <p className="text-red-400 text-xs">Every 39 seconds</p>
              </div>
              <div className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <div className="absolute inset-0 bg-orange-500/20 rounded-full animate-pulse"></div>
                  <div className="relative w-24 h-24 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-white">18K</span>
                  </div>
                </div>
                <p className="text-gray-300 font-medium">Daily WordPress Hacks</p>
                <p className="text-orange-400 text-xs">Growing threat</p>
              </div>
              <div className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <div className="absolute inset-0 bg-purple-500/20 rounded-full animate-pulse"></div>
                  <div className="relative w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-white">60%</span>
                  </div>
                </div>
                <p className="text-gray-300 font-medium">Business Closure</p>
                <p className="text-purple-400 text-xs">After cyber attack</p>
              </div>
              <div className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <div className="absolute inset-0 bg-green-500/20 rounded-full animate-pulse"></div>
                  <div className="relative w-24 h-24 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-white">99%</span>
                  </div>
                </div>
                <p className="text-gray-300 font-medium">Protection Rate</p>
                <p className="text-green-400 text-xs">With our service</p>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Reality of <span className="gradient-text">Website Security</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cyber threats are increasing every day. Don't become another statistic - protect your business with professional security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 text-center"
              >
                <div className="text-4xl font-bold gradient-text mb-4">{stat.number}</div>
                <p className="text-gray-300 mb-4 text-sm">{stat.description}</p>
                <p className="text-red-400 text-xs font-medium">{stat.impact}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-300 font-medium">
              Your website is under constant attack. Professional security is not optional—it's essential.
            </p>
          </div>
        </div>
      </section>

      {/* Threat Landscape */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Common <span className="gradient-text">Security Threats</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Understanding the threats your website faces is the first step in protecting your business from cyber attacks and data breaches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityThreats.map((threat, index) => (
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
                    {threat.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-4">
                      {threat.title}
                    </h3>
                    <p className="text-gray-300 mb-6">
                      {threat.description}
                    </p>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">Frequency:</span>
                        <span className="text-red-400 font-medium text-sm">{threat.frequency}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">Impact:</span>
                        <span className="text-orange-400 font-medium text-sm">{threat.impact}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">Prevention:</span>
                        <span className="text-green-400 font-medium text-sm">{threat.prevention}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Services */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive <span className="gradient-text">Security Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Multi-layered security approach that protects your website from all angles with advanced monitoring and rapid response capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityServices.map((service, index) => (
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

      {/* Security Plans */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Security Plans for <span className="gradient-text">Every Business</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the security level that matches your website's risk profile and business requirements with comprehensive protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {securityPlans.map((plan, index) => (
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
                      <Star className="h-4 w-4" />
                      <span>Most Popular</span>
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
                      ? 'bg-purple-600 text-white hover:bg-purple-700' 
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

      {/* Security Process */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How We <span className="gradient-text">Secure Your Website</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our systematic approach to implementing and maintaining comprehensive website security with ongoing monitoring and support.
            </p>
          </div>

          <div className="space-y-12">
            {securityProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col lg:flex-row items-start gap-8"
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-r from-red-600 to-purple-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold">
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
                      <span className="inline-flex items-center px-4 py-2 bg-red-600/20 text-red-400 rounded-full text-sm font-medium">
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
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Security <span className="gradient-text">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real businesses that recovered from security incidents and now enjoy complete protection with our security services.
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
                    <span className="text-red-400 text-sm bg-red-400/10 px-3 py-1 rounded-full">
                      {study.industry}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Secured in {study.timeframe}
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
                        <span className="text-gray-300 text-sm capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                        <span className="text-green-400 font-bold text-sm">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <blockquote className="border-l-4 border-red-500 pl-4 italic text-gray-300">
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
              Our <span className="gradient-text">Security Guarantees</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We stand behind our security services with industry-leading guarantees that protect your investment and ensure your peace of mind.
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
      <section className="py-24 bg-gradient-to-r from-red-600 via-purple-600 to-indigo-600">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Don't Wait Until It's Too Late
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Every day you wait is another day your website is vulnerable. Get professional security protection today and protect your business from cyber threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-white text-red-600 px-8 py-4 rounded-xl font-semibold hover:bg-red-50 transition-all duration-300 hover-glow flex items-center justify-center space-x-2"
              >
                <span>Secure My Website Now</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-red-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Get Free Security Scan</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SecurityServices;