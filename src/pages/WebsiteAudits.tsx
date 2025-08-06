import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search, 
  BarChart3, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Eye,
  Target,
  TrendingUp,
  Users,
  Globe,
  Smartphone,
  Award,
  Clock,
  Star,
  AlertTriangle,
  FileText,
  Settings,
  Monitor
} from 'lucide-react';

const WebsiteAudits = () => {
  const auditTypes = [
    {
      icon: <Search className="h-8 w-8 text-blue-500" />,
      title: 'SEO Audit',
      description: 'Comprehensive analysis of your website\'s search engine optimisation and ranking potential.',
      includes: ['Keyword analysis', 'Technical SEO review', 'Content assessment', 'Competitor analysis'],
      deliverables: ['SEO audit report', 'Keyword opportunities', 'Technical fixes list', 'Content strategy'],
      duration: '3-5 days'
    },
    {
      icon: <Zap className="h-8 w-8 text-orange-500" />,
      title: 'Performance Audit',
      description: 'In-depth analysis of website speed, Core Web Vitals, and performance optimisation opportunities.',
      includes: ['Speed analysis', 'Core Web Vitals', 'Mobile performance', 'Server response times'],
      deliverables: ['Performance report', 'Optimisation roadmap', 'Priority fixes', 'Monitoring setup'],
      duration: '2-3 days'
    },
    {
      icon: <Shield className="h-8 w-8 text-red-500" />,
      title: 'Security Audit',
      description: 'Thorough security assessment identifying vulnerabilities and protection recommendations.',
      includes: ['Vulnerability scan', 'Security configuration', 'Plugin assessment', 'Access control review'],
      deliverables: ['Security report', 'Risk assessment', 'Fix recommendations', 'Security roadmap'],
      duration: '2-4 days'
    },
    {
      icon: <Users className="h-8 w-8 text-green-500" />,
      title: 'UX/Conversion Audit',
      description: 'User experience analysis focused on conversion optimisation and user journey improvement.',
      includes: ['User journey analysis', 'Conversion funnel review', 'Mobile usability', 'Accessibility check'],
      deliverables: ['UX audit report', 'Conversion recommendations', 'User journey map', 'A/B test suggestions'],
      duration: '3-5 days'
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-purple-500" />,
      title: 'Analytics Audit',
      description: 'Review of tracking setup, data accuracy, and insights to improve decision-making.',
      includes: ['Tracking verification', 'Goal setup review', 'Data accuracy check', 'Reporting optimisation'],
      deliverables: ['Analytics report', 'Tracking improvements', 'Custom dashboards', 'KPI recommendations'],
      duration: '2-3 days'
    },
    {
      icon: <Globe className="h-8 w-8 text-indigo-500" />,
      title: 'Comprehensive Audit',
      description: 'Complete website analysis covering all aspects: SEO, performance, security, and UX.',
      includes: ['All audit types', 'Integrated analysis', 'Priority matrix', 'Implementation roadmap'],
      deliverables: ['Complete audit report', 'Executive summary', 'Action plan', '90-day roadmap'],
      duration: '1-2 weeks'
    }
  ];

  const auditProcess = [
    {
      step: '01',
      title: 'Initial Assessment',
      description: 'Comprehensive review of your website using professional tools and manual analysis.',
      tools: ['Google PageSpeed Insights', 'SEMrush', 'Screaming Frog', 'GTmetrix'],
      duration: '1-2 days'
    },
    {
      step: '02',
      title: 'Data Collection',
      description: 'Gather detailed data on performance, rankings, security, and user behaviour.',
      tools: ['Google Analytics', 'Search Console', 'Security scanners', 'Performance monitors'],
      duration: '1-2 days'
    },
    {
      step: '03',
      title: 'Analysis & Insights',
      description: 'Expert analysis of collected data to identify issues, opportunities, and priorities.',
      tools: ['Expert analysis', 'Competitive benchmarking', 'Best practice comparison', 'ROI calculations'],
      duration: '2-3 days'
    },
    {
      step: '04',
      title: 'Report & Recommendations',
      description: 'Detailed report with actionable recommendations and implementation roadmap.',
      tools: ['Custom reporting', 'Visual presentations', 'Priority matrices', 'Implementation guides'],
      duration: '1-2 days'
    },
    {
      step: '05',
      title: 'Consultation & Planning',
      description: 'Review findings together and create an implementation plan for maximum impact.',
      tools: ['Video consultation', 'Q&A session', 'Implementation planning', 'Next steps guidance'],
      duration: '1 day'
    }
  ];

  const commonIssues = [
    {
      category: 'SEO Issues',
      problems: [
        'Missing or duplicate meta descriptions',
        'Poor internal linking structure',
        'Slow page loading speeds',
        'Mobile usability problems',
        'Missing schema markup',
        'Broken internal and external links'
      ],
      impact: 'Lower search rankings and reduced organic traffic'
    },
    {
      category: 'Performance Issues',
      problems: [
        'Large, unoptimised images',
        'Excessive HTTP requests',
        'Poor caching configuration',
        'Render-blocking resources',
        'Inefficient database queries',
        'Third-party script delays'
      ],
      impact: 'High bounce rates and poor user experience'
    },
    {
      category: 'Security Vulnerabilities',
      problems: [
        'Outdated WordPress core and plugins',
        'Weak admin passwords',
        'Missing security headers',
        'Insecure file permissions',
        'No malware protection',
        'Lack of backup systems'
      ],
      impact: 'Risk of hacking, data breaches, and business disruption'
    },
    {
      category: 'UX/Conversion Issues',
      problems: [
        'Confusing navigation structure',
        'Poor mobile experience',
        'Weak calls-to-action',
        'Complex checkout processes',
        'Missing trust signals',
        'Accessibility barriers'
      ],
      impact: 'Lower conversion rates and lost revenue opportunities'
    }
  ];

  const auditBenefits = [
    {
      icon: <Target className="h-6 w-6 text-blue-500" />,
      title: 'Identify Hidden Issues',
      description: 'Discover problems that are silently costing you traffic and conversions'
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-green-500" />,
      title: 'Prioritise Improvements',
      description: 'Get a clear roadmap of what to fix first for maximum impact'
    },
    {
      icon: <Award className="h-6 w-6 text-purple-500" />,
      title: 'Competitive Advantage',
      description: 'Understand how your site compares to competitors and opportunities to outrank them'
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-orange-500" />,
      title: 'Measurable ROI',
      description: 'Track improvements and measure the return on your optimisation investments'
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
              <Search className="h-10 w-10 text-blue-400" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Professional Website Audits
              <span className="block gradient-text">Uncover Hidden Opportunities</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Comprehensive website audits that identify issues, uncover opportunities, and provide actionable 
              recommendations to improve your site's performance, security, and search rankings.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover-glow flex items-center justify-center space-x-2"
              >
                <span>Get Website Audit</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-xl font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Free Quick Scan</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Audit Types */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive <span className="gradient-text">Audit Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from specialised audits or get a complete website analysis that covers every aspect of your online presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {auditTypes.map((audit, index) => (
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
                    {audit.icon}
                  </div>
                  <span className="text-blue-400 font-bold text-sm bg-blue-400/10 px-3 py-1 rounded-full">
                    {audit.duration}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {audit.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {audit.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Includes:</h4>
                  <ul className="space-y-2">
                    {audit.includes.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">Deliverables:</h4>
                  <ul className="space-y-2">
                    {audit.deliverables.map((deliverable, deliverableIndex) => (
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

      {/* Common Issues */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Common Website <span className="gradient-text">Issues We Find</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Most websites have hidden issues that impact performance, security, and search rankings. Here's what we typically discover.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commonIssues.map((issue, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
              >
                <h3 className="text-2xl font-bold text-white mb-6">
                  {issue.category}
                </h3>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-red-400 mb-4">Common Problems:</h4>
                  <ul className="space-y-3">
                    {issue.problems.map((problem, problemIndex) => (
                      <li key={problemIndex} className="flex items-start space-x-3">
                        <AlertTriangle className="h-4 w-4 text-red-500 flex-shrink-0 mt-1" />
                        <span className="text-gray-300 text-sm">{problem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-4">
                  <h5 className="font-medium text-red-400 mb-2">Business Impact:</h5>
                  <p className="text-red-300 text-sm">{issue.impact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Process */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Audit Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A systematic approach using professional tools and expert analysis to provide actionable insights and recommendations.
            </p>
          </div>

          <div className="space-y-12">
            {auditProcess.map((step, index) => (
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
                      <span className="inline-flex items-center px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium">
                        <Clock className="h-4 w-4 mr-2" />
                        {step.duration}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Tools Used:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {step.tools.map((tool, toolIndex) => (
                        <div key={toolIndex} className="flex items-center space-x-3">
                          <Target className="h-4 w-4 text-blue-500 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{tool}</span>
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

      {/* Audit Benefits */}
      <section className="py-24">
        <div className="container-custom">
          {/* Performance Metrics Chart */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 mb-16">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Average Improvements After Our Audits
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#374151"
                      strokeWidth="2"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="2"
                      strokeDasharray="75, 100"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-400">75%</span>
                  </div>
                </div>
                <p className="text-gray-300 font-medium">SEO Score Improvement</p>
              </div>
              <div className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#374151"
                      strokeWidth="2"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="2"
                      strokeDasharray="85, 100"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-green-400">85%</span>
                  </div>
                </div>
                <p className="text-gray-300 font-medium">Performance Boost</p>
              </div>
              <div className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#374151"
                      strokeWidth="2"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#f59e0b"
                      strokeWidth="2"
                      strokeDasharray="90, 100"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-orange-400">90%</span>
                  </div>
                </div>
                <p className="text-gray-300 font-medium">Security Score</p>
              </div>
              <div className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#374151"
                      strokeWidth="2"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#8b5cf6"
                      strokeWidth="2"
                      strokeDasharray="65, 100"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-purple-400">65%</span>
                  </div>
                </div>
                <p className="text-gray-300 font-medium">Conversion Increase</p>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Get a <span className="gradient-text">Website Audit</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A professional website audit provides the insights and roadmap needed to improve your online performance and business results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {auditBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-800 rounded-xl mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {benefit.title}
                </h3>
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
              Ready to Discover What's Holding Your Website Back?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Get a comprehensive website audit that reveals hidden issues and provides a clear roadmap for improvement. Start optimising your website today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 hover-glow flex items-center justify-center space-x-2"
              >
                <span>Get Comprehensive Audit</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Start with Free Scan</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WebsiteAudits;