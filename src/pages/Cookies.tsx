import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Cookie, Settings, Calendar, ArrowRight, CheckCircle, X } from 'lucide-react';

const Cookies = () => {
  const [cookieSettings, setCookieSettings] = useState({
    essential: true,
    analytics: true,
    marketing: false,
    preferences: true
  });

  const cookieTypes = [
    {
      name: 'Essential Cookies',
      key: 'essential',
      description: 'These cookies are necessary for the website to function and cannot be switched off in our systems.',
      examples: ['Session management', 'Security tokens', 'Load balancing'],
      required: true
    },
    {
      name: 'Analytics Cookies',
      key: 'analytics',
      description: 'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.',
      examples: ['Google Analytics', 'Page views', 'User behaviour'],
      required: false
    },
    {
      name: 'Marketing Cookies',
      key: 'marketing',
      description: 'These cookies may be set through our site by our advertising partners to build a profile of your interests.',
      examples: ['Ad targeting', 'Social media pixels', 'Conversion tracking'],
      required: false
    },
    {
      name: 'Preference Cookies',
      key: 'preferences',
      description: 'These cookies enable the website to provide enhanced functionality and personalisation.',
      examples: ['Language settings', 'Theme preferences', 'Form data'],
      required: false
    }
  ];

  const specificCookies = [
    {
      name: '_ga',
      purpose: 'Google Analytics - Distinguishes unique users',
      duration: '2 years',
      type: 'Analytics'
    },
    {
      name: '_gid',
      purpose: 'Google Analytics - Distinguishes unique users',
      duration: '24 hours',
      type: 'Analytics'
    },
    {
      name: 'session_id',
      purpose: 'Maintains user session state',
      duration: 'Session',
      type: 'Essential'
    },
    {
      name: 'csrf_token',
      purpose: 'Security protection against cross-site request forgery',
      duration: 'Session',
      type: 'Essential'
    },
    {
      name: 'cookie_consent',
      purpose: 'Stores user cookie preferences',
      duration: '1 year',
      type: 'Preference'
    },
    {
      name: 'theme_preference',
      purpose: 'Remembers user theme selection',
      duration: '1 year',
      type: 'Preference'
    }
  ];

  const handleCookieToggle = (key) => {
    if (key === 'essential') return; // Essential cookies cannot be disabled
    setCookieSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const savePreferences = () => {
    // In a real implementation, this would save to localStorage and update actual cookie settings
    alert('Cookie preferences saved successfully!');
  };

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-yellow-600/20 to-red-700/20"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-600/20 rounded-2xl mb-8">
              <Cookie className="h-10 w-10 text-orange-400" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Cookie <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Learn about how we use cookies and similar technologies to improve your browsing experience and analyse website performance.
            </p>
            <div className="flex items-center justify-center space-x-2 text-gray-400">
              <Calendar className="h-5 w-5" />
              <span>Last updated: January 2024</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-gray-800/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
            >
              <h2 className="text-2xl font-bold text-white mb-6">What Are Cookies?</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
                  They are widely used to make websites work more efficiently and provide information to website owners.
                </p>
                <p>
                  We use cookies to enhance your browsing experience, analyse site traffic, personalise content, 
                  and provide social media features. This policy explains what cookies we use and why.
                </p>
                <p>
                  By continuing to use our website, you consent to our use of cookies in accordance with this policy. 
                  You can manage your cookie preferences using the settings panel below.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cookie Settings Panel */}
      <section className="py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 mb-12"
            >
              <div className="flex items-center space-x-3 mb-6">
                <Settings className="h-6 w-6 text-orange-400" />
                <h2 className="text-2xl font-bold text-white">Cookie Preferences</h2>
              </div>
              <p className="text-gray-300 mb-8">
                Manage your cookie preferences below. Essential cookies cannot be disabled as they are necessary for the website to function properly.
              </p>

              <div className="space-y-6">
                {cookieTypes.map((cookie, index) => (
                  <div key={index} className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/50">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-white">{cookie.name}</h3>
                      <div className="flex items-center space-x-3">
                        {cookie.required && (
                          <span className="text-xs bg-red-600/20 text-red-400 px-2 py-1 rounded-full">
                            Required
                          </span>
                        )}
                        <button
                          onClick={() => handleCookieToggle(cookie.key)}
                          disabled={cookie.required}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
                            cookieSettings[cookie.key] 
                              ? 'bg-orange-600' 
                              : 'bg-gray-600'
                          } ${cookie.required ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                              cookieSettings[cookie.key] ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{cookie.description}</p>
                    <div>
                      <h4 className="text-sm font-medium text-white mb-2">Examples:</h4>
                      <div className="flex flex-wrap gap-2">
                        {cookie.examples.map((example, exampleIndex) => (
                          <span
                            key={exampleIndex}
                            className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded"
                          >
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex justify-center">
                <button
                  onClick={savePreferences}
                  className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 hover-glow flex items-center space-x-2"
                >
                  <CheckCircle className="h-5 w-5" />
                  <span>Save Preferences</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specific Cookies Table */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Specific Cookies We Use
              </h2>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50">
                <div className="grid grid-cols-4 gap-0 bg-gray-800/70 p-4 font-semibold text-white text-sm">
                  <div>Cookie Name</div>
                  <div>Purpose</div>
                  <div>Duration</div>
                  <div>Type</div>
                </div>
                {specificCookies.map((cookie, index) => (
                  <div key={index} className="grid grid-cols-4 gap-0 p-4 border-t border-gray-700">
                    <div className="font-mono text-orange-400 text-sm">{cookie.name}</div>
                    <div className="text-gray-300 text-sm">{cookie.purpose}</div>
                    <div className="text-gray-300 text-sm">{cookie.duration}</div>
                    <div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        cookie.type === 'Essential' ? 'bg-red-600/20 text-red-400' :
                        cookie.type === 'Analytics' ? 'bg-blue-600/20 text-blue-400' :
                        cookie.type === 'Preference' ? 'bg-green-600/20 text-green-400' :
                        'bg-purple-600/20 text-purple-400'
                      }`}>
                        {cookie.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Managing Cookies */}
      <section className="py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Managing Cookies in Your Browser</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  You can control and manage cookies in various ways. Please note that removing or blocking cookies 
                  may impact your user experience and parts of our website may no longer be fully accessible.
                </p>
                <p>
                  Most web browsers allow you to control cookies through their settings preferences. 
                  Here are links to cookie management for popular browsers:
                </p>
                <ul className="space-y-2 ml-6">
                  <li>• <strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                  <li>• <strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
                  <li>• <strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                  <li>• <strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Third-Party Cookies</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Some cookies on our website are set by third-party services. We have no control over these cookies 
                  and they are subject to the respective privacy policies of these services.
                </p>
                <p>Third-party services we use include:</p>
                <ul className="space-y-2 ml-6">
                  <li>• <strong>Google Analytics:</strong> For website analytics and performance measurement</li>
                  <li>• <strong>Google Fonts:</strong> For web font delivery</li>
                  <li>• <strong>Social Media Platforms:</strong> For social sharing functionality</li>
                </ul>
                <p>
                  You can opt out of Google Analytics by installing the Google Analytics Opt-out Browser Add-on 
                  or by adjusting your cookie preferences above.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Updates to This Policy</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  We may update this Cookie Policy from time to time to reflect changes in our practices 
                  or for other operational, legal, or regulatory reasons.
                </p>
                <p>
                  We will notify you of any material changes by posting the updated policy on our website 
                  and updating the "Last Updated" date at the top of this policy.
                </p>
                <p>
                  We encourage you to review this policy periodically to stay informed about how we use cookies.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Questions About Cookies?</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                </p>
                <div className="flex items-center space-x-3">
                  <Cookie className="h-5 w-5 text-orange-400" />
                  <span>Email: cookies@tapdev.co.uk</span>
                </div>
                <p>
                  For general enquiries, you can also contact us through our main contact form or email hello@tapdev.co.uk.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Related Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                to="/privacy"
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 text-center group"
              >
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                  Privacy Policy
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Learn about our data collection and privacy practices
                </p>
                <div className="flex items-center justify-center text-orange-400 group-hover:text-orange-300">
                  <span className="mr-2">Read Policy</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>

              <Link
                to="/terms"
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 text-center group"
              >
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                  Terms of Service
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Review our terms and conditions for using our services
                </p>
                <div className="flex items-center justify-center text-orange-400 group-hover:text-orange-300">
                  <span className="mr-2">Read Terms</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>

              <Link
                to="/contact"
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 text-center group"
              >
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                  Contact Us
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Get in touch with questions about cookies or privacy
                </p>
                <div className="flex items-center justify-center text-orange-400 group-hover:text-orange-300">
                  <span className="mr-2">Contact</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cookies;