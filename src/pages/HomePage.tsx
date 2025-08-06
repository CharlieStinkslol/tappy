import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useContentManager } from '../hooks/useContentManager';
import { useSupabaseData } from '../hooks/useSupabaseData';
import { 
  ArrowRight, 
  Code, 
  Zap, 
  Shield, 
  Globe, 
  CheckCircle,
  Star,
  Users,
  TrendingUp,
  Award,
  Clock,
  Target,
  Smartphone,
  Search,
  Database,
  Settings,
  ShoppingCart
} from 'lucide-react';

const HomePage = () => {
  const { homePage } = useContentManager();
  const { servicePages } = useSupabaseData();

  if (!homePage) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  const getIconComponent = (iconName: string) => {
    const icons: Record<string, any> = {
      Globe, Clock, Star, Zap, Users, Award, Target, Settings, Code, Shield, Search, Database
    };
    return icons[iconName] || Star;
  };

  const featuredServices = servicePages
    .filter(service => service.enabled && service.featured)
    .sort((a, b) => a.display_order - b.display_order)
    .slice(0, 6);

  const features = [
    {
      icon: <Target className="h-6 w-6 text-blue-500" />,
      title: 'Results-Driven Approach',
      description: 'Every project is designed to deliver measurable business results and ROI that exceeds expectations.'
    },
    {
      icon: <Users className="h-6 w-6 text-green-500" />,
      title: 'Expert Team',
      description: 'Experienced developers and specialists with 10+ years of expertise dedicated to your success.'
    },
    {
      icon: <Award className="h-6 w-6 text-purple-500" />,
      title: 'Proven Track Record',
      description: '500+ successful projects with 100% client satisfaction rate across all industries.'
    },
    {
      icon: <Clock className="h-6 w-6 text-orange-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock monitoring and support for complete peace of mind and business continuity.'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      description: 'We analyse your business goals and technical requirements to create the perfect solution.',
      icon: <Search className="h-8 w-8" />
    },
    {
      step: '02',
      title: 'Design & Planning',
      description: 'Custom designs and detailed project planning ensure exceptional results.',
      icon: <Target className="h-8 w-8" />
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Expert development with rigorous testing across all devices and browsers.',
      icon: <Code className="h-8 w-8" />
    },
    {
      step: '04',
      title: 'Launch & Support',
      description: 'Smooth launch with ongoing support and monitoring for continued success.',
      icon: <Zap className="h-8 w-8" />
    }
  ];

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/8 to-indigo-700/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
            >
              <span className="block text-white mb-4">Professional Web Development</span>
              <span className="block gradient-text">That Drives Real Results</span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Expert WordPress development, seamless migrations, and comprehensive maintenance services trusted by 500+ UK businesses. 
              We deliver solutions that drive measurable business growth.
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="inline-flex items-center space-x-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-3 mb-10"
            >
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-medium text-sm">Trusted by 500+ UK Businesses</span>
              </div>
              <div className="w-px h-6 bg-white/20"></div>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
                <span className="text-white font-medium ml-2 text-sm">5.0</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            >
              <Link
                to={homePage.hero.primaryButton.link}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover-glow flex items-center justify-center space-x-2"
              >
                <span>{homePage.hero.primaryButton.text}</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to={homePage.hero.secondaryButton.link}
                className="border-2 border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm flex items-center justify-center space-x-2"
              >
                <span>{homePage.hero.secondaryButton.text}</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex flex-wrap justify-center items-center gap-4 mb-12"
            >
              <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span className="text-white text-sm">Zero Downtime</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-2">
                <Zap className="h-4 w-4 text-orange-400" />
                <span className="text-white text-sm">300% Faster</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-2">
                <Shield className="h-4 w-4 text-blue-400" />
                <span className="text-white text-sm">Enterprise Security</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {homePage.stats.map((stat, index) => {
                const IconComponent = getIconComponent(stat.icon);
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                    className="text-center group"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl mb-4 text-blue-400 group-hover:scale-110 group-hover:bg-blue-600/20 transition-all duration-300">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 font-medium">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-gray-800/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Comprehensive web development solutions designed to grow your business and exceed your expectations with proven results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link
                to="/services/website-migrations"
                className="block bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 h-full"
              >
                <div className="relative w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="h-8 w-8 text-blue-500" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                </div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs font-medium">Zero Downtime</span>
                  <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-xs font-medium">500+ Migrations</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  Website Migrations
                </h3>
                <p className="text-gray-300 mb-6">
                  Seamless platform transfers with zero downtime guarantee. Preserve SEO rankings and boost performance.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>SEO rankings preserved</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Zero data loss guarantee</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Performance improvements</span>
                  </div>
                </div>
                <div className="flex items-center text-blue-400 group-hover:text-blue-300 font-medium">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link
                to="/services/website-development"
                className="block bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 h-full"
              >
                <div className="relative w-16 h-16 bg-gradient-to-br from-green-600 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Code className="h-8 w-8 text-green-500" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                    <Star className="h-4 w-4 text-white" />
                  </div>
                </div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-xs font-medium">Custom Built</span>
                  <span className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-xs font-medium">Scalable</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  Website Development
                </h3>
                <p className="text-gray-300 mb-6">
                  Professional websites built with modern technologies. WordPress, React, and bespoke solutions.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <Code className="h-4 w-4 text-blue-500" />
                    <span>Custom development</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <ShoppingCart className="h-4 w-4 text-green-500" />
                    <span>WordPress & e-commerce</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <Smartphone className="h-4 w-4 text-purple-500" />
                    <span>Mobile-first design</span>
                  </div>
                </div>
                <div className="flex items-center text-blue-400 group-hover:text-blue-300 font-medium">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2 * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link
                to="/services/website-maintenance"
                className="block bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 h-full"
              >
                <div className="relative w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-8 w-8 text-purple-500" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-xs font-medium">24/7 Monitoring</span>
                  <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-xs font-medium">99.9% Uptime</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  Website Maintenance
                </h3>
                <p className="text-gray-300 mb-6">
                  Proactive maintenance that protects your digital investment. 24/7 monitoring and expert support.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <Shield className="h-4 w-4 text-red-500" />
                    <span>Security monitoring</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <Settings className="h-4 w-4 text-blue-500" />
                    <span>Automatic updates</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <Database className="h-4 w-4 text-green-500" />
                    <span>Daily backups</span>
                  </div>
                </div>
                <div className="flex items-center text-blue-400 group-hover:text-blue-300 font-medium">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3 * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link
                to="/services/speed-optimization"
                className="block bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 h-full"
              >
                <div className="relative w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-8 w-8 text-orange-500" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-4 w-4 text-white" />
                  </div>
                </div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-xs font-medium">300% Faster</span>
                  <span className="bg-yellow-600/20 text-yellow-400 px-3 py-1 rounded-full text-xs font-medium">Guaranteed</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  Website Speed Optimisation
                </h3>
                <p className="text-gray-300 mb-6">
                  Boost performance by 300% with proven optimisation techniques. Better rankings, more conversions.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <Zap className="h-4 w-4 text-orange-500" />
                    <span>Advanced caching</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <Search className="h-4 w-4 text-green-500" />
                    <span>Better Google rankings</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <Target className="h-4 w-4 text-purple-500" />
                    <span>Higher conversions</span>
                  </div>
                </div>
                <div className="flex items-center text-blue-400 group-hover:text-blue-300 font-medium">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 4 * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link
                to="/services/security-services"
                className="block bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 h-full"
              >
                <div className="relative w-16 h-16 bg-gradient-to-br from-red-600 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-8 w-8 text-red-500" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Shield className="h-4 w-4 text-white" />
                  </div>
                </div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-xs font-medium">Advanced Protection</span>
                  <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-xs font-medium">24/7 Response</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  WordPress Security Services
                </h3>
                <p className="text-gray-300 mb-6">
                  Multi-layered protection against cyber threats, malware, and hackers. Complete peace of mind.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <Shield className="h-4 w-4 text-red-500" />
                    <span>Real-time monitoring</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <Zap className="h-4 w-4 text-orange-500" />
                    <span>Automatic threat removal</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <Globe className="h-4 w-4 text-blue-500" />
                    <span>Firewall protection</span>
                  </div>
                </div>
                <div className="flex items-center text-blue-400 group-hover:text-blue-300 font-medium">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 5 * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link
                to="/services/managed-website-hosting"
                className="block bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 h-full"
              >
                <div className="relative w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Database className="h-8 w-8 text-indigo-500" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <Globe className="h-4 w-4 text-white" />
                  </div>
                </div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="bg-indigo-600/20 text-indigo-400 px-3 py-1 rounded-full text-xs font-medium">UK Servers</span>
                  <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs font-medium">Enterprise Grade</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  Managed Website Hosting
                </h3>
                <p className="text-gray-300 mb-6">
                  Lightning-fast hosting with UK servers and enterprise security. Fully managed service.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <Globe className="h-4 w-4 text-blue-500" />
                    <span>UK-based servers</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <Shield className="h-4 w-4 text-green-500" />
                    <span>Enterprise security</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <Clock className="h-4 w-4 text-purple-500" />
                    <span>99.9% uptime guarantee</span>
                  </div>
                </div>
                <div className="flex items-center text-blue-400 group-hover:text-blue-300 font-medium">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover-glow"
            >
              <span>View All Services</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Why Choose <span className="gradient-text">TapDev</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We combine technical expertise with business understanding to deliver solutions that not only look exceptional but drive real results for your business growth.
              </p>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-3xl p-8 border border-blue-500/20"
            >
              <h3 className="text-2xl font-bold text-white mb-6">What Sets Us Apart</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Zero Downtime Migrations</div>
                    <div className="text-gray-300 text-sm">Your website stays online throughout the entire process</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">300% Speed Improvements</div>
                    <div className="text-gray-300 text-sm">Guaranteed performance boosts that drive conversions</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Enterprise Security</div>
                    <div className="text-gray-300 text-sm">Bank-level security for complete peace of mind</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Dedicated Support</div>
                    <div className="text-gray-300 text-sm">Personal account managers and 24/7 monitoring</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures your project is delivered on time, within budget, and exceeds your expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 text-center"
              >
                <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center mx-auto mb-6 text-blue-400">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-300">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about working with TapDev.
            </p>
          </motion.div>

          <TestimonialsGrid />
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Industries We <span className="gradient-text">Serve</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From e-commerce to healthcare, we've helped businesses across diverse industries achieve their digital goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { name: 'E-commerce', icon: <ShoppingCart className="h-8 w-8" /> },
              { name: 'Healthcare', icon: <Users className="h-8 w-8" /> },
              { name: 'Legal', icon: <Shield className="h-8 w-8" /> },
              { name: 'Education', icon: <Globe className="h-8 w-8" /> },
              { name: 'Finance', icon: <TrendingUp className="h-8 w-8" /> },
              { name: 'Non-Profit', icon: <Award className="h-8 w-8" /> }
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 text-center hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-4 text-blue-400">
                  {industry.icon}
                </div>
                <h3 className="font-semibold text-white">{industry.name}</h3>
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
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              {homePage.cta.title}
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
              {homePage.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to={homePage.cta.primaryButton.link}
                className="bg-white text-blue-600 px-10 py-5 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all duration-300 hover-glow flex items-center justify-center space-x-3"
              >
                <span>{homePage.cta.primaryButton.text}</span>
                <ArrowRight className="h-6 w-6" />
              </Link>
              <Link
                to={homePage.cta.secondaryButton.link}
                className="border-2 border-white text-white px-10 py-5 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <span>{homePage.cta.secondaryButton.text}</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Testimonials Grid Component
const TestimonialsGrid: React.FC = () => {
  const allTestimonials = [
    {
      name: 'Sarah Mitchell',
      company: 'E-commerce Director',
      content: 'TapDev transformed our online store completely. Sales increased by 250% within the first month after the migration. The team\'s expertise is unmatched.',
      rating: 5
    },
    {
      name: 'James Richardson',
      company: 'Managing Partner, Richardson & Associates Law',
      content: 'The new website and client portal have revolutionised our practice. We\'re attracting higher-quality leads and our clients love the convenience.',
      rating: 5
    },
    {
      name: 'Dr. Emily Watson',
      company: 'Chief Medical Officer, Regional Health Network',
      content: 'The HIPAA-compliant patient portal has transformed how we deliver healthcare. Patient satisfaction has increased by 90%.',
      rating: 5
    },
    {
      name: 'Michael Thompson',
      company: 'E-commerce Director, Fashion Forward Ltd',
      content: 'Our online store transformation was incredible. Sales increased by 280% in the first quarter and mobile conversions tripled.',
      rating: 5
    },
    {
      name: 'David Wilson',
      company: 'Operations Director, Wilson Manufacturing',
      content: 'The website migration was seamless with zero downtime. Our new site loads 400% faster and enquiries increased by 150%.',
      rating: 5
    },
    {
      name: 'Lisa Parker',
      company: 'Marketing Director, TechStart Solutions',
      content: 'The custom WordPress development exceeded expectations. User engagement increased by 200% and the platform scales beautifully.',
      rating: 5
    },
    {
      name: 'Robert Clarke',
      company: 'CEO, Clarke Financial Services',
      content: 'The security implementation gives us complete confidence. Our client data is fully protected with 100% compliance maintained.',
      rating: 5
    },
    {
      name: 'Emma Foster',
      company: 'Executive Director, Children\'s Future Charity',
      content: 'Our fundraising platform has been transformational. We\'ve raised 350% more donations this year than ever before.',
      rating: 5
    },
    {
      name: 'Andrew Martinez',
      company: 'Head of Digital, Martinez & Partners Legal',
      content: 'The website redesign and SEO optimisation transformed our online presence. We\'re now ranking #1 and leads increased 220%.',
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(allTestimonials.length / testimonialsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCurrentTestimonials = () => {
    const startIndex = currentIndex * testimonialsPerPage;
    return allTestimonials.slice(startIndex, startIndex + testimonialsPerPage);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {getCurrentTestimonials().map((testimonial, index) => (
          <motion.div
            key={`testimonial-${currentIndex}-${index}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
          >
            <div className="flex items-center mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              "{testimonial.content}"
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                {testimonial.name.split(' ').map((n: string) => n[0]).join('')}
              </div>
              <div>
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-gray-400 text-sm">{testimonial.company}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center space-x-2 mt-8">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? 'bg-blue-500'
                : 'bg-gray-600 hover:bg-gray-500'
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-gray-700/80 transition-all duration-300 border border-gray-600"
          >
            <ArrowRight className="h-5 w-5 rotate-180" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-gray-700/80 transition-all duration-300 border border-gray-600"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
      </>
    </div>
  );
};

export default HomePage;