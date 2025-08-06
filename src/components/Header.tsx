import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code, ChevronDown, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const servicesRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const services = [
    { name: 'Website Development', path: '/services/website-development', description: 'Custom websites built for your business' },
    { name: 'Website Migrations', path: '/services/website-migrations', description: 'Seamless site transfers with zero downtime' },
    { name: 'Website Maintenance', path: '/services/website-maintenance', description: '24/7 monitoring and updates' },
    { name: 'Speed Optimisation', path: '/services/speed-optimization', description: 'Boost performance by 300%' },
    { name: 'Security Services', path: '/services/security-services', description: 'Advanced protection & monitoring' },
    { name: 'Managed Hosting', path: '/services/managed-website-hosting', description: 'UK servers with expert support' },
    { name: 'Website Audits', path: '/services/website-audits', description: 'Comprehensive site analysis' },
    { name: 'E-commerce Development', path: '/services/ecommerce-development', description: 'Powerful online stores' },
    { name: 'Local SEO', path: '/services/local-seo', description: 'Dominate local search results' }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node) &&
          dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    if (isServicesOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isServicesOpen]);

  return (
    <header className="bg-gray-900/95 backdrop-blur-lg border-b border-gray-800 sticky top-0 z-50">
      <nav className="container-custom">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Code className="h-10 w-10 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
              <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl group-hover:bg-blue-300/30 transition-all duration-300"></div>
            </div>
            <div>
              <span className="text-3xl font-bold gradient-text">TapDev</span>
              <div className="text-xs text-gray-400 -mt-1">Professional Web Solutions</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div 
              className="relative"
              ref={servicesRef}
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={(e) => {
                // Only close if not moving to dropdown
                const rect = dropdownRef.current?.getBoundingClientRect();
                if (!rect || e.clientY < rect.top - 10) {
                  setTimeout(() => setIsServicesOpen(false), 100);
                }
              }}
            >
              <button 
                className="flex items-center space-x-1 font-medium text-gray-300 hover:text-blue-400 transition-all duration-300"
              >
                <span>Services</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div 
                  ref={dropdownRef}
                  className="absolute top-full left-0 mt-1 w-80 bg-gray-900/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-600 py-4 z-50"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setTimeout(() => setIsServicesOpen(false), 100)}
                >
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block px-6 py-3 hover:bg-gray-800/80 transition-all duration-300 group"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <div className="font-medium text-white group-hover:text-blue-400 transition-colors duration-300">
                        {service.name}
                      </div>
                      <div className="text-sm text-gray-300 mt-1 group-hover:text-gray-200">
                        {service.description}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              to="/contact" 
              className="font-medium text-gray-300 hover:text-blue-400 transition-all duration-300"
            >
              Contact
            </Link>
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover-glow"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-gray-900/98 backdrop-blur-lg border-t border-gray-800 shadow-2xl">
            <div className="p-6">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="font-semibold text-white text-lg">Our Services</span>
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block bg-gray-800/50 rounded-lg p-4 border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-800/70 transition-all duration-300 group"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="font-medium text-white group-hover:text-blue-400 transition-colors duration-300 mb-1">
                          {service.name}
                        </div>
                        <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          {service.description}
                        </div>
                      </Link>
                    ))}
                    <Link
                      to="/services"
                      className="block bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-4 border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 group mt-4"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="font-medium text-blue-400 group-hover:text-blue-300 transition-colors duration-300 mb-1">
                        View All Services
                      </div>
                      <div className="text-sm text-blue-300/80 group-hover:text-blue-200 transition-colors duration-300">
                        Explore our complete service portfolio
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="border-t border-gray-800 pt-6">
                  <div className="grid grid-cols-1 gap-3">
                    <Link 
                      to="/contact" 
                      className="block bg-gray-800/50 rounded-lg p-4 border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-800/70 transition-all duration-300 group"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="font-medium text-white group-hover:text-blue-400 transition-colors duration-300 mb-1">
                        Contact Us
                      </div>
                      <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        Get in touch for your project
                      </div>
                    </Link>
                    <Link
                      to="/contact"
                      className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-4 font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="font-semibold mb-1">Get Started Today</div>
                      <div className="text-sm text-blue-100">Free consultation & quote</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;