import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  Clock, 
  Target,
  ArrowRight,
  CheckCircle,
  BarChart3,
  Zap,
  Shield,
  Globe,
  ShoppingCart,
  Award
} from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce Revenue Transformation',
      client: 'Premium Fashion Retailer',
      industry: 'Fashion & Retail',
      challenge: 'Slow loading times and poor mobile experience were causing high bounce rates and low conversions.',
      solution: 'Complete WooCommerce redesign with advanced performance optimisation and mobile-first approach.',
      timeline: '6 weeks',
      image: 'fashion-transformation',
      results: {
        revenue: '+250% increase',
        loadTime: '8.2s → 1.4s',
        mobileScore: '23 → 94',
        bounceRate: '-65%',
        conversions: '+180%'
      },
      technologies: ['WordPress', 'WooCommerce', 'Custom PHP', 'Performance Optimisation'],
      testimonial: {
        quote: 'The transformation has been incredible. Our online sales have more than doubled, and customer feedback about the site experience has been overwhelmingly positive.',
        author: 'Sarah Mitchell',
        position: 'E-commerce Director'
      },
      keyFeatures: [
        'Advanced product filtering system',
        'One-click checkout process',
        'Wishlist and comparison tools',
        'Multi-currency support',
        'Inventory management integration',
        'Customer review system'
      ],
      metrics: [
        { label: 'Page Load Speed', before: '8.2s', after: '1.4s', improvement: '83%' },
        { label: 'Mobile Performance', before: '23/100', after: '94/100', improvement: '309%' },
        { label: 'Conversion Rate', before: '1.2%', after: '3.4%', improvement: '183%' },
        { label: 'Average Order Value', before: '£45', after: '£78', improvement: '73%' }
      ]
    },
    {
      id: 2,
      title: 'Professional Services Digital Growth',
      client: 'Leading Law Firm',
      industry: 'Legal Services',
      challenge: 'Outdated website with poor lead generation and inefficient client management processes.',
      solution: 'Modern WordPress platform with integrated client portal and automated lead nurturing system.',
      timeline: '8 weeks',
      image: 'legal-growth',
      results: {
        leads: '+300% increase',
        clientSatisfaction: '95% rating',
        adminTime: '-70% reduction',
        newClients: '+150% growth',
        retention: '92% rate'
      },
      technologies: ['WordPress', 'Custom Portal', 'CRM Integration', 'Security Hardening'],
      testimonial: {
        quote: 'The new website and client portal have revolutionised our practice. We\'re attracting higher-quality leads and our clients love the convenience of the online services.',
        author: 'James Richardson',
        position: 'Managing Partner'
      },
      keyFeatures: [
        'Secure client portal',
        'Document management system',
        'Appointment scheduling',
        'Case tracking dashboard',
        'Automated billing integration',
        'Secure communication tools'
      ],
      metrics: [
        { label: 'Lead Generation', before: '12/month', after: '48/month', improvement: '300%' },
        { label: 'Client Satisfaction', before: '78%', after: '95%', improvement: '22%' },
        { label: 'Admin Efficiency', before: '40hrs/week', after: '12hrs/week', improvement: '70%' },
        { label: 'Client Retention', before: '68%', after: '92%', improvement: '35%' }
      ]
    },
    {
      id: 3,
      title: 'Healthcare Digital Transformation',
      client: 'Regional Medical Centre',
      industry: 'Healthcare',
      challenge: 'HIPAA compliance requirements and need for patient portal with telemedicine capabilities.',
      solution: 'HIPAA-compliant WordPress platform with integrated patient portal and telemedicine system.',
      timeline: '10 weeks',
      image: 'healthcare-transformation',
      results: {
        patientSatisfaction: '+85% increase',
        appointments: '+200% online bookings',
        efficiency: '60% admin reduction',
        compliance: '100% HIPAA compliant',
        telehealth: '500+ consultations'
      },
      technologies: ['WordPress', 'HIPAA Compliance', 'Telemedicine API', 'Patient Portal'],
      testimonial: {
        quote: 'The new platform has transformed how we deliver healthcare. Patients love the convenience, and we\'ve significantly improved our operational efficiency while maintaining the highest security standards.',
        author: 'Dr. Emily Watson',
        position: 'Chief Medical Officer'
      },
      keyFeatures: [
        'HIPAA-compliant patient portal',
        'Telemedicine integration',
        'Online appointment booking',
        'Prescription management',
        'Secure messaging system',
        'Medical records access'
      ],
      metrics: [
        { label: 'Online Appointments', before: '15%', after: '75%', improvement: '400%' },
        { label: 'Patient Satisfaction', before: '72%', after: '94%', improvement: '31%' },
        { label: 'Admin Calls', before: '200/day', after: '80/day', improvement: '60%' },
        { label: 'Telehealth Usage', before: '0', after: '500/month', improvement: 'New Service' }
      ]
    },
    {
      id: 4,
      title: 'Non-Profit Fundraising Success',
      client: 'Children\'s Education Charity',
      industry: 'Non-Profit',
      challenge: 'Limited online presence and ineffective donation system were hindering fundraising efforts.',
      solution: 'Engaging WordPress website with integrated donation platform and volunteer management system.',
      timeline: '5 weeks',
      image: 'charity-success',
      results: {
        donations: '+400% increase',
        volunteers: '+250% signups',
        engagement: '+300% social media',
        events: '50+ organised',
        awareness: '+500% reach'
      },
      technologies: ['WordPress', 'Donation System', 'Event Management', 'Social Integration'],
      testimonial: {
        quote: 'The impact has been extraordinary. We\'ve raised more funds in the past year than in the previous three years combined. The website has become our most powerful fundraising tool.',
        author: 'Maria Gonzalez',
        position: 'Executive Director'
      },
      keyFeatures: [
        'Integrated donation system',
        'Volunteer registration portal',
        'Event management calendar',
        'Impact tracking dashboard',
        'Social media integration',
        'Newsletter automation'
      ],
      metrics: [
        { label: 'Monthly Donations', before: '£2,500', after: '£12,500', improvement: '400%' },
        { label: 'Volunteer Signups', before: '8/month', after: '28/month', improvement: '250%' },
        { label: 'Social Engagement', before: '500/month', after: '2,000/month', improvement: '300%' },
        { label: 'Event Attendance', before: '50/event', after: '180/event', improvement: '260%' }
      ]
    }
  ];

  const getIndustryIcon = (industry) => {
    switch (industry) {
      case 'Fashion & Retail':
        return <ShoppingCart className="h-6 w-6" />;
      case 'Legal Services':
        return <Shield className="h-6 w-6" />;
      case 'Healthcare':
        return <Users className="h-6 w-6" />;
      case 'Non-Profit':
        return <Award className="h-6 w-6" />;
      default:
        return <Globe className="h-6 w-6" />;
    }
  };

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
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Case <span className="gradient-text">Studies</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Discover how we've helped businesses across various industries achieve remarkable results 
              with our expert web development and digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24">
        <div className="container-custom">
          <div className="space-y-32">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-gray-700/50"
              >
                {/* Header */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400">
                        {getIndustryIcon(study.industry)}
                      </div>
                      <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                          {study.title}
                        </h2>
                        <p className="text-blue-400 font-medium">{study.client}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6 mb-6">
                      <span className="bg-green-600/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium">
                        {study.industry}
                      </span>
                      <span className="flex items-center space-x-2 text-gray-300">
                        <Clock className="h-4 w-4" />
                        <span>{study.timeline}</span>
                      </span>
                    </div>
                  </div>
                  
                  {/* Key Results */}
                  <div className="bg-gray-800/50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Key Results</h3>
                    <div className="grid grid-cols-1 gap-3">
                      {Object.entries(study.results).map(([key, value], resultIndex) => (
                        <div key={resultIndex} className="flex items-center justify-between">
                          <span className="text-gray-300 text-sm capitalize">
                            {key.replace(/([A-Z])/g, ' $1')}:
                          </span>
                          <span className="text-green-400 font-bold">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Challenge & Solution */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                  <div>
                    <h3 className="text-2xl font-bold text-red-400 mb-4">The Challenge</h3>
                    <p className="text-gray-300 leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-400 mb-4">Our Solution</h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {study.solution}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-white mb-6">Key Features Implemented</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {study.keyFeatures.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Detailed Metrics */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-white mb-6">Detailed Performance Metrics</h3>
                  <div className="bg-gray-800/50 rounded-2xl overflow-hidden">
                    <div className="grid grid-cols-4 gap-0 bg-gray-800/70 p-4 font-semibold text-white text-sm">
                      <div>Metric</div>
                      <div className="text-center">Before</div>
                      <div className="text-center">After</div>
                      <div className="text-center">Improvement</div>
                    </div>
                    {study.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="grid grid-cols-4 gap-0 p-4 border-t border-gray-700">
                        <div className="text-gray-300 font-medium">{metric.label}</div>
                        <div className="text-center text-red-400 font-bold">{metric.before}</div>
                        <div className="text-center text-green-400 font-bold">{metric.after}</div>
                        <div className="text-center">
                          <span className="bg-blue-600/20 text-blue-400 px-2 py-1 rounded-full text-sm font-medium">
                            {metric.improvement}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl p-8 border border-blue-500/20">
                  <blockquote className="text-lg text-gray-300 italic mb-6 leading-relaxed">
                    "{study.testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      {study.testimonial.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{study.testimonial.author}</div>
                      <div className="text-gray-400 text-sm">{study.testimonial.position}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Overall Impact */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Overall <span className="gradient-text">Impact</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The cumulative results across all our case studies demonstrate our commitment to delivering exceptional outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">300%</div>
              <div className="text-gray-300">Average Revenue Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">250%</div>
              <div className="text-gray-300">Average Lead Generation Boost</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">400%</div>
              <div className="text-gray-300">Average Performance Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">95%</div>
              <div className="text-gray-300">Average Client Satisfaction</div>
            </div>
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
              Ready to Become Our Next Success Story?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Join the businesses that have transformed their online presence and achieved remarkable results with our expert services.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-green-50 transition-all duration-300 hover-glow flex items-center justify-center space-x-2"
              >
                <span>Start Your Success Story</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/portfolio"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>View Our Portfolio</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;