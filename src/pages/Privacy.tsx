import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Mail, Calendar, ArrowRight } from 'lucide-react';

const Privacy = () => {
  const sections = [
    {
      title: 'Information We Collect',
      content: [
        'Personal Information: When you contact us or request our services, we may collect personal information such as your name, email address, phone number, and company details.',
        'Website Usage Data: We collect information about how you use our website, including pages visited, time spent on pages, and referral sources.',
        'Technical Information: We may collect technical information such as your IP address, browser type, device information, and operating system.',
        'Cookies and Tracking: We use cookies and similar technologies to enhance your browsing experience and analyse website performance.'
      ]
    },
    {
      title: 'How We Use Your Information',
      content: [
        'Service Delivery: To provide, maintain, and improve our web development services and respond to your enquiries.',
        'Communication: To communicate with you about our services, send updates, and respond to your requests.',
        'Website Improvement: To analyse website usage and improve our website\'s functionality and user experience.',
        'Legal Compliance: To comply with legal obligations and protect our rights and interests.',
        'Marketing: With your consent, to send you marketing communications about our services and industry insights.'
      ]
    },
    {
      title: 'Information Sharing and Disclosure',
      content: [
        'We do not sell, trade, or rent your personal information to third parties.',
        'We may share your information with trusted service providers who assist us in operating our website and conducting our business.',
        'We may disclose your information if required by law or to protect our rights, property, or safety.',
        'In the event of a business transfer, your information may be transferred as part of the transaction.'
      ]
    },
    {
      title: 'Data Security',
      content: [
        'We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction.',
        'We use SSL encryption to protect data transmitted between your browser and our servers.',
        'Access to personal information is restricted to authorised personnel who need it to perform their job functions.',
        'We regularly review and update our security practices to ensure the ongoing protection of your data.'
      ]
    },
    {
      title: 'Your Rights',
      content: [
        'Access: You have the right to request access to the personal information we hold about you.',
        'Correction: You can request that we correct any inaccurate or incomplete personal information.',
        'Deletion: You may request that we delete your personal information, subject to certain legal obligations.',
        'Portability: You have the right to request a copy of your personal information in a structured, machine-readable format.',
        'Objection: You can object to the processing of your personal information for marketing purposes.',
        'Withdrawal of Consent: You can withdraw your consent to processing at any time where we rely on consent.'
      ]
    },
    {
      title: 'Cookies and Tracking Technologies',
      content: [
        'Essential Cookies: These are necessary for the website to function properly and cannot be disabled.',
        'Analytics Cookies: We use these to understand how visitors interact with our website and improve its performance.',
        'Marketing Cookies: These help us deliver relevant advertisements and measure their effectiveness.',
        'You can control cookie settings through your browser preferences, but disabling certain cookies may affect website functionality.'
      ]
    },
    {
      title: 'Data Retention',
      content: [
        'We retain personal information for as long as necessary to fulfil the purposes for which it was collected.',
        'Client project data is typically retained for 7 years after project completion for legal and business purposes.',
        'Marketing communications data is retained until you unsubscribe or request deletion.',
        'Website analytics data is retained for 26 months to analyse trends and improve our services.'
      ]
    },
    {
      title: 'International Data Transfers',
      content: [
        'Your personal information may be transferred to and processed in countries outside the UK/EU.',
        'We ensure appropriate safeguards are in place when transferring data internationally.',
        'We only transfer data to countries with adequate data protection laws or under appropriate contractual protections.'
      ]
    },
    {
      title: 'Children\'s Privacy',
      content: [
        'Our services are not directed to children under 16 years of age.',
        'We do not knowingly collect personal information from children under 16.',
        'If we become aware that we have collected personal information from a child under 16, we will take steps to delete such information.'
      ]
    },
    {
      title: 'Changes to This Privacy Policy',
      content: [
        'We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements.',
        'We will notify you of any material changes by posting the updated policy on our website.',
        'The "Last Updated" date at the top of this policy indicates when it was last revised.',
        'Your continued use of our services after any changes constitutes acceptance of the updated policy.'
      ]
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600/20 rounded-2xl mb-8">
              <Shield className="h-10 w-10 text-blue-400" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
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
              <h2 className="text-2xl font-bold text-white mb-6">Introduction</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  TapDev ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
                  or use our services.
                </p>
                <p>
                  By accessing our website or using our services, you agree to the collection and use of information in accordance with this policy. 
                  If you do not agree with our policies and practices, please do not use our services.
                </p>
                <p>
                  This policy applies to information we collect on our website, through email, text, and other electronic communications, 
                  and when you interact with our advertising and applications on third-party websites and services.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
              >
                <h2 className="text-2xl font-bold text-white mb-6">
                  {index + 1}. {section.title}
                </h2>
                <div className="space-y-4">
                  {section.content.map((paragraph, paragraphIndex) => (
                    <p key={paragraphIndex} className="text-gray-300 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
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
              <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  If you have any questions about this Privacy Policy, your personal information, or our privacy practices, 
                  please contact us using the information below:
                </p>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span>Email: privacy@tapdev.co.uk</span>
                </div>
                <p>
                  We will respond to your enquiry within 30 days of receipt. For urgent privacy concerns, 
                  please mark your communication as "Urgent Privacy Matter."
                </p>
                <p>
                  You also have the right to lodge a complaint with the Information Commissioner's Office (ICO) 
                  if you believe we have not handled your personal information appropriately.
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
                to="/terms"
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 text-center group"
              >
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  Terms of Service
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Read our terms and conditions for using our services
                </p>
                <div className="flex items-center justify-center text-blue-400 group-hover:text-blue-300">
                  <span className="mr-2">Read Terms</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>

              <Link
                to="/cookies"
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 text-center group"
              >
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  Cookie Policy
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Learn about how we use cookies and tracking technologies
                </p>
                <div className="flex items-center justify-center text-blue-400 group-hover:text-blue-300">
                  <span className="mr-2">Cookie Policy</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>

              <Link
                to="/contact"
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 text-center group"
              >
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  Contact Us
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Get in touch with any questions or concerns
                </p>
                <div className="flex items-center justify-center text-blue-400 group-hover:text-blue-300">
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

export default Privacy;