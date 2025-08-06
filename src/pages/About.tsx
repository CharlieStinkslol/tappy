import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  Target, 
  Heart, 
  Code, 
  Zap, 
  Shield, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  TrendingUp
} from 'lucide-react';

const About = () => {
  const stats = [
    { number: '500+', label: 'Websites Delivered', icon: <Globe className="h-6 w-6" /> },
    { number: '10+', label: 'Years Experience', icon: <Clock className="h-6 w-6" /> },
    { number: '100%', label: 'Client Satisfaction', icon: <Star className="h-6 w-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Shield className="h-6 w-6" /> }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-blue-500" />,
      title: 'Results-Driven',
      description: 'We focus on delivering measurable results that drive your business forward and exceed your expectations.'
    },
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: 'Client-Focused',
      description: 'Your success is our success. We build long-term partnerships based on trust, transparency, and exceptional service.'
    },
    {
      icon: <Code className="h-8 w-8 text-green-500" />,
      title: 'Technical Excellence',
      description: 'We use cutting-edge technologies and best practices to create websites that are fast, secure, and scalable.'
    },
    {
      icon: <Zap className="h-8 w-8 text-orange-500" />,
      title: 'Innovation',
      description: 'We stay ahead of industry trends and continuously improve our processes to deliver the best possible solutions.'
    }
  ];

  const team = [
    {
      name: 'James Mitchell',
      role: 'Founder & Lead Developer',
      bio: 'With over 10 years of experience in web development, James specialises in WordPress and performance optimisation.',
      skills: ['WordPress Development', 'Performance Optimisation', 'Technical Architecture']
    },
    {
      name: 'Sarah Thompson',
      role: 'Senior Developer',
      bio: 'Sarah brings expertise in modern web technologies and has a passion for creating beautiful, functional websites.',
      skills: ['Frontend Development', 'UI/UX Design', 'React & Vue.js']
    },
    {
      name: 'Michael Chen',
      role: 'Security Specialist',
      bio: 'Michael ensures all our websites are secure and protected against the latest threats and vulnerabilities.',
      skills: ['Website Security', 'Penetration Testing', 'Compliance']
    }
  ];

  const timeline = [
    {
      year: '2014',
      title: 'Company Founded',
      description: 'Started as a freelance web development service with a focus on WordPress websites.'
    },
    {
      year: '2016',
      title: 'Team Expansion',
      description: 'Grew to a team of 3 developers and launched our first enterprise-level projects.'
    },
    {
      year: '2018',
      title: 'Security Focus',
      description: 'Added comprehensive security services after seeing the growing need for website protection.'
    },
    {
      year: '2020',
      title: 'Performance Specialisation',
      description: 'Developed advanced speed optimisation techniques, achieving 300% improvements for clients.'
    },
    {
      year: '2022',
      title: 'Migration Expertise',
      description: 'Became specialists in complex website migrations with zero downtime guarantees.'
    },
    {
      year: '2024',
      title: 'Industry Recognition',
      description: 'Recognised as a leading WordPress development agency with 500+ successful projects.'
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
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              About <span className="gradient-text">TapDev</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              We're a team of passionate web developers and digital strategists dedicated to helping businesses 
              thrive online with exceptional WordPress solutions and comprehensive web services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/20 rounded-xl mb-4 text-blue-400">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
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
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  TapDev was founded in 2014 with a simple mission: to help businesses succeed online through 
                  exceptional web development and digital solutions. What started as a one-person freelance 
                  operation has grown into a trusted team of specialists.
                </p>
                <p>
                  Over the years, we've evolved our services to meet the changing needs of our clients. From 
                  basic WordPress websites to complex e-commerce platforms, security services, and performance 
                  optimisation, we've consistently delivered results that exceed expectations.
                </p>
                <p>
                  Today, we're proud to have helped over 500 businesses transform their online presence, 
                  with a 100% client satisfaction rate and a reputation for technical excellence and 
                  outstanding customer service.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
            >
              <h3 className="text-2xl font-bold mb-6">Why Choose TapDev?</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-white">Proven Track Record:</strong>
                    <span className="text-gray-300 ml-2">500+ successful projects with 100% client satisfaction</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-white">Expert Team:</strong>
                    <span className="text-gray-300 ml-2">Specialists in WordPress, security, and performance</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-white">Comprehensive Support:</strong>
                    <span className="text-gray-300 ml-2">24/7 monitoring and ongoing maintenance services</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-white">Results-Focused:</strong>
                    <span className="text-gray-300 ml-2">We measure success by your business growth</span>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we work with our clients and each other.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
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
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-300">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our experienced team of developers, designers, and specialists work together to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-400 mb-4 font-medium">
                  {member.role}
                </p>
                <p className="text-gray-300 mb-6">
                  {member.bio}
                </p>
                <div className="space-y-2">
                  {member.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-block bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From humble beginnings to industry recognition, here's how we've grown and evolved over the years.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                    <div className="text-blue-400 font-bold text-lg mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full relative">
                  <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-75"></div>
                </div>
                <div className="flex-1"></div>
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
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join hundreds of satisfied clients who have transformed their online presence with our expert web development services.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 hover-glow flex items-center justify-center space-x-2"
              >
                <span>Start Your Project</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Get Free Consultation</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;