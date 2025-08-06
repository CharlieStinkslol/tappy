import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Search, 
  Star, 
  Users, 
  CheckCircle, 
  ArrowRight,
  TrendingUp,
  Globe,
  Smartphone,
  Award,
  Clock,
  Target,
  BarChart3,
  Eye,
  Phone,
  Mail,
  Calendar,
  Shield
} from 'lucide-react';

const LocalSEO = () => {
  const localSEOBenefits = [
    {
      icon: <MapPin className="h-8 w-8 text-blue-500" />,
      title: 'Local Search Visibility',
      description: 'Appear in local search results when customers search for services in your area.',
      stats: '46% of Google searches are local'
    },
    {
      icon: <Star className="h-8 w-8 text-yellow-500" />,
      title: 'Google My Business Optimisation',
      description: 'Optimised Google My Business profile that attracts customers and builds trust.',
      stats: '5-star average rating target'
    },
    {
      icon: <Users className="h-8 w-8 text-green-500" />,
      title: 'Increased Foot Traffic',
      description: 'Drive more local customers to your physical location with targeted local SEO.',
      stats: '28% visit within 24 hours'
    },
    {
      icon: <Phone className="h-8 w-8 text-purple-500" />,
      title: 'More Phone Calls',
      description: 'Generate more phone enquiries from local customers ready to buy.',
      stats: '18% call within 24 hours'
    }
  ];

  const localSEOServices = [
    {
      icon: <Search className="h-8 w-8 text-blue-500" />,
      title: 'Local Keyword Research',
      description: 'Identify high-value local keywords that your customers use to find businesses like yours.',
      features: ['Location-based keywords', 'Competitor analysis', 'Search volume data', 'Intent analysis']
    },
    {
      icon: <MapPin className="h-8 w-8 text-green-500" />,
      title: 'Google My Business Management',
      description: 'Complete setup and optimisation of your Google My Business profile for maximum visibility.',
      features: ['Profile optimisation', 'Photo management', 'Review management', 'Post scheduling']
    },
    {
      icon: <Globe className="h-8 w-8 text-purple-500" />,
      title: 'Local Directory Listings',
      description: 'Consistent business listings across major directories and local citation sources.',
      features: ['Directory submissions', 'NAP consistency', 'Citation building', 'Listing monitoring']
    },
    {
      icon: <Star className="h-8 w-8 text-orange-500" />,
      title: 'Review Management',
      description: 'Proactive review generation and management to build trust and improve rankings.',
      features: ['Review generation', 'Response management', 'Reputation monitoring', 'Review strategy']
    },
    {
      icon: <Smartphone className="h-8 w-8 text-red-500" />,
      title: 'Mobile Local Optimisation',
      description: 'Optimise for mobile local searches with location-based features and fast loading.',
      features: ['Mobile optimisation', 'Click-to-call buttons', 'Location pages', 'Local schema markup']
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-indigo-500" />,
      title: 'Local Analytics & Reporting',
      description: 'Track local search performance, customer behaviour, and ROI from local SEO efforts.',
      features: ['Local rankings tracking', 'GMB insights', 'Call tracking', 'Conversion reporting']
    }
  ];

  const localSEOProcess = [
    {
      step: '01',
      title: 'Local SEO Audit',
      description: 'Comprehensive analysis of your current local search presence and opportunities.',
      tasks: ['Current ranking analysis', 'Competitor research', 'Citation audit', 'GMB assessment'],
      duration: '1 week'
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Create a customised local SEO strategy based on your business goals and local market.',
      tasks: ['Keyword strategy', 'Content planning', 'Citation strategy', 'Review strategy'],
      duration: '1 week'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Execute the local SEO strategy with on-page optimisation and local citations.',
      tasks: ['On-page optimisation', 'GMB optimisation', 'Citation building', 'Schema markup'],
      duration: '2-4 weeks'
    },
    {
      step: '04',
      title: 'Monitoring & Optimisation',
      description: 'Ongoing monitoring and optimisation to maintain and improve local search rankings.',
      tasks: ['Ranking monitoring', 'Review management', 'Content updates', 'Performance reporting'],
      duration: 'Ongoing'
    }
  ];

  const localStats = [
    {
      stat: '97%',
      description: 'of consumers search online for local businesses',
      impact: 'Local presence is essential'
    },
    {
      stat: '88%',
      description: 'of local searches result in a call or visit within 24 hours',
      impact: 'High conversion potential'
    },
    {
      stat: '72%',
      description: 'of consumers visit stores within 5 miles of their location',
      impact: 'Geographic targeting works'
    },
    {
      stat: '46%',
      description: 'of all Google searches have local intent',
      impact: 'Massive opportunity'
    }
  ];

  const caseStudies = [
    {
      client: 'Local Restaurant Chain',
      industry: 'Food & Beverage',
      challenge: 'Low visibility in local search results across multiple locations',
      solution: 'Comprehensive local SEO campaign with GMB optimisation for all locations',
      results: {
        localRankings: '+300% improvement',
        phoneInquiries: '+150% increase',
        footTraffic: '+85% increase',
        onlineReservations: '+200% increase'
      },
      testimonial: 'Our restaurants are now fully booked most nights thanks to the increased local visibility.',
      timeframe: '6 weeks'
    },
    {
      client: 'Independent Dental Practice',
      industry: 'Healthcare',
      challenge: 'Competing with large dental chains in local search results',
      solution: 'Targeted local SEO with review management and local content strategy',
      results: {
        localRankings: 'Top 3 positions',
        newPatients: '+120% increase',
        reviewRating: '4.9/5 stars',
        appointmentBookings: '+90% increase'
      },
      testimonial: 'We\'re now the top-rated dental practice in our area and consistently booked weeks in advance.',
      timeframe: '8 weeks'
    },
    {
      client: 'Home Services Company',
      industry: 'Home Services',
      challenge: 'Inconsistent local presence and poor review management',
      solution: 'Local SEO overhaul with citation cleanup and review generation system',
      results: {
        localVisibility: '+250% increase',
        serviceInquiries: '+180% increase',
        reviewScore: '4.8/5 improvement',
        leadQuality: '+60% improvement'
      },
      testimonial: 'The local SEO work has transformed our business. We\'re now the go-to company in our service area.',
      timeframe: '10 weeks'
    }
  ];

  const localSEOFactors = [
    {
      factor: 'Google My Business',
      importance: 'Critical',
      description: 'Complete and optimised GMB profile with regular updates'
    },
    {
      factor: 'Online Reviews',
      importance: 'High',
      description: 'Positive reviews and professional responses to all feedback'
    },
    {
      factor: 'Local Citations',
      importance: 'High',
      description: 'Consistent NAP (Name, Address, Phone) across all directories'
    },
    {
      factor: 'On-Page SEO',
      importance: 'High',
      description: 'Location-specific content and local keyword optimisation'
    },
    {
      factor: 'Website Performance',
      importance: 'Medium',
      description: 'Fast loading, mobile-friendly website with local schema'
    },
    {
      factor: 'Social Signals',
      importance: 'Medium',
      description: 'Active social media presence with local engagement'
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
              <MapPin className="h-10 w-10 text-blue-400" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Local SEO Services
              <span className="block gradient-text">Dominate Your Local Market</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Professional local SEO services that help UK businesses rank higher in local search results, 
              attract more customers, and dominate their local market with proven strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-300 hover-glow flex items-center justify-center space-x-2"
              >
                <span>Boost Local Rankings</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-xl font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Free Local SEO Audit</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Local SEO Stats */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Power of <span className="gradient-text">Local SEO</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Local SEO is one of the most effective ways to attract customers who are ready to buy from businesses in their area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {localStats.map((stat, index) => (
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
                <p className="text-blue-400 text-xs font-medium">{stat.impact}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Local SEO <span className="gradient-text">Benefits</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Local SEO delivers immediate and measurable results for businesses serving local customers and communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {localSEOBenefits.map((benefit, index) => (
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

      {/* Services Section */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive <span className="gradient-text">Local SEO Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to dominate local search results and attract more customers from your local area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {localSEOServices.map((service, index) => (
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

      {/* Local SEO Factors */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Local SEO <span className="gradient-text">Ranking Factors</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Understanding the key factors that influence local search rankings helps prioritise our optimisation efforts.
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50">
            <div className="grid grid-cols-3 gap-0 bg-gray-800/70 p-4 font-semibold text-white text-sm">
              <div>Ranking Factor</div>
              <div className="text-center">Importance</div>
              <div className="text-center">Description</div>
            </div>
            
            {localSEOFactors.map((factor, index) => (
              <div key={index} className="grid grid-cols-3 gap-0 p-4 border-t border-gray-700">
                <div className="font-medium text-white">{factor.factor}</div>
                <div className="text-center">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    factor.importance === 'Critical' ? 'bg-red-600/20 text-red-400' :
                    factor.importance === 'High' ? 'bg-orange-600/20 text-orange-400' :
                    'bg-blue-600/20 text-blue-400'
                  }`}>
                    {factor.importance}
                  </span>
                </div>
                <div className="text-gray-300 text-sm">{factor.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Local SEO <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A systematic approach to local SEO that delivers consistent results and long-term success in local search rankings.
            </p>
          </div>

          <div className="space-y-12">
            {localSEOProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col lg:flex-row items-start gap-8"
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold">
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
              Local SEO <span className="gradient-text">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our local SEO services have helped UK businesses increase their local visibility and attract more customers.
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
                    <span className="text-blue-400 text-sm bg-blue-400/10 px-3 py-1 rounded-full">
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
                
                <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-300">
                  "{study.testimonial}"
                </blockquote>
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
              Ready to Dominate Local Search?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Start attracting more local customers today with our proven local SEO strategies. Get a free audit and see how we can improve your local visibility.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 hover-glow flex items-center justify-center space-x-2"
              >
                <span>Get Free Local SEO Audit</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Start Local SEO Campaign</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LocalSEO;