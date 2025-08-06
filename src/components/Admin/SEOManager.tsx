import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Search, 
  Image, 
  Code, 
  Settings, 
  Save, 
  Plus, 
  Trash2,
  Eye,
  Edit,
  ChevronDown,
  Facebook,
  Twitter,
  Linkedin,
  BarChart3,
  Shield,
  FileText,
  Palette
} from 'lucide-react';
import { pageRoutes, getPageSEOSettings, savePageSEOSettings, SEOSettings } from '../../utils/seoManager';

const SEOManager: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState('/');
  const [seoSettings, setSeoSettings] = useState<SEOSettings>(getPageSEOSettings('/'));
  const [activeSection, setActiveSection] = useState('basic');
  const [customMetaFields, setCustomMetaFields] = useState<Array<{name?: string; property?: string; content: string}>>([]);

  useEffect(() => {
    const settings = getPageSEOSettings(selectedPage);
    setSeoSettings(settings);
    setCustomMetaFields(settings.customMeta || []);
  }, [selectedPage]);

  const handlePageChange = (path: string) => {
    setSelectedPage(path);
  };

  const handleSettingChange = (key: keyof SEOSettings, value: any) => {
    setSeoSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSave = () => {
    const settingsToSave = {
      ...seoSettings,
      customMeta: customMetaFields
    };
    savePageSEOSettings(selectedPage, settingsToSave);
    alert('SEO settings saved successfully!');
  };

  const addCustomMetaField = () => {
    setCustomMetaFields(prev => [...prev, { name: '', content: '' }]);
  };

  const updateCustomMetaField = (index: number, field: string, value: string) => {
    setCustomMetaFields(prev => 
      prev.map((meta, i) => 
        i === index ? { ...meta, [field]: value } : meta
      )
    );
  };

  const removeCustomMetaField = (index: number) => {
    setCustomMetaFields(prev => prev.filter((_, i) => i !== index));
  };

  const sections = [
    { id: 'basic', name: 'Basic SEO', icon: <Search className="h-4 w-4" /> },
    { id: 'social', name: 'Social Media', icon: <Facebook className="h-4 w-4" /> },
    { id: 'advanced', name: 'Advanced', icon: <Settings className="h-4 w-4" /> },
    { id: 'structured', name: 'Structured Data', icon: <Code className="h-4 w-4" /> },
    { id: 'custom', name: 'Custom Meta', icon: <Plus className="h-4 w-4" /> }
  ];

  const currentPage = pageRoutes.find(route => route.path === selectedPage);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">SEO Management</h2>
        <button
          onClick={handleSave}
          className="flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300"
        >
          <Save className="h-4 w-4" />
          <span>Save Changes</span>
        </button>
      </div>

      {/* Page Selector */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <Globe className="h-5 w-5 mr-2 text-blue-400" />
          Select Page to Edit
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pageRoutes.map((route) => (
            <button
              key={route.path}
              onClick={() => handlePageChange(route.path)}
              className={`p-4 rounded-lg border transition-all duration-300 text-left ${
                selectedPage === route.path
                  ? 'border-blue-500 bg-blue-600/20 text-blue-400'
                  : 'border-gray-600 bg-gray-700 text-gray-300 hover:border-gray-500'
              }`}
            >
              <div className="font-medium">{route.name}</div>
              <div className="text-sm opacity-75">{route.path}</div>
            </button>
          ))}
        </div>
        {currentPage && (
          <div className="mt-4 p-4 bg-blue-900/20 border border-blue-500/50 rounded-lg">
            <p className="text-blue-400 font-medium">Currently editing: {currentPage.name}</p>
            <p className="text-blue-300 text-sm">{currentPage.path}</p>
          </div>
        )}
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
          {activeSection === 'basic' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Page Title
                </label>
                <input
                  type="text"
                  value={seoSettings.title || ''}
                  onChange={(e) => handleSettingChange('title', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  placeholder="Enter page title (recommended: 50-60 characters)"
                />
                <p className="text-xs text-gray-400 mt-1">
                  Length: {seoSettings.title?.length || 0} characters
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Meta Description
                </label>
                <textarea
                  value={seoSettings.description || ''}
                  onChange={(e) => handleSettingChange('description', e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  placeholder="Enter meta description (recommended: 150-160 characters)"
                />
                <p className="text-xs text-gray-400 mt-1">
                  Length: {seoSettings.description?.length || 0} characters
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Keywords
                </label>
                <input
                  type="text"
                  value={seoSettings.keywords || ''}
                  onChange={(e) => handleSettingChange('keywords', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  placeholder="keyword1, keyword2, keyword3"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Canonical URL
                  </label>
                  <input
                    type="url"
                    value={seoSettings.canonical || ''}
                    onChange={(e) => handleSettingChange('canonical', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    placeholder="https://example.com/page"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Robots
                  </label>
                  <select
                    value={seoSettings.robots || 'index, follow'}
                    onChange={(e) => handleSettingChange('robots', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="index, follow">Index, Follow</option>
                    <option value="noindex, follow">No Index, Follow</option>
                    <option value="index, nofollow">Index, No Follow</option>
                    <option value="noindex, nofollow">No Index, No Follow</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Author
                </label>
                <input
                  type="text"
                  value={seoSettings.author || ''}
                  onChange={(e) => handleSettingChange('author', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  placeholder="Author name"
                />
              </div>
            </motion.div>
          )}

          {activeSection === 'social' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* Open Graph */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Facebook className="h-5 w-5 mr-2 text-blue-500" />
                  Open Graph (Facebook, LinkedIn)
                </h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      OG Title
                    </label>
                    <input
                      type="text"
                      value={seoSettings.ogTitle || ''}
                      onChange={(e) => handleSettingChange('ogTitle', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                      placeholder="Leave empty to use page title"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      OG Description
                    </label>
                    <textarea
                      value={seoSettings.ogDescription || ''}
                      onChange={(e) => handleSettingChange('ogDescription', e.target.value)}
                      rows={3}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                      placeholder="Leave empty to use meta description"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        OG Image URL
                      </label>
                      <input
                        type="url"
                        value={seoSettings.ogImage || ''}
                        onChange={(e) => handleSettingChange('ogImage', e.target.value)}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                        placeholder="https://example.com/image.jpg"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        OG Type
                      </label>
                      <select
                        value={seoSettings.ogType || 'website'}
                        onChange={(e) => handleSettingChange('ogType', e.target.value)}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                      >
                        <option value="website">Website</option>
                        <option value="article">Article</option>
                        <option value="product">Product</option>
                        <option value="profile">Profile</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Twitter Cards */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Twitter className="h-5 w-5 mr-2 text-blue-400" />
                  Twitter Cards
                </h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Twitter Card Type
                    </label>
                    <select
                      value={seoSettings.twitterCard || 'summary_large_image'}
                      onChange={(e) => handleSettingChange('twitterCard', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                    >
                      <option value="summary">Summary</option>
                      <option value="summary_large_image">Summary Large Image</option>
                      <option value="app">App</option>
                      <option value="player">Player</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Twitter Title
                    </label>
                    <input
                      type="text"
                      value={seoSettings.twitterTitle || ''}
                      onChange={(e) => handleSettingChange('twitterTitle', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                      placeholder="Leave empty to use page title"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Twitter Description
                    </label>
                    <textarea
                      value={seoSettings.twitterDescription || ''}
                      onChange={(e) => handleSettingChange('twitterDescription', e.target.value)}
                      rows={3}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                      placeholder="Leave empty to use meta description"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Twitter Image URL
                    </label>
                    <input
                      type="url"
                      value={seoSettings.twitterImage || ''}
                      onChange={(e) => handleSettingChange('twitterImage', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                      placeholder="https://example.com/twitter-image.jpg"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === 'advanced' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Viewport
                  </label>
                  <input
                    type="text"
                    value={seoSettings.viewport || 'width=device-width, initial-scale=1.0'}
                    onChange={(e) => handleSettingChange('viewport', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Theme Color
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type="color"
                      value={seoSettings.themeColor || '#3b82f6'}
                      onChange={(e) => handleSettingChange('themeColor', e.target.value)}
                      className="w-16 h-12 bg-gray-700 border border-gray-600 rounded-lg"
                    />
                    <input
                      type="text"
                      value={seoSettings.themeColor || '#3b82f6'}
                      onChange={(e) => handleSettingChange('themeColor', e.target.value)}
                      className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                      placeholder="#3b82f6"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Additional Head Tags
                </label>
                <textarea
                  value={seoSettings.customMeta?.map(meta => 
                    meta.name ? `<meta name="${meta.name}" content="${meta.content}">` :
                    meta.property ? `<meta property="${meta.property}" content="${meta.content}">` : ''
                  ).join('\n') || ''}
                  onChange={(e) => {
                    // Parse the textarea content back to customMeta array
                    const lines = e.target.value.split('\n').filter(line => line.trim());
                    const parsedMeta = lines.map(line => {
                      const nameMatch = line.match(/name="([^"]*)".*content="([^"]*)"/);
                      const propertyMatch = line.match(/property="([^"]*)".*content="([^"]*)"/);
                      
                      if (nameMatch) {
                        return { name: nameMatch[1], content: nameMatch[2] };
                      } else if (propertyMatch) {
                        return { property: propertyMatch[1], content: propertyMatch[2] };
                      }
                      return { name: '', content: line };
                    });
                    setCustomMetaFields(parsedMeta);
                  }}
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 font-mono text-sm"
                  placeholder='<meta name="custom-tag" content="custom-value">'
                />
              </div>
            </motion.div>
          )}

          {activeSection === 'structured' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Structured Data (JSON-LD)
                </label>
                <textarea
                  value={JSON.stringify(seoSettings.structuredData || {}, null, 2)}
                  onChange={(e) => {
                    try {
                      const parsed = JSON.parse(e.target.value);
                      handleSettingChange('structuredData', parsed);
                    } catch (error) {
                      // Invalid JSON, don't update
                    }
                  }}
                  rows={20}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 font-mono text-sm"
                  placeholder="Enter valid JSON-LD structured data"
                />
                <p className="text-xs text-gray-400 mt-1">
                  Enter valid JSON-LD structured data for rich snippets and search engine understanding.
                </p>
              </div>

              <div className="bg-blue-900/20 border border-blue-500/50 rounded-lg p-4">
                <h5 className="font-medium text-blue-400 mb-2">Common Schema Types:</h5>
                <ul className="text-blue-300 text-sm space-y-1">
                  <li>• Organization - For business information</li>
                  <li>• Article - For blog posts and articles</li>
                  <li>• Product - For e-commerce products</li>
                  <li>• Service - For service pages</li>
                  <li>• LocalBusiness - For local businesses</li>
                  <li>• FAQ - For frequently asked questions</li>
                </ul>
              </div>
            </motion.div>
          )}

          {activeSection === 'custom' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold text-white">Custom Meta Tags</h4>
                <button
                  onClick={addCustomMetaField}
                  className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors duration-300"
                >
                  <Plus className="h-4 w-4" />
                  <span>Add Meta Tag</span>
                </button>
              </div>

              <div className="space-y-4">
                {customMetaFields.map((meta, index) => (
                  <div key={index} className="bg-gray-700 rounded-lg p-4 border border-gray-600">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Type
                        </label>
                        <select
                          value={meta.name ? 'name' : 'property'}
                          onChange={(e) => {
                            const newMeta = { ...meta };
                            if (e.target.value === 'name') {
                              newMeta.name = meta.property || '';
                              delete newMeta.property;
                            } else {
                              newMeta.property = meta.name || '';
                              delete newMeta.name;
                            }
                            updateCustomMetaField(index, e.target.value === 'name' ? 'name' : 'property', newMeta.name || newMeta.property || '');
                          }}
                          className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded text-white focus:outline-none focus:border-blue-500"
                        >
                          <option value="name">name</option>
                          <option value="property">property</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          {meta.name ? 'Name' : 'Property'}
                        </label>
                        <input
                          type="text"
                          value={meta.name || meta.property || ''}
                          onChange={(e) => updateCustomMetaField(index, meta.name ? 'name' : 'property', e.target.value)}
                          className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                          placeholder="tag-name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Content
                        </label>
                        <div className="flex space-x-2">
                          <input
                            type="text"
                            value={meta.content}
                            onChange={(e) => updateCustomMetaField(index, 'content', e.target.value)}
                            className="flex-1 px-3 py-2 bg-gray-600 border border-gray-500 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                            placeholder="tag content"
                          />
                          <button
                            onClick={() => removeCustomMetaField(index)}
                            className="p-2 text-red-400 hover:text-red-300 hover:bg-red-900/20 rounded transition-colors duration-300"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {customMetaFields.length === 0 && (
                  <div className="text-center py-8 text-gray-400">
                    <Plus className="h-8 w-8 mx-auto mb-2 opacity-50" />
                    <p>No custom meta tags added yet.</p>
                    <p className="text-sm">Click "Add Meta Tag" to create custom meta tags.</p>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* SEO Preview */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <Eye className="h-5 w-5 mr-2 text-green-400" />
          SEO Preview
        </h3>
        
        {/* Google Search Preview */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-white mb-3">Google Search Result</h4>
          <div className="bg-white rounded-lg p-4 max-w-2xl">
            <div className="text-blue-600 text-lg hover:underline cursor-pointer">
              {seoSettings.title || 'Page Title'}
            </div>
            <div className="text-green-700 text-sm">
              {window.location.origin}{selectedPage}
            </div>
            <div className="text-gray-600 text-sm mt-1">
              {seoSettings.description || 'Meta description will appear here...'}
            </div>
          </div>
        </div>

        {/* Social Media Preview */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Social Media Preview</h4>
          <div className="bg-gray-700 rounded-lg p-4 max-w-md border border-gray-600">
            {seoSettings.ogImage && (
              <div className="bg-gray-600 h-32 rounded mb-3 flex items-center justify-center">
                <Image className="h-8 w-8 text-gray-400" />
              </div>
            )}
            <div className="font-medium text-white">
              {seoSettings.ogTitle || seoSettings.title || 'Page Title'}
            </div>
            <div className="text-gray-300 text-sm mt-1">
              {seoSettings.ogDescription || seoSettings.description || 'Description will appear here...'}
            </div>
            <div className="text-gray-400 text-xs mt-2">
              {window.location.hostname}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEOManager;