import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  HardDrive, 
  Shield, 
  Clock, 
  RotateCcw, 
  CheckCircle, 
  ArrowRight,
  Database,
  Cloud,
  Monitor,
  AlertTriangle,
  Award,
  Target,
  Settings,
  Globe,
  Lock,
  Zap
} from 'lucide-react';

const WordPressBackupServices = () => {
  const backupPlans = [
    {
      name: 'Essential Backup',
      description: 'Basic backup protection for small websites',
      frequency: 'Weekly',
      retention: '30 days',
      features: [
        'Weekly automated backups',
        'Database and files backup',
        '30-day backup retention',
        'Email notifications',
        'Basic restoration support',
        'Cloud storage included'
      ],
      popular: false
    },
    {
      name: 'Professional Backup',
      description: 'Comprehensive backup solution for business websites',
      frequency: 'Daily',
      retention: '90 days',
      features: [
        'Daily automated backups',
        'Incremental backup technology',
        '90-day backup retention',
        'Multiple storage locations',
        'One-click restoration',
        'Priority restoration support',
        'Backup monitoring alerts',
        'Monthly backup testing'
      ],
      popular: true
    },
    {
      name: 'Enterprise Backup',
      description: 'Advanced backup solution for mission-critical websites',
      frequency: 'Real-time',
      retention: '1 year',
      features: [
        'Real-time backup monitoring',
        'Continuous data protection',
        '1-year backup retention',
        'Multiple geographic locations',
        'Instant restoration',
        '24/7 restoration support',
        'Backup integrity verification',
        'Disaster recovery planning',
        'Custom retention policies',
        'Dedicated backup specialist'
      ],
      popular: false
    }
  ];

  const backupTypes = [
    {
      icon: <Database className="h-8 w-8 text-blue-500" />,
      title: 'Full Website Backup',
      description: 'Complete backup of all website files, database, and configurations.',
      includes: ['WordPress core files', 'Themes and plugins', 'Media library', 'Database content', 'Configuration files'],
      frequency: 'Daily/Weekly'
    },
    {
      icon: <HardDrive className="h-8 w-8 text-green-500" />,
      title: 'Incremental Backup',
      description: 'Efficient backup of only changed files since the last backup.',
      includes: ['Changed files only', 'Database changes', 'New uploads', 'Modified content', 'Updated settings'],
      frequency: 'Hourly/Daily'
    },
    {
      icon: <Cloud className="h-8 w-8 text-purple-500" />,
      title: 'Cloud Backup',
      description: 'Secure offsite backup storage in multiple geographic locations.',
      includes: ['Multiple data centres', 'Encrypted storage', 'Geographic redundancy', 'Instant access', 'Unlimited bandwidth'],
      frequency: 'Real-time sync'
    },
    {
      icon: <RotateCcw className="h-8 w-8 text-orange-500" />,
      title: 'Automated Restoration',
      description: 'Quick and easy restoration options for various scenarios.',
      includes: ['One-click restoration', 'Selective file recovery', 'Database rollback', 'Staging restoration', 'Point-in-time recovery'],
      frequency: 'On-demand'
    }
  ];

  const backupScenarios = [
    {
      scenario: 'Malware Attack',
      description: 'Website infected with malicious code',
      solution: 'Restore from clean backup before infection',
      timeframe: '15-30 minutes',
      prevention: 'Regular security scans and updates'
    },
    {
      scenario: 'Plugin Conflict',
      description: 'Plugin update causes website to break',
      solution: 'Rollback to previous working state',
      timeframe: '5-10 minutes',
      prevention: 'Staging environment testing'
    },
    {
      scenario: 'Server Failure',
      description: 'Hosting server experiences hardware failure',
      solution: 'Restore complete website to new server',
      timeframe: '30-60 minutes',
      prevention: 'Multiple backup locations'
    },
    {
      scenario: 'Human Error',
      description: 'Accidental deletion of important content',
      solution: 'Selective restoration of specific content',
      timeframe: '10-15 minutes',
      prevention: 'User training and permissions'
    },
    {
      scenario: 'Hacking Attempt',
      description: 'Unauthorised access and data modification',
      solution: 'Complete restoration and security hardening',
      timeframe: '30-45 minutes',
      prevention: 'Security monitoring and hardening'
    },
    {
      scenario: 'Update Failure',
      description: 'WordPress or plugin update causes issues',
      solution: 'Rollback to pre-update state',
      timeframe: '5-10 minutes',
      prevention: 'Staging environment updates'
    }
  ];

  const backupFeatures = [
    {
      icon: <Shield className="h-6 w-6 text-blue-500" />,
      title: 'Encrypted Storage',
      description: 'All backups are encrypted in transit and at rest for maximum security'
    },
    {
      icon: <Globe className="h-6 w-6 text-green-500" />,
      title: 'Geographic Redundancy',
      description: 'Backups stored in multiple UK and international data centres'
    },
    {
      icon: <Monitor className="h-6 w-6 text-purple-500" />,
      title: 'Backup Monitoring',
      description: 'Continuous monitoring ensures backups complete successfully'
    },
    {
      icon: <Zap className="h-6 w-6 text-orange-500" />,
      title: 'Fast Restoration',
      description: 'Quick restoration options minimise downtime and business impact'
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
              <HardDrive className="h-10 w-10 text-blue-400" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              WordPress Backup Services
              <span className="block gradient-text">Protect Your Digital Assets</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Professional WordPress backup services that protect your UK business from data loss, 
              with automated backups, secure storage, and rapid restoration capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-300 hover-glow flex items-center justify-center space-x-2"
              >
                <span>Secure My Website</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-xl font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Free Backup Assessment</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Backup Types */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive <span className="gradient-text">Backup Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Multiple backup types ensure complete protection for your WordPress website and business data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {backupTypes.map((type, index) => (
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
                  <span className="text-blue-400 font-bold text-sm bg-blue-400/10 px-3 py-1 rounded-full">
                    {type.frequency}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {type.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {type.description}
                </p>
                <ul className="space-y-2">
                  {type.includes.map((item, itemIndex) => (
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

      {/* Backup Plans */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Backup Plans for <span className="gradient-text">Every Business</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the backup frequency and retention that matches your business risk profile and recovery requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {backupPlans.map((plan, index) => (
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
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-gray-400 text-sm">Frequency:</span>
                      <p className="text-blue-400 font-medium">{plan.frequency}</p>
                    </div>
                    <div>
                      <span className="text-gray-400 text-sm">Retention:</span>
                      <p className="text-green-400 font-medium">{plan.retention}</p>
                    </div>
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

      {/* Disaster Scenarios */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Common <span className="gradient-text">Disaster Scenarios</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Understanding potential threats helps you appreciate the importance of comprehensive backup protection.
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50">
            <div className="grid grid-cols-5 gap-0 bg-gray-800/70 p-4 font-semibold text-white text-sm">
              <div>Scenario</div>
              <div className="text-center">Description</div>
              <div className="text-center">Solution</div>
              <div className="text-center">Recovery Time</div>
              <div className="text-center">Prevention</div>
            </div>
            
            {backupScenarios.map((scenario, index) => (
              <div key={index} className="grid grid-cols-5 gap-0 p-4 border-t border-gray-700">
                <div className="font-medium text-white">{scenario.scenario}</div>
                <div className="text-gray-300 text-sm">{scenario.description}</div>
                <div className="text-blue-400 text-sm">{scenario.solution}</div>
                <div className="text-center text-green-400 font-bold text-sm">{scenario.timeframe}</div>
                <div className="text-gray-300 text-sm">{scenario.prevention}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Backup Features */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Advanced <span className="gradient-text">Backup Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enterprise-grade backup features that ensure your data is always protected and quickly recoverable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {backupFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-800 rounded-xl mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
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
              Don't Risk Losing Your Website Data
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Protect your business with professional WordPress backup services. Automated, secure, and reliable data protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 hover-glow flex items-center justify-center space-x-2"
              >
                <span>Start Backup Protection</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Free Backup Consultation</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WordPressBackupServices;