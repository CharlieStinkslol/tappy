import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Clock, 
  TrendingUp, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Target, 
  BarChart3,
  Globe,
  Database,
  Image,
  Code,
  Server,
  Monitor,
  Gauge,
  Award,
  Star,
  Activity
} from 'lucide-react';

const SpeedOptimization = () => {
  const speedStats = [
    {
      icon: <Clock className="h-8 w-8 text-red-500" />,
      stat: '3 seconds',
      description: 'Maximum loading time before users abandon your site',
      impact: '53% of mobile users leave'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-500" />,
      stat: '7%',
      description: 'Increase in conversions for every 100ms improvement in load time',
      impact: 'Faster sites convert better'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      stat: '40%',
      description: 'Increase in bounce rate for every additional second of load time',
      impact: 'Speed directly affects engagement'
    },
    {
      icon: <Target className="h-8 w-8 text-purple-500" />,
      stat: '25%',
      description: 'Improvement in search rankings with faster loading speeds',
      impact: 'Google rewards fast websites'
    }
  ];

  const optimisationServices = [
    {
      icon: <Image className="h-8 w-8 text-blue-500" />,
      title: 'Image Optimisation',
      description: 'Advanced image compression and next-gen format conversion without quality loss using cutting-edge techniques.',
      techniques: ['WebP/AVIF conversion', 'Lazy loading implementation', 'Responsive images', 'Compression algorithms'],
      improvement: 'Up to 70% size reduction'
    },
    {
      icon: <Code className="h-8 w-8 text-green-500" />,
      title: 'Code Optimisation',
      description: 'Minify CSS, JavaScript, and HTML to reduce file sizes and improve parsing speed.',
      techniques: ['CSS/JS minification', 'Code splitting', 'Tree shaking', 'Critical CSS extraction'],
      improvement: 'Up to 50% faster parsing'
    },
    {
      icon: <Server className="h-8 w-8 text-orange-500" />,
      title: 'Caching Implementation',
      description: 'Advanced caching systems to serve content faster to returning visitors and reduce server load.',
      techniques: ['Browser caching', 'Server-side caching', 'CDN integration', 'Object caching'],
      improvement: 'Up to 90% faster repeat visits'
    },
    {
      icon: <Database className="h-8 w-8 text-purple-500" />,
      title: 'Database Optimisation',
      description: 'Clean and optimise your WordPress database for faster query performance and reduced overhead.',
      techniques: ['Query optimisation', 'Index creation', 'Database cleanup', 'Table optimisation'],
      improvement: 'Up to 60% faster queries'
    },
    {
      icon: <Globe className="h-8 w-8 text-red-500" />,
      title: 'CDN Integration',
      description: 'Content Delivery Network implementation to serve content from global locations closest to users.',
      techniques: ['Global edge servers', 'Asset distribution', 'Geographic routing', 'Load balancing'],
      improvement: 'Up to 80% faster global loading'
    },
    {
      icon: <Monitor className="h-8 w-8 text-indigo-500" />,
      title: 'Core Web Vitals',
      description: 'Optimise for Google\'s Core Web Vitals to improve search rankings and user experience metrics.',
      techniques: ['LCP optimisation', 'FID improvement', 'CLS reduction', 'Performance monitoring'],
      improvement: 'Better search rankings'
    }
  ];

  const beforeAfter = [
    { 
      metric: 'Page Load Time', 
      before: '8.2s', 
      after: '1.8s', 
      improvement: '78%',
      description: 'Complete page loading time'
    },
    { 
      metric: 'Time to First Byte', 
      before: '2.1s', 
      after: '0.4s', 
      improvement: '81%',
      description: 'Server response time'
    },
    { 
      metric: 'First Contentful Paint', 
      before: '4.3s', 
      after: '1.2s', 
      improvement: '72%',
      description: 'First visible content'
    },
    { 
      metric: 'Largest Contentful Paint', 
      before: '6.8s', 
      after: '2.1s', 
      improvement: '69%',
      description: 'Main content loading'
    },
    { 
      metric: 'Cumulative Layout Shift', 
      before: '0.25', 
      after: '0.05', 
      improvement: '80%',
      description: 'Visual stability score'
    },
    { 
      metric: 'PageSpeed Score', 
      before: '32/100', 
      after: '95/100', 
      improvement: '197%',
      description: 'Google PageSpeed rating'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Comprehensive Performance Audit',
      description: 'In-depth analysis of your website\'s current performance using industry-standard tools and methodologies.',
      tools: ['GTmetrix Pro', 'Google PageSpeed Insights', 'WebPageTest', 'Lighthouse CI'],
      deliverables: ['Performance report', 'Bottleneck identification', 'Improvement roadmap', 'Priority recommendations'],
      duration: '1-2 days'
    },
    {
      step: '02',
      title: 'Optimisation Strategy Development',
      description: 'Custom optimisation plan based on your specific issues, priorities, and business goals to maximise impact.',
      tools: ['Performance analysis', 'Technical assessment', 'Resource planning', 'Timeline creation'],
      deliverables: ['Optimisation strategy', 'Technical specifications', 'Implementation plan', 'Success metrics'],
      duration: '1 day'
    },
    {
      step: '03',
      title: 'Implementation & Optimisation',
      description: 'Execute optimisation techniques including image compression, code minification, caching setup, and database optimisation.',
      tools: ['Image optimisation tools', 'Code minifiers', 'Caching plugins', 'Database optimisers'],
      deliverables: ['Optimised website', 'Performance improvements', 'Configuration documentation', 'Before/after comparison'],
      duration: '3-5 days'
    },
    {
      step: '04',
      title: 'Testing & Monitoring Setup',
      description: 'Thorough testing across devices and browsers, followed by continuous monitoring to maintain optimal performance.',
      tools: ['Cross-browser testing', 'Mobile testing', 'Performance monitoring', 'Alert systems'],
      deliverables: ['Testing reports', 'Monitoring dashboard', 'Performance alerts', '30-day monitoring'],
      duration: '1-2 days'
    }
  ];

  const caseStudies = [
    {
      client: 'E-commerce Fashion Store',
      industry: 'Retail',
      challenge: 'Slow product pages affecting conversions and mobile experience',
      solution: 'Complete performance overhaul with image optimisation and caching',
      results: {
        loadTime: '6.2s → 1.4s',
        conversions: '+45%',
        bounceRate: '-38%',
        mobileScore: '23 → 94'
      },
      testimonial: 'The speed improvements transformed our online store. Sales increased immediately after the optimisation.',
      timeframe: '5 days'
    },
    {
      client: 'Professional Services Firm',
      industry: 'Legal',
      challenge: 'Poor Core Web Vitals affecting search rankings and user experience',
      solution: 'Core Web Vitals optimisation with advanced caching and code splitting',
      results: {
        loadTime: '4.8s → 1.1s',
        searchRankings: '+35%',
        userEngagement: '+52%',
        pagespeedScore: '41 → 96'
      },
      testimonial: 'Our website now loads instantly and our search rankings have improved significantly.',
      timeframe: '4 days'
    },
    {
      client: 'SaaS Platform',
      industry: 'Technology',
      challenge: 'Heavy JavaScript affecting application performance and user retention',
      solution: 'JavaScript optimisation, code splitting, and progressive loading implementation',
      results: {
        loadTime: '9.1s → 2.3s',
        userRetention: '+28%',
        serverLoad: '-60%',
        performanceScore: '28 → 92'
      },
      testimonial: 'The performance improvements have significantly enhanced our user experience and reduced churn.',
      timeframe: '7 days'
    }
  ];

  const packages = [
    {
      name: 'Essential Speed',
      description: 'Perfect for small business websites',
      features: [
        'Performance audit & report',
        'Image optimisation',
        'Basic caching setup',
        'Code minification',
        'Mobile optimisation',
        'Core Web Vitals improvement',
        '30-day monitoring',
        'Performance guarantee'
      ],
      guarantee: '50% speed improvement'
    },
    {
      name: 'Professional Speed',
      description: 'Ideal for business websites',
      features: [
        'Comprehensive performance audit',
        'Advanced image optimisation',
        'Multi-layer caching system',
        'Database optimisation',
        'CDN integration',
        'Code splitting & lazy loading',
        'Core Web Vitals optimisation',
        '60-day monitoring & support',
        'Conversion tracking setup'
      ],
      guarantee: '75% speed improvement',
      popular: true
    },
    {
      name: 'Enterprise Speed',
      description: 'Complete solution for large websites',
      features: [
        'Enterprise performance audit',
        'Custom optimisation strategy',
        'Advanced caching architecture',
        'Server-level optimisations',
        'Premium CDN setup',
        'Progressive web app features',
        'Advanced monitoring dashboard',
        '90-day premium support',
        'Monthly performance reports',
        'Dedicated optimisation specialist'
      ],
      guarantee: '90% speed improvement'
    }
  ];

  const tools = [
    { name: 'GTmetrix Pro', category: 'Performance Testing' },
    { name: 'Google PageSpeed Insights', category: 'Core Web Vitals' },
    { name: 'WebPageTest', category: 'Advanced Testing' },
    { name: 'Lighthouse CI', category: 'Automated Auditing' },
    { name: 'Pingdom', category: 'Uptime Monitoring' },
    { name: 'New Relic', category: 'Application Monitoring' },
    { name: 'Cloudflare', category: 'CDN & Security' },
    { name: 'KeyCDN', category: 'Content Delivery' }
  ];

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-red-600/20 to-pink-700/20"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-600/20 rounded-2xl mb-8">
              <Zap className="h-10 w-10 text-orange-400" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Website Speed Optimisation
              <span className="block gradient-text">Boost Conversions by 300%</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Professional website speed optimisation services that dramatically improve your site's performance, 
              search rankings, and user experience. Guaranteed results with measurable improvements.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 hover-glow flex items-center justify-center space-x-2"
              >
                <span>Get Speed Audit</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-orange-400 text-orange-400 px-8 py-4 rounded-xl font-semibold hover:bg-orange-400 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Request Optimisation Quote</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Speed Stats */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Website Speed <span className="gradient-text">Matters</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every second counts. Slow websites cost businesses millions in lost revenue and poor user experience. Here's what the data shows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {speedStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-800 rounded-xl mb-6">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold gradient-text mb-4">{stat.stat}</div>
                <p className="text-gray-300 mb-4 text-sm">{stat.description}</p>
                <p className="text-orange-400 text-xs font-medium">{stat.impact}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Results */}
      <section className="py-24">
        <div className="container-custom">
          {/* Performance Improvement Chart */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Typical Performance Improvements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <svg className="w-32 h-32" viewBox="0 0 42 42">
                    <circle
                      cx="21"
                      cy="21"
                      r="15.915"
                      fill="transparent"
                      stroke="#374151"
                      strokeWidth="3"
                    />
                    <circle
                      cx="21"
                      cy="21"
                      r="15.915"
                      fill="transparent"
                      stroke="#f59e0b"
                      strokeWidth="3"
                      strokeDasharray="75 25"
                      strokeDashoffset="25"
                      className="animate-pulse"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold text-orange-400">75%</span>
                    <span className="text-xs text-gray-400">Faster</span>
                  </div>
                </div>
                <p className="text-gray-300 font-medium">Loading Speed</p>
              </div>
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <svg className="w-32 h-32" viewBox="0 0 42 42">
                    <circle
                      cx="21"
                      cy="21"
                      r="15.915"
                      fill="transparent"
                      stroke="#374151"
                      strokeWidth="3"
                    />
                    <circle
                      cx="21"
                      cy="21"
                      r="15.915"
                      fill="transparent"
                      stroke="#10b981"
                      strokeWidth="3"
                      strokeDasharray="85 15"
                      strokeDashoffset="25"
                      className="animate-pulse"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold text-green-400">85%</span>
                    <span className="text-xs text-gray-400">Better</span>
                  </div>
                </div>
                <p className="text-gray-300 font-medium">Core Web Vitals</p>
              </div>
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <svg className="w-32 h-32" viewBox="0 0 42 42">
                    <circle
                      cx="21"
                      cy="21"
                      r="15.915"
                      fill="transparent"
                      stroke="#374151"
                      strokeWidth="3"
                    />
                    <circle
                      cx="21"
                      cy="21"
                      r="15.915"
                      fill="transparent"
                      stroke="#3b82f6"
                      strokeWidth="3"
                      strokeDasharray="60 40"
                      strokeDashoffset="25"
                      className="animate-pulse"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold text-blue-400">60%</span>
                    <span className="text-xs text-gray-400">Higher</span>
                  </div>
                </div>
                <p className="text-gray-300 font-medium">Conversions</p>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Real Results from <span className="gradient-text">Recent Projects</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See the dramatic performance improvements we've achieved for our clients across various industries and website types.
            </p>
          </div>

          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
              <div className="bg-gray-800/50 p-6 font-semibold text-white">
                Performance Metric
              </div>
              <div className="bg-red-900/20 p-6 font-semibold text-red-400 text-center">
                Before
              </div>
              <div className="bg-green-900/20 p-6 font-semibold text-green-400 text-center">
                After
              </div>
              <div className="bg-blue-900/20 p-6 font-semibold text-blue-400 text-center">
                Improvement
              </div>
              <div className="bg-purple-900/20 p-6 font-semibold text-purple-400 text-center">
                Description
              </div>
            </div>
            
            {beforeAfter.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-5 gap-0 border-t border-gray-700"
              >
                <div className="p-6 font-medium text-white">
                  {metric.metric}
                </div>
                <div className="p-6 text-center text-red-400 font-bold">
                  {metric.before}
                </div>
                <div className="p-6 text-center text-green-400 font-bold">
                  {metric.after}
                </div>
                <div className="p-6 text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-900/30 text-blue-400">
                    {metric.improvement} better
                  </span>
                </div>
                <div className="p-6 text-center text-gray-300 text-sm">
                  {metric.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Optimisation Services */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Speed <span className="gradient-text">Optimisation</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our optimisation services address every aspect of website performance from frontend to backend, ensuring maximum speed improvements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {optimisationServices.map((service, index) => (
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
                    {service.improvement}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>
                <div>
                  <h4 className="text-sm font-semibold text-orange-400 mb-3">Techniques Used:</h4>
                  <ul className="space-y-2">
                    {service.techniques.map((technique, techniqueIndex) => (
                      <li key={techniqueIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{technique}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
              Our <span className="gradient-text">Optimisation Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A systematic approach to identifying and fixing performance bottlenecks with measurable results and ongoing monitoring.
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
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold">
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
                      <span className="inline-flex items-center px-4 py-2 bg-orange-600/20 text-orange-400 rounded-full text-sm font-medium">
                        <Clock className="h-4 w-4 mr-2" />
                        {step.duration}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-orange-400 mb-4">Tools Used:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {step.tools.map((tool, toolIndex) => (
                          <div key={toolIndex} className="flex items-center space-x-3">
                            <Target className="h-4 w-4 text-orange-500 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{tool}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-green-400 mb-4">Deliverables:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {step.deliverables.map((deliverable, deliverableIndex) => (
                          <div key={deliverableIndex} className="flex items-center space-x-3">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Speed Optimisation <span className="gradient-text">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from businesses that transformed their website performance and saw immediate improvements in conversions and user experience.
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
                    <span className="text-orange-400 text-sm bg-orange-400/10 px-3 py-1 rounded-full">
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
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300 text-sm">Load Time:</span>
                      <span className="text-green-400 font-bold text-sm">{study.results.loadTime}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300 text-sm">Conversions:</span>
                      <span className="text-green-400 font-bold text-sm">{study.results.conversions}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300 text-sm">Bounce Rate:</span>
                      <span className="text-green-400 font-bold text-sm">{study.results.bounceRate}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300 text-sm">Performance Score:</span>
                      <span className="text-green-400 font-bold text-sm">{study.results.pagespeedScore || study.results.mobileScore}</span>
                    </div>
                  </div>
                </div>
                
                <blockquote className="border-l-4 border-orange-500 pl-4 italic text-gray-300">
                  "{study.testimonial}"
                </blockquote>
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
              Speed Optimisation <span className="gradient-text">Packages</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the optimisation package that best fits your needs, with guaranteed speed improvements and ongoing monitoring.
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
                  pkg.popular ? 'ring-2 ring-orange-600 transform scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2">
                      <Star className="h-4 w-4" />
                      <span>Most Popular</span>
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {pkg.description}
                  </p>
                  <div className="text-green-400 text-sm font-medium bg-green-400/10 px-3 py-1 rounded-full inline-block">
                    {pkg.guarantee} guaranteed
                  </div>
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
                      ? 'bg-orange-600 text-white hover:bg-orange-700' 
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

      {/* Tools & Technologies */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Professional <span className="gradient-text">Tools & Technologies</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We use industry-leading tools and technologies to analyse, optimise, and monitor your website's performance with precision.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 text-center"
              >
                <div className="w-12 h-12 bg-orange-600/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <Activity className="h-6 w-6 text-orange-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">{tool.name}</h3>
                <p className="text-gray-400 text-xs">{tool.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Supercharge Your Website?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Get a comprehensive speed audit and optimisation quote. See exactly how much faster your website can be and start converting more visitors today.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold mb-3">Free Speed Audit</h3>
                <p className="mb-4 text-orange-100">Complete performance analysis with detailed recommendations</p>
                <ul className="text-left space-y-2 text-orange-100 text-sm">
                  <li>• Performance score analysis</li>
                  <li>• Optimisation opportunities</li>
                  <li>• Detailed improvement plan</li>
                  <li>• Competitor comparison</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold mb-3">Full Optimisation</h3>
                <p className="mb-4 text-orange-100">Complete speed optimisation service with ongoing monitoring</p>
                <ul className="text-left space-y-2 text-orange-100 text-sm">
                  <li>• All optimisation techniques</li>
                  <li>• 30-day performance guarantee</li>
                  <li>• Ongoing monitoring & support</li>
                  <li>• Monthly performance reports</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-50 transition-all duration-300 hover-glow flex items-center justify-center space-x-2"
              >
                <span>Get Free Speed Audit</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Request Optimisation Quote</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SpeedOptimization;