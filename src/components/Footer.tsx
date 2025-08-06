import React from 'react';
import { Link } from 'react-router-dom';
import { useSupabaseData } from '../hooks/useSupabaseData';
import { Code, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { homePage } = useSupabaseData();
  const { subscribeNewsletter } = useSupabaseData();

  const socialIcons = {
    Facebook,
    Twitter,
    LinkedIn: Linkedin,
    Instagram,
    YouTube: Youtube
  };

  const enabledSocialLinks = homePage?.social_links?.filter((link: any) => link.enabled) || [];

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border-b border-gray-800">
        <div className="container-custom py-16">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Web Development Insights
            </h3>
            <p className="text-gray-400 mb-8">
              Get the latest tips, trends, and exclusive offers delivered to your inbox monthly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                id="newsletter-email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
              />
              <button 
                onClick={() => {
                  const email = (document.getElementById('newsletter-email') as HTMLInputElement)?.value;
                  if (!email) {
                    alert('Please enter your email address');
                    return;
                  }
                  
                  subscribeNewsletter(email)
                    .then(() => {
                      alert('Successfully subscribed to newsletter!');
                      (document.getElementById('newsletter-email') as HTMLInputElement).value = '';
                    })
                    .catch((error) => {
                      if (error.code === '23505') {
                        alert('Email already subscribed to newsletter!');
                      } else {
                        alert('Error subscribing to newsletter. Please try again.');
                      }
                    });
                }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover-glow flex items-center justify-center space-x-2"
              >
                <span>Subscribe</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <Code className="h-10 w-10 text-blue-400" />
                <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl"></div>
              </div>
              <div>
                <span className="text-3xl font-bold gradient-text">TapDev</span>
                <div className="text-xs text-gray-400 -mt-1">Professional Web Solutions</div>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              We're a team of passionate web developers and digital strategists dedicated to helping British businesses thrive online. From custom WordPress development to comprehensive website migrations, we deliver solutions that drive real results.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="h-5 w-5 text-blue-400" />
                <span>hello@tapdev.co.uk</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {enabledSocialLinks.map((social) => {
                const Icon = socialIcons[social.platform as keyof typeof socialIcons];
                if (!Icon) return null;
                return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300 hover-glow"
                  aria-label={social.platform}
                >
                  <Icon className="h-5 w-5" />
                </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                { name: 'Website Development', path: '/services/website-development' },
                { name: 'Website Migrations', path: '/services/website-migrations' },
                { name: 'WordPress Development', path: '/services/wordpress-development' },
                { name: 'Website Maintenance', path: '/services/website-maintenance' },
                { name: 'Speed Optimisation', path: '/services/speed-optimization' },
                { name: 'Security Services', path: '/services/security-services' },
                { name: 'Managed Hosting', path: '/services/managed-website-hosting' }
              ].map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'All Services', path: '/services' },
                { name: 'About Us', path: '/about' },
                { name: 'Portfolio', path: '/portfolio' },
                { name: 'Blog', path: '/blog' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} TapDev. All rights reserved. Professional web development services.
            </div>
            <div className="flex flex-wrap justify-center lg:justify-end space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors duration-300">
                Cookie Policy
              </Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-white transition-colors duration-300">
                Sitemap
              </Link>
              <Link to="/admin" className="text-gray-400 hover:text-white transition-colors duration-300">
                Admin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;