import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useSupabaseData } from '../../hooks/useSupabaseData';
import { ServicePage } from '../../lib/supabase';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  EyeOff, 
  Save, 
  X,
  Settings,
  Globe,
  Star,
  ArrowUp,
  ArrowDown,
  Copy
} from 'lucide-react';

const ServicePageManager: React.FC = () => {
  const { servicePages, createServicePage, updateServicePage, deleteServicePage } = useSupabaseData();
  const [isEditing, setIsEditing] = useState(false);
  const [editingService, setEditingService] = useState<ServicePage | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const [formData, setFormData] = useState<Partial<ServicePage>>({
    slug: '',
    title: '',
    subtitle: '',
    description: '',
    hero_image: '',
    sections: [],
    enabled: true,
    featured: false,
    display_order: 0
  });

  const handleEdit = (service: ServicePage) => {
    setEditingService(service);
    setFormData(service);
    setIsEditing(true);
  };

  const handleCreate = () => {
    setFormData({
      slug: '',
      title: '',
      subtitle: '',
      description: '',
      hero_image: '',
      sections: [
        {
          id: 'hero',
          type: 'hero',
          title: 'Hero Section',
          content: {
            subtitle: '',
            description: '',
            features: []
          },
          enabled: true,
          display_order: 1
        }
      ],
      enabled: true,
      featured: false,
      display_order: servicePages.length + 1
    });
    setIsCreating(true);
  };

  const handleDuplicate = (service: ServicePage) => {
    const duplicatedService = {
      ...service,
      title: `${service.title} (Copy)`,
      slug: `${service.slug}-copy`,
      display_order: servicePages.length + 1,
      featured: false
    };
    const { id, created_at, updated_at, ...serviceWithoutId } = duplicatedService;
    createServicePage(serviceWithoutId);
  };

  const handleSave = async () => {
    if (isCreating) {
      await createServicePage(formData as Omit<ServicePage, 'id' | 'created_at' | 'updated_at'>);
      setIsCreating(false);
    } else if (editingService) {
      await updateServicePage(editingService.id, formData);
      setIsEditing(false);
      setEditingService(null);
    }
    setFormData({});
  };

  const handleCancel = () => {
    setIsEditing(false);
    setIsCreating(false);
    setEditingService(null);
    setFormData({});
  };

  const handleToggleEnabled = async (id: string, enabled: boolean) => {
    await updateServicePage(id, { enabled });
  };

  const handleToggleFeatured = async (id: string, featured: boolean) => {
    await updateServicePage(id, { featured });
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this service page? This action cannot be undone.')) {
      await deleteServicePage(id);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const handleFeatureChange = (index: number, value: string) => {
    const newFeatures = [...(formData.sections?.[0]?.content?.features || [])];
    newFeatures[index] = value;
    setFormData(prev => ({
      ...prev,
      sections: [{
        ...prev.sections?.[0],
        content: {
          ...prev.sections?.[0]?.content,
          features: newFeatures
        }
      }]
    }));
  };

  const addFeature = () => {
    const newFeatures = [...(formData.sections?.[0]?.content?.features || []), ''];
    setFormData(prev => ({
      ...prev,
      sections: [{
        ...prev.sections?.[0],
        content: {
          ...prev.sections?.[0]?.content,
          features: newFeatures
        }
      }]
    }));
  };

  const removeFeature = (index: number) => {
    const newFeatures = (formData.sections?.[0]?.content?.features || []).filter((_: any, i: number) => i !== index);
    setFormData(prev => ({
      ...prev,
      sections: [{
        ...prev.sections?.[0],
        content: {
          ...prev.sections?.[0]?.content,
          features: newFeatures
        }
      }]
    }));
  };

  if (isEditing || isCreating) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold">
            {isCreating ? 'Create New Service Page' : 'Edit Service Page'}
          </h3>
          <div className="flex space-x-3">
            <button
              onClick={handleSave}
              className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors duration-300"
            >
              <Save className="h-4 w-4" />
              <span>Save</span>
            </button>
            <button
              onClick={handleCancel}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg transition-colors duration-300"
            >
              <X className="h-4 w-4" />
              <span>Cancel</span>
            </button>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Service Title
              </label>
              <input
                type="text"
                value={formData.title || ''}
                onChange={(e) => {
                  const title = e.target.value;
                  setFormData(prev => ({ 
                    ...prev, 
                    title,
                    slug: generateSlug(title)
                  }));
                }}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                placeholder="Enter service title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                URL Slug
              </label>
              <input
                type="text"
                value={formData.slug || ''}
                onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                placeholder="service-url-slug"
              />
              <p className="text-xs text-gray-400 mt-1">
                URL: /services/{formData.slug}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Subtitle
              </label>
              <input
                type="text"
                value={formData.subtitle || ''}
                onChange={(e) => setFormData(prev => ({ ...prev, subtitle: e.target.value }))}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                placeholder="Short service description"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Display Order
              </label>
              <input
                type="number"
                value={formData.display_order || 0}
                onChange={(e) => setFormData(prev => ({ ...prev, display_order: parseInt(e.target.value) }))}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                placeholder="Display order"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Description
            </label>
            <textarea
              value={formData.description || ''}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              rows={4}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              placeholder="Enter detailed service description"
            />
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Hero Image Reference
            </label>
            <input
              type="text"
              value={formData.hero_image || ''}
              onChange={(e) => setFormData(prev => ({ ...prev, hero_image: e.target.value }))}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              placeholder="hero-image-name"
            />
          </div>

          {/* Hero Section Content */}
          <div className="mt-6 bg-gray-700 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-white mb-4">Hero Section Content</h4>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Hero Subtitle
                </label>
                <input
                  type="text"
                  value={formData.sections?.[0]?.content?.subtitle || ''}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    sections: [{
                      ...prev.sections?.[0],
                      content: {
                        ...prev.sections?.[0]?.content,
                        subtitle: e.target.value
                      }
                    }]
                  }))}
                  className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  placeholder="Hero subtitle"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Hero Description
                </label>
                <textarea
                  value={formData.sections?.[0]?.content?.description || ''}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    sections: [{
                      ...prev.sections?.[0],
                      content: {
                        ...prev.sections?.[0]?.content,
                        description: e.target.value
                      }
                    }]
                  }))}
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  placeholder="Hero description"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Key Features
                </label>
                <div className="space-y-2">
                  {(formData.sections?.[0]?.content?.features || []).map((feature: string, index: number) => (
                    <div key={index} className="flex space-x-2">
                      <input
                        type="text"
                        value={feature}
                        onChange={(e) => handleFeatureChange(index, e.target.value)}
                        className="flex-1 px-4 py-2 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                        placeholder="Feature description"
                      />
                      <button
                        onClick={() => removeFeature(index)}
                        className="p-2 text-red-400 hover:text-red-300"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                  <button
                    onClick={addFeature}
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Add Feature</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.enabled || false}
                onChange={(e) => setFormData(prev => ({ ...prev, enabled: e.target.checked }))}
                className="rounded border-gray-600 bg-gray-700 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-gray-300">Enable this service page</span>
            </label>

            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.featured || false}
                onChange={(e) => setFormData(prev => ({ ...prev, featured: e.target.checked }))}
                className="rounded border-gray-600 bg-gray-700 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-gray-300">Feature on homepage</span>
            </label>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold">Service Pages</h3>
        <button
          onClick={handleCreate}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300"
        >
          <Plus className="h-4 w-4" />
          <span>Add Service Page</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicePages
          .sort((a, b) => a.display_order - b.display_order)
          .map((service) => (
          <div
            key={service.id}
            className={`bg-gray-800 rounded-xl p-6 border border-gray-700 ${
              !service.enabled ? 'opacity-50' : ''
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h4 className="font-bold text-white">{service.title}</h4>
                  {service.featured && (
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  )}
                </div>
                <p className="text-blue-400 text-sm mb-2">{service.subtitle}</p>
                <p className="text-gray-400 text-xs">/services/{service.slug}</p>
              </div>
              <div className="flex items-center space-x-1">
                <button
                  onClick={() => handleToggleEnabled(service.id, !service.enabled)}
                  className={`p-1 rounded ${
                    service.enabled ? 'text-green-400 hover:text-green-300' : 'text-gray-500 hover:text-gray-400'
                  }`}
                  title={service.enabled ? 'Disable service' : 'Enable service'}
                >
                  {service.enabled ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                </button>
                <button
                  onClick={() => handleToggleFeatured(service.id, !service.featured)}
                  className={`p-1 rounded ${
                    service.featured ? 'text-yellow-400 hover:text-yellow-300' : 'text-gray-500 hover:text-gray-400'
                  }`}
                  title={service.featured ? 'Remove from featured' : 'Add to featured'}
                >
                  <Star className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleDuplicate(service)}
                  className="p-1 text-purple-400 hover:text-purple-300"
                  title="Duplicate service"
                >
                  <Copy className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleEdit(service)}
                  className="p-1 text-blue-400 hover:text-blue-300"
                  title="Edit service"
                >
                  <Edit className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleDelete(service.id)}
                  className="p-1 text-red-400 hover:text-red-300"
                  title="Delete service"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>

            <p className="text-gray-300 text-sm mb-4 line-clamp-3">
              {service.description}
            </p>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Sections:</span>
                <span className="text-gray-300">{service.sections.length}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Order:</span>
                <span className="text-gray-300">#{service.display_order}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Status:</span>
                <span className={`text-sm ${service.enabled ? 'text-green-400' : 'text-red-400'}`}>
                  {service.enabled ? 'Enabled' : 'Disabled'}
                </span>
              </div>
            </div>
          </div>
        ))}

        {servicePages.length === 0 && (
          <div className="col-span-full text-center py-12 text-gray-400">
            <Settings className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p className="text-lg mb-2">No service pages yet</p>
            <p className="text-sm mb-4">Create your first service page</p>
            <button
              onClick={handleCreate}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300"
            >
              <Plus className="h-4 w-4" />
              <span>Add First Service</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicePageManager;