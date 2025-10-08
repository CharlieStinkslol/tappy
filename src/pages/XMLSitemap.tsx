import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, Calendar, ArrowRight, Download, Search, CheckCircle } from 'lucide-react';

const XMLSitemap = () => {
  const [lastModified, setLastModified] = useState(new Date().toISOString());

  // All pages for the sitemap
  const sitemapPages = [
    // Main pages
    { url: '/', priority: '1.0', changefreq: 'weekly', lastmod: lastModified },
    { url: '/contact', priority: '0.9', changefreq: 'monthly', lastmod: lastModified },
    { url: '/about', priority: '0.8', changefreq: 'monthly', lastmod: lastModified },
    { url: '/portfolio', priority: '0.8', changefreq: 'weekly', lastmod: lastModified },
    { url: '/case-studies', priority: '0.8', changefreq: 'weekly', lastmod: lastModified },
    { url: '/blog', priority: '0.9', changefreq: 'daily', lastmod: lastModified },
    
    // Services
    { url: '/services/website-migrations', priority: '0.9', changefreq: 'monthly', lastmod: lastModified },
    { url: '/services/wordpress-development', priority: '0.9', changefreq: 'monthly', lastmod: lastModified },
    { url: '/services/website-maintenance', priority: '0.9', changefreq: 'monthly', lastmod: lastModified },
    { url: '/services/speed-optimization', priority: '0.9', changefreq: 'monthly', lastmod: lastModified },
    { url: '/services/security-services', priority: '0.9', changefreq: 'monthly', lastmod: lastModified },
    
    // New landing pages
    { url: '/services/wordpress-hosting', priority: '0.8', changefreq: 'monthly', lastmod: lastModified },
    { url: '/services/website-redesign', priority: '0.8', changefreq: 'monthly', lastmod: lastModified },
    { url: '/services/ecommerce-development', priority: '0.8', changefreq: 'monthly', lastmod: lastModified },
    { url: '/services/local-seo', priority: '0.8', changefreq: 'monthly', lastmod: lastModified },
    { url: '/services/website-audits', priority: '0.8', changefreq: 'monthly', lastmod: lastModified },
    { url: '/services/wordpress-consultancy', priority: '0.8', changefreq: 'monthly', lastmod: lastModified },
    { url: '/services/wordpress-migration-services', priority: '0.8', changefreq: 'monthly', lastmod: lastModified },
    { url: '/services/wordpress-support', priority: '0.8', changefreq: 'monthly', lastmod: lastModified },
    { url: '/services/wordpress-training', priority: '0.8', changefreq: 'monthly', lastmod: lastModified },
    { url: '/services/website-accessibility', priority: '0.8', changefreq: 'monthly', lastmod: lastModified },
    { url: '/services/wordpress-backup-services', priority: '0.8', changefreq: 'monthly', lastmod: lastModified },
    { url: '/services/website-development', priority: '0.9', changefreq: 'monthly', lastmod: lastModified },
    { url: '/services/managed-website-hosting', priority: '0.8', changefreq: 'monthly', lastmod: lastModified },
    { url: '/services', priority: '0.9', changefreq: 'monthly', lastmod: lastModified },
    
    // Blog posts
    { url: '/blog/wordpress-security-best-practices-uk-businesses-2024', priority: '0.7', changefreq: 'monthly', lastmod: lastModified },
    { url: '/blog/improve-website-speed-complete-uk-business-guide', priority: '0.7', changefreq: 'monthly', lastmod: lastModified },
    { url: '/blog/wordpress-vs-wix-vs-squarespace-uk-business-platform-comparison-2024', priority: '0.7', changefreq: 'monthly', lastmod: lastModified },
    { url: '/blog/local-seo-uk-businesses-complete-guide-2024', priority: '0.7', changefreq: 'monthly', lastmod: lastModified },
    { url: '/blog/gdpr-compliance-uk-websites-complete-guide', priority: '0.7', changefreq: 'monthly', lastmod: lastModified },
    { url: '/blog/wordpress-maintenance-importance-uk-businesses', priority: '0.7', changefreq: 'monthly', lastmod: lastModified },
    { url: '/blog/website-migration-guide-preserve-seo-traffic', priority: '0.7', changefreq: 'monthly', lastmod: lastModified },
    { url: '/blog/ecommerce-website-design-conversion-optimisation', priority: '0.7', changefreq: 'monthly', lastmod: lastModified },
    { url: '/blog/wordpress-plugin-security-safe-selection-guide', priority: '0.7', changefreq: 'monthly', lastmod: lastModified },
    { url: '/blog/web-hosting-comparison-shared-vps-managed-uk', priority: '0.7', changefreq: 'monthly', lastmod: lastModified },
    { url: '/blog/core-web-vitals-google-ranking-factors-guide', priority: '0.7', changefreq: 'monthly', lastmod: lastModified },
    { url: '/blog/woocommerce-vs-shopify-uk-ecommerce-comparison', priority: '0.7', changefreq: 'monthly', lastmod: lastModified },
    { url: '/blog/wordpress-theme-selection-uk-business-guide', priority: '0.7', changefreq: 'monthly', lastmod: lastModified },
    { url: '/blog/mobile-first-design-uk-market-2024', priority: '0.7', changefreq: 'monthly', lastmod: lastModified },
    { url: '/blog/content-marketing-wordpress-uk-businesses', priority: '0.7', changefreq: 'monthly', lastmod: lastModified },
    { url: '/blog/google-analytics-4-setup-small-businesses-uk', priority: '0.7', changefreq: 'monthly', lastmod: lastModified },
    { url: '/blog/wordpress-backup-best-practices-uk-businesses', priority: '0.7', changefreq: 'monthly', lastmod: lastModified },
    { url: '/blog/website-accessibility-uk-legal-requirements-wcag', priority: '0.7', changefreq: 'monthly', lastmod: lastModified },
    { url: '/blog/website-redesign-guide-uk-businesses-2024', priority: '0.7', changefreq: 'monthly', lastmod: lastModified },
    { url: '/blog/wordpress-vs-custom-development-uk-business-guide', priority: '0.7', changefreq: 'monthly', lastmod: lastModified },
    
    // Legal pages
    { url: '/privacy', priority: '0.3', changefreq: 'yearly', lastmod: lastModified },
    { url: '/terms', priority: '0.3', changefreq: 'yearly', lastmod: lastModified },
    { url: '/cookies', priority: '0.3', changefreq: 'yearly', lastmod: lastModified },
    { url: '/sitemap', priority: '0.5', changefreq: 'monthly', lastmod: lastModified },
    
    // Blog management (admin only)
    { url: '/blog-management', priority: '0.1', changefreq: 'never', lastmod: lastModified },
    { url: '/admin', priority: '0.1', changefreq: 'never', lastmod: lastModified }
  ];

  const generateXMLSitemap = () => {
    const baseUrl = window.location.origin;

    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n`;
    xml += `        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n`;
    xml += `        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9\n`;
    xml += `        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n`;

    const publicPages = sitemapPages.filter(page =>
      !page.url.includes('/admin') &&
      !page.url.includes('/blog-management')
    );

    publicPages.forEach(page => {
      xml += `  <url>\n`;
      xml += `    <loc>${baseUrl}${page.url}</loc>\n`;
      xml += `    <lastmod>${page.lastmod}</lastmod>\n`;
      xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
      xml += `    <priority>${page.priority}</priority>\n`;
      xml += `  </url>\n`;
    });

    xml += `</urlset>`;

    return xml;
  };

  const downloadSitemap = () => {
    const xml = generateXMLSitemap();
    const blob = new Blob([xml], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sitemap.xml';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const publicPages = sitemapPages.filter(page =>
    !page.url.includes('/admin') &&
    !page.url.includes('/blog-management')
  );

  const sitemapStats = [
    { label: 'Total Pages', value: publicPages.length },
    { label: 'Service Pages', value: publicPages.filter(p => p.url.startsWith('/services')).length },
    { label: 'High Priority', value: publicPages.filter(p => parseFloat(p.priority) >= 0.8).length },
    { label: 'Last Updated', value: new Date().toLocaleDateString() }
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header */}
      <section className="py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-600/20 rounded-2xl mb-8">
              <Globe className="h-10 w-10 text-green-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              XML <span className="gradient-text">Sitemap</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Complete XML sitemap for search engine crawling and indexing optimisation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={downloadSitemap}
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 hover-glow flex items-center justify-center space-x-2"
              >
                <Download className="h-5 w-5" />
                <span>Download XML Sitemap</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sitemap Stats */}
      <section className="py-16 bg-gray-800/30">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {sitemapStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">
                  {typeof stat.value === 'number' ? stat.value : stat.value}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sitemap Table */}
      <section className="py-24">
        <div className="container-custom">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50">
            <div className="p-6 border-b border-gray-700">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <Search className="h-6 w-6 mr-3 text-green-400" />
                All Website Pages
              </h2>
              <p className="text-gray-300 mt-2">
                Complete list of all pages included in the XML sitemap for search engine crawling.
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-800/70">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      URL
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Priority
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Change Frequency
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Last Modified
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {publicPages.map((page, index) => (
                    <tr key={index} className="hover:bg-gray-700/50">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <Globe className="h-4 w-4 text-blue-400 mr-2" />
                          <span className="text-white font-medium">{page.url}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          parseFloat(page.priority) >= 0.9 ? 'bg-green-600/20 text-green-400' :
                          parseFloat(page.priority) >= 0.7 ? 'bg-blue-600/20 text-blue-400' :
                          parseFloat(page.priority) >= 0.5 ? 'bg-orange-600/20 text-orange-400' :
                          'bg-gray-600/20 text-gray-400'
                        }`}>
                          {page.priority}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-300 text-sm">
                        {page.changefreq}
                      </td>
                      <td className="px-6 py-4 text-gray-300 text-sm">
                        {new Date(page.lastmod).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Information */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Search Engine <span className="gradient-text">Optimisation</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              This XML sitemap is optimised for search engine crawling and indexing to improve your website's visibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center text-green-400 mb-4">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Proper Structure
              </h3>
              <p className="text-gray-400 text-sm">
                XML sitemap follows Google's guidelines with proper priority, frequency, and modification dates.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400 mb-4">
                <Search className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                SEO Optimised
              </h3>
              <p className="text-gray-400 text-sm">
                All pages include proper meta tags, structured data, and optimised content for search engines.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center text-purple-400 mb-4">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Regular Updates
              </h3>
              <p className="text-gray-400 text-sm">
                Sitemap is automatically updated when new pages are added or existing pages are modified.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* XML Preview */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              XML Sitemap <span className="gradient-text">Preview</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Preview of the XML sitemap structure that search engines will crawl and index.
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <pre className="text-sm text-gray-300 overflow-x-auto">
              <code>
{`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <url>
    <loc>${window.location.origin}/</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${window.location.origin}/services/wordpress-development</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <!-- Additional ${publicPages.length - 2} public pages... -->
</urlset>`}
              </code>
            </pre>
          </div>

          <div className="text-center mt-8">
            <button
              onClick={downloadSitemap}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 hover-glow"
            >
              <Download className="h-5 w-5" />
              <span>Download Complete XML Sitemap</span>
            </button>
          </div>
        </div>
      </section>

      {/* Instructions */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              How to Submit to <span className="gradient-text">Google Search Console</span>
            </h2>
            
            <div className="space-y-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <h3 className="text-xl font-bold text-white mb-4">Step-by-Step Instructions:</h3>
                <ol className="space-y-4">
                  <li className="flex items-start space-x-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    <div>
                      <strong className="text-white">Download the XML sitemap</strong>
                      <p className="text-gray-300 text-sm mt-1">Click the download button above to save the sitemap.xml file</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    <div>
                      <strong className="text-white">Upload to your website root</strong>
                      <p className="text-gray-300 text-sm mt-1">Place the sitemap.xml file in your website's root directory (e.g., yoursite.com/sitemap.xml)</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    <div>
                      <strong className="text-white">Submit to Google Search Console</strong>
                      <p className="text-gray-300 text-sm mt-1">Go to Google Search Console → Sitemaps → Add new sitemap → Enter "sitemap.xml"</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                    <div>
                      <strong className="text-white">Monitor indexing status</strong>
                      <p className="text-gray-300 text-sm mt-1">Check the sitemap status regularly to ensure all pages are being crawled and indexed</p>
                    </div>
                  </li>
                </ol>
              </div>

              <div className="bg-blue-900/20 border border-blue-500/50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-blue-400 mb-4">Additional SEO Tips:</h3>
                <ul className="space-y-3 text-blue-300">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" />
                    <span>Submit your sitemap to Bing Webmaster Tools as well</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" />
                    <span>Update your robots.txt file to reference the sitemap</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" />
                    <span>Monitor crawl errors and fix any issues promptly</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" />
                    <span>Resubmit the sitemap whenever you add new pages</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default XMLSitemap;