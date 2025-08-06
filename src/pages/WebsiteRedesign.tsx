import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Palette, 
  Smartphone, 
  TrendingUp, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Eye,
  Target,
  Zap,
  Search,
  Award,
  Clock,
  Star,
  BarChart3,
  Globe,
  Settings,
  Monitor,
  Code
} from 'lucide-react';

const WebsiteRedesign = () => {
  const redesignBenefits = [
    {
      icon: <TrendingUp className="h-8 w-8 text-green-500" />,
      title: 'Increased Conversions',
      description: 'Modern, user-focused design that guides visitors towards your business goals and increases conversion rates.',
      stats: 'Average 40% conversion increase'
    },
    {
      icon: <Smartphone className="h-8 w-8 text-blue-500" />,
      title: 'Mobile-First Design',
      description: 'Responsive design that works perfectly on all devices, capturing the growing mobile audience.',
      stats: '60% of traffic is mobile'
    },
    {
      icon: <Search className="h-8 w-8 text-purple-500" />,
      title: 'Improved SEO Rankings',
      description: 'Modern, fast-loading websites with clean code that search engines love and rank higher.',
      stats: 'Average 25% ranking improvement'
    },
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      title: 'Better User Experience',
      description: 'Intuitive navigation, faster loading times, and engaging design that keeps visitors on your site longer.',
      stats: '50% reduction in bounce rate'
    }
  ];

  const redesignProcess = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'Comprehensive audit of your current website, competitor analysis, and user behaviour research.',
      deliverables: ['Current site audit', 'Competitor analysis', 'User research', 'Goals definition'],
      duration: '1 week'
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Develop redesign strategy, information architecture, and user experience improvements.',
      deliverables: ['Redesign strategy', 'Site architecture', 'Wireframes', 'Content strategy'],
      duration: '1-2 weeks'
    },
    {
      step: '03',
      title: 'Design & Prototyping',
      description: 'Create modern, engaging designs with interactive prototypes for testing and feedback.',
      deliverables: ['Visual designs', 'Interactive prototypes', 'Style guide', 'Asset library'],
      duration: '2-3 weeks'
    },
    {
      step: '04',
      title: 'Development & Integration',
      description: 'Build the new website with modern technologies, ensuring performance and functionality.',
      deliverables: ['Responsive website', 'CMS integration', 'Performance optimisation', 'Testing'],
      duration: '3-4 weeks'
    },
    {
      step: '05',
      title: 'Launch & Optimisation',
      description: 'Smooth launch with monitoring, analytics setup, and ongoing optimisation based on user data.',
      deliverables: ['Live website', 'Analytics setup', 'Training', '30-day optimisation'],
      duration: '1 week'
    }
  ];

  const designTrends = [
    {
      name: 'Minimalist Design',
      description: 'Clean, uncluttered layouts that focus attention on key content and calls-to-action.',
      benefits: ['Faster loading', 'Better focus', 'Professional appearance']
    },
    {
      name: 'Dark Mode Options',
      description: 'Modern dark themes that reduce eye strain and appeal to contemporary users.',
      benefits: ['Reduced eye strain', 'Modern aesthetic', 'Better battery life']
    },
    {
      name: 'Micro-Interactions',
      description: 'Subtle animations and interactions that enhance user engagement and provide feedback.',
      benefits: ['Enhanced engagement', 'Better feedback', 'Premium feel']
    },
    {
      name: 'Accessibility Focus',
      description: 'Inclusive design that ensures your website is usable by everyone, including disabled users.',
      benefits: ['Wider audience', 'Legal compliance', 'Better SEO']
    },
    {
      name: 'Performance-First',
      description: 'Design decisions made with performance in mind, ensuring fast loading across all devices.',
      benefits: ['Better rankings', 'Lower bounce rates', 'Higher conversions']
    },
    {
      name: 'Conversion Optimisation',
      description: 'Strategic placement of elements designed to guide users towards desired actions.',
      benefits: ['Higher conversions', 'Better ROI', 'Clear user journey']
    }
  ];

  const caseStudies = [
    {
      client: 'Professional Services Firm',
      industry: 'Legal',
      challenge: 'Outdated website not generating quality leads',
      solution: 'Complete redesign with modern UX and lead generation focus',
      results: {
        leads: '+300% increase',
        bounceRate: '-45% reduction',
        timeOnSite: '+120% increase',
        mobileUsability: '95/100 score'
      },
      testimonial: 'The redesign transformed our online presence. We\'re now attracting high-quality clients and our conversion rate has tripled.',
      timeframe: '8 weeks'
    },
    {
      client: 'E-commerce Fashion Brand',
      industry: 'Retail',
      challenge: 'Poor mobile experience affecting sales',
      solution: 'Mobile-first redesign with optimised checkout process',
      results: {
        mobileConversions: '+180% increase',
        cartAbandonment: '-35% reduction',
        pageSpeed: '300% faster',
        revenue: '+85% increase'
      },
      testimonial: 'Our mobile sales have skyrocketed since the redesign. The new checkout process is seamless and customers love the experience.',
      timeframe: '10 weeks'
    },
    {
      client: 'Healthcare Provider',
      industry: 'Healthcare',
      challenge: 'Complex navigation and poor accessibility',
      solution: 'User-centred redesign with accessibility compliance',
      results: {
        userSatisfaction: '+90% increase',
        appointmentBookings: '+150% increase',
        accessibilityScore: '100% compliant',
        patientEngagement: '+75% increase'
      },
      testimonial: 'The new website is not only beautiful but also fully accessible. Patient feedback has been overwhelmingly positive.',
      timeframe: '12 weeks'
    }
  ];

  const redesignChecklist = [
    'Outdated design that looks unprofessional',
    'Poor mobile experience and responsiveness',
    'Slow loading times affecting user experience',
    'Low conversion rates and lead generation',
    'Difficult navigation and poor user experience',
    'Not ranking well in search engines',
    'High bounce rates and low engagement',
    'Accessibility issues and compliance concerns',
    'Outdated content management system',
    'Security vulnerabilities and maintenance issues'
  ];

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-blue-700/20"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-600/20 rounded-2xl mb-8">
              <Palette className="h-10 w-10 text-purple-400" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Website Redesign Services
              <span className="block gradient-text">Transform Your Online Presence</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Professional website redesign services that modernise your brand, improve user experience, 
              and drive measurable business results. Built for the modern UK market.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover-glow flex items-center justify-center space-x-2"
              >
                <span>Start Redesign Project</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-xl font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Free Design Consultation</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Redesign Your <span className="gradient-text">Website</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A professional website redesign delivers immediate improvements in user experience, search rankings, and business results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {redesignBenefits.map((benefit, index) => (
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

      {/* Design Trends */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Modern Design <span className="gradient-text">Trends</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We incorporate the latest design trends and best practices to ensure your website feels fresh, modern, and engaging.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designTrends.map((trend, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
              >
                <h3 className="text-xl font-bold text-white mb-4">
                  {trend.name}
                </h3>
                <p className="text-gray-300 mb-6">
                  {trend.description}
                </p>
                <ul className="space-y-2">
                  {trend.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
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
              Our <span className="gradient-text">Redesign Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A systematic approach that ensures your redesign project delivers exceptional results on time and within budget.
            </p>
          </div>

          <div className="space-y-12">
            {redesignProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col lg:flex-row items-start gap-8"
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold">
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
                      <span className="inline-flex items-center px-4 py-2 bg-purple-600/20 text-purple-400 rounded-full text-sm font-medium">
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

      {/* Case Studies */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Redesign <span className="gradient-text">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our website redesigns have transformed businesses and delivered measurable improvements in performance and results.
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
                    <span className="text-purple-400 text-sm bg-purple-400/10 px-3 py-1 rounded-full">
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
                
                <blockquote className="border-l-4 border-purple-500 pl-4 italic text-gray-300">
                  "{study.testimonial}"
                </blockquote>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Redesign Checklist */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Does Your Website Need a <span className="gradient-text">Redesign?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              If your website shows any of these warning signs, it's time for a professional redesign to stay competitive.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {redesignChecklist.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50"
                >
                  <div className="w-6 h-6 border-2 border-red-500 rounded flex items-center justify-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-300">{item}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-lg text-gray-300 mb-8">
                If you checked 3 or more items, your website needs a professional redesign.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover-glow"
              >
                <span>Get Free Redesign Consultation</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Transform Your Website?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Let's create a website that truly represents your brand and drives your business forward. Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-50 transition-all duration-300 hover-glow flex items-center justify-center space-x-2"
              >
                <span>Start Your Redesign</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/portfolio"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>View Our Work</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WebsiteRedesign;