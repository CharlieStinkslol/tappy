import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Code, 
  Palette, 
  Smartphone, 
  Search, 
  ShoppingCart, 
  Users, 
  CheckCircle, 
  Zap, 
  ArrowRight,
  Database,
  Shield,
  Settings,
  Globe,
  Layers,
  Target,
  TrendingUp,
  Award,
  Clock,
  Star,
  Monitor,
  Briefcase
} from 'lucide-react';

const WebsiteDevelopment = () => {
  const developmentServices = [
    {
      icon: <Code className="h-8 w-8 text-blue-500" />,
      title: 'WordPress Development',
      description: 'Custom WordPress websites with bespoke themes, plugins, and functionality tailored to your business needs.',
      features: ['Custom themes & plugins', 'E-commerce integration', 'Content management', 'SEO optimisation'],
      benefits: ['Easy content updates', 'Scalable architecture', 'SEO-friendly structure', 'Extensive plugin ecosystem']
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-green-500" />,
      title: 'E-commerce Websites',
      description: 'Powerful online stores built with WooCommerce, Shopify, or custom solutions that drive sales and conversions.',
      features: ['Product catalogues', 'Payment processing', 'Inventory management', 'Order tracking'],
      benefits: ['Increased online sales', 'Automated processes', 'Customer insights', 'Mobile commerce']
    },
    {
      icon: <Briefcase className="h-8 w-8 text-purple-500" />,
      title: 'Business Websites',
      description: 'Professional corporate websites that establish credibility and generate leads for UK businesses.',
      features: ['Professional design', 'Lead generation forms', 'Service showcases', 'Team profiles'],
      benefits: ['Enhanced credibility', 'More enquiries', 'Professional image', 'Local SEO benefits']
    },
    {
      icon: <Smartphone className="h-8 w-8 text-orange-500" />,
      title: 'Responsive Web Design',
      description: 'Mobile-first websites that look perfect and function flawlessly on all devices and screen sizes.',
      features: ['Mobile optimisation', 'Touch-friendly interfaces', 'Fast loading', 'Cross-browser compatibility'],
      benefits: ['Better user experience', 'Higher conversions', 'Improved SEO', 'Wider audience reach']
    },
    {
      icon: <Database className="h-8 w-8 text-red-500" />,
      title: 'Custom Web Applications',
      description: 'Bespoke web applications with advanced functionality, user portals, and database integration.',
      features: ['Custom functionality', 'User authentication', 'Database integration', 'API development'],
      benefits: ['Streamlined processes', 'Improved efficiency', 'Competitive advantage', 'Scalable solutions']
    },
    {
      icon: <Palette className="h-8 w-8 text-indigo-500" />,
      title: 'Website Redesign',
      description: 'Transform outdated websites into modern, engaging platforms that reflect your brand and drive results.',
      features: ['Modern design', 'Brand alignment', 'UX improvements', 'Performance optimisation'],
      benefits: ['Improved conversions', 'Better brand image', 'Enhanced usability', 'Competitive edge']
    }
  ];

  const technologies = [
    { name: 'WordPress', description: 'Most popular CMS platform', icon: <Code className="h-6 w-6" /> },
    { name: 'WooCommerce', description: 'Leading e-commerce solution', icon: <ShoppingCart className="h-6 w-6" /> },
    { name: 'React', description: 'Modern JavaScript framework', icon: <Layers className="h-6 w-6" /> },
    { name: 'PHP', description: 'Server-side programming', icon: <Database className="h-6 w-6" /> },
    { name: 'MySQL', description: 'Reliable database management', icon: <Database className="h-6 w-6" /> },
    { name: 'HTML5/CSS3', description: 'Modern web standards', icon: <Code className="h-6 w-6" /> }
  ];

  const process = [
    {
      title: 'Discovery & Planning',
      description: 'We analyse your business goals, target audience, and technical requirements to create the perfect solution.',
      deliverables: ['Requirements analysis', 'Technical specification', 'Project timeline', 'Design mockups'],
      duration: '1-2 weeks'
    },
    {
      title: 'Design & Development',
      description: 'Our expert team creates beautiful, functional websites using the latest technologies and best practices.',
      deliverables: ['Custom design', 'Responsive development', 'Content integration', 'Functionality testing'],
      duration: '3-6 weeks'
    },
    {
      title: 'Testing & Launch',
      description: 'Comprehensive testing across all devices and browsers before a smooth, professional launch.',
      deliverables: ['Quality assurance', 'Performance optimisation', 'SEO setup', 'Live deployment'],
      duration: '1 week'
    },
    {
      title: 'Support & Maintenance',
      description: 'Ongoing support, updates, and maintenance to keep your website secure and performing optimally.',
      deliverables: ['Regular updates', 'Security monitoring', 'Performance tracking', 'Technical support'],
      duration: 'Ongoing'
    }
  ];

  const caseStudies = [
    {
      client: 'UK Manufacturing Company',
      industry: 'Manufacturing',
      challenge: 'Outdated website not generating leads',
      solution: 'Modern WordPress website with lead generation focus',
      results: ['300% increase in enquiries', '150% improvement in conversion rate', '200% faster loading times'],
      testimonial: 'Our new website has transformed our business. We\'re getting more enquiries than ever before.'
    },
    {
      client: 'London-based Consultancy',
      industry: 'Professional Services',
      challenge: 'Poor mobile experience affecting client engagement',
      solution: 'Mobile-first responsive website with client portal',
      results: ['85% mobile traffic improvement', '120% increase in client satisfaction', '60% reduction in support calls'],
      testimonial: 'The mobile experience is fantastic. Our clients love the new portal functionality.'
    },
    {
      client: 'Regional Charity Organisation',
      industry: 'Non-Profit',
      challenge: 'Ineffective donation system and poor volunteer engagement',
      solution: 'Custom donation platform with volunteer management',
      results: ['400% increase in online donations', '250% more volunteer registrations', '300% social media engagement'],
      testimonial: 'The new website has revolutionised our fundraising efforts and volunteer coordination.'
    }
  ];

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-indigo-700/20"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600/20 rounded-2xl mb-8">
              <Code className="h-10 w-10 text-blue-400" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Professional Website Development
              <span className="block gradient-text">Built for UK Businesses</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Custom website development services that drive business growth. From WordPress sites to complex web applications, 
              we create digital solutions that deliver results for UK businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover-glow flex items-center justify-center space-x-2"
              >
                <span>Start Your Project</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-xl font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Free Consultation</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Development Services */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Website Development <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive web development solutions designed to meet every business need, from simple brochure sites to complex applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developmentServices.map((service, index) => (
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
                  <h4 className="text-sm font-semibold text-blue-400 mb-3">Key Features:</h4>
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
                  <h4 className="text-sm font-semibold text-green-400 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-3">
                        <Target className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Technologies We <span className="gradient-text">Master</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We use cutting-edge technologies and proven frameworks to build robust, scalable websites that perform exceptionally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/20 rounded-xl mb-6 text-blue-400">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {tech.name}
                </h3>
                <p className="text-gray-300">
                  {tech.description}
                </p>
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
              Our <span className="gradient-text">Development Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A structured approach that ensures your website project is delivered on time, within budget, and exceeds your expectations.
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
                className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
              >
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
              Development <span className="gradient-text">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from UK businesses that have transformed their online presence with our website development expertise.
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
                  <h3 className="text-xl font-bold text-white mb-2">
                    {study.client}
                  </h3>
                  <span className="text-blue-400 text-sm bg-blue-400/10 px-3 py-1 rounded-full">
                    {study.industry}
                  </span>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-red-400 mb-2">Challenge:</h4>
                  <p className="text-gray-300 text-sm mb-4">{study.challenge}</p>
                  
                  <h4 className="text-lg font-semibold text-blue-400 mb-2">Solution:</h4>
                  <p className="text-gray-300 text-sm mb-4">{study.solution}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-green-400 mb-3">Results:</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center space-x-2">
                        <TrendingUp className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{result}</span>
                      </li>
                    ))}
                  </ul>
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
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Build Your Website?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's discuss your project requirements and create a website that drives your business forward and exceeds your expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 hover-glow flex items-center justify-center space-x-2"
              >
                <span>Get Development Quote</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Schedule Consultation</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WebsiteDevelopment;