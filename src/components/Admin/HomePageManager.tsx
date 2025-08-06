import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useSupabaseData } from '../../hooks/useSupabaseData';
import { useContentManager, HomePage } from '../../hooks/useContentManager';
import { 
  Save, 
  Home, 
  Plus, 
  Trash2,
  Star,
  TrendingUp,
  Target,
  MessageSquare,
  Globe,
  Clock,
  Zap,
  Users,
  Award,
  Settings,
  Code,
  Shield,
  Search,
  Database
} from 'lucide-react';

const HomePageManager: React.FC = () => {
  const { homePage, saveHomePage } = useContentManager();
  const { servicePages } = useSupabaseData();
  const [formData, setFormData] = useState<HomePage>(homePage || {} as HomePage);
  const [activeSection, setActiveSection] = useState('hero');

  const handleSave = async () => {
    await saveHomePage(formData);
    alert('Homepage settings saved successfully!');
  };

  const handleStatChange = (index: number, field: string, value: string) => {
    const newStats = [...(formData.stats || [])];
    newStats[index] = { ...newStats[index], [field]: value };
    setFormData(prev => ({ ...prev, stats: newStats }));
  };

  const addStat = () => {
    const newStats = [...(formData.stats || []), { number: '', label: '', icon: 'Star' }];
    setFormData(prev => ({ ...prev, stats: newStats }));
  };

  const removeStat = (index: number) => {
    const newStats = (formData.stats || []).filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, stats: newStats }));
  };

  const handleTestimonialChange = (index: number, field: string, value: string | number) => {
    const newTestimonials = [...(formData.testimonials || [])];
    newTestimonials[index] = { ...newTestimonials[index], [field]: value };
    setFormData(prev => ({ ...prev, testimonials: newTestimonials }));
  };

  const addTestimonial = () => {
    const newTestimonials = [...(formData.testimonials || []), { name: '', company: '', content: '', rating: 5 }];
    setFormData(prev => ({ ...prev, testimonials: newTestimonials }));
  };

  const removeTestimonial = (index: number) => {
    const newTestimonials = (formData.testimonials || []).filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, testimonials: newTestimonials }));
  };

  const handleSocialLinkChange = (index: number, field: string, value: string | boolean) => {
    const newSocialLinks = [...(formData.socialLinks || [])];
    newSocialLinks[index] = { ...newSocialLinks[index], [field]: value };
    setFormData(prev => ({ ...prev, socialLinks: newSocialLinks }));
  };

  const addSocialLink = () => {
    const newSocialLinks = [...(formData.socialLinks || []), { platform: '', url: '', enabled: true }];
    setFormData(prev => ({ ...prev, socialLinks: newSocialLinks }));
  };

  const removeSocialLink = (index: number) => {
    const newSocialLinks = (formData.socialLinks || []).filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, socialLinks: newSocialLinks }));
  };

  const handleFeaturedServiceToggle = (serviceSlug: string) => {
    const currentFeatured = formData.services?.featured || [];
    const newFeatured = currentFeatured.includes(serviceSlug)
      ? currentFeatured.filter(slug => slug !== serviceSlug)
      : [...currentFeatured, serviceSlug];
    
    setFormData(prev => ({
      ...prev,
      services: {
        ...prev.services,
        featured: newFeatured
      }
    }));
  };

  const sections = [
    { id: 'hero', name: 'Hero Section', icon: <Home className="h-4 w-4" /> },
    { id: 'stats', name: 'Statistics', icon: <TrendingUp className="h-4 w-4" /> },
    { id: 'services', name: 'Services', icon: <Target className="h-4 w-4" /> },
    { id: 'testimonials', name: 'Testimonials', icon: <MessageSquare className="h-4 w-4" /> },
    { id: 'cta', name: 'Call to Action', icon: <Star className="h-4 w-4" /> },
    { id: 'social', name: 'Social Links', icon: <Globe className="h-4 w-4" /> }
  ];

  const iconOptions = [
    { value: 'Globe', label: 'Globe', icon: <Globe className="h-4 w-4" /> },
    { value: 'Clock', label: 'Clock', icon: <Clock className="h-4 w-4" /> },
    { value: 'Star', label: 'Star', icon: <Star className="h-4 w-4" /> },
    { value: 'Zap', label: 'Zap', icon: <Zap className="h-4 w-4" /> },
    { value: 'Users', label: 'Users', icon: <Users className="h-4 w-4" /> },
    { value: 'Award', label: 'Award', icon: <Award className="h-4 w-4" /> },
    { value: 'Settings', label: 'Settings', icon: <Settings className="h-4 w-4" /> },
    { value: 'Code', label: 'Code', icon: <Code className="h-4 w-4" /> },
    { value: 'Shield', label: 'Shield', icon: <Shield className="h-4 w-4" /> },
    { value: 'Search', label: 'Search', icon: <Search className="h-4 w-4" /> },
    { value: 'Database', label: 'Database', icon: <Database className="h-4 w-4" /> }
  ];

  if (!homePage) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold">Homepage Editor</h3>
        <button
          onClick={handleSave}
          className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors duration-300"
        >
          <Save className="h-4 w-4" />
          <span>Save Changes</span>
        </button>
      </div>

      {/* Section Tabs */}
      <div className="bg-gray-800 rounded-xl border border-gray-700">
        <div className="flex border-b border-gray-700 overflow-x-auto">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`flex items-center space-x-2 px-6 py-4 font-medium transition-colors duration-300 whitespace-nowrap ${
                activeSection === section.id
                  ? 'text-blue-400 border-b-2 border-blue-400'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {section.icon}
              <span>{section.name}</span>
            </button>
          ))}
        </div>

        <div className="p-6">
          {activeSection === 'hero' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Main Title
                </label>
                <input
                  type="text"
                  value={formData.hero?.title || ''}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    hero: { ...prev.hero, title: e.target.value }
                  }))}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  placeholder="Enter main title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Subtitle
                </label>
                <input
                  type="text"
                  value={formData.hero?.subtitle || ''}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    hero: { ...prev.hero, subtitle: e.target.value }
                  }))}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  placeholder="Enter subtitle"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Description
                </label>
                <textarea
                  value={formData.hero?.description || ''}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    hero: { ...prev.hero, description: e.target.value }
                  }))}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  placeholder="Enter hero description"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Primary Button Text
                  </label>
                  <input
                    type="text"
                    value={formData.hero?.primaryButton?.text || ''}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      hero: { 
                        ...prev.hero, 
                        primaryButton: { ...prev.hero?.primaryButton, text: e.target.value }
                      }
                    }))}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    placeholder="Button text"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Primary Button Link
                  </label>
                  <input
                    type="text"
                    value={formData.hero?.primaryButton?.link || ''}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      hero: { 
                        ...prev.hero, 
                        primaryButton: { ...prev.hero?.primaryButton, link: e.target.value }
                      }
                    }))}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    placeholder="/contact"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Secondary Button Text
                  </label>
                  <input
                    type="text"
                    value={formData.hero?.secondaryButton?.text || ''}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      hero: { 
                        ...prev.hero, 
                        secondaryButton: { ...prev.hero?.secondaryButton, text: e.target.value }
                      }
                    }))}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    placeholder="Button text"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Secondary Button Link
                  </label>
                  <input
                    type="text"
                    value={formData.hero?.secondaryButton?.link || ''}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      hero: { 
                        ...prev.hero, 
                        secondaryButton: { ...prev.hero?.secondaryButton, link: e.target.value }
                      }
                    }))}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    placeholder="/portfolio"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === 'stats' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold text-white">Statistics</h4>
                <button
                  onClick={addStat}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300"
                >
                  <Plus className="h-4 w-4" />
                  <span>Add Stat</span>
                </button>
              </div>

              <div className="space-y-4">
                {(formData.stats || []).map((stat, index) => (
                  <div key={index} className="bg-gray-700 rounded-lg p-4 border border-gray-600">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Number
                        </label>
                        <input
                          type="text"
                          value={stat.number}
                          onChange={(e) => handleStatChange(index, 'number', e.target.value)}
                          className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                          placeholder="500+"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Label
                        </label>
                        <input
                          type="text"
                          value={stat.label}
                          onChange={(e) => handleStatChange(index, 'label', e.target.value)}
                          className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                          placeholder="Websites Delivered"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Icon
                        </label>
                        <select
                          value={stat.icon}
                          onChange={(e) => handleStatChange(index, 'icon', e.target.value)}
                          className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded text-white focus:outline-none focus:border-blue-500"
                        >
                          {iconOptions.map(option => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="flex items-end">
                        <button
                          onClick={() => removeStat(index)}
                          className="p-2 text-red-400 hover:text-red-300 hover:bg-red-900/20 rounded transition-colors duration-300"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeSection === 'services' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Services Section Title
                </label>
                <input
                  type="text"
                  value={formData.services?.title || ''}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    services: { ...prev.services, title: e.target.value }
                  }))}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  placeholder="Our Expert Services"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Services Section Description
                </label>
                <textarea
                  value={formData.services?.description || ''}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    services: { ...prev.services, description: e.target.value }
                  }))}
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  placeholder="Services description"
                />
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Featured Services</h4>
                <p className="text-gray-400 text-sm mb-4">Select which services to feature on the homepage</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {servicePages.filter(service => service.enabled).map((service) => (
                    <label key={service.id} className="flex items-center space-x-3 p-3 bg-gray-700 rounded-lg">
                      <input
                        type="checkbox"
                        checked={(formData.services?.featured || []).includes(service.slug)}
                        onChange={() => handleFeaturedServiceToggle(service.slug)}
                        className="rounded border-gray-600 bg-gray-600 text-blue-600 focus:ring-blue-500"
                      />
                      <div>
                        <div className="font-medium text-white">{service.title}</div>
                        <div className="text-gray-400 text-sm">{service.subtitle}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === 'testimonials' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold text-white">Testimonials</h4>
                <button
                  onClick={addTestimonial}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300"
                >
                  <Plus className="h-4 w-4" />
                  <span>Add Testimonial</span>
                </button>
              </div>

              <div className="space-y-4">
                {(formData.testimonials || []).map((testimonial, index) => (
                  <div key={index} className="bg-gray-700 rounded-lg p-4 border border-gray-600">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          value={testimonial.name}
                          onChange={(e) => handleTestimonialChange(index, 'name', e.target.value)}
                          className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                          placeholder="Client name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          value={testimonial.company}
                          onChange={(e) => handleTestimonialChange(index, 'company', e.target.value)}
                          className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                          placeholder="Company name"
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Testimonial Content
                      </label>
                      <textarea
                        value={testimonial.content}
                        onChange={(e) => handleTestimonialChange(index, 'content', e.target.value)}
                        rows={3}
                        className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                        placeholder="Enter testimonial content"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Rating
                        </label>
                        <select
                          value={testimonial.rating}
                          onChange={(e) => handleTestimonialChange(index, 'rating', parseInt(e.target.value))}
                          className="px-3 py-2 bg-gray-600 border border-gray-500 rounded text-white focus:outline-none focus:border-blue-500"
                        >
                          <option value={5}>5 Stars</option>
                          <option value={4}>4 Stars</option>
                          <option value={3}>3 Stars</option>
                          <option value={2}>2 Stars</option>
                          <option value={1}>1 Star</option>
                        </select>
                      </div>
                      <button
                        onClick={() => removeTestimonial(index)}
                        className="p-2 text-red-400 hover:text-red-300 hover:bg-red-900/20 rounded transition-colors duration-300"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeSection === 'cta' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  CTA Title
                </label>
                <input
                  type="text"
                  value={formData.cta?.title || ''}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    cta: { ...prev.cta, title: e.target.value }
                  }))}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  placeholder="Enter CTA title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  CTA Description
                </label>
                <textarea
                  value={formData.cta?.description || ''}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    cta: { ...prev.cta, description: e.target.value }
                  }))}
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  placeholder="Enter CTA description"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Primary Button Text
                  </label>
                  <input
                    type="text"
                    value={formData.cta?.primaryButton?.text || ''}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      cta: { 
                        ...prev.cta, 
                        primaryButton: { ...prev.cta?.primaryButton, text: e.target.value }
                      }
                    }))}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    placeholder="Button text"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Primary Button Link
                  </label>
                  <input
                    type="text"
                    value={formData.cta?.primaryButton?.link || ''}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      cta: { 
                        ...prev.cta, 
                        primaryButton: { ...prev.cta?.primaryButton, link: e.target.value }
                      }
                    }))}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    placeholder="/contact"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Secondary Button Text
                  </label>
                  <input
                    type="text"
                    value={formData.cta?.secondaryButton?.text || ''}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      cta: { 
                        ...prev.cta, 
                        secondaryButton: { ...prev.cta?.secondaryButton, text: e.target.value }
                      }
                    }))}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    placeholder="Button text"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Secondary Button Link
                  </label>
                  <input
                    type="text"
                    value={formData.cta?.secondaryButton?.link || ''}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      cta: { 
                        ...prev.cta, 
                        secondaryButton: { ...prev.cta?.secondaryButton, link: e.target.value }
                      }
                    }))}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    placeholder="/portfolio"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === 'social' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold text-white">Social Media Links</h4>
                <button
                  onClick={addSocialLink}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300"
                >
                  <Plus className="h-4 w-4" />
                  <span>Add Social Link</span>
                </button>
              </div>

              <div className="space-y-4">
                {(formData.socialLinks || []).map((social, index) => (
                  <div key={index} className="bg-gray-700 rounded-lg p-4 border border-gray-600">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Platform
                        </label>
                        <select
                          value={social.platform}
                          onChange={(e) => handleSocialLinkChange(index, 'platform', e.target.value)}
                          className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded text-white focus:outline-none focus:border-blue-500"
                        >
                          <option value="">Select Platform</option>
                          <option value="Facebook">Facebook</option>
                          <option value="Twitter">Twitter</option>
                          <option value="LinkedIn">LinkedIn</option>
                          <option value="Instagram">Instagram</option>
                          <option value="YouTube">YouTube</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          URL
                        </label>
                        <input
                          type="url"
                          value={social.url}
                          onChange={(e) => handleSocialLinkChange(index, 'url', e.target.value)}
                          className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                          placeholder="https://facebook.com/yourpage"
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <label className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            checked={social.enabled}
                            onChange={(e) => handleSocialLinkChange(index, 'enabled', e.target.checked)}
                            className="rounded border-gray-600 bg-gray-600 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="text-gray-300 text-sm">Enabled</span>
                        </label>
                        <button
                          onClick={() => removeSocialLink(index)}
                          className="p-2 text-red-400 hover:text-red-300 hover:bg-red-900/20 rounded transition-colors duration-300"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                {(formData.socialLinks || []).length === 0 && (
                  <div className="text-center py-8 text-gray-400">
                    <Globe className="h-8 w-8 mx-auto mb-2 opacity-50" />
                    <p>No social links added yet.</p>
                    <p className="text-sm">Click "Add Social Link" to create social media links.</p>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePageManager;