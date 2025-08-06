import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Headphones, 
  Clock, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  MessageSquare,
  Users,
  Award,
  Target,
  Settings,
  Monitor,
  AlertTriangle,
  Star
} from 'lucide-react';

const WordPressSupport = () => {
  const supportPlans = [
    {
      name: 'Essential Support',
      description: 'Basic support for small WordPress websites',
      responseTime: '24 hours',
      features: [
        'Email support (Mon-Fri)',
        'WordPress core updates',
        'Plugin compatibility checks',
        'Basic troubleshooting',
        'Monthly health reports',
        'Knowledge base access',
        'Community forum access'
      ],
      popular: false
    },
    {
      name: 'Professional Support',
      description: 'Comprehensive support for business websites',
      responseTime: '4 hours',
      features: [
        'Priority email & chat support',
        'Phone support (business hours)',
        'WordPress maintenance',
        'Security monitoring',
        'Performance optimisation',
        'Plugin management',
        'Monthly strategy calls',
        'Emergency support',
        'Backup management'
      ],
      popular: true
    },
    {
      name: 'Enterprise Support',
      description: 'Premium support for mission-critical websites',
      responseTime: '1 hour',
      features: [
        '24/7 phone & chat support',
        'Dedicated account manager',
        'Proactive monitoring',
        'Custom development support',
        'Strategic consulting',
        'Priority feature requests',
        'White-label support',
        'SLA guarantees',
        'Disaster recovery',
        'Staff training'
      ],
      popular: false
    }
  ];

  const supportTypes = [
    {
      icon: <AlertTriangle className="h-8 w-8 text-red-500" />,
      title: 'Emergency Support',
      description: 'Immediate assistance for critical website issues that affect your business operations.',
      features: ['24/7 emergency hotline', 'Immediate response', 'Critical issue resolution', 'Temporary fixes'],
      responseTime: '15 minutes'
    },
    {
      icon: <Settings className="h-8 w-8 text-blue-500" />,
      title: 'Technical Support',
      description: 'Expert help with WordPress configuration, customisation, and technical challenges.',
      features: ['Plugin troubleshooting', 'Theme customisation', 'Code debugging', 'Performance issues'],
      responseTime: '2-4 hours'
    },
    {
      icon: <Shield className="h-8 w-8 text-green-500" />,
      title: 'Security Support',
      description: 'Comprehensive security assistance including malware removal and vulnerability fixes.',
      features: ['Malware removal', 'Security hardening', 'Vulnerability patches', 'Security monitoring'],
      responseTime: '1-2 hours'
    },
    {
      icon: <Zap className="h-8 w-8 text-orange-500" />,
      title: 'Performance Support',
      description: 'Speed optimisation and performance troubleshooting to keep your site running fast.',
      features: ['Speed optimisation', 'Database cleanup', 'Caching configuration', 'CDN setup'],
      responseTime: '4-8 hours'
    }
  ];

  const supportChannels = [
    {
      icon: <Phone className="h-6 w-6 text-blue-500" />,
      title: 'Phone Support',
      description: 'Direct phone support for urgent issues and complex problems',
      availability: 'Business hours (9am-6pm GMT)'
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-green-500" />,
      title: 'Live Chat',
      description: 'Real-time chat support for quick questions and immediate assistance',
      availability: 'Business hours (9am-6pm GMT)'
    },
    {
      icon: <Mail className="h-6 w-6 text-purple-500" />,
      title: 'Email Support',
      description: 'Detailed email support for complex issues and documentation',
      availability: '24/7 (response within SLA)'
    },
    {
      icon: <Monitor className="h-6 w-6 text-orange-500" />,
      title: 'Remote Access',
      description: 'Secure remote access for direct problem resolution',
      availability: 'By appointment'
    }
  ];

  const commonIssues = [
    {
      issue: 'Website Down or Inaccessible',
      urgency: 'Critical',
      responseTime: '15 minutes',
      description: 'Immediate response to restore website functionality'
    },
    {
      issue: 'Security Breach or Malware',
      urgency: 'Critical',
      responseTime: '30 minutes',
      description: 'Emergency security response and malware removal'
    },
    {
      issue: 'Plugin Conflicts',
      urgency: 'High',
      responseTime: '2 hours',
      description: 'Resolve plugin compatibility issues and conflicts'
    },
    {
      issue: 'Performance Issues',
      urgency: 'Medium',
      responseTime: '4 hours',
      description: 'Diagnose and fix website speed and performance problems'
    },
    {
      issue: 'Content Management Issues',
      urgency: 'Low',
      responseTime: '24 hours',
      description: 'Help with content updates and management tasks'
    },
    {
      issue: 'Theme Customisation',
      urgency: 'Low',
      responseTime: '24-48 hours',
      description: 'Assistance with theme modifications and customisations'
    }
  ];

  const supportStats = [
    {
      stat: '15min',
      description: 'Average emergency response time',
      detail: 'Critical issues resolved quickly'
    },
    {
      stat: '98%',
      description: 'First-contact resolution rate',
      detail: 'Most issues resolved immediately'
    },
    {
      stat: '24/7',
      description: 'Emergency support availability',
      detail: 'Always here when you need us'
    },
    {
      stat: '500+',
      description: 'UK businesses supported',
      detail: 'Trusted by growing companies'
    }
  ];

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-green-600/20 to-purple-700/20"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600/20 rounded-2xl mb-8">
              <Headphones className="h-10 w-10 text-blue-400" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              WordPress Support Services
              <span className="block gradient-text">Expert Help When You Need It</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Professional WordPress support services for UK businesses. From emergency fixes to ongoing maintenance, 
              our expert team provides reliable support to keep your website running smoothly.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-300 hover-glow flex items-center justify-center space-x-2"
              >
                <span>Get Support Now</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-xl font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Emergency Hotline</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Stats */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {supportStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 text-center"
              >
                <div className="text-4xl font-bold gradient-text mb-4">{stat.stat}</div>
                <p className="text-gray-300 mb-2 font-medium">{stat.description}</p>
                <p className="text-gray-400 text-sm">{stat.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Types */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive <span className="gradient-text">Support Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Whatever WordPress challenge you're facing, our expert team has the knowledge and experience to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supportTypes.map((type, index) => (
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
                    {type.icon}
                  </div>
                  <span className="text-green-400 font-bold text-sm bg-green-400/10 px-3 py-1 rounded-full">
                    {type.responseTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {type.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {type.description}
                </p>
                <ul className="space-y-2">
                  {type.features.map((feature, featureIndex) => (
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

      {/* Support Plans */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Support Plans for <span className="gradient-text">Every Business</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the support level that matches your business needs and budget requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportPlans.map((plan, index) => (
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
                  <div className="text-green-400 text-sm font-medium bg-green-400/10 px-3 py-1 rounded-full inline-block">
                    {plan.responseTime} response
                  </div>
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

      {/* Support Channels */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Multiple <span className="gradient-text">Support Channels</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get help through your preferred communication method with consistent, expert support across all channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-800 rounded-xl mb-6">
                  {channel.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {channel.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {channel.description}
                </p>
                <p className="text-blue-400 text-sm font-medium">
                  {channel.availability}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Common <span className="gradient-text">WordPress Issues</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We handle all types of WordPress issues with appropriate urgency and expertise to minimise business impact.
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50">
            <div className="grid grid-cols-4 gap-0 bg-gray-800/70 p-4 font-semibold text-white text-sm">
              <div>Issue Type</div>
              <div className="text-center">Urgency</div>
              <div className="text-center">Response Time</div>
              <div className="text-center">Description</div>
            </div>
            
            {commonIssues.map((issue, index) => (
              <div key={index} className="grid grid-cols-4 gap-0 p-4 border-t border-gray-700">
                <div className="font-medium text-white">{issue.issue}</div>
                <div className="text-center">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    issue.urgency === 'Critical' ? 'bg-red-600/20 text-red-400' :
                    issue.urgency === 'High' ? 'bg-orange-600/20 text-orange-400' :
                    issue.urgency === 'Medium' ? 'bg-yellow-600/20 text-yellow-400' :
                    'bg-blue-600/20 text-blue-400'
                  }`}>
                    {issue.urgency}
                  </span>
                </div>
                <div className="text-center text-green-400 font-bold text-sm">{issue.responseTime}</div>
                <div className="text-gray-300 text-sm">{issue.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-green-600 to-purple-600">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Need WordPress Support Right Now?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Don't let WordPress issues disrupt your business. Get expert help from our UK-based support team today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 hover-glow flex items-center justify-center space-x-2"
              >
                <span>Get Immediate Help</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Choose Support Plan</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WordPressSupport;