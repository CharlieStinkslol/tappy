import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useSEO } from './utils/seoManager';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import WebsiteMigrations from './pages/WebsiteMigrations';
import WordPressDevelopment from './pages/WordPressDevelopment';
import WebsiteMaintenance from './pages/WebsiteMaintenance';
import SpeedOptimization from './pages/SpeedOptimization';
import SecurityServices from './pages/SecurityServices';
import Sitemap from './pages/Sitemap';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import CaseStudies from './pages/CaseStudies';
import Blog from './pages/Blog';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Cookies from './pages/Cookies';
import Admin from './pages/Admin';
import BlogManagement from './pages/BlogManagement';
import WordPressHosting from './pages/WordPressHosting';
import WebsiteRedesign from './pages/WebsiteRedesign';
import EcommerceDevelopment from './pages/EcommerceDevelopment';
import LocalSEO from './pages/LocalSEO';
import WebsiteAudits from './pages/WebsiteAudits';
import XMLSitemap from './pages/XMLSitemap';
import WordPressMigrationServices from './pages/WordPressMigrationServices';
import WordPressSupport from './pages/WordPressSupport';
import WebsiteAccessibility from './pages/WebsiteAccessibility';
import WordPressBackupServices from './pages/WordPressBackupServices';
import WebsiteDevelopment from './pages/WebsiteDevelopment';
import ManagedWebsiteHosting from './pages/ManagedWebsiteHosting';
import AllServices from './pages/AllServices';

// Component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Component to handle SEO for each route
function SEOHandler() {
  const { pathname } = useLocation();
  useSEO(pathname);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <SEOHandler />
      <div className="min-h-screen bg-gray-900">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/services/website-migrations" element={<WebsiteMigrations />} />
            <Route path="/services/wordpress-development" element={<WordPressDevelopment />} />
            <Route path="/services/website-maintenance" element={<WebsiteMaintenance />} />
            <Route path="/services/speed-optimization" element={<SpeedOptimization />} />
            <Route path="/services/security-services" element={<SecurityServices />} />
            <Route path="/services/wordpress-hosting" element={<WordPressHosting />} />
            <Route path="/services/website-redesign" element={<WebsiteRedesign />} />
            <Route path="/services/ecommerce-development" element={<EcommerceDevelopment />} />
            <Route path="/services/local-seo" element={<LocalSEO />} />
            <Route path="/services/website-audits" element={<WebsiteAudits />} />
            <Route path="/services/wordpress-migration-services" element={<WordPressMigrationServices />} />
            <Route path="/services/wordpress-support" element={<WordPressSupport />} />
            <Route path="/services/website-accessibility" element={<WebsiteAccessibility />} />
            <Route path="/services/wordpress-backup-services" element={<WordPressBackupServices />} />
            <Route path="/services/website-development" element={<WebsiteDevelopment />} />
            <Route path="/services/managed-website-hosting" element={<ManagedWebsiteHosting />} />
            <Route path="/services" element={<AllServices />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/xml-sitemap" element={<XMLSitemap />} />
            <Route path="/blog-management" element={<BlogManagement />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;