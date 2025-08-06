import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Eye, 
  Users, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Target,
  Award,
  Globe,
  Settings,
  Monitor,
  Headphones,
  MousePointer,
  Keyboard,
  Smartphone,
  BarChart3,
  FileText
} from 'lucide-react';

const WebsiteAccessibility = () => {
  const accessibilityServices = [
    {
      icon: <Eye className="h-8 w-8 text-blue-500" />,
      title: 'Accessibility Audit',
      description: 'Comprehensive assessment of your website\'s accessibility compliance and user experience barriers.',
      features: ['WCAG 2.1 compliance check', 'Automated testing', 'Manual testing', 'User journey analysis'],
      deliverables: ['Detailed audit report', 'Priority fix list', 'Compliance roadmap', 'Cost estimates']
    },
    {
      icon: <Settings className="h-8 w-8 text-green-500" />,
      title: 'Accessibility Implementation',
      description: 'Complete accessibility improvements to make your website usable by everyone.',
      features: ['WCAG 2.1 AA compliance', 'Screen reader optimisation', 'Keyboard navigation', 'Colour contrast fixes'],
      deliverables: ['Accessible website', 'Testing documentation', 'Compliance certificate', 'User guides']
    },
    {
      icon: <Monitor className="h-8 w-8 text-purple-500" />,
      title: 'Ongoing Monitoring',
      description: 'Continuous monitoring to ensure your website maintains accessibility standards.',
      features: ['Regular accessibility scans', 'Compliance monitoring', 'Issue alerts', 'Monthly reports'],
      deliverables: ['Monthly reports', 'Issue notifications', 'Compliance tracking', 'Improvement recommendations']
    },
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      title: 'User Testing',
      description: 'Real user testing with disabled users to identify practical accessibility challenges.',
      features: ['Disabled user testing', 'Assistive technology testing', 'Usability feedback', 'Improvement recommendations'],
      deliverables: ['User testing report', 'Video recordings', 'Feedback analysis', 'UX recommendations']
    }
  ];

  const accessibilityStandards = [
    {
      standard: 'WCAG 2.1 Level A',
      description: 'Basic accessibility requirements',
      requirements: [
        'Alternative text for images',
        'Keyboard navigation support',
        'Proper heading structure',
        'Form labels and instructions'
      ]
    },
    {
      standard: 'WCAG 2.1 Level AA',
      description: 'Standard accessibility compliance (recommended)',
      requirements: [
        'Colour contrast ratios 4.5:1',
        'Resizable text up to 200%',
        'Focus indicators',
        'Error identification and suggestions'
      ]
    },
    {
      standard: 'WCAG 2.1 Level AAA',
      description: 'Highest accessibility standards',
      requirements: [
        'Colour contrast ratios 7:1',
        'Sign language interpretation',
        'Context-sensitive help',
        'Advanced error prevention'
      ]
    }
  ];

  const disabilityTypes = [
    {
      icon: <Eye className="h-6 w-6 text-blue-500" />,
      disability: 'Visual Impairments',
      population: '2 million UK adults',
      considerations: [
        'Screen reader compatibility',
        'High contrast options',
        'Text size adjustment',
        'Alternative text for images'
      ]
    },
    {
      icon: <Headphones className="h-6 w-6 text-green-500" />,
      disability: 'Hearing Impairments',
      population: '12 million UK adults',
      considerations: [
        'Video captions and transcripts',
        'Visual alerts and notifications',
        'Sign language interpretation',
        'Text alternatives for audio'
      ]
    },
    {
      icon: <MousePointer className="h-6 w-6 text-purple-500" />,
      disability: 'Motor Impairments',
      population: '7 million UK adults',
      considerations: [
        'Keyboard navigation',
        'Large click targets',
        'Voice control compatibility',
        'Reduced motion options'
      ]
    },
    {
      icon: <Target className="h-6 w-6 text-orange-500" />,
      disability: 'Cognitive Impairments',
      population: '1.5 million UK adults',
      considerations: [
        'Clear, simple language',
        'Consistent navigation',
        'Error prevention and correction',
        'Timeout extensions'
      ]
    }
  ];

  const legalRequirements = [
    {
      law: 'Equality Act 2010',
      description: 'UK law requiring reasonable adjustments for disabled people',
      implications: [
        'Legal obligation for service providers',
        'Potential discrimination claims',
        'Reasonable adjustment requirements',
        'Proactive accessibility measures'
      ]
    },
    {
      law: 'Public Sector Bodies Accessibility Regulations 2018',
      description: 'Mandatory accessibility standards for public sector websites',
      implications: [
        'WCAG 2.1 AA compliance required',
        'Accessibility statements mandatory',
        'Regular monitoring and reporting',
        'Financial penalties for non-compliance'
      ]
    },
    {
      law: 'European Accessibility Act',
      description: 'EU legislation affecting UK businesses trading in Europe',
      implications: [
        'E-commerce accessibility requirements',
        'Digital service accessibility',
        'Compliance deadlines',
        'Cross-border trading implications'
      ]
    }
  ];

  const accessibilityBenefits = [
    {
      benefit: 'Increased Market Reach',
      description: '15% of UK population has a disability - that\'s 15 million potential customers',
      impact: '+15% potential customer base'
    },
    {
      benefit: 'Improved SEO',
      description: 'Accessibility improvements often align with SEO best practices',
      impact: '+20% search ranking improvement'
    },
    {
      benefit: 'Better User Experience',
      description: 'Accessible websites are easier to use for everyone',
      impact: '+25% user satisfaction'
    },
    {
      benefit: 'Legal Compliance',
      description: 'Avoid discrimination claims and legal issues',
      impact: 'Risk mitigation'
    },
    {
      benefit: 'Brand Reputation',
      description: 'Demonstrate social responsibility and inclusive values',
      impact: 'Enhanced brand image'
    },
    {
      benefit: 'Future-Proofing',
      description: 'Prepare for upcoming accessibility legislation',
      impact: 'Regulatory compliance'
    }
  ];

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-green-700/20"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600/20 rounded-2xl mb-8">
              <Eye className="h-10 w-10 text-blue-400" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Website Accessibility Services
              <span className="block gradient-text">Inclusive Design for All Users</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Professional website accessibility services that ensure your UK business website is usable by everyone, 
              compliant with legal requirements, and optimised for the widest possible audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover-glow flex items-center justify-center space-x-2"
              >
                <span>Get Accessibility Audit</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-xl font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Free Accessibility Check</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Disability Considerations */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Understanding <span className="gradient-text">User Needs</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Accessibility affects millions of UK users. Understanding different disability types helps create truly inclusive websites.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {disabilityTypes.map((type, index) => (
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
                    {type.icon}
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-white">
                        {type.disability}
                      </h3>
                      <span className="text-blue-400 font-bold text-sm bg-blue-400/10 px-3 py-1 rounded-full">
                        {type.population}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {type.considerations.map((consideration, considerationIndex) => (
                        <li key={considerationIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{consideration}</span>
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

      {/* Accessibility Services */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive <span className="gradient-text">Accessibility Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              End-to-end accessibility services that ensure your website meets legal requirements and serves all users effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {accessibilityServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
              >
                <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">Deliverables:</h4>
                  <ul className="space-y-2">
                    {service.deliverables.map((deliverable, deliverableIndex) => (
                      <li key={deliverableIndex} className="flex items-center space-x-3">
                        <FileText className="h-4 w-4 text-blue-500 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Requirements */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              UK <span className="gradient-text">Legal Requirements</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Understanding the legal landscape helps UK businesses ensure compliance and avoid potential discrimination claims.
            </p>
          </div>

          <div className="space-y-8">
            {legalRequirements.map((requirement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  {requirement.law}
                </h3>
                <p className="text-gray-300 mb-6">
                  {requirement.description}
                </p>
                <div>
                  <h4 className="text-lg font-semibold text-orange-400 mb-3">Key Implications:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {requirement.implications.map((implication, implicationIndex) => (
                      <li key={implicationIndex} className="flex items-center space-x-3">
                        <Shield className="h-4 w-4 text-orange-500 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{implication}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accessibility Standards */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">WCAG</span> Compliance Levels
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Web Content Accessibility Guidelines (WCAG) provide the international standard for website accessibility.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {accessibilityStandards.map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
              >
                <h3 className="text-xl font-bold text-white mb-4">
                  {standard.standard}
                </h3>
                <p className="text-gray-300 mb-6">
                  {standard.description}
                </p>
                <div>
                  <h4 className="text-lg font-semibold text-green-400 mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {standard.requirements.map((requirement, requirementIndex) => (
                      <li key={requirementIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Business <span className="gradient-text">Benefits</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Website accessibility isn't just about compliance - it's a business opportunity that benefits everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accessibilityBenefits.map((benefit, index) => (
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
                    {benefit.benefit}
                  </h3>
                  <span className="text-green-400 font-bold text-sm bg-green-400/10 px-3 py-1 rounded-full">
                    {benefit.impact}
                  </span>
                </div>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Make Your Website Accessible to Everyone
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Ensure your website serves all users effectively whilst meeting legal requirements. Get started with a comprehensive accessibility audit.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 hover-glow flex items-center justify-center space-x-2"
              >
                <span>Start Accessibility Audit</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Learn About Compliance</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WebsiteAccessibility;