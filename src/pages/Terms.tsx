import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, Mail, Calendar, ArrowRight } from 'lucide-react';

const Terms = () => {
  const sections = [
    {
      title: 'Acceptance of Terms',
      content: [
        'By accessing and using TapDev\'s website and services, you accept and agree to be bound by the terms and provision of this agreement.',
        'If you do not agree to abide by the above, please do not use our services.',
        'These terms apply to all visitors, users, and others who access or use our services.',
        'We reserve the right to modify these terms at any time, and such modifications shall be effective immediately upon posting.'
      ]
    },
    {
      title: 'Description of Services',
      content: [
        'TapDev provides professional web development services including WordPress development, website migrations, maintenance, speed optimisation, and security services.',
        'We offer consultation, design, development, and ongoing support services for websites and web applications.',
        'Our services are provided on a project basis or through ongoing maintenance agreements as specified in individual service agreements.',
        'We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.'
      ]
    },
    {
      title: 'Service Agreements and Payments',
      content: [
        'All projects require a signed service agreement outlining scope, timeline, and payment terms.',
        'Payment terms are specified in individual project agreements and typically require payment in full before project commencement.',
        'For ongoing services, payments are due monthly in advance unless otherwise specified.',
        'Late payments may result in suspension of services and additional fees.',
        'All prices are quoted in British Pounds (GBP) and are exclusive of VAT unless otherwise stated.',
        'Refunds are provided in accordance with our satisfaction guarantee terms outlined in individual service agreements.'
      ]
    },
    {
      title: 'Client Responsibilities',
      content: [
        'Clients must provide accurate and complete information necessary for project completion.',
        'Clients are responsible for providing content, images, and other materials in a timely manner.',
        'Clients must review and approve work at designated milestones within specified timeframes.',
        'Clients are responsible for maintaining backups of their websites and data.',
        'Clients must provide necessary access credentials and permissions for work to be completed.',
        'Delays caused by client non-compliance may result in project timeline extensions and additional costs.'
      ]
    },
    {
      title: 'Intellectual Property Rights',
      content: [
        'Upon full payment, clients receive ownership of custom code and designs created specifically for their project.',
        'TapDev retains rights to general methodologies, techniques, and know-how used in providing services.',
        'Third-party components, plugins, and frameworks remain subject to their respective licences.',
        'Clients grant TapDev the right to use project work in portfolios and marketing materials unless otherwise agreed.',
        'Clients warrant that all materials provided do not infringe on third-party intellectual property rights.',
        'TapDev will not be liable for any intellectual property infringement claims arising from client-provided materials.'
      ]
    },
    {
      title: 'Website Hosting and Maintenance',
      content: [
        'TapDev does not provide web hosting services unless specifically contracted.',
        'Clients are responsible for selecting and maintaining their hosting arrangements.',
        'Maintenance services are provided according to specific maintenance agreements.',
        'TapDev is not responsible for issues arising from hosting provider problems or limitations.',
        'Clients must ensure their hosting environment meets technical requirements for optimal performance.',
        'Emergency support outside of agreed maintenance terms may incur additional charges.'
      ]
    },
    {
      title: 'Warranties and Disclaimers',
      content: [
        'TapDev warrants that services will be performed in a professional manner consistent with industry standards.',
        'We provide a 30-day warranty on custom development work for defects in workmanship.',
        'No warranty is provided for third-party components, plugins, or hosting-related issues.',
        'Services are provided "as is" without any other warranties, express or implied.',
        'We do not warrant that services will be uninterrupted, error-free, or meet all client requirements.',
        'Clients are responsible for testing and accepting all deliverables before final deployment.'
      ]
    },
    {
      title: 'Limitation of Liability',
      content: [
        'TapDev\'s total liability for any claim shall not exceed the amount paid for the specific service giving rise to the claim.',
        'We shall not be liable for any indirect, incidental, special, or consequential damages.',
        'We are not liable for any loss of data, profits, business opportunities, or business interruption.',
        'Clients agree to indemnify TapDev against any claims arising from the use of client-provided materials.',
        'Our liability is limited to the direct costs of correcting defective work.',
        'These limitations apply regardless of the legal theory upon which the claim is based.'
      ]
    },
    {
      title: 'Confidentiality',
      content: [
        'TapDev agrees to maintain the confidentiality of all client information and data.',
        'We will not disclose client information to third parties without written consent.',
        'Confidentiality obligations survive the termination of service agreements.',
        'Clients grant permission for TapDev to access necessary systems and data to provide services.',
        'Both parties agree to use confidential information solely for the purpose of the service relationship.',
        'Standard industry practices for data security and privacy protection are maintained at all times.'
      ]
    },
    {
      title: 'Termination',
      content: [
        'Either party may terminate service agreements with written notice as specified in individual agreements.',
        'TapDev reserves the right to terminate services immediately for non-payment or breach of terms.',
        'Upon termination, clients will receive all completed work and source files upon full payment.',
        'Ongoing service obligations cease upon termination, and no refunds are provided for unused portions.',
        'Confidentiality and intellectual property provisions survive termination.',
        'Termination does not relieve either party of obligations incurred prior to termination.'
      ]
    },
    {
      title: 'Force Majeure',
      content: [
        'Neither party shall be liable for delays or failures due to circumstances beyond their reasonable control.',
        'Force majeure events include natural disasters, government actions, internet outages, and other unforeseeable events.',
        'The affected party must notify the other party promptly of any force majeure event.',
        'Performance obligations are suspended during force majeure events but resume when conditions permit.',
        'If force majeure events continue for more than 30 days, either party may terminate the agreement.',
        'No compensation is due for delays caused by force majeure events.'
      ]
    },
    {
      title: 'Governing Law and Disputes',
      content: [
        'These terms are governed by the laws of England and Wales.',
        'Any disputes shall be resolved through good faith negotiation first.',
        'If negotiation fails, disputes shall be resolved through binding arbitration or UK courts.',
        'The prevailing party in any dispute may recover reasonable legal fees and costs.',
        'These terms constitute the entire agreement between the parties regarding the subject matter.',
        'Any modifications must be in writing and signed by both parties.'
      ]
    }
  ];

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-700/20"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-600/20 rounded-2xl mb-8">
              <FileText className="h-10 w-10 text-purple-400" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Terms of <span className="gradient-text">Service</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              These terms and conditions govern your use of our website and services. Please read them carefully.
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
                  Welcome to TapDev. These Terms of Service ("Terms") govern your use of our website and services. 
                  By accessing our website or engaging our services, you agree to be bound by these Terms.
                </p>
                <p>
                  These Terms apply to all users of our website and clients of our services, including without limitation 
                  users who are browsers, vendors, customers, merchants, and contributors of content.
                </p>
                <p>
                  Please read these Terms carefully before accessing or using our website or services. 
                  If you do not agree with any part of these Terms, then you may not access our website or use our services.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Terms Sections */}
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
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-purple-400" />
                  <span>Email: legal@tapdev.co.uk</span>
                </div>
                <p>
                  For general enquiries about our services, please use our main contact form or email hello@tapdev.co.uk.
                </p>
                <p>
                  We will respond to all enquiries within 2 business days. For urgent matters, 
                  please mark your communication as "Urgent" in the subject line.
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
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 text-center group"
              >
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  Privacy Policy
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Learn how we collect, use, and protect your personal information
                </p>
                <div className="flex items-center justify-center text-purple-400 group-hover:text-purple-300">
                  <span className="mr-2">Read Policy</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>

              <Link
                to="/cookies"
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 text-center group"
              >
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  Cookie Policy
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Information about cookies and tracking technologies we use
                </p>
                <div className="flex items-center justify-center text-purple-400 group-hover:text-purple-300">
                  <span className="mr-2">Cookie Policy</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>

              <Link
                to="/contact"
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 text-center group"
              >
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  Contact Us
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Get in touch with questions about our terms or services
                </p>
                <div className="flex items-center justify-center text-purple-400 group-hover:text-purple-300">
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

export default Terms;